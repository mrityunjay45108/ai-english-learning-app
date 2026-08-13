import { Injectable } from "@nestjs/common";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

@Injectable()
export class StorageService {
  private s3Client: S3Client;
  private bucketName: string;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.B2_REGION || "us-east-005",
      endpoint: process.env.B2_ENDPOINT ? `https://${process.env.B2_ENDPOINT}` : "https://s3.us-east-005.backblazeb2.com",
      credentials: {
        accessKeyId: process.env.B2_KEY_ID || "005ecd733cf9b060000000003",
        secretAccessKey: process.env.B2_APPLICATION_KEY || "K005VYyIq00D2rbn0MgUw6c2HxBfwy4",
      },
    });
    this.bucketName = process.env.B2_BUCKET_NAME || "english-learning-audio";
  }

  async uploadFile(key: string, file: Buffer, contentType: string) {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: file,
      ContentType: contentType,
    });
    await this.s3Client.send(command);
    return `https://${this.bucketName}.${process.env.B2_ENDPOINT || "s3.us-east-005.backblazeb2.com"}/${key}`;
  }

  async getSignedUrl(key: string, expiresIn = 3600) {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });
    return await getSignedUrl(this.s3Client, command, { expiresIn });
  }
}
