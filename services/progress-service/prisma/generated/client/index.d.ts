
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserStats
 * 
 */
export type UserStats = $Result.DefaultSelection<Prisma.$UserStatsPayload>
/**
 * Model CourseProgress
 * 
 */
export type CourseProgress = $Result.DefaultSelection<Prisma.$CourseProgressPayload>
/**
 * Model LessonProgress
 * 
 */
export type LessonProgress = $Result.DefaultSelection<Prisma.$LessonProgressPayload>
/**
 * Model LearningActivity
 * 
 */
export type LearningActivity = $Result.DefaultSelection<Prisma.$LearningActivityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProgressStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ProgressStatus = (typeof ProgressStatus)[keyof typeof ProgressStatus]


export const ActivityType: {
  LESSON_STARTED: 'LESSON_STARTED',
  LESSON_COMPLETED: 'LESSON_COMPLETED',
  CONTENT_VIEWED: 'CONTENT_VIEWED',
  EXERCISE_COMPLETED: 'EXERCISE_COMPLETED',
  GRAMMAR_EXERCISE_COMPLETED: 'GRAMMAR_EXERCISE_COMPLETED',
  VOCABULARY_LEARNED: 'VOCABULARY_LEARNED',
  ASSESSMENT_COMPLETED: 'ASSESSMENT_COMPLETED',
  SPEAKING_PRACTICE: 'SPEAKING_PRACTICE',
  COURSE_STARTED: 'COURSE_STARTED',
  COURSE_COMPLETED: 'COURSE_COMPLETED',
  DAILY_STREAK: 'DAILY_STREAK'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]

}

export type ProgressStatus = $Enums.ProgressStatus

