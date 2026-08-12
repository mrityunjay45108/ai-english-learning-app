-- CreateTable
CREATE TABLE "raw_events" (
    "id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "event_type" TEXT NOT NULL,
    "event_version" TEXT NOT NULL,
    "occurred_at" TIMESTAMP(3) NOT NULL,
    "producer" TEXT NOT NULL,
    "user_id" TEXT,
    "request_id" TEXT,
    "correlation_id" TEXT,
    "payload" JSONB NOT NULL,
    "kafka_topic" TEXT,
    "kafka_partition" INTEGER,
    "kafka_offset" TEXT,
    "processed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "raw_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_aggregations" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "date_key" TEXT NOT NULL,
    "daily_active_users" INTEGER NOT NULL DEFAULT 0,
    "new_users" INTEGER NOT NULL DEFAULT 0,
    "lessons_started" INTEGER NOT NULL DEFAULT 0,
    "lessons_completed" INTEGER NOT NULL DEFAULT 0,
    "avg_lesson_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "speaking_sessions" INTEGER NOT NULL DEFAULT 0,
    "avg_speaking_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "grammar_exercises" INTEGER NOT NULL DEFAULT 0,
    "avg_grammar_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "vocabulary_learned" INTEGER NOT NULL DEFAULT 0,
    "ai_messages" INTEGER NOT NULL DEFAULT 0,
    "avg_ai_latency" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "new_subscriptions" INTEGER NOT NULL DEFAULT 0,
    "subscription_revenue" INTEGER NOT NULL DEFAULT 0,
    "total_time_minutes" INTEGER NOT NULL DEFAULT 0,
    "avg_session_minutes" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "daily_aggregations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monthly_aggregations" (
    "id" TEXT NOT NULL,
    "month" TIMESTAMP(3) NOT NULL,
    "month_key" TEXT NOT NULL,
    "monthly_active_users" INTEGER NOT NULL DEFAULT 0,
    "total_users" INTEGER NOT NULL DEFAULT 0,
    "total_lessons_completed" INTEGER NOT NULL DEFAULT 0,
    "avg_monthly_lessons" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_subscriptions" INTEGER NOT NULL DEFAULT 0,
    "conversion_rate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "monthly_revenue" INTEGER NOT NULL DEFAULT 0,
    "retention_rate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "churn_rate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "monthly_aggregations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_analytics" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "first_activity_at" TIMESTAMP(3) NOT NULL,
    "last_activity_at" TIMESTAMP(3) NOT NULL,
    "total_days_active" INTEGER NOT NULL DEFAULT 0,
    "total_lessons_completed" INTEGER NOT NULL DEFAULT 0,
    "total_speaking_sessions" INTEGER NOT NULL DEFAULT 0,
    "total_ai_messages" INTEGER NOT NULL DEFAULT 0,
    "total_time_minutes" INTEGER NOT NULL DEFAULT 0,
    "avg_lesson_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "avg_speaking_score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "current_plan" TEXT,
    "subscription_start_at" TIMESTAMP(3),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_anonymized" BOOLEAN NOT NULL DEFAULT false,
    "anonymized_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_analytics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "raw_events_event_id_key" ON "raw_events"("event_id");

-- CreateIndex
CREATE INDEX "raw_events_event_type_idx" ON "raw_events"("event_type");

-- CreateIndex
CREATE INDEX "raw_events_occurred_at_idx" ON "raw_events"("occurred_at");

-- CreateIndex
CREATE INDEX "raw_events_user_id_idx" ON "raw_events"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "daily_aggregations_date_key" ON "daily_aggregations"("date");

-- CreateIndex
CREATE UNIQUE INDEX "daily_aggregations_date_key_key" ON "daily_aggregations"("date_key");

-- CreateIndex
CREATE INDEX "daily_aggregations_date_key_idx" ON "daily_aggregations"("date_key");

-- CreateIndex
CREATE UNIQUE INDEX "monthly_aggregations_month_key" ON "monthly_aggregations"("month");

-- CreateIndex
CREATE UNIQUE INDEX "monthly_aggregations_month_key_key" ON "monthly_aggregations"("month_key");

-- CreateIndex
CREATE INDEX "monthly_aggregations_month_key_idx" ON "monthly_aggregations"("month_key");

-- CreateIndex
CREATE UNIQUE INDEX "user_analytics_user_id_key" ON "user_analytics"("user_id");

-- CreateIndex
CREATE INDEX "user_analytics_user_id_idx" ON "user_analytics"("user_id");
