-- CreateEnum
CREATE TYPE "AssessmentType" AS ENUM ('INITIAL', 'GRAMMAR', 'VOCABULARY', 'LISTENING', 'READING', 'SPEAKING');

-- CreateEnum
CREATE TYPE "AssessmentStatus" AS ENUM ('DRAFT', 'ACTIVE', 'STARTED', 'COMPLETED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('MULTIPLE_CHOICE', 'FILL_BLANK', 'TRUE_FALSE', 'MATCHING', 'SPEAKING');

-- CreateEnum
CREATE TYPE "DifficultyLevel" AS ENUM ('BEGINNER', 'ELEMENTARY', 'INTERMEDIATE', 'UPPER_INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "QuestionCategory" AS ENUM ('GRAMMAR', 'VOCABULARY', 'LISTENING', 'READING', 'SPEAKING');

-- CreateTable
CREATE TABLE "assessments" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "AssessmentType" NOT NULL DEFAULT 'INITIAL',
    "status" "AssessmentStatus" NOT NULL DEFAULT 'DRAFT',
    "total_questions" INTEGER NOT NULL DEFAULT 0,
    "time_limit" INTEGER,
    "passing_score" INTEGER DEFAULT 60,
    "metadata" JSONB,
    "started_at" TIMESTAMP(3),
    "completed_at" TIMESTAMP(3),
    "expires_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assessments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assessment_questions" (
    "id" TEXT NOT NULL,
    "assessment_id" TEXT NOT NULL,
    "question_text" TEXT NOT NULL,
    "options" JSONB,
    "correct_answer" TEXT,
    "type" "QuestionType" NOT NULL DEFAULT 'MULTIPLE_CHOICE',
    "category" "QuestionCategory" NOT NULL,
    "difficulty" "DifficultyLevel" NOT NULL DEFAULT 'BEGINNER',
    "points" INTEGER NOT NULL DEFAULT 1,
    "audio_url" TEXT,
    "expected_answer" TEXT,
    "order_index" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assessment_questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assessment_attempts" (
    "id" TEXT NOT NULL,
    "assessment_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "user_answer" JSONB,
    "is_correct" BOOLEAN,
    "score" INTEGER DEFAULT 0,
    "time_taken" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "assessment_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assessment_results" (
    "id" TEXT NOT NULL,
    "assessment_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "total_score" INTEGER NOT NULL,
    "max_score" INTEGER NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "correct_count" INTEGER NOT NULL DEFAULT 0,
    "wrong_count" INTEGER NOT NULL DEFAULT 0,
    "unanswered_count" INTEGER NOT NULL DEFAULT 0,
    "grammar_score" DOUBLE PRECISION,
    "vocabulary_score" DOUBLE PRECISION,
    "listening_score" DOUBLE PRECISION,
    "reading_score" DOUBLE PRECISION,
    "recommended_level" "DifficultyLevel" NOT NULL,
    "raw_level" TEXT,
    "feedback" TEXT,
    "metadata" JSONB,
    "completed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "assessment_results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "assessments_user_id_idx" ON "assessments"("user_id");

-- CreateIndex
CREATE INDEX "assessments_status_idx" ON "assessments"("status");

-- CreateIndex
CREATE INDEX "assessments_type_idx" ON "assessments"("type");

-- CreateIndex
CREATE INDEX "assessments_created_at_idx" ON "assessments"("created_at");

-- CreateIndex
CREATE INDEX "assessment_questions_assessment_id_idx" ON "assessment_questions"("assessment_id");

-- CreateIndex
CREATE INDEX "assessment_questions_type_idx" ON "assessment_questions"("type");

-- CreateIndex
CREATE INDEX "assessment_questions_category_idx" ON "assessment_questions"("category");

-- CreateIndex
CREATE INDEX "assessment_questions_difficulty_idx" ON "assessment_questions"("difficulty");

-- CreateIndex
CREATE UNIQUE INDEX "assessment_questions_assessment_id_order_index_key" ON "assessment_questions"("assessment_id", "order_index");

-- CreateIndex
CREATE INDEX "assessment_attempts_assessment_id_idx" ON "assessment_attempts"("assessment_id");

-- CreateIndex
CREATE INDEX "assessment_attempts_user_id_idx" ON "assessment_attempts"("user_id");

-- CreateIndex
CREATE INDEX "assessment_attempts_question_id_idx" ON "assessment_attempts"("question_id");

-- CreateIndex
CREATE INDEX "assessment_attempts_created_at_idx" ON "assessment_attempts"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "assessment_results_assessment_id_key" ON "assessment_results"("assessment_id");

-- CreateIndex
CREATE INDEX "assessment_results_user_id_idx" ON "assessment_results"("user_id");

-- CreateIndex
CREATE INDEX "assessment_results_recommended_level_idx" ON "assessment_results"("recommended_level");

-- CreateIndex
CREATE INDEX "assessment_results_completed_at_idx" ON "assessment_results"("completed_at");

-- AddForeignKey
ALTER TABLE "assessment_questions" ADD CONSTRAINT "assessment_questions_assessment_id_fkey" FOREIGN KEY ("assessment_id") REFERENCES "assessments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assessment_attempts" ADD CONSTRAINT "assessment_attempts_assessment_id_fkey" FOREIGN KEY ("assessment_id") REFERENCES "assessments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assessment_attempts" ADD CONSTRAINT "assessment_attempts_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "assessment_questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assessment_results" ADD CONSTRAINT "assessment_results_assessment_id_fkey" FOREIGN KEY ("assessment_id") REFERENCES "assessments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
