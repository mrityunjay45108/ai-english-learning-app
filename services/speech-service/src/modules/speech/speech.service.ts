import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { StorageService } from '../storage/storage.service';
import { STTService } from '../stt/stt.service';
import { TTSService } from '../tts/tts.service';
import { UploadAudioDto, GenerateSpeechDto } from '../../common/dto/speech.dto';

@Injectable()
export class SpeechService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly storage: StorageService,
    private readonly stt: STTService,
    private readonly tts: TTSService,
  ) {}

  async uploadAudio(userId: string, file: any, dto: UploadAudioDto) {
    const fileKey = await this.storage.uploadFile(file, userId);

    const job = await this.prisma.speechJob.create({
      data: {
        userId,
        type: 'STT',
        status: 'PENDING',
        fileKey,
        fileSize: file?.size || 1024,
        fileFormat: file?.mimetype || 'audio/mp3',
        language: dto.language || 'en-US',
      },
    });

    await this.prisma.audioMetadata.create({
      data: {
        userId,
        speechJobId: job.id,
        fileKey,
        fileName: file?.originalname || 'audio.mp3',
        fileSize: file?.size || 1024,
        fileFormat: file?.mimetype || 'audio/mp3',
        sampleRate: 16000,
        audioDuration: 3.5,
        metadata: { purpose: dto.purpose, referenceText: dto.referenceText },
      },
    });

    this.processSTTJob(job.id);
    return job;
  }

  async processSTTJob(jobId: string) {
    try {
      await this.prisma.speechJob.update({
        where: { id: jobId },
        data: { status: 'PROCESSING' },
      });

      const job = await this.prisma.speechJob.findUnique({ where: { id: jobId } });
      if (!job) return;

      const audioBuffer = await this.storage.getFile(job.fileKey || '');
      const result = await this.stt.transcribe(audioBuffer, job.language);

      await this.prisma.speechJob.update({
        where: { id: jobId },
        data: {
          status: 'COMPLETED',
          transcript: result.text,
          confidence: result.confidence,
          wordTimings: result.wordTimings,
          provider: result.provider,
          completedAt: new Date(),
        },
      });

      await this.redis.setJson(`speech:stt:${jobId}`, {
        transcript: result.text,
        confidence: result.confidence,
      }, 3600);
    } catch (error) {
      await this.prisma.speechJob.update({
        where: { id: jobId },
        data: { status: 'FAILED', errorMessage: error.message },
      });
    }
  }

  async getTranscription(jobId: string, userId: string) {
    const cached = await this.redis.getJson(`speech:stt:${jobId}`);
    if (cached) return cached;

    const job = await this.prisma.speechJob.findUnique({ where: { id: jobId } });
    if (!job) throw new NotFoundException('Job not found');
    if (job.userId !== userId) throw new BadRequestException('Unauthorized');

    return {
      jobId: job.id,
      status: job.status,
      transcript: job.transcript,
      confidence: job.confidence,
      errorMessage: job.errorMessage,
      completedAt: job.completedAt,
    };
  }

  async generateSpeech(userId: string, dto: GenerateSpeechDto) {
    const job = await this.prisma.speechJob.create({
      data: {
        userId,
        type: 'TTS',
        status: 'PENDING',
        text: dto.text,
        voice: dto.voice || 'en-US-Female',
        language: dto.language || 'en-US',
      },
    });

    this.processTTSJob(job.id, userId);
    return job;
  }

  async processTTSJob(jobId: string, userId: string) {
    try {
      await this.prisma.speechJob.update({ where: { id: jobId }, data: { status: 'PROCESSING' } });
      const job = await this.prisma.speechJob.findUnique({ where: { id: jobId } });
      if (!job) return;

      const result = await this.tts.synthesize(job.text || '');
      const outputKey = `speech/${userId}/${jobId}.mp3`;

      await this.prisma.speechJob.update({
        where: { id: jobId },
        data: {
          status: 'COMPLETED',
          outputKey,
          provider: result.provider,
          audioDuration: result.duration,
          completedAt: new Date(),
        },
      });
    } catch (error) {
      await this.prisma.speechJob.update({
        where: { id: jobId },
        data: { status: 'FAILED', errorMessage: error.message },
      });
    }
  }

  async getSpeechAudio(jobId: string, userId: string) {
    const job = await this.prisma.speechJob.findUnique({ where: { id: jobId } });
    if (!job) throw new NotFoundException('Job not found');
    if (job.userId !== userId) throw new BadRequestException('Unauthorized');

    const audioUrl = await this.storage.getPresignedUrl(job.outputKey || 'demo.mp3');
    return { audioUrl, job };
  }

  async getUserJobs(userId: string, type?: string, status?: string) {
    const where: any = { userId };
    if (type) where.type = type;
    if (status) where.status = status;
    return this.prisma.speechJob.findMany({ where, orderBy: { createdAt: 'desc' }, take: 50 });
  }

  async getJobStatus(jobId: string, userId: string) {
    const job = await this.prisma.speechJob.findUnique({ where: { id: jobId } });
    if (!job) throw new NotFoundException('Job not found');
    if (job.userId !== userId) throw new BadRequestException('Unauthorized');
    return {
      id: job.id,
      type: job.type,
      status: job.status,
      errorMessage: job.errorMessage,
      createdAt: job.createdAt,
      completedAt: job.completedAt,
    };
  }
}