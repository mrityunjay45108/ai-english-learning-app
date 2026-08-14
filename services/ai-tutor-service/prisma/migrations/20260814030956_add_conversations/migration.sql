/*
  Warnings:

  - You are about to drop the column `analysis` on the `conversation_messages` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `conversation_messages` table. All the data in the column will be lost.
  - You are about to drop the column `conversation_id` on the `conversation_messages` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `conversation_messages` table. All the data in the column will be lost.
  - You are about to drop the column `latency` on the `conversation_messages` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `conversation_messages` table. All the data in the column will be lost.
  - You are about to drop the column `tokens_used` on the `conversation_messages` table. All the data in the column will be lost.
  - You are about to drop the column `context` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `message_count` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `mode` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `token_count` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the `learning_feedback` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `conversationId` to the `conversation_messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `conversation_messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `conversation_messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `conversations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `conversations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "conversation_messages" DROP CONSTRAINT "conversation_messages_conversation_id_fkey";

-- DropForeignKey
ALTER TABLE "learning_feedback" DROP CONSTRAINT "learning_feedback_conversation_id_fkey";

-- DropIndex
DROP INDEX "conversation_messages_conversation_id_idx";

-- DropIndex
DROP INDEX "conversation_messages_role_idx";

-- DropIndex
DROP INDEX "conversations_mode_idx";

-- DropIndex
DROP INDEX "conversations_status_idx";

-- DropIndex
DROP INDEX "conversations_user_id_idx";

-- AlterTable
ALTER TABLE "conversation_messages" DROP COLUMN "analysis",
DROP COLUMN "content",
DROP COLUMN "conversation_id",
DROP COLUMN "created_at",
DROP COLUMN "latency",
DROP COLUMN "role",
DROP COLUMN "tokens_used",
ADD COLUMN     "conversationId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "sender" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "conversations" DROP COLUMN "context",
DROP COLUMN "created_at",
DROP COLUMN "message_count",
DROP COLUMN "mode",
DROP COLUMN "status",
DROP COLUMN "token_count",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "learning_feedback";

-- DropEnum
DROP TYPE "ConversationMode";

-- DropEnum
DROP TYPE "ConversationStatus";

-- DropEnum
DROP TYPE "FeedbackType";

-- DropEnum
DROP TYPE "MessageRole";

-- AddForeignKey
ALTER TABLE "conversation_messages" ADD CONSTRAINT "conversation_messages_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
