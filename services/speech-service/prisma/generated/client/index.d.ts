
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
 * Model SpeechJob
 * 
 */
export type SpeechJob = $Result.DefaultSelection<Prisma.$SpeechJobPayload>
/**
 * Model AudioMetadata
 * 
 */
export type AudioMetadata = $Result.DefaultSelection<Prisma.$AudioMetadataPayload>
/**
 * Model SpeakingSession
 * 
 */
export type SpeakingSession = $Result.DefaultSelection<Prisma.$SpeakingSessionPayload>
/**
 * Model SpeakingTurn
 * 
 */
export type SpeakingTurn = $Result.DefaultSelection<Prisma.$SpeakingTurnPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SpeechJobType: {
  STT: 'STT',
  TTS: 'TTS',
  PRONUNCIATION: 'PRONUNCIATION'
};

export type SpeechJobType = (typeof SpeechJobType)[keyof typeof SpeechJobType]


export const SpeechJobStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type SpeechJobStatus = (typeof SpeechJobStatus)[keyof typeof SpeechJobStatus]

}

export type SpeechJobType = $Enums.SpeechJobType

export const SpeechJobType: typeof $Enums.SpeechJobType

export type SpeechJobStatus = $Enums.SpeechJobStatus

export const SpeechJobStatus: typeof $Enums.SpeechJobStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SpeechJobs
 * const speechJobs = await prisma.speechJob.findMany()
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
   * // Fetch zero or more SpeechJobs
   * const speechJobs = await prisma.speechJob.findMany()
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
   * `prisma.speechJob`: Exposes CRUD operations for the **SpeechJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpeechJobs
    * const speechJobs = await prisma.speechJob.findMany()
    * ```
    */
  get speechJob(): Prisma.SpeechJobDelegate<ExtArgs>;

  /**
   * `prisma.audioMetadata`: Exposes CRUD operations for the **AudioMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioMetadata
    * const audioMetadata = await prisma.audioMetadata.findMany()
    * ```
    */
  get audioMetadata(): Prisma.AudioMetadataDelegate<ExtArgs>;

  /**
   * `prisma.speakingSession`: Exposes CRUD operations for the **SpeakingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpeakingSessions
    * const speakingSessions = await prisma.speakingSession.findMany()
    * ```
    */
  get speakingSession(): Prisma.SpeakingSessionDelegate<ExtArgs>;

  /**
   * `prisma.speakingTurn`: Exposes CRUD operations for the **SpeakingTurn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpeakingTurns
    * const speakingTurns = await prisma.speakingTurn.findMany()
    * ```
    */
  get speakingTurn(): Prisma.SpeakingTurnDelegate<ExtArgs>;
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
    SpeechJob: 'SpeechJob',
    AudioMetadata: 'AudioMetadata',
    SpeakingSession: 'SpeakingSession',
    SpeakingTurn: 'SpeakingTurn'
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
      modelProps: "speechJob" | "audioMetadata" | "speakingSession" | "speakingTurn"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SpeechJob: {
        payload: Prisma.$SpeechJobPayload<ExtArgs>
        fields: Prisma.SpeechJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeechJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeechJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeechJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeechJobPayload>
          }
          findFirst: {
            args: Prisma.SpeechJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeechJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeechJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeechJobPayload>
          }
          findMany: {
            args: Prisma.SpeechJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeechJobPayload>[]
          }
          create: {
            args: Prisma.SpeechJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeechJobPayload>
          }
          createMany: {
            args: Prisma.SpeechJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpeechJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeechJobPayload>[]
          }
          delete: {
            args: Prisma.SpeechJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeechJobPayload>
          }
          update: {
            args: Prisma.SpeechJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeechJobPayload>
          }
          deleteMany: {
            args: Prisma.SpeechJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeechJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpeechJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeechJobPayload>
          }
          aggregate: {
            args: Prisma.SpeechJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeechJob>
          }
          groupBy: {
            args: Prisma.SpeechJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeechJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeechJobCountArgs<ExtArgs>
            result: $Utils.Optional<SpeechJobCountAggregateOutputType> | number
          }
        }
      }
      AudioMetadata: {
        payload: Prisma.$AudioMetadataPayload<ExtArgs>
        fields: Prisma.AudioMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioMetadataPayload>
          }
          findFirst: {
            args: Prisma.AudioMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioMetadataPayload>
          }
          findMany: {
            args: Prisma.AudioMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioMetadataPayload>[]
          }
          create: {
            args: Prisma.AudioMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioMetadataPayload>
          }
          createMany: {
            args: Prisma.AudioMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudioMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioMetadataPayload>[]
          }
          delete: {
            args: Prisma.AudioMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioMetadataPayload>
          }
          update: {
            args: Prisma.AudioMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioMetadataPayload>
          }
          deleteMany: {
            args: Prisma.AudioMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudioMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioMetadataPayload>
          }
          aggregate: {
            args: Prisma.AudioMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioMetadata>
          }
          groupBy: {
            args: Prisma.AudioMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudioMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<AudioMetadataCountAggregateOutputType> | number
          }
        }
      }
      SpeakingSession: {
        payload: Prisma.$SpeakingSessionPayload<ExtArgs>
        fields: Prisma.SpeakingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeakingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeakingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingSessionPayload>
          }
          findFirst: {
            args: Prisma.SpeakingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeakingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingSessionPayload>
          }
          findMany: {
            args: Prisma.SpeakingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingSessionPayload>[]
          }
          create: {
            args: Prisma.SpeakingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingSessionPayload>
          }
          createMany: {
            args: Prisma.SpeakingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpeakingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingSessionPayload>[]
          }
          delete: {
            args: Prisma.SpeakingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingSessionPayload>
          }
          update: {
            args: Prisma.SpeakingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingSessionPayload>
          }
          deleteMany: {
            args: Prisma.SpeakingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeakingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpeakingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingSessionPayload>
          }
          aggregate: {
            args: Prisma.SpeakingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeakingSession>
          }
          groupBy: {
            args: Prisma.SpeakingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeakingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeakingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<SpeakingSessionCountAggregateOutputType> | number
          }
        }
      }
      SpeakingTurn: {
        payload: Prisma.$SpeakingTurnPayload<ExtArgs>
        fields: Prisma.SpeakingTurnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeakingTurnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingTurnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeakingTurnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingTurnPayload>
          }
          findFirst: {
            args: Prisma.SpeakingTurnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingTurnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeakingTurnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingTurnPayload>
          }
          findMany: {
            args: Prisma.SpeakingTurnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingTurnPayload>[]
          }
          create: {
            args: Prisma.SpeakingTurnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingTurnPayload>
          }
          createMany: {
            args: Prisma.SpeakingTurnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpeakingTurnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingTurnPayload>[]
          }
          delete: {
            args: Prisma.SpeakingTurnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingTurnPayload>
          }
          update: {
            args: Prisma.SpeakingTurnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingTurnPayload>
          }
          deleteMany: {
            args: Prisma.SpeakingTurnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeakingTurnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpeakingTurnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakingTurnPayload>
          }
          aggregate: {
            args: Prisma.SpeakingTurnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeakingTurn>
          }
          groupBy: {
            args: Prisma.SpeakingTurnGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeakingTurnGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeakingTurnCountArgs<ExtArgs>
            result: $Utils.Optional<SpeakingTurnCountAggregateOutputType> | number
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
   * Count Type SpeechJobCountOutputType
   */

  export type SpeechJobCountOutputType = {
    metadata: number
  }

  export type SpeechJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metadata?: boolean | SpeechJobCountOutputTypeCountMetadataArgs
  }

  // Custom InputTypes
  /**
   * SpeechJobCountOutputType without action
   */
  export type SpeechJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJobCountOutputType
     */
    select?: SpeechJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpeechJobCountOutputType without action
   */
  export type SpeechJobCountOutputTypeCountMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioMetadataWhereInput
  }


  /**
   * Count Type SpeakingSessionCountOutputType
   */

  export type SpeakingSessionCountOutputType = {
    turns: number
  }

  export type SpeakingSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turns?: boolean | SpeakingSessionCountOutputTypeCountTurnsArgs
  }

  // Custom InputTypes
  /**
   * SpeakingSessionCountOutputType without action
   */
  export type SpeakingSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSessionCountOutputType
     */
    select?: SpeakingSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpeakingSessionCountOutputType without action
   */
  export type SpeakingSessionCountOutputTypeCountTurnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeakingTurnWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SpeechJob
   */

  export type AggregateSpeechJob = {
    _count: SpeechJobCountAggregateOutputType | null
    _avg: SpeechJobAvgAggregateOutputType | null
    _sum: SpeechJobSumAggregateOutputType | null
    _min: SpeechJobMinAggregateOutputType | null
    _max: SpeechJobMaxAggregateOutputType | null
  }

  export type SpeechJobAvgAggregateOutputType = {
    fileSize: number | null
    audioDuration: number | null
    sampleRate: number | null
    confidence: number | null
    pronunciationScore: number | null
  }

  export type SpeechJobSumAggregateOutputType = {
    fileSize: number | null
    audioDuration: number | null
    sampleRate: number | null
    confidence: number | null
    pronunciationScore: number | null
  }

  export type SpeechJobMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.SpeechJobType | null
    status: $Enums.SpeechJobStatus | null
    fileKey: string | null
    fileSize: number | null
    fileFormat: string | null
    audioDuration: number | null
    sampleRate: number | null
    language: string | null
    provider: string | null
    transcript: string | null
    confidence: number | null
    text: string | null
    voice: string | null
    outputKey: string | null
    pronunciationScore: number | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type SpeechJobMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.SpeechJobType | null
    status: $Enums.SpeechJobStatus | null
    fileKey: string | null
    fileSize: number | null
    fileFormat: string | null
    audioDuration: number | null
    sampleRate: number | null
    language: string | null
    provider: string | null
    transcript: string | null
    confidence: number | null
    text: string | null
    voice: string | null
    outputKey: string | null
    pronunciationScore: number | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type SpeechJobCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    status: number
    fileKey: number
    fileSize: number
    fileFormat: number
    audioDuration: number
    sampleRate: number
    language: number
    provider: number
    transcript: number
    confidence: number
    wordTimings: number
    text: number
    voice: number
    outputKey: number
    pronunciationScore: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    completedAt: number
    _all: number
  }


  export type SpeechJobAvgAggregateInputType = {
    fileSize?: true
    audioDuration?: true
    sampleRate?: true
    confidence?: true
    pronunciationScore?: true
  }

  export type SpeechJobSumAggregateInputType = {
    fileSize?: true
    audioDuration?: true
    sampleRate?: true
    confidence?: true
    pronunciationScore?: true
  }

  export type SpeechJobMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    fileKey?: true
    fileSize?: true
    fileFormat?: true
    audioDuration?: true
    sampleRate?: true
    language?: true
    provider?: true
    transcript?: true
    confidence?: true
    text?: true
    voice?: true
    outputKey?: true
    pronunciationScore?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type SpeechJobMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    fileKey?: true
    fileSize?: true
    fileFormat?: true
    audioDuration?: true
    sampleRate?: true
    language?: true
    provider?: true
    transcript?: true
    confidence?: true
    text?: true
    voice?: true
    outputKey?: true
    pronunciationScore?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type SpeechJobCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    fileKey?: true
    fileSize?: true
    fileFormat?: true
    audioDuration?: true
    sampleRate?: true
    language?: true
    provider?: true
    transcript?: true
    confidence?: true
    wordTimings?: true
    text?: true
    voice?: true
    outputKey?: true
    pronunciationScore?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
    _all?: true
  }

  export type SpeechJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeechJob to aggregate.
     */
    where?: SpeechJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeechJobs to fetch.
     */
    orderBy?: SpeechJobOrderByWithRelationInput | SpeechJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeechJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeechJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeechJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpeechJobs
    **/
    _count?: true | SpeechJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeechJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeechJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeechJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeechJobMaxAggregateInputType
  }

  export type GetSpeechJobAggregateType<T extends SpeechJobAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeechJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeechJob[P]>
      : GetScalarType<T[P], AggregateSpeechJob[P]>
  }




  export type SpeechJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeechJobWhereInput
    orderBy?: SpeechJobOrderByWithAggregationInput | SpeechJobOrderByWithAggregationInput[]
    by: SpeechJobScalarFieldEnum[] | SpeechJobScalarFieldEnum
    having?: SpeechJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeechJobCountAggregateInputType | true
    _avg?: SpeechJobAvgAggregateInputType
    _sum?: SpeechJobSumAggregateInputType
    _min?: SpeechJobMinAggregateInputType
    _max?: SpeechJobMaxAggregateInputType
  }

  export type SpeechJobGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.SpeechJobType
    status: $Enums.SpeechJobStatus
    fileKey: string | null
    fileSize: number | null
    fileFormat: string | null
    audioDuration: number | null
    sampleRate: number | null
    language: string
    provider: string | null
    transcript: string | null
    confidence: number | null
    wordTimings: JsonValue | null
    text: string | null
    voice: string | null
    outputKey: string | null
    pronunciationScore: number | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    completedAt: Date | null
    _count: SpeechJobCountAggregateOutputType | null
    _avg: SpeechJobAvgAggregateOutputType | null
    _sum: SpeechJobSumAggregateOutputType | null
    _min: SpeechJobMinAggregateOutputType | null
    _max: SpeechJobMaxAggregateOutputType | null
  }

  type GetSpeechJobGroupByPayload<T extends SpeechJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeechJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeechJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeechJobGroupByOutputType[P]>
            : GetScalarType<T[P], SpeechJobGroupByOutputType[P]>
        }
      >
    >


  export type SpeechJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    fileKey?: boolean
    fileSize?: boolean
    fileFormat?: boolean
    audioDuration?: boolean
    sampleRate?: boolean
    language?: boolean
    provider?: boolean
    transcript?: boolean
    confidence?: boolean
    wordTimings?: boolean
    text?: boolean
    voice?: boolean
    outputKey?: boolean
    pronunciationScore?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    metadata?: boolean | SpeechJob$metadataArgs<ExtArgs>
    _count?: boolean | SpeechJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["speechJob"]>

  export type SpeechJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    fileKey?: boolean
    fileSize?: boolean
    fileFormat?: boolean
    audioDuration?: boolean
    sampleRate?: boolean
    language?: boolean
    provider?: boolean
    transcript?: boolean
    confidence?: boolean
    wordTimings?: boolean
    text?: boolean
    voice?: boolean
    outputKey?: boolean
    pronunciationScore?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["speechJob"]>

  export type SpeechJobSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    fileKey?: boolean
    fileSize?: boolean
    fileFormat?: boolean
    audioDuration?: boolean
    sampleRate?: boolean
    language?: boolean
    provider?: boolean
    transcript?: boolean
    confidence?: boolean
    wordTimings?: boolean
    text?: boolean
    voice?: boolean
    outputKey?: boolean
    pronunciationScore?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }

  export type SpeechJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metadata?: boolean | SpeechJob$metadataArgs<ExtArgs>
    _count?: boolean | SpeechJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpeechJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpeechJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpeechJob"
    objects: {
      metadata: Prisma.$AudioMetadataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.SpeechJobType
      status: $Enums.SpeechJobStatus
      fileKey: string | null
      fileSize: number | null
      fileFormat: string | null
      audioDuration: number | null
      sampleRate: number | null
      language: string
      provider: string | null
      transcript: string | null
      confidence: number | null
      wordTimings: Prisma.JsonValue | null
      text: string | null
      voice: string | null
      outputKey: string | null
      pronunciationScore: number | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["speechJob"]>
    composites: {}
  }

  type SpeechJobGetPayload<S extends boolean | null | undefined | SpeechJobDefaultArgs> = $Result.GetResult<Prisma.$SpeechJobPayload, S>

  type SpeechJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpeechJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpeechJobCountAggregateInputType | true
    }

  export interface SpeechJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpeechJob'], meta: { name: 'SpeechJob' } }
    /**
     * Find zero or one SpeechJob that matches the filter.
     * @param {SpeechJobFindUniqueArgs} args - Arguments to find a SpeechJob
     * @example
     * // Get one SpeechJob
     * const speechJob = await prisma.speechJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeechJobFindUniqueArgs>(args: SelectSubset<T, SpeechJobFindUniqueArgs<ExtArgs>>): Prisma__SpeechJobClient<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SpeechJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpeechJobFindUniqueOrThrowArgs} args - Arguments to find a SpeechJob
     * @example
     * // Get one SpeechJob
     * const speechJob = await prisma.speechJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeechJobFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeechJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeechJobClient<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SpeechJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeechJobFindFirstArgs} args - Arguments to find a SpeechJob
     * @example
     * // Get one SpeechJob
     * const speechJob = await prisma.speechJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeechJobFindFirstArgs>(args?: SelectSubset<T, SpeechJobFindFirstArgs<ExtArgs>>): Prisma__SpeechJobClient<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SpeechJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeechJobFindFirstOrThrowArgs} args - Arguments to find a SpeechJob
     * @example
     * // Get one SpeechJob
     * const speechJob = await prisma.speechJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeechJobFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeechJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeechJobClient<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SpeechJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeechJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpeechJobs
     * const speechJobs = await prisma.speechJob.findMany()
     * 
     * // Get first 10 SpeechJobs
     * const speechJobs = await prisma.speechJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speechJobWithIdOnly = await prisma.speechJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeechJobFindManyArgs>(args?: SelectSubset<T, SpeechJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SpeechJob.
     * @param {SpeechJobCreateArgs} args - Arguments to create a SpeechJob.
     * @example
     * // Create one SpeechJob
     * const SpeechJob = await prisma.speechJob.create({
     *   data: {
     *     // ... data to create a SpeechJob
     *   }
     * })
     * 
     */
    create<T extends SpeechJobCreateArgs>(args: SelectSubset<T, SpeechJobCreateArgs<ExtArgs>>): Prisma__SpeechJobClient<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SpeechJobs.
     * @param {SpeechJobCreateManyArgs} args - Arguments to create many SpeechJobs.
     * @example
     * // Create many SpeechJobs
     * const speechJob = await prisma.speechJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeechJobCreateManyArgs>(args?: SelectSubset<T, SpeechJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpeechJobs and returns the data saved in the database.
     * @param {SpeechJobCreateManyAndReturnArgs} args - Arguments to create many SpeechJobs.
     * @example
     * // Create many SpeechJobs
     * const speechJob = await prisma.speechJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpeechJobs and only return the `id`
     * const speechJobWithIdOnly = await prisma.speechJob.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpeechJobCreateManyAndReturnArgs>(args?: SelectSubset<T, SpeechJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SpeechJob.
     * @param {SpeechJobDeleteArgs} args - Arguments to delete one SpeechJob.
     * @example
     * // Delete one SpeechJob
     * const SpeechJob = await prisma.speechJob.delete({
     *   where: {
     *     // ... filter to delete one SpeechJob
     *   }
     * })
     * 
     */
    delete<T extends SpeechJobDeleteArgs>(args: SelectSubset<T, SpeechJobDeleteArgs<ExtArgs>>): Prisma__SpeechJobClient<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SpeechJob.
     * @param {SpeechJobUpdateArgs} args - Arguments to update one SpeechJob.
     * @example
     * // Update one SpeechJob
     * const speechJob = await prisma.speechJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeechJobUpdateArgs>(args: SelectSubset<T, SpeechJobUpdateArgs<ExtArgs>>): Prisma__SpeechJobClient<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SpeechJobs.
     * @param {SpeechJobDeleteManyArgs} args - Arguments to filter SpeechJobs to delete.
     * @example
     * // Delete a few SpeechJobs
     * const { count } = await prisma.speechJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeechJobDeleteManyArgs>(args?: SelectSubset<T, SpeechJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeechJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeechJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpeechJobs
     * const speechJob = await prisma.speechJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeechJobUpdateManyArgs>(args: SelectSubset<T, SpeechJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpeechJob.
     * @param {SpeechJobUpsertArgs} args - Arguments to update or create a SpeechJob.
     * @example
     * // Update or create a SpeechJob
     * const speechJob = await prisma.speechJob.upsert({
     *   create: {
     *     // ... data to create a SpeechJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpeechJob we want to update
     *   }
     * })
     */
    upsert<T extends SpeechJobUpsertArgs>(args: SelectSubset<T, SpeechJobUpsertArgs<ExtArgs>>): Prisma__SpeechJobClient<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SpeechJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeechJobCountArgs} args - Arguments to filter SpeechJobs to count.
     * @example
     * // Count the number of SpeechJobs
     * const count = await prisma.speechJob.count({
     *   where: {
     *     // ... the filter for the SpeechJobs we want to count
     *   }
     * })
    **/
    count<T extends SpeechJobCountArgs>(
      args?: Subset<T, SpeechJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeechJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpeechJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeechJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpeechJobAggregateArgs>(args: Subset<T, SpeechJobAggregateArgs>): Prisma.PrismaPromise<GetSpeechJobAggregateType<T>>

    /**
     * Group by SpeechJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeechJobGroupByArgs} args - Group by arguments.
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
      T extends SpeechJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeechJobGroupByArgs['orderBy'] }
        : { orderBy?: SpeechJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpeechJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeechJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpeechJob model
   */
  readonly fields: SpeechJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpeechJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeechJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    metadata<T extends SpeechJob$metadataArgs<ExtArgs> = {}>(args?: Subset<T, SpeechJob$metadataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SpeechJob model
   */ 
  interface SpeechJobFieldRefs {
    readonly id: FieldRef<"SpeechJob", 'String'>
    readonly userId: FieldRef<"SpeechJob", 'String'>
    readonly type: FieldRef<"SpeechJob", 'SpeechJobType'>
    readonly status: FieldRef<"SpeechJob", 'SpeechJobStatus'>
    readonly fileKey: FieldRef<"SpeechJob", 'String'>
    readonly fileSize: FieldRef<"SpeechJob", 'Int'>
    readonly fileFormat: FieldRef<"SpeechJob", 'String'>
    readonly audioDuration: FieldRef<"SpeechJob", 'Float'>
    readonly sampleRate: FieldRef<"SpeechJob", 'Int'>
    readonly language: FieldRef<"SpeechJob", 'String'>
    readonly provider: FieldRef<"SpeechJob", 'String'>
    readonly transcript: FieldRef<"SpeechJob", 'String'>
    readonly confidence: FieldRef<"SpeechJob", 'Float'>
    readonly wordTimings: FieldRef<"SpeechJob", 'Json'>
    readonly text: FieldRef<"SpeechJob", 'String'>
    readonly voice: FieldRef<"SpeechJob", 'String'>
    readonly outputKey: FieldRef<"SpeechJob", 'String'>
    readonly pronunciationScore: FieldRef<"SpeechJob", 'Float'>
    readonly errorMessage: FieldRef<"SpeechJob", 'String'>
    readonly createdAt: FieldRef<"SpeechJob", 'DateTime'>
    readonly updatedAt: FieldRef<"SpeechJob", 'DateTime'>
    readonly completedAt: FieldRef<"SpeechJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpeechJob findUnique
   */
  export type SpeechJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
    /**
     * Filter, which SpeechJob to fetch.
     */
    where: SpeechJobWhereUniqueInput
  }

  /**
   * SpeechJob findUniqueOrThrow
   */
  export type SpeechJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
    /**
     * Filter, which SpeechJob to fetch.
     */
    where: SpeechJobWhereUniqueInput
  }

  /**
   * SpeechJob findFirst
   */
  export type SpeechJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
    /**
     * Filter, which SpeechJob to fetch.
     */
    where?: SpeechJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeechJobs to fetch.
     */
    orderBy?: SpeechJobOrderByWithRelationInput | SpeechJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeechJobs.
     */
    cursor?: SpeechJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeechJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeechJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeechJobs.
     */
    distinct?: SpeechJobScalarFieldEnum | SpeechJobScalarFieldEnum[]
  }

  /**
   * SpeechJob findFirstOrThrow
   */
  export type SpeechJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
    /**
     * Filter, which SpeechJob to fetch.
     */
    where?: SpeechJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeechJobs to fetch.
     */
    orderBy?: SpeechJobOrderByWithRelationInput | SpeechJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeechJobs.
     */
    cursor?: SpeechJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeechJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeechJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeechJobs.
     */
    distinct?: SpeechJobScalarFieldEnum | SpeechJobScalarFieldEnum[]
  }

  /**
   * SpeechJob findMany
   */
  export type SpeechJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
    /**
     * Filter, which SpeechJobs to fetch.
     */
    where?: SpeechJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeechJobs to fetch.
     */
    orderBy?: SpeechJobOrderByWithRelationInput | SpeechJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpeechJobs.
     */
    cursor?: SpeechJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeechJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeechJobs.
     */
    skip?: number
    distinct?: SpeechJobScalarFieldEnum | SpeechJobScalarFieldEnum[]
  }

  /**
   * SpeechJob create
   */
  export type SpeechJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
    /**
     * The data needed to create a SpeechJob.
     */
    data: XOR<SpeechJobCreateInput, SpeechJobUncheckedCreateInput>
  }

  /**
   * SpeechJob createMany
   */
  export type SpeechJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpeechJobs.
     */
    data: SpeechJobCreateManyInput | SpeechJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeechJob createManyAndReturn
   */
  export type SpeechJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SpeechJobs.
     */
    data: SpeechJobCreateManyInput | SpeechJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeechJob update
   */
  export type SpeechJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
    /**
     * The data needed to update a SpeechJob.
     */
    data: XOR<SpeechJobUpdateInput, SpeechJobUncheckedUpdateInput>
    /**
     * Choose, which SpeechJob to update.
     */
    where: SpeechJobWhereUniqueInput
  }

  /**
   * SpeechJob updateMany
   */
  export type SpeechJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpeechJobs.
     */
    data: XOR<SpeechJobUpdateManyMutationInput, SpeechJobUncheckedUpdateManyInput>
    /**
     * Filter which SpeechJobs to update
     */
    where?: SpeechJobWhereInput
  }

  /**
   * SpeechJob upsert
   */
  export type SpeechJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
    /**
     * The filter to search for the SpeechJob to update in case it exists.
     */
    where: SpeechJobWhereUniqueInput
    /**
     * In case the SpeechJob found by the `where` argument doesn't exist, create a new SpeechJob with this data.
     */
    create: XOR<SpeechJobCreateInput, SpeechJobUncheckedCreateInput>
    /**
     * In case the SpeechJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeechJobUpdateInput, SpeechJobUncheckedUpdateInput>
  }

  /**
   * SpeechJob delete
   */
  export type SpeechJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
    /**
     * Filter which SpeechJob to delete.
     */
    where: SpeechJobWhereUniqueInput
  }

  /**
   * SpeechJob deleteMany
   */
  export type SpeechJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeechJobs to delete
     */
    where?: SpeechJobWhereInput
  }

  /**
   * SpeechJob.metadata
   */
  export type SpeechJob$metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
    where?: AudioMetadataWhereInput
    orderBy?: AudioMetadataOrderByWithRelationInput | AudioMetadataOrderByWithRelationInput[]
    cursor?: AudioMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudioMetadataScalarFieldEnum | AudioMetadataScalarFieldEnum[]
  }

  /**
   * SpeechJob without action
   */
  export type SpeechJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
  }


  /**
   * Model AudioMetadata
   */

  export type AggregateAudioMetadata = {
    _count: AudioMetadataCountAggregateOutputType | null
    _avg: AudioMetadataAvgAggregateOutputType | null
    _sum: AudioMetadataSumAggregateOutputType | null
    _min: AudioMetadataMinAggregateOutputType | null
    _max: AudioMetadataMaxAggregateOutputType | null
  }

  export type AudioMetadataAvgAggregateOutputType = {
    fileSize: number | null
    sampleRate: number | null
    audioDuration: number | null
  }

  export type AudioMetadataSumAggregateOutputType = {
    fileSize: number | null
    sampleRate: number | null
    audioDuration: number | null
  }

  export type AudioMetadataMinAggregateOutputType = {
    id: string | null
    userId: string | null
    speechJobId: string | null
    fileKey: string | null
    fileName: string | null
    fileSize: number | null
    fileFormat: string | null
    sampleRate: number | null
    audioDuration: number | null
    createdAt: Date | null
  }

  export type AudioMetadataMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    speechJobId: string | null
    fileKey: string | null
    fileName: string | null
    fileSize: number | null
    fileFormat: string | null
    sampleRate: number | null
    audioDuration: number | null
    createdAt: Date | null
  }

  export type AudioMetadataCountAggregateOutputType = {
    id: number
    userId: number
    speechJobId: number
    fileKey: number
    fileName: number
    fileSize: number
    fileFormat: number
    sampleRate: number
    audioDuration: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AudioMetadataAvgAggregateInputType = {
    fileSize?: true
    sampleRate?: true
    audioDuration?: true
  }

  export type AudioMetadataSumAggregateInputType = {
    fileSize?: true
    sampleRate?: true
    audioDuration?: true
  }

  export type AudioMetadataMinAggregateInputType = {
    id?: true
    userId?: true
    speechJobId?: true
    fileKey?: true
    fileName?: true
    fileSize?: true
    fileFormat?: true
    sampleRate?: true
    audioDuration?: true
    createdAt?: true
  }

  export type AudioMetadataMaxAggregateInputType = {
    id?: true
    userId?: true
    speechJobId?: true
    fileKey?: true
    fileName?: true
    fileSize?: true
    fileFormat?: true
    sampleRate?: true
    audioDuration?: true
    createdAt?: true
  }

  export type AudioMetadataCountAggregateInputType = {
    id?: true
    userId?: true
    speechJobId?: true
    fileKey?: true
    fileName?: true
    fileSize?: true
    fileFormat?: true
    sampleRate?: true
    audioDuration?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AudioMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioMetadata to aggregate.
     */
    where?: AudioMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioMetadata to fetch.
     */
    orderBy?: AudioMetadataOrderByWithRelationInput | AudioMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioMetadata
    **/
    _count?: true | AudioMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudioMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudioMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioMetadataMaxAggregateInputType
  }

  export type GetAudioMetadataAggregateType<T extends AudioMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioMetadata[P]>
      : GetScalarType<T[P], AggregateAudioMetadata[P]>
  }




  export type AudioMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioMetadataWhereInput
    orderBy?: AudioMetadataOrderByWithAggregationInput | AudioMetadataOrderByWithAggregationInput[]
    by: AudioMetadataScalarFieldEnum[] | AudioMetadataScalarFieldEnum
    having?: AudioMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioMetadataCountAggregateInputType | true
    _avg?: AudioMetadataAvgAggregateInputType
    _sum?: AudioMetadataSumAggregateInputType
    _min?: AudioMetadataMinAggregateInputType
    _max?: AudioMetadataMaxAggregateInputType
  }

  export type AudioMetadataGroupByOutputType = {
    id: string
    userId: string
    speechJobId: string | null
    fileKey: string
    fileName: string
    fileSize: number
    fileFormat: string
    sampleRate: number
    audioDuration: number
    metadata: JsonValue | null
    createdAt: Date
    _count: AudioMetadataCountAggregateOutputType | null
    _avg: AudioMetadataAvgAggregateOutputType | null
    _sum: AudioMetadataSumAggregateOutputType | null
    _min: AudioMetadataMinAggregateOutputType | null
    _max: AudioMetadataMaxAggregateOutputType | null
  }

  type GetAudioMetadataGroupByPayload<T extends AudioMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], AudioMetadataGroupByOutputType[P]>
        }
      >
    >


  export type AudioMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    speechJobId?: boolean
    fileKey?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileFormat?: boolean
    sampleRate?: boolean
    audioDuration?: boolean
    metadata?: boolean
    createdAt?: boolean
    speechJob?: boolean | AudioMetadata$speechJobArgs<ExtArgs>
  }, ExtArgs["result"]["audioMetadata"]>

  export type AudioMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    speechJobId?: boolean
    fileKey?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileFormat?: boolean
    sampleRate?: boolean
    audioDuration?: boolean
    metadata?: boolean
    createdAt?: boolean
    speechJob?: boolean | AudioMetadata$speechJobArgs<ExtArgs>
  }, ExtArgs["result"]["audioMetadata"]>

  export type AudioMetadataSelectScalar = {
    id?: boolean
    userId?: boolean
    speechJobId?: boolean
    fileKey?: boolean
    fileName?: boolean
    fileSize?: boolean
    fileFormat?: boolean
    sampleRate?: boolean
    audioDuration?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AudioMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    speechJob?: boolean | AudioMetadata$speechJobArgs<ExtArgs>
  }
  export type AudioMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    speechJob?: boolean | AudioMetadata$speechJobArgs<ExtArgs>
  }

  export type $AudioMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioMetadata"
    objects: {
      speechJob: Prisma.$SpeechJobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      speechJobId: string | null
      fileKey: string
      fileName: string
      fileSize: number
      fileFormat: string
      sampleRate: number
      audioDuration: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["audioMetadata"]>
    composites: {}
  }

  type AudioMetadataGetPayload<S extends boolean | null | undefined | AudioMetadataDefaultArgs> = $Result.GetResult<Prisma.$AudioMetadataPayload, S>

  type AudioMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AudioMetadataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AudioMetadataCountAggregateInputType | true
    }

  export interface AudioMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioMetadata'], meta: { name: 'AudioMetadata' } }
    /**
     * Find zero or one AudioMetadata that matches the filter.
     * @param {AudioMetadataFindUniqueArgs} args - Arguments to find a AudioMetadata
     * @example
     * // Get one AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioMetadataFindUniqueArgs>(args: SelectSubset<T, AudioMetadataFindUniqueArgs<ExtArgs>>): Prisma__AudioMetadataClient<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AudioMetadata that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AudioMetadataFindUniqueOrThrowArgs} args - Arguments to find a AudioMetadata
     * @example
     * // Get one AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioMetadataClient<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AudioMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioMetadataFindFirstArgs} args - Arguments to find a AudioMetadata
     * @example
     * // Get one AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioMetadataFindFirstArgs>(args?: SelectSubset<T, AudioMetadataFindFirstArgs<ExtArgs>>): Prisma__AudioMetadataClient<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AudioMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioMetadataFindFirstOrThrowArgs} args - Arguments to find a AudioMetadata
     * @example
     * // Get one AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioMetadataClient<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AudioMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.findMany()
     * 
     * // Get first 10 AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioMetadataWithIdOnly = await prisma.audioMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioMetadataFindManyArgs>(args?: SelectSubset<T, AudioMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AudioMetadata.
     * @param {AudioMetadataCreateArgs} args - Arguments to create a AudioMetadata.
     * @example
     * // Create one AudioMetadata
     * const AudioMetadata = await prisma.audioMetadata.create({
     *   data: {
     *     // ... data to create a AudioMetadata
     *   }
     * })
     * 
     */
    create<T extends AudioMetadataCreateArgs>(args: SelectSubset<T, AudioMetadataCreateArgs<ExtArgs>>): Prisma__AudioMetadataClient<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AudioMetadata.
     * @param {AudioMetadataCreateManyArgs} args - Arguments to create many AudioMetadata.
     * @example
     * // Create many AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioMetadataCreateManyArgs>(args?: SelectSubset<T, AudioMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AudioMetadata and returns the data saved in the database.
     * @param {AudioMetadataCreateManyAndReturnArgs} args - Arguments to create many AudioMetadata.
     * @example
     * // Create many AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AudioMetadata and only return the `id`
     * const audioMetadataWithIdOnly = await prisma.audioMetadata.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudioMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, AudioMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AudioMetadata.
     * @param {AudioMetadataDeleteArgs} args - Arguments to delete one AudioMetadata.
     * @example
     * // Delete one AudioMetadata
     * const AudioMetadata = await prisma.audioMetadata.delete({
     *   where: {
     *     // ... filter to delete one AudioMetadata
     *   }
     * })
     * 
     */
    delete<T extends AudioMetadataDeleteArgs>(args: SelectSubset<T, AudioMetadataDeleteArgs<ExtArgs>>): Prisma__AudioMetadataClient<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AudioMetadata.
     * @param {AudioMetadataUpdateArgs} args - Arguments to update one AudioMetadata.
     * @example
     * // Update one AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioMetadataUpdateArgs>(args: SelectSubset<T, AudioMetadataUpdateArgs<ExtArgs>>): Prisma__AudioMetadataClient<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AudioMetadata.
     * @param {AudioMetadataDeleteManyArgs} args - Arguments to filter AudioMetadata to delete.
     * @example
     * // Delete a few AudioMetadata
     * const { count } = await prisma.audioMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioMetadataDeleteManyArgs>(args?: SelectSubset<T, AudioMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioMetadataUpdateManyArgs>(args: SelectSubset<T, AudioMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AudioMetadata.
     * @param {AudioMetadataUpsertArgs} args - Arguments to update or create a AudioMetadata.
     * @example
     * // Update or create a AudioMetadata
     * const audioMetadata = await prisma.audioMetadata.upsert({
     *   create: {
     *     // ... data to create a AudioMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioMetadata we want to update
     *   }
     * })
     */
    upsert<T extends AudioMetadataUpsertArgs>(args: SelectSubset<T, AudioMetadataUpsertArgs<ExtArgs>>): Prisma__AudioMetadataClient<$Result.GetResult<Prisma.$AudioMetadataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AudioMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioMetadataCountArgs} args - Arguments to filter AudioMetadata to count.
     * @example
     * // Count the number of AudioMetadata
     * const count = await prisma.audioMetadata.count({
     *   where: {
     *     // ... the filter for the AudioMetadata we want to count
     *   }
     * })
    **/
    count<T extends AudioMetadataCountArgs>(
      args?: Subset<T, AudioMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioMetadataAggregateArgs>(args: Subset<T, AudioMetadataAggregateArgs>): Prisma.PrismaPromise<GetAudioMetadataAggregateType<T>>

    /**
     * Group by AudioMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioMetadataGroupByArgs} args - Group by arguments.
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
      T extends AudioMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioMetadataGroupByArgs['orderBy'] }
        : { orderBy?: AudioMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioMetadata model
   */
  readonly fields: AudioMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    speechJob<T extends AudioMetadata$speechJobArgs<ExtArgs> = {}>(args?: Subset<T, AudioMetadata$speechJobArgs<ExtArgs>>): Prisma__SpeechJobClient<$Result.GetResult<Prisma.$SpeechJobPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the AudioMetadata model
   */ 
  interface AudioMetadataFieldRefs {
    readonly id: FieldRef<"AudioMetadata", 'String'>
    readonly userId: FieldRef<"AudioMetadata", 'String'>
    readonly speechJobId: FieldRef<"AudioMetadata", 'String'>
    readonly fileKey: FieldRef<"AudioMetadata", 'String'>
    readonly fileName: FieldRef<"AudioMetadata", 'String'>
    readonly fileSize: FieldRef<"AudioMetadata", 'Int'>
    readonly fileFormat: FieldRef<"AudioMetadata", 'String'>
    readonly sampleRate: FieldRef<"AudioMetadata", 'Int'>
    readonly audioDuration: FieldRef<"AudioMetadata", 'Float'>
    readonly metadata: FieldRef<"AudioMetadata", 'Json'>
    readonly createdAt: FieldRef<"AudioMetadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AudioMetadata findUnique
   */
  export type AudioMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
    /**
     * Filter, which AudioMetadata to fetch.
     */
    where: AudioMetadataWhereUniqueInput
  }

  /**
   * AudioMetadata findUniqueOrThrow
   */
  export type AudioMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
    /**
     * Filter, which AudioMetadata to fetch.
     */
    where: AudioMetadataWhereUniqueInput
  }

  /**
   * AudioMetadata findFirst
   */
  export type AudioMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
    /**
     * Filter, which AudioMetadata to fetch.
     */
    where?: AudioMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioMetadata to fetch.
     */
    orderBy?: AudioMetadataOrderByWithRelationInput | AudioMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioMetadata.
     */
    cursor?: AudioMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioMetadata.
     */
    distinct?: AudioMetadataScalarFieldEnum | AudioMetadataScalarFieldEnum[]
  }

  /**
   * AudioMetadata findFirstOrThrow
   */
  export type AudioMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
    /**
     * Filter, which AudioMetadata to fetch.
     */
    where?: AudioMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioMetadata to fetch.
     */
    orderBy?: AudioMetadataOrderByWithRelationInput | AudioMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioMetadata.
     */
    cursor?: AudioMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioMetadata.
     */
    distinct?: AudioMetadataScalarFieldEnum | AudioMetadataScalarFieldEnum[]
  }

  /**
   * AudioMetadata findMany
   */
  export type AudioMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
    /**
     * Filter, which AudioMetadata to fetch.
     */
    where?: AudioMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioMetadata to fetch.
     */
    orderBy?: AudioMetadataOrderByWithRelationInput | AudioMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioMetadata.
     */
    cursor?: AudioMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioMetadata.
     */
    skip?: number
    distinct?: AudioMetadataScalarFieldEnum | AudioMetadataScalarFieldEnum[]
  }

  /**
   * AudioMetadata create
   */
  export type AudioMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a AudioMetadata.
     */
    data: XOR<AudioMetadataCreateInput, AudioMetadataUncheckedCreateInput>
  }

  /**
   * AudioMetadata createMany
   */
  export type AudioMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioMetadata.
     */
    data: AudioMetadataCreateManyInput | AudioMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AudioMetadata createManyAndReturn
   */
  export type AudioMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AudioMetadata.
     */
    data: AudioMetadataCreateManyInput | AudioMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AudioMetadata update
   */
  export type AudioMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a AudioMetadata.
     */
    data: XOR<AudioMetadataUpdateInput, AudioMetadataUncheckedUpdateInput>
    /**
     * Choose, which AudioMetadata to update.
     */
    where: AudioMetadataWhereUniqueInput
  }

  /**
   * AudioMetadata updateMany
   */
  export type AudioMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioMetadata.
     */
    data: XOR<AudioMetadataUpdateManyMutationInput, AudioMetadataUncheckedUpdateManyInput>
    /**
     * Filter which AudioMetadata to update
     */
    where?: AudioMetadataWhereInput
  }

  /**
   * AudioMetadata upsert
   */
  export type AudioMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the AudioMetadata to update in case it exists.
     */
    where: AudioMetadataWhereUniqueInput
    /**
     * In case the AudioMetadata found by the `where` argument doesn't exist, create a new AudioMetadata with this data.
     */
    create: XOR<AudioMetadataCreateInput, AudioMetadataUncheckedCreateInput>
    /**
     * In case the AudioMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioMetadataUpdateInput, AudioMetadataUncheckedUpdateInput>
  }

  /**
   * AudioMetadata delete
   */
  export type AudioMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
    /**
     * Filter which AudioMetadata to delete.
     */
    where: AudioMetadataWhereUniqueInput
  }

  /**
   * AudioMetadata deleteMany
   */
  export type AudioMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioMetadata to delete
     */
    where?: AudioMetadataWhereInput
  }

  /**
   * AudioMetadata.speechJob
   */
  export type AudioMetadata$speechJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeechJob
     */
    select?: SpeechJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeechJobInclude<ExtArgs> | null
    where?: SpeechJobWhereInput
  }

  /**
   * AudioMetadata without action
   */
  export type AudioMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioMetadata
     */
    select?: AudioMetadataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudioMetadataInclude<ExtArgs> | null
  }


  /**
   * Model SpeakingSession
   */

  export type AggregateSpeakingSession = {
    _count: SpeakingSessionCountAggregateOutputType | null
    _avg: SpeakingSessionAvgAggregateOutputType | null
    _sum: SpeakingSessionSumAggregateOutputType | null
    _min: SpeakingSessionMinAggregateOutputType | null
    _max: SpeakingSessionMaxAggregateOutputType | null
  }

  export type SpeakingSessionAvgAggregateOutputType = {
    totalTurns: number | null
    totalDuration: number | null
  }

  export type SpeakingSessionSumAggregateOutputType = {
    totalTurns: number | null
    totalDuration: number | null
  }

  export type SpeakingSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    status: string | null
    totalTurns: number | null
    totalDuration: number | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeakingSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    status: string | null
    totalTurns: number | null
    totalDuration: number | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeakingSessionCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    status: number
    totalTurns: number
    totalDuration: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpeakingSessionAvgAggregateInputType = {
    totalTurns?: true
    totalDuration?: true
  }

  export type SpeakingSessionSumAggregateInputType = {
    totalTurns?: true
    totalDuration?: true
  }

  export type SpeakingSessionMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    status?: true
    totalTurns?: true
    totalDuration?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeakingSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    status?: true
    totalTurns?: true
    totalDuration?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeakingSessionCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    status?: true
    totalTurns?: true
    totalDuration?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpeakingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeakingSession to aggregate.
     */
    where?: SpeakingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakingSessions to fetch.
     */
    orderBy?: SpeakingSessionOrderByWithRelationInput | SpeakingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeakingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpeakingSessions
    **/
    _count?: true | SpeakingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeakingSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeakingSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeakingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeakingSessionMaxAggregateInputType
  }

  export type GetSpeakingSessionAggregateType<T extends SpeakingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeakingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeakingSession[P]>
      : GetScalarType<T[P], AggregateSpeakingSession[P]>
  }




  export type SpeakingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeakingSessionWhereInput
    orderBy?: SpeakingSessionOrderByWithAggregationInput | SpeakingSessionOrderByWithAggregationInput[]
    by: SpeakingSessionScalarFieldEnum[] | SpeakingSessionScalarFieldEnum
    having?: SpeakingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeakingSessionCountAggregateInputType | true
    _avg?: SpeakingSessionAvgAggregateInputType
    _sum?: SpeakingSessionSumAggregateInputType
    _min?: SpeakingSessionMinAggregateInputType
    _max?: SpeakingSessionMaxAggregateInputType
  }

  export type SpeakingSessionGroupByOutputType = {
    id: string
    userId: string
    title: string | null
    status: string
    totalTurns: number
    totalDuration: number
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SpeakingSessionCountAggregateOutputType | null
    _avg: SpeakingSessionAvgAggregateOutputType | null
    _sum: SpeakingSessionSumAggregateOutputType | null
    _min: SpeakingSessionMinAggregateOutputType | null
    _max: SpeakingSessionMaxAggregateOutputType | null
  }

  type GetSpeakingSessionGroupByPayload<T extends SpeakingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeakingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeakingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeakingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], SpeakingSessionGroupByOutputType[P]>
        }
      >
    >


  export type SpeakingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    status?: boolean
    totalTurns?: boolean
    totalDuration?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    turns?: boolean | SpeakingSession$turnsArgs<ExtArgs>
    _count?: boolean | SpeakingSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["speakingSession"]>

  export type SpeakingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    status?: boolean
    totalTurns?: boolean
    totalDuration?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["speakingSession"]>

  export type SpeakingSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    status?: boolean
    totalTurns?: boolean
    totalDuration?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpeakingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turns?: boolean | SpeakingSession$turnsArgs<ExtArgs>
    _count?: boolean | SpeakingSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpeakingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpeakingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpeakingSession"
    objects: {
      turns: Prisma.$SpeakingTurnPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string | null
      status: string
      totalTurns: number
      totalDuration: number
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["speakingSession"]>
    composites: {}
  }

  type SpeakingSessionGetPayload<S extends boolean | null | undefined | SpeakingSessionDefaultArgs> = $Result.GetResult<Prisma.$SpeakingSessionPayload, S>

  type SpeakingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpeakingSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpeakingSessionCountAggregateInputType | true
    }

  export interface SpeakingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpeakingSession'], meta: { name: 'SpeakingSession' } }
    /**
     * Find zero or one SpeakingSession that matches the filter.
     * @param {SpeakingSessionFindUniqueArgs} args - Arguments to find a SpeakingSession
     * @example
     * // Get one SpeakingSession
     * const speakingSession = await prisma.speakingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeakingSessionFindUniqueArgs>(args: SelectSubset<T, SpeakingSessionFindUniqueArgs<ExtArgs>>): Prisma__SpeakingSessionClient<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SpeakingSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpeakingSessionFindUniqueOrThrowArgs} args - Arguments to find a SpeakingSession
     * @example
     * // Get one SpeakingSession
     * const speakingSession = await prisma.speakingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeakingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeakingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeakingSessionClient<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SpeakingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingSessionFindFirstArgs} args - Arguments to find a SpeakingSession
     * @example
     * // Get one SpeakingSession
     * const speakingSession = await prisma.speakingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeakingSessionFindFirstArgs>(args?: SelectSubset<T, SpeakingSessionFindFirstArgs<ExtArgs>>): Prisma__SpeakingSessionClient<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SpeakingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingSessionFindFirstOrThrowArgs} args - Arguments to find a SpeakingSession
     * @example
     * // Get one SpeakingSession
     * const speakingSession = await prisma.speakingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeakingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeakingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeakingSessionClient<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SpeakingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpeakingSessions
     * const speakingSessions = await prisma.speakingSession.findMany()
     * 
     * // Get first 10 SpeakingSessions
     * const speakingSessions = await prisma.speakingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speakingSessionWithIdOnly = await prisma.speakingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeakingSessionFindManyArgs>(args?: SelectSubset<T, SpeakingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SpeakingSession.
     * @param {SpeakingSessionCreateArgs} args - Arguments to create a SpeakingSession.
     * @example
     * // Create one SpeakingSession
     * const SpeakingSession = await prisma.speakingSession.create({
     *   data: {
     *     // ... data to create a SpeakingSession
     *   }
     * })
     * 
     */
    create<T extends SpeakingSessionCreateArgs>(args: SelectSubset<T, SpeakingSessionCreateArgs<ExtArgs>>): Prisma__SpeakingSessionClient<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SpeakingSessions.
     * @param {SpeakingSessionCreateManyArgs} args - Arguments to create many SpeakingSessions.
     * @example
     * // Create many SpeakingSessions
     * const speakingSession = await prisma.speakingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeakingSessionCreateManyArgs>(args?: SelectSubset<T, SpeakingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpeakingSessions and returns the data saved in the database.
     * @param {SpeakingSessionCreateManyAndReturnArgs} args - Arguments to create many SpeakingSessions.
     * @example
     * // Create many SpeakingSessions
     * const speakingSession = await prisma.speakingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpeakingSessions and only return the `id`
     * const speakingSessionWithIdOnly = await prisma.speakingSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpeakingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SpeakingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SpeakingSession.
     * @param {SpeakingSessionDeleteArgs} args - Arguments to delete one SpeakingSession.
     * @example
     * // Delete one SpeakingSession
     * const SpeakingSession = await prisma.speakingSession.delete({
     *   where: {
     *     // ... filter to delete one SpeakingSession
     *   }
     * })
     * 
     */
    delete<T extends SpeakingSessionDeleteArgs>(args: SelectSubset<T, SpeakingSessionDeleteArgs<ExtArgs>>): Prisma__SpeakingSessionClient<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SpeakingSession.
     * @param {SpeakingSessionUpdateArgs} args - Arguments to update one SpeakingSession.
     * @example
     * // Update one SpeakingSession
     * const speakingSession = await prisma.speakingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeakingSessionUpdateArgs>(args: SelectSubset<T, SpeakingSessionUpdateArgs<ExtArgs>>): Prisma__SpeakingSessionClient<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SpeakingSessions.
     * @param {SpeakingSessionDeleteManyArgs} args - Arguments to filter SpeakingSessions to delete.
     * @example
     * // Delete a few SpeakingSessions
     * const { count } = await prisma.speakingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeakingSessionDeleteManyArgs>(args?: SelectSubset<T, SpeakingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeakingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpeakingSessions
     * const speakingSession = await prisma.speakingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeakingSessionUpdateManyArgs>(args: SelectSubset<T, SpeakingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpeakingSession.
     * @param {SpeakingSessionUpsertArgs} args - Arguments to update or create a SpeakingSession.
     * @example
     * // Update or create a SpeakingSession
     * const speakingSession = await prisma.speakingSession.upsert({
     *   create: {
     *     // ... data to create a SpeakingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpeakingSession we want to update
     *   }
     * })
     */
    upsert<T extends SpeakingSessionUpsertArgs>(args: SelectSubset<T, SpeakingSessionUpsertArgs<ExtArgs>>): Prisma__SpeakingSessionClient<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SpeakingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingSessionCountArgs} args - Arguments to filter SpeakingSessions to count.
     * @example
     * // Count the number of SpeakingSessions
     * const count = await prisma.speakingSession.count({
     *   where: {
     *     // ... the filter for the SpeakingSessions we want to count
     *   }
     * })
    **/
    count<T extends SpeakingSessionCountArgs>(
      args?: Subset<T, SpeakingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeakingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpeakingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpeakingSessionAggregateArgs>(args: Subset<T, SpeakingSessionAggregateArgs>): Prisma.PrismaPromise<GetSpeakingSessionAggregateType<T>>

    /**
     * Group by SpeakingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingSessionGroupByArgs} args - Group by arguments.
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
      T extends SpeakingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeakingSessionGroupByArgs['orderBy'] }
        : { orderBy?: SpeakingSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpeakingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeakingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpeakingSession model
   */
  readonly fields: SpeakingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpeakingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeakingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turns<T extends SpeakingSession$turnsArgs<ExtArgs> = {}>(args?: Subset<T, SpeakingSession$turnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SpeakingSession model
   */ 
  interface SpeakingSessionFieldRefs {
    readonly id: FieldRef<"SpeakingSession", 'String'>
    readonly userId: FieldRef<"SpeakingSession", 'String'>
    readonly title: FieldRef<"SpeakingSession", 'String'>
    readonly status: FieldRef<"SpeakingSession", 'String'>
    readonly totalTurns: FieldRef<"SpeakingSession", 'Int'>
    readonly totalDuration: FieldRef<"SpeakingSession", 'Int'>
    readonly completedAt: FieldRef<"SpeakingSession", 'DateTime'>
    readonly createdAt: FieldRef<"SpeakingSession", 'DateTime'>
    readonly updatedAt: FieldRef<"SpeakingSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpeakingSession findUnique
   */
  export type SpeakingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingSessionInclude<ExtArgs> | null
    /**
     * Filter, which SpeakingSession to fetch.
     */
    where: SpeakingSessionWhereUniqueInput
  }

  /**
   * SpeakingSession findUniqueOrThrow
   */
  export type SpeakingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingSessionInclude<ExtArgs> | null
    /**
     * Filter, which SpeakingSession to fetch.
     */
    where: SpeakingSessionWhereUniqueInput
  }

  /**
   * SpeakingSession findFirst
   */
  export type SpeakingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingSessionInclude<ExtArgs> | null
    /**
     * Filter, which SpeakingSession to fetch.
     */
    where?: SpeakingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakingSessions to fetch.
     */
    orderBy?: SpeakingSessionOrderByWithRelationInput | SpeakingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeakingSessions.
     */
    cursor?: SpeakingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeakingSessions.
     */
    distinct?: SpeakingSessionScalarFieldEnum | SpeakingSessionScalarFieldEnum[]
  }

  /**
   * SpeakingSession findFirstOrThrow
   */
  export type SpeakingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingSessionInclude<ExtArgs> | null
    /**
     * Filter, which SpeakingSession to fetch.
     */
    where?: SpeakingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakingSessions to fetch.
     */
    orderBy?: SpeakingSessionOrderByWithRelationInput | SpeakingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeakingSessions.
     */
    cursor?: SpeakingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeakingSessions.
     */
    distinct?: SpeakingSessionScalarFieldEnum | SpeakingSessionScalarFieldEnum[]
  }

  /**
   * SpeakingSession findMany
   */
  export type SpeakingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingSessionInclude<ExtArgs> | null
    /**
     * Filter, which SpeakingSessions to fetch.
     */
    where?: SpeakingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakingSessions to fetch.
     */
    orderBy?: SpeakingSessionOrderByWithRelationInput | SpeakingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpeakingSessions.
     */
    cursor?: SpeakingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakingSessions.
     */
    skip?: number
    distinct?: SpeakingSessionScalarFieldEnum | SpeakingSessionScalarFieldEnum[]
  }

  /**
   * SpeakingSession create
   */
  export type SpeakingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a SpeakingSession.
     */
    data: XOR<SpeakingSessionCreateInput, SpeakingSessionUncheckedCreateInput>
  }

  /**
   * SpeakingSession createMany
   */
  export type SpeakingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpeakingSessions.
     */
    data: SpeakingSessionCreateManyInput | SpeakingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeakingSession createManyAndReturn
   */
  export type SpeakingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SpeakingSessions.
     */
    data: SpeakingSessionCreateManyInput | SpeakingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeakingSession update
   */
  export type SpeakingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a SpeakingSession.
     */
    data: XOR<SpeakingSessionUpdateInput, SpeakingSessionUncheckedUpdateInput>
    /**
     * Choose, which SpeakingSession to update.
     */
    where: SpeakingSessionWhereUniqueInput
  }

  /**
   * SpeakingSession updateMany
   */
  export type SpeakingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpeakingSessions.
     */
    data: XOR<SpeakingSessionUpdateManyMutationInput, SpeakingSessionUncheckedUpdateManyInput>
    /**
     * Filter which SpeakingSessions to update
     */
    where?: SpeakingSessionWhereInput
  }

  /**
   * SpeakingSession upsert
   */
  export type SpeakingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the SpeakingSession to update in case it exists.
     */
    where: SpeakingSessionWhereUniqueInput
    /**
     * In case the SpeakingSession found by the `where` argument doesn't exist, create a new SpeakingSession with this data.
     */
    create: XOR<SpeakingSessionCreateInput, SpeakingSessionUncheckedCreateInput>
    /**
     * In case the SpeakingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeakingSessionUpdateInput, SpeakingSessionUncheckedUpdateInput>
  }

  /**
   * SpeakingSession delete
   */
  export type SpeakingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingSessionInclude<ExtArgs> | null
    /**
     * Filter which SpeakingSession to delete.
     */
    where: SpeakingSessionWhereUniqueInput
  }

  /**
   * SpeakingSession deleteMany
   */
  export type SpeakingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeakingSessions to delete
     */
    where?: SpeakingSessionWhereInput
  }

  /**
   * SpeakingSession.turns
   */
  export type SpeakingSession$turnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
    where?: SpeakingTurnWhereInput
    orderBy?: SpeakingTurnOrderByWithRelationInput | SpeakingTurnOrderByWithRelationInput[]
    cursor?: SpeakingTurnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpeakingTurnScalarFieldEnum | SpeakingTurnScalarFieldEnum[]
  }

  /**
   * SpeakingSession without action
   */
  export type SpeakingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingSession
     */
    select?: SpeakingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingSessionInclude<ExtArgs> | null
  }


  /**
   * Model SpeakingTurn
   */

  export type AggregateSpeakingTurn = {
    _count: SpeakingTurnCountAggregateOutputType | null
    _avg: SpeakingTurnAvgAggregateOutputType | null
    _sum: SpeakingTurnSumAggregateOutputType | null
    _min: SpeakingTurnMinAggregateOutputType | null
    _max: SpeakingTurnMaxAggregateOutputType | null
  }

  export type SpeakingTurnAvgAggregateOutputType = {
    audioDuration: number | null
    fluencyScore: number | null
    pronunciationScore: number | null
    overallScore: number | null
  }

  export type SpeakingTurnSumAggregateOutputType = {
    audioDuration: number | null
    fluencyScore: number | null
    pronunciationScore: number | null
    overallScore: number | null
  }

  export type SpeakingTurnMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    audioKey: string | null
    audioDuration: number | null
    transcript: string | null
    fluencyScore: number | null
    pronunciationScore: number | null
    overallScore: number | null
    correctedText: string | null
    hindiExplanation: string | null
    audioResponseKey: string | null
    createdAt: Date | null
  }

  export type SpeakingTurnMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    audioKey: string | null
    audioDuration: number | null
    transcript: string | null
    fluencyScore: number | null
    pronunciationScore: number | null
    overallScore: number | null
    correctedText: string | null
    hindiExplanation: string | null
    audioResponseKey: string | null
    createdAt: Date | null
  }

  export type SpeakingTurnCountAggregateOutputType = {
    id: number
    sessionId: number
    userId: number
    audioKey: number
    audioDuration: number
    transcript: number
    grammarIssues: number
    fluencyScore: number
    pronunciationScore: number
    overallScore: number
    feedback: number
    correctedText: number
    hindiExplanation: number
    audioResponseKey: number
    createdAt: number
    _all: number
  }


  export type SpeakingTurnAvgAggregateInputType = {
    audioDuration?: true
    fluencyScore?: true
    pronunciationScore?: true
    overallScore?: true
  }

  export type SpeakingTurnSumAggregateInputType = {
    audioDuration?: true
    fluencyScore?: true
    pronunciationScore?: true
    overallScore?: true
  }

  export type SpeakingTurnMinAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    audioKey?: true
    audioDuration?: true
    transcript?: true
    fluencyScore?: true
    pronunciationScore?: true
    overallScore?: true
    correctedText?: true
    hindiExplanation?: true
    audioResponseKey?: true
    createdAt?: true
  }

  export type SpeakingTurnMaxAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    audioKey?: true
    audioDuration?: true
    transcript?: true
    fluencyScore?: true
    pronunciationScore?: true
    overallScore?: true
    correctedText?: true
    hindiExplanation?: true
    audioResponseKey?: true
    createdAt?: true
  }

  export type SpeakingTurnCountAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    audioKey?: true
    audioDuration?: true
    transcript?: true
    grammarIssues?: true
    fluencyScore?: true
    pronunciationScore?: true
    overallScore?: true
    feedback?: true
    correctedText?: true
    hindiExplanation?: true
    audioResponseKey?: true
    createdAt?: true
    _all?: true
  }

  export type SpeakingTurnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeakingTurn to aggregate.
     */
    where?: SpeakingTurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakingTurns to fetch.
     */
    orderBy?: SpeakingTurnOrderByWithRelationInput | SpeakingTurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeakingTurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakingTurns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakingTurns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpeakingTurns
    **/
    _count?: true | SpeakingTurnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeakingTurnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeakingTurnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeakingTurnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeakingTurnMaxAggregateInputType
  }

  export type GetSpeakingTurnAggregateType<T extends SpeakingTurnAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeakingTurn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeakingTurn[P]>
      : GetScalarType<T[P], AggregateSpeakingTurn[P]>
  }




  export type SpeakingTurnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeakingTurnWhereInput
    orderBy?: SpeakingTurnOrderByWithAggregationInput | SpeakingTurnOrderByWithAggregationInput[]
    by: SpeakingTurnScalarFieldEnum[] | SpeakingTurnScalarFieldEnum
    having?: SpeakingTurnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeakingTurnCountAggregateInputType | true
    _avg?: SpeakingTurnAvgAggregateInputType
    _sum?: SpeakingTurnSumAggregateInputType
    _min?: SpeakingTurnMinAggregateInputType
    _max?: SpeakingTurnMaxAggregateInputType
  }

  export type SpeakingTurnGroupByOutputType = {
    id: string
    sessionId: string
    userId: string
    audioKey: string | null
    audioDuration: number | null
    transcript: string | null
    grammarIssues: JsonValue | null
    fluencyScore: number | null
    pronunciationScore: number | null
    overallScore: number | null
    feedback: JsonValue | null
    correctedText: string | null
    hindiExplanation: string | null
    audioResponseKey: string | null
    createdAt: Date
    _count: SpeakingTurnCountAggregateOutputType | null
    _avg: SpeakingTurnAvgAggregateOutputType | null
    _sum: SpeakingTurnSumAggregateOutputType | null
    _min: SpeakingTurnMinAggregateOutputType | null
    _max: SpeakingTurnMaxAggregateOutputType | null
  }

  type GetSpeakingTurnGroupByPayload<T extends SpeakingTurnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeakingTurnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeakingTurnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeakingTurnGroupByOutputType[P]>
            : GetScalarType<T[P], SpeakingTurnGroupByOutputType[P]>
        }
      >
    >


  export type SpeakingTurnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    audioKey?: boolean
    audioDuration?: boolean
    transcript?: boolean
    grammarIssues?: boolean
    fluencyScore?: boolean
    pronunciationScore?: boolean
    overallScore?: boolean
    feedback?: boolean
    correctedText?: boolean
    hindiExplanation?: boolean
    audioResponseKey?: boolean
    createdAt?: boolean
    session?: boolean | SpeakingSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["speakingTurn"]>

  export type SpeakingTurnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    audioKey?: boolean
    audioDuration?: boolean
    transcript?: boolean
    grammarIssues?: boolean
    fluencyScore?: boolean
    pronunciationScore?: boolean
    overallScore?: boolean
    feedback?: boolean
    correctedText?: boolean
    hindiExplanation?: boolean
    audioResponseKey?: boolean
    createdAt?: boolean
    session?: boolean | SpeakingSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["speakingTurn"]>

  export type SpeakingTurnSelectScalar = {
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    audioKey?: boolean
    audioDuration?: boolean
    transcript?: boolean
    grammarIssues?: boolean
    fluencyScore?: boolean
    pronunciationScore?: boolean
    overallScore?: boolean
    feedback?: boolean
    correctedText?: boolean
    hindiExplanation?: boolean
    audioResponseKey?: boolean
    createdAt?: boolean
  }

  export type SpeakingTurnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SpeakingSessionDefaultArgs<ExtArgs>
  }
  export type SpeakingTurnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SpeakingSessionDefaultArgs<ExtArgs>
  }

  export type $SpeakingTurnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpeakingTurn"
    objects: {
      session: Prisma.$SpeakingSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      userId: string
      audioKey: string | null
      audioDuration: number | null
      transcript: string | null
      grammarIssues: Prisma.JsonValue | null
      fluencyScore: number | null
      pronunciationScore: number | null
      overallScore: number | null
      feedback: Prisma.JsonValue | null
      correctedText: string | null
      hindiExplanation: string | null
      audioResponseKey: string | null
      createdAt: Date
    }, ExtArgs["result"]["speakingTurn"]>
    composites: {}
  }

  type SpeakingTurnGetPayload<S extends boolean | null | undefined | SpeakingTurnDefaultArgs> = $Result.GetResult<Prisma.$SpeakingTurnPayload, S>

  type SpeakingTurnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpeakingTurnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpeakingTurnCountAggregateInputType | true
    }

  export interface SpeakingTurnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpeakingTurn'], meta: { name: 'SpeakingTurn' } }
    /**
     * Find zero or one SpeakingTurn that matches the filter.
     * @param {SpeakingTurnFindUniqueArgs} args - Arguments to find a SpeakingTurn
     * @example
     * // Get one SpeakingTurn
     * const speakingTurn = await prisma.speakingTurn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeakingTurnFindUniqueArgs>(args: SelectSubset<T, SpeakingTurnFindUniqueArgs<ExtArgs>>): Prisma__SpeakingTurnClient<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SpeakingTurn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpeakingTurnFindUniqueOrThrowArgs} args - Arguments to find a SpeakingTurn
     * @example
     * // Get one SpeakingTurn
     * const speakingTurn = await prisma.speakingTurn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeakingTurnFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeakingTurnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeakingTurnClient<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SpeakingTurn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingTurnFindFirstArgs} args - Arguments to find a SpeakingTurn
     * @example
     * // Get one SpeakingTurn
     * const speakingTurn = await prisma.speakingTurn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeakingTurnFindFirstArgs>(args?: SelectSubset<T, SpeakingTurnFindFirstArgs<ExtArgs>>): Prisma__SpeakingTurnClient<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SpeakingTurn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingTurnFindFirstOrThrowArgs} args - Arguments to find a SpeakingTurn
     * @example
     * // Get one SpeakingTurn
     * const speakingTurn = await prisma.speakingTurn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeakingTurnFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeakingTurnFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeakingTurnClient<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SpeakingTurns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingTurnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpeakingTurns
     * const speakingTurns = await prisma.speakingTurn.findMany()
     * 
     * // Get first 10 SpeakingTurns
     * const speakingTurns = await prisma.speakingTurn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speakingTurnWithIdOnly = await prisma.speakingTurn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeakingTurnFindManyArgs>(args?: SelectSubset<T, SpeakingTurnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SpeakingTurn.
     * @param {SpeakingTurnCreateArgs} args - Arguments to create a SpeakingTurn.
     * @example
     * // Create one SpeakingTurn
     * const SpeakingTurn = await prisma.speakingTurn.create({
     *   data: {
     *     // ... data to create a SpeakingTurn
     *   }
     * })
     * 
     */
    create<T extends SpeakingTurnCreateArgs>(args: SelectSubset<T, SpeakingTurnCreateArgs<ExtArgs>>): Prisma__SpeakingTurnClient<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SpeakingTurns.
     * @param {SpeakingTurnCreateManyArgs} args - Arguments to create many SpeakingTurns.
     * @example
     * // Create many SpeakingTurns
     * const speakingTurn = await prisma.speakingTurn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeakingTurnCreateManyArgs>(args?: SelectSubset<T, SpeakingTurnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpeakingTurns and returns the data saved in the database.
     * @param {SpeakingTurnCreateManyAndReturnArgs} args - Arguments to create many SpeakingTurns.
     * @example
     * // Create many SpeakingTurns
     * const speakingTurn = await prisma.speakingTurn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpeakingTurns and only return the `id`
     * const speakingTurnWithIdOnly = await prisma.speakingTurn.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpeakingTurnCreateManyAndReturnArgs>(args?: SelectSubset<T, SpeakingTurnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SpeakingTurn.
     * @param {SpeakingTurnDeleteArgs} args - Arguments to delete one SpeakingTurn.
     * @example
     * // Delete one SpeakingTurn
     * const SpeakingTurn = await prisma.speakingTurn.delete({
     *   where: {
     *     // ... filter to delete one SpeakingTurn
     *   }
     * })
     * 
     */
    delete<T extends SpeakingTurnDeleteArgs>(args: SelectSubset<T, SpeakingTurnDeleteArgs<ExtArgs>>): Prisma__SpeakingTurnClient<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SpeakingTurn.
     * @param {SpeakingTurnUpdateArgs} args - Arguments to update one SpeakingTurn.
     * @example
     * // Update one SpeakingTurn
     * const speakingTurn = await prisma.speakingTurn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeakingTurnUpdateArgs>(args: SelectSubset<T, SpeakingTurnUpdateArgs<ExtArgs>>): Prisma__SpeakingTurnClient<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SpeakingTurns.
     * @param {SpeakingTurnDeleteManyArgs} args - Arguments to filter SpeakingTurns to delete.
     * @example
     * // Delete a few SpeakingTurns
     * const { count } = await prisma.speakingTurn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeakingTurnDeleteManyArgs>(args?: SelectSubset<T, SpeakingTurnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeakingTurns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingTurnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpeakingTurns
     * const speakingTurn = await prisma.speakingTurn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeakingTurnUpdateManyArgs>(args: SelectSubset<T, SpeakingTurnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpeakingTurn.
     * @param {SpeakingTurnUpsertArgs} args - Arguments to update or create a SpeakingTurn.
     * @example
     * // Update or create a SpeakingTurn
     * const speakingTurn = await prisma.speakingTurn.upsert({
     *   create: {
     *     // ... data to create a SpeakingTurn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpeakingTurn we want to update
     *   }
     * })
     */
    upsert<T extends SpeakingTurnUpsertArgs>(args: SelectSubset<T, SpeakingTurnUpsertArgs<ExtArgs>>): Prisma__SpeakingTurnClient<$Result.GetResult<Prisma.$SpeakingTurnPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SpeakingTurns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingTurnCountArgs} args - Arguments to filter SpeakingTurns to count.
     * @example
     * // Count the number of SpeakingTurns
     * const count = await prisma.speakingTurn.count({
     *   where: {
     *     // ... the filter for the SpeakingTurns we want to count
     *   }
     * })
    **/
    count<T extends SpeakingTurnCountArgs>(
      args?: Subset<T, SpeakingTurnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeakingTurnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpeakingTurn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingTurnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpeakingTurnAggregateArgs>(args: Subset<T, SpeakingTurnAggregateArgs>): Prisma.PrismaPromise<GetSpeakingTurnAggregateType<T>>

    /**
     * Group by SpeakingTurn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakingTurnGroupByArgs} args - Group by arguments.
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
      T extends SpeakingTurnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeakingTurnGroupByArgs['orderBy'] }
        : { orderBy?: SpeakingTurnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpeakingTurnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeakingTurnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpeakingTurn model
   */
  readonly fields: SpeakingTurnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpeakingTurn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeakingTurnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SpeakingSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpeakingSessionDefaultArgs<ExtArgs>>): Prisma__SpeakingSessionClient<$Result.GetResult<Prisma.$SpeakingSessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SpeakingTurn model
   */ 
  interface SpeakingTurnFieldRefs {
    readonly id: FieldRef<"SpeakingTurn", 'String'>
    readonly sessionId: FieldRef<"SpeakingTurn", 'String'>
    readonly userId: FieldRef<"SpeakingTurn", 'String'>
    readonly audioKey: FieldRef<"SpeakingTurn", 'String'>
    readonly audioDuration: FieldRef<"SpeakingTurn", 'Float'>
    readonly transcript: FieldRef<"SpeakingTurn", 'String'>
    readonly grammarIssues: FieldRef<"SpeakingTurn", 'Json'>
    readonly fluencyScore: FieldRef<"SpeakingTurn", 'Float'>
    readonly pronunciationScore: FieldRef<"SpeakingTurn", 'Float'>
    readonly overallScore: FieldRef<"SpeakingTurn", 'Float'>
    readonly feedback: FieldRef<"SpeakingTurn", 'Json'>
    readonly correctedText: FieldRef<"SpeakingTurn", 'String'>
    readonly hindiExplanation: FieldRef<"SpeakingTurn", 'String'>
    readonly audioResponseKey: FieldRef<"SpeakingTurn", 'String'>
    readonly createdAt: FieldRef<"SpeakingTurn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpeakingTurn findUnique
   */
  export type SpeakingTurnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
    /**
     * Filter, which SpeakingTurn to fetch.
     */
    where: SpeakingTurnWhereUniqueInput
  }

  /**
   * SpeakingTurn findUniqueOrThrow
   */
  export type SpeakingTurnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
    /**
     * Filter, which SpeakingTurn to fetch.
     */
    where: SpeakingTurnWhereUniqueInput
  }

  /**
   * SpeakingTurn findFirst
   */
  export type SpeakingTurnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
    /**
     * Filter, which SpeakingTurn to fetch.
     */
    where?: SpeakingTurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakingTurns to fetch.
     */
    orderBy?: SpeakingTurnOrderByWithRelationInput | SpeakingTurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeakingTurns.
     */
    cursor?: SpeakingTurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakingTurns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakingTurns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeakingTurns.
     */
    distinct?: SpeakingTurnScalarFieldEnum | SpeakingTurnScalarFieldEnum[]
  }

  /**
   * SpeakingTurn findFirstOrThrow
   */
  export type SpeakingTurnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
    /**
     * Filter, which SpeakingTurn to fetch.
     */
    where?: SpeakingTurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakingTurns to fetch.
     */
    orderBy?: SpeakingTurnOrderByWithRelationInput | SpeakingTurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeakingTurns.
     */
    cursor?: SpeakingTurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakingTurns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakingTurns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeakingTurns.
     */
    distinct?: SpeakingTurnScalarFieldEnum | SpeakingTurnScalarFieldEnum[]
  }

  /**
   * SpeakingTurn findMany
   */
  export type SpeakingTurnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
    /**
     * Filter, which SpeakingTurns to fetch.
     */
    where?: SpeakingTurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakingTurns to fetch.
     */
    orderBy?: SpeakingTurnOrderByWithRelationInput | SpeakingTurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpeakingTurns.
     */
    cursor?: SpeakingTurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakingTurns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakingTurns.
     */
    skip?: number
    distinct?: SpeakingTurnScalarFieldEnum | SpeakingTurnScalarFieldEnum[]
  }

  /**
   * SpeakingTurn create
   */
  export type SpeakingTurnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
    /**
     * The data needed to create a SpeakingTurn.
     */
    data: XOR<SpeakingTurnCreateInput, SpeakingTurnUncheckedCreateInput>
  }

  /**
   * SpeakingTurn createMany
   */
  export type SpeakingTurnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpeakingTurns.
     */
    data: SpeakingTurnCreateManyInput | SpeakingTurnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeakingTurn createManyAndReturn
   */
  export type SpeakingTurnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SpeakingTurns.
     */
    data: SpeakingTurnCreateManyInput | SpeakingTurnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpeakingTurn update
   */
  export type SpeakingTurnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
    /**
     * The data needed to update a SpeakingTurn.
     */
    data: XOR<SpeakingTurnUpdateInput, SpeakingTurnUncheckedUpdateInput>
    /**
     * Choose, which SpeakingTurn to update.
     */
    where: SpeakingTurnWhereUniqueInput
  }

  /**
   * SpeakingTurn updateMany
   */
  export type SpeakingTurnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpeakingTurns.
     */
    data: XOR<SpeakingTurnUpdateManyMutationInput, SpeakingTurnUncheckedUpdateManyInput>
    /**
     * Filter which SpeakingTurns to update
     */
    where?: SpeakingTurnWhereInput
  }

  /**
   * SpeakingTurn upsert
   */
  export type SpeakingTurnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
    /**
     * The filter to search for the SpeakingTurn to update in case it exists.
     */
    where: SpeakingTurnWhereUniqueInput
    /**
     * In case the SpeakingTurn found by the `where` argument doesn't exist, create a new SpeakingTurn with this data.
     */
    create: XOR<SpeakingTurnCreateInput, SpeakingTurnUncheckedCreateInput>
    /**
     * In case the SpeakingTurn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeakingTurnUpdateInput, SpeakingTurnUncheckedUpdateInput>
  }

  /**
   * SpeakingTurn delete
   */
  export type SpeakingTurnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
    /**
     * Filter which SpeakingTurn to delete.
     */
    where: SpeakingTurnWhereUniqueInput
  }

  /**
   * SpeakingTurn deleteMany
   */
  export type SpeakingTurnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeakingTurns to delete
     */
    where?: SpeakingTurnWhereInput
  }

  /**
   * SpeakingTurn without action
   */
  export type SpeakingTurnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakingTurn
     */
    select?: SpeakingTurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpeakingTurnInclude<ExtArgs> | null
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


  export const SpeechJobScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    status: 'status',
    fileKey: 'fileKey',
    fileSize: 'fileSize',
    fileFormat: 'fileFormat',
    audioDuration: 'audioDuration',
    sampleRate: 'sampleRate',
    language: 'language',
    provider: 'provider',
    transcript: 'transcript',
    confidence: 'confidence',
    wordTimings: 'wordTimings',
    text: 'text',
    voice: 'voice',
    outputKey: 'outputKey',
    pronunciationScore: 'pronunciationScore',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completedAt: 'completedAt'
  };

  export type SpeechJobScalarFieldEnum = (typeof SpeechJobScalarFieldEnum)[keyof typeof SpeechJobScalarFieldEnum]


  export const AudioMetadataScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    speechJobId: 'speechJobId',
    fileKey: 'fileKey',
    fileName: 'fileName',
    fileSize: 'fileSize',
    fileFormat: 'fileFormat',
    sampleRate: 'sampleRate',
    audioDuration: 'audioDuration',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AudioMetadataScalarFieldEnum = (typeof AudioMetadataScalarFieldEnum)[keyof typeof AudioMetadataScalarFieldEnum]


  export const SpeakingSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    status: 'status',
    totalTurns: 'totalTurns',
    totalDuration: 'totalDuration',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpeakingSessionScalarFieldEnum = (typeof SpeakingSessionScalarFieldEnum)[keyof typeof SpeakingSessionScalarFieldEnum]


  export const SpeakingTurnScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId',
    audioKey: 'audioKey',
    audioDuration: 'audioDuration',
    transcript: 'transcript',
    grammarIssues: 'grammarIssues',
    fluencyScore: 'fluencyScore',
    pronunciationScore: 'pronunciationScore',
    overallScore: 'overallScore',
    feedback: 'feedback',
    correctedText: 'correctedText',
    hindiExplanation: 'hindiExplanation',
    audioResponseKey: 'audioResponseKey',
    createdAt: 'createdAt'
  };

  export type SpeakingTurnScalarFieldEnum = (typeof SpeakingTurnScalarFieldEnum)[keyof typeof SpeakingTurnScalarFieldEnum]


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
   * Reference to a field of type 'SpeechJobType'
   */
  export type EnumSpeechJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpeechJobType'>
    


  /**
   * Reference to a field of type 'SpeechJobType[]'
   */
  export type ListEnumSpeechJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpeechJobType[]'>
    


  /**
   * Reference to a field of type 'SpeechJobStatus'
   */
  export type EnumSpeechJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpeechJobStatus'>
    


  /**
   * Reference to a field of type 'SpeechJobStatus[]'
   */
  export type ListEnumSpeechJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpeechJobStatus[]'>
    


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
   * Deep Input Types
   */


  export type SpeechJobWhereInput = {
    AND?: SpeechJobWhereInput | SpeechJobWhereInput[]
    OR?: SpeechJobWhereInput[]
    NOT?: SpeechJobWhereInput | SpeechJobWhereInput[]
    id?: StringFilter<"SpeechJob"> | string
    userId?: StringFilter<"SpeechJob"> | string
    type?: EnumSpeechJobTypeFilter<"SpeechJob"> | $Enums.SpeechJobType
    status?: EnumSpeechJobStatusFilter<"SpeechJob"> | $Enums.SpeechJobStatus
    fileKey?: StringNullableFilter<"SpeechJob"> | string | null
    fileSize?: IntNullableFilter<"SpeechJob"> | number | null
    fileFormat?: StringNullableFilter<"SpeechJob"> | string | null
    audioDuration?: FloatNullableFilter<"SpeechJob"> | number | null
    sampleRate?: IntNullableFilter<"SpeechJob"> | number | null
    language?: StringFilter<"SpeechJob"> | string
    provider?: StringNullableFilter<"SpeechJob"> | string | null
    transcript?: StringNullableFilter<"SpeechJob"> | string | null
    confidence?: FloatNullableFilter<"SpeechJob"> | number | null
    wordTimings?: JsonNullableFilter<"SpeechJob">
    text?: StringNullableFilter<"SpeechJob"> | string | null
    voice?: StringNullableFilter<"SpeechJob"> | string | null
    outputKey?: StringNullableFilter<"SpeechJob"> | string | null
    pronunciationScore?: FloatNullableFilter<"SpeechJob"> | number | null
    errorMessage?: StringNullableFilter<"SpeechJob"> | string | null
    createdAt?: DateTimeFilter<"SpeechJob"> | Date | string
    updatedAt?: DateTimeFilter<"SpeechJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"SpeechJob"> | Date | string | null
    metadata?: AudioMetadataListRelationFilter
  }

  export type SpeechJobOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    fileKey?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    fileFormat?: SortOrderInput | SortOrder
    audioDuration?: SortOrderInput | SortOrder
    sampleRate?: SortOrderInput | SortOrder
    language?: SortOrder
    provider?: SortOrderInput | SortOrder
    transcript?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    wordTimings?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    voice?: SortOrderInput | SortOrder
    outputKey?: SortOrderInput | SortOrder
    pronunciationScore?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    metadata?: AudioMetadataOrderByRelationAggregateInput
  }

  export type SpeechJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpeechJobWhereInput | SpeechJobWhereInput[]
    OR?: SpeechJobWhereInput[]
    NOT?: SpeechJobWhereInput | SpeechJobWhereInput[]
    userId?: StringFilter<"SpeechJob"> | string
    type?: EnumSpeechJobTypeFilter<"SpeechJob"> | $Enums.SpeechJobType
    status?: EnumSpeechJobStatusFilter<"SpeechJob"> | $Enums.SpeechJobStatus
    fileKey?: StringNullableFilter<"SpeechJob"> | string | null
    fileSize?: IntNullableFilter<"SpeechJob"> | number | null
    fileFormat?: StringNullableFilter<"SpeechJob"> | string | null
    audioDuration?: FloatNullableFilter<"SpeechJob"> | number | null
    sampleRate?: IntNullableFilter<"SpeechJob"> | number | null
    language?: StringFilter<"SpeechJob"> | string
    provider?: StringNullableFilter<"SpeechJob"> | string | null
    transcript?: StringNullableFilter<"SpeechJob"> | string | null
    confidence?: FloatNullableFilter<"SpeechJob"> | number | null
    wordTimings?: JsonNullableFilter<"SpeechJob">
    text?: StringNullableFilter<"SpeechJob"> | string | null
    voice?: StringNullableFilter<"SpeechJob"> | string | null
    outputKey?: StringNullableFilter<"SpeechJob"> | string | null
    pronunciationScore?: FloatNullableFilter<"SpeechJob"> | number | null
    errorMessage?: StringNullableFilter<"SpeechJob"> | string | null
    createdAt?: DateTimeFilter<"SpeechJob"> | Date | string
    updatedAt?: DateTimeFilter<"SpeechJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"SpeechJob"> | Date | string | null
    metadata?: AudioMetadataListRelationFilter
  }, "id">

  export type SpeechJobOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    fileKey?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    fileFormat?: SortOrderInput | SortOrder
    audioDuration?: SortOrderInput | SortOrder
    sampleRate?: SortOrderInput | SortOrder
    language?: SortOrder
    provider?: SortOrderInput | SortOrder
    transcript?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    wordTimings?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    voice?: SortOrderInput | SortOrder
    outputKey?: SortOrderInput | SortOrder
    pronunciationScore?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: SpeechJobCountOrderByAggregateInput
    _avg?: SpeechJobAvgOrderByAggregateInput
    _max?: SpeechJobMaxOrderByAggregateInput
    _min?: SpeechJobMinOrderByAggregateInput
    _sum?: SpeechJobSumOrderByAggregateInput
  }

  export type SpeechJobScalarWhereWithAggregatesInput = {
    AND?: SpeechJobScalarWhereWithAggregatesInput | SpeechJobScalarWhereWithAggregatesInput[]
    OR?: SpeechJobScalarWhereWithAggregatesInput[]
    NOT?: SpeechJobScalarWhereWithAggregatesInput | SpeechJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpeechJob"> | string
    userId?: StringWithAggregatesFilter<"SpeechJob"> | string
    type?: EnumSpeechJobTypeWithAggregatesFilter<"SpeechJob"> | $Enums.SpeechJobType
    status?: EnumSpeechJobStatusWithAggregatesFilter<"SpeechJob"> | $Enums.SpeechJobStatus
    fileKey?: StringNullableWithAggregatesFilter<"SpeechJob"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"SpeechJob"> | number | null
    fileFormat?: StringNullableWithAggregatesFilter<"SpeechJob"> | string | null
    audioDuration?: FloatNullableWithAggregatesFilter<"SpeechJob"> | number | null
    sampleRate?: IntNullableWithAggregatesFilter<"SpeechJob"> | number | null
    language?: StringWithAggregatesFilter<"SpeechJob"> | string
    provider?: StringNullableWithAggregatesFilter<"SpeechJob"> | string | null
    transcript?: StringNullableWithAggregatesFilter<"SpeechJob"> | string | null
    confidence?: FloatNullableWithAggregatesFilter<"SpeechJob"> | number | null
    wordTimings?: JsonNullableWithAggregatesFilter<"SpeechJob">
    text?: StringNullableWithAggregatesFilter<"SpeechJob"> | string | null
    voice?: StringNullableWithAggregatesFilter<"SpeechJob"> | string | null
    outputKey?: StringNullableWithAggregatesFilter<"SpeechJob"> | string | null
    pronunciationScore?: FloatNullableWithAggregatesFilter<"SpeechJob"> | number | null
    errorMessage?: StringNullableWithAggregatesFilter<"SpeechJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SpeechJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpeechJob"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"SpeechJob"> | Date | string | null
  }

  export type AudioMetadataWhereInput = {
    AND?: AudioMetadataWhereInput | AudioMetadataWhereInput[]
    OR?: AudioMetadataWhereInput[]
    NOT?: AudioMetadataWhereInput | AudioMetadataWhereInput[]
    id?: StringFilter<"AudioMetadata"> | string
    userId?: StringFilter<"AudioMetadata"> | string
    speechJobId?: StringNullableFilter<"AudioMetadata"> | string | null
    fileKey?: StringFilter<"AudioMetadata"> | string
    fileName?: StringFilter<"AudioMetadata"> | string
    fileSize?: IntFilter<"AudioMetadata"> | number
    fileFormat?: StringFilter<"AudioMetadata"> | string
    sampleRate?: IntFilter<"AudioMetadata"> | number
    audioDuration?: FloatFilter<"AudioMetadata"> | number
    metadata?: JsonNullableFilter<"AudioMetadata">
    createdAt?: DateTimeFilter<"AudioMetadata"> | Date | string
    speechJob?: XOR<SpeechJobNullableRelationFilter, SpeechJobWhereInput> | null
  }

  export type AudioMetadataOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    speechJobId?: SortOrderInput | SortOrder
    fileKey?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    sampleRate?: SortOrder
    audioDuration?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    speechJob?: SpeechJobOrderByWithRelationInput
  }

  export type AudioMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudioMetadataWhereInput | AudioMetadataWhereInput[]
    OR?: AudioMetadataWhereInput[]
    NOT?: AudioMetadataWhereInput | AudioMetadataWhereInput[]
    userId?: StringFilter<"AudioMetadata"> | string
    speechJobId?: StringNullableFilter<"AudioMetadata"> | string | null
    fileKey?: StringFilter<"AudioMetadata"> | string
    fileName?: StringFilter<"AudioMetadata"> | string
    fileSize?: IntFilter<"AudioMetadata"> | number
    fileFormat?: StringFilter<"AudioMetadata"> | string
    sampleRate?: IntFilter<"AudioMetadata"> | number
    audioDuration?: FloatFilter<"AudioMetadata"> | number
    metadata?: JsonNullableFilter<"AudioMetadata">
    createdAt?: DateTimeFilter<"AudioMetadata"> | Date | string
    speechJob?: XOR<SpeechJobNullableRelationFilter, SpeechJobWhereInput> | null
  }, "id">

  export type AudioMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    speechJobId?: SortOrderInput | SortOrder
    fileKey?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    sampleRate?: SortOrder
    audioDuration?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AudioMetadataCountOrderByAggregateInput
    _avg?: AudioMetadataAvgOrderByAggregateInput
    _max?: AudioMetadataMaxOrderByAggregateInput
    _min?: AudioMetadataMinOrderByAggregateInput
    _sum?: AudioMetadataSumOrderByAggregateInput
  }

  export type AudioMetadataScalarWhereWithAggregatesInput = {
    AND?: AudioMetadataScalarWhereWithAggregatesInput | AudioMetadataScalarWhereWithAggregatesInput[]
    OR?: AudioMetadataScalarWhereWithAggregatesInput[]
    NOT?: AudioMetadataScalarWhereWithAggregatesInput | AudioMetadataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudioMetadata"> | string
    userId?: StringWithAggregatesFilter<"AudioMetadata"> | string
    speechJobId?: StringNullableWithAggregatesFilter<"AudioMetadata"> | string | null
    fileKey?: StringWithAggregatesFilter<"AudioMetadata"> | string
    fileName?: StringWithAggregatesFilter<"AudioMetadata"> | string
    fileSize?: IntWithAggregatesFilter<"AudioMetadata"> | number
    fileFormat?: StringWithAggregatesFilter<"AudioMetadata"> | string
    sampleRate?: IntWithAggregatesFilter<"AudioMetadata"> | number
    audioDuration?: FloatWithAggregatesFilter<"AudioMetadata"> | number
    metadata?: JsonNullableWithAggregatesFilter<"AudioMetadata">
    createdAt?: DateTimeWithAggregatesFilter<"AudioMetadata"> | Date | string
  }

  export type SpeakingSessionWhereInput = {
    AND?: SpeakingSessionWhereInput | SpeakingSessionWhereInput[]
    OR?: SpeakingSessionWhereInput[]
    NOT?: SpeakingSessionWhereInput | SpeakingSessionWhereInput[]
    id?: StringFilter<"SpeakingSession"> | string
    userId?: StringFilter<"SpeakingSession"> | string
    title?: StringNullableFilter<"SpeakingSession"> | string | null
    status?: StringFilter<"SpeakingSession"> | string
    totalTurns?: IntFilter<"SpeakingSession"> | number
    totalDuration?: IntFilter<"SpeakingSession"> | number
    completedAt?: DateTimeNullableFilter<"SpeakingSession"> | Date | string | null
    createdAt?: DateTimeFilter<"SpeakingSession"> | Date | string
    updatedAt?: DateTimeFilter<"SpeakingSession"> | Date | string
    turns?: SpeakingTurnListRelationFilter
  }

  export type SpeakingSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    totalTurns?: SortOrder
    totalDuration?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    turns?: SpeakingTurnOrderByRelationAggregateInput
  }

  export type SpeakingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpeakingSessionWhereInput | SpeakingSessionWhereInput[]
    OR?: SpeakingSessionWhereInput[]
    NOT?: SpeakingSessionWhereInput | SpeakingSessionWhereInput[]
    userId?: StringFilter<"SpeakingSession"> | string
    title?: StringNullableFilter<"SpeakingSession"> | string | null
    status?: StringFilter<"SpeakingSession"> | string
    totalTurns?: IntFilter<"SpeakingSession"> | number
    totalDuration?: IntFilter<"SpeakingSession"> | number
    completedAt?: DateTimeNullableFilter<"SpeakingSession"> | Date | string | null
    createdAt?: DateTimeFilter<"SpeakingSession"> | Date | string
    updatedAt?: DateTimeFilter<"SpeakingSession"> | Date | string
    turns?: SpeakingTurnListRelationFilter
  }, "id">

  export type SpeakingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    totalTurns?: SortOrder
    totalDuration?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpeakingSessionCountOrderByAggregateInput
    _avg?: SpeakingSessionAvgOrderByAggregateInput
    _max?: SpeakingSessionMaxOrderByAggregateInput
    _min?: SpeakingSessionMinOrderByAggregateInput
    _sum?: SpeakingSessionSumOrderByAggregateInput
  }

  export type SpeakingSessionScalarWhereWithAggregatesInput = {
    AND?: SpeakingSessionScalarWhereWithAggregatesInput | SpeakingSessionScalarWhereWithAggregatesInput[]
    OR?: SpeakingSessionScalarWhereWithAggregatesInput[]
    NOT?: SpeakingSessionScalarWhereWithAggregatesInput | SpeakingSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpeakingSession"> | string
    userId?: StringWithAggregatesFilter<"SpeakingSession"> | string
    title?: StringNullableWithAggregatesFilter<"SpeakingSession"> | string | null
    status?: StringWithAggregatesFilter<"SpeakingSession"> | string
    totalTurns?: IntWithAggregatesFilter<"SpeakingSession"> | number
    totalDuration?: IntWithAggregatesFilter<"SpeakingSession"> | number
    completedAt?: DateTimeNullableWithAggregatesFilter<"SpeakingSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SpeakingSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpeakingSession"> | Date | string
  }

  export type SpeakingTurnWhereInput = {
    AND?: SpeakingTurnWhereInput | SpeakingTurnWhereInput[]
    OR?: SpeakingTurnWhereInput[]
    NOT?: SpeakingTurnWhereInput | SpeakingTurnWhereInput[]
    id?: StringFilter<"SpeakingTurn"> | string
    sessionId?: StringFilter<"SpeakingTurn"> | string
    userId?: StringFilter<"SpeakingTurn"> | string
    audioKey?: StringNullableFilter<"SpeakingTurn"> | string | null
    audioDuration?: FloatNullableFilter<"SpeakingTurn"> | number | null
    transcript?: StringNullableFilter<"SpeakingTurn"> | string | null
    grammarIssues?: JsonNullableFilter<"SpeakingTurn">
    fluencyScore?: FloatNullableFilter<"SpeakingTurn"> | number | null
    pronunciationScore?: FloatNullableFilter<"SpeakingTurn"> | number | null
    overallScore?: FloatNullableFilter<"SpeakingTurn"> | number | null
    feedback?: JsonNullableFilter<"SpeakingTurn">
    correctedText?: StringNullableFilter<"SpeakingTurn"> | string | null
    hindiExplanation?: StringNullableFilter<"SpeakingTurn"> | string | null
    audioResponseKey?: StringNullableFilter<"SpeakingTurn"> | string | null
    createdAt?: DateTimeFilter<"SpeakingTurn"> | Date | string
    session?: XOR<SpeakingSessionRelationFilter, SpeakingSessionWhereInput>
  }

  export type SpeakingTurnOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    audioKey?: SortOrderInput | SortOrder
    audioDuration?: SortOrderInput | SortOrder
    transcript?: SortOrderInput | SortOrder
    grammarIssues?: SortOrderInput | SortOrder
    fluencyScore?: SortOrderInput | SortOrder
    pronunciationScore?: SortOrderInput | SortOrder
    overallScore?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    correctedText?: SortOrderInput | SortOrder
    hindiExplanation?: SortOrderInput | SortOrder
    audioResponseKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    session?: SpeakingSessionOrderByWithRelationInput
  }

  export type SpeakingTurnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpeakingTurnWhereInput | SpeakingTurnWhereInput[]
    OR?: SpeakingTurnWhereInput[]
    NOT?: SpeakingTurnWhereInput | SpeakingTurnWhereInput[]
    sessionId?: StringFilter<"SpeakingTurn"> | string
    userId?: StringFilter<"SpeakingTurn"> | string
    audioKey?: StringNullableFilter<"SpeakingTurn"> | string | null
    audioDuration?: FloatNullableFilter<"SpeakingTurn"> | number | null
    transcript?: StringNullableFilter<"SpeakingTurn"> | string | null
    grammarIssues?: JsonNullableFilter<"SpeakingTurn">
    fluencyScore?: FloatNullableFilter<"SpeakingTurn"> | number | null
    pronunciationScore?: FloatNullableFilter<"SpeakingTurn"> | number | null
    overallScore?: FloatNullableFilter<"SpeakingTurn"> | number | null
    feedback?: JsonNullableFilter<"SpeakingTurn">
    correctedText?: StringNullableFilter<"SpeakingTurn"> | string | null
    hindiExplanation?: StringNullableFilter<"SpeakingTurn"> | string | null
    audioResponseKey?: StringNullableFilter<"SpeakingTurn"> | string | null
    createdAt?: DateTimeFilter<"SpeakingTurn"> | Date | string
    session?: XOR<SpeakingSessionRelationFilter, SpeakingSessionWhereInput>
  }, "id">

  export type SpeakingTurnOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    audioKey?: SortOrderInput | SortOrder
    audioDuration?: SortOrderInput | SortOrder
    transcript?: SortOrderInput | SortOrder
    grammarIssues?: SortOrderInput | SortOrder
    fluencyScore?: SortOrderInput | SortOrder
    pronunciationScore?: SortOrderInput | SortOrder
    overallScore?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    correctedText?: SortOrderInput | SortOrder
    hindiExplanation?: SortOrderInput | SortOrder
    audioResponseKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SpeakingTurnCountOrderByAggregateInput
    _avg?: SpeakingTurnAvgOrderByAggregateInput
    _max?: SpeakingTurnMaxOrderByAggregateInput
    _min?: SpeakingTurnMinOrderByAggregateInput
    _sum?: SpeakingTurnSumOrderByAggregateInput
  }

  export type SpeakingTurnScalarWhereWithAggregatesInput = {
    AND?: SpeakingTurnScalarWhereWithAggregatesInput | SpeakingTurnScalarWhereWithAggregatesInput[]
    OR?: SpeakingTurnScalarWhereWithAggregatesInput[]
    NOT?: SpeakingTurnScalarWhereWithAggregatesInput | SpeakingTurnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpeakingTurn"> | string
    sessionId?: StringWithAggregatesFilter<"SpeakingTurn"> | string
    userId?: StringWithAggregatesFilter<"SpeakingTurn"> | string
    audioKey?: StringNullableWithAggregatesFilter<"SpeakingTurn"> | string | null
    audioDuration?: FloatNullableWithAggregatesFilter<"SpeakingTurn"> | number | null
    transcript?: StringNullableWithAggregatesFilter<"SpeakingTurn"> | string | null
    grammarIssues?: JsonNullableWithAggregatesFilter<"SpeakingTurn">
    fluencyScore?: FloatNullableWithAggregatesFilter<"SpeakingTurn"> | number | null
    pronunciationScore?: FloatNullableWithAggregatesFilter<"SpeakingTurn"> | number | null
    overallScore?: FloatNullableWithAggregatesFilter<"SpeakingTurn"> | number | null
    feedback?: JsonNullableWithAggregatesFilter<"SpeakingTurn">
    correctedText?: StringNullableWithAggregatesFilter<"SpeakingTurn"> | string | null
    hindiExplanation?: StringNullableWithAggregatesFilter<"SpeakingTurn"> | string | null
    audioResponseKey?: StringNullableWithAggregatesFilter<"SpeakingTurn"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SpeakingTurn"> | Date | string
  }

  export type SpeechJobCreateInput = {
    id?: string
    userId: string
    type: $Enums.SpeechJobType
    status?: $Enums.SpeechJobStatus
    fileKey?: string | null
    fileSize?: number | null
    fileFormat?: string | null
    audioDuration?: number | null
    sampleRate?: number | null
    language?: string
    provider?: string | null
    transcript?: string | null
    confidence?: number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    voice?: string | null
    outputKey?: string | null
    pronunciationScore?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    metadata?: AudioMetadataCreateNestedManyWithoutSpeechJobInput
  }

  export type SpeechJobUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.SpeechJobType
    status?: $Enums.SpeechJobStatus
    fileKey?: string | null
    fileSize?: number | null
    fileFormat?: string | null
    audioDuration?: number | null
    sampleRate?: number | null
    language?: string
    provider?: string | null
    transcript?: string | null
    confidence?: number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    voice?: string | null
    outputKey?: string | null
    pronunciationScore?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    metadata?: AudioMetadataUncheckedCreateNestedManyWithoutSpeechJobInput
  }

  export type SpeechJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSpeechJobTypeFieldUpdateOperationsInput | $Enums.SpeechJobType
    status?: EnumSpeechJobStatusFieldUpdateOperationsInput | $Enums.SpeechJobStatus
    fileKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileFormat?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    voice?: NullableStringFieldUpdateOperationsInput | string | null
    outputKey?: NullableStringFieldUpdateOperationsInput | string | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: AudioMetadataUpdateManyWithoutSpeechJobNestedInput
  }

  export type SpeechJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSpeechJobTypeFieldUpdateOperationsInput | $Enums.SpeechJobType
    status?: EnumSpeechJobStatusFieldUpdateOperationsInput | $Enums.SpeechJobStatus
    fileKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileFormat?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    voice?: NullableStringFieldUpdateOperationsInput | string | null
    outputKey?: NullableStringFieldUpdateOperationsInput | string | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: AudioMetadataUncheckedUpdateManyWithoutSpeechJobNestedInput
  }

  export type SpeechJobCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.SpeechJobType
    status?: $Enums.SpeechJobStatus
    fileKey?: string | null
    fileSize?: number | null
    fileFormat?: string | null
    audioDuration?: number | null
    sampleRate?: number | null
    language?: string
    provider?: string | null
    transcript?: string | null
    confidence?: number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    voice?: string | null
    outputKey?: string | null
    pronunciationScore?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type SpeechJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSpeechJobTypeFieldUpdateOperationsInput | $Enums.SpeechJobType
    status?: EnumSpeechJobStatusFieldUpdateOperationsInput | $Enums.SpeechJobStatus
    fileKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileFormat?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    voice?: NullableStringFieldUpdateOperationsInput | string | null
    outputKey?: NullableStringFieldUpdateOperationsInput | string | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SpeechJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSpeechJobTypeFieldUpdateOperationsInput | $Enums.SpeechJobType
    status?: EnumSpeechJobStatusFieldUpdateOperationsInput | $Enums.SpeechJobStatus
    fileKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileFormat?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    voice?: NullableStringFieldUpdateOperationsInput | string | null
    outputKey?: NullableStringFieldUpdateOperationsInput | string | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AudioMetadataCreateInput = {
    id?: string
    userId: string
    fileKey: string
    fileName: string
    fileSize: number
    fileFormat: string
    sampleRate: number
    audioDuration: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    speechJob?: SpeechJobCreateNestedOneWithoutMetadataInput
  }

  export type AudioMetadataUncheckedCreateInput = {
    id?: string
    userId: string
    speechJobId?: string | null
    fileKey: string
    fileName: string
    fileSize: number
    fileFormat: string
    sampleRate: number
    audioDuration: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AudioMetadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileFormat?: StringFieldUpdateOperationsInput | string
    sampleRate?: IntFieldUpdateOperationsInput | number
    audioDuration?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    speechJob?: SpeechJobUpdateOneWithoutMetadataNestedInput
  }

  export type AudioMetadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    speechJobId?: NullableStringFieldUpdateOperationsInput | string | null
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileFormat?: StringFieldUpdateOperationsInput | string
    sampleRate?: IntFieldUpdateOperationsInput | number
    audioDuration?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioMetadataCreateManyInput = {
    id?: string
    userId: string
    speechJobId?: string | null
    fileKey: string
    fileName: string
    fileSize: number
    fileFormat: string
    sampleRate: number
    audioDuration: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AudioMetadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileFormat?: StringFieldUpdateOperationsInput | string
    sampleRate?: IntFieldUpdateOperationsInput | number
    audioDuration?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioMetadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    speechJobId?: NullableStringFieldUpdateOperationsInput | string | null
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileFormat?: StringFieldUpdateOperationsInput | string
    sampleRate?: IntFieldUpdateOperationsInput | number
    audioDuration?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakingSessionCreateInput = {
    id?: string
    userId: string
    title?: string | null
    status?: string
    totalTurns?: number
    totalDuration?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    turns?: SpeakingTurnCreateNestedManyWithoutSessionInput
  }

  export type SpeakingSessionUncheckedCreateInput = {
    id?: string
    userId: string
    title?: string | null
    status?: string
    totalTurns?: number
    totalDuration?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    turns?: SpeakingTurnUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SpeakingSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalTurns?: IntFieldUpdateOperationsInput | number
    totalDuration?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turns?: SpeakingTurnUpdateManyWithoutSessionNestedInput
  }

  export type SpeakingSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalTurns?: IntFieldUpdateOperationsInput | number
    totalDuration?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    turns?: SpeakingTurnUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SpeakingSessionCreateManyInput = {
    id?: string
    userId: string
    title?: string | null
    status?: string
    totalTurns?: number
    totalDuration?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakingSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalTurns?: IntFieldUpdateOperationsInput | number
    totalDuration?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakingSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalTurns?: IntFieldUpdateOperationsInput | number
    totalDuration?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakingTurnCreateInput = {
    id?: string
    userId: string
    audioKey?: string | null
    audioDuration?: number | null
    transcript?: string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: number | null
    pronunciationScore?: number | null
    overallScore?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: string | null
    hindiExplanation?: string | null
    audioResponseKey?: string | null
    createdAt?: Date | string
    session: SpeakingSessionCreateNestedOneWithoutTurnsInput
  }

  export type SpeakingTurnUncheckedCreateInput = {
    id?: string
    sessionId: string
    userId: string
    audioKey?: string | null
    audioDuration?: number | null
    transcript?: string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: number | null
    pronunciationScore?: number | null
    overallScore?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: string | null
    hindiExplanation?: string | null
    audioResponseKey?: string | null
    createdAt?: Date | string
  }

  export type SpeakingTurnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    audioKey?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: NullableStringFieldUpdateOperationsInput | string | null
    hindiExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SpeakingSessionUpdateOneRequiredWithoutTurnsNestedInput
  }

  export type SpeakingTurnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    audioKey?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: NullableStringFieldUpdateOperationsInput | string | null
    hindiExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakingTurnCreateManyInput = {
    id?: string
    sessionId: string
    userId: string
    audioKey?: string | null
    audioDuration?: number | null
    transcript?: string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: number | null
    pronunciationScore?: number | null
    overallScore?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: string | null
    hindiExplanation?: string | null
    audioResponseKey?: string | null
    createdAt?: Date | string
  }

  export type SpeakingTurnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    audioKey?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: NullableStringFieldUpdateOperationsInput | string | null
    hindiExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakingTurnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    audioKey?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: NullableStringFieldUpdateOperationsInput | string | null
    hindiExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseKey?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumSpeechJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeechJobType | EnumSpeechJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpeechJobType[] | ListEnumSpeechJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeechJobType[] | ListEnumSpeechJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeechJobTypeFilter<$PrismaModel> | $Enums.SpeechJobType
  }

  export type EnumSpeechJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeechJobStatus | EnumSpeechJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SpeechJobStatus[] | ListEnumSpeechJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeechJobStatus[] | ListEnumSpeechJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeechJobStatusFilter<$PrismaModel> | $Enums.SpeechJobStatus
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

  export type AudioMetadataListRelationFilter = {
    every?: AudioMetadataWhereInput
    some?: AudioMetadataWhereInput
    none?: AudioMetadataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AudioMetadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpeechJobCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    fileKey?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    audioDuration?: SortOrder
    sampleRate?: SortOrder
    language?: SortOrder
    provider?: SortOrder
    transcript?: SortOrder
    confidence?: SortOrder
    wordTimings?: SortOrder
    text?: SortOrder
    voice?: SortOrder
    outputKey?: SortOrder
    pronunciationScore?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type SpeechJobAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    audioDuration?: SortOrder
    sampleRate?: SortOrder
    confidence?: SortOrder
    pronunciationScore?: SortOrder
  }

  export type SpeechJobMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    fileKey?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    audioDuration?: SortOrder
    sampleRate?: SortOrder
    language?: SortOrder
    provider?: SortOrder
    transcript?: SortOrder
    confidence?: SortOrder
    text?: SortOrder
    voice?: SortOrder
    outputKey?: SortOrder
    pronunciationScore?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type SpeechJobMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    fileKey?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    audioDuration?: SortOrder
    sampleRate?: SortOrder
    language?: SortOrder
    provider?: SortOrder
    transcript?: SortOrder
    confidence?: SortOrder
    text?: SortOrder
    voice?: SortOrder
    outputKey?: SortOrder
    pronunciationScore?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type SpeechJobSumOrderByAggregateInput = {
    fileSize?: SortOrder
    audioDuration?: SortOrder
    sampleRate?: SortOrder
    confidence?: SortOrder
    pronunciationScore?: SortOrder
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

  export type EnumSpeechJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeechJobType | EnumSpeechJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpeechJobType[] | ListEnumSpeechJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeechJobType[] | ListEnumSpeechJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeechJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.SpeechJobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeechJobTypeFilter<$PrismaModel>
    _max?: NestedEnumSpeechJobTypeFilter<$PrismaModel>
  }

  export type EnumSpeechJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeechJobStatus | EnumSpeechJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SpeechJobStatus[] | ListEnumSpeechJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeechJobStatus[] | ListEnumSpeechJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeechJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.SpeechJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeechJobStatusFilter<$PrismaModel>
    _max?: NestedEnumSpeechJobStatusFilter<$PrismaModel>
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

  export type SpeechJobNullableRelationFilter = {
    is?: SpeechJobWhereInput | null
    isNot?: SpeechJobWhereInput | null
  }

  export type AudioMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speechJobId?: SortOrder
    fileKey?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    sampleRate?: SortOrder
    audioDuration?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioMetadataAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    sampleRate?: SortOrder
    audioDuration?: SortOrder
  }

  export type AudioMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speechJobId?: SortOrder
    fileKey?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    sampleRate?: SortOrder
    audioDuration?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speechJobId?: SortOrder
    fileKey?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    fileFormat?: SortOrder
    sampleRate?: SortOrder
    audioDuration?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioMetadataSumOrderByAggregateInput = {
    fileSize?: SortOrder
    sampleRate?: SortOrder
    audioDuration?: SortOrder
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

  export type SpeakingTurnListRelationFilter = {
    every?: SpeakingTurnWhereInput
    some?: SpeakingTurnWhereInput
    none?: SpeakingTurnWhereInput
  }

  export type SpeakingTurnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpeakingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    totalTurns?: SortOrder
    totalDuration?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakingSessionAvgOrderByAggregateInput = {
    totalTurns?: SortOrder
    totalDuration?: SortOrder
  }

  export type SpeakingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    totalTurns?: SortOrder
    totalDuration?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    totalTurns?: SortOrder
    totalDuration?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakingSessionSumOrderByAggregateInput = {
    totalTurns?: SortOrder
    totalDuration?: SortOrder
  }

  export type SpeakingSessionRelationFilter = {
    is?: SpeakingSessionWhereInput
    isNot?: SpeakingSessionWhereInput
  }

  export type SpeakingTurnCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    audioKey?: SortOrder
    audioDuration?: SortOrder
    transcript?: SortOrder
    grammarIssues?: SortOrder
    fluencyScore?: SortOrder
    pronunciationScore?: SortOrder
    overallScore?: SortOrder
    feedback?: SortOrder
    correctedText?: SortOrder
    hindiExplanation?: SortOrder
    audioResponseKey?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeakingTurnAvgOrderByAggregateInput = {
    audioDuration?: SortOrder
    fluencyScore?: SortOrder
    pronunciationScore?: SortOrder
    overallScore?: SortOrder
  }

  export type SpeakingTurnMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    audioKey?: SortOrder
    audioDuration?: SortOrder
    transcript?: SortOrder
    fluencyScore?: SortOrder
    pronunciationScore?: SortOrder
    overallScore?: SortOrder
    correctedText?: SortOrder
    hindiExplanation?: SortOrder
    audioResponseKey?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeakingTurnMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    audioKey?: SortOrder
    audioDuration?: SortOrder
    transcript?: SortOrder
    fluencyScore?: SortOrder
    pronunciationScore?: SortOrder
    overallScore?: SortOrder
    correctedText?: SortOrder
    hindiExplanation?: SortOrder
    audioResponseKey?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeakingTurnSumOrderByAggregateInput = {
    audioDuration?: SortOrder
    fluencyScore?: SortOrder
    pronunciationScore?: SortOrder
    overallScore?: SortOrder
  }

  export type AudioMetadataCreateNestedManyWithoutSpeechJobInput = {
    create?: XOR<AudioMetadataCreateWithoutSpeechJobInput, AudioMetadataUncheckedCreateWithoutSpeechJobInput> | AudioMetadataCreateWithoutSpeechJobInput[] | AudioMetadataUncheckedCreateWithoutSpeechJobInput[]
    connectOrCreate?: AudioMetadataCreateOrConnectWithoutSpeechJobInput | AudioMetadataCreateOrConnectWithoutSpeechJobInput[]
    createMany?: AudioMetadataCreateManySpeechJobInputEnvelope
    connect?: AudioMetadataWhereUniqueInput | AudioMetadataWhereUniqueInput[]
  }

  export type AudioMetadataUncheckedCreateNestedManyWithoutSpeechJobInput = {
    create?: XOR<AudioMetadataCreateWithoutSpeechJobInput, AudioMetadataUncheckedCreateWithoutSpeechJobInput> | AudioMetadataCreateWithoutSpeechJobInput[] | AudioMetadataUncheckedCreateWithoutSpeechJobInput[]
    connectOrCreate?: AudioMetadataCreateOrConnectWithoutSpeechJobInput | AudioMetadataCreateOrConnectWithoutSpeechJobInput[]
    createMany?: AudioMetadataCreateManySpeechJobInputEnvelope
    connect?: AudioMetadataWhereUniqueInput | AudioMetadataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSpeechJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.SpeechJobType
  }

  export type EnumSpeechJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.SpeechJobStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AudioMetadataUpdateManyWithoutSpeechJobNestedInput = {
    create?: XOR<AudioMetadataCreateWithoutSpeechJobInput, AudioMetadataUncheckedCreateWithoutSpeechJobInput> | AudioMetadataCreateWithoutSpeechJobInput[] | AudioMetadataUncheckedCreateWithoutSpeechJobInput[]
    connectOrCreate?: AudioMetadataCreateOrConnectWithoutSpeechJobInput | AudioMetadataCreateOrConnectWithoutSpeechJobInput[]
    upsert?: AudioMetadataUpsertWithWhereUniqueWithoutSpeechJobInput | AudioMetadataUpsertWithWhereUniqueWithoutSpeechJobInput[]
    createMany?: AudioMetadataCreateManySpeechJobInputEnvelope
    set?: AudioMetadataWhereUniqueInput | AudioMetadataWhereUniqueInput[]
    disconnect?: AudioMetadataWhereUniqueInput | AudioMetadataWhereUniqueInput[]
    delete?: AudioMetadataWhereUniqueInput | AudioMetadataWhereUniqueInput[]
    connect?: AudioMetadataWhereUniqueInput | AudioMetadataWhereUniqueInput[]
    update?: AudioMetadataUpdateWithWhereUniqueWithoutSpeechJobInput | AudioMetadataUpdateWithWhereUniqueWithoutSpeechJobInput[]
    updateMany?: AudioMetadataUpdateManyWithWhereWithoutSpeechJobInput | AudioMetadataUpdateManyWithWhereWithoutSpeechJobInput[]
    deleteMany?: AudioMetadataScalarWhereInput | AudioMetadataScalarWhereInput[]
  }

  export type AudioMetadataUncheckedUpdateManyWithoutSpeechJobNestedInput = {
    create?: XOR<AudioMetadataCreateWithoutSpeechJobInput, AudioMetadataUncheckedCreateWithoutSpeechJobInput> | AudioMetadataCreateWithoutSpeechJobInput[] | AudioMetadataUncheckedCreateWithoutSpeechJobInput[]
    connectOrCreate?: AudioMetadataCreateOrConnectWithoutSpeechJobInput | AudioMetadataCreateOrConnectWithoutSpeechJobInput[]
    upsert?: AudioMetadataUpsertWithWhereUniqueWithoutSpeechJobInput | AudioMetadataUpsertWithWhereUniqueWithoutSpeechJobInput[]
    createMany?: AudioMetadataCreateManySpeechJobInputEnvelope
    set?: AudioMetadataWhereUniqueInput | AudioMetadataWhereUniqueInput[]
    disconnect?: AudioMetadataWhereUniqueInput | AudioMetadataWhereUniqueInput[]
    delete?: AudioMetadataWhereUniqueInput | AudioMetadataWhereUniqueInput[]
    connect?: AudioMetadataWhereUniqueInput | AudioMetadataWhereUniqueInput[]
    update?: AudioMetadataUpdateWithWhereUniqueWithoutSpeechJobInput | AudioMetadataUpdateWithWhereUniqueWithoutSpeechJobInput[]
    updateMany?: AudioMetadataUpdateManyWithWhereWithoutSpeechJobInput | AudioMetadataUpdateManyWithWhereWithoutSpeechJobInput[]
    deleteMany?: AudioMetadataScalarWhereInput | AudioMetadataScalarWhereInput[]
  }

  export type SpeechJobCreateNestedOneWithoutMetadataInput = {
    create?: XOR<SpeechJobCreateWithoutMetadataInput, SpeechJobUncheckedCreateWithoutMetadataInput>
    connectOrCreate?: SpeechJobCreateOrConnectWithoutMetadataInput
    connect?: SpeechJobWhereUniqueInput
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

  export type SpeechJobUpdateOneWithoutMetadataNestedInput = {
    create?: XOR<SpeechJobCreateWithoutMetadataInput, SpeechJobUncheckedCreateWithoutMetadataInput>
    connectOrCreate?: SpeechJobCreateOrConnectWithoutMetadataInput
    upsert?: SpeechJobUpsertWithoutMetadataInput
    disconnect?: SpeechJobWhereInput | boolean
    delete?: SpeechJobWhereInput | boolean
    connect?: SpeechJobWhereUniqueInput
    update?: XOR<XOR<SpeechJobUpdateToOneWithWhereWithoutMetadataInput, SpeechJobUpdateWithoutMetadataInput>, SpeechJobUncheckedUpdateWithoutMetadataInput>
  }

  export type SpeakingTurnCreateNestedManyWithoutSessionInput = {
    create?: XOR<SpeakingTurnCreateWithoutSessionInput, SpeakingTurnUncheckedCreateWithoutSessionInput> | SpeakingTurnCreateWithoutSessionInput[] | SpeakingTurnUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SpeakingTurnCreateOrConnectWithoutSessionInput | SpeakingTurnCreateOrConnectWithoutSessionInput[]
    createMany?: SpeakingTurnCreateManySessionInputEnvelope
    connect?: SpeakingTurnWhereUniqueInput | SpeakingTurnWhereUniqueInput[]
  }

  export type SpeakingTurnUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SpeakingTurnCreateWithoutSessionInput, SpeakingTurnUncheckedCreateWithoutSessionInput> | SpeakingTurnCreateWithoutSessionInput[] | SpeakingTurnUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SpeakingTurnCreateOrConnectWithoutSessionInput | SpeakingTurnCreateOrConnectWithoutSessionInput[]
    createMany?: SpeakingTurnCreateManySessionInputEnvelope
    connect?: SpeakingTurnWhereUniqueInput | SpeakingTurnWhereUniqueInput[]
  }

  export type SpeakingTurnUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SpeakingTurnCreateWithoutSessionInput, SpeakingTurnUncheckedCreateWithoutSessionInput> | SpeakingTurnCreateWithoutSessionInput[] | SpeakingTurnUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SpeakingTurnCreateOrConnectWithoutSessionInput | SpeakingTurnCreateOrConnectWithoutSessionInput[]
    upsert?: SpeakingTurnUpsertWithWhereUniqueWithoutSessionInput | SpeakingTurnUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SpeakingTurnCreateManySessionInputEnvelope
    set?: SpeakingTurnWhereUniqueInput | SpeakingTurnWhereUniqueInput[]
    disconnect?: SpeakingTurnWhereUniqueInput | SpeakingTurnWhereUniqueInput[]
    delete?: SpeakingTurnWhereUniqueInput | SpeakingTurnWhereUniqueInput[]
    connect?: SpeakingTurnWhereUniqueInput | SpeakingTurnWhereUniqueInput[]
    update?: SpeakingTurnUpdateWithWhereUniqueWithoutSessionInput | SpeakingTurnUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SpeakingTurnUpdateManyWithWhereWithoutSessionInput | SpeakingTurnUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SpeakingTurnScalarWhereInput | SpeakingTurnScalarWhereInput[]
  }

  export type SpeakingTurnUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SpeakingTurnCreateWithoutSessionInput, SpeakingTurnUncheckedCreateWithoutSessionInput> | SpeakingTurnCreateWithoutSessionInput[] | SpeakingTurnUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SpeakingTurnCreateOrConnectWithoutSessionInput | SpeakingTurnCreateOrConnectWithoutSessionInput[]
    upsert?: SpeakingTurnUpsertWithWhereUniqueWithoutSessionInput | SpeakingTurnUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SpeakingTurnCreateManySessionInputEnvelope
    set?: SpeakingTurnWhereUniqueInput | SpeakingTurnWhereUniqueInput[]
    disconnect?: SpeakingTurnWhereUniqueInput | SpeakingTurnWhereUniqueInput[]
    delete?: SpeakingTurnWhereUniqueInput | SpeakingTurnWhereUniqueInput[]
    connect?: SpeakingTurnWhereUniqueInput | SpeakingTurnWhereUniqueInput[]
    update?: SpeakingTurnUpdateWithWhereUniqueWithoutSessionInput | SpeakingTurnUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SpeakingTurnUpdateManyWithWhereWithoutSessionInput | SpeakingTurnUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SpeakingTurnScalarWhereInput | SpeakingTurnScalarWhereInput[]
  }

  export type SpeakingSessionCreateNestedOneWithoutTurnsInput = {
    create?: XOR<SpeakingSessionCreateWithoutTurnsInput, SpeakingSessionUncheckedCreateWithoutTurnsInput>
    connectOrCreate?: SpeakingSessionCreateOrConnectWithoutTurnsInput
    connect?: SpeakingSessionWhereUniqueInput
  }

  export type SpeakingSessionUpdateOneRequiredWithoutTurnsNestedInput = {
    create?: XOR<SpeakingSessionCreateWithoutTurnsInput, SpeakingSessionUncheckedCreateWithoutTurnsInput>
    connectOrCreate?: SpeakingSessionCreateOrConnectWithoutTurnsInput
    upsert?: SpeakingSessionUpsertWithoutTurnsInput
    connect?: SpeakingSessionWhereUniqueInput
    update?: XOR<XOR<SpeakingSessionUpdateToOneWithWhereWithoutTurnsInput, SpeakingSessionUpdateWithoutTurnsInput>, SpeakingSessionUncheckedUpdateWithoutTurnsInput>
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

  export type NestedEnumSpeechJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeechJobType | EnumSpeechJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpeechJobType[] | ListEnumSpeechJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeechJobType[] | ListEnumSpeechJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeechJobTypeFilter<$PrismaModel> | $Enums.SpeechJobType
  }

  export type NestedEnumSpeechJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeechJobStatus | EnumSpeechJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SpeechJobStatus[] | ListEnumSpeechJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeechJobStatus[] | ListEnumSpeechJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeechJobStatusFilter<$PrismaModel> | $Enums.SpeechJobStatus
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

  export type NestedEnumSpeechJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeechJobType | EnumSpeechJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpeechJobType[] | ListEnumSpeechJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeechJobType[] | ListEnumSpeechJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeechJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.SpeechJobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeechJobTypeFilter<$PrismaModel>
    _max?: NestedEnumSpeechJobTypeFilter<$PrismaModel>
  }

  export type NestedEnumSpeechJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeechJobStatus | EnumSpeechJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SpeechJobStatus[] | ListEnumSpeechJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeechJobStatus[] | ListEnumSpeechJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeechJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.SpeechJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeechJobStatusFilter<$PrismaModel>
    _max?: NestedEnumSpeechJobStatusFilter<$PrismaModel>
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

  export type AudioMetadataCreateWithoutSpeechJobInput = {
    id?: string
    userId: string
    fileKey: string
    fileName: string
    fileSize: number
    fileFormat: string
    sampleRate: number
    audioDuration: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AudioMetadataUncheckedCreateWithoutSpeechJobInput = {
    id?: string
    userId: string
    fileKey: string
    fileName: string
    fileSize: number
    fileFormat: string
    sampleRate: number
    audioDuration: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AudioMetadataCreateOrConnectWithoutSpeechJobInput = {
    where: AudioMetadataWhereUniqueInput
    create: XOR<AudioMetadataCreateWithoutSpeechJobInput, AudioMetadataUncheckedCreateWithoutSpeechJobInput>
  }

  export type AudioMetadataCreateManySpeechJobInputEnvelope = {
    data: AudioMetadataCreateManySpeechJobInput | AudioMetadataCreateManySpeechJobInput[]
    skipDuplicates?: boolean
  }

  export type AudioMetadataUpsertWithWhereUniqueWithoutSpeechJobInput = {
    where: AudioMetadataWhereUniqueInput
    update: XOR<AudioMetadataUpdateWithoutSpeechJobInput, AudioMetadataUncheckedUpdateWithoutSpeechJobInput>
    create: XOR<AudioMetadataCreateWithoutSpeechJobInput, AudioMetadataUncheckedCreateWithoutSpeechJobInput>
  }

  export type AudioMetadataUpdateWithWhereUniqueWithoutSpeechJobInput = {
    where: AudioMetadataWhereUniqueInput
    data: XOR<AudioMetadataUpdateWithoutSpeechJobInput, AudioMetadataUncheckedUpdateWithoutSpeechJobInput>
  }

  export type AudioMetadataUpdateManyWithWhereWithoutSpeechJobInput = {
    where: AudioMetadataScalarWhereInput
    data: XOR<AudioMetadataUpdateManyMutationInput, AudioMetadataUncheckedUpdateManyWithoutSpeechJobInput>
  }

  export type AudioMetadataScalarWhereInput = {
    AND?: AudioMetadataScalarWhereInput | AudioMetadataScalarWhereInput[]
    OR?: AudioMetadataScalarWhereInput[]
    NOT?: AudioMetadataScalarWhereInput | AudioMetadataScalarWhereInput[]
    id?: StringFilter<"AudioMetadata"> | string
    userId?: StringFilter<"AudioMetadata"> | string
    speechJobId?: StringNullableFilter<"AudioMetadata"> | string | null
    fileKey?: StringFilter<"AudioMetadata"> | string
    fileName?: StringFilter<"AudioMetadata"> | string
    fileSize?: IntFilter<"AudioMetadata"> | number
    fileFormat?: StringFilter<"AudioMetadata"> | string
    sampleRate?: IntFilter<"AudioMetadata"> | number
    audioDuration?: FloatFilter<"AudioMetadata"> | number
    metadata?: JsonNullableFilter<"AudioMetadata">
    createdAt?: DateTimeFilter<"AudioMetadata"> | Date | string
  }

  export type SpeechJobCreateWithoutMetadataInput = {
    id?: string
    userId: string
    type: $Enums.SpeechJobType
    status?: $Enums.SpeechJobStatus
    fileKey?: string | null
    fileSize?: number | null
    fileFormat?: string | null
    audioDuration?: number | null
    sampleRate?: number | null
    language?: string
    provider?: string | null
    transcript?: string | null
    confidence?: number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    voice?: string | null
    outputKey?: string | null
    pronunciationScore?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type SpeechJobUncheckedCreateWithoutMetadataInput = {
    id?: string
    userId: string
    type: $Enums.SpeechJobType
    status?: $Enums.SpeechJobStatus
    fileKey?: string | null
    fileSize?: number | null
    fileFormat?: string | null
    audioDuration?: number | null
    sampleRate?: number | null
    language?: string
    provider?: string | null
    transcript?: string | null
    confidence?: number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: string | null
    voice?: string | null
    outputKey?: string | null
    pronunciationScore?: number | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type SpeechJobCreateOrConnectWithoutMetadataInput = {
    where: SpeechJobWhereUniqueInput
    create: XOR<SpeechJobCreateWithoutMetadataInput, SpeechJobUncheckedCreateWithoutMetadataInput>
  }

  export type SpeechJobUpsertWithoutMetadataInput = {
    update: XOR<SpeechJobUpdateWithoutMetadataInput, SpeechJobUncheckedUpdateWithoutMetadataInput>
    create: XOR<SpeechJobCreateWithoutMetadataInput, SpeechJobUncheckedCreateWithoutMetadataInput>
    where?: SpeechJobWhereInput
  }

  export type SpeechJobUpdateToOneWithWhereWithoutMetadataInput = {
    where?: SpeechJobWhereInput
    data: XOR<SpeechJobUpdateWithoutMetadataInput, SpeechJobUncheckedUpdateWithoutMetadataInput>
  }

  export type SpeechJobUpdateWithoutMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSpeechJobTypeFieldUpdateOperationsInput | $Enums.SpeechJobType
    status?: EnumSpeechJobStatusFieldUpdateOperationsInput | $Enums.SpeechJobStatus
    fileKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileFormat?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    voice?: NullableStringFieldUpdateOperationsInput | string | null
    outputKey?: NullableStringFieldUpdateOperationsInput | string | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SpeechJobUncheckedUpdateWithoutMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSpeechJobTypeFieldUpdateOperationsInput | $Enums.SpeechJobType
    status?: EnumSpeechJobStatusFieldUpdateOperationsInput | $Enums.SpeechJobStatus
    fileKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    fileFormat?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    sampleRate?: NullableIntFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    wordTimings?: NullableJsonNullValueInput | InputJsonValue
    text?: NullableStringFieldUpdateOperationsInput | string | null
    voice?: NullableStringFieldUpdateOperationsInput | string | null
    outputKey?: NullableStringFieldUpdateOperationsInput | string | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SpeakingTurnCreateWithoutSessionInput = {
    id?: string
    userId: string
    audioKey?: string | null
    audioDuration?: number | null
    transcript?: string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: number | null
    pronunciationScore?: number | null
    overallScore?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: string | null
    hindiExplanation?: string | null
    audioResponseKey?: string | null
    createdAt?: Date | string
  }

  export type SpeakingTurnUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    audioKey?: string | null
    audioDuration?: number | null
    transcript?: string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: number | null
    pronunciationScore?: number | null
    overallScore?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: string | null
    hindiExplanation?: string | null
    audioResponseKey?: string | null
    createdAt?: Date | string
  }

  export type SpeakingTurnCreateOrConnectWithoutSessionInput = {
    where: SpeakingTurnWhereUniqueInput
    create: XOR<SpeakingTurnCreateWithoutSessionInput, SpeakingTurnUncheckedCreateWithoutSessionInput>
  }

  export type SpeakingTurnCreateManySessionInputEnvelope = {
    data: SpeakingTurnCreateManySessionInput | SpeakingTurnCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type SpeakingTurnUpsertWithWhereUniqueWithoutSessionInput = {
    where: SpeakingTurnWhereUniqueInput
    update: XOR<SpeakingTurnUpdateWithoutSessionInput, SpeakingTurnUncheckedUpdateWithoutSessionInput>
    create: XOR<SpeakingTurnCreateWithoutSessionInput, SpeakingTurnUncheckedCreateWithoutSessionInput>
  }

  export type SpeakingTurnUpdateWithWhereUniqueWithoutSessionInput = {
    where: SpeakingTurnWhereUniqueInput
    data: XOR<SpeakingTurnUpdateWithoutSessionInput, SpeakingTurnUncheckedUpdateWithoutSessionInput>
  }

  export type SpeakingTurnUpdateManyWithWhereWithoutSessionInput = {
    where: SpeakingTurnScalarWhereInput
    data: XOR<SpeakingTurnUpdateManyMutationInput, SpeakingTurnUncheckedUpdateManyWithoutSessionInput>
  }

  export type SpeakingTurnScalarWhereInput = {
    AND?: SpeakingTurnScalarWhereInput | SpeakingTurnScalarWhereInput[]
    OR?: SpeakingTurnScalarWhereInput[]
    NOT?: SpeakingTurnScalarWhereInput | SpeakingTurnScalarWhereInput[]
    id?: StringFilter<"SpeakingTurn"> | string
    sessionId?: StringFilter<"SpeakingTurn"> | string
    userId?: StringFilter<"SpeakingTurn"> | string
    audioKey?: StringNullableFilter<"SpeakingTurn"> | string | null
    audioDuration?: FloatNullableFilter<"SpeakingTurn"> | number | null
    transcript?: StringNullableFilter<"SpeakingTurn"> | string | null
    grammarIssues?: JsonNullableFilter<"SpeakingTurn">
    fluencyScore?: FloatNullableFilter<"SpeakingTurn"> | number | null
    pronunciationScore?: FloatNullableFilter<"SpeakingTurn"> | number | null
    overallScore?: FloatNullableFilter<"SpeakingTurn"> | number | null
    feedback?: JsonNullableFilter<"SpeakingTurn">
    correctedText?: StringNullableFilter<"SpeakingTurn"> | string | null
    hindiExplanation?: StringNullableFilter<"SpeakingTurn"> | string | null
    audioResponseKey?: StringNullableFilter<"SpeakingTurn"> | string | null
    createdAt?: DateTimeFilter<"SpeakingTurn"> | Date | string
  }

  export type SpeakingSessionCreateWithoutTurnsInput = {
    id?: string
    userId: string
    title?: string | null
    status?: string
    totalTurns?: number
    totalDuration?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakingSessionUncheckedCreateWithoutTurnsInput = {
    id?: string
    userId: string
    title?: string | null
    status?: string
    totalTurns?: number
    totalDuration?: number
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakingSessionCreateOrConnectWithoutTurnsInput = {
    where: SpeakingSessionWhereUniqueInput
    create: XOR<SpeakingSessionCreateWithoutTurnsInput, SpeakingSessionUncheckedCreateWithoutTurnsInput>
  }

  export type SpeakingSessionUpsertWithoutTurnsInput = {
    update: XOR<SpeakingSessionUpdateWithoutTurnsInput, SpeakingSessionUncheckedUpdateWithoutTurnsInput>
    create: XOR<SpeakingSessionCreateWithoutTurnsInput, SpeakingSessionUncheckedCreateWithoutTurnsInput>
    where?: SpeakingSessionWhereInput
  }

  export type SpeakingSessionUpdateToOneWithWhereWithoutTurnsInput = {
    where?: SpeakingSessionWhereInput
    data: XOR<SpeakingSessionUpdateWithoutTurnsInput, SpeakingSessionUncheckedUpdateWithoutTurnsInput>
  }

  export type SpeakingSessionUpdateWithoutTurnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalTurns?: IntFieldUpdateOperationsInput | number
    totalDuration?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakingSessionUncheckedUpdateWithoutTurnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalTurns?: IntFieldUpdateOperationsInput | number
    totalDuration?: IntFieldUpdateOperationsInput | number
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioMetadataCreateManySpeechJobInput = {
    id?: string
    userId: string
    fileKey: string
    fileName: string
    fileSize: number
    fileFormat: string
    sampleRate: number
    audioDuration: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AudioMetadataUpdateWithoutSpeechJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileFormat?: StringFieldUpdateOperationsInput | string
    sampleRate?: IntFieldUpdateOperationsInput | number
    audioDuration?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioMetadataUncheckedUpdateWithoutSpeechJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileFormat?: StringFieldUpdateOperationsInput | string
    sampleRate?: IntFieldUpdateOperationsInput | number
    audioDuration?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioMetadataUncheckedUpdateManyWithoutSpeechJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileKey?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileFormat?: StringFieldUpdateOperationsInput | string
    sampleRate?: IntFieldUpdateOperationsInput | number
    audioDuration?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakingTurnCreateManySessionInput = {
    id?: string
    userId: string
    audioKey?: string | null
    audioDuration?: number | null
    transcript?: string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: number | null
    pronunciationScore?: number | null
    overallScore?: number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: string | null
    hindiExplanation?: string | null
    audioResponseKey?: string | null
    createdAt?: Date | string
  }

  export type SpeakingTurnUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    audioKey?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: NullableStringFieldUpdateOperationsInput | string | null
    hindiExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakingTurnUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    audioKey?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: NullableStringFieldUpdateOperationsInput | string | null
    hindiExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakingTurnUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    audioKey?: NullableStringFieldUpdateOperationsInput | string | null
    audioDuration?: NullableFloatFieldUpdateOperationsInput | number | null
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    grammarIssues?: NullableJsonNullValueInput | InputJsonValue
    fluencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    pronunciationScore?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableJsonNullValueInput | InputJsonValue
    correctedText?: NullableStringFieldUpdateOperationsInput | string | null
    hindiExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SpeechJobCountOutputTypeDefaultArgs instead
     */
    export type SpeechJobCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpeechJobCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpeakingSessionCountOutputTypeDefaultArgs instead
     */
    export type SpeakingSessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpeakingSessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpeechJobDefaultArgs instead
     */
    export type SpeechJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpeechJobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AudioMetadataDefaultArgs instead
     */
    export type AudioMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AudioMetadataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpeakingSessionDefaultArgs instead
     */
    export type SpeakingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpeakingSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpeakingTurnDefaultArgs instead
     */
    export type SpeakingTurnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpeakingTurnDefaultArgs<ExtArgs>

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