
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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

exports.Prisma.RawEventScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  eventType: 'eventType',
  eventVersion: 'eventVersion',
  occurredAt: 'occurredAt',
  producer: 'producer',
  userId: 'userId',
  requestId: 'requestId',
  correlationId: 'correlationId',
  payload: 'payload',
  kafkaTopic: 'kafkaTopic',
  kafkaPartition: 'kafkaPartition',
  kafkaOffset: 'kafkaOffset',
  processedAt: 'processedAt',
  createdAt: 'createdAt'
};

exports.Prisma.DailyAggregationScalarFieldEnum = {
  id: 'id',
  date: 'date',
  dateKey: 'dateKey',
  dailyActiveUsers: 'dailyActiveUsers',
  newUsers: 'newUsers',
  lessonsStarted: 'lessonsStarted',
  lessonsCompleted: 'lessonsCompleted',
  avgLessonScore: 'avgLessonScore',
  speakingSessions: 'speakingSessions',
  avgSpeakingScore: 'avgSpeakingScore',
  grammarExercises: 'grammarExercises',
  avgGrammarScore: 'avgGrammarScore',
  vocabularyLearned: 'vocabularyLearned',
  aiMessages: 'aiMessages',
  avgAILatency: 'avgAILatency',
  newSubscriptions: 'newSubscriptions',
  subscriptionRevenue: 'subscriptionRevenue',
  totalTimeMinutes: 'totalTimeMinutes',
  avgSessionMinutes: 'avgSessionMinutes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MonthlyAggregationScalarFieldEnum = {
  id: 'id',
  month: 'month',
  monthKey: 'monthKey',
  monthlyActiveUsers: 'monthlyActiveUsers',
  totalUsers: 'totalUsers',
  totalLessonsCompleted: 'totalLessonsCompleted',
  avgMonthlyLessons: 'avgMonthlyLessons',
  totalSubscriptions: 'totalSubscriptions',
  conversionRate: 'conversionRate',
  monthlyRevenue: 'monthlyRevenue',
  retentionRate: 'retentionRate',
  churnRate: 'churnRate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserAnalyticsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  firstActivityAt: 'firstActivityAt',
  lastActivityAt: 'lastActivityAt',
  totalDaysActive: 'totalDaysActive',
  totalLessonsCompleted: 'totalLessonsCompleted',
  totalSpeakingSessions: 'totalSpeakingSessions',
  totalAIMessages: 'totalAIMessages',
  totalTimeMinutes: 'totalTimeMinutes',
  avgLessonScore: 'avgLessonScore',
  avgSpeakingScore: 'avgSpeakingScore',
  currentPlan: 'currentPlan',
  subscriptionStartAt: 'subscriptionStartAt',
  isActive: 'isActive',
  isAnonymized: 'isAnonymized',
  anonymizedAt: 'anonymizedAt',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
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


exports.Prisma.ModelName = {
  RawEvent: 'RawEvent',
  DailyAggregation: 'DailyAggregation',
  MonthlyAggregation: 'MonthlyAggregation',
  UserAnalytics: 'UserAnalytics'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
