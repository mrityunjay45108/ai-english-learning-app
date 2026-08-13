-- CreateTable
CREATE TABLE "speaking_sessions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT,
    "status" TEXT NOT NULL DEFAULT 'active',
    "total_turns" INTEGER NOT NULL DEFAULT 0,
    "total_duration" INTEGER NOT NULL DEFAULT 0,
    "completed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "speaking_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "speaking_turns" (
    "id" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "audio_key" TEXT,
    "audio_duration" DOUBLE PRECISION,
    "transcript" TEXT,
    "grammar_issues" JSONB,
    "fluency_score" DOUBLE PRECISION,
    "pronunciation_score" DOUBLE PRECISION,
    "overall_score" DOUBLE PRECISION,
    "feedback" JSONB,
    "corrected_text" TEXT,
    "hindi_explanation" TEXT,
    "audio_response_key" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "speaking_turns_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "speaking_sessions_user_id_idx" ON "speaking_sessions"("user_id");

-- CreateIndex
CREATE INDEX "speaking_turns_session_id_idx" ON "speaking_turns"("session_id");

-- AddForeignKey
ALTER TABLE "speaking_turns" ADD CONSTRAINT "speaking_turns_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "speaking_sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
