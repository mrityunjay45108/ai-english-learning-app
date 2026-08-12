-- CreateEnum
CREATE TYPE "SpeechJobStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "SpeechJobType" AS ENUM ('STT', 'TTS', 'PRONUNCIATION');

-- CreateTable
CREATE TABLE "speech_jobs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "SpeechJobType" NOT NULL,
    "status" "SpeechJobStatus" NOT NULL DEFAULT 'PENDING',
    "file_key" TEXT,
    "file_size" INTEGER,
    "file_format" TEXT,
    "audio_duration" DOUBLE PRECISION,
    "sample_rate" INTEGER,
    "language" TEXT NOT NULL DEFAULT 'en-US',
    "provider" TEXT,
    "transcript" TEXT,
    "confidence" DOUBLE PRECISION,
    "word_timings" JSONB,
    "text" TEXT,
    "voice" TEXT,
    "output_key" TEXT,
    "pronunciation_score" DOUBLE PRECISION,
    "error_message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "completed_at" TIMESTAMP(3),

    CONSTRAINT "speech_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audio_metadata" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "speech_job_id" TEXT,
    "file_key" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "file_size" INTEGER NOT NULL,
    "file_format" TEXT NOT NULL,
    "sample_rate" INTEGER NOT NULL,
    "audio_duration" DOUBLE PRECISION NOT NULL,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audio_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "speech_jobs_user_id_idx" ON "speech_jobs"("user_id");

-- CreateIndex
CREATE INDEX "speech_jobs_type_idx" ON "speech_jobs"("type");

-- CreateIndex
CREATE INDEX "speech_jobs_status_idx" ON "speech_jobs"("status");

-- CreateIndex
CREATE INDEX "audio_metadata_user_id_idx" ON "audio_metadata"("user_id");

-- CreateIndex
CREATE INDEX "audio_metadata_file_key_idx" ON "audio_metadata"("file_key");

-- AddForeignKey
ALTER TABLE "audio_metadata" ADD CONSTRAINT "audio_metadata_speech_job_id_fkey" FOREIGN KEY ("speech_job_id") REFERENCES "speech_jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