export const ProgressStatus: typeof $Enums.ProgressStatus

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserStats
 * const userStats = await prisma.userStats.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserStats
   * const userStats = await prisma.userStats.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.userStats`: Exposes CRUD operations for the **UserStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStats
    * const userStats = await prisma.userStats.findMany()
    * ```
    */
  get userStats(): Prisma.UserStatsDelegate<ExtArgs>;

  /**
   * `prisma.courseProgress`: Exposes CRUD operations for the **CourseProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseProgresses
    * const courseProgresses = await prisma.courseProgress.findMany()
    * ```
    */
  get courseProgress(): Prisma.CourseProgressDelegate<ExtArgs>;

  /**
   * `prisma.lessonProgress`: Exposes CRUD operations for the **LessonProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonProgresses
    * const lessonProgresses = await prisma.lessonProgress.findMany()
    * ```
    */
  get lessonProgress(): Prisma.LessonProgressDelegate<ExtArgs>;

  /**
   * `prisma.learningActivity`: Exposes CRUD operations for the **LearningActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningActivities
    * const learningActivities = await prisma.learningActivity.findMany()
    * ```
    */
  get learningActivity(): Prisma.LearningActivityDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserStats: 'UserStats',
    CourseProgress: 'CourseProgress',
    LessonProgress: 'LessonProgress',
    LearningActivity: 'LearningActivity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "userStats" | "courseProgress" | "lessonProgress" | "learningActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserStats: {
        payload: Prisma.$UserStatsPayload<ExtArgs>
        fields: Prisma.UserStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findFirst: {
            args: Prisma.UserStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          findMany: {
            args: Prisma.UserStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          create: {
            args: Prisma.UserStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          createMany: {
            args: Prisma.UserStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>[]
          }
          delete: {
            args: Prisma.UserStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          update: {
            args: Prisma.UserStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          deleteMany: {
            args: Prisma.UserStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatsPayload>
          }
          aggregate: {
            args: Prisma.UserStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStats>
          }
          groupBy: {
            args: Prisma.UserStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatsCountArgs<ExtArgs>
            result: $Utils.Optional<UserStatsCountAggregateOutputType> | number
          }
        }
      }
      CourseProgress: {
        payload: Prisma.$CourseProgressPayload<ExtArgs>
        fields: Prisma.CourseProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          findFirst: {
            args: Prisma.CourseProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          findMany: {
            args: Prisma.CourseProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          create: {
            args: Prisma.CourseProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          createMany: {
            args: Prisma.CourseProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          delete: {
            args: Prisma.CourseProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          update: {
            args: Prisma.CourseProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          deleteMany: {
            args: Prisma.CourseProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          aggregate: {
            args: Prisma.CourseProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseProgress>
          }
          groupBy: {
            args: Prisma.CourseProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseProgressCountArgs<ExtArgs>
            result: $Utils.Optional<CourseProgressCountAggregateOutputType> | number
          }
        }
      }
      LessonProgress: {
        payload: Prisma.$LessonProgressPayload<ExtArgs>
        fields: Prisma.LessonProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          findFirst: {
            args: Prisma.LessonProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          findMany: {
            args: Prisma.LessonProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          create: {
            args: Prisma.LessonProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          createMany: {
            args: Prisma.LessonProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          delete: {
            args: Prisma.LessonProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          update: {
            args: Prisma.LessonProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          deleteMany: {
            args: Prisma.LessonProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LessonProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          aggregate: {
            args: Prisma.LessonProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonProgress>
          }
          groupBy: {
            args: Prisma.LessonProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonProgressCountArgs<ExtArgs>
            result: $Utils.Optional<LessonProgressCountAggregateOutputType> | number
          }
        }
      }
      LearningActivity: {
        payload: Prisma.$LearningActivityPayload<ExtArgs>
        fields: Prisma.LearningActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningActivityPayload>
          }
          findFirst: {
            args: Prisma.LearningActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningActivityPayload>
          }
          findMany: {
            args: Prisma.LearningActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningActivityPayload>[]
          }
          create: {
            args: Prisma.LearningActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningActivityPayload>
          }
          createMany: {
            args: Prisma.LearningActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningActivityPayload>[]
          }
          delete: {
            args: Prisma.LearningActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningActivityPayload>
          }
          update: {
            args: Prisma.LearningActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningActivityPayload>
          }
          deleteMany: {
            args: Prisma.LearningActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LearningActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningActivityPayload>
          }
          aggregate: {
            args: Prisma.LearningActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningActivity>
          }
          groupBy: {
            args: Prisma.LearningActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningActivityCountArgs<ExtArgs>
            result: $Utils.Optional<LearningActivityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CourseProgressCountOutputType
   */

  export type CourseProgressCountOutputType = {
    lessons: number
  }

  export type CourseProgressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CourseProgressCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * CourseProgressCountOutputType without action
   */
  export type CourseProgressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgressCountOutputType
     */
    select?: CourseProgressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseProgressCountOutputType without action
   */
  export type CourseProgressCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserStats
   */

  export type AggregateUserStats = {
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  export type UserStatsAvgAggregateOutputType = {
    totalXp: number | null
    level: number | null
    streakDays: number | null
    bestStreak: number | null
    coursesCompleted: number | null
    lessonsCompleted: number | null
    totalTimeSpent: number | null
  }

  export type UserStatsSumAggregateOutputType = {
    totalXp: number | null
    level: number | null
    streakDays: number | null
    bestStreak: number | null
    coursesCompleted: number | null
    lessonsCompleted: number | null
    totalTimeSpent: number | null
  }

  export type UserStatsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalXp: number | null
    level: number | null
    streakDays: number | null
    bestStreak: number | null
    coursesCompleted: number | null
    lessonsCompleted: number | null
    totalTimeSpent: number | null
    lastActive: Date | null
    lastStreakDate: Date | null
    updatedAt: Date | null
  }

  export type UserStatsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalXp: number | null
    level: number | null
    streakDays: number | null
    bestStreak: number | null
    coursesCompleted: number | null
    lessonsCompleted: number | null
    totalTimeSpent: number | null
    lastActive: Date | null
    lastStreakDate: Date | null
    updatedAt: Date | null
  }

  export type UserStatsCountAggregateOutputType = {
    id: number
    userId: number
    totalXp: number
    level: number
    streakDays: number
    bestStreak: number
    coursesCompleted: number
    lessonsCompleted: number
    totalTimeSpent: number
    lastActive: number
    lastStreakDate: number
    updatedAt: number
    _all: number
  }


  export type UserStatsAvgAggregateInputType = {
    totalXp?: true
    level?: true
    streakDays?: true
    bestStreak?: true
    coursesCompleted?: true
    lessonsCompleted?: true
    totalTimeSpent?: true
  }

  export type UserStatsSumAggregateInputType = {
    totalXp?: true
    level?: true
    streakDays?: true
    bestStreak?: true
    coursesCompleted?: true
    lessonsCompleted?: true
    totalTimeSpent?: true
  }

  export type UserStatsMinAggregateInputType = {
    id?: true
    userId?: true
    totalXp?: true
    level?: true
    streakDays?: true
    bestStreak?: true
    coursesCompleted?: true
    lessonsCompleted?: true
    totalTimeSpent?: true
    lastActive?: true
    lastStreakDate?: true
    updatedAt?: true
  }

  export type UserStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    totalXp?: true
    level?: true
    streakDays?: true
    bestStreak?: true
    coursesCompleted?: true
    lessonsCompleted?: true
    totalTimeSpent?: true
    lastActive?: true
    lastStreakDate?: true
    updatedAt?: true
  }

  export type UserStatsCountAggregateInputType = {
    id?: true
    userId?: true
    totalXp?: true
    level?: true
    streakDays?: true
    bestStreak?: true
    coursesCompleted?: true
    lessonsCompleted?: true
    totalTimeSpent?: true
    lastActive?: true
    lastStreakDate?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to aggregate.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStats
    **/
    _count?: true | UserStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatsMaxAggregateInputType
  }

  export type GetUserStatsAggregateType<T extends UserStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStats[P]>
      : GetScalarType<T[P], AggregateUserStats[P]>
  }




  export type UserStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatsWhereInput
    orderBy?: UserStatsOrderByWithAggregationInput | UserStatsOrderByWithAggregationInput[]
    by: UserStatsScalarFieldEnum[] | UserStatsScalarFieldEnum
    having?: UserStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatsCountAggregateInputType | true
    _avg?: UserStatsAvgAggregateInputType
    _sum?: UserStatsSumAggregateInputType
    _min?: UserStatsMinAggregateInputType
    _max?: UserStatsMaxAggregateInputType
  }

  export type UserStatsGroupByOutputType = {
    id: string
    userId: string
    totalXp: number
    level: number
    streakDays: number
    bestStreak: number
    coursesCompleted: number
    lessonsCompleted: number
    totalTimeSpent: number
    lastActive: Date
    lastStreakDate: Date | null
    updatedAt: Date
    _count: UserStatsCountAggregateOutputType | null
    _avg: UserStatsAvgAggregateOutputType | null
    _sum: UserStatsSumAggregateOutputType | null
    _min: UserStatsMinAggregateOutputType | null
    _max: UserStatsMaxAggregateOutputType | null
  }

  type GetUserStatsGroupByPayload<T extends UserStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatsGroupByOutputType[P]>
        }
      >
    >


  export type UserStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalXp?: boolean
    level?: boolean
    streakDays?: boolean
    bestStreak?: boolean
    coursesCompleted?: boolean
    lessonsCompleted?: boolean
    totalTimeSpent?: boolean
    lastActive?: boolean
    lastStreakDate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalXp?: boolean
    level?: boolean
    streakDays?: boolean
    bestStreak?: boolean
    coursesCompleted?: boolean
    lessonsCompleted?: boolean
    totalTimeSpent?: boolean
    lastActive?: boolean
    lastStreakDate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userStats"]>

  export type UserStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    totalXp?: boolean
    level?: boolean
    streakDays?: boolean
    bestStreak?: boolean
    coursesCompleted?: boolean
    lessonsCompleted?: boolean
    totalTimeSpent?: boolean
    lastActive?: boolean
    lastStreakDate?: boolean
    updatedAt?: boolean
  }


  export type $UserStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      totalXp: number
      level: number
      streakDays: number
      bestStreak: number
      coursesCompleted: number
      lessonsCompleted: number
      totalTimeSpent: number
      lastActive: Date
      lastStreakDate: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["userStats"]>
    composites: {}
  }

  type UserStatsGetPayload<S extends boolean | null | undefined | UserStatsDefaultArgs> = $Result.GetResult<Prisma.$UserStatsPayload, S>

  type UserStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStatsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStatsCountAggregateInputType | true
    }

  export interface UserStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStats'], meta: { name: 'UserStats' } }
    /**
     * Find zero or one UserStats that matches the filter.
     * @param {UserStatsFindUniqueArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStatsFindUniqueArgs>(args: SelectSubset<T, UserStatsFindUniqueArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserStats that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserStatsFindUniqueOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStatsFindFirstArgs>(args?: SelectSubset<T, UserStatsFindFirstArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindFirstOrThrowArgs} args - Arguments to find a UserStats
     * @example
     * // Get one UserStats
     * const userStats = await prisma.userStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStats
     * const userStats = await prisma.userStats.findMany()
     * 
     * // Get first 10 UserStats
     * const userStats = await prisma.userStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatsWithIdOnly = await prisma.userStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStatsFindManyArgs>(args?: SelectSubset<T, UserStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserStats.
     * @param {UserStatsCreateArgs} args - Arguments to create a UserStats.
     * @example
     * // Create one UserStats
     * const UserStats = await prisma.userStats.create({
     *   data: {
     *     // ... data to create a UserStats
     *   }
     * })
     * 
     */
    create<T extends UserStatsCreateArgs>(args: SelectSubset<T, UserStatsCreateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserStats.
     * @param {UserStatsCreateManyArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStatsCreateManyArgs>(args?: SelectSubset<T, UserStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStats and returns the data saved in the database.
     * @param {UserStatsCreateManyAndReturnArgs} args - Arguments to create many UserStats.
     * @example
     * // Create many UserStats
     * const userStats = await prisma.userStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStats and only return the `id`
     * const userStatsWithIdOnly = await prisma.userStats.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserStats.
     * @param {UserStatsDeleteArgs} args - Arguments to delete one UserStats.
     * @example
     * // Delete one UserStats
     * const UserStats = await prisma.userStats.delete({
     *   where: {
     *     // ... filter to delete one UserStats
     *   }
     * })
     * 
     */
    delete<T extends UserStatsDeleteArgs>(args: SelectSubset<T, UserStatsDeleteArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserStats.
     * @param {UserStatsUpdateArgs} args - Arguments to update one UserStats.
     * @example
     * // Update one UserStats
     * const userStats = await prisma.userStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStatsUpdateArgs>(args: SelectSubset<T, UserStatsUpdateArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserStats.
     * @param {UserStatsDeleteManyArgs} args - Arguments to filter UserStats to delete.
     * @example
     * // Delete a few UserStats
     * const { count } = await prisma.userStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStatsDeleteManyArgs>(args?: SelectSubset<T, UserStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStats
     * const userStats = await prisma.userStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStatsUpdateManyArgs>(args: SelectSubset<T, UserStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStats.
     * @param {UserStatsUpsertArgs} args - Arguments to update or create a UserStats.
     * @example
     * // Update or create a UserStats
     * const userStats = await prisma.userStats.upsert({
     *   create: {
     *     // ... data to create a UserStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStats we want to update
     *   }
     * })
     */
    upsert<T extends UserStatsUpsertArgs>(args: SelectSubset<T, UserStatsUpsertArgs<ExtArgs>>): Prisma__UserStatsClient<$Result.GetResult<Prisma.$UserStatsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsCountArgs} args - Arguments to filter UserStats to count.
     * @example
     * // Count the number of UserStats
     * const count = await prisma.userStats.count({
     *   where: {
     *     // ... the filter for the UserStats we want to count
     *   }
     * })
    **/
    count<T extends UserStatsCountArgs>(
      args?: Subset<T, UserStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStatsAggregateArgs>(args: Subset<T, UserStatsAggregateArgs>): Prisma.PrismaPromise<GetUserStatsAggregateType<T>>

    /**
     * Group by UserStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatsGroupByArgs['orderBy'] }
        : { orderBy?: UserStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStats model
   */
  readonly fields: UserStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserStats model
   */ 
  interface UserStatsFieldRefs {
    readonly id: FieldRef<"UserStats", 'String'>
    readonly userId: FieldRef<"UserStats", 'String'>
    readonly totalXp: FieldRef<"UserStats", 'Int'>
    readonly level: FieldRef<"UserStats", 'Int'>
    readonly streakDays: FieldRef<"UserStats", 'Int'>
    readonly bestStreak: FieldRef<"UserStats", 'Int'>
    readonly coursesCompleted: FieldRef<"UserStats", 'Int'>
    readonly lessonsCompleted: FieldRef<"UserStats", 'Int'>
    readonly totalTimeSpent: FieldRef<"UserStats", 'Int'>
    readonly lastActive: FieldRef<"UserStats", 'DateTime'>
    readonly lastStreakDate: FieldRef<"UserStats", 'DateTime'>
    readonly updatedAt: FieldRef<"UserStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStats findUnique
   */
  export type UserStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findUniqueOrThrow
   */
  export type UserStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats findFirst
   */
  export type UserStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findFirstOrThrow
   */
  export type UserStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStats.
     */
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats findMany
   */
  export type UserStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Filter, which UserStats to fetch.
     */
    where?: UserStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStats to fetch.
     */
    orderBy?: UserStatsOrderByWithRelationInput | UserStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStats.
     */
    cursor?: UserStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStats.
     */
    skip?: number
    distinct?: UserStatsScalarFieldEnum | UserStatsScalarFieldEnum[]
  }

  /**
   * UserStats create
   */
  export type UserStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * The data needed to create a UserStats.
     */
    data: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
  }

  /**
   * UserStats createMany
   */
  export type UserStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStats createManyAndReturn
   */
  export type UserStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserStats.
     */
    data: UserStatsCreateManyInput | UserStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStats update
   */
  export type UserStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * The data needed to update a UserStats.
     */
    data: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
    /**
     * Choose, which UserStats to update.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats updateMany
   */
  export type UserStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStats.
     */
    data: XOR<UserStatsUpdateManyMutationInput, UserStatsUncheckedUpdateManyInput>
    /**
     * Filter which UserStats to update
     */
    where?: UserStatsWhereInput
  }

  /**
   * UserStats upsert
   */
  export type UserStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * The filter to search for the UserStats to update in case it exists.
     */
    where: UserStatsWhereUniqueInput
    /**
     * In case the UserStats found by the `where` argument doesn't exist, create a new UserStats with this data.
     */
    create: XOR<UserStatsCreateInput, UserStatsUncheckedCreateInput>
    /**
     * In case the UserStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatsUpdateInput, UserStatsUncheckedUpdateInput>
  }

  /**
   * UserStats delete
   */
  export type UserStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
    /**
     * Filter which UserStats to delete.
     */
    where: UserStatsWhereUniqueInput
  }

  /**
   * UserStats deleteMany
   */
  export type UserStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStats to delete
     */
    where?: UserStatsWhereInput
  }

  /**
   * UserStats without action
   */
  export type UserStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStats
     */
    select?: UserStatsSelect<ExtArgs> | null
  }


  /**
   * Model CourseProgress
   */

  export type AggregateCourseProgress = {
    _count: CourseProgressCountAggregateOutputType | null
    _avg: CourseProgressAvgAggregateOutputType | null
    _sum: CourseProgressSumAggregateOutputType | null
    _min: CourseProgressMinAggregateOutputType | null
    _max: CourseProgressMaxAggregateOutputType | null
  }

  export type CourseProgressAvgAggregateOutputType = {
    progressPercentage: number | null
    lessonsCompleted: number | null
    totalLessons: number | null
    score: number | null
    timeSpent: number | null
  }

  export type CourseProgressSumAggregateOutputType = {
    progressPercentage: number | null
    lessonsCompleted: number | null
    totalLessons: number | null
    score: number | null
    timeSpent: number | null
  }

  export type CourseProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    status: $Enums.ProgressStatus | null
    progressPercentage: number | null
    lessonsCompleted: number | null
    totalLessons: number | null
    score: number | null
    timeSpent: number | null
    startedAt: Date | null
    completedAt: Date | null
    lastAccessed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    status: $Enums.ProgressStatus | null
    progressPercentage: number | null
    lessonsCompleted: number | null
    totalLessons: number | null
    score: number | null
    timeSpent: number | null
    startedAt: Date | null
    completedAt: Date | null
    lastAccessed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseProgressCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    status: number
    progressPercentage: number
    lessonsCompleted: number
    totalLessons: number
    score: number
    timeSpent: number
    startedAt: number
    completedAt: number
    lastAccessed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseProgressAvgAggregateInputType = {
    progressPercentage?: true
    lessonsCompleted?: true
    totalLessons?: true
    score?: true
    timeSpent?: true
  }

  export type CourseProgressSumAggregateInputType = {
    progressPercentage?: true
    lessonsCompleted?: true
    totalLessons?: true
    score?: true
    timeSpent?: true
  }

  export type CourseProgressMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    status?: true
    progressPercentage?: true
    lessonsCompleted?: true
    totalLessons?: true
    score?: true
    timeSpent?: true
    startedAt?: true
    completedAt?: true
    lastAccessed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    status?: true
    progressPercentage?: true
    lessonsCompleted?: true
    totalLessons?: true
    score?: true
    timeSpent?: true
    startedAt?: true
    completedAt?: true
    lastAccessed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseProgressCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    status?: true
    progressPercentage?: true
    lessonsCompleted?: true
    totalLessons?: true
    score?: true
    timeSpent?: true
    startedAt?: true
    completedAt?: true
    lastAccessed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseProgress to aggregate.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseProgresses
    **/
    _count?: true | CourseProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseProgressMaxAggregateInputType
  }

  export type GetCourseProgressAggregateType<T extends CourseProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseProgress[P]>
      : GetScalarType<T[P], AggregateCourseProgress[P]>
  }




  export type CourseProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProgressWhereInput
    orderBy?: CourseProgressOrderByWithAggregationInput | CourseProgressOrderByWithAggregationInput[]
    by: CourseProgressScalarFieldEnum[] | CourseProgressScalarFieldEnum
    having?: CourseProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseProgressCountAggregateInputType | true
    _avg?: CourseProgressAvgAggregateInputType
    _sum?: CourseProgressSumAggregateInputType
    _min?: CourseProgressMinAggregateInputType
    _max?: CourseProgressMaxAggregateInputType
  }

  export type CourseProgressGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    status: $Enums.ProgressStatus
    progressPercentage: number
    lessonsCompleted: number
    totalLessons: number
    score: number
    timeSpent: number
    startedAt: Date | null
    completedAt: Date | null
    lastAccessed: Date
    createdAt: Date
    updatedAt: Date
    _count: CourseProgressCountAggregateOutputType | null
    _avg: CourseProgressAvgAggregateOutputType | null
    _sum: CourseProgressSumAggregateOutputType | null
    _min: CourseProgressMinAggregateOutputType | null
    _max: CourseProgressMaxAggregateOutputType | null
  }

  type GetCourseProgressGroupByPayload<T extends CourseProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseProgressGroupByOutputType[P]>
            : GetScalarType<T[P], CourseProgressGroupByOutputType[P]>
        }
      >
    >


  export type CourseProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    status?: boolean
    progressPercentage?: boolean
    lessonsCompleted?: boolean
    totalLessons?: boolean
    score?: boolean
    timeSpent?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastAccessed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lessons?: boolean | CourseProgress$lessonsArgs<ExtArgs>
    _count?: boolean | CourseProgressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    status?: boolean
    progressPercentage?: boolean
    lessonsCompleted?: boolean
    totalLessons?: boolean
    score?: boolean
    timeSpent?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastAccessed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    status?: boolean
    progressPercentage?: boolean
    lessonsCompleted?: boolean
    totalLessons?: boolean
    score?: boolean
    timeSpent?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastAccessed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CourseProgress$lessonsArgs<ExtArgs>
    _count?: boolean | CourseProgressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CourseProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseProgress"
    objects: {
      lessons: Prisma.$LessonProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      status: $Enums.ProgressStatus
      progressPercentage: number
      lessonsCompleted: number
      totalLessons: number
      score: number
      timeSpent: number
      startedAt: Date | null
      completedAt: Date | null
      lastAccessed: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseProgress"]>
    composites: {}
  }

  type CourseProgressGetPayload<S extends boolean | null | undefined | CourseProgressDefaultArgs> = $Result.GetResult<Prisma.$CourseProgressPayload, S>

  type CourseProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseProgressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseProgressCountAggregateInputType | true
    }

  export interface CourseProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseProgress'], meta: { name: 'CourseProgress' } }
    /**
     * Find zero or one CourseProgress that matches the filter.
     * @param {CourseProgressFindUniqueArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseProgressFindUniqueArgs>(args: SelectSubset<T, CourseProgressFindUniqueArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CourseProgress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CourseProgressFindUniqueOrThrowArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CourseProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindFirstArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseProgressFindFirstArgs>(args?: SelectSubset<T, CourseProgressFindFirstArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CourseProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindFirstOrThrowArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CourseProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseProgresses
     * const courseProgresses = await prisma.courseProgress.findMany()
     * 
     * // Get first 10 CourseProgresses
     * const courseProgresses = await prisma.courseProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseProgressFindManyArgs>(args?: SelectSubset<T, CourseProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CourseProgress.
     * @param {CourseProgressCreateArgs} args - Arguments to create a CourseProgress.
     * @example
     * // Create one CourseProgress
     * const CourseProgress = await prisma.courseProgress.create({
     *   data: {
     *     // ... data to create a CourseProgress
     *   }
     * })
     * 
     */
    create<T extends CourseProgressCreateArgs>(args: SelectSubset<T, CourseProgressCreateArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CourseProgresses.
     * @param {CourseProgressCreateManyArgs} args - Arguments to create many CourseProgresses.
     * @example
     * // Create many CourseProgresses
     * const courseProgress = await prisma.courseProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseProgressCreateManyArgs>(args?: SelectSubset<T, CourseProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseProgresses and returns the data saved in the database.
     * @param {CourseProgressCreateManyAndReturnArgs} args - Arguments to create many CourseProgresses.
     * @example
     * // Create many CourseProgresses
     * const courseProgress = await prisma.courseProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseProgresses and only return the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CourseProgress.
     * @param {CourseProgressDeleteArgs} args - Arguments to delete one CourseProgress.
     * @example
     * // Delete one CourseProgress
     * const CourseProgress = await prisma.courseProgress.delete({
     *   where: {
     *     // ... filter to delete one CourseProgress
     *   }
     * })
     * 
     */
    delete<T extends CourseProgressDeleteArgs>(args: SelectSubset<T, CourseProgressDeleteArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CourseProgress.
     * @param {CourseProgressUpdateArgs} args - Arguments to update one CourseProgress.
     * @example
     * // Update one CourseProgress
     * const courseProgress = await prisma.courseProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseProgressUpdateArgs>(args: SelectSubset<T, CourseProgressUpdateArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CourseProgresses.
     * @param {CourseProgressDeleteManyArgs} args - Arguments to filter CourseProgresses to delete.
     * @example
     * // Delete a few CourseProgresses
     * const { count } = await prisma.courseProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseProgressDeleteManyArgs>(args?: SelectSubset<T, CourseProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseProgresses
     * const courseProgress = await prisma.courseProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseProgressUpdateManyArgs>(args: SelectSubset<T, CourseProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseProgress.
     * @param {CourseProgressUpsertArgs} args - Arguments to update or create a CourseProgress.
     * @example
     * // Update or create a CourseProgress
     * const courseProgress = await prisma.courseProgress.upsert({
     *   create: {
     *     // ... data to create a CourseProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseProgress we want to update
     *   }
     * })
     */
    upsert<T extends CourseProgressUpsertArgs>(args: SelectSubset<T, CourseProgressUpsertArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressCountArgs} args - Arguments to filter CourseProgresses to count.
     * @example
     * // Count the number of CourseProgresses
     * const count = await prisma.courseProgress.count({
     *   where: {
     *     // ... the filter for the CourseProgresses we want to count
     *   }
     * })
    **/
    count<T extends CourseProgressCountArgs>(
      args?: Subset<T, CourseProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseProgressAggregateArgs>(args: Subset<T, CourseProgressAggregateArgs>): Prisma.PrismaPromise<GetCourseProgressAggregateType<T>>

    /**
     * Group by CourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseProgressGroupByArgs['orderBy'] }
        : { orderBy?: CourseProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseProgress model
   */
  readonly fields: CourseProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends CourseProgress$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, CourseProgress$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseProgress model
   */ 
  interface CourseProgressFieldRefs {
    readonly id: FieldRef<"CourseProgress", 'String'>
    readonly userId: FieldRef<"CourseProgress", 'String'>
    readonly courseId: FieldRef<"CourseProgress", 'String'>
    readonly status: FieldRef<"CourseProgress", 'ProgressStatus'>
    readonly progressPercentage: FieldRef<"CourseProgress", 'Int'>
    readonly lessonsCompleted: FieldRef<"CourseProgress", 'Int'>
    readonly totalLessons: FieldRef<"CourseProgress", 'Int'>
    readonly score: FieldRef<"CourseProgress", 'Int'>
    readonly timeSpent: FieldRef<"CourseProgress", 'Int'>
    readonly startedAt: FieldRef<"CourseProgress", 'DateTime'>
    readonly completedAt: FieldRef<"CourseProgress", 'DateTime'>
    readonly lastAccessed: FieldRef<"CourseProgress", 'DateTime'>
    readonly createdAt: FieldRef<"CourseProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseProgress findUnique
   */
  export type CourseProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress findUniqueOrThrow
   */
  export type CourseProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress findFirst
   */
  export type CourseProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseProgresses.
     */
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress findFirstOrThrow
   */
  export type CourseProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseProgresses.
     */
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress findMany
   */
  export type CourseProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgresses to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress create
   */
  export type CourseProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseProgress.
     */
    data: XOR<CourseProgressCreateInput, CourseProgressUncheckedCreateInput>
  }

  /**
   * CourseProgress createMany
   */
  export type CourseProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseProgresses.
     */
    data: CourseProgressCreateManyInput | CourseProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseProgress createManyAndReturn
   */
  export type CourseProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CourseProgresses.
     */
    data: CourseProgressCreateManyInput | CourseProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseProgress update
   */
  export type CourseProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseProgress.
     */
    data: XOR<CourseProgressUpdateInput, CourseProgressUncheckedUpdateInput>
    /**
     * Choose, which CourseProgress to update.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress updateMany
   */
  export type CourseProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseProgresses.
     */
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which CourseProgresses to update
     */
    where?: CourseProgressWhereInput
  }

  /**
   * CourseProgress upsert
   */
  export type CourseProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseProgress to update in case it exists.
     */
    where: CourseProgressWhereUniqueInput
    /**
     * In case the CourseProgress found by the `where` argument doesn't exist, create a new CourseProgress with this data.
     */
    create: XOR<CourseProgressCreateInput, CourseProgressUncheckedCreateInput>
    /**
     * In case the CourseProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseProgressUpdateInput, CourseProgressUncheckedUpdateInput>
  }

  /**
   * CourseProgress delete
   */
  export type CourseProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter which CourseProgress to delete.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress deleteMany
   */
  export type CourseProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseProgresses to delete
     */
    where?: CourseProgressWhereInput
  }

  /**
   * CourseProgress.lessons
   */
  export type CourseProgress$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    cursor?: LessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress without action
   */
  export type CourseProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
  }


  /**
   * Model LessonProgress
   */

  export type AggregateLessonProgress = {
    _count: LessonProgressCountAggregateOutputType | null
    _avg: LessonProgressAvgAggregateOutputType | null
    _sum: LessonProgressSumAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  export type LessonProgressAvgAggregateOutputType = {
    score: number | null
    maxScore: number | null
    timeSpent: number | null
    attempts: number | null
  }

  export type LessonProgressSumAggregateOutputType = {
    score: number | null
    maxScore: number | null
    timeSpent: number | null
    attempts: number | null
  }

  export type LessonProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    lessonId: string | null
    courseId: string | null
    status: $Enums.ProgressStatus | null
    score: number | null
    maxScore: number | null
    timeSpent: number | null
    attempts: number | null
    completedAt: Date | null
    lastAccessed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    lessonId: string | null
    courseId: string | null
    status: $Enums.ProgressStatus | null
    score: number | null
    maxScore: number | null
    timeSpent: number | null
    attempts: number | null
    completedAt: Date | null
    lastAccessed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonProgressCountAggregateOutputType = {
    id: number
    userId: number
    lessonId: number
    courseId: number
    status: number
    score: number
    maxScore: number
    timeSpent: number
    attempts: number
    completedAt: number
    lastAccessed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonProgressAvgAggregateInputType = {
    score?: true
    maxScore?: true
    timeSpent?: true
    attempts?: true
  }

  export type LessonProgressSumAggregateInputType = {
    score?: true
    maxScore?: true
    timeSpent?: true
    attempts?: true
  }

  export type LessonProgressMinAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    courseId?: true
    status?: true
    score?: true
    maxScore?: true
    timeSpent?: true
    attempts?: true
    completedAt?: true
    lastAccessed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    courseId?: true
    status?: true
    score?: true
    maxScore?: true
    timeSpent?: true
    attempts?: true
    completedAt?: true
    lastAccessed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonProgressCountAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    courseId?: true
    status?: true
    score?: true
    maxScore?: true
    timeSpent?: true
    attempts?: true
    completedAt?: true
    lastAccessed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonProgress to aggregate.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonProgresses
    **/
    _count?: true | LessonProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonProgressMaxAggregateInputType
  }

  export type GetLessonProgressAggregateType<T extends LessonProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonProgress[P]>
      : GetScalarType<T[P], AggregateLessonProgress[P]>
  }




  export type LessonProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithAggregationInput | LessonProgressOrderByWithAggregationInput[]
    by: LessonProgressScalarFieldEnum[] | LessonProgressScalarFieldEnum
    having?: LessonProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonProgressCountAggregateInputType | true
    _avg?: LessonProgressAvgAggregateInputType
    _sum?: LessonProgressSumAggregateInputType
    _min?: LessonProgressMinAggregateInputType
    _max?: LessonProgressMaxAggregateInputType
  }

  export type LessonProgressGroupByOutputType = {
    id: string
    userId: string
    lessonId: string
    courseId: string
    status: $Enums.ProgressStatus
    score: number
    maxScore: number | null
    timeSpent: number
    attempts: number
    completedAt: Date | null
    lastAccessed: Date
    createdAt: Date
    updatedAt: Date
    _count: LessonProgressCountAggregateOutputType | null
    _avg: LessonProgressAvgAggregateOutputType | null
    _sum: LessonProgressSumAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  type GetLessonProgressGroupByPayload<T extends LessonProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
            : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
        }
      >
    >


  export type LessonProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    courseId?: boolean
    status?: boolean
    score?: boolean
    maxScore?: boolean
    timeSpent?: boolean
    attempts?: boolean
    completedAt?: boolean
    lastAccessed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    courseId?: boolean
    status?: boolean
    score?: boolean
    maxScore?: boolean
    timeSpent?: boolean
    attempts?: boolean
    completedAt?: boolean
    lastAccessed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    courseId?: boolean
    status?: boolean
    score?: boolean
    maxScore?: boolean
    timeSpent?: boolean
    attempts?: boolean
    completedAt?: boolean
    lastAccessed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }
  export type LessonProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }

  export type $LessonProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonProgress"
    objects: {
      course: Prisma.$CourseProgressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      lessonId: string
      courseId: string
      status: $Enums.ProgressStatus
      score: number
      maxScore: number | null
      timeSpent: number
      attempts: number
      completedAt: Date | null
      lastAccessed: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lessonProgress"]>
    composites: {}
  }

  type LessonProgressGetPayload<S extends boolean | null | undefined | LessonProgressDefaultArgs> = $Result.GetResult<Prisma.$LessonProgressPayload, S>

  type LessonProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LessonProgressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LessonProgressCountAggregateInputType | true
    }

  export interface LessonProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonProgress'], meta: { name: 'LessonProgress' } }
    /**
     * Find zero or one LessonProgress that matches the filter.
     * @param {LessonProgressFindUniqueArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonProgressFindUniqueArgs>(args: SelectSubset<T, LessonProgressFindUniqueArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LessonProgress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LessonProgressFindUniqueOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LessonProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindFirstArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonProgressFindFirstArgs>(args?: SelectSubset<T, LessonProgressFindFirstArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LessonProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindFirstOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LessonProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany()
     * 
     * // Get first 10 LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonProgressFindManyArgs>(args?: SelectSubset<T, LessonProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LessonProgress.
     * @param {LessonProgressCreateArgs} args - Arguments to create a LessonProgress.
     * @example
     * // Create one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.create({
     *   data: {
     *     // ... data to create a LessonProgress
     *   }
     * })
     * 
     */
    create<T extends LessonProgressCreateArgs>(args: SelectSubset<T, LessonProgressCreateArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LessonProgresses.
     * @param {LessonProgressCreateManyArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonProgressCreateManyArgs>(args?: SelectSubset<T, LessonProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonProgresses and returns the data saved in the database.
     * @param {LessonProgressCreateManyAndReturnArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonProgresses and only return the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LessonProgress.
     * @param {LessonProgressDeleteArgs} args - Arguments to delete one LessonProgress.
     * @example
     * // Delete one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.delete({
     *   where: {
     *     // ... filter to delete one LessonProgress
     *   }
     * })
     * 
     */
    delete<T extends LessonProgressDeleteArgs>(args: SelectSubset<T, LessonProgressDeleteArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LessonProgress.
     * @param {LessonProgressUpdateArgs} args - Arguments to update one LessonProgress.
     * @example
     * // Update one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonProgressUpdateArgs>(args: SelectSubset<T, LessonProgressUpdateArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LessonProgresses.
     * @param {LessonProgressDeleteManyArgs} args - Arguments to filter LessonProgresses to delete.
     * @example
     * // Delete a few LessonProgresses
     * const { count } = await prisma.lessonProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonProgressDeleteManyArgs>(args?: SelectSubset<T, LessonProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonProgressUpdateManyArgs>(args: SelectSubset<T, LessonProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LessonProgress.
     * @param {LessonProgressUpsertArgs} args - Arguments to update or create a LessonProgress.
     * @example
     * // Update or create a LessonProgress
     * const lessonProgress = await prisma.lessonProgress.upsert({
     *   create: {
     *     // ... data to create a LessonProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonProgress we want to update
     *   }
     * })
     */
    upsert<T extends LessonProgressUpsertArgs>(args: SelectSubset<T, LessonProgressUpsertArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressCountArgs} args - Arguments to filter LessonProgresses to count.
     * @example
     * // Count the number of LessonProgresses
     * const count = await prisma.lessonProgress.count({
     *   where: {
     *     // ... the filter for the LessonProgresses we want to count
     *   }
     * })
    **/
    count<T extends LessonProgressCountArgs>(
      args?: Subset<T, LessonProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonProgressAggregateArgs>(args: Subset<T, LessonProgressAggregateArgs>): Prisma.PrismaPromise<GetLessonProgressAggregateType<T>>

    /**
     * Group by LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LessonProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonProgressGroupByArgs['orderBy'] }
        : { orderBy?: LessonProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LessonProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonProgress model
   */
  readonly fields: LessonProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseProgressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseProgressDefaultArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LessonProgress model
   */ 
  interface LessonProgressFieldRefs {
    readonly id: FieldRef<"LessonProgress", 'String'>
    readonly userId: FieldRef<"LessonProgress", 'String'>
    readonly lessonId: FieldRef<"LessonProgress", 'String'>
    readonly courseId: FieldRef<"LessonProgress", 'String'>
    readonly status: FieldRef<"LessonProgress", 'ProgressStatus'>
    readonly score: FieldRef<"LessonProgress", 'Int'>
    readonly maxScore: FieldRef<"LessonProgress", 'Int'>
    readonly timeSpent: FieldRef<"LessonProgress", 'Int'>
    readonly attempts: FieldRef<"LessonProgress", 'Int'>
    readonly completedAt: FieldRef<"LessonProgress", 'DateTime'>
    readonly lastAccessed: FieldRef<"LessonProgress", 'DateTime'>
    readonly createdAt: FieldRef<"LessonProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"LessonProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonProgress findUnique
   */
  export type LessonProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress findUniqueOrThrow
   */
  export type LessonProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress findFirst
   */
  export type LessonProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress findFirstOrThrow
   */
  export type LessonProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress findMany
   */
  export type LessonProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgresses to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress create
   */
  export type LessonProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonProgress.
     */
    data: XOR<LessonProgressCreateInput, LessonProgressUncheckedCreateInput>
  }

  /**
   * LessonProgress createMany
   */
  export type LessonProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonProgresses.
     */
    data: LessonProgressCreateManyInput | LessonProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonProgress createManyAndReturn
   */
  export type LessonProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LessonProgresses.
     */
    data: LessonProgressCreateManyInput | LessonProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonProgress update
   */
  export type LessonProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonProgress.
     */
    data: XOR<LessonProgressUpdateInput, LessonProgressUncheckedUpdateInput>
    /**
     * Choose, which LessonProgress to update.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress updateMany
   */
  export type LessonProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonProgresses.
     */
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which LessonProgresses to update
     */
    where?: LessonProgressWhereInput
  }

  /**
   * LessonProgress upsert
   */
  export type LessonProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonProgress to update in case it exists.
     */
    where: LessonProgressWhereUniqueInput
    /**
     * In case the LessonProgress found by the `where` argument doesn't exist, create a new LessonProgress with this data.
     */
    create: XOR<LessonProgressCreateInput, LessonProgressUncheckedCreateInput>
    /**
     * In case the LessonProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonProgressUpdateInput, LessonProgressUncheckedUpdateInput>
  }

  /**
   * LessonProgress delete
   */
  export type LessonProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter which LessonProgress to delete.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress deleteMany
   */
  export type LessonProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonProgresses to delete
     */
    where?: LessonProgressWhereInput
  }

  /**
   * LessonProgress without action
   */
  export type LessonProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
  }


  /**
   * Model LearningActivity
   */

  export type AggregateLearningActivity = {
    _count: LearningActivityCountAggregateOutputType | null
    _avg: LearningActivityAvgAggregateOutputType | null
    _sum: LearningActivitySumAggregateOutputType | null
    _min: LearningActivityMinAggregateOutputType | null
    _max: LearningActivityMaxAggregateOutputType | null
  }

  export type LearningActivityAvgAggregateOutputType = {
    xpEarned: number | null
  }

  export type LearningActivitySumAggregateOutputType = {
    xpEarned: number | null
  }

  export type LearningActivityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    activityType: $Enums.ActivityType | null
    activityId: string | null
    xpEarned: number | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type LearningActivityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    activityType: $Enums.ActivityType | null
    activityId: string | null
    xpEarned: number | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type LearningActivityCountAggregateOutputType = {
    id: number
    userId: number
    activityType: number
    activityId: number
    metadata: number
    xpEarned: number
    timestamp: number
    createdAt: number
    _all: number
  }


  export type LearningActivityAvgAggregateInputType = {
    xpEarned?: true
  }

  export type LearningActivitySumAggregateInputType = {
    xpEarned?: true
  }

  export type LearningActivityMinAggregateInputType = {
    id?: true
    userId?: true
    activityType?: true
    activityId?: true
    xpEarned?: true
    timestamp?: true
    createdAt?: true
  }

  export type LearningActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    activityType?: true
    activityId?: true
    xpEarned?: true
    timestamp?: true
    createdAt?: true
  }

  export type LearningActivityCountAggregateInputType = {
    id?: true
    userId?: true
    activityType?: true
    activityId?: true
    metadata?: true
    xpEarned?: true
    timestamp?: true
    createdAt?: true
    _all?: true
  }

  export type LearningActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningActivity to aggregate.
     */
    where?: LearningActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningActivities to fetch.
     */
    orderBy?: LearningActivityOrderByWithRelationInput | LearningActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningActivities
    **/
    _count?: true | LearningActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningActivityMaxAggregateInputType
  }

  export type GetLearningActivityAggregateType<T extends LearningActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningActivity[P]>
      : GetScalarType<T[P], AggregateLearningActivity[P]>
  }




  export type LearningActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningActivityWhereInput
    orderBy?: LearningActivityOrderByWithAggregationInput | LearningActivityOrderByWithAggregationInput[]
    by: LearningActivityScalarFieldEnum[] | LearningActivityScalarFieldEnum
    having?: LearningActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningActivityCountAggregateInputType | true
    _avg?: LearningActivityAvgAggregateInputType
    _sum?: LearningActivitySumAggregateInputType
    _min?: LearningActivityMinAggregateInputType
    _max?: LearningActivityMaxAggregateInputType
  }

  export type LearningActivityGroupByOutputType = {
    id: string
    userId: string
    activityType: $Enums.ActivityType
    activityId: string
    metadata: JsonValue | null
    xpEarned: number
    timestamp: Date
    createdAt: Date
    _count: LearningActivityCountAggregateOutputType | null
    _avg: LearningActivityAvgAggregateOutputType | null
    _sum: LearningActivitySumAggregateOutputType | null
    _min: LearningActivityMinAggregateOutputType | null
    _max: LearningActivityMaxAggregateOutputType | null
  }

  type GetLearningActivityGroupByPayload<T extends LearningActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningActivityGroupByOutputType[P]>
            : GetScalarType<T[P], LearningActivityGroupByOutputType[P]>
        }
      >
    >


  export type LearningActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    activityType?: boolean
    activityId?: boolean
    metadata?: boolean
    xpEarned?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["learningActivity"]>

  export type LearningActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    activityType?: boolean
    activityId?: boolean
    metadata?: boolean
    xpEarned?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["learningActivity"]>

  export type LearningActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    activityType?: boolean
    activityId?: boolean
    metadata?: boolean
    xpEarned?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }


  export type $LearningActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningActivity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      activityType: $Enums.ActivityType
      activityId: string
      metadata: Prisma.JsonValue | null
      xpEarned: number
      timestamp: Date
      createdAt: Date
    }, ExtArgs["result"]["learningActivity"]>
    composites: {}
  }

  type LearningActivityGetPayload<S extends boolean | null | undefined | LearningActivityDefaultArgs> = $Result.GetResult<Prisma.$LearningActivityPayload, S>

  type LearningActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LearningActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LearningActivityCountAggregateInputType | true
    }

  export interface LearningActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningActivity'], meta: { name: 'LearningActivity' } }
    /**
     * Find zero or one LearningActivity that matches the filter.
     * @param {LearningActivityFindUniqueArgs} args - Arguments to find a LearningActivity
     * @example
     * // Get one LearningActivity
     * const learningActivity = await prisma.learningActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningActivityFindUniqueArgs>(args: SelectSubset<T, LearningActivityFindUniqueArgs<ExtArgs>>): Prisma__LearningActivityClient<$Result.GetResult<Prisma.$LearningActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LearningActivity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LearningActivityFindUniqueOrThrowArgs} args - Arguments to find a LearningActivity
     * @example
     * // Get one LearningActivity
     * const learningActivity = await prisma.learningActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningActivityClient<$Result.GetResult<Prisma.$LearningActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LearningActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningActivityFindFirstArgs} args - Arguments to find a LearningActivity
     * @example
     * // Get one LearningActivity
     * const learningActivity = await prisma.learningActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningActivityFindFirstArgs>(args?: SelectSubset<T, LearningActivityFindFirstArgs<ExtArgs>>): Prisma__LearningActivityClient<$Result.GetResult<Prisma.$LearningActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LearningActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningActivityFindFirstOrThrowArgs} args - Arguments to find a LearningActivity
     * @example
     * // Get one LearningActivity
     * const learningActivity = await prisma.learningActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningActivityClient<$Result.GetResult<Prisma.$LearningActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LearningActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningActivities
     * const learningActivities = await prisma.learningActivity.findMany()
     * 
     * // Get first 10 LearningActivities
     * const learningActivities = await prisma.learningActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningActivityWithIdOnly = await prisma.learningActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningActivityFindManyArgs>(args?: SelectSubset<T, LearningActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LearningActivity.
     * @param {LearningActivityCreateArgs} args - Arguments to create a LearningActivity.
     * @example
     * // Create one LearningActivity
     * const LearningActivity = await prisma.learningActivity.create({
     *   data: {
     *     // ... data to create a LearningActivity
     *   }
     * })
     * 
     */
    create<T extends LearningActivityCreateArgs>(args: SelectSubset<T, LearningActivityCreateArgs<ExtArgs>>): Prisma__LearningActivityClient<$Result.GetResult<Prisma.$LearningActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LearningActivities.
     * @param {LearningActivityCreateManyArgs} args - Arguments to create many LearningActivities.
     * @example
     * // Create many LearningActivities
     * const learningActivity = await prisma.learningActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningActivityCreateManyArgs>(args?: SelectSubset<T, LearningActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningActivities and returns the data saved in the database.
     * @param {LearningActivityCreateManyAndReturnArgs} args - Arguments to create many LearningActivities.
     * @example
     * // Create many LearningActivities
     * const learningActivity = await prisma.learningActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningActivities and only return the `id`
     * const learningActivityWithIdOnly = await prisma.learningActivity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningActivityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LearningActivity.
     * @param {LearningActivityDeleteArgs} args - Arguments to delete one LearningActivity.
     * @example
     * // Delete one LearningActivity
     * const LearningActivity = await prisma.learningActivity.delete({
     *   where: {
     *     // ... filter to delete one LearningActivity
     *   }
     * })
     * 
     */
    delete<T extends LearningActivityDeleteArgs>(args: SelectSubset<T, LearningActivityDeleteArgs<ExtArgs>>): Prisma__LearningActivityClient<$Result.GetResult<Prisma.$LearningActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LearningActivity.
     * @param {LearningActivityUpdateArgs} args - Arguments to update one LearningActivity.
     * @example
     * // Update one LearningActivity
     * const learningActivity = await prisma.learningActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningActivityUpdateArgs>(args: SelectSubset<T, LearningActivityUpdateArgs<ExtArgs>>): Prisma__LearningActivityClient<$Result.GetResult<Prisma.$LearningActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LearningActivities.
     * @param {LearningActivityDeleteManyArgs} args - Arguments to filter LearningActivities to delete.
     * @example
     * // Delete a few LearningActivities
     * const { count } = await prisma.learningActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningActivityDeleteManyArgs>(args?: SelectSubset<T, LearningActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningActivities
     * const learningActivity = await prisma.learningActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningActivityUpdateManyArgs>(args: SelectSubset<T, LearningActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LearningActivity.
     * @param {LearningActivityUpsertArgs} args - Arguments to update or create a LearningActivity.
     * @example
     * // Update or create a LearningActivity
     * const learningActivity = await prisma.learningActivity.upsert({
     *   create: {
     *     // ... data to create a LearningActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningActivity we want to update
     *   }
     * })
     */
    upsert<T extends LearningActivityUpsertArgs>(args: SelectSubset<T, LearningActivityUpsertArgs<ExtArgs>>): Prisma__LearningActivityClient<$Result.GetResult<Prisma.$LearningActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LearningActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningActivityCountArgs} args - Arguments to filter LearningActivities to count.
     * @example
     * // Count the number of LearningActivities
     * const count = await prisma.learningActivity.count({
     *   where: {
     *     // ... the filter for the LearningActivities we want to count
     *   }
     * })
    **/
    count<T extends LearningActivityCountArgs>(
      args?: Subset<T, LearningActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LearningActivityAggregateArgs>(args: Subset<T, LearningActivityAggregateArgs>): Prisma.PrismaPromise<GetLearningActivityAggregateType<T>>

    /**
     * Group by LearningActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LearningActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningActivityGroupByArgs['orderBy'] }
        : { orderBy?: LearningActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LearningActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningActivity model
   */
  readonly fields: LearningActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LearningActivity model
   */ 
  interface LearningActivityFieldRefs {
    readonly id: FieldRef<"LearningActivity", 'String'>
    readonly userId: FieldRef<"LearningActivity", 'String'>
    readonly activityType: FieldRef<"LearningActivity", 'ActivityType'>
    readonly activityId: FieldRef<"LearningActivity", 'String'>
    readonly metadata: FieldRef<"LearningActivity", 'Json'>
    readonly xpEarned: FieldRef<"LearningActivity", 'Int'>
    readonly timestamp: FieldRef<"LearningActivity", 'DateTime'>
    readonly createdAt: FieldRef<"LearningActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningActivity findUnique
   */
  export type LearningActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelect<ExtArgs> | null
    /**
     * Filter, which LearningActivity to fetch.
     */
    where: LearningActivityWhereUniqueInput
  }

  /**
   * LearningActivity findUniqueOrThrow
   */
  export type LearningActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelect<ExtArgs> | null
    /**
     * Filter, which LearningActivity to fetch.
     */
    where: LearningActivityWhereUniqueInput
  }

  /**
   * LearningActivity findFirst
   */
  export type LearningActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelect<ExtArgs> | null
    /**
     * Filter, which LearningActivity to fetch.
     */
    where?: LearningActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningActivities to fetch.
     */
    orderBy?: LearningActivityOrderByWithRelationInput | LearningActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningActivities.
     */
    cursor?: LearningActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningActivities.
     */
    distinct?: LearningActivityScalarFieldEnum | LearningActivityScalarFieldEnum[]
  }

  /**
   * LearningActivity findFirstOrThrow
   */
  export type LearningActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelect<ExtArgs> | null
    /**
     * Filter, which LearningActivity to fetch.
     */
    where?: LearningActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningActivities to fetch.
     */
    orderBy?: LearningActivityOrderByWithRelationInput | LearningActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningActivities.
     */
    cursor?: LearningActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningActivities.
     */
    distinct?: LearningActivityScalarFieldEnum | LearningActivityScalarFieldEnum[]
  }

  /**
   * LearningActivity findMany
   */
  export type LearningActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelect<ExtArgs> | null
    /**
     * Filter, which LearningActivities to fetch.
     */
    where?: LearningActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningActivities to fetch.
     */
    orderBy?: LearningActivityOrderByWithRelationInput | LearningActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningActivities.
     */
    cursor?: LearningActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningActivities.
     */
    skip?: number
    distinct?: LearningActivityScalarFieldEnum | LearningActivityScalarFieldEnum[]
  }

  /**
   * LearningActivity create
   */
  export type LearningActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelect<ExtArgs> | null
    /**
     * The data needed to create a LearningActivity.
     */
    data: XOR<LearningActivityCreateInput, LearningActivityUncheckedCreateInput>
  }

  /**
   * LearningActivity createMany
   */
  export type LearningActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningActivities.
     */
    data: LearningActivityCreateManyInput | LearningActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningActivity createManyAndReturn
   */
  export type LearningActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LearningActivities.
     */
    data: LearningActivityCreateManyInput | LearningActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningActivity update
   */
  export type LearningActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelect<ExtArgs> | null
    /**
     * The data needed to update a LearningActivity.
     */
    data: XOR<LearningActivityUpdateInput, LearningActivityUncheckedUpdateInput>
    /**
     * Choose, which LearningActivity to update.
     */
    where: LearningActivityWhereUniqueInput
  }

  /**
   * LearningActivity updateMany
   */
  export type LearningActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningActivities.
     */
    data: XOR<LearningActivityUpdateManyMutationInput, LearningActivityUncheckedUpdateManyInput>
    /**
     * Filter which LearningActivities to update
     */
    where?: LearningActivityWhereInput
  }

  /**
   * LearningActivity upsert
   */
  export type LearningActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelect<ExtArgs> | null
    /**
     * The filter to search for the LearningActivity to update in case it exists.
     */
    where: LearningActivityWhereUniqueInput
    /**
     * In case the LearningActivity found by the `where` argument doesn't exist, create a new LearningActivity with this data.
     */
    create: XOR<LearningActivityCreateInput, LearningActivityUncheckedCreateInput>
    /**
     * In case the LearningActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningActivityUpdateInput, LearningActivityUncheckedUpdateInput>
  }

  /**
   * LearningActivity delete
   */
  export type LearningActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelect<ExtArgs> | null
    /**
     * Filter which LearningActivity to delete.
     */
    where: LearningActivityWhereUniqueInput
  }

  /**
   * LearningActivity deleteMany
   */
  export type LearningActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningActivities to delete
     */
    where?: LearningActivityWhereInput
  }

  /**
   * LearningActivity without action
   */
  export type LearningActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningActivity
     */
    select?: LearningActivitySelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalXp: 'totalXp',
    level: 'level',
    streakDays: 'streakDays',
    bestStreak: 'bestStreak',
    coursesCompleted: 'coursesCompleted',
    lessonsCompleted: 'lessonsCompleted',
    totalTimeSpent: 'totalTimeSpent',
    lastActive: 'lastActive',
    lastStreakDate: 'lastStreakDate',
    updatedAt: 'updatedAt'
  };

  export type UserStatsScalarFieldEnum = (typeof UserStatsScalarFieldEnum)[keyof typeof UserStatsScalarFieldEnum]


  export const CourseProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    status: 'status',
    progressPercentage: 'progressPercentage',
    lessonsCompleted: 'lessonsCompleted',
    totalLessons: 'totalLessons',
    score: 'score',
    timeSpent: 'timeSpent',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    lastAccessed: 'lastAccessed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseProgressScalarFieldEnum = (typeof CourseProgressScalarFieldEnum)[keyof typeof CourseProgressScalarFieldEnum]


  export const LessonProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    courseId: 'courseId',
    status: 'status',
    score: 'score',
    maxScore: 'maxScore',
    timeSpent: 'timeSpent',
    attempts: 'attempts',
    completedAt: 'completedAt',
    lastAccessed: 'lastAccessed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonProgressScalarFieldEnum = (typeof LessonProgressScalarFieldEnum)[keyof typeof LessonProgressScalarFieldEnum]


  export const LearningActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    activityType: 'activityType',
    activityId: 'activityId',
    metadata: 'metadata',
    xpEarned: 'xpEarned',
    timestamp: 'timestamp',
    createdAt: 'createdAt'
  };

  export type LearningActivityScalarFieldEnum = (typeof LearningActivityScalarFieldEnum)[keyof typeof LearningActivityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ProgressStatus'
   */
  export type EnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus'>
    


  /**
   * Reference to a field of type 'ProgressStatus[]'
   */
  export type ListEnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserStatsWhereInput = {
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    id?: StringFilter<"UserStats"> | string
    userId?: StringFilter<"UserStats"> | string
    totalXp?: IntFilter<"UserStats"> | number
    level?: IntFilter<"UserStats"> | number
    streakDays?: IntFilter<"UserStats"> | number
    bestStreak?: IntFilter<"UserStats"> | number
    coursesCompleted?: IntFilter<"UserStats"> | number
    lessonsCompleted?: IntFilter<"UserStats"> | number
    totalTimeSpent?: IntFilter<"UserStats"> | number
    lastActive?: DateTimeFilter<"UserStats"> | Date | string
    lastStreakDate?: DateTimeNullableFilter<"UserStats"> | Date | string | null
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
  }

  export type UserStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    level?: SortOrder
    streakDays?: SortOrder
    bestStreak?: SortOrder
    coursesCompleted?: SortOrder
    lessonsCompleted?: SortOrder
    totalTimeSpent?: SortOrder
    lastActive?: SortOrder
    lastStreakDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserStatsWhereInput | UserStatsWhereInput[]
    OR?: UserStatsWhereInput[]
    NOT?: UserStatsWhereInput | UserStatsWhereInput[]
    totalXp?: IntFilter<"UserStats"> | number
    level?: IntFilter<"UserStats"> | number
    streakDays?: IntFilter<"UserStats"> | number
    bestStreak?: IntFilter<"UserStats"> | number
    coursesCompleted?: IntFilter<"UserStats"> | number
    lessonsCompleted?: IntFilter<"UserStats"> | number
    totalTimeSpent?: IntFilter<"UserStats"> | number
    lastActive?: DateTimeFilter<"UserStats"> | Date | string
    lastStreakDate?: DateTimeNullableFilter<"UserStats"> | Date | string | null
    updatedAt?: DateTimeFilter<"UserStats"> | Date | string
  }, "id" | "userId">

  export type UserStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    level?: SortOrder
    streakDays?: SortOrder
    bestStreak?: SortOrder
    coursesCompleted?: SortOrder
    lessonsCompleted?: SortOrder
    totalTimeSpent?: SortOrder
    lastActive?: SortOrder
    lastStreakDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: UserStatsCountOrderByAggregateInput
    _avg?: UserStatsAvgOrderByAggregateInput
    _max?: UserStatsMaxOrderByAggregateInput
    _min?: UserStatsMinOrderByAggregateInput
    _sum?: UserStatsSumOrderByAggregateInput
  }

  export type UserStatsScalarWhereWithAggregatesInput = {
    AND?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    OR?: UserStatsScalarWhereWithAggregatesInput[]
    NOT?: UserStatsScalarWhereWithAggregatesInput | UserStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStats"> | string
    userId?: StringWithAggregatesFilter<"UserStats"> | string
    totalXp?: IntWithAggregatesFilter<"UserStats"> | number
    level?: IntWithAggregatesFilter<"UserStats"> | number
    streakDays?: IntWithAggregatesFilter<"UserStats"> | number
    bestStreak?: IntWithAggregatesFilter<"UserStats"> | number
    coursesCompleted?: IntWithAggregatesFilter<"UserStats"> | number
    lessonsCompleted?: IntWithAggregatesFilter<"UserStats"> | number
    totalTimeSpent?: IntWithAggregatesFilter<"UserStats"> | number
    lastActive?: DateTimeWithAggregatesFilter<"UserStats"> | Date | string
    lastStreakDate?: DateTimeNullableWithAggregatesFilter<"UserStats"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"UserStats"> | Date | string
  }

  export type CourseProgressWhereInput = {
    AND?: CourseProgressWhereInput | CourseProgressWhereInput[]
    OR?: CourseProgressWhereInput[]
    NOT?: CourseProgressWhereInput | CourseProgressWhereInput[]
    id?: StringFilter<"CourseProgress"> | string
    userId?: StringFilter<"CourseProgress"> | string
    courseId?: StringFilter<"CourseProgress"> | string
    status?: EnumProgressStatusFilter<"CourseProgress"> | $Enums.ProgressStatus
    progressPercentage?: IntFilter<"CourseProgress"> | number
    lessonsCompleted?: IntFilter<"CourseProgress"> | number
    totalLessons?: IntFilter<"CourseProgress"> | number
    score?: IntFilter<"CourseProgress"> | number
    timeSpent?: IntFilter<"CourseProgress"> | number
    startedAt?: DateTimeNullableFilter<"CourseProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"CourseProgress"> | Date | string | null
    lastAccessed?: DateTimeFilter<"CourseProgress"> | Date | string
    createdAt?: DateTimeFilter<"CourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"CourseProgress"> | Date | string
    lessons?: LessonProgressListRelationFilter
  }

  export type CourseProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    progressPercentage?: SortOrder
    lessonsCompleted?: SortOrder
    totalLessons?: SortOrder
    score?: SortOrder
    timeSpent?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessons?: LessonProgressOrderByRelationAggregateInput
  }

  export type CourseProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseId?: CourseProgressUserIdCourseIdCompoundUniqueInput
    AND?: CourseProgressWhereInput | CourseProgressWhereInput[]
    OR?: CourseProgressWhereInput[]
    NOT?: CourseProgressWhereInput | CourseProgressWhereInput[]
    userId?: StringFilter<"CourseProgress"> | string
    courseId?: StringFilter<"CourseProgress"> | string
    status?: EnumProgressStatusFilter<"CourseProgress"> | $Enums.ProgressStatus
    progressPercentage?: IntFilter<"CourseProgress"> | number
    lessonsCompleted?: IntFilter<"CourseProgress"> | number
    totalLessons?: IntFilter<"CourseProgress"> | number
    score?: IntFilter<"CourseProgress"> | number
    timeSpent?: IntFilter<"CourseProgress"> | number
    startedAt?: DateTimeNullableFilter<"CourseProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"CourseProgress"> | Date | string | null
    lastAccessed?: DateTimeFilter<"CourseProgress"> | Date | string
    createdAt?: DateTimeFilter<"CourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"CourseProgress"> | Date | string
    lessons?: LessonProgressListRelationFilter
  }, "id" | "userId_courseId">

  export type CourseProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    progressPercentage?: SortOrder
    lessonsCompleted?: SortOrder
    totalLessons?: SortOrder
    score?: SortOrder
    timeSpent?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseProgressCountOrderByAggregateInput
    _avg?: CourseProgressAvgOrderByAggregateInput
    _max?: CourseProgressMaxOrderByAggregateInput
    _min?: CourseProgressMinOrderByAggregateInput
    _sum?: CourseProgressSumOrderByAggregateInput
  }

  export type CourseProgressScalarWhereWithAggregatesInput = {
    AND?: CourseProgressScalarWhereWithAggregatesInput | CourseProgressScalarWhereWithAggregatesInput[]
    OR?: CourseProgressScalarWhereWithAggregatesInput[]
    NOT?: CourseProgressScalarWhereWithAggregatesInput | CourseProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseProgress"> | string
    userId?: StringWithAggregatesFilter<"CourseProgress"> | string
    courseId?: StringWithAggregatesFilter<"CourseProgress"> | string
    status?: EnumProgressStatusWithAggregatesFilter<"CourseProgress"> | $Enums.ProgressStatus
    progressPercentage?: IntWithAggregatesFilter<"CourseProgress"> | number
    lessonsCompleted?: IntWithAggregatesFilter<"CourseProgress"> | number
    totalLessons?: IntWithAggregatesFilter<"CourseProgress"> | number
    score?: IntWithAggregatesFilter<"CourseProgress"> | number
    timeSpent?: IntWithAggregatesFilter<"CourseProgress"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"CourseProgress"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"CourseProgress"> | Date | string | null
    lastAccessed?: DateTimeWithAggregatesFilter<"CourseProgress"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CourseProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseProgress"> | Date | string
  }

  export type LessonProgressWhereInput = {
    AND?: LessonProgressWhereInput | LessonProgressWhereInput[]
    OR?: LessonProgressWhereInput[]
    NOT?: LessonProgressWhereInput | LessonProgressWhereInput[]
    id?: StringFilter<"LessonProgress"> | string
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    courseId?: StringFilter<"LessonProgress"> | string
    status?: EnumProgressStatusFilter<"LessonProgress"> | $Enums.ProgressStatus
    score?: IntFilter<"LessonProgress"> | number
    maxScore?: IntNullableFilter<"LessonProgress"> | number | null
    timeSpent?: IntFilter<"LessonProgress"> | number
    attempts?: IntFilter<"LessonProgress"> | number
    completedAt?: DateTimeNullableFilter<"LessonProgress"> | Date | string | null
    lastAccessed?: DateTimeFilter<"LessonProgress"> | Date | string
    createdAt?: DateTimeFilter<"LessonProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    course?: XOR<CourseProgressRelationFilter, CourseProgressWhereInput>
  }

  export type LessonProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    maxScore?: SortOrderInput | SortOrder
    timeSpent?: SortOrder
    attempts?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseProgressOrderByWithRelationInput
  }

  export type LessonProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_lessonId?: LessonProgressUserIdLessonIdCompoundUniqueInput
    AND?: LessonProgressWhereInput | LessonProgressWhereInput[]
    OR?: LessonProgressWhereInput[]
    NOT?: LessonProgressWhereInput | LessonProgressWhereInput[]
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    courseId?: StringFilter<"LessonProgress"> | string
    status?: EnumProgressStatusFilter<"LessonProgress"> | $Enums.ProgressStatus
    score?: IntFilter<"LessonProgress"> | number
    maxScore?: IntNullableFilter<"LessonProgress"> | number | null
    timeSpent?: IntFilter<"LessonProgress"> | number
    attempts?: IntFilter<"LessonProgress"> | number
    completedAt?: DateTimeNullableFilter<"LessonProgress"> | Date | string | null
    lastAccessed?: DateTimeFilter<"LessonProgress"> | Date | string
    createdAt?: DateTimeFilter<"LessonProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    course?: XOR<CourseProgressRelationFilter, CourseProgressWhereInput>
  }, "id" | "userId_lessonId">

  export type LessonProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    maxScore?: SortOrderInput | SortOrder
    timeSpent?: SortOrder
    attempts?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonProgressCountOrderByAggregateInput
    _avg?: LessonProgressAvgOrderByAggregateInput
    _max?: LessonProgressMaxOrderByAggregateInput
    _min?: LessonProgressMinOrderByAggregateInput
    _sum?: LessonProgressSumOrderByAggregateInput
  }

  export type LessonProgressScalarWhereWithAggregatesInput = {
    AND?: LessonProgressScalarWhereWithAggregatesInput | LessonProgressScalarWhereWithAggregatesInput[]
    OR?: LessonProgressScalarWhereWithAggregatesInput[]
    NOT?: LessonProgressScalarWhereWithAggregatesInput | LessonProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonProgress"> | string
    userId?: StringWithAggregatesFilter<"LessonProgress"> | string
    lessonId?: StringWithAggregatesFilter<"LessonProgress"> | string
    courseId?: StringWithAggregatesFilter<"LessonProgress"> | string
    status?: EnumProgressStatusWithAggregatesFilter<"LessonProgress"> | $Enums.ProgressStatus
    score?: IntWithAggregatesFilter<"LessonProgress"> | number
    maxScore?: IntNullableWithAggregatesFilter<"LessonProgress"> | number | null
    timeSpent?: IntWithAggregatesFilter<"LessonProgress"> | number
    attempts?: IntWithAggregatesFilter<"LessonProgress"> | number
    completedAt?: DateTimeNullableWithAggregatesFilter<"LessonProgress"> | Date | string | null
    lastAccessed?: DateTimeWithAggregatesFilter<"LessonProgress"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LessonProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LessonProgress"> | Date | string
  }

  export type LearningActivityWhereInput = {
    AND?: LearningActivityWhereInput | LearningActivityWhereInput[]
    OR?: LearningActivityWhereInput[]
    NOT?: LearningActivityWhereInput | LearningActivityWhereInput[]
    id?: StringFilter<"LearningActivity"> | string
    userId?: StringFilter<"LearningActivity"> | string
    activityType?: EnumActivityTypeFilter<"LearningActivity"> | $Enums.ActivityType
    activityId?: StringFilter<"LearningActivity"> | string
    metadata?: JsonNullableFilter<"LearningActivity">
    xpEarned?: IntFilter<"LearningActivity"> | number
    timestamp?: DateTimeFilter<"LearningActivity"> | Date | string
    createdAt?: DateTimeFilter<"LearningActivity"> | Date | string
  }

  export type LearningActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    activityType?: SortOrder
    activityId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    xpEarned?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningActivityWhereInput | LearningActivityWhereInput[]
    OR?: LearningActivityWhereInput[]
    NOT?: LearningActivityWhereInput | LearningActivityWhereInput[]
    userId?: StringFilter<"LearningActivity"> | string
    activityType?: EnumActivityTypeFilter<"LearningActivity"> | $Enums.ActivityType
    activityId?: StringFilter<"LearningActivity"> | string
    metadata?: JsonNullableFilter<"LearningActivity">
    xpEarned?: IntFilter<"LearningActivity"> | number
    timestamp?: DateTimeFilter<"LearningActivity"> | Date | string
    createdAt?: DateTimeFilter<"LearningActivity"> | Date | string
  }, "id">

  export type LearningActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    activityType?: SortOrder
    activityId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    xpEarned?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    _count?: LearningActivityCountOrderByAggregateInput
    _avg?: LearningActivityAvgOrderByAggregateInput
    _max?: LearningActivityMaxOrderByAggregateInput
    _min?: LearningActivityMinOrderByAggregateInput
    _sum?: LearningActivitySumOrderByAggregateInput
  }

  export type LearningActivityScalarWhereWithAggregatesInput = {
    AND?: LearningActivityScalarWhereWithAggregatesInput | LearningActivityScalarWhereWithAggregatesInput[]
    OR?: LearningActivityScalarWhereWithAggregatesInput[]
    NOT?: LearningActivityScalarWhereWithAggregatesInput | LearningActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningActivity"> | string
    userId?: StringWithAggregatesFilter<"LearningActivity"> | string
    activityType?: EnumActivityTypeWithAggregatesFilter<"LearningActivity"> | $Enums.ActivityType
    activityId?: StringWithAggregatesFilter<"LearningActivity"> | string
    metadata?: JsonNullableWithAggregatesFilter<"LearningActivity">
    xpEarned?: IntWithAggregatesFilter<"LearningActivity"> | number
    timestamp?: DateTimeWithAggregatesFilter<"LearningActivity"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LearningActivity"> | Date | string
  }

  export type UserStatsCreateInput = {
    id?: string
    userId: string
    totalXp?: number
    level?: number
    streakDays?: number
    bestStreak?: number
    coursesCompleted?: number
    lessonsCompleted?: number
    totalTimeSpent?: number
    lastActive: Date | string
    lastStreakDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type UserStatsUncheckedCreateInput = {
    id?: string
    userId: string
    totalXp?: number
    level?: number
    streakDays?: number
    bestStreak?: number
    coursesCompleted?: number
    lessonsCompleted?: number
    totalTimeSpent?: number
    lastActive: Date | string
    lastStreakDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type UserStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    coursesCompleted?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalTimeSpent?: IntFieldUpdateOperationsInput | number
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStreakDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    coursesCompleted?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalTimeSpent?: IntFieldUpdateOperationsInput | number
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStreakDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsCreateManyInput = {
    id?: string
    userId: string
    totalXp?: number
    level?: number
    streakDays?: number
    bestStreak?: number
    coursesCompleted?: number
    lessonsCompleted?: number
    totalTimeSpent?: number
    lastActive: Date | string
    lastStreakDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type UserStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    coursesCompleted?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalTimeSpent?: IntFieldUpdateOperationsInput | number
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStreakDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    coursesCompleted?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalTimeSpent?: IntFieldUpdateOperationsInput | number
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStreakDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProgressCreateInput = {
    id?: string
    userId: string
    courseId: string
    status?: $Enums.ProgressStatus
    progressPercentage?: number
    lessonsCompleted?: number
    totalLessons?: number
    score?: number
    timeSpent?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonProgressCreateNestedManyWithoutCourseInput
  }

  export type CourseProgressUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    status?: $Enums.ProgressStatus
    progressPercentage?: number
    lessonsCompleted?: number
    totalLessons?: number
    score?: number
    timeSpent?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progressPercentage?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonProgressUpdateManyWithoutCourseNestedInput
  }

  export type CourseProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progressPercentage?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseProgressCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    status?: $Enums.ProgressStatus
    progressPercentage?: number
    lessonsCompleted?: number
    totalLessons?: number
    score?: number
    timeSpent?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progressPercentage?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progressPercentage?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateInput = {
    id?: string
    lessonId: string
    status?: $Enums.ProgressStatus
    score?: number
    maxScore?: number | null
    timeSpent?: number
    attempts?: number
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseProgressCreateNestedOneWithoutLessonsInput
  }

  export type LessonProgressUncheckedCreateInput = {
    id?: string
    userId: string
    lessonId: string
    courseId: string
    status?: $Enums.ProgressStatus
    score?: number
    maxScore?: number | null
    timeSpent?: number
    attempts?: number
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseProgressUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateManyInput = {
    id?: string
    userId: string
    lessonId: string
    courseId: string
    status?: $Enums.ProgressStatus
    score?: number
    maxScore?: number | null
    timeSpent?: number
    attempts?: number
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningActivityCreateInput = {
    id?: string
    userId: string
    activityType: $Enums.ActivityType
    activityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    xpEarned?: number
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type LearningActivityUncheckedCreateInput = {
    id?: string
    userId: string
    activityType: $Enums.ActivityType
    activityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    xpEarned?: number
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type LearningActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    xpEarned?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    xpEarned?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningActivityCreateManyInput = {
    id?: string
    userId: string
    activityType: $Enums.ActivityType
    activityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    xpEarned?: number
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type LearningActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    xpEarned?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    activityType?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    activityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    xpEarned?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    level?: SortOrder
    streakDays?: SortOrder
    bestStreak?: SortOrder
    coursesCompleted?: SortOrder
    lessonsCompleted?: SortOrder
    totalTimeSpent?: SortOrder
    lastActive?: SortOrder
    lastStreakDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsAvgOrderByAggregateInput = {
    totalXp?: SortOrder
    level?: SortOrder
    streakDays?: SortOrder
    bestStreak?: SortOrder
    coursesCompleted?: SortOrder
    lessonsCompleted?: SortOrder
    totalTimeSpent?: SortOrder
  }

  export type UserStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    level?: SortOrder
    streakDays?: SortOrder
    bestStreak?: SortOrder
    coursesCompleted?: SortOrder
    lessonsCompleted?: SortOrder
    totalTimeSpent?: SortOrder
    lastActive?: SortOrder
    lastStreakDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    level?: SortOrder
    streakDays?: SortOrder
    bestStreak?: SortOrder
    coursesCompleted?: SortOrder
    lessonsCompleted?: SortOrder
    totalTimeSpent?: SortOrder
    lastActive?: SortOrder
    lastStreakDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatsSumOrderByAggregateInput = {
    totalXp?: SortOrder
    level?: SortOrder
    streakDays?: SortOrder
    bestStreak?: SortOrder
    coursesCompleted?: SortOrder
    lessonsCompleted?: SortOrder
    totalTimeSpent?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type LessonProgressListRelationFilter = {
    every?: LessonProgressWhereInput
    some?: LessonProgressWhereInput
    none?: LessonProgressWhereInput
  }

  export type LessonProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseProgressUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type CourseProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    progressPercentage?: SortOrder
    lessonsCompleted?: SortOrder
    totalLessons?: SortOrder
    score?: SortOrder
    timeSpent?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseProgressAvgOrderByAggregateInput = {
    progressPercentage?: SortOrder
    lessonsCompleted?: SortOrder
    totalLessons?: SortOrder
    score?: SortOrder
    timeSpent?: SortOrder
  }

  export type CourseProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    progressPercentage?: SortOrder
    lessonsCompleted?: SortOrder
    totalLessons?: SortOrder
    score?: SortOrder
    timeSpent?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    progressPercentage?: SortOrder
    lessonsCompleted?: SortOrder
    totalLessons?: SortOrder
    score?: SortOrder
    timeSpent?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseProgressSumOrderByAggregateInput = {
    progressPercentage?: SortOrder
    lessonsCompleted?: SortOrder
    totalLessons?: SortOrder
    score?: SortOrder
    timeSpent?: SortOrder
  }

  export type EnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CourseProgressRelationFilter = {
    is?: CourseProgressWhereInput
    isNot?: CourseProgressWhereInput
  }

  export type LessonProgressUserIdLessonIdCompoundUniqueInput = {
    userId: string
    lessonId: string
  }

  export type LessonProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    timeSpent?: SortOrder
    attempts?: SortOrder
    completedAt?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonProgressAvgOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
    timeSpent?: SortOrder
    attempts?: SortOrder
  }

  export type LessonProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    timeSpent?: SortOrder
    attempts?: SortOrder
    completedAt?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    courseId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    maxScore?: SortOrder
    timeSpent?: SortOrder
    attempts?: SortOrder
    completedAt?: SortOrder
    lastAccessed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonProgressSumOrderByAggregateInput = {
    score?: SortOrder
    maxScore?: SortOrder
    timeSpent?: SortOrder
    attempts?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LearningActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    activityType?: SortOrder
    activityId?: SortOrder
    metadata?: SortOrder
    xpEarned?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningActivityAvgOrderByAggregateInput = {
    xpEarned?: SortOrder
  }

  export type LearningActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    activityType?: SortOrder
    activityId?: SortOrder
    xpEarned?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    activityType?: SortOrder
    activityId?: SortOrder
    xpEarned?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningActivitySumOrderByAggregateInput = {
    xpEarned?: SortOrder
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LessonProgressCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonProgressCreateWithoutCourseInput, LessonProgressUncheckedCreateWithoutCourseInput> | LessonProgressCreateWithoutCourseInput[] | LessonProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutCourseInput | LessonProgressCreateOrConnectWithoutCourseInput[]
    createMany?: LessonProgressCreateManyCourseInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type LessonProgressUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonProgressCreateWithoutCourseInput, LessonProgressUncheckedCreateWithoutCourseInput> | LessonProgressCreateWithoutCourseInput[] | LessonProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutCourseInput | LessonProgressCreateOrConnectWithoutCourseInput[]
    createMany?: LessonProgressCreateManyCourseInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type EnumProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgressStatus
  }

  export type LessonProgressUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonProgressCreateWithoutCourseInput, LessonProgressUncheckedCreateWithoutCourseInput> | LessonProgressCreateWithoutCourseInput[] | LessonProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutCourseInput | LessonProgressCreateOrConnectWithoutCourseInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutCourseInput | LessonProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonProgressCreateManyCourseInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutCourseInput | LessonProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutCourseInput | LessonProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type LessonProgressUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonProgressCreateWithoutCourseInput, LessonProgressUncheckedCreateWithoutCourseInput> | LessonProgressCreateWithoutCourseInput[] | LessonProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutCourseInput | LessonProgressCreateOrConnectWithoutCourseInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutCourseInput | LessonProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonProgressCreateManyCourseInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutCourseInput | LessonProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutCourseInput | LessonProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type CourseProgressCreateNestedOneWithoutLessonsInput = {
    create?: XOR<CourseProgressCreateWithoutLessonsInput, CourseProgressUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseProgressCreateOrConnectWithoutLessonsInput
    connect?: CourseProgressWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseProgressUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<CourseProgressCreateWithoutLessonsInput, CourseProgressUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseProgressCreateOrConnectWithoutLessonsInput
    upsert?: CourseProgressUpsertWithoutLessonsInput
    connect?: CourseProgressWhereUniqueInput
    update?: XOR<XOR<CourseProgressUpdateToOneWithWhereWithoutLessonsInput, CourseProgressUpdateWithoutLessonsInput>, CourseProgressUncheckedUpdateWithoutLessonsInput>
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LessonProgressCreateWithoutCourseInput = {
    id?: string
    lessonId: string
    status?: $Enums.ProgressStatus
    score?: number
    maxScore?: number | null
    timeSpent?: number
    attempts?: number
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressUncheckedCreateWithoutCourseInput = {
    id?: string
    lessonId: string
    status?: $Enums.ProgressStatus
    score?: number
    maxScore?: number | null
    timeSpent?: number
    attempts?: number
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressCreateOrConnectWithoutCourseInput = {
    where: LessonProgressWhereUniqueInput
    create: XOR<LessonProgressCreateWithoutCourseInput, LessonProgressUncheckedCreateWithoutCourseInput>
  }

  export type LessonProgressCreateManyCourseInputEnvelope = {
    data: LessonProgressCreateManyCourseInput | LessonProgressCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type LessonProgressUpsertWithWhereUniqueWithoutCourseInput = {
    where: LessonProgressWhereUniqueInput
    update: XOR<LessonProgressUpdateWithoutCourseInput, LessonProgressUncheckedUpdateWithoutCourseInput>
    create: XOR<LessonProgressCreateWithoutCourseInput, LessonProgressUncheckedCreateWithoutCourseInput>
  }

  export type LessonProgressUpdateWithWhereUniqueWithoutCourseInput = {
    where: LessonProgressWhereUniqueInput
    data: XOR<LessonProgressUpdateWithoutCourseInput, LessonProgressUncheckedUpdateWithoutCourseInput>
  }

  export type LessonProgressUpdateManyWithWhereWithoutCourseInput = {
    where: LessonProgressScalarWhereInput
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyWithoutCourseInput>
  }

  export type LessonProgressScalarWhereInput = {
    AND?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
    OR?: LessonProgressScalarWhereInput[]
    NOT?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
    id?: StringFilter<"LessonProgress"> | string
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    courseId?: StringFilter<"LessonProgress"> | string
    status?: EnumProgressStatusFilter<"LessonProgress"> | $Enums.ProgressStatus
    score?: IntFilter<"LessonProgress"> | number
    maxScore?: IntNullableFilter<"LessonProgress"> | number | null
    timeSpent?: IntFilter<"LessonProgress"> | number
    attempts?: IntFilter<"LessonProgress"> | number
    completedAt?: DateTimeNullableFilter<"LessonProgress"> | Date | string | null
    lastAccessed?: DateTimeFilter<"LessonProgress"> | Date | string
    createdAt?: DateTimeFilter<"LessonProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LessonProgress"> | Date | string
  }

  export type CourseProgressCreateWithoutLessonsInput = {
    id?: string
    userId: string
    courseId: string
    status?: $Enums.ProgressStatus
    progressPercentage?: number
    lessonsCompleted?: number
    totalLessons?: number
    score?: number
    timeSpent?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProgressUncheckedCreateWithoutLessonsInput = {
    id?: string
    userId: string
    courseId: string
    status?: $Enums.ProgressStatus
    progressPercentage?: number
    lessonsCompleted?: number
    totalLessons?: number
    score?: number
    timeSpent?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProgressCreateOrConnectWithoutLessonsInput = {
    where: CourseProgressWhereUniqueInput
    create: XOR<CourseProgressCreateWithoutLessonsInput, CourseProgressUncheckedCreateWithoutLessonsInput>
  }

  export type CourseProgressUpsertWithoutLessonsInput = {
    update: XOR<CourseProgressUpdateWithoutLessonsInput, CourseProgressUncheckedUpdateWithoutLessonsInput>
    create: XOR<CourseProgressCreateWithoutLessonsInput, CourseProgressUncheckedCreateWithoutLessonsInput>
    where?: CourseProgressWhereInput
  }

  export type CourseProgressUpdateToOneWithWhereWithoutLessonsInput = {
    where?: CourseProgressWhereInput
    data: XOR<CourseProgressUpdateWithoutLessonsInput, CourseProgressUncheckedUpdateWithoutLessonsInput>
  }

  export type CourseProgressUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progressPercentage?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProgressUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    progressPercentage?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalLessons?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    timeSpent?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateManyCourseInput = {
    id?: string
    lessonId: string
    status?: $Enums.ProgressStatus
    score?: number
    maxScore?: number | null
    timeSpent?: number
    attempts?: number
    completedAt?: Date | string | null
    lastAccessed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: IntFieldUpdateOperationsInput | number
    maxScore?: NullableIntFieldUpdateOperationsInput | number | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CourseProgressCountOutputTypeDefaultArgs instead
     */
    export type CourseProgressCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseProgressCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStatsDefaultArgs instead
     */
    export type UserStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStatsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseProgressDefaultArgs instead
     */
    export type CourseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseProgressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LessonProgressDefaultArgs instead
     */
    export type LessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonProgressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LearningActivityDefaultArgs instead
     */
    export type LearningActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LearningActivityDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}