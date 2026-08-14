
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
 * Model UserLearningSignal
 * 
 */
export type UserLearningSignal = $Result.DefaultSelection<Prisma.$UserLearningSignalPayload>
/**
 * Model Recommendation
 * 
 */
export type Recommendation = $Result.DefaultSelection<Prisma.$RecommendationPayload>
/**
 * Model RecommendationFeedback
 * 
 */
export type RecommendationFeedback = $Result.DefaultSelection<Prisma.$RecommendationFeedbackPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RecommendationType: {
  LESSON: 'LESSON',
  GRAMMAR_TOPIC: 'GRAMMAR_TOPIC',
  VOCABULARY_WORD: 'VOCABULARY_WORD',
  SPEAKING_PRACTICE: 'SPEAKING_PRACTICE',
  ASSESSMENT: 'ASSESSMENT',
  REVIEW: 'REVIEW'
};

export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType]


export const RecommendationStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  DISMISSED: 'DISMISSED',
  EXPIRED: 'EXPIRED'
};

export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus]

}

export type RecommendationType = $Enums.RecommendationType

export const RecommendationType: typeof $Enums.RecommendationType

export type RecommendationStatus = $Enums.RecommendationStatus

export const RecommendationStatus: typeof $Enums.RecommendationStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserLearningSignals
 * const userLearningSignals = await prisma.userLearningSignal.findMany()
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
   * // Fetch zero or more UserLearningSignals
   * const userLearningSignals = await prisma.userLearningSignal.findMany()
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
   * `prisma.userLearningSignal`: Exposes CRUD operations for the **UserLearningSignal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLearningSignals
    * const userLearningSignals = await prisma.userLearningSignal.findMany()
    * ```
    */
  get userLearningSignal(): Prisma.UserLearningSignalDelegate<ExtArgs>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendation.findMany()
    * ```
    */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs>;

  /**
   * `prisma.recommendationFeedback`: Exposes CRUD operations for the **RecommendationFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecommendationFeedbacks
    * const recommendationFeedbacks = await prisma.recommendationFeedback.findMany()
    * ```
    */
  get recommendationFeedback(): Prisma.RecommendationFeedbackDelegate<ExtArgs>;
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
    UserLearningSignal: 'UserLearningSignal',
    Recommendation: 'Recommendation',
    RecommendationFeedback: 'RecommendationFeedback'
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
      modelProps: "userLearningSignal" | "recommendation" | "recommendationFeedback"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserLearningSignal: {
        payload: Prisma.$UserLearningSignalPayload<ExtArgs>
        fields: Prisma.UserLearningSignalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLearningSignalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningSignalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLearningSignalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningSignalPayload>
          }
          findFirst: {
            args: Prisma.UserLearningSignalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningSignalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLearningSignalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningSignalPayload>
          }
          findMany: {
            args: Prisma.UserLearningSignalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningSignalPayload>[]
          }
          create: {
            args: Prisma.UserLearningSignalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningSignalPayload>
          }
          createMany: {
            args: Prisma.UserLearningSignalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLearningSignalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningSignalPayload>[]
          }
          delete: {
            args: Prisma.UserLearningSignalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningSignalPayload>
          }
          update: {
            args: Prisma.UserLearningSignalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningSignalPayload>
          }
          deleteMany: {
            args: Prisma.UserLearningSignalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLearningSignalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLearningSignalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningSignalPayload>
          }
          aggregate: {
            args: Prisma.UserLearningSignalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLearningSignal>
          }
          groupBy: {
            args: Prisma.UserLearningSignalGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLearningSignalGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLearningSignalCountArgs<ExtArgs>
            result: $Utils.Optional<UserLearningSignalCountAggregateOutputType> | number
          }
        }
      }
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>
        fields: Prisma.RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendation>
          }
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationCountAggregateOutputType> | number
          }
        }
      }
      RecommendationFeedback: {
        payload: Prisma.$RecommendationFeedbackPayload<ExtArgs>
        fields: Prisma.RecommendationFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          findMany: {
            args: Prisma.RecommendationFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>[]
          }
          create: {
            args: Prisma.RecommendationFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          createMany: {
            args: Prisma.RecommendationFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationFeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>[]
          }
          delete: {
            args: Prisma.RecommendationFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          update: {
            args: Prisma.RecommendationFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecommendationFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationFeedbackPayload>
          }
          aggregate: {
            args: Prisma.RecommendationFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendationFeedback>
          }
          groupBy: {
            args: Prisma.RecommendationFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationFeedbackCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model UserLearningSignal
   */

  export type AggregateUserLearningSignal = {
    _count: UserLearningSignalCountAggregateOutputType | null
    _avg: UserLearningSignalAvgAggregateOutputType | null
    _sum: UserLearningSignalSumAggregateOutputType | null
    _min: UserLearningSignalMinAggregateOutputType | null
    _max: UserLearningSignalMaxAggregateOutputType | null
  }

  export type UserLearningSignalAvgAggregateOutputType = {
    lessonsCompleted: number | null
    grammarExercises: number | null
    vocabularyLearned: number | null
    speakingPractices: number | null
    grammarScore: number | null
    vocabularyScore: number | null
    speakingScore: number | null
  }

  export type UserLearningSignalSumAggregateOutputType = {
    lessonsCompleted: number | null
    grammarExercises: number | null
    vocabularyLearned: number | null
    speakingPractices: number | null
    grammarScore: number | null
    vocabularyScore: number | null
    speakingScore: number | null
  }

  export type UserLearningSignalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    englishLevel: string | null
    lessonsCompleted: number | null
    grammarExercises: number | null
    vocabularyLearned: number | null
    speakingPractices: number | null
    grammarScore: number | null
    vocabularyScore: number | null
    speakingScore: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserLearningSignalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    englishLevel: string | null
    lessonsCompleted: number | null
    grammarExercises: number | null
    vocabularyLearned: number | null
    speakingPractices: number | null
    grammarScore: number | null
    vocabularyScore: number | null
    speakingScore: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserLearningSignalCountAggregateOutputType = {
    id: number
    userId: number
    englishLevel: number
    lessonsCompleted: number
    grammarExercises: number
    vocabularyLearned: number
    speakingPractices: number
    grammarScore: number
    vocabularyScore: number
    speakingScore: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type UserLearningSignalAvgAggregateInputType = {
    lessonsCompleted?: true
    grammarExercises?: true
    vocabularyLearned?: true
    speakingPractices?: true
    grammarScore?: true
    vocabularyScore?: true
    speakingScore?: true
  }

  export type UserLearningSignalSumAggregateInputType = {
    lessonsCompleted?: true
    grammarExercises?: true
    vocabularyLearned?: true
    speakingPractices?: true
    grammarScore?: true
    vocabularyScore?: true
    speakingScore?: true
  }

  export type UserLearningSignalMinAggregateInputType = {
    id?: true
    userId?: true
    englishLevel?: true
    lessonsCompleted?: true
    grammarExercises?: true
    vocabularyLearned?: true
    speakingPractices?: true
    grammarScore?: true
    vocabularyScore?: true
    speakingScore?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserLearningSignalMaxAggregateInputType = {
    id?: true
    userId?: true
    englishLevel?: true
    lessonsCompleted?: true
    grammarExercises?: true
    vocabularyLearned?: true
    speakingPractices?: true
    grammarScore?: true
    vocabularyScore?: true
    speakingScore?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserLearningSignalCountAggregateInputType = {
    id?: true
    userId?: true
    englishLevel?: true
    lessonsCompleted?: true
    grammarExercises?: true
    vocabularyLearned?: true
    speakingPractices?: true
    grammarScore?: true
    vocabularyScore?: true
    speakingScore?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserLearningSignalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLearningSignal to aggregate.
     */
    where?: UserLearningSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearningSignals to fetch.
     */
    orderBy?: UserLearningSignalOrderByWithRelationInput | UserLearningSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLearningSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearningSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearningSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLearningSignals
    **/
    _count?: true | UserLearningSignalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLearningSignalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLearningSignalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLearningSignalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLearningSignalMaxAggregateInputType
  }

  export type GetUserLearningSignalAggregateType<T extends UserLearningSignalAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLearningSignal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLearningSignal[P]>
      : GetScalarType<T[P], AggregateUserLearningSignal[P]>
  }




  export type UserLearningSignalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLearningSignalWhereInput
    orderBy?: UserLearningSignalOrderByWithAggregationInput | UserLearningSignalOrderByWithAggregationInput[]
    by: UserLearningSignalScalarFieldEnum[] | UserLearningSignalScalarFieldEnum
    having?: UserLearningSignalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLearningSignalCountAggregateInputType | true
    _avg?: UserLearningSignalAvgAggregateInputType
    _sum?: UserLearningSignalSumAggregateInputType
    _min?: UserLearningSignalMinAggregateInputType
    _max?: UserLearningSignalMaxAggregateInputType
  }

  export type UserLearningSignalGroupByOutputType = {
    id: string
    userId: string
    englishLevel: string
    lessonsCompleted: number
    grammarExercises: number
    vocabularyLearned: number
    speakingPractices: number
    grammarScore: number
    vocabularyScore: number
    speakingScore: number
    updatedAt: Date
    createdAt: Date
    _count: UserLearningSignalCountAggregateOutputType | null
    _avg: UserLearningSignalAvgAggregateOutputType | null
    _sum: UserLearningSignalSumAggregateOutputType | null
    _min: UserLearningSignalMinAggregateOutputType | null
    _max: UserLearningSignalMaxAggregateOutputType | null
  }

  type GetUserLearningSignalGroupByPayload<T extends UserLearningSignalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLearningSignalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLearningSignalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLearningSignalGroupByOutputType[P]>
            : GetScalarType<T[P], UserLearningSignalGroupByOutputType[P]>
        }
      >
    >


  export type UserLearningSignalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    englishLevel?: boolean
    lessonsCompleted?: boolean
    grammarExercises?: boolean
    vocabularyLearned?: boolean
    speakingPractices?: boolean
    grammarScore?: boolean
    vocabularyScore?: boolean
    speakingScore?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userLearningSignal"]>

  export type UserLearningSignalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    englishLevel?: boolean
    lessonsCompleted?: boolean
    grammarExercises?: boolean
    vocabularyLearned?: boolean
    speakingPractices?: boolean
    grammarScore?: boolean
    vocabularyScore?: boolean
    speakingScore?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userLearningSignal"]>

  export type UserLearningSignalSelectScalar = {
    id?: boolean
    userId?: boolean
    englishLevel?: boolean
    lessonsCompleted?: boolean
    grammarExercises?: boolean
    vocabularyLearned?: boolean
    speakingPractices?: boolean
    grammarScore?: boolean
    vocabularyScore?: boolean
    speakingScore?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }


  export type $UserLearningSignalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLearningSignal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      englishLevel: string
      lessonsCompleted: number
      grammarExercises: number
      vocabularyLearned: number
      speakingPractices: number
      grammarScore: number
      vocabularyScore: number
      speakingScore: number
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["userLearningSignal"]>
    composites: {}
  }

  type UserLearningSignalGetPayload<S extends boolean | null | undefined | UserLearningSignalDefaultArgs> = $Result.GetResult<Prisma.$UserLearningSignalPayload, S>

  type UserLearningSignalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLearningSignalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserLearningSignalCountAggregateInputType | true
    }

  export interface UserLearningSignalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLearningSignal'], meta: { name: 'UserLearningSignal' } }
    /**
     * Find zero or one UserLearningSignal that matches the filter.
     * @param {UserLearningSignalFindUniqueArgs} args - Arguments to find a UserLearningSignal
     * @example
     * // Get one UserLearningSignal
     * const userLearningSignal = await prisma.userLearningSignal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLearningSignalFindUniqueArgs>(args: SelectSubset<T, UserLearningSignalFindUniqueArgs<ExtArgs>>): Prisma__UserLearningSignalClient<$Result.GetResult<Prisma.$UserLearningSignalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserLearningSignal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserLearningSignalFindUniqueOrThrowArgs} args - Arguments to find a UserLearningSignal
     * @example
     * // Get one UserLearningSignal
     * const userLearningSignal = await prisma.userLearningSignal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLearningSignalFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLearningSignalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLearningSignalClient<$Result.GetResult<Prisma.$UserLearningSignalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserLearningSignal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningSignalFindFirstArgs} args - Arguments to find a UserLearningSignal
     * @example
     * // Get one UserLearningSignal
     * const userLearningSignal = await prisma.userLearningSignal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLearningSignalFindFirstArgs>(args?: SelectSubset<T, UserLearningSignalFindFirstArgs<ExtArgs>>): Prisma__UserLearningSignalClient<$Result.GetResult<Prisma.$UserLearningSignalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserLearningSignal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningSignalFindFirstOrThrowArgs} args - Arguments to find a UserLearningSignal
     * @example
     * // Get one UserLearningSignal
     * const userLearningSignal = await prisma.userLearningSignal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLearningSignalFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLearningSignalFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLearningSignalClient<$Result.GetResult<Prisma.$UserLearningSignalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserLearningSignals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningSignalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLearningSignals
     * const userLearningSignals = await prisma.userLearningSignal.findMany()
     * 
     * // Get first 10 UserLearningSignals
     * const userLearningSignals = await prisma.userLearningSignal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLearningSignalWithIdOnly = await prisma.userLearningSignal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLearningSignalFindManyArgs>(args?: SelectSubset<T, UserLearningSignalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningSignalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserLearningSignal.
     * @param {UserLearningSignalCreateArgs} args - Arguments to create a UserLearningSignal.
     * @example
     * // Create one UserLearningSignal
     * const UserLearningSignal = await prisma.userLearningSignal.create({
     *   data: {
     *     // ... data to create a UserLearningSignal
     *   }
     * })
     * 
     */
    create<T extends UserLearningSignalCreateArgs>(args: SelectSubset<T, UserLearningSignalCreateArgs<ExtArgs>>): Prisma__UserLearningSignalClient<$Result.GetResult<Prisma.$UserLearningSignalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserLearningSignals.
     * @param {UserLearningSignalCreateManyArgs} args - Arguments to create many UserLearningSignals.
     * @example
     * // Create many UserLearningSignals
     * const userLearningSignal = await prisma.userLearningSignal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLearningSignalCreateManyArgs>(args?: SelectSubset<T, UserLearningSignalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLearningSignals and returns the data saved in the database.
     * @param {UserLearningSignalCreateManyAndReturnArgs} args - Arguments to create many UserLearningSignals.
     * @example
     * // Create many UserLearningSignals
     * const userLearningSignal = await prisma.userLearningSignal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLearningSignals and only return the `id`
     * const userLearningSignalWithIdOnly = await prisma.userLearningSignal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLearningSignalCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLearningSignalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningSignalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserLearningSignal.
     * @param {UserLearningSignalDeleteArgs} args - Arguments to delete one UserLearningSignal.
     * @example
     * // Delete one UserLearningSignal
     * const UserLearningSignal = await prisma.userLearningSignal.delete({
     *   where: {
     *     // ... filter to delete one UserLearningSignal
     *   }
     * })
     * 
     */
    delete<T extends UserLearningSignalDeleteArgs>(args: SelectSubset<T, UserLearningSignalDeleteArgs<ExtArgs>>): Prisma__UserLearningSignalClient<$Result.GetResult<Prisma.$UserLearningSignalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserLearningSignal.
     * @param {UserLearningSignalUpdateArgs} args - Arguments to update one UserLearningSignal.
     * @example
     * // Update one UserLearningSignal
     * const userLearningSignal = await prisma.userLearningSignal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLearningSignalUpdateArgs>(args: SelectSubset<T, UserLearningSignalUpdateArgs<ExtArgs>>): Prisma__UserLearningSignalClient<$Result.GetResult<Prisma.$UserLearningSignalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserLearningSignals.
     * @param {UserLearningSignalDeleteManyArgs} args - Arguments to filter UserLearningSignals to delete.
     * @example
     * // Delete a few UserLearningSignals
     * const { count } = await prisma.userLearningSignal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLearningSignalDeleteManyArgs>(args?: SelectSubset<T, UserLearningSignalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLearningSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningSignalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLearningSignals
     * const userLearningSignal = await prisma.userLearningSignal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLearningSignalUpdateManyArgs>(args: SelectSubset<T, UserLearningSignalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLearningSignal.
     * @param {UserLearningSignalUpsertArgs} args - Arguments to update or create a UserLearningSignal.
     * @example
     * // Update or create a UserLearningSignal
     * const userLearningSignal = await prisma.userLearningSignal.upsert({
     *   create: {
     *     // ... data to create a UserLearningSignal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLearningSignal we want to update
     *   }
     * })
     */
    upsert<T extends UserLearningSignalUpsertArgs>(args: SelectSubset<T, UserLearningSignalUpsertArgs<ExtArgs>>): Prisma__UserLearningSignalClient<$Result.GetResult<Prisma.$UserLearningSignalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserLearningSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningSignalCountArgs} args - Arguments to filter UserLearningSignals to count.
     * @example
     * // Count the number of UserLearningSignals
     * const count = await prisma.userLearningSignal.count({
     *   where: {
     *     // ... the filter for the UserLearningSignals we want to count
     *   }
     * })
    **/
    count<T extends UserLearningSignalCountArgs>(
      args?: Subset<T, UserLearningSignalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLearningSignalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLearningSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningSignalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLearningSignalAggregateArgs>(args: Subset<T, UserLearningSignalAggregateArgs>): Prisma.PrismaPromise<GetUserLearningSignalAggregateType<T>>

    /**
     * Group by UserLearningSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningSignalGroupByArgs} args - Group by arguments.
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
      T extends UserLearningSignalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLearningSignalGroupByArgs['orderBy'] }
        : { orderBy?: UserLearningSignalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLearningSignalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLearningSignalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLearningSignal model
   */
  readonly fields: UserLearningSignalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLearningSignal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLearningSignalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserLearningSignal model
   */ 
  interface UserLearningSignalFieldRefs {
    readonly id: FieldRef<"UserLearningSignal", 'String'>
    readonly userId: FieldRef<"UserLearningSignal", 'String'>
    readonly englishLevel: FieldRef<"UserLearningSignal", 'String'>
    readonly lessonsCompleted: FieldRef<"UserLearningSignal", 'Int'>
    readonly grammarExercises: FieldRef<"UserLearningSignal", 'Int'>
    readonly vocabularyLearned: FieldRef<"UserLearningSignal", 'Int'>
    readonly speakingPractices: FieldRef<"UserLearningSignal", 'Int'>
    readonly grammarScore: FieldRef<"UserLearningSignal", 'Float'>
    readonly vocabularyScore: FieldRef<"UserLearningSignal", 'Float'>
    readonly speakingScore: FieldRef<"UserLearningSignal", 'Float'>
    readonly updatedAt: FieldRef<"UserLearningSignal", 'DateTime'>
    readonly createdAt: FieldRef<"UserLearningSignal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLearningSignal findUnique
   */
  export type UserLearningSignalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelect<ExtArgs> | null
    /**
     * Filter, which UserLearningSignal to fetch.
     */
    where: UserLearningSignalWhereUniqueInput
  }

  /**
   * UserLearningSignal findUniqueOrThrow
   */
  export type UserLearningSignalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelect<ExtArgs> | null
    /**
     * Filter, which UserLearningSignal to fetch.
     */
    where: UserLearningSignalWhereUniqueInput
  }

  /**
   * UserLearningSignal findFirst
   */
  export type UserLearningSignalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelect<ExtArgs> | null
    /**
     * Filter, which UserLearningSignal to fetch.
     */
    where?: UserLearningSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearningSignals to fetch.
     */
    orderBy?: UserLearningSignalOrderByWithRelationInput | UserLearningSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLearningSignals.
     */
    cursor?: UserLearningSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearningSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearningSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLearningSignals.
     */
    distinct?: UserLearningSignalScalarFieldEnum | UserLearningSignalScalarFieldEnum[]
  }

  /**
   * UserLearningSignal findFirstOrThrow
   */
  export type UserLearningSignalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelect<ExtArgs> | null
    /**
     * Filter, which UserLearningSignal to fetch.
     */
    where?: UserLearningSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearningSignals to fetch.
     */
    orderBy?: UserLearningSignalOrderByWithRelationInput | UserLearningSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLearningSignals.
     */
    cursor?: UserLearningSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearningSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearningSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLearningSignals.
     */
    distinct?: UserLearningSignalScalarFieldEnum | UserLearningSignalScalarFieldEnum[]
  }

  /**
   * UserLearningSignal findMany
   */
  export type UserLearningSignalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelect<ExtArgs> | null
    /**
     * Filter, which UserLearningSignals to fetch.
     */
    where?: UserLearningSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearningSignals to fetch.
     */
    orderBy?: UserLearningSignalOrderByWithRelationInput | UserLearningSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLearningSignals.
     */
    cursor?: UserLearningSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearningSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearningSignals.
     */
    skip?: number
    distinct?: UserLearningSignalScalarFieldEnum | UserLearningSignalScalarFieldEnum[]
  }

  /**
   * UserLearningSignal create
   */
  export type UserLearningSignalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelect<ExtArgs> | null
    /**
     * The data needed to create a UserLearningSignal.
     */
    data: XOR<UserLearningSignalCreateInput, UserLearningSignalUncheckedCreateInput>
  }

  /**
   * UserLearningSignal createMany
   */
  export type UserLearningSignalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLearningSignals.
     */
    data: UserLearningSignalCreateManyInput | UserLearningSignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLearningSignal createManyAndReturn
   */
  export type UserLearningSignalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserLearningSignals.
     */
    data: UserLearningSignalCreateManyInput | UserLearningSignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLearningSignal update
   */
  export type UserLearningSignalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelect<ExtArgs> | null
    /**
     * The data needed to update a UserLearningSignal.
     */
    data: XOR<UserLearningSignalUpdateInput, UserLearningSignalUncheckedUpdateInput>
    /**
     * Choose, which UserLearningSignal to update.
     */
    where: UserLearningSignalWhereUniqueInput
  }

  /**
   * UserLearningSignal updateMany
   */
  export type UserLearningSignalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLearningSignals.
     */
    data: XOR<UserLearningSignalUpdateManyMutationInput, UserLearningSignalUncheckedUpdateManyInput>
    /**
     * Filter which UserLearningSignals to update
     */
    where?: UserLearningSignalWhereInput
  }

  /**
   * UserLearningSignal upsert
   */
  export type UserLearningSignalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelect<ExtArgs> | null
    /**
     * The filter to search for the UserLearningSignal to update in case it exists.
     */
    where: UserLearningSignalWhereUniqueInput
    /**
     * In case the UserLearningSignal found by the `where` argument doesn't exist, create a new UserLearningSignal with this data.
     */
    create: XOR<UserLearningSignalCreateInput, UserLearningSignalUncheckedCreateInput>
    /**
     * In case the UserLearningSignal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLearningSignalUpdateInput, UserLearningSignalUncheckedUpdateInput>
  }

  /**
   * UserLearningSignal delete
   */
  export type UserLearningSignalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelect<ExtArgs> | null
    /**
     * Filter which UserLearningSignal to delete.
     */
    where: UserLearningSignalWhereUniqueInput
  }

  /**
   * UserLearningSignal deleteMany
   */
  export type UserLearningSignalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLearningSignals to delete
     */
    where?: UserLearningSignalWhereInput
  }

  /**
   * UserLearningSignal without action
   */
  export type UserLearningSignalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningSignal
     */
    select?: UserLearningSignalSelect<ExtArgs> | null
  }


  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  export type RecommendationAvgAggregateOutputType = {
    score: number | null
  }

  export type RecommendationSumAggregateOutputType = {
    score: number | null
  }

  export type RecommendationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.RecommendationType | null
    targetId: string | null
    targetTitle: string | null
    score: number | null
    reason: string | null
    status: $Enums.RecommendationStatus | null
    expiresAt: Date | null
    feedbackReceived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecommendationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.RecommendationType | null
    targetId: string | null
    targetTitle: string | null
    score: number | null
    reason: string | null
    status: $Enums.RecommendationStatus | null
    expiresAt: Date | null
    feedbackReceived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecommendationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    targetId: number
    targetTitle: number
    targetMetadata: number
    score: number
    reason: number
    status: number
    expiresAt: number
    feedbackReceived: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecommendationAvgAggregateInputType = {
    score?: true
  }

  export type RecommendationSumAggregateInputType = {
    score?: true
  }

  export type RecommendationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    targetId?: true
    targetTitle?: true
    score?: true
    reason?: true
    status?: true
    expiresAt?: true
    feedbackReceived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecommendationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    targetId?: true
    targetTitle?: true
    score?: true
    reason?: true
    status?: true
    expiresAt?: true
    feedbackReceived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecommendationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    targetId?: true
    targetTitle?: true
    targetMetadata?: true
    score?: true
    reason?: true
    status?: true
    expiresAt?: true
    feedbackReceived?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationMaxAggregateInputType
  }

  export type GetRecommendationAggregateType<T extends RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>
  }




  export type RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithAggregationInput | RecommendationOrderByWithAggregationInput[]
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum
    having?: RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationCountAggregateInputType | true
    _avg?: RecommendationAvgAggregateInputType
    _sum?: RecommendationSumAggregateInputType
    _min?: RecommendationMinAggregateInputType
    _max?: RecommendationMaxAggregateInputType
  }

  export type RecommendationGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.RecommendationType
    targetId: string
    targetTitle: string
    targetMetadata: JsonValue | null
    score: number
    reason: string | null
    status: $Enums.RecommendationStatus
    expiresAt: Date | null
    feedbackReceived: boolean
    createdAt: Date
    updatedAt: Date
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    targetId?: boolean
    targetTitle?: boolean
    targetMetadata?: boolean
    score?: boolean
    reason?: boolean
    status?: boolean
    expiresAt?: boolean
    feedbackReceived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    targetId?: boolean
    targetTitle?: boolean
    targetMetadata?: boolean
    score?: boolean
    reason?: boolean
    status?: boolean
    expiresAt?: boolean
    feedbackReceived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    targetId?: boolean
    targetTitle?: boolean
    targetMetadata?: boolean
    score?: boolean
    reason?: boolean
    status?: boolean
    expiresAt?: boolean
    feedbackReceived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.RecommendationType
      targetId: string
      targetTitle: string
      targetMetadata: Prisma.JsonValue | null
      score: number
      reason: string | null
      status: $Enums.RecommendationStatus
      expiresAt: Date | null
      feedbackReceived: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recommendation"]>
    composites: {}
  }

  type RecommendationGetPayload<S extends boolean | null | undefined | RecommendationDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPayload, S>

  type RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecommendationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecommendationCountAggregateInputType | true
    }

  export interface RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'], meta: { name: 'Recommendation' } }
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationFindManyArgs>(args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     * 
     */
    create<T extends RecommendationCreateArgs>(args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationCreateManyArgs>(args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     * 
     */
    delete<T extends RecommendationDeleteArgs>(args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationUpdateArgs>(args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationUpdateManyArgs>(args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendationAggregateArgs>(args: Subset<T, RecommendationAggregateArgs>): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
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
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendation model
   */
  readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Recommendation model
   */ 
  interface RecommendationFieldRefs {
    readonly id: FieldRef<"Recommendation", 'String'>
    readonly userId: FieldRef<"Recommendation", 'String'>
    readonly type: FieldRef<"Recommendation", 'RecommendationType'>
    readonly targetId: FieldRef<"Recommendation", 'String'>
    readonly targetTitle: FieldRef<"Recommendation", 'String'>
    readonly targetMetadata: FieldRef<"Recommendation", 'Json'>
    readonly score: FieldRef<"Recommendation", 'Float'>
    readonly reason: FieldRef<"Recommendation", 'String'>
    readonly status: FieldRef<"Recommendation", 'RecommendationStatus'>
    readonly expiresAt: FieldRef<"Recommendation", 'DateTime'>
    readonly feedbackReceived: FieldRef<"Recommendation", 'Boolean'>
    readonly createdAt: FieldRef<"Recommendation", 'DateTime'>
    readonly updatedAt: FieldRef<"Recommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
  }

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation createManyAndReturn
   */
  export type RecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
  }

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
  }

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput
  }

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
  }


  /**
   * Model RecommendationFeedback
   */

  export type AggregateRecommendationFeedback = {
    _count: RecommendationFeedbackCountAggregateOutputType | null
    _avg: RecommendationFeedbackAvgAggregateOutputType | null
    _sum: RecommendationFeedbackSumAggregateOutputType | null
    _min: RecommendationFeedbackMinAggregateOutputType | null
    _max: RecommendationFeedbackMaxAggregateOutputType | null
  }

  export type RecommendationFeedbackAvgAggregateOutputType = {
    timeSpent: number | null
    rating: number | null
  }

  export type RecommendationFeedbackSumAggregateOutputType = {
    timeSpent: number | null
    rating: number | null
  }

  export type RecommendationFeedbackMinAggregateOutputType = {
    id: string | null
    recommendationId: string | null
    userId: string | null
    action: string | null
    timeSpent: number | null
    rating: number | null
    feedbackText: string | null
    createdAt: Date | null
  }

  export type RecommendationFeedbackMaxAggregateOutputType = {
    id: string | null
    recommendationId: string | null
    userId: string | null
    action: string | null
    timeSpent: number | null
    rating: number | null
    feedbackText: string | null
    createdAt: Date | null
  }

  export type RecommendationFeedbackCountAggregateOutputType = {
    id: number
    recommendationId: number
    userId: number
    action: number
    timeSpent: number
    rating: number
    feedbackText: number
    createdAt: number
    _all: number
  }


  export type RecommendationFeedbackAvgAggregateInputType = {
    timeSpent?: true
    rating?: true
  }

  export type RecommendationFeedbackSumAggregateInputType = {
    timeSpent?: true
    rating?: true
  }

  export type RecommendationFeedbackMinAggregateInputType = {
    id?: true
    recommendationId?: true
    userId?: true
    action?: true
    timeSpent?: true
    rating?: true
    feedbackText?: true
    createdAt?: true
  }

  export type RecommendationFeedbackMaxAggregateInputType = {
    id?: true
    recommendationId?: true
    userId?: true
    action?: true
    timeSpent?: true
    rating?: true
    feedbackText?: true
    createdAt?: true
  }

  export type RecommendationFeedbackCountAggregateInputType = {
    id?: true
    recommendationId?: true
    userId?: true
    action?: true
    timeSpent?: true
    rating?: true
    feedbackText?: true
    createdAt?: true
    _all?: true
  }

  export type RecommendationFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendationFeedback to aggregate.
     */
    where?: RecommendationFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationFeedbacks to fetch.
     */
    orderBy?: RecommendationFeedbackOrderByWithRelationInput | RecommendationFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecommendationFeedbacks
    **/
    _count?: true | RecommendationFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendationFeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendationFeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationFeedbackMaxAggregateInputType
  }

  export type GetRecommendationFeedbackAggregateType<T extends RecommendationFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendationFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendationFeedback[P]>
      : GetScalarType<T[P], AggregateRecommendationFeedback[P]>
  }




  export type RecommendationFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationFeedbackWhereInput
    orderBy?: RecommendationFeedbackOrderByWithAggregationInput | RecommendationFeedbackOrderByWithAggregationInput[]
    by: RecommendationFeedbackScalarFieldEnum[] | RecommendationFeedbackScalarFieldEnum
    having?: RecommendationFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationFeedbackCountAggregateInputType | true
    _avg?: RecommendationFeedbackAvgAggregateInputType
    _sum?: RecommendationFeedbackSumAggregateInputType
    _min?: RecommendationFeedbackMinAggregateInputType
    _max?: RecommendationFeedbackMaxAggregateInputType
  }

  export type RecommendationFeedbackGroupByOutputType = {
    id: string
    recommendationId: string
    userId: string
    action: string
    timeSpent: number | null
    rating: number | null
    feedbackText: string | null
    createdAt: Date
    _count: RecommendationFeedbackCountAggregateOutputType | null
    _avg: RecommendationFeedbackAvgAggregateOutputType | null
    _sum: RecommendationFeedbackSumAggregateOutputType | null
    _min: RecommendationFeedbackMinAggregateOutputType | null
    _max: RecommendationFeedbackMaxAggregateOutputType | null
  }

  type GetRecommendationFeedbackGroupByPayload<T extends RecommendationFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recommendationId?: boolean
    userId?: boolean
    action?: boolean
    timeSpent?: boolean
    rating?: boolean
    feedbackText?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recommendationFeedback"]>

  export type RecommendationFeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recommendationId?: boolean
    userId?: boolean
    action?: boolean
    timeSpent?: boolean
    rating?: boolean
    feedbackText?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recommendationFeedback"]>

  export type RecommendationFeedbackSelectScalar = {
    id?: boolean
    recommendationId?: boolean
    userId?: boolean
    action?: boolean
    timeSpent?: boolean
    rating?: boolean
    feedbackText?: boolean
    createdAt?: boolean
  }


  export type $RecommendationFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecommendationFeedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recommendationId: string
      userId: string
      action: string
      timeSpent: number | null
      rating: number | null
      feedbackText: string | null
      createdAt: Date
    }, ExtArgs["result"]["recommendationFeedback"]>
    composites: {}
  }

  type RecommendationFeedbackGetPayload<S extends boolean | null | undefined | RecommendationFeedbackDefaultArgs> = $Result.GetResult<Prisma.$RecommendationFeedbackPayload, S>

  type RecommendationFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecommendationFeedbackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecommendationFeedbackCountAggregateInputType | true
    }

  export interface RecommendationFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecommendationFeedback'], meta: { name: 'RecommendationFeedback' } }
    /**
     * Find zero or one RecommendationFeedback that matches the filter.
     * @param {RecommendationFeedbackFindUniqueArgs} args - Arguments to find a RecommendationFeedback
     * @example
     * // Get one RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFeedbackFindUniqueArgs>(args: SelectSubset<T, RecommendationFeedbackFindUniqueArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RecommendationFeedback that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecommendationFeedbackFindUniqueOrThrowArgs} args - Arguments to find a RecommendationFeedback
     * @example
     * // Get one RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RecommendationFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackFindFirstArgs} args - Arguments to find a RecommendationFeedback
     * @example
     * // Get one RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFeedbackFindFirstArgs>(args?: SelectSubset<T, RecommendationFeedbackFindFirstArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RecommendationFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackFindFirstOrThrowArgs} args - Arguments to find a RecommendationFeedback
     * @example
     * // Get one RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RecommendationFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecommendationFeedbacks
     * const recommendationFeedbacks = await prisma.recommendationFeedback.findMany()
     * 
     * // Get first 10 RecommendationFeedbacks
     * const recommendationFeedbacks = await prisma.recommendationFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationFeedbackWithIdOnly = await prisma.recommendationFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationFeedbackFindManyArgs>(args?: SelectSubset<T, RecommendationFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RecommendationFeedback.
     * @param {RecommendationFeedbackCreateArgs} args - Arguments to create a RecommendationFeedback.
     * @example
     * // Create one RecommendationFeedback
     * const RecommendationFeedback = await prisma.recommendationFeedback.create({
     *   data: {
     *     // ... data to create a RecommendationFeedback
     *   }
     * })
     * 
     */
    create<T extends RecommendationFeedbackCreateArgs>(args: SelectSubset<T, RecommendationFeedbackCreateArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RecommendationFeedbacks.
     * @param {RecommendationFeedbackCreateManyArgs} args - Arguments to create many RecommendationFeedbacks.
     * @example
     * // Create many RecommendationFeedbacks
     * const recommendationFeedback = await prisma.recommendationFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationFeedbackCreateManyArgs>(args?: SelectSubset<T, RecommendationFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecommendationFeedbacks and returns the data saved in the database.
     * @param {RecommendationFeedbackCreateManyAndReturnArgs} args - Arguments to create many RecommendationFeedbacks.
     * @example
     * // Create many RecommendationFeedbacks
     * const recommendationFeedback = await prisma.recommendationFeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecommendationFeedbacks and only return the `id`
     * const recommendationFeedbackWithIdOnly = await prisma.recommendationFeedback.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationFeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RecommendationFeedback.
     * @param {RecommendationFeedbackDeleteArgs} args - Arguments to delete one RecommendationFeedback.
     * @example
     * // Delete one RecommendationFeedback
     * const RecommendationFeedback = await prisma.recommendationFeedback.delete({
     *   where: {
     *     // ... filter to delete one RecommendationFeedback
     *   }
     * })
     * 
     */
    delete<T extends RecommendationFeedbackDeleteArgs>(args: SelectSubset<T, RecommendationFeedbackDeleteArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RecommendationFeedback.
     * @param {RecommendationFeedbackUpdateArgs} args - Arguments to update one RecommendationFeedback.
     * @example
     * // Update one RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationFeedbackUpdateArgs>(args: SelectSubset<T, RecommendationFeedbackUpdateArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RecommendationFeedbacks.
     * @param {RecommendationFeedbackDeleteManyArgs} args - Arguments to filter RecommendationFeedbacks to delete.
     * @example
     * // Delete a few RecommendationFeedbacks
     * const { count } = await prisma.recommendationFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationFeedbackDeleteManyArgs>(args?: SelectSubset<T, RecommendationFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendationFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecommendationFeedbacks
     * const recommendationFeedback = await prisma.recommendationFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationFeedbackUpdateManyArgs>(args: SelectSubset<T, RecommendationFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RecommendationFeedback.
     * @param {RecommendationFeedbackUpsertArgs} args - Arguments to update or create a RecommendationFeedback.
     * @example
     * // Update or create a RecommendationFeedback
     * const recommendationFeedback = await prisma.recommendationFeedback.upsert({
     *   create: {
     *     // ... data to create a RecommendationFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecommendationFeedback we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationFeedbackUpsertArgs>(args: SelectSubset<T, RecommendationFeedbackUpsertArgs<ExtArgs>>): Prisma__RecommendationFeedbackClient<$Result.GetResult<Prisma.$RecommendationFeedbackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RecommendationFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackCountArgs} args - Arguments to filter RecommendationFeedbacks to count.
     * @example
     * // Count the number of RecommendationFeedbacks
     * const count = await prisma.recommendationFeedback.count({
     *   where: {
     *     // ... the filter for the RecommendationFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends RecommendationFeedbackCountArgs>(
      args?: Subset<T, RecommendationFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecommendationFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendationFeedbackAggregateArgs>(args: Subset<T, RecommendationFeedbackAggregateArgs>): Prisma.PrismaPromise<GetRecommendationFeedbackAggregateType<T>>

    /**
     * Group by RecommendationFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFeedbackGroupByArgs} args - Group by arguments.
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
      T extends RecommendationFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationFeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecommendationFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecommendationFeedback model
   */
  readonly fields: RecommendationFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecommendationFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RecommendationFeedback model
   */ 
  interface RecommendationFeedbackFieldRefs {
    readonly id: FieldRef<"RecommendationFeedback", 'String'>
    readonly recommendationId: FieldRef<"RecommendationFeedback", 'String'>
    readonly userId: FieldRef<"RecommendationFeedback", 'String'>
    readonly action: FieldRef<"RecommendationFeedback", 'String'>
    readonly timeSpent: FieldRef<"RecommendationFeedback", 'Int'>
    readonly rating: FieldRef<"RecommendationFeedback", 'Int'>
    readonly feedbackText: FieldRef<"RecommendationFeedback", 'String'>
    readonly createdAt: FieldRef<"RecommendationFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecommendationFeedback findUnique
   */
  export type RecommendationFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Filter, which RecommendationFeedback to fetch.
     */
    where: RecommendationFeedbackWhereUniqueInput
  }

  /**
   * RecommendationFeedback findUniqueOrThrow
   */
  export type RecommendationFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Filter, which RecommendationFeedback to fetch.
     */
    where: RecommendationFeedbackWhereUniqueInput
  }

  /**
   * RecommendationFeedback findFirst
   */
  export type RecommendationFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Filter, which RecommendationFeedback to fetch.
     */
    where?: RecommendationFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationFeedbacks to fetch.
     */
    orderBy?: RecommendationFeedbackOrderByWithRelationInput | RecommendationFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendationFeedbacks.
     */
    cursor?: RecommendationFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationFeedbacks.
     */
    distinct?: RecommendationFeedbackScalarFieldEnum | RecommendationFeedbackScalarFieldEnum[]
  }

  /**
   * RecommendationFeedback findFirstOrThrow
   */
  export type RecommendationFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Filter, which RecommendationFeedback to fetch.
     */
    where?: RecommendationFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationFeedbacks to fetch.
     */
    orderBy?: RecommendationFeedbackOrderByWithRelationInput | RecommendationFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendationFeedbacks.
     */
    cursor?: RecommendationFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationFeedbacks.
     */
    distinct?: RecommendationFeedbackScalarFieldEnum | RecommendationFeedbackScalarFieldEnum[]
  }

  /**
   * RecommendationFeedback findMany
   */
  export type RecommendationFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Filter, which RecommendationFeedbacks to fetch.
     */
    where?: RecommendationFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationFeedbacks to fetch.
     */
    orderBy?: RecommendationFeedbackOrderByWithRelationInput | RecommendationFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecommendationFeedbacks.
     */
    cursor?: RecommendationFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationFeedbacks.
     */
    skip?: number
    distinct?: RecommendationFeedbackScalarFieldEnum | RecommendationFeedbackScalarFieldEnum[]
  }

  /**
   * RecommendationFeedback create
   */
  export type RecommendationFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * The data needed to create a RecommendationFeedback.
     */
    data: XOR<RecommendationFeedbackCreateInput, RecommendationFeedbackUncheckedCreateInput>
  }

  /**
   * RecommendationFeedback createMany
   */
  export type RecommendationFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecommendationFeedbacks.
     */
    data: RecommendationFeedbackCreateManyInput | RecommendationFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecommendationFeedback createManyAndReturn
   */
  export type RecommendationFeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RecommendationFeedbacks.
     */
    data: RecommendationFeedbackCreateManyInput | RecommendationFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecommendationFeedback update
   */
  export type RecommendationFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * The data needed to update a RecommendationFeedback.
     */
    data: XOR<RecommendationFeedbackUpdateInput, RecommendationFeedbackUncheckedUpdateInput>
    /**
     * Choose, which RecommendationFeedback to update.
     */
    where: RecommendationFeedbackWhereUniqueInput
  }

  /**
   * RecommendationFeedback updateMany
   */
  export type RecommendationFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecommendationFeedbacks.
     */
    data: XOR<RecommendationFeedbackUpdateManyMutationInput, RecommendationFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which RecommendationFeedbacks to update
     */
    where?: RecommendationFeedbackWhereInput
  }

  /**
   * RecommendationFeedback upsert
   */
  export type RecommendationFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * The filter to search for the RecommendationFeedback to update in case it exists.
     */
    where: RecommendationFeedbackWhereUniqueInput
    /**
     * In case the RecommendationFeedback found by the `where` argument doesn't exist, create a new RecommendationFeedback with this data.
     */
    create: XOR<RecommendationFeedbackCreateInput, RecommendationFeedbackUncheckedCreateInput>
    /**
     * In case the RecommendationFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationFeedbackUpdateInput, RecommendationFeedbackUncheckedUpdateInput>
  }

  /**
   * RecommendationFeedback delete
   */
  export type RecommendationFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
    /**
     * Filter which RecommendationFeedback to delete.
     */
    where: RecommendationFeedbackWhereUniqueInput
  }

  /**
   * RecommendationFeedback deleteMany
   */
  export type RecommendationFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendationFeedbacks to delete
     */
    where?: RecommendationFeedbackWhereInput
  }

  /**
   * RecommendationFeedback without action
   */
  export type RecommendationFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationFeedback
     */
    select?: RecommendationFeedbackSelect<ExtArgs> | null
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


  export const UserLearningSignalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    englishLevel: 'englishLevel',
    lessonsCompleted: 'lessonsCompleted',
    grammarExercises: 'grammarExercises',
    vocabularyLearned: 'vocabularyLearned',
    speakingPractices: 'speakingPractices',
    grammarScore: 'grammarScore',
    vocabularyScore: 'vocabularyScore',
    speakingScore: 'speakingScore',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type UserLearningSignalScalarFieldEnum = (typeof UserLearningSignalScalarFieldEnum)[keyof typeof UserLearningSignalScalarFieldEnum]


  export const RecommendationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    targetId: 'targetId',
    targetTitle: 'targetTitle',
    targetMetadata: 'targetMetadata',
    score: 'score',
    reason: 'reason',
    status: 'status',
    expiresAt: 'expiresAt',
    feedbackReceived: 'feedbackReceived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecommendationScalarFieldEnum = (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum]


  export const RecommendationFeedbackScalarFieldEnum: {
    id: 'id',
    recommendationId: 'recommendationId',
    userId: 'userId',
    action: 'action',
    timeSpent: 'timeSpent',
    rating: 'rating',
    feedbackText: 'feedbackText',
    createdAt: 'createdAt'
  };

  export type RecommendationFeedbackScalarFieldEnum = (typeof RecommendationFeedbackScalarFieldEnum)[keyof typeof RecommendationFeedbackScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RecommendationType'
   */
  export type EnumRecommendationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendationType'>
    


  /**
   * Reference to a field of type 'RecommendationType[]'
   */
  export type ListEnumRecommendationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendationType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'RecommendationStatus'
   */
  export type EnumRecommendationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendationStatus'>
    


  /**
   * Reference to a field of type 'RecommendationStatus[]'
   */
  export type ListEnumRecommendationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendationStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserLearningSignalWhereInput = {
    AND?: UserLearningSignalWhereInput | UserLearningSignalWhereInput[]
    OR?: UserLearningSignalWhereInput[]
    NOT?: UserLearningSignalWhereInput | UserLearningSignalWhereInput[]
    id?: StringFilter<"UserLearningSignal"> | string
    userId?: StringFilter<"UserLearningSignal"> | string
    englishLevel?: StringFilter<"UserLearningSignal"> | string
    lessonsCompleted?: IntFilter<"UserLearningSignal"> | number
    grammarExercises?: IntFilter<"UserLearningSignal"> | number
    vocabularyLearned?: IntFilter<"UserLearningSignal"> | number
    speakingPractices?: IntFilter<"UserLearningSignal"> | number
    grammarScore?: FloatFilter<"UserLearningSignal"> | number
    vocabularyScore?: FloatFilter<"UserLearningSignal"> | number
    speakingScore?: FloatFilter<"UserLearningSignal"> | number
    updatedAt?: DateTimeFilter<"UserLearningSignal"> | Date | string
    createdAt?: DateTimeFilter<"UserLearningSignal"> | Date | string
  }

  export type UserLearningSignalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    englishLevel?: SortOrder
    lessonsCompleted?: SortOrder
    grammarExercises?: SortOrder
    vocabularyLearned?: SortOrder
    speakingPractices?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    speakingScore?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLearningSignalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserLearningSignalWhereInput | UserLearningSignalWhereInput[]
    OR?: UserLearningSignalWhereInput[]
    NOT?: UserLearningSignalWhereInput | UserLearningSignalWhereInput[]
    englishLevel?: StringFilter<"UserLearningSignal"> | string
    lessonsCompleted?: IntFilter<"UserLearningSignal"> | number
    grammarExercises?: IntFilter<"UserLearningSignal"> | number
    vocabularyLearned?: IntFilter<"UserLearningSignal"> | number
    speakingPractices?: IntFilter<"UserLearningSignal"> | number
    grammarScore?: FloatFilter<"UserLearningSignal"> | number
    vocabularyScore?: FloatFilter<"UserLearningSignal"> | number
    speakingScore?: FloatFilter<"UserLearningSignal"> | number
    updatedAt?: DateTimeFilter<"UserLearningSignal"> | Date | string
    createdAt?: DateTimeFilter<"UserLearningSignal"> | Date | string
  }, "id" | "userId">

  export type UserLearningSignalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    englishLevel?: SortOrder
    lessonsCompleted?: SortOrder
    grammarExercises?: SortOrder
    vocabularyLearned?: SortOrder
    speakingPractices?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    speakingScore?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserLearningSignalCountOrderByAggregateInput
    _avg?: UserLearningSignalAvgOrderByAggregateInput
    _max?: UserLearningSignalMaxOrderByAggregateInput
    _min?: UserLearningSignalMinOrderByAggregateInput
    _sum?: UserLearningSignalSumOrderByAggregateInput
  }

  export type UserLearningSignalScalarWhereWithAggregatesInput = {
    AND?: UserLearningSignalScalarWhereWithAggregatesInput | UserLearningSignalScalarWhereWithAggregatesInput[]
    OR?: UserLearningSignalScalarWhereWithAggregatesInput[]
    NOT?: UserLearningSignalScalarWhereWithAggregatesInput | UserLearningSignalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLearningSignal"> | string
    userId?: StringWithAggregatesFilter<"UserLearningSignal"> | string
    englishLevel?: StringWithAggregatesFilter<"UserLearningSignal"> | string
    lessonsCompleted?: IntWithAggregatesFilter<"UserLearningSignal"> | number
    grammarExercises?: IntWithAggregatesFilter<"UserLearningSignal"> | number
    vocabularyLearned?: IntWithAggregatesFilter<"UserLearningSignal"> | number
    speakingPractices?: IntWithAggregatesFilter<"UserLearningSignal"> | number
    grammarScore?: FloatWithAggregatesFilter<"UserLearningSignal"> | number
    vocabularyScore?: FloatWithAggregatesFilter<"UserLearningSignal"> | number
    speakingScore?: FloatWithAggregatesFilter<"UserLearningSignal"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"UserLearningSignal"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserLearningSignal"> | Date | string
  }

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    id?: StringFilter<"Recommendation"> | string
    userId?: StringFilter<"Recommendation"> | string
    type?: EnumRecommendationTypeFilter<"Recommendation"> | $Enums.RecommendationType
    targetId?: StringFilter<"Recommendation"> | string
    targetTitle?: StringFilter<"Recommendation"> | string
    targetMetadata?: JsonNullableFilter<"Recommendation">
    score?: FloatFilter<"Recommendation"> | number
    reason?: StringNullableFilter<"Recommendation"> | string | null
    status?: EnumRecommendationStatusFilter<"Recommendation"> | $Enums.RecommendationStatus
    expiresAt?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
    feedbackReceived?: BoolFilter<"Recommendation"> | boolean
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    updatedAt?: DateTimeFilter<"Recommendation"> | Date | string
  }

  export type RecommendationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    targetId?: SortOrder
    targetTitle?: SortOrder
    targetMetadata?: SortOrderInput | SortOrder
    score?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    feedbackReceived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    userId?: StringFilter<"Recommendation"> | string
    type?: EnumRecommendationTypeFilter<"Recommendation"> | $Enums.RecommendationType
    targetId?: StringFilter<"Recommendation"> | string
    targetTitle?: StringFilter<"Recommendation"> | string
    targetMetadata?: JsonNullableFilter<"Recommendation">
    score?: FloatFilter<"Recommendation"> | number
    reason?: StringNullableFilter<"Recommendation"> | string | null
    status?: EnumRecommendationStatusFilter<"Recommendation"> | $Enums.RecommendationStatus
    expiresAt?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
    feedbackReceived?: BoolFilter<"Recommendation"> | boolean
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    updatedAt?: DateTimeFilter<"Recommendation"> | Date | string
  }, "id">

  export type RecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    targetId?: SortOrder
    targetTitle?: SortOrder
    targetMetadata?: SortOrderInput | SortOrder
    score?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    feedbackReceived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecommendationCountOrderByAggregateInput
    _avg?: RecommendationAvgOrderByAggregateInput
    _max?: RecommendationMaxOrderByAggregateInput
    _min?: RecommendationMinOrderByAggregateInput
    _sum?: RecommendationSumOrderByAggregateInput
  }

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    OR?: RecommendationScalarWhereWithAggregatesInput[]
    NOT?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recommendation"> | string
    userId?: StringWithAggregatesFilter<"Recommendation"> | string
    type?: EnumRecommendationTypeWithAggregatesFilter<"Recommendation"> | $Enums.RecommendationType
    targetId?: StringWithAggregatesFilter<"Recommendation"> | string
    targetTitle?: StringWithAggregatesFilter<"Recommendation"> | string
    targetMetadata?: JsonNullableWithAggregatesFilter<"Recommendation">
    score?: FloatWithAggregatesFilter<"Recommendation"> | number
    reason?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    status?: EnumRecommendationStatusWithAggregatesFilter<"Recommendation"> | $Enums.RecommendationStatus
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Recommendation"> | Date | string | null
    feedbackReceived?: BoolWithAggregatesFilter<"Recommendation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
  }

  export type RecommendationFeedbackWhereInput = {
    AND?: RecommendationFeedbackWhereInput | RecommendationFeedbackWhereInput[]
    OR?: RecommendationFeedbackWhereInput[]
    NOT?: RecommendationFeedbackWhereInput | RecommendationFeedbackWhereInput[]
    id?: StringFilter<"RecommendationFeedback"> | string
    recommendationId?: StringFilter<"RecommendationFeedback"> | string
    userId?: StringFilter<"RecommendationFeedback"> | string
    action?: StringFilter<"RecommendationFeedback"> | string
    timeSpent?: IntNullableFilter<"RecommendationFeedback"> | number | null
    rating?: IntNullableFilter<"RecommendationFeedback"> | number | null
    feedbackText?: StringNullableFilter<"RecommendationFeedback"> | string | null
    createdAt?: DateTimeFilter<"RecommendationFeedback"> | Date | string
  }

  export type RecommendationFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timeSpent?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    feedbackText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecommendationFeedbackWhereInput | RecommendationFeedbackWhereInput[]
    OR?: RecommendationFeedbackWhereInput[]
    NOT?: RecommendationFeedbackWhereInput | RecommendationFeedbackWhereInput[]
    recommendationId?: StringFilter<"RecommendationFeedback"> | string
    userId?: StringFilter<"RecommendationFeedback"> | string
    action?: StringFilter<"RecommendationFeedback"> | string
    timeSpent?: IntNullableFilter<"RecommendationFeedback"> | number | null
    rating?: IntNullableFilter<"RecommendationFeedback"> | number | null
    feedbackText?: StringNullableFilter<"RecommendationFeedback"> | string | null
    createdAt?: DateTimeFilter<"RecommendationFeedback"> | Date | string
  }, "id">

  export type RecommendationFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timeSpent?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    feedbackText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RecommendationFeedbackCountOrderByAggregateInput
    _avg?: RecommendationFeedbackAvgOrderByAggregateInput
    _max?: RecommendationFeedbackMaxOrderByAggregateInput
    _min?: RecommendationFeedbackMinOrderByAggregateInput
    _sum?: RecommendationFeedbackSumOrderByAggregateInput
  }

  export type RecommendationFeedbackScalarWhereWithAggregatesInput = {
    AND?: RecommendationFeedbackScalarWhereWithAggregatesInput | RecommendationFeedbackScalarWhereWithAggregatesInput[]
    OR?: RecommendationFeedbackScalarWhereWithAggregatesInput[]
    NOT?: RecommendationFeedbackScalarWhereWithAggregatesInput | RecommendationFeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecommendationFeedback"> | string
    recommendationId?: StringWithAggregatesFilter<"RecommendationFeedback"> | string
    userId?: StringWithAggregatesFilter<"RecommendationFeedback"> | string
    action?: StringWithAggregatesFilter<"RecommendationFeedback"> | string
    timeSpent?: IntNullableWithAggregatesFilter<"RecommendationFeedback"> | number | null
    rating?: IntNullableWithAggregatesFilter<"RecommendationFeedback"> | number | null
    feedbackText?: StringNullableWithAggregatesFilter<"RecommendationFeedback"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RecommendationFeedback"> | Date | string
  }

  export type UserLearningSignalCreateInput = {
    id?: string
    userId: string
    englishLevel?: string
    lessonsCompleted?: number
    grammarExercises?: number
    vocabularyLearned?: number
    speakingPractices?: number
    grammarScore?: number
    vocabularyScore?: number
    speakingScore?: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserLearningSignalUncheckedCreateInput = {
    id?: string
    userId: string
    englishLevel?: string
    lessonsCompleted?: number
    grammarExercises?: number
    vocabularyLearned?: number
    speakingPractices?: number
    grammarScore?: number
    vocabularyScore?: number
    speakingScore?: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserLearningSignalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    englishLevel?: StringFieldUpdateOperationsInput | string
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    grammarExercises?: IntFieldUpdateOperationsInput | number
    vocabularyLearned?: IntFieldUpdateOperationsInput | number
    speakingPractices?: IntFieldUpdateOperationsInput | number
    grammarScore?: FloatFieldUpdateOperationsInput | number
    vocabularyScore?: FloatFieldUpdateOperationsInput | number
    speakingScore?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningSignalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    englishLevel?: StringFieldUpdateOperationsInput | string
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    grammarExercises?: IntFieldUpdateOperationsInput | number
    vocabularyLearned?: IntFieldUpdateOperationsInput | number
    speakingPractices?: IntFieldUpdateOperationsInput | number
    grammarScore?: FloatFieldUpdateOperationsInput | number
    vocabularyScore?: FloatFieldUpdateOperationsInput | number
    speakingScore?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningSignalCreateManyInput = {
    id?: string
    userId: string
    englishLevel?: string
    lessonsCompleted?: number
    grammarExercises?: number
    vocabularyLearned?: number
    speakingPractices?: number
    grammarScore?: number
    vocabularyScore?: number
    speakingScore?: number
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserLearningSignalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    englishLevel?: StringFieldUpdateOperationsInput | string
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    grammarExercises?: IntFieldUpdateOperationsInput | number
    vocabularyLearned?: IntFieldUpdateOperationsInput | number
    speakingPractices?: IntFieldUpdateOperationsInput | number
    grammarScore?: FloatFieldUpdateOperationsInput | number
    vocabularyScore?: FloatFieldUpdateOperationsInput | number
    speakingScore?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLearningSignalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    englishLevel?: StringFieldUpdateOperationsInput | string
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    grammarExercises?: IntFieldUpdateOperationsInput | number
    vocabularyLearned?: IntFieldUpdateOperationsInput | number
    speakingPractices?: IntFieldUpdateOperationsInput | number
    grammarScore?: FloatFieldUpdateOperationsInput | number
    vocabularyScore?: FloatFieldUpdateOperationsInput | number
    speakingScore?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateInput = {
    id?: string
    userId: string
    type: $Enums.RecommendationType
    targetId: string
    targetTitle: string
    targetMetadata?: NullableJsonNullValueInput | InputJsonValue
    score?: number
    reason?: string | null
    status?: $Enums.RecommendationStatus
    expiresAt?: Date | string | null
    feedbackReceived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.RecommendationType
    targetId: string
    targetTitle: string
    targetMetadata?: NullableJsonNullValueInput | InputJsonValue
    score?: number
    reason?: string | null
    status?: $Enums.RecommendationStatus
    expiresAt?: Date | string | null
    feedbackReceived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumRecommendationTypeFieldUpdateOperationsInput | $Enums.RecommendationType
    targetId?: StringFieldUpdateOperationsInput | string
    targetTitle?: StringFieldUpdateOperationsInput | string
    targetMetadata?: NullableJsonNullValueInput | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackReceived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumRecommendationTypeFieldUpdateOperationsInput | $Enums.RecommendationType
    targetId?: StringFieldUpdateOperationsInput | string
    targetTitle?: StringFieldUpdateOperationsInput | string
    targetMetadata?: NullableJsonNullValueInput | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackReceived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.RecommendationType
    targetId: string
    targetTitle: string
    targetMetadata?: NullableJsonNullValueInput | InputJsonValue
    score?: number
    reason?: string | null
    status?: $Enums.RecommendationStatus
    expiresAt?: Date | string | null
    feedbackReceived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumRecommendationTypeFieldUpdateOperationsInput | $Enums.RecommendationType
    targetId?: StringFieldUpdateOperationsInput | string
    targetTitle?: StringFieldUpdateOperationsInput | string
    targetMetadata?: NullableJsonNullValueInput | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackReceived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumRecommendationTypeFieldUpdateOperationsInput | $Enums.RecommendationType
    targetId?: StringFieldUpdateOperationsInput | string
    targetTitle?: StringFieldUpdateOperationsInput | string
    targetMetadata?: NullableJsonNullValueInput | InputJsonValue
    score?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbackReceived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackCreateInput = {
    id?: string
    recommendationId: string
    userId: string
    action: string
    timeSpent?: number | null
    rating?: number | null
    feedbackText?: string | null
    createdAt?: Date | string
  }

  export type RecommendationFeedbackUncheckedCreateInput = {
    id?: string
    recommendationId: string
    userId: string
    action: string
    timeSpent?: number | null
    rating?: number | null
    feedbackText?: string | null
    createdAt?: Date | string
  }

  export type RecommendationFeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recommendationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recommendationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackCreateManyInput = {
    id?: string
    recommendationId: string
    userId: string
    action: string
    timeSpent?: number | null
    rating?: number | null
    feedbackText?: string | null
    createdAt?: Date | string
  }

  export type RecommendationFeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recommendationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationFeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recommendationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeSpent?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserLearningSignalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    englishLevel?: SortOrder
    lessonsCompleted?: SortOrder
    grammarExercises?: SortOrder
    vocabularyLearned?: SortOrder
    speakingPractices?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    speakingScore?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLearningSignalAvgOrderByAggregateInput = {
    lessonsCompleted?: SortOrder
    grammarExercises?: SortOrder
    vocabularyLearned?: SortOrder
    speakingPractices?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    speakingScore?: SortOrder
  }

  export type UserLearningSignalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    englishLevel?: SortOrder
    lessonsCompleted?: SortOrder
    grammarExercises?: SortOrder
    vocabularyLearned?: SortOrder
    speakingPractices?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    speakingScore?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLearningSignalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    englishLevel?: SortOrder
    lessonsCompleted?: SortOrder
    grammarExercises?: SortOrder
    vocabularyLearned?: SortOrder
    speakingPractices?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    speakingScore?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLearningSignalSumOrderByAggregateInput = {
    lessonsCompleted?: SortOrder
    grammarExercises?: SortOrder
    vocabularyLearned?: SortOrder
    speakingPractices?: SortOrder
    grammarScore?: SortOrder
    vocabularyScore?: SortOrder
    speakingScore?: SortOrder
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

  export type EnumRecommendationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationType | EnumRecommendationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationType[] | ListEnumRecommendationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationType[] | ListEnumRecommendationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationTypeFilter<$PrismaModel> | $Enums.RecommendationType
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

  export type EnumRecommendationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationStatus | EnumRecommendationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationStatus[] | ListEnumRecommendationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationStatus[] | ListEnumRecommendationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationStatusFilter<$PrismaModel> | $Enums.RecommendationStatus
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    targetId?: SortOrder
    targetTitle?: SortOrder
    targetMetadata?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    feedbackReceived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type RecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    targetId?: SortOrder
    targetTitle?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    feedbackReceived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    targetId?: SortOrder
    targetTitle?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    feedbackReceived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumRecommendationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationType | EnumRecommendationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationType[] | ListEnumRecommendationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationType[] | ListEnumRecommendationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecommendationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecommendationTypeFilter<$PrismaModel>
    _max?: NestedEnumRecommendationTypeFilter<$PrismaModel>
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

  export type EnumRecommendationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationStatus | EnumRecommendationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationStatus[] | ListEnumRecommendationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationStatus[] | ListEnumRecommendationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecommendationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecommendationStatusFilter<$PrismaModel>
    _max?: NestedEnumRecommendationStatusFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RecommendationFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timeSpent?: SortOrder
    rating?: SortOrder
    feedbackText?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationFeedbackAvgOrderByAggregateInput = {
    timeSpent?: SortOrder
    rating?: SortOrder
  }

  export type RecommendationFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timeSpent?: SortOrder
    rating?: SortOrder
    feedbackText?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timeSpent?: SortOrder
    rating?: SortOrder
    feedbackText?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationFeedbackSumOrderByAggregateInput = {
    timeSpent?: SortOrder
    rating?: SortOrder
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

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRecommendationTypeFieldUpdateOperationsInput = {
    set?: $Enums.RecommendationType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRecommendationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecommendationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumRecommendationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationType | EnumRecommendationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationType[] | ListEnumRecommendationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationType[] | ListEnumRecommendationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationTypeFilter<$PrismaModel> | $Enums.RecommendationType
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

  export type NestedEnumRecommendationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationStatus | EnumRecommendationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationStatus[] | ListEnumRecommendationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationStatus[] | ListEnumRecommendationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationStatusFilter<$PrismaModel> | $Enums.RecommendationStatus
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRecommendationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationType | EnumRecommendationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationType[] | ListEnumRecommendationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationType[] | ListEnumRecommendationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecommendationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecommendationTypeFilter<$PrismaModel>
    _max?: NestedEnumRecommendationTypeFilter<$PrismaModel>
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

  export type NestedEnumRecommendationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationStatus | EnumRecommendationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationStatus[] | ListEnumRecommendationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationStatus[] | ListEnumRecommendationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecommendationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecommendationStatusFilter<$PrismaModel>
    _max?: NestedEnumRecommendationStatusFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserLearningSignalDefaultArgs instead
     */
    export type UserLearningSignalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLearningSignalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecommendationDefaultArgs instead
     */
    export type RecommendationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecommendationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecommendationFeedbackDefaultArgs instead
     */
    export type RecommendationFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecommendationFeedbackDefaultArgs<ExtArgs>

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