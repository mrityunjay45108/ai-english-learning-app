-- CreateEnum
CREATE TYPE "LessonStatus" AS ENUM ('DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('TEXT', 'AUDIO', 'VIDEO', 'IMAGE', 'EXERCISE', 'QUIZ');

-- CreateEnum
CREATE TYPE "DifficultyLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateTable
CREATE TABLE "lesson_contents" (
    "id" TEXT NOT NULL,
    "lesson_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "LessonStatus" NOT NULL DEFAULT 'DRAFT',
    "contentType" "ContentType" NOT NULL DEFAULT 'TEXT',
    "difficulty" "DifficultyLevel" NOT NULL DEFAULT 'BEGINNER',
    "content" JSONB,
    "metadata" JSONB,
    "version" INTEGER NOT NULL DEFAULT 1,
    "previous_version_id" TEXT,
    "published_at" TIMESTAMP(3),
    "reviewed_by" TEXT,
    "reviewed_at" TIMESTAMP(3),
    "created_by" TEXT,
    "updated_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lesson_contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lesson_sections" (
    "id" TEXT NOT NULL,
    "lesson_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "order_index" INTEGER NOT NULL,
    "content" JSONB,
    "type" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lesson_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_assets" (
    "id" TEXT NOT NULL,
    "lesson_id" TEXT NOT NULL,
    "section_id" TEXT,
    "type" "ContentType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "s3_key" TEXT NOT NULL,
    "bucket" TEXT NOT NULL DEFAULT 'english-learning-content',
    "url" TEXT,
    "file_size" INTEGER,
    "mime_type" TEXT,
    "duration" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "is_processed" BOOLEAN NOT NULL DEFAULT false,
    "processed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "content_assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT DEFAULT '#6366f1',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "content_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lesson_content_tags" (
    "lesson_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lesson_content_tags_pkey" PRIMARY KEY ("lesson_id","tag_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lesson_contents_lesson_id_key" ON "lesson_contents"("lesson_id");

-- CreateIndex
CREATE INDEX "lesson_contents_lesson_id_idx" ON "lesson_contents"("lesson_id");

-- CreateIndex
CREATE INDEX "lesson_contents_status_idx" ON "lesson_contents"("status");

-- CreateIndex
CREATE INDEX "lesson_contents_contentType_idx" ON "lesson_contents"("contentType");

-- CreateIndex
CREATE INDEX "lesson_contents_created_by_idx" ON "lesson_contents"("created_by");

-- CreateIndex
CREATE INDEX "lesson_contents_published_at_idx" ON "lesson_contents"("published_at");

-- CreateIndex
CREATE INDEX "lesson_sections_lesson_id_idx" ON "lesson_sections"("lesson_id");

-- CreateIndex
CREATE INDEX "lesson_sections_order_index_idx" ON "lesson_sections"("order_index");

-- CreateIndex
CREATE UNIQUE INDEX "lesson_sections_lesson_id_order_index_key" ON "lesson_sections"("lesson_id", "order_index");

-- CreateIndex
CREATE INDEX "content_assets_lesson_id_idx" ON "content_assets"("lesson_id");

-- CreateIndex
CREATE INDEX "content_assets_section_id_idx" ON "content_assets"("section_id");

-- CreateIndex
CREATE INDEX "content_assets_type_idx" ON "content_assets"("type");

-- CreateIndex
CREATE INDEX "content_assets_s3_key_idx" ON "content_assets"("s3_key");

-- CreateIndex
CREATE UNIQUE INDEX "content_tags_name_key" ON "content_tags"("name");

-- CreateIndex
CREATE INDEX "content_tags_name_idx" ON "content_tags"("name");

-- AddForeignKey
ALTER TABLE "lesson_contents" ADD CONSTRAINT "lesson_contents_previous_version_id_fkey" FOREIGN KEY ("previous_version_id") REFERENCES "lesson_contents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson_sections" ADD CONSTRAINT "lesson_sections_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson_contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_assets" ADD CONSTRAINT "content_assets_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson_contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson_content_tags" ADD CONSTRAINT "lesson_content_tags_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson_contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson_content_tags" ADD CONSTRAINT "lesson_content_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "content_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
