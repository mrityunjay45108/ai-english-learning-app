-- CreateEnum
CREATE TYPE "DifficultyLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "ExerciseType" AS ENUM ('MULTIPLE_CHOICE', 'FILL_BLANK', 'TRUE_FALSE', 'MATCHING');

-- CreateEnum
CREATE TYPE "TopicStatus" AS ENUM ('ACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "UserProgressStatus" AS ENUM ('NOT_STARTED', 'LEARNING', 'MASTERED');

-- CreateTable
CREATE TABLE "grammar_topics" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "difficulty" "DifficultyLevel" NOT NULL DEFAULT 'BEGINNER',
    "order_index" INTEGER NOT NULL DEFAULT 0,
    "status" "TopicStatus" NOT NULL DEFAULT 'ACTIVE',
    "icon" TEXT,
    "color" TEXT DEFAULT '#6366f1',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "grammar_topics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grammar_rules" (
    "id" TEXT NOT NULL,
    "topic_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "rule_text" TEXT NOT NULL,
    "explanation" TEXT,
    "explanation_hindi" TEXT,
    "examples" JSONB,
    "order_index" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "grammar_rules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grammar_exercises" (
    "id" TEXT NOT NULL,
    "topic_id" TEXT NOT NULL,
    "rule_id" TEXT,
    "question" TEXT NOT NULL,
    "options" JSONB,
    "correct_answer" TEXT NOT NULL,
    "type" "ExerciseType" NOT NULL DEFAULT 'MULTIPLE_CHOICE',
    "difficulty" "DifficultyLevel" NOT NULL DEFAULT 'BEGINNER',
    "explanation" TEXT,
    "explanation_hindi" TEXT,
    "hints" JSONB,
    "order_index" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "grammar_exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_grammar_progress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "topic_id" TEXT NOT NULL,
    "status" "UserProgressStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "score" INTEGER NOT NULL DEFAULT 0,
    "max_score" INTEGER,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "correct_count" INTEGER NOT NULL DEFAULT 0,
    "wrong_count" INTEGER NOT NULL DEFAULT 0,
    "last_practiced" TIMESTAMP(3),
    "mastered_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_grammar_progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "grammar_topics_name_key" ON "grammar_topics"("name");

-- CreateIndex
CREATE INDEX "grammar_topics_name_idx" ON "grammar_topics"("name");

-- CreateIndex
CREATE INDEX "grammar_topics_category_idx" ON "grammar_topics"("category");

-- CreateIndex
CREATE INDEX "grammar_topics_difficulty_idx" ON "grammar_topics"("difficulty");

-- CreateIndex
CREATE INDEX "grammar_topics_status_idx" ON "grammar_topics"("status");

-- CreateIndex
CREATE INDEX "grammar_rules_topic_id_idx" ON "grammar_rules"("topic_id");

-- CreateIndex
CREATE INDEX "grammar_rules_order_index_idx" ON "grammar_rules"("order_index");

-- CreateIndex
CREATE INDEX "grammar_exercises_topic_id_idx" ON "grammar_exercises"("topic_id");

-- CreateIndex
CREATE INDEX "grammar_exercises_rule_id_idx" ON "grammar_exercises"("rule_id");

-- CreateIndex
CREATE INDEX "grammar_exercises_difficulty_idx" ON "grammar_exercises"("difficulty");

-- CreateIndex
CREATE INDEX "grammar_exercises_type_idx" ON "grammar_exercises"("type");

-- CreateIndex
CREATE INDEX "user_grammar_progress_user_id_idx" ON "user_grammar_progress"("user_id");

-- CreateIndex
CREATE INDEX "user_grammar_progress_topic_id_idx" ON "user_grammar_progress"("topic_id");

-- CreateIndex
CREATE INDEX "user_grammar_progress_status_idx" ON "user_grammar_progress"("status");

-- CreateIndex
CREATE UNIQUE INDEX "user_grammar_progress_user_id_topic_id_key" ON "user_grammar_progress"("user_id", "topic_id");

-- AddForeignKey
ALTER TABLE "grammar_rules" ADD CONSTRAINT "grammar_rules_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "grammar_topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grammar_exercises" ADD CONSTRAINT "grammar_exercises_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "grammar_topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grammar_exercises" ADD CONSTRAINT "grammar_exercises_rule_id_fkey" FOREIGN KEY ("rule_id") REFERENCES "grammar_rules"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_grammar_progress" ADD CONSTRAINT "user_grammar_progress_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "grammar_topics"("id") ON DELETE CASCADE ON UPDATE CASCADE;
