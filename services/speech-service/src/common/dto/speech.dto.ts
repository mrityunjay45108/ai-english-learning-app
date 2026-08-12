import { IsString, IsOptional, IsUUID, IsNumber, Min, Max } from 'class-validator';

export class UploadAudioDto {
  @IsString()
  @IsOptional()
  language?: string = 'en-US';

  @IsString()
  @IsOptional()
  purpose?: string;

  @IsString()
  @IsOptional()
  referenceText?: string;
}

export class GenerateSpeechDto {
  @IsString()
  text: string;

  @IsString()
  @IsOptional()
  voice?: string;

  @IsString()
  @IsOptional()
  language?: string = 'en-US';

  @IsNumber()
  @IsOptional()
  @Min(0.5)
  @Max(2.0)
  speed?: number = 1.0;
}