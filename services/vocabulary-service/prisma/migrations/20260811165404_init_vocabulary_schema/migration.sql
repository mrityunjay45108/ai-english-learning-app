-- CreateEnum
CREATE TYPE "WordDifficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT');

-- CreateEnum
CREATE TYPE "WordStatus" AS ENUM ('ACTIVE', 'ARCHIVED', 'PENDING');

-- CreateEnum
CREATE TYPE "UserWordStatus" AS ENUM ('NOT_STARTED', 'LEARNING', 'REVIEWING', 'LEARNED');

-- CreateEnum
CREATE TYPE "PartOfSpeech" AS ENUM ('NOUN', 'VERB', 'ADJECTIVE', 'ADVERB', 'PRONOUN', 'PREPOSITION', 'CONJUNCTION', 'INTERJECTION');

-- CreateTable
CREATE TABLE "vocabulary_words" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "pronunciation" TEXT,
    "difficulty" "WordDifficulty" NOT NULL DEFAULT 'BEGINNER',
    "category" TEXT,
    "status" "WordStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vocabulary_words_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vocabulary_meanings" (
    "id" TEXT NOT NULL,
    "word_id" TEXT NOT NULL,
    "part_of_speech" "PartOfSpeech" NOT NULL,
    "meaning" TEXT NOT NULL,
    "meaning_hindi" TEXT,
    "example_sentence" TEXT,
    "synonyms" JSONB,
    "antonyms" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vocabulary_meanings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_vocabulary" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "word_id" TEXT NOT NULL,
    "status" "UserWordStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "confidence" INTEGER NOT NULL DEFAULT 0,
    "is_favorite" BOOLEAN NOT NULL DEFAULT false,
    "review_count" INTEGER NOT NULL DEFAULT 0,
    "correct_count" INTEGER NOT NULL DEFAULT 0,
    "wrong_count" INTEGER NOT NULL DEFAULT 0,
    "last_reviewed" TIMESTAMP(3),
    "next_review" TIMESTAMP(3),
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_vocabulary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vocabulary_words_word_key" ON "vocabulary_words"("word");

-- CreateIndex
CREATE INDEX "vocabulary_words_word_idx" ON "vocabulary_words"("word");

-- CreateIndex
CREATE INDEX "vocabulary_words_difficulty_idx" ON "vocabulary_words"("difficulty");

-- CreateIndex
CREATE INDEX "vocabulary_words_category_idx" ON "vocabulary_words"("category");

-- CreateIndex
CREATE INDEX "vocabulary_words_status_idx" ON "vocabulary_words"("status");

-- CreateIndex
CREATE INDEX "vocabulary_meanings_word_id_idx" ON "vocabulary_meanings"("word_id");

-- CreateIndex
CREATE INDEX "vocabulary_meanings_part_of_speech_idx" ON "vocabulary_meanings"("part_of_speech");

-- CreateIndex
CREATE INDEX "user_vocabulary_user_id_idx" ON "user_vocabulary"("user_id");

-- CreateIndex
CREATE INDEX "user_vocabulary_word_id_idx" ON "user_vocabulary"("word_id");

-- CreateIndex
CREATE INDEX "user_vocabulary_status_idx" ON "user_vocabulary"("status");

-- CreateIndex
CREATE INDEX "user_vocabulary_is_favorite_idx" ON "user_vocabulary"("is_favorite");

-- CreateIndex
CREATE INDEX "user_vocabulary_next_review_idx" ON "user_vocabulary"("next_review");

-- CreateIndex
CREATE UNIQUE INDEX "user_vocabulary_user_id_word_id_key" ON "user_vocabulary"("user_id", "word_id");

-- AddForeignKey
ALTER TABLE "vocabulary_meanings" ADD CONSTRAINT "vocabulary_meanings_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "vocabulary_words"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_vocabulary" ADD CONSTRAINT "user_vocabulary_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "vocabulary_words"("id") ON DELETE CASCADE ON UPDATE CASCADE;
