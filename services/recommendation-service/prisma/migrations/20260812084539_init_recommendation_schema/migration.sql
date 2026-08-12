-- CreateEnum
CREATE TYPE "RecommendationType" AS ENUM ('LESSON', 'GRAMMAR_TOPIC', 'VOCABULARY_WORD', 'SPEAKING_PRACTICE', 'ASSESSMENT', 'REVIEW');

-- CreateEnum
CREATE TYPE "RecommendationStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'DISMISSED', 'EXPIRED');

-- CreateTable
CREATE TABLE "user_learning_signals" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "english_level" TEXT NOT NULL DEFAULT 'BEGINNER',
    "lessons_completed" INTEGER NOT NULL DEFAULT 0,
    "grammar_exercises" INTEGER NOT NULL DEFAULT 0,
    "vocabulary_learned" INTEGER NOT NULL DEFAULT 0,
    "speaking_practices" INTEGER NOT NULL DEFAULT 0,
    "grammar_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "vocabulary_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "speaking_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_learning_signals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recommendations" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "RecommendationType" NOT NULL,
    "target_id" TEXT NOT NULL,
    "target_title" TEXT NOT NULL,
    "target_metadata" JSONB,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reason" TEXT,
    "status" "RecommendationStatus" NOT NULL DEFAULT 'ACTIVE',
    "expires_at" TIMESTAMP(3),
    "feedback_received" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recommendations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recommendation_feedback" (
    "id" TEXT NOT NULL,
    "recommendation_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "time_spent" INTEGER,
    "rating" INTEGER,
    "feedback_text" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recommendation_feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_learning_signals_user_id_key" ON "user_learning_signals"("user_id");

-- CreateIndex
CREATE INDEX "user_learning_signals_user_id_idx" ON "user_learning_signals"("user_id");

-- CreateIndex
CREATE INDEX "recommendations_user_id_idx" ON "recommendations"("user_id");

-- CreateIndex
CREATE INDEX "recommendations_type_idx" ON "recommendations"("type");

-- CreateIndex
CREATE INDEX "recommendations_status_idx" ON "recommendations"("status");

-- CreateIndex
CREATE INDEX "recommendation_feedback_recommendation_id_idx" ON "recommendation_feedback"("recommendation_id");

-- CreateIndex
CREATE INDEX "recommendation_feedback_user_id_idx" ON "recommendation_feedback"("user_id");
