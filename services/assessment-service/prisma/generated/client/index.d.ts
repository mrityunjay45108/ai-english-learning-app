
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
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>
/**
 * Model AssessmentQuestion
 * 
 */
export type AssessmentQuestion = $Result.DefaultSelection<Prisma.$AssessmentQuestionPayload>
/**
 * Model AssessmentAttempt
 * 
 */
export type AssessmentAttempt = $Result.DefaultSelection<Prisma.$AssessmentAttemptPayload>
/**
 * Model AssessmentResult
 * 
 */
export type AssessmentResult = $Result.DefaultSelection<Prisma.$AssessmentResultPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AssessmentType: {
  INITIAL: 'INITIAL',
  GRAMMAR: 'GRAMMAR',
  VOCABULARY: 'VOCABULARY',
  LISTENING: 'LISTENING',
  READING: 'READING',
  SPEAKING: 'SPEAKING'
};

export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType]


export const AssessmentStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
  EXPIRED: 'EXPIRED'
};

export type AssessmentStatus = (typeof AssessmentStatus)[keyof typeof AssessmentStatus]


export const QuestionType: {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  FILL_BLANK: 'FILL_BLANK',
  TRUE_FALSE: 'TRUE_FALSE',
  MATCHING: 'MATCHING',
  SPEAKING: 'SPEAKING'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const QuestionCategory: {
  GRAMMAR: 'GRAMMAR',
  VOCABULARY: 'VOCABULARY',
  LISTENING: 'LISTENING',
  READING: 'READING',
  SPEAKING: 'SPEAKING'
};

export type QuestionCategory = (typeof QuestionCategory)[keyof typeof QuestionCategory]


export const DifficultyLevel: {
  BEGINNER: 'BEGINNER',
  ELEMENTARY: 'ELEMENTARY',
  INTERMEDIATE: 'INTERMEDIATE',
  UPPER_INTERMEDIATE: 'UPPER_INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type DifficultyLevel = (typeof DifficultyLevel)[keyof typeof DifficultyLevel]

}

export type AssessmentType = $Enums.AssessmentType

export const AssessmentType: typeof $Enums.AssessmentType

export type AssessmentStatus = $Enums.AssessmentStatus

export const AssessmentStatus: typeof $Enums.AssessmentStatus

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

export type QuestionCategory = $Enums.QuestionCategory

export const QuestionCategory: typeof $Enums.QuestionCategory

export type DifficultyLevel = $Enums.DifficultyLevel

export const DifficultyLevel: typeof $Enums.DifficultyLevel

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assessments
 * const assessments = await prisma.assessment.findMany()
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
   * // Fetch zero or more Assessments
   * const assessments = await prisma.assessment.findMany()
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
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs>;

  /**
   * `prisma.assessmentQuestion`: Exposes CRUD operations for the **AssessmentQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentQuestions
    * const assessmentQuestions = await prisma.assessmentQuestion.findMany()
    * ```
    */
  get assessmentQuestion(): Prisma.AssessmentQuestionDelegate<ExtArgs>;

  /**
   * `prisma.assessmentAttempt`: Exposes CRUD operations for the **AssessmentAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentAttempts
    * const assessmentAttempts = await prisma.assessmentAttempt.findMany()
    * ```
    */
  get assessmentAttempt(): Prisma.AssessmentAttemptDelegate<ExtArgs>;

  /**
   * `prisma.assessmentResult`: Exposes CRUD operations for the **AssessmentResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentResults
    * const assessmentResults = await prisma.assessmentResult.findMany()
    * ```
    */
  get assessmentResult(): Prisma.AssessmentResultDelegate<ExtArgs>;
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
    Assessment: 'Assessment',
    AssessmentQuestion: 'AssessmentQuestion',
    AssessmentAttempt: 'AssessmentAttempt',
    AssessmentResult: 'AssessmentResult'
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
      modelProps: "assessment" | "assessmentQuestion" | "assessmentAttempt" | "assessmentResult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
      AssessmentQuestion: {
        payload: Prisma.$AssessmentQuestionPayload<ExtArgs>
        fields: Prisma.AssessmentQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          findFirst: {
            args: Prisma.AssessmentQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          findMany: {
            args: Prisma.AssessmentQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>[]
          }
          create: {
            args: Prisma.AssessmentQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          createMany: {
            args: Prisma.AssessmentQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>[]
          }
          delete: {
            args: Prisma.AssessmentQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          update: {
            args: Prisma.AssessmentQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          aggregate: {
            args: Prisma.AssessmentQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentQuestion>
          }
          groupBy: {
            args: Prisma.AssessmentQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentQuestionCountAggregateOutputType> | number
          }
        }
      }
      AssessmentAttempt: {
        payload: Prisma.$AssessmentAttemptPayload<ExtArgs>
        fields: Prisma.AssessmentAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          findFirst: {
            args: Prisma.AssessmentAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          findMany: {
            args: Prisma.AssessmentAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>[]
          }
          create: {
            args: Prisma.AssessmentAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          createMany: {
            args: Prisma.AssessmentAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>[]
          }
          delete: {
            args: Prisma.AssessmentAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          update: {
            args: Prisma.AssessmentAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentAttempt>
          }
          groupBy: {
            args: Prisma.AssessmentAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentAttemptCountAggregateOutputType> | number
          }
        }
      }
      AssessmentResult: {
        payload: Prisma.$AssessmentResultPayload<ExtArgs>
        fields: Prisma.AssessmentResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResultPayload>
          }
          findFirst: {
            args: Prisma.AssessmentResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResultPayload>
          }
          findMany: {
            args: Prisma.AssessmentResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResultPayload>[]
          }
          create: {
            args: Prisma.AssessmentResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResultPayload>
          }
          createMany: {
            args: Prisma.AssessmentResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResultPayload>[]
          }
          delete: {
            args: Prisma.AssessmentResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResultPayload>
          }
          update: {
            args: Prisma.AssessmentResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResultPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResultPayload>
          }
          aggregate: {
            args: Prisma.AssessmentResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentResult>
          }
          groupBy: {
            args: Prisma.AssessmentResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentResultCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentResultCountAggregateOutputType> | number
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
   * Count Type AssessmentCountOutputType
   */

  export type AssessmentCountOutputType = {
    questions: number
    attempts: number
  }

  export type AssessmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | AssessmentCountOutputTypeCountQuestionsArgs
    attempts?: boolean | AssessmentCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentCountOutputType
     */
    select?: AssessmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionWhereInput
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAttemptWhereInput
  }


  /**
   * Count Type AssessmentQuestionCountOutputType
   */

  export type AssessmentQuestionCountOutputType = {
    attempts: number
  }

  export type AssessmentQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | AssessmentQuestionCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * AssessmentQuestionCountOutputType without action
   */
  export type AssessmentQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionCountOutputType
     */
    select?: AssessmentQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentQuestionCountOutputType without action
   */
  export type AssessmentQuestionCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAttemptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentAvgAggregateOutputType = {
    totalQuestions: number | null
    timeLimit: number | null
    passingScore: number | null
  }

  export type AssessmentSumAggregateOutputType = {
    totalQuestions: number | null
    timeLimit: number | null
    passingScore: number | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    type: $Enums.AssessmentType | null
    status: $Enums.AssessmentStatus | null
    totalQuestions: number | null
    timeLimit: number | null
    passingScore: number | null
    startedAt: Date | null
    completedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    type: $Enums.AssessmentType | null
    status: $Enums.AssessmentStatus | null
    totalQuestions: number | null
    timeLimit: number | null
    passingScore: number | null
    startedAt: Date | null
    completedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    type: number
    status: number
    totalQuestions: number
    timeLimit: number
    passingScore: number
    metadata: number
    startedAt: number
    completedAt: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentAvgAggregateInputType = {
    totalQuestions?: true
    timeLimit?: true
    passingScore?: true
  }

  export type AssessmentSumAggregateInputType = {
    totalQuestions?: true
    timeLimit?: true
    passingScore?: true
  }

  export type AssessmentMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    type?: true
    status?: true
    totalQuestions?: true
    timeLimit?: true
    passingScore?: true
    startedAt?: true
    completedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    type?: true
    status?: true
    totalQuestions?: true
    timeLimit?: true
    passingScore?: true
    startedAt?: true
    completedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    type?: true
    status?: true
    totalQuestions?: true
    timeLimit?: true
    passingScore?: true
    metadata?: true
    startedAt?: true
    completedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _avg?: AssessmentAvgAggregateInputType
    _sum?: AssessmentSumAggregateInputType
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    type: $Enums.AssessmentType
    status: $Enums.AssessmentStatus
    totalQuestions: number
    timeLimit: number | null
    passingScore: number | null
    metadata: JsonValue | null
    startedAt: Date | null
    completedAt: Date | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    totalQuestions?: boolean
    timeLimit?: boolean
    passingScore?: boolean
    metadata?: boolean
    startedAt?: boolean
    completedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | Assessment$questionsArgs<ExtArgs>
    attempts?: boolean | Assessment$attemptsArgs<ExtArgs>
    results?: boolean | Assessment$resultsArgs<ExtArgs>
    _count?: boolean | AssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    totalQuestions?: boolean
    timeLimit?: boolean
    passingScore?: boolean
    metadata?: boolean
    startedAt?: boolean
    completedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    totalQuestions?: boolean
    timeLimit?: boolean
    passingScore?: boolean
    metadata?: boolean
    startedAt?: boolean
    completedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Assessment$questionsArgs<ExtArgs>
    attempts?: boolean | Assessment$attemptsArgs<ExtArgs>
    results?: boolean | Assessment$resultsArgs<ExtArgs>
    _count?: boolean | AssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssessmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      questions: Prisma.$AssessmentQuestionPayload<ExtArgs>[]
      attempts: Prisma.$AssessmentAttemptPayload<ExtArgs>[]
      results: Prisma.$AssessmentResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      type: $Enums.AssessmentType
      status: $Enums.AssessmentStatus
      totalQuestions: number
      timeLimit: number | null
      passingScore: number | null
      metadata: Prisma.JsonValue | null
      startedAt: Date | null
      completedAt: Date | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assessments and returns the data saved in the database.
     * @param {AssessmentCreateManyAndReturnArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assessments and only return the `id`
     * const assessmentWithIdOnly = await prisma.assessment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
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
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Assessment$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findMany"> | Null>
    attempts<T extends Assessment$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findMany"> | Null>
    results<T extends Assessment$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$resultsArgs<ExtArgs>>): Prisma__AssessmentResultClient<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Assessment model
   */ 
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'String'>
    readonly userId: FieldRef<"Assessment", 'String'>
    readonly title: FieldRef<"Assessment", 'String'>
    readonly description: FieldRef<"Assessment", 'String'>
    readonly type: FieldRef<"Assessment", 'AssessmentType'>
    readonly status: FieldRef<"Assessment", 'AssessmentStatus'>
    readonly totalQuestions: FieldRef<"Assessment", 'Int'>
    readonly timeLimit: FieldRef<"Assessment", 'Int'>
    readonly passingScore: FieldRef<"Assessment", 'Int'>
    readonly metadata: FieldRef<"Assessment", 'Json'>
    readonly startedAt: FieldRef<"Assessment", 'DateTime'>
    readonly completedAt: FieldRef<"Assessment", 'DateTime'>
    readonly expiresAt: FieldRef<"Assessment", 'DateTime'>
    readonly createdAt: FieldRef<"Assessment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment createManyAndReturn
   */
  export type AssessmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
  }

  /**
   * Assessment.questions
   */
  export type Assessment$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    where?: AssessmentQuestionWhereInput
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    cursor?: AssessmentQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentQuestionScalarFieldEnum | AssessmentQuestionScalarFieldEnum[]
  }

  /**
   * Assessment.attempts
   */
  export type Assessment$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    where?: AssessmentAttemptWhereInput
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    cursor?: AssessmentAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentAttemptScalarFieldEnum | AssessmentAttemptScalarFieldEnum[]
  }

  /**
   * Assessment.results
   */
  export type Assessment$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
    where?: AssessmentResultWhereInput
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentQuestion
   */

  export type AggregateAssessmentQuestion = {
    _count: AssessmentQuestionCountAggregateOutputType | null
    _avg: AssessmentQuestionAvgAggregateOutputType | null
    _sum: AssessmentQuestionSumAggregateOutputType | null
    _min: AssessmentQuestionMinAggregateOutputType | null
    _max: AssessmentQuestionMaxAggregateOutputType | null
  }

  export type AssessmentQuestionAvgAggregateOutputType = {
    points: number | null
    orderIndex: number | null
  }

  export type AssessmentQuestionSumAggregateOutputType = {
    points: number | null
    orderIndex: number | null
  }

  export type AssessmentQuestionMinAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    questionText: string | null
    correctAnswer: string | null
    type: $Enums.QuestionType | null
    category: $Enums.QuestionCategory | null
    difficulty: $Enums.DifficultyLevel | null
    points: number | null
    audioUrl: string | null
    expectedAnswer: string | null
    orderIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentQuestionMaxAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    questionText: string | null
    correctAnswer: string | null
    type: $Enums.QuestionType | null
    category: $Enums.QuestionCategory | null
    difficulty: $Enums.DifficultyLevel | null
    points: number | null
    audioUrl: string | null
    expectedAnswer: string | null
    orderIndex: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentQuestionCountAggregateOutputType = {
    id: number
    assessmentId: number
    questionText: number
    options: number
    correctAnswer: number
    type: number
    category: number
    difficulty: number
    points: number
    audioUrl: number
    expectedAnswer: number
    orderIndex: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentQuestionAvgAggregateInputType = {
    points?: true
    orderIndex?: true
  }

  export type AssessmentQuestionSumAggregateInputType = {
    points?: true
    orderIndex?: true
  }

  export type AssessmentQuestionMinAggregateInputType = {
    id?: true
    assessmentId?: true
    questionText?: true
    correctAnswer?: true
    type?: true
    category?: true
    difficulty?: true
    points?: true
    audioUrl?: true
    expectedAnswer?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentQuestionMaxAggregateInputType = {
    id?: true
    assessmentId?: true
    questionText?: true
    correctAnswer?: true
    type?: true
    category?: true
    difficulty?: true
    points?: true
    audioUrl?: true
    expectedAnswer?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentQuestionCountAggregateInputType = {
    id?: true
    assessmentId?: true
    questionText?: true
    options?: true
    correctAnswer?: true
    type?: true
    category?: true
    difficulty?: true
    points?: true
    audioUrl?: true
    expectedAnswer?: true
    orderIndex?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentQuestion to aggregate.
     */
    where?: AssessmentQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestions to fetch.
     */
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentQuestions
    **/
    _count?: true | AssessmentQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentQuestionMaxAggregateInputType
  }

  export type GetAssessmentQuestionAggregateType<T extends AssessmentQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentQuestion[P]>
      : GetScalarType<T[P], AggregateAssessmentQuestion[P]>
  }




  export type AssessmentQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionWhereInput
    orderBy?: AssessmentQuestionOrderByWithAggregationInput | AssessmentQuestionOrderByWithAggregationInput[]
    by: AssessmentQuestionScalarFieldEnum[] | AssessmentQuestionScalarFieldEnum
    having?: AssessmentQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentQuestionCountAggregateInputType | true
    _avg?: AssessmentQuestionAvgAggregateInputType
    _sum?: AssessmentQuestionSumAggregateInputType
    _min?: AssessmentQuestionMinAggregateInputType
    _max?: AssessmentQuestionMaxAggregateInputType
  }

  export type AssessmentQuestionGroupByOutputType = {
    id: string
    assessmentId: string
    questionText: string
    options: JsonValue | null
    correctAnswer: string | null
    type: $Enums.QuestionType
    category: $Enums.QuestionCategory
    difficulty: $Enums.DifficultyLevel
    points: number
    audioUrl: string | null
    expectedAnswer: string | null
    orderIndex: number
    createdAt: Date
    updatedAt: Date
    _count: AssessmentQuestionCountAggregateOutputType | null
    _avg: AssessmentQuestionAvgAggregateOutputType | null
    _sum: AssessmentQuestionSumAggregateOutputType | null
    _min: AssessmentQuestionMinAggregateOutputType | null
    _max: AssessmentQuestionMaxAggregateOutputType | null
  }

  type GetAssessmentQuestionGroupByPayload<T extends AssessmentQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentQuestionGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    questionText?: boolean
    options?: boolean
    correctAnswer?: boolean
    type?: boolean
    category?: boolean
    difficulty?: boolean
    points?: boolean
    audioUrl?: boolean
    expectedAnswer?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    attempts?: boolean | AssessmentQuestion$attemptsArgs<ExtArgs>
    _count?: boolean | AssessmentQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentQuestion"]>

  export type AssessmentQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    questionText?: boolean
    options?: boolean
    correctAnswer?: boolean
    type?: boolean
    category?: boolean
    difficulty?: boolean
    points?: boolean
    audioUrl?: boolean
    expectedAnswer?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentQuestion"]>

  export type AssessmentQuestionSelectScalar = {
    id?: boolean
    assessmentId?: boolean
    questionText?: boolean
    options?: boolean
    correctAnswer?: boolean
    type?: boolean
    category?: boolean
    difficulty?: boolean
    points?: boolean
    audioUrl?: boolean
    expectedAnswer?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    attempts?: boolean | AssessmentQuestion$attemptsArgs<ExtArgs>
    _count?: boolean | AssessmentQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssessmentQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }

  export type $AssessmentQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentQuestion"
    objects: {
      assessment: Prisma.$AssessmentPayload<ExtArgs>
      attempts: Prisma.$AssessmentAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assessmentId: string
      questionText: string
      options: Prisma.JsonValue | null
      correctAnswer: string | null
      type: $Enums.QuestionType
      category: $Enums.QuestionCategory
      difficulty: $Enums.DifficultyLevel
      points: number
      audioUrl: string | null
      expectedAnswer: string | null
      orderIndex: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessmentQuestion"]>
    composites: {}
  }

  type AssessmentQuestionGetPayload<S extends boolean | null | undefined | AssessmentQuestionDefaultArgs> = $Result.GetResult<Prisma.$AssessmentQuestionPayload, S>

  type AssessmentQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentQuestionCountAggregateInputType | true
    }

  export interface AssessmentQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentQuestion'], meta: { name: 'AssessmentQuestion' } }
    /**
     * Find zero or one AssessmentQuestion that matches the filter.
     * @param {AssessmentQuestionFindUniqueArgs} args - Arguments to find a AssessmentQuestion
     * @example
     * // Get one AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentQuestionFindUniqueArgs>(args: SelectSubset<T, AssessmentQuestionFindUniqueArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssessmentQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentQuestionFindUniqueOrThrowArgs} args - Arguments to find a AssessmentQuestion
     * @example
     * // Get one AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssessmentQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionFindFirstArgs} args - Arguments to find a AssessmentQuestion
     * @example
     * // Get one AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentQuestionFindFirstArgs>(args?: SelectSubset<T, AssessmentQuestionFindFirstArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssessmentQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionFindFirstOrThrowArgs} args - Arguments to find a AssessmentQuestion
     * @example
     * // Get one AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssessmentQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentQuestions
     * const assessmentQuestions = await prisma.assessmentQuestion.findMany()
     * 
     * // Get first 10 AssessmentQuestions
     * const assessmentQuestions = await prisma.assessmentQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentQuestionWithIdOnly = await prisma.assessmentQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentQuestionFindManyArgs>(args?: SelectSubset<T, AssessmentQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssessmentQuestion.
     * @param {AssessmentQuestionCreateArgs} args - Arguments to create a AssessmentQuestion.
     * @example
     * // Create one AssessmentQuestion
     * const AssessmentQuestion = await prisma.assessmentQuestion.create({
     *   data: {
     *     // ... data to create a AssessmentQuestion
     *   }
     * })
     * 
     */
    create<T extends AssessmentQuestionCreateArgs>(args: SelectSubset<T, AssessmentQuestionCreateArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssessmentQuestions.
     * @param {AssessmentQuestionCreateManyArgs} args - Arguments to create many AssessmentQuestions.
     * @example
     * // Create many AssessmentQuestions
     * const assessmentQuestion = await prisma.assessmentQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentQuestionCreateManyArgs>(args?: SelectSubset<T, AssessmentQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssessmentQuestions and returns the data saved in the database.
     * @param {AssessmentQuestionCreateManyAndReturnArgs} args - Arguments to create many AssessmentQuestions.
     * @example
     * // Create many AssessmentQuestions
     * const assessmentQuestion = await prisma.assessmentQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssessmentQuestions and only return the `id`
     * const assessmentQuestionWithIdOnly = await prisma.assessmentQuestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AssessmentQuestion.
     * @param {AssessmentQuestionDeleteArgs} args - Arguments to delete one AssessmentQuestion.
     * @example
     * // Delete one AssessmentQuestion
     * const AssessmentQuestion = await prisma.assessmentQuestion.delete({
     *   where: {
     *     // ... filter to delete one AssessmentQuestion
     *   }
     * })
     * 
     */
    delete<T extends AssessmentQuestionDeleteArgs>(args: SelectSubset<T, AssessmentQuestionDeleteArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssessmentQuestion.
     * @param {AssessmentQuestionUpdateArgs} args - Arguments to update one AssessmentQuestion.
     * @example
     * // Update one AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentQuestionUpdateArgs>(args: SelectSubset<T, AssessmentQuestionUpdateArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssessmentQuestions.
     * @param {AssessmentQuestionDeleteManyArgs} args - Arguments to filter AssessmentQuestions to delete.
     * @example
     * // Delete a few AssessmentQuestions
     * const { count } = await prisma.assessmentQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentQuestionDeleteManyArgs>(args?: SelectSubset<T, AssessmentQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentQuestions
     * const assessmentQuestion = await prisma.assessmentQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentQuestionUpdateManyArgs>(args: SelectSubset<T, AssessmentQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessmentQuestion.
     * @param {AssessmentQuestionUpsertArgs} args - Arguments to update or create a AssessmentQuestion.
     * @example
     * // Update or create a AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.upsert({
     *   create: {
     *     // ... data to create a AssessmentQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentQuestion we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentQuestionUpsertArgs>(args: SelectSubset<T, AssessmentQuestionUpsertArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssessmentQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionCountArgs} args - Arguments to filter AssessmentQuestions to count.
     * @example
     * // Count the number of AssessmentQuestions
     * const count = await prisma.assessmentQuestion.count({
     *   where: {
     *     // ... the filter for the AssessmentQuestions we want to count
     *   }
     * })
    **/
    count<T extends AssessmentQuestionCountArgs>(
      args?: Subset<T, AssessmentQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentQuestionAggregateArgs>(args: Subset<T, AssessmentQuestionAggregateArgs>): Prisma.PrismaPromise<GetAssessmentQuestionAggregateType<T>>

    /**
     * Group by AssessmentQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionGroupByArgs} args - Group by arguments.
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
      T extends AssessmentQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentQuestionGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentQuestion model
   */
  readonly fields: AssessmentQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    attempts<T extends AssessmentQuestion$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentQuestion$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AssessmentQuestion model
   */ 
  interface AssessmentQuestionFieldRefs {
    readonly id: FieldRef<"AssessmentQuestion", 'String'>
    readonly assessmentId: FieldRef<"AssessmentQuestion", 'String'>
    readonly questionText: FieldRef<"AssessmentQuestion", 'String'>
    readonly options: FieldRef<"AssessmentQuestion", 'Json'>
    readonly correctAnswer: FieldRef<"AssessmentQuestion", 'String'>
    readonly type: FieldRef<"AssessmentQuestion", 'QuestionType'>
    readonly category: FieldRef<"AssessmentQuestion", 'QuestionCategory'>
    readonly difficulty: FieldRef<"AssessmentQuestion", 'DifficultyLevel'>
    readonly points: FieldRef<"AssessmentQuestion", 'Int'>
    readonly audioUrl: FieldRef<"AssessmentQuestion", 'String'>
    readonly expectedAnswer: FieldRef<"AssessmentQuestion", 'String'>
    readonly orderIndex: FieldRef<"AssessmentQuestion", 'Int'>
    readonly createdAt: FieldRef<"AssessmentQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"AssessmentQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentQuestion findUnique
   */
  export type AssessmentQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestion to fetch.
     */
    where: AssessmentQuestionWhereUniqueInput
  }

  /**
   * AssessmentQuestion findUniqueOrThrow
   */
  export type AssessmentQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestion to fetch.
     */
    where: AssessmentQuestionWhereUniqueInput
  }

  /**
   * AssessmentQuestion findFirst
   */
  export type AssessmentQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestion to fetch.
     */
    where?: AssessmentQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestions to fetch.
     */
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentQuestions.
     */
    cursor?: AssessmentQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentQuestions.
     */
    distinct?: AssessmentQuestionScalarFieldEnum | AssessmentQuestionScalarFieldEnum[]
  }

  /**
   * AssessmentQuestion findFirstOrThrow
   */
  export type AssessmentQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestion to fetch.
     */
    where?: AssessmentQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestions to fetch.
     */
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentQuestions.
     */
    cursor?: AssessmentQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentQuestions.
     */
    distinct?: AssessmentQuestionScalarFieldEnum | AssessmentQuestionScalarFieldEnum[]
  }

  /**
   * AssessmentQuestion findMany
   */
  export type AssessmentQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestions to fetch.
     */
    where?: AssessmentQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestions to fetch.
     */
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentQuestions.
     */
    cursor?: AssessmentQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestions.
     */
    skip?: number
    distinct?: AssessmentQuestionScalarFieldEnum | AssessmentQuestionScalarFieldEnum[]
  }

  /**
   * AssessmentQuestion create
   */
  export type AssessmentQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentQuestion.
     */
    data: XOR<AssessmentQuestionCreateInput, AssessmentQuestionUncheckedCreateInput>
  }

  /**
   * AssessmentQuestion createMany
   */
  export type AssessmentQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentQuestions.
     */
    data: AssessmentQuestionCreateManyInput | AssessmentQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentQuestion createManyAndReturn
   */
  export type AssessmentQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AssessmentQuestions.
     */
    data: AssessmentQuestionCreateManyInput | AssessmentQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentQuestion update
   */
  export type AssessmentQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentQuestion.
     */
    data: XOR<AssessmentQuestionUpdateInput, AssessmentQuestionUncheckedUpdateInput>
    /**
     * Choose, which AssessmentQuestion to update.
     */
    where: AssessmentQuestionWhereUniqueInput
  }

  /**
   * AssessmentQuestion updateMany
   */
  export type AssessmentQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentQuestions.
     */
    data: XOR<AssessmentQuestionUpdateManyMutationInput, AssessmentQuestionUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentQuestions to update
     */
    where?: AssessmentQuestionWhereInput
  }

  /**
   * AssessmentQuestion upsert
   */
  export type AssessmentQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentQuestion to update in case it exists.
     */
    where: AssessmentQuestionWhereUniqueInput
    /**
     * In case the AssessmentQuestion found by the `where` argument doesn't exist, create a new AssessmentQuestion with this data.
     */
    create: XOR<AssessmentQuestionCreateInput, AssessmentQuestionUncheckedCreateInput>
    /**
     * In case the AssessmentQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentQuestionUpdateInput, AssessmentQuestionUncheckedUpdateInput>
  }

  /**
   * AssessmentQuestion delete
   */
  export type AssessmentQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter which AssessmentQuestion to delete.
     */
    where: AssessmentQuestionWhereUniqueInput
  }

  /**
   * AssessmentQuestion deleteMany
   */
  export type AssessmentQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentQuestions to delete
     */
    where?: AssessmentQuestionWhereInput
  }

  /**
   * AssessmentQuestion.attempts
   */
  export type AssessmentQuestion$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    where?: AssessmentAttemptWhereInput
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    cursor?: AssessmentAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentAttemptScalarFieldEnum | AssessmentAttemptScalarFieldEnum[]
  }

  /**
   * AssessmentQuestion without action
   */
  export type AssessmentQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentAttempt
   */

  export type AggregateAssessmentAttempt = {
    _count: AssessmentAttemptCountAggregateOutputType | null
    _avg: AssessmentAttemptAvgAggregateOutputType | null
    _sum: AssessmentAttemptSumAggregateOutputType | null
    _min: AssessmentAttemptMinAggregateOutputType | null
    _max: AssessmentAttemptMaxAggregateOutputType | null
  }

  export type AssessmentAttemptAvgAggregateOutputType = {
    score: number | null
    timeTaken: number | null
  }

  export type AssessmentAttemptSumAggregateOutputType = {
    score: number | null
    timeTaken: number | null
  }

  export type AssessmentAttemptMinAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    userId: string | null
    questionId: string | null
    isCorrect: boolean | null
    score: number | null
    timeTaken: number | null
    createdAt: Date | null
  }

  export type AssessmentAttemptMaxAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    userId: string | null
    questionId: string | null
    isCorrect: boolean | null
    score: number | null
    timeTaken: number | null
    createdAt: Date | null
  }

  export type AssessmentAttemptCountAggregateOutputType = {
    id: number
    assessmentId: number
    userId: number
    questionId: number
    userAnswer: number
    isCorrect: number
    score: number
    timeTaken: number
    createdAt: number
    _all: number
  }


  export type AssessmentAttemptAvgAggregateInputType = {
    score?: true
    timeTaken?: true
  }

  export type AssessmentAttemptSumAggregateInputType = {
    score?: true
    timeTaken?: true
  }

  export type AssessmentAttemptMinAggregateInputType = {
    id?: true
    assessmentId?: true
    userId?: true
    questionId?: true
    isCorrect?: true
    score?: true
    timeTaken?: true
    createdAt?: true
  }

  export type AssessmentAttemptMaxAggregateInputType = {
    id?: true
    assessmentId?: true
    userId?: true
    questionId?: true
    isCorrect?: true
    score?: true
    timeTaken?: true
    createdAt?: true
  }

  export type AssessmentAttemptCountAggregateInputType = {
    id?: true
    assessmentId?: true
    userId?: true
    questionId?: true
    userAnswer?: true
    isCorrect?: true
    score?: true
    timeTaken?: true
    createdAt?: true
    _all?: true
  }

  export type AssessmentAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentAttempt to aggregate.
     */
    where?: AssessmentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAttempts to fetch.
     */
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentAttempts
    **/
    _count?: true | AssessmentAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentAttemptMaxAggregateInputType
  }

  export type GetAssessmentAttemptAggregateType<T extends AssessmentAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentAttempt[P]>
      : GetScalarType<T[P], AggregateAssessmentAttempt[P]>
  }




  export type AssessmentAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAttemptWhereInput
    orderBy?: AssessmentAttemptOrderByWithAggregationInput | AssessmentAttemptOrderByWithAggregationInput[]
    by: AssessmentAttemptScalarFieldEnum[] | AssessmentAttemptScalarFieldEnum
    having?: AssessmentAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentAttemptCountAggregateInputType | true
    _avg?: AssessmentAttemptAvgAggregateInputType
    _sum?: AssessmentAttemptSumAggregateInputType
    _min?: AssessmentAttemptMinAggregateInputType
    _max?: AssessmentAttemptMaxAggregateInputType
  }

  export type AssessmentAttemptGroupByOutputType = {
    id: string
    assessmentId: string
    userId: string
    questionId: string
    userAnswer: JsonValue | null
    isCorrect: boolean | null
    score: number | null
    timeTaken: number | null
    createdAt: Date
    _count: AssessmentAttemptCountAggregateOutputType | null
    _avg: AssessmentAttemptAvgAggregateOutputType | null
    _sum: AssessmentAttemptSumAggregateOutputType | null
    _min: AssessmentAttemptMinAggregateOutputType | null
    _max: AssessmentAttemptMaxAggregateOutputType | null
  }

  type GetAssessmentAttemptGroupByPayload<T extends AssessmentAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentAttemptGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    userId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    score?: boolean
    timeTaken?: boolean
    createdAt?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    question?: boolean | AssessmentQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentAttempt"]>

  export type AssessmentAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    userId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    score?: boolean
    timeTaken?: boolean
    createdAt?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    question?: boolean | AssessmentQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentAttempt"]>

  export type AssessmentAttemptSelectScalar = {
    id?: boolean
    assessmentId?: boolean
    userId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    score?: boolean
    timeTaken?: boolean
    createdAt?: boolean
  }

  export type AssessmentAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    question?: boolean | AssessmentQuestionDefaultArgs<ExtArgs>
  }
  export type AssessmentAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    question?: boolean | AssessmentQuestionDefaultArgs<ExtArgs>
  }

  export type $AssessmentAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentAttempt"
    objects: {
      assessment: Prisma.$AssessmentPayload<ExtArgs>
      question: Prisma.$AssessmentQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assessmentId: string
      userId: string
      questionId: string
      userAnswer: Prisma.JsonValue | null
      isCorrect: boolean | null
      score: number | null
      timeTaken: number | null
      createdAt: Date
    }, ExtArgs["result"]["assessmentAttempt"]>
    composites: {}
  }

  type AssessmentAttemptGetPayload<S extends boolean | null | undefined | AssessmentAttemptDefaultArgs> = $Result.GetResult<Prisma.$AssessmentAttemptPayload, S>

  type AssessmentAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentAttemptFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentAttemptCountAggregateInputType | true
    }

  export interface AssessmentAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentAttempt'], meta: { name: 'AssessmentAttempt' } }
    /**
     * Find zero or one AssessmentAttempt that matches the filter.
     * @param {AssessmentAttemptFindUniqueArgs} args - Arguments to find a AssessmentAttempt
     * @example
     * // Get one AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentAttemptFindUniqueArgs>(args: SelectSubset<T, AssessmentAttemptFindUniqueArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssessmentAttempt that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentAttemptFindUniqueOrThrowArgs} args - Arguments to find a AssessmentAttempt
     * @example
     * // Get one AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssessmentAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptFindFirstArgs} args - Arguments to find a AssessmentAttempt
     * @example
     * // Get one AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentAttemptFindFirstArgs>(args?: SelectSubset<T, AssessmentAttemptFindFirstArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssessmentAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptFindFirstOrThrowArgs} args - Arguments to find a AssessmentAttempt
     * @example
     * // Get one AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssessmentAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentAttempts
     * const assessmentAttempts = await prisma.assessmentAttempt.findMany()
     * 
     * // Get first 10 AssessmentAttempts
     * const assessmentAttempts = await prisma.assessmentAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentAttemptWithIdOnly = await prisma.assessmentAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentAttemptFindManyArgs>(args?: SelectSubset<T, AssessmentAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssessmentAttempt.
     * @param {AssessmentAttemptCreateArgs} args - Arguments to create a AssessmentAttempt.
     * @example
     * // Create one AssessmentAttempt
     * const AssessmentAttempt = await prisma.assessmentAttempt.create({
     *   data: {
     *     // ... data to create a AssessmentAttempt
     *   }
     * })
     * 
     */
    create<T extends AssessmentAttemptCreateArgs>(args: SelectSubset<T, AssessmentAttemptCreateArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssessmentAttempts.
     * @param {AssessmentAttemptCreateManyArgs} args - Arguments to create many AssessmentAttempts.
     * @example
     * // Create many AssessmentAttempts
     * const assessmentAttempt = await prisma.assessmentAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentAttemptCreateManyArgs>(args?: SelectSubset<T, AssessmentAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssessmentAttempts and returns the data saved in the database.
     * @param {AssessmentAttemptCreateManyAndReturnArgs} args - Arguments to create many AssessmentAttempts.
     * @example
     * // Create many AssessmentAttempts
     * const assessmentAttempt = await prisma.assessmentAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssessmentAttempts and only return the `id`
     * const assessmentAttemptWithIdOnly = await prisma.assessmentAttempt.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AssessmentAttempt.
     * @param {AssessmentAttemptDeleteArgs} args - Arguments to delete one AssessmentAttempt.
     * @example
     * // Delete one AssessmentAttempt
     * const AssessmentAttempt = await prisma.assessmentAttempt.delete({
     *   where: {
     *     // ... filter to delete one AssessmentAttempt
     *   }
     * })
     * 
     */
    delete<T extends AssessmentAttemptDeleteArgs>(args: SelectSubset<T, AssessmentAttemptDeleteArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssessmentAttempt.
     * @param {AssessmentAttemptUpdateArgs} args - Arguments to update one AssessmentAttempt.
     * @example
     * // Update one AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentAttemptUpdateArgs>(args: SelectSubset<T, AssessmentAttemptUpdateArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssessmentAttempts.
     * @param {AssessmentAttemptDeleteManyArgs} args - Arguments to filter AssessmentAttempts to delete.
     * @example
     * // Delete a few AssessmentAttempts
     * const { count } = await prisma.assessmentAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentAttemptDeleteManyArgs>(args?: SelectSubset<T, AssessmentAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentAttempts
     * const assessmentAttempt = await prisma.assessmentAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentAttemptUpdateManyArgs>(args: SelectSubset<T, AssessmentAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessmentAttempt.
     * @param {AssessmentAttemptUpsertArgs} args - Arguments to update or create a AssessmentAttempt.
     * @example
     * // Update or create a AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.upsert({
     *   create: {
     *     // ... data to create a AssessmentAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentAttempt we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentAttemptUpsertArgs>(args: SelectSubset<T, AssessmentAttemptUpsertArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssessmentAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptCountArgs} args - Arguments to filter AssessmentAttempts to count.
     * @example
     * // Count the number of AssessmentAttempts
     * const count = await prisma.assessmentAttempt.count({
     *   where: {
     *     // ... the filter for the AssessmentAttempts we want to count
     *   }
     * })
    **/
    count<T extends AssessmentAttemptCountArgs>(
      args?: Subset<T, AssessmentAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentAttemptAggregateArgs>(args: Subset<T, AssessmentAttemptAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAttemptAggregateType<T>>

    /**
     * Group by AssessmentAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptGroupByArgs} args - Group by arguments.
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
      T extends AssessmentAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentAttemptGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentAttempt model
   */
  readonly fields: AssessmentAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    question<T extends AssessmentQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentQuestionDefaultArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AssessmentAttempt model
   */ 
  interface AssessmentAttemptFieldRefs {
    readonly id: FieldRef<"AssessmentAttempt", 'String'>
    readonly assessmentId: FieldRef<"AssessmentAttempt", 'String'>
    readonly userId: FieldRef<"AssessmentAttempt", 'String'>
    readonly questionId: FieldRef<"AssessmentAttempt", 'String'>
    readonly userAnswer: FieldRef<"AssessmentAttempt", 'Json'>
    readonly isCorrect: FieldRef<"AssessmentAttempt", 'Boolean'>
    readonly score: FieldRef<"AssessmentAttempt", 'Int'>
    readonly timeTaken: FieldRef<"AssessmentAttempt", 'Int'>
    readonly createdAt: FieldRef<"AssessmentAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentAttempt findUnique
   */
  export type AssessmentAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAttempt to fetch.
     */
    where: AssessmentAttemptWhereUniqueInput
  }

  /**
   * AssessmentAttempt findUniqueOrThrow
   */
  export type AssessmentAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAttempt to fetch.
     */
    where: AssessmentAttemptWhereUniqueInput
  }

  /**
   * AssessmentAttempt findFirst
   */
  export type AssessmentAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAttempt to fetch.
     */
    where?: AssessmentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAttempts to fetch.
     */
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentAttempts.
     */
    cursor?: AssessmentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentAttempts.
     */
    distinct?: AssessmentAttemptScalarFieldEnum | AssessmentAttemptScalarFieldEnum[]
  }

  /**
   * AssessmentAttempt findFirstOrThrow
   */
  export type AssessmentAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAttempt to fetch.
     */
    where?: AssessmentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAttempts to fetch.
     */
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentAttempts.
     */
    cursor?: AssessmentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentAttempts.
     */
    distinct?: AssessmentAttemptScalarFieldEnum | AssessmentAttemptScalarFieldEnum[]
  }

  /**
   * AssessmentAttempt findMany
   */
  export type AssessmentAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAttempts to fetch.
     */
    where?: AssessmentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAttempts to fetch.
     */
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentAttempts.
     */
    cursor?: AssessmentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAttempts.
     */
    skip?: number
    distinct?: AssessmentAttemptScalarFieldEnum | AssessmentAttemptScalarFieldEnum[]
  }

  /**
   * AssessmentAttempt create
   */
  export type AssessmentAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentAttempt.
     */
    data: XOR<AssessmentAttemptCreateInput, AssessmentAttemptUncheckedCreateInput>
  }

  /**
   * AssessmentAttempt createMany
   */
  export type AssessmentAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentAttempts.
     */
    data: AssessmentAttemptCreateManyInput | AssessmentAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentAttempt createManyAndReturn
   */
  export type AssessmentAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AssessmentAttempts.
     */
    data: AssessmentAttemptCreateManyInput | AssessmentAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentAttempt update
   */
  export type AssessmentAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentAttempt.
     */
    data: XOR<AssessmentAttemptUpdateInput, AssessmentAttemptUncheckedUpdateInput>
    /**
     * Choose, which AssessmentAttempt to update.
     */
    where: AssessmentAttemptWhereUniqueInput
  }

  /**
   * AssessmentAttempt updateMany
   */
  export type AssessmentAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentAttempts.
     */
    data: XOR<AssessmentAttemptUpdateManyMutationInput, AssessmentAttemptUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentAttempts to update
     */
    where?: AssessmentAttemptWhereInput
  }

  /**
   * AssessmentAttempt upsert
   */
  export type AssessmentAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentAttempt to update in case it exists.
     */
    where: AssessmentAttemptWhereUniqueInput
    /**
     * In case the AssessmentAttempt found by the `where` argument doesn't exist, create a new AssessmentAttempt with this data.
     */
    create: XOR<AssessmentAttemptCreateInput, AssessmentAttemptUncheckedCreateInput>
    /**
     * In case the AssessmentAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentAttemptUpdateInput, AssessmentAttemptUncheckedUpdateInput>
  }

  /**
   * AssessmentAttempt delete
   */
  export type AssessmentAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter which AssessmentAttempt to delete.
     */
    where: AssessmentAttemptWhereUniqueInput
  }

  /**
   * AssessmentAttempt deleteMany
   */
  export type AssessmentAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentAttempts to delete
     */
    where?: AssessmentAttemptWhereInput
  }

  /**
   * AssessmentAttempt without action
   */
  export type AssessmentAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentResult
   */

  export type AggregateAssessmentResult = {
    _count: AssessmentResultCountAggregateOutputType | null
    _avg: AssessmentResultAvgAggregateOutputType | null
    _sum: AssessmentResultSumAggregateOutputType | null
    _min: AssessmentResultMinAggregateOutputType | null
    _max: AssessmentResultMaxAggregateOutputType | null
  }

  export type AssessmentResultAvgAggregateOutputType = {
    totalScore: number | null
    maxScore: number | null
    percentage: number | null
    correctCount: number | null
    wrongCount: number | null
    unansweredCount: number | null
    grammarScore: number | null
    vocabularyScore: number | null
    listeningScore: number | null
    readingScore: number | null
  }

  export type AssessmentResultSumAggregateOutputType = {
    totalScore: number | null
    maxScore: number | null
    percentage: number | null
    correctCount: number | null
    wrongCount: number | null
    unansweredCount: number | null
    grammarScore: number | null
    vocabularyScore: number | null
    listeningScore: number | null
    readingScore: number | null
  }

  export type AssessmentResultMinAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    userId: string | null
    totalScore: number | null
    maxScore: number | null
    percentage: number | null
    correctCount: number | null
    wrongCount: number | null
    unansweredCount: number | null
    grammarScore: number | null
    vocabularyScore: number | null
    listeningScore: number | null
    readingScore: number | null
    recommendedLevel: $Enums.DifficultyLevel | null
    rawLevel: string | null
    feedback: string | null
    completedAt: Date | null
  }

  export type AssessmentResultMaxAggregateOutputType = {
    id: string | null
    assessmentId: string | null
    userId: string | null
    totalScore: number | null
    maxScore: number | null
    percentage: number | null
    correctCount: number | null
    wrongCount: number | null
    unansweredCount: number | null
    grammarScore: number | null
    vocabularyScore: number | null
    listeningScore: number | null
    readingScore: number | null
    recommendedLevel: $Enums.DifficultyLevel | null
    rawLevel: string | null
    feedback: string | null
    completedAt: Date | null
  }

  export type AssessmentResultCountAggregateOutputType = {
    id: number
    assessmentId: number
    userId: number
    totalScore: number
    maxScore: number
    percentage: number
    correctCount: number
    wrongCount: number
    unansweredCount: number
    grammarScore: number
    vocabularyScore: number
    listeningScore: number
    readingScore: number
    recommendedLevel: number
    rawLevel: number
    feedback: number
    metadata: number
    completedAt: number
    _all: number
  }


  export type AssessmentResultAvgAggregateInputType = {
    totalScore?: true
    maxScore?: true
    percentage?: true
    correctCount?: true
    wrongCount?: true
    unansweredCount?: true
    grammarScore?: true
    vocabularyScore?: true
    listeningScore?: true
    readingScore?: true
  }

  export type AssessmentResultSumAggregateInputType = {
    totalScore?: true
    maxScore?: true
    percentage?: true
    correctCount?: true
    wrongCount?: true
    unansweredCount?: true
    grammarScore?: true
    vocabularyScore?: true
    listeningScore?: true
    readingScore?: true
  }

  export type AssessmentResultMinAggregateInputType = {
    id?: true
    assessmentId?: true
    userId?: true
    totalScore?: true
    maxScore?: true
    percentage?: true
    correctCount?: true
    wrongCount?: true
    unansweredCount?: true
    grammarScore?: true
    vocabularyScore?: true
    listeningScore?: true
    readingScore?: true
    recommendedLevel?: true
    rawLevel?: true
    feedback?: true
    completedAt?: true
  }

  export type AssessmentResultMaxAggregateInputType = {
    id?: true
    assessmentId?: true
    userId?: true
    totalScore?: true
    maxScore?: true
    percentage?: true
    correctCount?: true
    wrongCount?: true
    unansweredCount?: true
    grammarScore?: true
    vocabularyScore?: true
    listeningScore?: true
    readingScore?: true
    recommendedLevel?: true
    rawLevel?: true
    feedback?: true
    completedAt?: true
  }

  export type AssessmentResultCountAggregateInputType = {
    id?: true
    assessmentId?: true
    userId?: true
    totalScore?: true
    maxScore?: true
    percentage?: true
    correctCount?: true
    wrongCount?: true
    unansweredCount?: true
    grammarScore?: true
    vocabularyScore?: true
    listeningScore?: true
    readingScore?: true
    recommendedLevel?: true
    rawLevel?: true
    feedback?: true
    metadata?: true
    completedAt?: true
    _all?: true
  }

  export type AssessmentResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentResult to aggregate.
     */
    where?: AssessmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentResults to fetch.
     */
    orderBy?: AssessmentResultOrderByWithRelationInput | AssessmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentResults
    **/
    _count?: true | AssessmentResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentResultMaxAggregateInputType
  }

  export type GetAssessmentResultAggregateType<T extends AssessmentResultAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentResult[P]>
      : GetScalarType<T[P], AggregateAssessmentResult[P]>
  }




  export type AssessmentResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentResultWhereInput
    orderBy?: AssessmentResultOrderByWithAggregationInput | AssessmentResultOrderByWithAggregationInput[]
    by: AssessmentResultScalarFieldEnum[] | AssessmentResultScalarFieldEnum
    having?: AssessmentResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentResultCountAggregateInputType | true
    _avg?: AssessmentResultAvgAggregateInputType
    _sum?: AssessmentResultSumAggregateInputType
    _min?: AssessmentResultMinAggregateInputType
    _max?: AssessmentResultMaxAggregateInputType
  }

  export type AssessmentResultGroupByOutputType = {
    id: string
    assessmentId: string
    userId: string
    totalScore: number
    maxScore: number
    percentage: number
    correctCount: number
    wrongCount: number
    unansweredCount: number
    grammarScore: number | null
    vocabularyScore: number | null
    listeningScore: number | null
    readingScore: number | null
    recommendedLevel: $Enums.DifficultyLevel
    rawLevel: string | null
    feedback: string | null
    metadata: JsonValue | null
    completedAt: Date
    _count: AssessmentResultCountAggregateOutputType | null
    _avg: AssessmentResultAvgAggregateOutputType | null
    _sum: AssessmentResultSumAggregateOutputType | null
    _min: AssessmentResultMinAggregateOutputType | null
    _max: AssessmentResultMaxAggregateOutputType | null
  }

  type GetAssessmentResultGroupByPayload<T extends AssessmentResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentResultGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentResultGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    userId?: boolean
    totalScore?: boolean
    maxScore?: boolean
    percentage?: boolean
    correctCount?: boolean
    wrongCount?: boolean
    unansweredCount?: boolean
    grammarScore?: boolean
    vocabularyScore?: boolean
    listeningScore?: boolean
    readingScore?: boolean
    recommendedLevel?: boolean
    rawLevel?: boolean
    feedback?: boolean
    metadata?: boolean
    completedAt?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentResult"]>

  export type AssessmentResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    userId?: boolean
    totalScore?: boolean
    maxScore?: boolean
    percentage?: boolean
    correctCount?: boolean
    wrongCount?: boolean
    unansweredCount?: boolean
    grammarScore?: boolean
    vocabularyScore?: boolean
    listeningScore?: boolean
    readingScore?: boolean
    recommendedLevel?: boolean
    rawLevel?: boolean
    feedback?: boolean
    metadata?: boolean
    completedAt?: boolean
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentResult"]>

  export type AssessmentResultSelectScalar = {
    id?: boolean
    assessmentId?: boolean
    userId?: boolean
    totalScore?: boolean
    maxScore?: boolean
    percentage?: boolean
    correctCount?: boolean
    wrongCount?: boolean
    unansweredCount?: boolean
    grammarScore?: boolean
    vocabularyScore?: boolean
    listeningScore?: boolean
    readingScore?: boolean
    recommendedLevel?: boolean
    rawLevel?: boolean
    feedback?: boolean
    metadata?: boolean
    completedAt?: boolean
  }

  export type AssessmentResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }
  export type AssessmentResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
  }

  export type $AssessmentResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentResult"
    objects: {
      assessment: Prisma.$AssessmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assessmentId: string
      userId: string
      totalScore: number
      maxScore: number
      percentage: number
      correctCount: number
      wrongCount: number
      unansweredCount: number
      grammarScore: number | null
      vocabularyScore: number | null
      listeningScore: number | null
      readingScore: number | null
      recommendedLevel: $Enums.DifficultyLevel
      rawLevel: string | null
      feedback: string | null
      metadata: Prisma.JsonValue | null
      completedAt: Date
    }, ExtArgs["result"]["assessmentResult"]>
    composites: {}
  }

  type AssessmentResultGetPayload<S extends boolean | null | undefined | AssessmentResultDefaultArgs> = $Result.GetResult<Prisma.$AssessmentResultPayload, S>

  type AssessmentResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentResultFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentResultCountAggregateInputType | true
    }

  export interface AssessmentResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentResult'], meta: { name: 'AssessmentResult' } }
    /**
     * Find zero or one AssessmentResult that matches the filter.
     * @param {AssessmentResultFindUniqueArgs} args - Arguments to find a AssessmentResult
     * @example
     * // Get one AssessmentResult
     * const assessmentResult = await prisma.assessmentResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentResultFindUniqueArgs>(args: SelectSubset<T, AssessmentResultFindUniqueArgs<ExtArgs>>): Prisma__AssessmentResultClient<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssessmentResult that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentResultFindUniqueOrThrowArgs} args - Arguments to find a AssessmentResult
     * @example
     * // Get one AssessmentResult
     * const assessmentResult = await prisma.assessmentResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentResultFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentResultClient<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssessmentResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResultFindFirstArgs} args - Arguments to find a AssessmentResult
     * @example
     * // Get one AssessmentResult
     * const assessmentResult = await prisma.assessmentResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentResultFindFirstArgs>(args?: SelectSubset<T, AssessmentResultFindFirstArgs<ExtArgs>>): Prisma__AssessmentResultClient<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssessmentResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResultFindFirstOrThrowArgs} args - Arguments to find a AssessmentResult
     * @example
     * // Get one AssessmentResult
     * const assessmentResult = await prisma.assessmentResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentResultFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentResultClient<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssessmentResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentResults
     * const assessmentResults = await prisma.assessmentResult.findMany()
     * 
     * // Get first 10 AssessmentResults
     * const assessmentResults = await prisma.assessmentResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentResultWithIdOnly = await prisma.assessmentResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentResultFindManyArgs>(args?: SelectSubset<T, AssessmentResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssessmentResult.
     * @param {AssessmentResultCreateArgs} args - Arguments to create a AssessmentResult.
     * @example
     * // Create one AssessmentResult
     * const AssessmentResult = await prisma.assessmentResult.create({
     *   data: {
     *     // ... data to create a AssessmentResult
     *   }
     * })
     * 
     */
    create<T extends AssessmentResultCreateArgs>(args: SelectSubset<T, AssessmentResultCreateArgs<ExtArgs>>): Prisma__AssessmentResultClient<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssessmentResults.
     * @param {AssessmentResultCreateManyArgs} args - Arguments to create many AssessmentResults.
     * @example
     * // Create many AssessmentResults
     * const assessmentResult = await prisma.assessmentResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentResultCreateManyArgs>(args?: SelectSubset<T, AssessmentResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssessmentResults and returns the data saved in the database.
     * @param {AssessmentResultCreateManyAndReturnArgs} args - Arguments to create many AssessmentResults.
     * @example
     * // Create many AssessmentResults
     * const assessmentResult = await prisma.assessmentResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssessmentResults and only return the `id`
     * const assessmentResultWithIdOnly = await prisma.assessmentResult.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentResultCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AssessmentResult.
     * @param {AssessmentResultDeleteArgs} args - Arguments to delete one AssessmentResult.
     * @example
     * // Delete one AssessmentResult
     * const AssessmentResult = await prisma.assessmentResult.delete({
     *   where: {
     *     // ... filter to delete one AssessmentResult
     *   }
     * })
     * 
     */
    delete<T extends AssessmentResultDeleteArgs>(args: SelectSubset<T, AssessmentResultDeleteArgs<ExtArgs>>): Prisma__AssessmentResultClient<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssessmentResult.
     * @param {AssessmentResultUpdateArgs} args - Arguments to update one AssessmentResult.
     * @example
     * // Update one AssessmentResult
     * const assessmentResult = await prisma.assessmentResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentResultUpdateArgs>(args: SelectSubset<T, AssessmentResultUpdateArgs<ExtArgs>>): Prisma__AssessmentResultClient<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssessmentResults.
     * @param {AssessmentResultDeleteManyArgs} args - Arguments to filter AssessmentResults to delete.
     * @example
     * // Delete a few AssessmentResults
     * const { count } = await prisma.assessmentResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentResultDeleteManyArgs>(args?: SelectSubset<T, AssessmentResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentResults
     * const assessmentResult = await prisma.assessmentResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentResultUpdateManyArgs>(args: SelectSubset<T, AssessmentResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessmentResult.
     * @param {AssessmentResultUpsertArgs} args - Arguments to update or create a AssessmentResult.
     * @example
     * // Update or create a AssessmentResult
     * const assessmentResult = await prisma.assessmentResult.upsert({
     *   create: {
     *     // ... data to create a AssessmentResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentResult we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentResultUpsertArgs>(args: SelectSubset<T, AssessmentResultUpsertArgs<ExtArgs>>): Prisma__AssessmentResultClient<$Result.GetResult<Prisma.$AssessmentResultPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssessmentResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResultCountArgs} args - Arguments to filter AssessmentResults to count.
     * @example
     * // Count the number of AssessmentResults
     * const count = await prisma.assessmentResult.count({
     *   where: {
     *     // ... the filter for the AssessmentResults we want to count
     *   }
     * })
    **/
    count<T extends AssessmentResultCountArgs>(
      args?: Subset<T, AssessmentResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentResultAggregateArgs>(args: Subset<T, AssessmentResultAggregateArgs>): Prisma.PrismaPromise<GetAssessmentResultAggregateType<T>>

    /**
     * Group by AssessmentResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResultGroupByArgs} args - Group by arguments.
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
      T extends AssessmentResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentResultGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentResult model
   */
  readonly fields: AssessmentResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AssessmentResult model
   */ 
  interface AssessmentResultFieldRefs {
    readonly id: FieldRef<"AssessmentResult", 'String'>
    readonly assessmentId: FieldRef<"AssessmentResult", 'String'>
    readonly userId: FieldRef<"AssessmentResult", 'String'>
    readonly totalScore: FieldRef<"AssessmentResult", 'Int'>
    readonly maxScore: FieldRef<"AssessmentResult", 'Int'>
    readonly percentage: FieldRef<"AssessmentResult", 'Float'>
    readonly correctCount: FieldRef<"AssessmentResult", 'Int'>
    readonly wrongCount: FieldRef<"AssessmentResult", 'Int'>
    readonly unansweredCount: FieldRef<"AssessmentResult", 'Int'>
    readonly grammarScore: FieldRef<"AssessmentResult", 'Float'>
    readonly vocabularyScore: FieldRef<"AssessmentResult", 'Float'>
    readonly listeningScore: FieldRef<"AssessmentResult", 'Float'>
    readonly readingScore: FieldRef<"AssessmentResult", 'Float'>
    readonly recommendedLevel: FieldRef<"AssessmentResult", 'DifficultyLevel'>
    readonly rawLevel: FieldRef<"AssessmentResult", 'String'>
    readonly feedback: FieldRef<"AssessmentResult", 'String'>
    readonly metadata: FieldRef<"AssessmentResult", 'Json'>
    readonly completedAt: FieldRef<"AssessmentResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentResult findUnique
   */
  export type AssessmentResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentResult to fetch.
     */
    where: AssessmentResultWhereUniqueInput
  }

  /**
   * AssessmentResult findUniqueOrThrow
   */
  export type AssessmentResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentResult to fetch.
     */
    where: AssessmentResultWhereUniqueInput
  }

  /**
   * AssessmentResult findFirst
   */
  export type AssessmentResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentResult to fetch.
     */
    where?: AssessmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentResults to fetch.
     */
    orderBy?: AssessmentResultOrderByWithRelationInput | AssessmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentResults.
     */
    cursor?: AssessmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentResults.
     */
    distinct?: AssessmentResultScalarFieldEnum | AssessmentResultScalarFieldEnum[]
  }

  /**
   * AssessmentResult findFirstOrThrow
   */
  export type AssessmentResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentResult to fetch.
     */
    where?: AssessmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentResults to fetch.
     */
    orderBy?: AssessmentResultOrderByWithRelationInput | AssessmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentResults.
     */
    cursor?: AssessmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentResults.
     */
    distinct?: AssessmentResultScalarFieldEnum | AssessmentResultScalarFieldEnum[]
  }

  /**
   * AssessmentResult findMany
   */
  export type AssessmentResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentResults to fetch.
     */
    where?: AssessmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentResults to fetch.
     */
    orderBy?: AssessmentResultOrderByWithRelationInput | AssessmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentResults.
     */
    cursor?: AssessmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentResults.
     */
    skip?: number
    distinct?: AssessmentResultScalarFieldEnum | AssessmentResultScalarFieldEnum[]
  }

  /**
   * AssessmentResult create
   */
  export type AssessmentResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentResult.
     */
    data: XOR<AssessmentResultCreateInput, AssessmentResultUncheckedCreateInput>
  }

  /**
   * AssessmentResult createMany
   */
  export type AssessmentResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentResults.
     */
    data: AssessmentResultCreateManyInput | AssessmentResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentResult createManyAndReturn
   */
  export type AssessmentResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AssessmentResults.
     */
    data: AssessmentResultCreateManyInput | AssessmentResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentResult update
   */
  export type AssessmentResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentResult.
     */
    data: XOR<AssessmentResultUpdateInput, AssessmentResultUncheckedUpdateInput>
    /**
     * Choose, which AssessmentResult to update.
     */
    where: AssessmentResultWhereUniqueInput
  }

  /**
   * AssessmentResult updateMany
   */
  export type AssessmentResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentResults.
     */
    data: XOR<AssessmentResultUpdateManyMutationInput, AssessmentResultUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentResults to update
     */
    where?: AssessmentResultWhereInput
  }

  /**
   * AssessmentResult upsert
   */
  export type AssessmentResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentResult to update in case it exists.
     */
    where: AssessmentResultWhereUniqueInput
    /**
     * In case the AssessmentResult found by the `where` argument doesn't exist, create a new AssessmentResult with this data.
     */
    create: XOR<AssessmentResultCreateInput, AssessmentResultUncheckedCreateInput>
    /**
     * In case the AssessmentResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentResultUpdateInput, AssessmentResultUncheckedUpdateInput>
  }

  /**
   * AssessmentResult delete
   */
  export type AssessmentResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
    /**
     * Filter which AssessmentResult to delete.
     */
    where: AssessmentResultWhereUniqueInput
  }

  /**
   * AssessmentResult deleteMany
   */
  export type AssessmentResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentResults to delete
     */
    where?: AssessmentResultWhereInput
  }

  /**
   * AssessmentResult without action
   */
  export type AssessmentResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResult
     */
    select?: AssessmentResultSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResultInclude<ExtArgs> | null
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


  export const AssessmentScalarFieldEnum: {
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

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const AssessmentQuestionScalarFieldEnum: {
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

  export type AssessmentQuestionScalarFieldEnum = (typeof AssessmentQuestionScalarFieldEnum)[keyof typeof AssessmentQuestionScalarFieldEnum]


  export const AssessmentAttemptScalarFieldEnum: {
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

  export type AssessmentAttemptScalarFieldEnum = (typeof AssessmentAttemptScalarFieldEnum)[keyof typeof AssessmentAttemptScalarFieldEnum]


  export const AssessmentResultScalarFieldEnum: {
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

  export type AssessmentResultScalarFieldEnum = (typeof AssessmentResultScalarFieldEnum)[keyof typeof AssessmentResultScalarFieldEnum]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'AssessmentType'
   */
  export type EnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType'>
    


  /**
   * Reference to a field of type 'AssessmentType[]'
   */
  export type ListEnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType[]'>
    


  /**
   * Reference to a field of type 'AssessmentStatus'
   */
  export type EnumAssessmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentStatus'>
    


  /**
   * Reference to a field of type 'AssessmentStatus[]'
   */
  export type ListEnumAssessmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'QuestionCategory'
   */
  export type EnumQuestionCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionCategory'>
    


  /**
   * Reference to a field of type 'QuestionCategory[]'
   */
  export type ListEnumQuestionCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionCategory[]'>
    


  /**
   * Reference to a field of type 'DifficultyLevel'
   */
  export type EnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel'>
    


  /**
   * Reference to a field of type 'DifficultyLevel[]'
   */
  export type ListEnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: StringFilter<"Assessment"> | string
    userId?: StringFilter<"Assessment"> | string
    title?: StringFilter<"Assessment"> | string
    description?: StringNullableFilter<"Assessment"> | string | null
    type?: EnumAssessmentTypeFilter<"Assessment"> | $Enums.AssessmentType
    status?: EnumAssessmentStatusFilter<"Assessment"> | $Enums.AssessmentStatus
    totalQuestions?: IntFilter<"Assessment"> | number
    timeLimit?: IntNullableFilter<"Assessment"> | number | null
    passingScore?: IntNullableFilter<"Assessment"> | number | null
    metadata?: JsonNullableFilter<"Assessment">
    startedAt?: DateTimeNullableFilter<"Assessment"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Assessment"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Assessment"> | Date | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    questions?: AssessmentQuestionListRelationFilter
    attempts?: AssessmentAttemptListRelationFilter
    results?: XOR<AssessmentResultNullableRelationFilter, AssessmentResultWhereInput> | null
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    totalQuestions?: SortOrder
    timeLimit?: SortOrderInput | SortOrder
    passingScore?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: AssessmentQuestionOrderByRelationAggregateInput
    attempts?: AssessmentAttemptOrderByRelationAggregateInput
    results?: AssessmentResultOrderByWithRelationInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    userId?: StringFilter<"Assessment"> | string
    title?: StringFilter<"Assessment"> | string
    description?: StringNullableFilter<"Assessment"> | string | null
    type?: EnumAssessmentTypeFilter<"Assessment"> | $Enums.AssessmentType
    status?: EnumAssessmentStatusFilter<"Assessment"> | $Enums.AssessmentStatus
    totalQuestions?: IntFilter<"Assessment"> | number
    timeLimit?: IntNullableFilter<"Assessment"> | number | null
    passingScore?: IntNullableFilter<"Assessment"> | number | null
    metadata?: JsonNullableFilter<"Assessment">
    startedAt?: DateTimeNullableFilter<"Assessment"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Assessment"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Assessment"> | Date | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    questions?: AssessmentQuestionListRelationFilter
    attempts?: AssessmentAttemptListRelationFilter
    results?: XOR<AssessmentResultNullableRelationFilter, AssessmentResultWhereInput> | null
  }, "id">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    totalQuestions?: SortOrder
    timeLimit?: SortOrderInput | SortOrder
    passingScore?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _avg?: AssessmentAvgOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
    _sum?: AssessmentSumOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assessment"> | string
    userId?: StringWithAggregatesFilter<"Assessment"> | string
    title?: StringWithAggregatesFilter<"Assessment"> | string
    description?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    type?: EnumAssessmentTypeWithAggregatesFilter<"Assessment"> | $Enums.AssessmentType
    status?: EnumAssessmentStatusWithAggregatesFilter<"Assessment"> | $Enums.AssessmentStatus
    totalQuestions?: IntWithAggregatesFilter<"Assessment"> | number
    timeLimit?: IntNullableWithAggregatesFilter<"Assessment"> | number | null
    passingScore?: IntNullableWithAggregatesFilter<"Assessment"> | number | null
    metadata?: JsonNullableWithAggregatesFilter<"Assessment">
    startedAt?: DateTimeNullableWithAggregatesFilter<"Assessment"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Assessment"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Assessment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
  }

  export type AssessmentQuestionWhereInput = {
    AND?: AssessmentQuestionWhereInput | AssessmentQuestionWhereInput[]
    OR?: AssessmentQuestionWhereInput[]
    NOT?: AssessmentQuestionWhereInput | AssessmentQuestionWhereInput[]
    id?: StringFilter<"AssessmentQuestion"> | string
    assessmentId?: StringFilter<"AssessmentQuestion"> | string
    questionText?: StringFilter<"AssessmentQuestion"> | string
    options?: JsonNullableFilter<"AssessmentQuestion">
    correctAnswer?: StringNullableFilter<"AssessmentQuestion"> | string | null
    type?: EnumQuestionTypeFilter<"AssessmentQuestion"> | $Enums.QuestionType
    category?: EnumQuestionCategoryFilter<"AssessmentQuestion"> | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFilter<"AssessmentQuestion"> | $Enums.DifficultyLevel
    points?: IntFilter<"AssessmentQuestion"> | number
    audioUrl?: StringNullableFilter<"AssessmentQuestion"> | string | null
    expectedAnswer?: StringNullableFilter<"AssessmentQuestion"> | string | null
    orderIndex?: IntFilter<"AssessmentQuestion"> | number
    createdAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
    assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
    attempts?: AssessmentAttemptListRelationFilter
  }

  export type AssessmentQuestionOrderByWithRelationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionText?: SortOrder
    options?: SortOrderInput | SortOrder
    correctAnswer?: SortOrderInput | SortOrder
    type?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points?: SortOrder
    audioUrl?: SortOrderInput | SortOrder
    expectedAnswer?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assessment?: AssessmentOrderByWithRelationInput
    attempts?: AssessmentAttemptOrderByRelationAggregateInput
  }

  export type AssessmentQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assessmentId_orderIndex?: AssessmentQuestionAssessmentIdOrderIndexCompoundUniqueInput
    AND?: AssessmentQuestionWhereInput | AssessmentQuestionWhereInput[]
    OR?: AssessmentQuestionWhereInput[]
    NOT?: AssessmentQuestionWhereInput | AssessmentQuestionWhereInput[]
    assessmentId?: StringFilter<"AssessmentQuestion"> | string
    questionText?: StringFilter<"AssessmentQuestion"> | string
    options?: JsonNullableFilter<"AssessmentQuestion">
    correctAnswer?: StringNullableFilter<"AssessmentQuestion"> | string | null
    type?: EnumQuestionTypeFilter<"AssessmentQuestion"> | $Enums.QuestionType
    category?: EnumQuestionCategoryFilter<"AssessmentQuestion"> | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFilter<"AssessmentQuestion"> | $Enums.DifficultyLevel
    points?: IntFilter<"AssessmentQuestion"> | number
    audioUrl?: StringNullableFilter<"AssessmentQuestion"> | string | null
    expectedAnswer?: StringNullableFilter<"AssessmentQuestion"> | string | null
    orderIndex?: IntFilter<"AssessmentQuestion"> | number
    createdAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
    assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
    attempts?: AssessmentAttemptListRelationFilter
  }, "id" | "assessmentId_orderIndex">

  export type AssessmentQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionText?: SortOrder
    options?: SortOrderInput | SortOrder
    correctAnswer?: SortOrderInput | SortOrder
    type?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points?: SortOrder
    audioUrl?: SortOrderInput | SortOrder
    expectedAnswer?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentQuestionCountOrderByAggregateInput
    _avg?: AssessmentQuestionAvgOrderByAggregateInput
    _max?: AssessmentQuestionMaxOrderByAggregateInput
    _min?: AssessmentQuestionMinOrderByAggregateInput
    _sum?: AssessmentQuestionSumOrderByAggregateInput
  }

  export type AssessmentQuestionScalarWhereWithAggregatesInput = {
    AND?: AssessmentQuestionScalarWhereWithAggregatesInput | AssessmentQuestionScalarWhereWithAggregatesInput[]
    OR?: AssessmentQuestionScalarWhereWithAggregatesInput[]
    NOT?: AssessmentQuestionScalarWhereWithAggregatesInput | AssessmentQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssessmentQuestion"> | string
    assessmentId?: StringWithAggregatesFilter<"AssessmentQuestion"> | string
    questionText?: StringWithAggregatesFilter<"AssessmentQuestion"> | string
    options?: JsonNullableWithAggregatesFilter<"AssessmentQuestion">
    correctAnswer?: StringNullableWithAggregatesFilter<"AssessmentQuestion"> | string | null
    type?: EnumQuestionTypeWithAggregatesFilter<"AssessmentQuestion"> | $Enums.QuestionType
    category?: EnumQuestionCategoryWithAggregatesFilter<"AssessmentQuestion"> | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelWithAggregatesFilter<"AssessmentQuestion"> | $Enums.DifficultyLevel
    points?: IntWithAggregatesFilter<"AssessmentQuestion"> | number
    audioUrl?: StringNullableWithAggregatesFilter<"AssessmentQuestion"> | string | null
    expectedAnswer?: StringNullableWithAggregatesFilter<"AssessmentQuestion"> | string | null
    orderIndex?: IntWithAggregatesFilter<"AssessmentQuestion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AssessmentQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssessmentQuestion"> | Date | string
  }

  export type AssessmentAttemptWhereInput = {
    AND?: AssessmentAttemptWhereInput | AssessmentAttemptWhereInput[]
    OR?: AssessmentAttemptWhereInput[]
    NOT?: AssessmentAttemptWhereInput | AssessmentAttemptWhereInput[]
    id?: StringFilter<"AssessmentAttempt"> | string
    assessmentId?: StringFilter<"AssessmentAttempt"> | string
    userId?: StringFilter<"AssessmentAttempt"> | string
    questionId?: StringFilter<"AssessmentAttempt"> | string
    userAnswer?: JsonNullableFilter<"AssessmentAttempt">
    isCorrect?: BoolNullableFilter<"AssessmentAttempt"> | boolean | null
    score?: IntNullableFilter<"AssessmentAttempt"> | number | null
    timeTaken?: IntNullableFilter<"AssessmentAttempt"> | number | null
    createdAt?: DateTimeFilter<"AssessmentAttempt"> | Date | string
    assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
    question?: XOR<AssessmentQuestionRelationFilter, AssessmentQuestionWhereInput>
  }

  export type AssessmentAttemptOrderByWithRelationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    timeTaken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    assessment?: AssessmentOrderByWithRelationInput
    question?: AssessmentQuestionOrderByWithRelationInput
  }

  export type AssessmentAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentAttemptWhereInput | AssessmentAttemptWhereInput[]
    OR?: AssessmentAttemptWhereInput[]
    NOT?: AssessmentAttemptWhereInput | AssessmentAttemptWhereInput[]
    assessmentId?: StringFilter<"AssessmentAttempt"> | string
    userId?: StringFilter<"AssessmentAttempt"> | string
    questionId?: StringFilter<"AssessmentAttempt"> | string
    userAnswer?: JsonNullableFilter<"AssessmentAttempt">
    isCorrect?: BoolNullableFilter<"AssessmentAttempt"> | boolean | null
    score?: IntNullableFilter<"AssessmentAttempt"> | number | null
    timeTaken?: IntNullableFilter<"AssessmentAttempt"> | number | null
    createdAt?: DateTimeFilter<"AssessmentAttempt"> | Date | string
    assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
    question?: XOR<AssessmentQuestionRelationFilter, AssessmentQuestionWhereInput>
  }, "id">

  export type AssessmentAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    isCorrect?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    timeTaken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AssessmentAttemptCountOrderByAggregateInput
    _avg?: AssessmentAttemptAvgOrderByAggregateInput
    _max?: AssessmentAttemptMaxOrderByAggregateInput
    _min?: AssessmentAttemptMinOrderByAggregateInput
    _sum?: AssessmentAttemptSumOrderByAggregateInput
  }

  export type AssessmentAttemptScalarWhereWithAggregatesInput = {
    AND?: AssessmentAttemptScalarWhereWithAggregatesInput | AssessmentAttemptScalarWhereWithAggregatesInput[]
    OR?: AssessmentAttemptScalarWhereWithAggregatesInput[]
    NOT?: AssessmentAttemptScalarWhereWithAggregatesInput | AssessmentAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssessmentAttempt"> | string
    assessmentId?: StringWithAggregatesFilter<"AssessmentAttempt"> | string
    userId?: StringWithAggregatesFilter<"AssessmentAttempt"> | string
    questionId?: StringWithAggregatesFilter<"AssessmentAttempt"> | string
    userAnswer?: JsonNullableWithAggregatesFilter<"AssessmentAttempt">
    isCorrect?: BoolNullableWithAggregatesFilter<"AssessmentAttempt"> | boolean | null
    score?: IntNullableWithAggregatesFilter<"AssessmentAttempt"> | number | null
    timeTaken?: IntNullableWithAggregatesFilter<"AssessmentAttempt"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AssessmentAttempt"> | Date | string
  }

  export type AssessmentResultWhereInput = {
    AND?: AssessmentResultWhereInput | AssessmentResultWhereInput[]
    OR?: AssessmentResultWhereInput[]
    NOT?: AssessmentResultWhereInput | AssessmentResultWhereInput[]
    id?: StringFilter<"AssessmentResult"> | string
    assessmentId?: StringFilter<"AssessmentResult"> | string
    userId?: StringFilter<"AssessmentResult"> | string
    totalScore?: IntFilter<"AssessmentResult"> | number
    maxScore?: IntFilter<"AssessmentResult"> | number
    percentage?: FloatFilter<"AssessmentResult"> | number
    correctCount?: IntFilter<"AssessmentResult"> | number
    wrongCount?: IntFilter<"AssessmentResult"> | number
    unansweredCount?: IntFilter<"AssessmentResult"> | number
    grammarScore?: FloatNullableFilter<"AssessmentResult"> | number | null
    vocabularyScore?: FloatNullableFilter<"AssessmentResult"> | number | null
    listeningScore?: FloatNullableFilter<"AssessmentResult"> | number | null
    readingScore?: FloatNullableFilter<"AssessmentResult"> | number | null
    recommendedLevel?: EnumDifficultyLevelFilter<"AssessmentResult"> | $Enums.DifficultyLevel
    rawLevel?: StringNullableFilter<"AssessmentResult"> | string | null
    feedback?: StringNullableFilter<"AssessmentResult"> | string | null
    metadata?: JsonNullableFilter<"AssessmentResult">
    completedAt?: DateTimeFilter<"AssessmentResult"> | Date | string
    assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
  }

  export type AssessmentResultOrderByWithRelationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    userId?: SortOrder
    totalScore?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    unansweredCount?: SortOrder
    grammarScore?: SortOrderInput | SortOrder
    vocabularyScore?: SortOrderInput | SortOrder
    listeningScore?: SortOrderInput | SortOrder
    readingScore?: SortOrderInput | SortOrder
    recommendedLevel?: SortOrder
    rawLevel?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    assessment?: AssessmentOrderByWithRelationInput
  }

  export type AssessmentResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assessmentId?: string
    AND?: AssessmentResultWhereInput | AssessmentResultWhereInput[]
    OR?: AssessmentResultWhereInput[]
    NOT?: AssessmentResultWhereInput | AssessmentResultWhereInput[]
    userId?: StringFilter<"AssessmentResult"> | string
    totalScore?: IntFilter<"AssessmentResult"> | number
    maxScore?: IntFilter<"AssessmentResult"> | number
    percentage?: FloatFilter<"AssessmentResult"> | number
    correctCount?: IntFilter<"AssessmentResult"> | number
    wrongCount?: IntFilter<"AssessmentResult"> | number
    unansweredCount?: IntFilter<"AssessmentResult"> | number
    grammarScore?: FloatNullableFilter<"AssessmentResult"> | number | null
    vocabularyScore?: FloatNullableFilter<"AssessmentResult"> | number | null
    listeningScore?: FloatNullableFilter<"AssessmentResult"> | number | null
    readingScore?: FloatNullableFilter<"AssessmentResult"> | number | null
    recommendedLevel?: EnumDifficultyLevelFilter<"AssessmentResult"> | $Enums.DifficultyLevel
    rawLevel?: StringNullableFilter<"AssessmentResult"> | string | null
    feedback?: StringNullableFilter<"AssessmentResult"> | string | null
    metadata?: JsonNullableFilter<"AssessmentResult">
    completedAt?: DateTimeFilter<"AssessmentResult"> | Date | string
    assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
  }, "id" | "assessmentId">

  export type AssessmentResultOrderByWithAggregationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    userId?: SortOrder
    totalScore?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    unansweredCount?: SortOrder
    grammarScore?: SortOrderInput | SortOrder
    vocabularyScore?: SortOrderInput | SortOrder
    listeningScore?: SortOrderInput | SortOrder
    readingScore?: SortOrderInput | SortOrder
    recommendedLevel?: SortOrder
    rawLevel?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    _count?: AssessmentResultCountOrderByAggregateInput
    _avg?: AssessmentResultAvgOrderByAggregateInput
    _max?: AssessmentResultMaxOrderByAggregateInput
    _min?: AssessmentResultMinOrderByAggregateInput
    _sum?: AssessmentResultSumOrderByAggregateInput
  }

  export type AssessmentResultScalarWhereWithAggregatesInput = {
    AND?: AssessmentResultScalarWhereWithAggregatesInput | AssessmentResultScalarWhereWithAggregatesInput[]
    OR?: AssessmentResultScalarWhereWithAggregatesInput[]
    NOT?: AssessmentResultScalarWhereWithAggregatesInput | AssessmentResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssessmentResult"> | string
    assessmentId?: StringWithAggregatesFilter<"AssessmentResult"> | string
    userId?: StringWithAggregatesFilter<"AssessmentResult"> | string
    totalScore?: IntWithAggregatesFilter<"AssessmentResult"> | number
    maxScore?: IntWithAggregatesFilter<"AssessmentResult"> | number
    percentage?: FloatWithAggregatesFilter<"AssessmentResult"> | number
    correctCount?: IntWithAggregatesFilter<"AssessmentResult"> | number
    wrongCount?: IntWithAggregatesFilter<"AssessmentResult"> | number
    unansweredCount?: IntWithAggregatesFilter<"AssessmentResult"> | number
    grammarScore?: FloatNullableWithAggregatesFilter<"AssessmentResult"> | number | null
    vocabularyScore?: FloatNullableWithAggregatesFilter<"AssessmentResult"> | number | null
    listeningScore?: FloatNullableWithAggregatesFilter<"AssessmentResult"> | number | null
    readingScore?: FloatNullableWithAggregatesFilter<"AssessmentResult"> | number | null
    recommendedLevel?: EnumDifficultyLevelWithAggregatesFilter<"AssessmentResult"> | $Enums.DifficultyLevel
    rawLevel?: StringNullableWithAggregatesFilter<"AssessmentResult"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"AssessmentResult"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AssessmentResult">
    completedAt?: DateTimeWithAggregatesFilter<"AssessmentResult"> | Date | string
  }

  export type AssessmentCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type?: $Enums.AssessmentType
    status?: $Enums.AssessmentStatus
    totalQuestions?: number
    timeLimit?: number | null
    passingScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: AssessmentQuestionCreateNestedManyWithoutAssessmentInput
    attempts?: AssessmentAttemptCreateNestedManyWithoutAssessmentInput
    results?: AssessmentResultCreateNestedOneWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type?: $Enums.AssessmentType
    status?: $Enums.AssessmentStatus
    totalQuestions?: number
    timeLimit?: number | null
    passingScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: AssessmentQuestionUncheckedCreateNestedManyWithoutAssessmentInput
    attempts?: AssessmentAttemptUncheckedCreateNestedManyWithoutAssessmentInput
    results?: AssessmentResultUncheckedCreateNestedOneWithoutAssessmentInput
  }

  export type AssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    status?: EnumAssessmentStatusFieldUpdateOperationsInput | $Enums.AssessmentStatus
    totalQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AssessmentQuestionUpdateManyWithoutAssessmentNestedInput
    attempts?: AssessmentAttemptUpdateManyWithoutAssessmentNestedInput
    results?: AssessmentResultUpdateOneWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    status?: EnumAssessmentStatusFieldUpdateOperationsInput | $Enums.AssessmentStatus
    totalQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AssessmentQuestionUncheckedUpdateManyWithoutAssessmentNestedInput
    attempts?: AssessmentAttemptUncheckedUpdateManyWithoutAssessmentNestedInput
    results?: AssessmentResultUncheckedUpdateOneWithoutAssessmentNestedInput
  }

  export type AssessmentCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type?: $Enums.AssessmentType
    status?: $Enums.AssessmentStatus
    totalQuestions?: number
    timeLimit?: number | null
    passingScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    status?: EnumAssessmentStatusFieldUpdateOperationsInput | $Enums.AssessmentStatus
    totalQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    status?: EnumAssessmentStatusFieldUpdateOperationsInput | $Enums.AssessmentStatus
    totalQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionCreateInput = {
    id?: string
    questionText: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: string | null
    type?: $Enums.QuestionType
    category: $Enums.QuestionCategory
    difficulty?: $Enums.DifficultyLevel
    points?: number
    audioUrl?: string | null
    expectedAnswer?: string | null
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assessment: AssessmentCreateNestedOneWithoutQuestionsInput
    attempts?: AssessmentAttemptCreateNestedManyWithoutQuestionInput
  }

  export type AssessmentQuestionUncheckedCreateInput = {
    id?: string
    assessmentId: string
    questionText: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: string | null
    type?: $Enums.QuestionType
    category: $Enums.QuestionCategory
    difficulty?: $Enums.DifficultyLevel
    points?: number
    audioUrl?: string | null
    expectedAnswer?: string | null
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AssessmentAttemptUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type AssessmentQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    category?: EnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    points?: IntFieldUpdateOperationsInput | number
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: AssessmentUpdateOneRequiredWithoutQuestionsNestedInput
    attempts?: AssessmentAttemptUpdateManyWithoutQuestionNestedInput
  }

  export type AssessmentQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    category?: EnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    points?: IntFieldUpdateOperationsInput | number
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AssessmentAttemptUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AssessmentQuestionCreateManyInput = {
    id?: string
    assessmentId: string
    questionText: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: string | null
    type?: $Enums.QuestionType
    category: $Enums.QuestionCategory
    difficulty?: $Enums.DifficultyLevel
    points?: number
    audioUrl?: string | null
    expectedAnswer?: string | null
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    category?: EnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    points?: IntFieldUpdateOperationsInput | number
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    category?: EnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    points?: IntFieldUpdateOperationsInput | number
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAttemptCreateInput = {
    id?: string
    userId: string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: boolean | null
    score?: number | null
    timeTaken?: number | null
    createdAt?: Date | string
    assessment: AssessmentCreateNestedOneWithoutAttemptsInput
    question: AssessmentQuestionCreateNestedOneWithoutAttemptsInput
  }

  export type AssessmentAttemptUncheckedCreateInput = {
    id?: string
    assessmentId: string
    userId: string
    questionId: string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: boolean | null
    score?: number | null
    timeTaken?: number | null
    createdAt?: Date | string
  }

  export type AssessmentAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTaken?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: AssessmentUpdateOneRequiredWithoutAttemptsNestedInput
    question?: AssessmentQuestionUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type AssessmentAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTaken?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAttemptCreateManyInput = {
    id?: string
    assessmentId: string
    userId: string
    questionId: string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: boolean | null
    score?: number | null
    timeTaken?: number | null
    createdAt?: Date | string
  }

  export type AssessmentAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTaken?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTaken?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentResultCreateInput = {
    id?: string
    userId: string
    totalScore: number
    maxScore: number
    percentage: number
    correctCount?: number
    wrongCount?: number
    unansweredCount?: number
    grammarScore?: number | null
    vocabularyScore?: number | null
    listeningScore?: number | null
    readingScore?: number | null
    recommendedLevel: $Enums.DifficultyLevel
    rawLevel?: string | null
    feedback?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: Date | string
    assessment: AssessmentCreateNestedOneWithoutResultsInput
  }

  export type AssessmentResultUncheckedCreateInput = {
    id?: string
    assessmentId: string
    userId: string
    totalScore: number
    maxScore: number
    percentage: number
    correctCount?: number
    wrongCount?: number
    unansweredCount?: number
    grammarScore?: number | null
    vocabularyScore?: number | null
    listeningScore?: number | null
    readingScore?: number | null
    recommendedLevel: $Enums.DifficultyLevel
    rawLevel?: string | null
    feedback?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: Date | string
  }

  export type AssessmentResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    unansweredCount?: IntFieldUpdateOperationsInput | number
    grammarScore?: NullableFloatFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    listeningScore?: NullableFloatFieldUpdateOperationsInput | number | null
    readingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    rawLevel?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: AssessmentUpdateOneRequiredWithoutResultsNestedInput
  }

  export type AssessmentResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    unansweredCount?: IntFieldUpdateOperationsInput | number
    grammarScore?: NullableFloatFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    listeningScore?: NullableFloatFieldUpdateOperationsInput | number | null
    readingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    rawLevel?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentResultCreateManyInput = {
    id?: string
    assessmentId: string
    userId: string
    totalScore: number
    maxScore: number
    percentage: number
    correctCount?: number
    wrongCount?: number
    unansweredCount?: number
    grammarScore?: number | null
    vocabularyScore?: number | null
    listeningScore?: number | null
    readingScore?: number | null
    recommendedLevel: $Enums.DifficultyLevel
    rawLevel?: string | null
    feedback?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: Date | string
  }

  export type AssessmentResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    unansweredCount?: IntFieldUpdateOperationsInput | number
    grammarScore?: NullableFloatFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    listeningScore?: NullableFloatFieldUpdateOperationsInput | number | null
    readingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    rawLevel?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    unansweredCount?: IntFieldUpdateOperationsInput | number
    grammarScore?: NullableFloatFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    listeningScore?: NullableFloatFieldUpdateOperationsInput | number | null
    readingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    rawLevel?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAssessmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeFilter<$PrismaModel> | $Enums.AssessmentType
  }

  export type EnumAssessmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentStatus | EnumAssessmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentStatus[] | ListEnumAssessmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentStatus[] | ListEnumAssessmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentStatusFilter<$PrismaModel> | $Enums.AssessmentStatus
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

  export type AssessmentQuestionListRelationFilter = {
    every?: AssessmentQuestionWhereInput
    some?: AssessmentQuestionWhereInput
    none?: AssessmentQuestionWhereInput
  }

  export type AssessmentAttemptListRelationFilter = {
    every?: AssessmentAttemptWhereInput
    some?: AssessmentAttemptWhereInput
    none?: AssessmentAttemptWhereInput
  }

  export type AssessmentResultNullableRelationFilter = {
    is?: AssessmentResultWhereInput | null
    isNot?: AssessmentResultWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssessmentQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    totalQuestions?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    metadata?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentAvgOrderByAggregateInput = {
    totalQuestions?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    totalQuestions?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    totalQuestions?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentSumOrderByAggregateInput = {
    totalQuestions?: SortOrder
    timeLimit?: SortOrder
    passingScore?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAssessmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeFilter<$PrismaModel>
  }

  export type EnumAssessmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentStatus | EnumAssessmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentStatus[] | ListEnumAssessmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentStatus[] | ListEnumAssessmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssessmentStatusFilter<$PrismaModel>
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

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type EnumQuestionCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionCategory | EnumQuestionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionCategory[] | ListEnumQuestionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionCategory[] | ListEnumQuestionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionCategoryFilter<$PrismaModel> | $Enums.QuestionCategory
  }

  export type EnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type AssessmentRelationFilter = {
    is?: AssessmentWhereInput
    isNot?: AssessmentWhereInput
  }

  export type AssessmentQuestionAssessmentIdOrderIndexCompoundUniqueInput = {
    assessmentId: string
    orderIndex: number
  }

  export type AssessmentQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionText?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points?: SortOrder
    audioUrl?: SortOrder
    expectedAnswer?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionAvgOrderByAggregateInput = {
    points?: SortOrder
    orderIndex?: SortOrder
  }

  export type AssessmentQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionText?: SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points?: SortOrder
    audioUrl?: SortOrder
    expectedAnswer?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionText?: SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points?: SortOrder
    audioUrl?: SortOrder
    expectedAnswer?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionSumOrderByAggregateInput = {
    points?: SortOrder
    orderIndex?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type EnumQuestionCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionCategory | EnumQuestionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionCategory[] | ListEnumQuestionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionCategory[] | ListEnumQuestionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionCategoryWithAggregatesFilter<$PrismaModel> | $Enums.QuestionCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionCategoryFilter<$PrismaModel>
    _max?: NestedEnumQuestionCategoryFilter<$PrismaModel>
  }

  export type EnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AssessmentQuestionRelationFilter = {
    is?: AssessmentQuestionWhereInput
    isNot?: AssessmentQuestionWhereInput
  }

  export type AssessmentAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
    timeTaken?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentAttemptAvgOrderByAggregateInput = {
    score?: SortOrder
    timeTaken?: SortOrder
  }

  export type AssessmentAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
    timeTaken?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    score?: SortOrder
    timeTaken?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentAttemptSumOrderByAggregateInput = {
    score?: SortOrder
    timeTaken?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AssessmentResultCountOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    userId?: SortOrder
    totalScore?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    unansweredCount?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    listeningScore?: SortOrder
    readingScore?: SortOrder
    recommendedLevel?: SortOrder
    rawLevel?: SortOrder
    feedback?: SortOrder
    metadata?: SortOrder
    completedAt?: SortOrder
  }

  export type AssessmentResultAvgOrderByAggregateInput = {
    totalScore?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    unansweredCount?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    listeningScore?: SortOrder
    readingScore?: SortOrder
  }

  export type AssessmentResultMaxOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    userId?: SortOrder
    totalScore?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    unansweredCount?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    listeningScore?: SortOrder
    readingScore?: SortOrder
    recommendedLevel?: SortOrder
    rawLevel?: SortOrder
    feedback?: SortOrder
    completedAt?: SortOrder
  }

  export type AssessmentResultMinOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    userId?: SortOrder
    totalScore?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    unansweredCount?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    listeningScore?: SortOrder
    readingScore?: SortOrder
    recommendedLevel?: SortOrder
    rawLevel?: SortOrder
    feedback?: SortOrder
    completedAt?: SortOrder
  }

  export type AssessmentResultSumOrderByAggregateInput = {
    totalScore?: SortOrder
    maxScore?: SortOrder
    percentage?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    unansweredCount?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    listeningScore?: SortOrder
    readingScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AssessmentQuestionCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionCreateWithoutAssessmentInput[] | AssessmentQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAssessmentInput | AssessmentQuestionCreateOrConnectWithoutAssessmentInput[]
    createMany?: AssessmentQuestionCreateManyAssessmentInputEnvelope
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
  }

  export type AssessmentAttemptCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AssessmentAttemptCreateWithoutAssessmentInput, AssessmentAttemptUncheckedCreateWithoutAssessmentInput> | AssessmentAttemptCreateWithoutAssessmentInput[] | AssessmentAttemptUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutAssessmentInput | AssessmentAttemptCreateOrConnectWithoutAssessmentInput[]
    createMany?: AssessmentAttemptCreateManyAssessmentInputEnvelope
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
  }

  export type AssessmentResultCreateNestedOneWithoutAssessmentInput = {
    create?: XOR<AssessmentResultCreateWithoutAssessmentInput, AssessmentResultUncheckedCreateWithoutAssessmentInput>
    connectOrCreate?: AssessmentResultCreateOrConnectWithoutAssessmentInput
    connect?: AssessmentResultWhereUniqueInput
  }

  export type AssessmentQuestionUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionCreateWithoutAssessmentInput[] | AssessmentQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAssessmentInput | AssessmentQuestionCreateOrConnectWithoutAssessmentInput[]
    createMany?: AssessmentQuestionCreateManyAssessmentInputEnvelope
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
  }

  export type AssessmentAttemptUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AssessmentAttemptCreateWithoutAssessmentInput, AssessmentAttemptUncheckedCreateWithoutAssessmentInput> | AssessmentAttemptCreateWithoutAssessmentInput[] | AssessmentAttemptUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutAssessmentInput | AssessmentAttemptCreateOrConnectWithoutAssessmentInput[]
    createMany?: AssessmentAttemptCreateManyAssessmentInputEnvelope
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
  }

  export type AssessmentResultUncheckedCreateNestedOneWithoutAssessmentInput = {
    create?: XOR<AssessmentResultCreateWithoutAssessmentInput, AssessmentResultUncheckedCreateWithoutAssessmentInput>
    connectOrCreate?: AssessmentResultCreateOrConnectWithoutAssessmentInput
    connect?: AssessmentResultWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAssessmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssessmentType
  }

  export type EnumAssessmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssessmentStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AssessmentQuestionUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionCreateWithoutAssessmentInput[] | AssessmentQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAssessmentInput | AssessmentQuestionCreateOrConnectWithoutAssessmentInput[]
    upsert?: AssessmentQuestionUpsertWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AssessmentQuestionCreateManyAssessmentInputEnvelope
    set?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    disconnect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    delete?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    update?: AssessmentQuestionUpdateWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AssessmentQuestionUpdateManyWithWhereWithoutAssessmentInput | AssessmentQuestionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AssessmentQuestionScalarWhereInput | AssessmentQuestionScalarWhereInput[]
  }

  export type AssessmentAttemptUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentAttemptCreateWithoutAssessmentInput, AssessmentAttemptUncheckedCreateWithoutAssessmentInput> | AssessmentAttemptCreateWithoutAssessmentInput[] | AssessmentAttemptUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutAssessmentInput | AssessmentAttemptCreateOrConnectWithoutAssessmentInput[]
    upsert?: AssessmentAttemptUpsertWithWhereUniqueWithoutAssessmentInput | AssessmentAttemptUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AssessmentAttemptCreateManyAssessmentInputEnvelope
    set?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    disconnect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    delete?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    update?: AssessmentAttemptUpdateWithWhereUniqueWithoutAssessmentInput | AssessmentAttemptUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AssessmentAttemptUpdateManyWithWhereWithoutAssessmentInput | AssessmentAttemptUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AssessmentAttemptScalarWhereInput | AssessmentAttemptScalarWhereInput[]
  }

  export type AssessmentResultUpdateOneWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentResultCreateWithoutAssessmentInput, AssessmentResultUncheckedCreateWithoutAssessmentInput>
    connectOrCreate?: AssessmentResultCreateOrConnectWithoutAssessmentInput
    upsert?: AssessmentResultUpsertWithoutAssessmentInput
    disconnect?: AssessmentResultWhereInput | boolean
    delete?: AssessmentResultWhereInput | boolean
    connect?: AssessmentResultWhereUniqueInput
    update?: XOR<XOR<AssessmentResultUpdateToOneWithWhereWithoutAssessmentInput, AssessmentResultUpdateWithoutAssessmentInput>, AssessmentResultUncheckedUpdateWithoutAssessmentInput>
  }

  export type AssessmentQuestionUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionCreateWithoutAssessmentInput[] | AssessmentQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAssessmentInput | AssessmentQuestionCreateOrConnectWithoutAssessmentInput[]
    upsert?: AssessmentQuestionUpsertWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AssessmentQuestionCreateManyAssessmentInputEnvelope
    set?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    disconnect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    delete?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    update?: AssessmentQuestionUpdateWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AssessmentQuestionUpdateManyWithWhereWithoutAssessmentInput | AssessmentQuestionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AssessmentQuestionScalarWhereInput | AssessmentQuestionScalarWhereInput[]
  }

  export type AssessmentAttemptUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentAttemptCreateWithoutAssessmentInput, AssessmentAttemptUncheckedCreateWithoutAssessmentInput> | AssessmentAttemptCreateWithoutAssessmentInput[] | AssessmentAttemptUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutAssessmentInput | AssessmentAttemptCreateOrConnectWithoutAssessmentInput[]
    upsert?: AssessmentAttemptUpsertWithWhereUniqueWithoutAssessmentInput | AssessmentAttemptUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AssessmentAttemptCreateManyAssessmentInputEnvelope
    set?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    disconnect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    delete?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    update?: AssessmentAttemptUpdateWithWhereUniqueWithoutAssessmentInput | AssessmentAttemptUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AssessmentAttemptUpdateManyWithWhereWithoutAssessmentInput | AssessmentAttemptUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AssessmentAttemptScalarWhereInput | AssessmentAttemptScalarWhereInput[]
  }

  export type AssessmentResultUncheckedUpdateOneWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentResultCreateWithoutAssessmentInput, AssessmentResultUncheckedCreateWithoutAssessmentInput>
    connectOrCreate?: AssessmentResultCreateOrConnectWithoutAssessmentInput
    upsert?: AssessmentResultUpsertWithoutAssessmentInput
    disconnect?: AssessmentResultWhereInput | boolean
    delete?: AssessmentResultWhereInput | boolean
    connect?: AssessmentResultWhereUniqueInput
    update?: XOR<XOR<AssessmentResultUpdateToOneWithWhereWithoutAssessmentInput, AssessmentResultUpdateWithoutAssessmentInput>, AssessmentResultUncheckedUpdateWithoutAssessmentInput>
  }

  export type AssessmentCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<AssessmentCreateWithoutQuestionsInput, AssessmentUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutQuestionsInput
    connect?: AssessmentWhereUniqueInput
  }

  export type AssessmentAttemptCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AssessmentAttemptCreateWithoutQuestionInput, AssessmentAttemptUncheckedCreateWithoutQuestionInput> | AssessmentAttemptCreateWithoutQuestionInput[] | AssessmentAttemptUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutQuestionInput | AssessmentAttemptCreateOrConnectWithoutQuestionInput[]
    createMany?: AssessmentAttemptCreateManyQuestionInputEnvelope
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
  }

  export type AssessmentAttemptUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AssessmentAttemptCreateWithoutQuestionInput, AssessmentAttemptUncheckedCreateWithoutQuestionInput> | AssessmentAttemptCreateWithoutQuestionInput[] | AssessmentAttemptUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutQuestionInput | AssessmentAttemptCreateOrConnectWithoutQuestionInput[]
    createMany?: AssessmentAttemptCreateManyQuestionInputEnvelope
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type EnumQuestionCategoryFieldUpdateOperationsInput = {
    set?: $Enums.QuestionCategory
  }

  export type EnumDifficultyLevelFieldUpdateOperationsInput = {
    set?: $Enums.DifficultyLevel
  }

  export type AssessmentUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<AssessmentCreateWithoutQuestionsInput, AssessmentUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutQuestionsInput
    upsert?: AssessmentUpsertWithoutQuestionsInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutQuestionsInput, AssessmentUpdateWithoutQuestionsInput>, AssessmentUncheckedUpdateWithoutQuestionsInput>
  }

  export type AssessmentAttemptUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AssessmentAttemptCreateWithoutQuestionInput, AssessmentAttemptUncheckedCreateWithoutQuestionInput> | AssessmentAttemptCreateWithoutQuestionInput[] | AssessmentAttemptUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutQuestionInput | AssessmentAttemptCreateOrConnectWithoutQuestionInput[]
    upsert?: AssessmentAttemptUpsertWithWhereUniqueWithoutQuestionInput | AssessmentAttemptUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AssessmentAttemptCreateManyQuestionInputEnvelope
    set?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    disconnect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    delete?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    update?: AssessmentAttemptUpdateWithWhereUniqueWithoutQuestionInput | AssessmentAttemptUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AssessmentAttemptUpdateManyWithWhereWithoutQuestionInput | AssessmentAttemptUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AssessmentAttemptScalarWhereInput | AssessmentAttemptScalarWhereInput[]
  }

  export type AssessmentAttemptUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AssessmentAttemptCreateWithoutQuestionInput, AssessmentAttemptUncheckedCreateWithoutQuestionInput> | AssessmentAttemptCreateWithoutQuestionInput[] | AssessmentAttemptUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutQuestionInput | AssessmentAttemptCreateOrConnectWithoutQuestionInput[]
    upsert?: AssessmentAttemptUpsertWithWhereUniqueWithoutQuestionInput | AssessmentAttemptUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AssessmentAttemptCreateManyQuestionInputEnvelope
    set?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    disconnect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    delete?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    update?: AssessmentAttemptUpdateWithWhereUniqueWithoutQuestionInput | AssessmentAttemptUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AssessmentAttemptUpdateManyWithWhereWithoutQuestionInput | AssessmentAttemptUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AssessmentAttemptScalarWhereInput | AssessmentAttemptScalarWhereInput[]
  }

  export type AssessmentCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<AssessmentCreateWithoutAttemptsInput, AssessmentUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutAttemptsInput
    connect?: AssessmentWhereUniqueInput
  }

  export type AssessmentQuestionCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAttemptsInput, AssessmentQuestionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAttemptsInput
    connect?: AssessmentQuestionWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AssessmentUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<AssessmentCreateWithoutAttemptsInput, AssessmentUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutAttemptsInput
    upsert?: AssessmentUpsertWithoutAttemptsInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutAttemptsInput, AssessmentUpdateWithoutAttemptsInput>, AssessmentUncheckedUpdateWithoutAttemptsInput>
  }

  export type AssessmentQuestionUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAttemptsInput, AssessmentQuestionUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAttemptsInput
    upsert?: AssessmentQuestionUpsertWithoutAttemptsInput
    connect?: AssessmentQuestionWhereUniqueInput
    update?: XOR<XOR<AssessmentQuestionUpdateToOneWithWhereWithoutAttemptsInput, AssessmentQuestionUpdateWithoutAttemptsInput>, AssessmentQuestionUncheckedUpdateWithoutAttemptsInput>
  }

  export type AssessmentCreateNestedOneWithoutResultsInput = {
    create?: XOR<AssessmentCreateWithoutResultsInput, AssessmentUncheckedCreateWithoutResultsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutResultsInput
    connect?: AssessmentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssessmentUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<AssessmentCreateWithoutResultsInput, AssessmentUncheckedCreateWithoutResultsInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutResultsInput
    upsert?: AssessmentUpsertWithoutResultsInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutResultsInput, AssessmentUpdateWithoutResultsInput>, AssessmentUncheckedUpdateWithoutResultsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAssessmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeFilter<$PrismaModel> | $Enums.AssessmentType
  }

  export type NestedEnumAssessmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentStatus | EnumAssessmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentStatus[] | ListEnumAssessmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentStatus[] | ListEnumAssessmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentStatusFilter<$PrismaModel> | $Enums.AssessmentStatus
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumAssessmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentStatus | EnumAssessmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentStatus[] | ListEnumAssessmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentStatus[] | ListEnumAssessmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssessmentStatusFilter<$PrismaModel>
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

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumQuestionCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionCategory | EnumQuestionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionCategory[] | ListEnumQuestionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionCategory[] | ListEnumQuestionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionCategoryFilter<$PrismaModel> | $Enums.QuestionCategory
  }

  export type NestedEnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedEnumQuestionCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionCategory | EnumQuestionCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionCategory[] | ListEnumQuestionCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionCategory[] | ListEnumQuestionCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionCategoryWithAggregatesFilter<$PrismaModel> | $Enums.QuestionCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionCategoryFilter<$PrismaModel>
    _max?: NestedEnumQuestionCategoryFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AssessmentQuestionCreateWithoutAssessmentInput = {
    id?: string
    questionText: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: string | null
    type?: $Enums.QuestionType
    category: $Enums.QuestionCategory
    difficulty?: $Enums.DifficultyLevel
    points?: number
    audioUrl?: string | null
    expectedAnswer?: string | null
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AssessmentAttemptCreateNestedManyWithoutQuestionInput
  }

  export type AssessmentQuestionUncheckedCreateWithoutAssessmentInput = {
    id?: string
    questionText: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: string | null
    type?: $Enums.QuestionType
    category: $Enums.QuestionCategory
    difficulty?: $Enums.DifficultyLevel
    points?: number
    audioUrl?: string | null
    expectedAnswer?: string | null
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AssessmentAttemptUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type AssessmentQuestionCreateOrConnectWithoutAssessmentInput = {
    where: AssessmentQuestionWhereUniqueInput
    create: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentQuestionCreateManyAssessmentInputEnvelope = {
    data: AssessmentQuestionCreateManyAssessmentInput | AssessmentQuestionCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentAttemptCreateWithoutAssessmentInput = {
    id?: string
    userId: string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: boolean | null
    score?: number | null
    timeTaken?: number | null
    createdAt?: Date | string
    question: AssessmentQuestionCreateNestedOneWithoutAttemptsInput
  }

  export type AssessmentAttemptUncheckedCreateWithoutAssessmentInput = {
    id?: string
    userId: string
    questionId: string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: boolean | null
    score?: number | null
    timeTaken?: number | null
    createdAt?: Date | string
  }

  export type AssessmentAttemptCreateOrConnectWithoutAssessmentInput = {
    where: AssessmentAttemptWhereUniqueInput
    create: XOR<AssessmentAttemptCreateWithoutAssessmentInput, AssessmentAttemptUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentAttemptCreateManyAssessmentInputEnvelope = {
    data: AssessmentAttemptCreateManyAssessmentInput | AssessmentAttemptCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentResultCreateWithoutAssessmentInput = {
    id?: string
    userId: string
    totalScore: number
    maxScore: number
    percentage: number
    correctCount?: number
    wrongCount?: number
    unansweredCount?: number
    grammarScore?: number | null
    vocabularyScore?: number | null
    listeningScore?: number | null
    readingScore?: number | null
    recommendedLevel: $Enums.DifficultyLevel
    rawLevel?: string | null
    feedback?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: Date | string
  }

  export type AssessmentResultUncheckedCreateWithoutAssessmentInput = {
    id?: string
    userId: string
    totalScore: number
    maxScore: number
    percentage: number
    correctCount?: number
    wrongCount?: number
    unansweredCount?: number
    grammarScore?: number | null
    vocabularyScore?: number | null
    listeningScore?: number | null
    readingScore?: number | null
    recommendedLevel: $Enums.DifficultyLevel
    rawLevel?: string | null
    feedback?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: Date | string
  }

  export type AssessmentResultCreateOrConnectWithoutAssessmentInput = {
    where: AssessmentResultWhereUniqueInput
    create: XOR<AssessmentResultCreateWithoutAssessmentInput, AssessmentResultUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentQuestionUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: AssessmentQuestionWhereUniqueInput
    update: XOR<AssessmentQuestionUpdateWithoutAssessmentInput, AssessmentQuestionUncheckedUpdateWithoutAssessmentInput>
    create: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentQuestionUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: AssessmentQuestionWhereUniqueInput
    data: XOR<AssessmentQuestionUpdateWithoutAssessmentInput, AssessmentQuestionUncheckedUpdateWithoutAssessmentInput>
  }

  export type AssessmentQuestionUpdateManyWithWhereWithoutAssessmentInput = {
    where: AssessmentQuestionScalarWhereInput
    data: XOR<AssessmentQuestionUpdateManyMutationInput, AssessmentQuestionUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type AssessmentQuestionScalarWhereInput = {
    AND?: AssessmentQuestionScalarWhereInput | AssessmentQuestionScalarWhereInput[]
    OR?: AssessmentQuestionScalarWhereInput[]
    NOT?: AssessmentQuestionScalarWhereInput | AssessmentQuestionScalarWhereInput[]
    id?: StringFilter<"AssessmentQuestion"> | string
    assessmentId?: StringFilter<"AssessmentQuestion"> | string
    questionText?: StringFilter<"AssessmentQuestion"> | string
    options?: JsonNullableFilter<"AssessmentQuestion">
    correctAnswer?: StringNullableFilter<"AssessmentQuestion"> | string | null
    type?: EnumQuestionTypeFilter<"AssessmentQuestion"> | $Enums.QuestionType
    category?: EnumQuestionCategoryFilter<"AssessmentQuestion"> | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFilter<"AssessmentQuestion"> | $Enums.DifficultyLevel
    points?: IntFilter<"AssessmentQuestion"> | number
    audioUrl?: StringNullableFilter<"AssessmentQuestion"> | string | null
    expectedAnswer?: StringNullableFilter<"AssessmentQuestion"> | string | null
    orderIndex?: IntFilter<"AssessmentQuestion"> | number
    createdAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
  }

  export type AssessmentAttemptUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: AssessmentAttemptWhereUniqueInput
    update: XOR<AssessmentAttemptUpdateWithoutAssessmentInput, AssessmentAttemptUncheckedUpdateWithoutAssessmentInput>
    create: XOR<AssessmentAttemptCreateWithoutAssessmentInput, AssessmentAttemptUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentAttemptUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: AssessmentAttemptWhereUniqueInput
    data: XOR<AssessmentAttemptUpdateWithoutAssessmentInput, AssessmentAttemptUncheckedUpdateWithoutAssessmentInput>
  }

  export type AssessmentAttemptUpdateManyWithWhereWithoutAssessmentInput = {
    where: AssessmentAttemptScalarWhereInput
    data: XOR<AssessmentAttemptUpdateManyMutationInput, AssessmentAttemptUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type AssessmentAttemptScalarWhereInput = {
    AND?: AssessmentAttemptScalarWhereInput | AssessmentAttemptScalarWhereInput[]
    OR?: AssessmentAttemptScalarWhereInput[]
    NOT?: AssessmentAttemptScalarWhereInput | AssessmentAttemptScalarWhereInput[]
    id?: StringFilter<"AssessmentAttempt"> | string
    assessmentId?: StringFilter<"AssessmentAttempt"> | string
    userId?: StringFilter<"AssessmentAttempt"> | string
    questionId?: StringFilter<"AssessmentAttempt"> | string
    userAnswer?: JsonNullableFilter<"AssessmentAttempt">
    isCorrect?: BoolNullableFilter<"AssessmentAttempt"> | boolean | null
    score?: IntNullableFilter<"AssessmentAttempt"> | number | null
    timeTaken?: IntNullableFilter<"AssessmentAttempt"> | number | null
    createdAt?: DateTimeFilter<"AssessmentAttempt"> | Date | string
  }

  export type AssessmentResultUpsertWithoutAssessmentInput = {
    update: XOR<AssessmentResultUpdateWithoutAssessmentInput, AssessmentResultUncheckedUpdateWithoutAssessmentInput>
    create: XOR<AssessmentResultCreateWithoutAssessmentInput, AssessmentResultUncheckedCreateWithoutAssessmentInput>
    where?: AssessmentResultWhereInput
  }

  export type AssessmentResultUpdateToOneWithWhereWithoutAssessmentInput = {
    where?: AssessmentResultWhereInput
    data: XOR<AssessmentResultUpdateWithoutAssessmentInput, AssessmentResultUncheckedUpdateWithoutAssessmentInput>
  }

  export type AssessmentResultUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    unansweredCount?: IntFieldUpdateOperationsInput | number
    grammarScore?: NullableFloatFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    listeningScore?: NullableFloatFieldUpdateOperationsInput | number | null
    readingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    rawLevel?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentResultUncheckedUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalScore?: IntFieldUpdateOperationsInput | number
    maxScore?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    unansweredCount?: IntFieldUpdateOperationsInput | number
    grammarScore?: NullableFloatFieldUpdateOperationsInput | number | null
    vocabularyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    listeningScore?: NullableFloatFieldUpdateOperationsInput | number | null
    readingScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recommendedLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    rawLevel?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateWithoutQuestionsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type?: $Enums.AssessmentType
    status?: $Enums.AssessmentStatus
    totalQuestions?: number
    timeLimit?: number | null
    passingScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AssessmentAttemptCreateNestedManyWithoutAssessmentInput
    results?: AssessmentResultCreateNestedOneWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutQuestionsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type?: $Enums.AssessmentType
    status?: $Enums.AssessmentStatus
    totalQuestions?: number
    timeLimit?: number | null
    passingScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: AssessmentAttemptUncheckedCreateNestedManyWithoutAssessmentInput
    results?: AssessmentResultUncheckedCreateNestedOneWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutQuestionsInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutQuestionsInput, AssessmentUncheckedCreateWithoutQuestionsInput>
  }

  export type AssessmentAttemptCreateWithoutQuestionInput = {
    id?: string
    userId: string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: boolean | null
    score?: number | null
    timeTaken?: number | null
    createdAt?: Date | string
    assessment: AssessmentCreateNestedOneWithoutAttemptsInput
  }

  export type AssessmentAttemptUncheckedCreateWithoutQuestionInput = {
    id?: string
    assessmentId: string
    userId: string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: boolean | null
    score?: number | null
    timeTaken?: number | null
    createdAt?: Date | string
  }

  export type AssessmentAttemptCreateOrConnectWithoutQuestionInput = {
    where: AssessmentAttemptWhereUniqueInput
    create: XOR<AssessmentAttemptCreateWithoutQuestionInput, AssessmentAttemptUncheckedCreateWithoutQuestionInput>
  }

  export type AssessmentAttemptCreateManyQuestionInputEnvelope = {
    data: AssessmentAttemptCreateManyQuestionInput | AssessmentAttemptCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentUpsertWithoutQuestionsInput = {
    update: XOR<AssessmentUpdateWithoutQuestionsInput, AssessmentUncheckedUpdateWithoutQuestionsInput>
    create: XOR<AssessmentCreateWithoutQuestionsInput, AssessmentUncheckedCreateWithoutQuestionsInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutQuestionsInput, AssessmentUncheckedUpdateWithoutQuestionsInput>
  }

  export type AssessmentUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    status?: EnumAssessmentStatusFieldUpdateOperationsInput | $Enums.AssessmentStatus
    totalQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AssessmentAttemptUpdateManyWithoutAssessmentNestedInput
    results?: AssessmentResultUpdateOneWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    status?: EnumAssessmentStatusFieldUpdateOperationsInput | $Enums.AssessmentStatus
    totalQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AssessmentAttemptUncheckedUpdateManyWithoutAssessmentNestedInput
    results?: AssessmentResultUncheckedUpdateOneWithoutAssessmentNestedInput
  }

  export type AssessmentAttemptUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AssessmentAttemptWhereUniqueInput
    update: XOR<AssessmentAttemptUpdateWithoutQuestionInput, AssessmentAttemptUncheckedUpdateWithoutQuestionInput>
    create: XOR<AssessmentAttemptCreateWithoutQuestionInput, AssessmentAttemptUncheckedCreateWithoutQuestionInput>
  }

  export type AssessmentAttemptUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AssessmentAttemptWhereUniqueInput
    data: XOR<AssessmentAttemptUpdateWithoutQuestionInput, AssessmentAttemptUncheckedUpdateWithoutQuestionInput>
  }

  export type AssessmentAttemptUpdateManyWithWhereWithoutQuestionInput = {
    where: AssessmentAttemptScalarWhereInput
    data: XOR<AssessmentAttemptUpdateManyMutationInput, AssessmentAttemptUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AssessmentCreateWithoutAttemptsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type?: $Enums.AssessmentType
    status?: $Enums.AssessmentStatus
    totalQuestions?: number
    timeLimit?: number | null
    passingScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: AssessmentQuestionCreateNestedManyWithoutAssessmentInput
    results?: AssessmentResultCreateNestedOneWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutAttemptsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type?: $Enums.AssessmentType
    status?: $Enums.AssessmentStatus
    totalQuestions?: number
    timeLimit?: number | null
    passingScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: AssessmentQuestionUncheckedCreateNestedManyWithoutAssessmentInput
    results?: AssessmentResultUncheckedCreateNestedOneWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutAttemptsInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutAttemptsInput, AssessmentUncheckedCreateWithoutAttemptsInput>
  }

  export type AssessmentQuestionCreateWithoutAttemptsInput = {
    id?: string
    questionText: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: string | null
    type?: $Enums.QuestionType
    category: $Enums.QuestionCategory
    difficulty?: $Enums.DifficultyLevel
    points?: number
    audioUrl?: string | null
    expectedAnswer?: string | null
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assessment: AssessmentCreateNestedOneWithoutQuestionsInput
  }

  export type AssessmentQuestionUncheckedCreateWithoutAttemptsInput = {
    id?: string
    assessmentId: string
    questionText: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: string | null
    type?: $Enums.QuestionType
    category: $Enums.QuestionCategory
    difficulty?: $Enums.DifficultyLevel
    points?: number
    audioUrl?: string | null
    expectedAnswer?: string | null
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionCreateOrConnectWithoutAttemptsInput = {
    where: AssessmentQuestionWhereUniqueInput
    create: XOR<AssessmentQuestionCreateWithoutAttemptsInput, AssessmentQuestionUncheckedCreateWithoutAttemptsInput>
  }

  export type AssessmentUpsertWithoutAttemptsInput = {
    update: XOR<AssessmentUpdateWithoutAttemptsInput, AssessmentUncheckedUpdateWithoutAttemptsInput>
    create: XOR<AssessmentCreateWithoutAttemptsInput, AssessmentUncheckedCreateWithoutAttemptsInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutAttemptsInput, AssessmentUncheckedUpdateWithoutAttemptsInput>
  }

  export type AssessmentUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    status?: EnumAssessmentStatusFieldUpdateOperationsInput | $Enums.AssessmentStatus
    totalQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AssessmentQuestionUpdateManyWithoutAssessmentNestedInput
    results?: AssessmentResultUpdateOneWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    status?: EnumAssessmentStatusFieldUpdateOperationsInput | $Enums.AssessmentStatus
    totalQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AssessmentQuestionUncheckedUpdateManyWithoutAssessmentNestedInput
    results?: AssessmentResultUncheckedUpdateOneWithoutAssessmentNestedInput
  }

  export type AssessmentQuestionUpsertWithoutAttemptsInput = {
    update: XOR<AssessmentQuestionUpdateWithoutAttemptsInput, AssessmentQuestionUncheckedUpdateWithoutAttemptsInput>
    create: XOR<AssessmentQuestionCreateWithoutAttemptsInput, AssessmentQuestionUncheckedCreateWithoutAttemptsInput>
    where?: AssessmentQuestionWhereInput
  }

  export type AssessmentQuestionUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: AssessmentQuestionWhereInput
    data: XOR<AssessmentQuestionUpdateWithoutAttemptsInput, AssessmentQuestionUncheckedUpdateWithoutAttemptsInput>
  }

  export type AssessmentQuestionUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    category?: EnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    points?: IntFieldUpdateOperationsInput | number
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: AssessmentUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type AssessmentQuestionUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    category?: EnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    points?: IntFieldUpdateOperationsInput | number
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateWithoutResultsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type?: $Enums.AssessmentType
    status?: $Enums.AssessmentStatus
    totalQuestions?: number
    timeLimit?: number | null
    passingScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: AssessmentQuestionCreateNestedManyWithoutAssessmentInput
    attempts?: AssessmentAttemptCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutResultsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    type?: $Enums.AssessmentType
    status?: $Enums.AssessmentStatus
    totalQuestions?: number
    timeLimit?: number | null
    passingScore?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: AssessmentQuestionUncheckedCreateNestedManyWithoutAssessmentInput
    attempts?: AssessmentAttemptUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutResultsInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutResultsInput, AssessmentUncheckedCreateWithoutResultsInput>
  }

  export type AssessmentUpsertWithoutResultsInput = {
    update: XOR<AssessmentUpdateWithoutResultsInput, AssessmentUncheckedUpdateWithoutResultsInput>
    create: XOR<AssessmentCreateWithoutResultsInput, AssessmentUncheckedCreateWithoutResultsInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutResultsInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutResultsInput, AssessmentUncheckedUpdateWithoutResultsInput>
  }

  export type AssessmentUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    status?: EnumAssessmentStatusFieldUpdateOperationsInput | $Enums.AssessmentStatus
    totalQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AssessmentQuestionUpdateManyWithoutAssessmentNestedInput
    attempts?: AssessmentAttemptUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    status?: EnumAssessmentStatusFieldUpdateOperationsInput | $Enums.AssessmentStatus
    totalQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: NullableIntFieldUpdateOperationsInput | number | null
    passingScore?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: AssessmentQuestionUncheckedUpdateManyWithoutAssessmentNestedInput
    attempts?: AssessmentAttemptUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentQuestionCreateManyAssessmentInput = {
    id?: string
    questionText: string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: string | null
    type?: $Enums.QuestionType
    category: $Enums.QuestionCategory
    difficulty?: $Enums.DifficultyLevel
    points?: number
    audioUrl?: string | null
    expectedAnswer?: string | null
    orderIndex?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentAttemptCreateManyAssessmentInput = {
    id?: string
    userId: string
    questionId: string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: boolean | null
    score?: number | null
    timeTaken?: number | null
    createdAt?: Date | string
  }

  export type AssessmentQuestionUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    category?: EnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    points?: IntFieldUpdateOperationsInput | number
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AssessmentAttemptUpdateManyWithoutQuestionNestedInput
  }

  export type AssessmentQuestionUncheckedUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    category?: EnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    points?: IntFieldUpdateOperationsInput | number
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: AssessmentAttemptUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AssessmentQuestionUncheckedUpdateManyWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    options?: NullableJsonNullValueInput | InputJsonValue
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    category?: EnumQuestionCategoryFieldUpdateOperationsInput | $Enums.QuestionCategory
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    points?: IntFieldUpdateOperationsInput | number
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expectedAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAttemptUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTaken?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: AssessmentQuestionUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type AssessmentAttemptUncheckedUpdateWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTaken?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAttemptUncheckedUpdateManyWithoutAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTaken?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAttemptCreateManyQuestionInput = {
    id?: string
    assessmentId: string
    userId: string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: boolean | null
    score?: number | null
    timeTaken?: number | null
    createdAt?: Date | string
  }

  export type AssessmentAttemptUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTaken?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessment?: AssessmentUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type AssessmentAttemptUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTaken?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAttemptUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    assessmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableJsonNullValueInput | InputJsonValue
    isCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    timeTaken?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AssessmentCountOutputTypeDefaultArgs instead
     */
    export type AssessmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentQuestionCountOutputTypeDefaultArgs instead
     */
    export type AssessmentQuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentQuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentDefaultArgs instead
     */
    export type AssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentQuestionDefaultArgs instead
     */
    export type AssessmentQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentQuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentAttemptDefaultArgs instead
     */
    export type AssessmentAttemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentAttemptDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentResultDefaultArgs instead
     */
    export type AssessmentResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentResultDefaultArgs<ExtArgs>

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