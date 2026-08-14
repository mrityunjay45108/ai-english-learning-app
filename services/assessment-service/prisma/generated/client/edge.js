
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AssessmentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  description: 'description',
  type: 'type',
  status: 'status',
  totalQuestions: 'totalQuestions',
  timeLimit: 'timeLimit',
  passingScore: 'passingScore',
  metadata: 'metadata',
  startedAt: 'startedAt',
  completedAt: 'completedAt',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AssessmentQuestionScalarFieldEnum = {
  id: 'id',
  assessmentId: 'assessmentId',
  questionText: 'questionText',
  options: 'options',
  correctAnswer: 'correctAnswer',
  type: 'type',
  category: 'category',
  difficulty: 'difficulty',
  points: 'points',
  audioUrl: 'audioUrl',
  expectedAnswer: 'expectedAnswer',
  orderIndex: 'orderIndex',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AssessmentAttemptScalarFieldEnum = {
  id: 'id',
  assessmentId: 'assessmentId',
  userId: 'userId',
  questionId: 'questionId',
  userAnswer: 'userAnswer',
  isCorrect: 'isCorrect',
  score: 'score',
  timeTaken: 'timeTaken',
  createdAt: 'createdAt'
};

exports.Prisma.AssessmentResultScalarFieldEnum = {
  id: 'id',
  assessmentId: 'assessmentId',
  userId: 'userId',
  totalScore: 'totalScore',
  maxScore: 'maxScore',
  percentage: 'percentage',
  correctCount: 'correctCount',
  wrongCount: 'wrongCount',
  unansweredCount: 'unansweredCount',
  grammarScore: 'grammarScore',
  vocabularyScore: 'vocabularyScore',
  listeningScore: 'listeningScore',
  readingScore: 'readingScore',
  recommendedLevel: 'recommendedLevel',
  rawLevel: 'rawLevel',
  feedback: 'feedback',
  metadata: 'metadata',
  completedAt: 'completedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.AssessmentType = exports.$Enums.AssessmentType = {
  INITIAL: 'INITIAL',
  GRAMMAR: 'GRAMMAR',
  VOCABULARY: 'VOCABULARY',
  LISTENING: 'LISTENING',
  READING: 'READING',
  SPEAKING: 'SPEAKING'
};

exports.AssessmentStatus = exports.$Enums.AssessmentStatus = {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
  EXPIRED: 'EXPIRED'
};

exports.QuestionType = exports.$Enums.QuestionType = {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  FILL_BLANK: 'FILL_BLANK',
  TRUE_FALSE: 'TRUE_FALSE',
  MATCHING: 'MATCHING',
  SPEAKING: 'SPEAKING'
};

exports.QuestionCategory = exports.$Enums.QuestionCategory = {
  GRAMMAR: 'GRAMMAR',
  VOCABULARY: 'VOCABULARY',
  LISTENING: 'LISTENING',
  READING: 'READING',
  SPEAKING: 'SPEAKING'
};

exports.DifficultyLevel = exports.$Enums.DifficultyLevel = {
  BEGINNER: 'BEGINNER',
  ELEMENTARY: 'ELEMENTARY',
  INTERMEDIATE: 'INTERMEDIATE',
  UPPER_INTERMEDIATE: 'UPPER_INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

exports.Prisma.ModelName = {
  Assessment: 'Assessment',
  AssessmentQuestion: 'AssessmentQuestion',
  AssessmentAttempt: 'AssessmentAttempt',
  AssessmentResult: 'AssessmentResult'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\kumar\\OneDrive\\Pictures\\Desktop\\Ai English learning app\\services\\assessment-service\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\kumar\\OneDrive\\Pictures\\Desktop\\Ai English learning app\\services\\assessment-service\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// ============================================\n// ENUMS\n// ============================================\nenum AssessmentType {\n  INITIAL\n  GRAMMAR\n  VOCABULARY\n  LISTENING\n  READING\n  SPEAKING\n}\n\nenum AssessmentStatus {\n  DRAFT\n  ACTIVE\n  STARTED\n  COMPLETED\n  EXPIRED\n}\n\nenum QuestionType {\n  MULTIPLE_CHOICE\n  FILL_BLANK\n  TRUE_FALSE\n  MATCHING\n  SPEAKING\n}\n\nenum DifficultyLevel {\n  BEGINNER\n  ELEMENTARY\n  INTERMEDIATE\n  UPPER_INTERMEDIATE\n  ADVANCED\n}\n\nenum QuestionCategory {\n  GRAMMAR\n  VOCABULARY\n  LISTENING\n  READING\n  SPEAKING\n}\n\n// ============================================\n// ASSESSMENT\n// ============================================\nmodel Assessment {\n  id             String           @id @default(uuid())\n  userId         String           @map(\"user_id\")\n  title          String\n  description    String?          @db.Text\n  type           AssessmentType   @default(INITIAL)\n  status         AssessmentStatus @default(DRAFT)\n  totalQuestions Int              @default(0) @map(\"total_questions\")\n  timeLimit      Int?             @map(\"time_limit\") // in minutes\n\n  passingScore Int?  @default(60) @map(\"passing_score\")\n  metadata     Json?\n\n  startedAt   DateTime? @map(\"started_at\")\n  completedAt DateTime? @map(\"completed_at\")\n  expiresAt   DateTime? @map(\"expires_at\")\n  createdAt   DateTime  @default(now()) @map(\"created_at\")\n  updatedAt   DateTime  @updatedAt @map(\"updated_at\")\n\n  questions AssessmentQuestion[]\n  attempts  AssessmentAttempt[]\n  results   AssessmentResult?\n\n  @@index([userId])\n  @@index([status])\n  @@index([type])\n  @@index([createdAt])\n  @@map(\"assessments\")\n}\n\n// ============================================\n// ASSESSMENT QUESTIONS\n// ============================================\nmodel AssessmentQuestion {\n  id           String @id @default(uuid())\n  assessmentId String @map(\"assessment_id\")\n\n  questionText  String  @map(\"question_text\") @db.Text\n  options       Json?\n  correctAnswer String? @map(\"correct_answer\")\n\n  type       QuestionType     @default(MULTIPLE_CHOICE)\n  category   QuestionCategory\n  difficulty DifficultyLevel  @default(BEGINNER)\n  points     Int              @default(1)\n\n  audioUrl       String? @map(\"audio_url\")\n  expectedAnswer String? @map(\"expected_answer\")\n\n  orderIndex Int @default(0) @map(\"order_index\")\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  assessment Assessment          @relation(fields: [assessmentId], references: [id], onDelete: Cascade)\n  attempts   AssessmentAttempt[]\n\n  @@unique([assessmentId, orderIndex])\n  @@index([assessmentId])\n  @@index([type])\n  @@index([category])\n  @@index([difficulty])\n  @@map(\"assessment_questions\")\n}\n\n// ============================================\n// ASSESSMENT ATTEMPTS\n// ============================================\nmodel AssessmentAttempt {\n  id           String @id @default(uuid())\n  assessmentId String @map(\"assessment_id\")\n  userId       String @map(\"user_id\")\n  questionId   String @map(\"question_id\")\n\n  userAnswer Json?    @map(\"user_answer\")\n  isCorrect  Boolean? @map(\"is_correct\")\n  score      Int?     @default(0)\n  timeTaken  Int?     @map(\"time_taken\")\n\n  createdAt DateTime @default(now()) @map(\"created_at\")\n\n  assessment Assessment         @relation(fields: [assessmentId], references: [id], onDelete: Cascade)\n  question   AssessmentQuestion @relation(fields: [questionId], references: [id], onDelete: Cascade)\n\n  @@index([assessmentId])\n  @@index([userId])\n  @@index([questionId])\n  @@index([createdAt])\n  @@map(\"assessment_attempts\")\n}\n\n// ============================================\n// ASSESSMENT RESULTS\n// ============================================\nmodel AssessmentResult {\n  id           String @id @default(uuid())\n  assessmentId String @unique @map(\"assessment_id\")\n  userId       String @map(\"user_id\")\n\n  totalScore Int   @map(\"total_score\")\n  maxScore   Int   @map(\"max_score\")\n  percentage Float @map(\"percentage\")\n\n  correctCount    Int @default(0) @map(\"correct_count\")\n  wrongCount      Int @default(0) @map(\"wrong_count\")\n  unansweredCount Int @default(0) @map(\"unanswered_count\")\n\n  grammarScore    Float? @map(\"grammar_score\")\n  vocabularyScore Float? @map(\"vocabulary_score\")\n  listeningScore  Float? @map(\"listening_score\")\n  readingScore    Float? @map(\"reading_score\")\n\n  recommendedLevel DifficultyLevel @map(\"recommended_level\")\n  rawLevel         String?         @map(\"raw_level\")\n\n  feedback String? @db.Text\n  metadata Json?\n\n  completedAt DateTime @default(now()) @map(\"completed_at\")\n\n  assessment Assessment @relation(fields: [assessmentId], references: [id], onDelete: Cascade)\n\n  @@index([userId])\n  @@index([recommendedLevel])\n  @@index([completedAt])\n  @@map(\"assessment_results\")\n}\n",
  "inlineSchemaHash": "64b37fc3e94f8ccbdf414d9a61cd667691da8c9a2d5d0f94a124ee004e3c6536",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Assessment\":{\"dbName\":\"assessments\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"AssessmentType\",\"default\":\"INITIAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"AssessmentStatus\",\"default\":\"DRAFT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalQuestions\",\"dbName\":\"total_questions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timeLimit\",\"dbName\":\"time_limit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passingScore\",\"dbName\":\"passing_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":60,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startedAt\",\"dbName\":\"started_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completedAt\",\"dbName\":\"completed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"dbName\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"questions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AssessmentQuestion\",\"relationName\":\"AssessmentToAssessmentQuestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attempts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AssessmentAttempt\",\"relationName\":\"AssessmentToAssessmentAttempt\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"results\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AssessmentResult\",\"relationName\":\"AssessmentToAssessmentResult\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AssessmentQuestion\":{\"dbName\":\"assessment_questions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessmentId\",\"dbName\":\"assessment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionText\",\"dbName\":\"question_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"options\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correctAnswer\",\"dbName\":\"correct_answer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"QuestionType\",\"default\":\"MULTIPLE_CHOICE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QuestionCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"difficulty\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DifficultyLevel\",\"default\":\"BEGINNER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"audioUrl\",\"dbName\":\"audio_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expectedAnswer\",\"dbName\":\"expected_answer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderIndex\",\"dbName\":\"order_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"assessment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Assessment\",\"relationName\":\"AssessmentToAssessmentQuestion\",\"relationFromFields\":[\"assessmentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attempts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AssessmentAttempt\",\"relationName\":\"AssessmentAttemptToAssessmentQuestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"assessmentId\",\"orderIndex\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"assessmentId\",\"orderIndex\"]}],\"isGenerated\":false},\"AssessmentAttempt\":{\"dbName\":\"assessment_attempts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessmentId\",\"dbName\":\"assessment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionId\",\"dbName\":\"question_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAnswer\",\"dbName\":\"user_answer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isCorrect\",\"dbName\":\"is_correct\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timeTaken\",\"dbName\":\"time_taken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Assessment\",\"relationName\":\"AssessmentToAssessmentAttempt\",\"relationFromFields\":[\"assessmentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AssessmentQuestion\",\"relationName\":\"AssessmentAttemptToAssessmentQuestion\",\"relationFromFields\":[\"questionId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AssessmentResult\":{\"dbName\":\"assessment_results\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessmentId\",\"dbName\":\"assessment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalScore\",\"dbName\":\"total_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxScore\",\"dbName\":\"max_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"percentage\",\"dbName\":\"percentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correctCount\",\"dbName\":\"correct_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wrongCount\",\"dbName\":\"wrong_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unansweredCount\",\"dbName\":\"unanswered_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grammarScore\",\"dbName\":\"grammar_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vocabularyScore\",\"dbName\":\"vocabulary_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listeningScore\",\"dbName\":\"listening_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"readingScore\",\"dbName\":\"reading_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommendedLevel\",\"dbName\":\"recommended_level\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DifficultyLevel\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rawLevel\",\"dbName\":\"raw_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feedback\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completedAt\",\"dbName\":\"completed_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Assessment\",\"relationName\":\"AssessmentToAssessmentResult\",\"relationFromFields\":[\"assessmentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"AssessmentType\":{\"values\":[{\"name\":\"INITIAL\",\"dbName\":null},{\"name\":\"GRAMMAR\",\"dbName\":null},{\"name\":\"VOCABULARY\",\"dbName\":null},{\"name\":\"LISTENING\",\"dbName\":null},{\"name\":\"READING\",\"dbName\":null},{\"name\":\"SPEAKING\",\"dbName\":null}],\"dbName\":null},\"AssessmentStatus\":{\"values\":[{\"name\":\"DRAFT\",\"dbName\":null},{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"STARTED\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"EXPIRED\",\"dbName\":null}],\"dbName\":null},\"QuestionType\":{\"values\":[{\"name\":\"MULTIPLE_CHOICE\",\"dbName\":null},{\"name\":\"FILL_BLANK\",\"dbName\":null},{\"name\":\"TRUE_FALSE\",\"dbName\":null},{\"name\":\"MATCHING\",\"dbName\":null},{\"name\":\"SPEAKING\",\"dbName\":null}],\"dbName\":null},\"DifficultyLevel\":{\"values\":[{\"name\":\"BEGINNER\",\"dbName\":null},{\"name\":\"ELEMENTARY\",\"dbName\":null},{\"name\":\"INTERMEDIATE\",\"dbName\":null},{\"name\":\"UPPER_INTERMEDIATE\",\"dbName\":null},{\"name\":\"ADVANCED\",\"dbName\":null}],\"dbName\":null},\"QuestionCategory\":{\"values\":[{\"name\":\"GRAMMAR\",\"dbName\":null},{\"name\":\"VOCABULARY\",\"dbName\":null},{\"name\":\"LISTENING\",\"dbName\":null},{\"name\":\"READING\",\"dbName\":null},{\"name\":\"SPEAKING\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

