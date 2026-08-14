
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
 * Model RawEvent
 * 
 */
export type RawEvent = $Result.DefaultSelection<Prisma.$RawEventPayload>
/**
 * Model DailyAggregation
 * 
 */
export type DailyAggregation = $Result.DefaultSelection<Prisma.$DailyAggregationPayload>
/**
 * Model MonthlyAggregation
 * 
 */
export type MonthlyAggregation = $Result.DefaultSelection<Prisma.$MonthlyAggregationPayload>
/**
 * Model UserAnalytics
 * 
 */
export type UserAnalytics = $Result.DefaultSelection<Prisma.$UserAnalyticsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RawEvents
 * const rawEvents = await prisma.rawEvent.findMany()
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
   * // Fetch zero or more RawEvents
   * const rawEvents = await prisma.rawEvent.findMany()
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
   * `prisma.rawEvent`: Exposes CRUD operations for the **RawEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RawEvents
    * const rawEvents = await prisma.rawEvent.findMany()
    * ```
    */
  get rawEvent(): Prisma.RawEventDelegate<ExtArgs>;

  /**
   * `prisma.dailyAggregation`: Exposes CRUD operations for the **DailyAggregation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyAggregations
    * const dailyAggregations = await prisma.dailyAggregation.findMany()
    * ```
    */
  get dailyAggregation(): Prisma.DailyAggregationDelegate<ExtArgs>;

  /**
   * `prisma.monthlyAggregation`: Exposes CRUD operations for the **MonthlyAggregation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyAggregations
    * const monthlyAggregations = await prisma.monthlyAggregation.findMany()
    * ```
    */
  get monthlyAggregation(): Prisma.MonthlyAggregationDelegate<ExtArgs>;

  /**
   * `prisma.userAnalytics`: Exposes CRUD operations for the **UserAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAnalytics
    * const userAnalytics = await prisma.userAnalytics.findMany()
    * ```
    */
  get userAnalytics(): Prisma.UserAnalyticsDelegate<ExtArgs>;
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
    RawEvent: 'RawEvent',
    DailyAggregation: 'DailyAggregation',
    MonthlyAggregation: 'MonthlyAggregation',
    UserAnalytics: 'UserAnalytics'
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
      modelProps: "rawEvent" | "dailyAggregation" | "monthlyAggregation" | "userAnalytics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RawEvent: {
        payload: Prisma.$RawEventPayload<ExtArgs>
        fields: Prisma.RawEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RawEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RawEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          findFirst: {
            args: Prisma.RawEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RawEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          findMany: {
            args: Prisma.RawEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>[]
          }
          create: {
            args: Prisma.RawEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          createMany: {
            args: Prisma.RawEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RawEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>[]
          }
          delete: {
            args: Prisma.RawEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          update: {
            args: Prisma.RawEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          deleteMany: {
            args: Prisma.RawEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RawEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RawEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RawEventPayload>
          }
          aggregate: {
            args: Prisma.RawEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRawEvent>
          }
          groupBy: {
            args: Prisma.RawEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<RawEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.RawEventCountArgs<ExtArgs>
            result: $Utils.Optional<RawEventCountAggregateOutputType> | number
          }
        }
      }
      DailyAggregation: {
        payload: Prisma.$DailyAggregationPayload<ExtArgs>
        fields: Prisma.DailyAggregationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyAggregationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAggregationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyAggregationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAggregationPayload>
          }
          findFirst: {
            args: Prisma.DailyAggregationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAggregationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyAggregationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAggregationPayload>
          }
          findMany: {
            args: Prisma.DailyAggregationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAggregationPayload>[]
          }
          create: {
            args: Prisma.DailyAggregationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAggregationPayload>
          }
          createMany: {
            args: Prisma.DailyAggregationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyAggregationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAggregationPayload>[]
          }
          delete: {
            args: Prisma.DailyAggregationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAggregationPayload>
          }
          update: {
            args: Prisma.DailyAggregationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAggregationPayload>
          }
          deleteMany: {
            args: Prisma.DailyAggregationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyAggregationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyAggregationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyAggregationPayload>
          }
          aggregate: {
            args: Prisma.DailyAggregationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyAggregation>
          }
          groupBy: {
            args: Prisma.DailyAggregationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyAggregationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyAggregationCountArgs<ExtArgs>
            result: $Utils.Optional<DailyAggregationCountAggregateOutputType> | number
          }
        }
      }
      MonthlyAggregation: {
        payload: Prisma.$MonthlyAggregationPayload<ExtArgs>
        fields: Prisma.MonthlyAggregationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyAggregationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyAggregationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyAggregationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyAggregationPayload>
          }
          findFirst: {
            args: Prisma.MonthlyAggregationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyAggregationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyAggregationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyAggregationPayload>
          }
          findMany: {
            args: Prisma.MonthlyAggregationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyAggregationPayload>[]
          }
          create: {
            args: Prisma.MonthlyAggregationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyAggregationPayload>
          }
          createMany: {
            args: Prisma.MonthlyAggregationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyAggregationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyAggregationPayload>[]
          }
          delete: {
            args: Prisma.MonthlyAggregationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyAggregationPayload>
          }
          update: {
            args: Prisma.MonthlyAggregationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyAggregationPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyAggregationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyAggregationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthlyAggregationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyAggregationPayload>
          }
          aggregate: {
            args: Prisma.MonthlyAggregationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyAggregation>
          }
          groupBy: {
            args: Prisma.MonthlyAggregationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyAggregationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyAggregationCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyAggregationCountAggregateOutputType> | number
          }
        }
      }
      UserAnalytics: {
        payload: Prisma.$UserAnalyticsPayload<ExtArgs>
        fields: Prisma.UserAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.UserAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnalyticsPayload>
          }
          findMany: {
            args: Prisma.UserAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnalyticsPayload>[]
          }
          create: {
            args: Prisma.UserAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnalyticsPayload>
          }
          createMany: {
            args: Prisma.UserAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnalyticsPayload>[]
          }
          delete: {
            args: Prisma.UserAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnalyticsPayload>
          }
          update: {
            args: Prisma.UserAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.UserAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.UserAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAnalytics>
          }
          groupBy: {
            args: Prisma.UserAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<UserAnalyticsCountAggregateOutputType> | number
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
   * Model RawEvent
   */

  export type AggregateRawEvent = {
    _count: RawEventCountAggregateOutputType | null
    _avg: RawEventAvgAggregateOutputType | null
    _sum: RawEventSumAggregateOutputType | null
    _min: RawEventMinAggregateOutputType | null
    _max: RawEventMaxAggregateOutputType | null
  }

  export type RawEventAvgAggregateOutputType = {
    kafkaPartition: number | null
  }

  export type RawEventSumAggregateOutputType = {
    kafkaPartition: number | null
  }

  export type RawEventMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    eventType: string | null
    eventVersion: string | null
    occurredAt: Date | null
    producer: string | null
    userId: string | null
    requestId: string | null
    correlationId: string | null
    kafkaTopic: string | null
    kafkaPartition: number | null
    kafkaOffset: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type RawEventMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    eventType: string | null
    eventVersion: string | null
    occurredAt: Date | null
    producer: string | null
    userId: string | null
    requestId: string | null
    correlationId: string | null
    kafkaTopic: string | null
    kafkaPartition: number | null
    kafkaOffset: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type RawEventCountAggregateOutputType = {
    id: number
    eventId: number
    eventType: number
    eventVersion: number
    occurredAt: number
    producer: number
    userId: number
    requestId: number
    correlationId: number
    payload: number
    kafkaTopic: number
    kafkaPartition: number
    kafkaOffset: number
    processedAt: number
    createdAt: number
    _all: number
  }


  export type RawEventAvgAggregateInputType = {
    kafkaPartition?: true
  }

  export type RawEventSumAggregateInputType = {
    kafkaPartition?: true
  }

  export type RawEventMinAggregateInputType = {
    id?: true
    eventId?: true
    eventType?: true
    eventVersion?: true
    occurredAt?: true
    producer?: true
    userId?: true
    requestId?: true
    correlationId?: true
    kafkaTopic?: true
    kafkaPartition?: true
    kafkaOffset?: true
    processedAt?: true
    createdAt?: true
  }

  export type RawEventMaxAggregateInputType = {
    id?: true
    eventId?: true
    eventType?: true
    eventVersion?: true
    occurredAt?: true
    producer?: true
    userId?: true
    requestId?: true
    correlationId?: true
    kafkaTopic?: true
    kafkaPartition?: true
    kafkaOffset?: true
    processedAt?: true
    createdAt?: true
  }

  export type RawEventCountAggregateInputType = {
    id?: true
    eventId?: true
    eventType?: true
    eventVersion?: true
    occurredAt?: true
    producer?: true
    userId?: true
    requestId?: true
    correlationId?: true
    payload?: true
    kafkaTopic?: true
    kafkaPartition?: true
    kafkaOffset?: true
    processedAt?: true
    createdAt?: true
    _all?: true
  }

  export type RawEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawEvent to aggregate.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RawEvents
    **/
    _count?: true | RawEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RawEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RawEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RawEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RawEventMaxAggregateInputType
  }

  export type GetRawEventAggregateType<T extends RawEventAggregateArgs> = {
        [P in keyof T & keyof AggregateRawEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRawEvent[P]>
      : GetScalarType<T[P], AggregateRawEvent[P]>
  }




  export type RawEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RawEventWhereInput
    orderBy?: RawEventOrderByWithAggregationInput | RawEventOrderByWithAggregationInput[]
    by: RawEventScalarFieldEnum[] | RawEventScalarFieldEnum
    having?: RawEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RawEventCountAggregateInputType | true
    _avg?: RawEventAvgAggregateInputType
    _sum?: RawEventSumAggregateInputType
    _min?: RawEventMinAggregateInputType
    _max?: RawEventMaxAggregateInputType
  }

  export type RawEventGroupByOutputType = {
    id: string
    eventId: string
    eventType: string
    eventVersion: string
    occurredAt: Date
    producer: string
    userId: string | null
    requestId: string | null
    correlationId: string | null
    payload: JsonValue
    kafkaTopic: string | null
    kafkaPartition: number | null
    kafkaOffset: string | null
    processedAt: Date
    createdAt: Date
    _count: RawEventCountAggregateOutputType | null
    _avg: RawEventAvgAggregateOutputType | null
    _sum: RawEventSumAggregateOutputType | null
    _min: RawEventMinAggregateOutputType | null
    _max: RawEventMaxAggregateOutputType | null
  }

  type GetRawEventGroupByPayload<T extends RawEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RawEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RawEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RawEventGroupByOutputType[P]>
            : GetScalarType<T[P], RawEventGroupByOutputType[P]>
        }
      >
    >


  export type RawEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    eventType?: boolean
    eventVersion?: boolean
    occurredAt?: boolean
    producer?: boolean
    userId?: boolean
    requestId?: boolean
    correlationId?: boolean
    payload?: boolean
    kafkaTopic?: boolean
    kafkaPartition?: boolean
    kafkaOffset?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rawEvent"]>

  export type RawEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    eventType?: boolean
    eventVersion?: boolean
    occurredAt?: boolean
    producer?: boolean
    userId?: boolean
    requestId?: boolean
    correlationId?: boolean
    payload?: boolean
    kafkaTopic?: boolean
    kafkaPartition?: boolean
    kafkaOffset?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["rawEvent"]>

  export type RawEventSelectScalar = {
    id?: boolean
    eventId?: boolean
    eventType?: boolean
    eventVersion?: boolean
    occurredAt?: boolean
    producer?: boolean
    userId?: boolean
    requestId?: boolean
    correlationId?: boolean
    payload?: boolean
    kafkaTopic?: boolean
    kafkaPartition?: boolean
    kafkaOffset?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }


  export type $RawEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RawEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      eventType: string
      eventVersion: string
      occurredAt: Date
      producer: string
      userId: string | null
      requestId: string | null
      correlationId: string | null
      payload: Prisma.JsonValue
      kafkaTopic: string | null
      kafkaPartition: number | null
      kafkaOffset: string | null
      processedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["rawEvent"]>
    composites: {}
  }

  type RawEventGetPayload<S extends boolean | null | undefined | RawEventDefaultArgs> = $Result.GetResult<Prisma.$RawEventPayload, S>

  type RawEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RawEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RawEventCountAggregateInputType | true
    }

  export interface RawEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RawEvent'], meta: { name: 'RawEvent' } }
    /**
     * Find zero or one RawEvent that matches the filter.
     * @param {RawEventFindUniqueArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RawEventFindUniqueArgs>(args: SelectSubset<T, RawEventFindUniqueArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RawEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RawEventFindUniqueOrThrowArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RawEventFindUniqueOrThrowArgs>(args: SelectSubset<T, RawEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RawEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventFindFirstArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RawEventFindFirstArgs>(args?: SelectSubset<T, RawEventFindFirstArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RawEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventFindFirstOrThrowArgs} args - Arguments to find a RawEvent
     * @example
     * // Get one RawEvent
     * const rawEvent = await prisma.rawEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RawEventFindFirstOrThrowArgs>(args?: SelectSubset<T, RawEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RawEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RawEvents
     * const rawEvents = await prisma.rawEvent.findMany()
     * 
     * // Get first 10 RawEvents
     * const rawEvents = await prisma.rawEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rawEventWithIdOnly = await prisma.rawEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RawEventFindManyArgs>(args?: SelectSubset<T, RawEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RawEvent.
     * @param {RawEventCreateArgs} args - Arguments to create a RawEvent.
     * @example
     * // Create one RawEvent
     * const RawEvent = await prisma.rawEvent.create({
     *   data: {
     *     // ... data to create a RawEvent
     *   }
     * })
     * 
     */
    create<T extends RawEventCreateArgs>(args: SelectSubset<T, RawEventCreateArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RawEvents.
     * @param {RawEventCreateManyArgs} args - Arguments to create many RawEvents.
     * @example
     * // Create many RawEvents
     * const rawEvent = await prisma.rawEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RawEventCreateManyArgs>(args?: SelectSubset<T, RawEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RawEvents and returns the data saved in the database.
     * @param {RawEventCreateManyAndReturnArgs} args - Arguments to create many RawEvents.
     * @example
     * // Create many RawEvents
     * const rawEvent = await prisma.rawEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RawEvents and only return the `id`
     * const rawEventWithIdOnly = await prisma.rawEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RawEventCreateManyAndReturnArgs>(args?: SelectSubset<T, RawEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RawEvent.
     * @param {RawEventDeleteArgs} args - Arguments to delete one RawEvent.
     * @example
     * // Delete one RawEvent
     * const RawEvent = await prisma.rawEvent.delete({
     *   where: {
     *     // ... filter to delete one RawEvent
     *   }
     * })
     * 
     */
    delete<T extends RawEventDeleteArgs>(args: SelectSubset<T, RawEventDeleteArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RawEvent.
     * @param {RawEventUpdateArgs} args - Arguments to update one RawEvent.
     * @example
     * // Update one RawEvent
     * const rawEvent = await prisma.rawEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RawEventUpdateArgs>(args: SelectSubset<T, RawEventUpdateArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RawEvents.
     * @param {RawEventDeleteManyArgs} args - Arguments to filter RawEvents to delete.
     * @example
     * // Delete a few RawEvents
     * const { count } = await prisma.rawEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RawEventDeleteManyArgs>(args?: SelectSubset<T, RawEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RawEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RawEvents
     * const rawEvent = await prisma.rawEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RawEventUpdateManyArgs>(args: SelectSubset<T, RawEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RawEvent.
     * @param {RawEventUpsertArgs} args - Arguments to update or create a RawEvent.
     * @example
     * // Update or create a RawEvent
     * const rawEvent = await prisma.rawEvent.upsert({
     *   create: {
     *     // ... data to create a RawEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RawEvent we want to update
     *   }
     * })
     */
    upsert<T extends RawEventUpsertArgs>(args: SelectSubset<T, RawEventUpsertArgs<ExtArgs>>): Prisma__RawEventClient<$Result.GetResult<Prisma.$RawEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RawEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventCountArgs} args - Arguments to filter RawEvents to count.
     * @example
     * // Count the number of RawEvents
     * const count = await prisma.rawEvent.count({
     *   where: {
     *     // ... the filter for the RawEvents we want to count
     *   }
     * })
    **/
    count<T extends RawEventCountArgs>(
      args?: Subset<T, RawEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RawEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RawEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RawEventAggregateArgs>(args: Subset<T, RawEventAggregateArgs>): Prisma.PrismaPromise<GetRawEventAggregateType<T>>

    /**
     * Group by RawEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RawEventGroupByArgs} args - Group by arguments.
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
      T extends RawEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RawEventGroupByArgs['orderBy'] }
        : { orderBy?: RawEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RawEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRawEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RawEvent model
   */
  readonly fields: RawEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RawEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RawEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RawEvent model
   */ 
  interface RawEventFieldRefs {
    readonly id: FieldRef<"RawEvent", 'String'>
    readonly eventId: FieldRef<"RawEvent", 'String'>
    readonly eventType: FieldRef<"RawEvent", 'String'>
    readonly eventVersion: FieldRef<"RawEvent", 'String'>
    readonly occurredAt: FieldRef<"RawEvent", 'DateTime'>
    readonly producer: FieldRef<"RawEvent", 'String'>
    readonly userId: FieldRef<"RawEvent", 'String'>
    readonly requestId: FieldRef<"RawEvent", 'String'>
    readonly correlationId: FieldRef<"RawEvent", 'String'>
    readonly payload: FieldRef<"RawEvent", 'Json'>
    readonly kafkaTopic: FieldRef<"RawEvent", 'String'>
    readonly kafkaPartition: FieldRef<"RawEvent", 'Int'>
    readonly kafkaOffset: FieldRef<"RawEvent", 'String'>
    readonly processedAt: FieldRef<"RawEvent", 'DateTime'>
    readonly createdAt: FieldRef<"RawEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RawEvent findUnique
   */
  export type RawEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent findUniqueOrThrow
   */
  export type RawEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent findFirst
   */
  export type RawEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawEvents.
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawEvents.
     */
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * RawEvent findFirstOrThrow
   */
  export type RawEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Filter, which RawEvent to fetch.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RawEvents.
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RawEvents.
     */
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * RawEvent findMany
   */
  export type RawEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Filter, which RawEvents to fetch.
     */
    where?: RawEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RawEvents to fetch.
     */
    orderBy?: RawEventOrderByWithRelationInput | RawEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RawEvents.
     */
    cursor?: RawEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RawEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RawEvents.
     */
    skip?: number
    distinct?: RawEventScalarFieldEnum | RawEventScalarFieldEnum[]
  }

  /**
   * RawEvent create
   */
  export type RawEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * The data needed to create a RawEvent.
     */
    data: XOR<RawEventCreateInput, RawEventUncheckedCreateInput>
  }

  /**
   * RawEvent createMany
   */
  export type RawEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RawEvents.
     */
    data: RawEventCreateManyInput | RawEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawEvent createManyAndReturn
   */
  export type RawEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RawEvents.
     */
    data: RawEventCreateManyInput | RawEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RawEvent update
   */
  export type RawEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * The data needed to update a RawEvent.
     */
    data: XOR<RawEventUpdateInput, RawEventUncheckedUpdateInput>
    /**
     * Choose, which RawEvent to update.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent updateMany
   */
  export type RawEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RawEvents.
     */
    data: XOR<RawEventUpdateManyMutationInput, RawEventUncheckedUpdateManyInput>
    /**
     * Filter which RawEvents to update
     */
    where?: RawEventWhereInput
  }

  /**
   * RawEvent upsert
   */
  export type RawEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * The filter to search for the RawEvent to update in case it exists.
     */
    where: RawEventWhereUniqueInput
    /**
     * In case the RawEvent found by the `where` argument doesn't exist, create a new RawEvent with this data.
     */
    create: XOR<RawEventCreateInput, RawEventUncheckedCreateInput>
    /**
     * In case the RawEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RawEventUpdateInput, RawEventUncheckedUpdateInput>
  }

  /**
   * RawEvent delete
   */
  export type RawEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
    /**
     * Filter which RawEvent to delete.
     */
    where: RawEventWhereUniqueInput
  }

  /**
   * RawEvent deleteMany
   */
  export type RawEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RawEvents to delete
     */
    where?: RawEventWhereInput
  }

  /**
   * RawEvent without action
   */
  export type RawEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RawEvent
     */
    select?: RawEventSelect<ExtArgs> | null
  }


  /**
   * Model DailyAggregation
   */

  export type AggregateDailyAggregation = {
    _count: DailyAggregationCountAggregateOutputType | null
    _avg: DailyAggregationAvgAggregateOutputType | null
    _sum: DailyAggregationSumAggregateOutputType | null
    _min: DailyAggregationMinAggregateOutputType | null
    _max: DailyAggregationMaxAggregateOutputType | null
  }

  export type DailyAggregationAvgAggregateOutputType = {
    dailyActiveUsers: number | null
    newUsers: number | null
    lessonsStarted: number | null
    lessonsCompleted: number | null
    avgLessonScore: number | null
    speakingSessions: number | null
    avgSpeakingScore: number | null
    grammarExercises: number | null
    avgGrammarScore: number | null
    vocabularyLearned: number | null
    aiMessages: number | null
    avgAILatency: number | null
    newSubscriptions: number | null
    subscriptionRevenue: number | null
    totalTimeMinutes: number | null
    avgSessionMinutes: number | null
  }

  export type DailyAggregationSumAggregateOutputType = {
    dailyActiveUsers: number | null
    newUsers: number | null
    lessonsStarted: number | null
    lessonsCompleted: number | null
    avgLessonScore: number | null
    speakingSessions: number | null
    avgSpeakingScore: number | null
    grammarExercises: number | null
    avgGrammarScore: number | null
    vocabularyLearned: number | null
    aiMessages: number | null
    avgAILatency: number | null
    newSubscriptions: number | null
    subscriptionRevenue: number | null
    totalTimeMinutes: number | null
    avgSessionMinutes: number | null
  }

  export type DailyAggregationMinAggregateOutputType = {
    id: string | null
    date: Date | null
    dateKey: string | null
    dailyActiveUsers: number | null
    newUsers: number | null
    lessonsStarted: number | null
    lessonsCompleted: number | null
    avgLessonScore: number | null
    speakingSessions: number | null
    avgSpeakingScore: number | null
    grammarExercises: number | null
    avgGrammarScore: number | null
    vocabularyLearned: number | null
    aiMessages: number | null
    avgAILatency: number | null
    newSubscriptions: number | null
    subscriptionRevenue: number | null
    totalTimeMinutes: number | null
    avgSessionMinutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyAggregationMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    dateKey: string | null
    dailyActiveUsers: number | null
    newUsers: number | null
    lessonsStarted: number | null
    lessonsCompleted: number | null
    avgLessonScore: number | null
    speakingSessions: number | null
    avgSpeakingScore: number | null
    grammarExercises: number | null
    avgGrammarScore: number | null
    vocabularyLearned: number | null
    aiMessages: number | null
    avgAILatency: number | null
    newSubscriptions: number | null
    subscriptionRevenue: number | null
    totalTimeMinutes: number | null
    avgSessionMinutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyAggregationCountAggregateOutputType = {
    id: number
    date: number
    dateKey: number
    dailyActiveUsers: number
    newUsers: number
    lessonsStarted: number
    lessonsCompleted: number
    avgLessonScore: number
    speakingSessions: number
    avgSpeakingScore: number
    grammarExercises: number
    avgGrammarScore: number
    vocabularyLearned: number
    aiMessages: number
    avgAILatency: number
    newSubscriptions: number
    subscriptionRevenue: number
    totalTimeMinutes: number
    avgSessionMinutes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyAggregationAvgAggregateInputType = {
    dailyActiveUsers?: true
    newUsers?: true
    lessonsStarted?: true
    lessonsCompleted?: true
    avgLessonScore?: true
    speakingSessions?: true
    avgSpeakingScore?: true
    grammarExercises?: true
    avgGrammarScore?: true
    vocabularyLearned?: true
    aiMessages?: true
    avgAILatency?: true
    newSubscriptions?: true
    subscriptionRevenue?: true
    totalTimeMinutes?: true
    avgSessionMinutes?: true
  }

  export type DailyAggregationSumAggregateInputType = {
    dailyActiveUsers?: true
    newUsers?: true
    lessonsStarted?: true
    lessonsCompleted?: true
    avgLessonScore?: true
    speakingSessions?: true
    avgSpeakingScore?: true
    grammarExercises?: true
    avgGrammarScore?: true
    vocabularyLearned?: true
    aiMessages?: true
    avgAILatency?: true
    newSubscriptions?: true
    subscriptionRevenue?: true
    totalTimeMinutes?: true
    avgSessionMinutes?: true
  }

  export type DailyAggregationMinAggregateInputType = {
    id?: true
    date?: true
    dateKey?: true
    dailyActiveUsers?: true
    newUsers?: true
    lessonsStarted?: true
    lessonsCompleted?: true
    avgLessonScore?: true
    speakingSessions?: true
    avgSpeakingScore?: true
    grammarExercises?: true
    avgGrammarScore?: true
    vocabularyLearned?: true
    aiMessages?: true
    avgAILatency?: true
    newSubscriptions?: true
    subscriptionRevenue?: true
    totalTimeMinutes?: true
    avgSessionMinutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyAggregationMaxAggregateInputType = {
    id?: true
    date?: true
    dateKey?: true
    dailyActiveUsers?: true
    newUsers?: true
    lessonsStarted?: true
    lessonsCompleted?: true
    avgLessonScore?: true
    speakingSessions?: true
    avgSpeakingScore?: true
    grammarExercises?: true
    avgGrammarScore?: true
    vocabularyLearned?: true
    aiMessages?: true
    avgAILatency?: true
    newSubscriptions?: true
    subscriptionRevenue?: true
    totalTimeMinutes?: true
    avgSessionMinutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyAggregationCountAggregateInputType = {
    id?: true
    date?: true
    dateKey?: true
    dailyActiveUsers?: true
    newUsers?: true
    lessonsStarted?: true
    lessonsCompleted?: true
    avgLessonScore?: true
    speakingSessions?: true
    avgSpeakingScore?: true
    grammarExercises?: true
    avgGrammarScore?: true
    vocabularyLearned?: true
    aiMessages?: true
    avgAILatency?: true
    newSubscriptions?: true
    subscriptionRevenue?: true
    totalTimeMinutes?: true
    avgSessionMinutes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyAggregationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyAggregation to aggregate.
     */
    where?: DailyAggregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyAggregations to fetch.
     */
    orderBy?: DailyAggregationOrderByWithRelationInput | DailyAggregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyAggregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyAggregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyAggregations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyAggregations
    **/
    _count?: true | DailyAggregationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyAggregationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyAggregationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyAggregationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyAggregationMaxAggregateInputType
  }

  export type GetDailyAggregationAggregateType<T extends DailyAggregationAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyAggregation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyAggregation[P]>
      : GetScalarType<T[P], AggregateDailyAggregation[P]>
  }




  export type DailyAggregationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyAggregationWhereInput
    orderBy?: DailyAggregationOrderByWithAggregationInput | DailyAggregationOrderByWithAggregationInput[]
    by: DailyAggregationScalarFieldEnum[] | DailyAggregationScalarFieldEnum
    having?: DailyAggregationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyAggregationCountAggregateInputType | true
    _avg?: DailyAggregationAvgAggregateInputType
    _sum?: DailyAggregationSumAggregateInputType
    _min?: DailyAggregationMinAggregateInputType
    _max?: DailyAggregationMaxAggregateInputType
  }

  export type DailyAggregationGroupByOutputType = {
    id: string
    date: Date
    dateKey: string
    dailyActiveUsers: number
    newUsers: number
    lessonsStarted: number
    lessonsCompleted: number
    avgLessonScore: number
    speakingSessions: number
    avgSpeakingScore: number
    grammarExercises: number
    avgGrammarScore: number
    vocabularyLearned: number
    aiMessages: number
    avgAILatency: number
    newSubscriptions: number
    subscriptionRevenue: number
    totalTimeMinutes: number
    avgSessionMinutes: number
    createdAt: Date
    updatedAt: Date
    _count: DailyAggregationCountAggregateOutputType | null
    _avg: DailyAggregationAvgAggregateOutputType | null
    _sum: DailyAggregationSumAggregateOutputType | null
    _min: DailyAggregationMinAggregateOutputType | null
    _max: DailyAggregationMaxAggregateOutputType | null
  }

  type GetDailyAggregationGroupByPayload<T extends DailyAggregationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyAggregationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyAggregationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyAggregationGroupByOutputType[P]>
            : GetScalarType<T[P], DailyAggregationGroupByOutputType[P]>
        }
      >
    >


  export type DailyAggregationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    dateKey?: boolean
    dailyActiveUsers?: boolean
    newUsers?: boolean
    lessonsStarted?: boolean
    lessonsCompleted?: boolean
    avgLessonScore?: boolean
    speakingSessions?: boolean
    avgSpeakingScore?: boolean
    grammarExercises?: boolean
    avgGrammarScore?: boolean
    vocabularyLearned?: boolean
    aiMessages?: boolean
    avgAILatency?: boolean
    newSubscriptions?: boolean
    subscriptionRevenue?: boolean
    totalTimeMinutes?: boolean
    avgSessionMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dailyAggregation"]>

  export type DailyAggregationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    dateKey?: boolean
    dailyActiveUsers?: boolean
    newUsers?: boolean
    lessonsStarted?: boolean
    lessonsCompleted?: boolean
    avgLessonScore?: boolean
    speakingSessions?: boolean
    avgSpeakingScore?: boolean
    grammarExercises?: boolean
    avgGrammarScore?: boolean
    vocabularyLearned?: boolean
    aiMessages?: boolean
    avgAILatency?: boolean
    newSubscriptions?: boolean
    subscriptionRevenue?: boolean
    totalTimeMinutes?: boolean
    avgSessionMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dailyAggregation"]>

  export type DailyAggregationSelectScalar = {
    id?: boolean
    date?: boolean
    dateKey?: boolean
    dailyActiveUsers?: boolean
    newUsers?: boolean
    lessonsStarted?: boolean
    lessonsCompleted?: boolean
    avgLessonScore?: boolean
    speakingSessions?: boolean
    avgSpeakingScore?: boolean
    grammarExercises?: boolean
    avgGrammarScore?: boolean
    vocabularyLearned?: boolean
    aiMessages?: boolean
    avgAILatency?: boolean
    newSubscriptions?: boolean
    subscriptionRevenue?: boolean
    totalTimeMinutes?: boolean
    avgSessionMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $DailyAggregationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyAggregation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      dateKey: string
      dailyActiveUsers: number
      newUsers: number
      lessonsStarted: number
      lessonsCompleted: number
      avgLessonScore: number
      speakingSessions: number
      avgSpeakingScore: number
      grammarExercises: number
      avgGrammarScore: number
      vocabularyLearned: number
      aiMessages: number
      avgAILatency: number
      newSubscriptions: number
      subscriptionRevenue: number
      totalTimeMinutes: number
      avgSessionMinutes: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyAggregation"]>
    composites: {}
  }

  type DailyAggregationGetPayload<S extends boolean | null | undefined | DailyAggregationDefaultArgs> = $Result.GetResult<Prisma.$DailyAggregationPayload, S>

  type DailyAggregationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyAggregationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyAggregationCountAggregateInputType | true
    }

  export interface DailyAggregationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyAggregation'], meta: { name: 'DailyAggregation' } }
    /**
     * Find zero or one DailyAggregation that matches the filter.
     * @param {DailyAggregationFindUniqueArgs} args - Arguments to find a DailyAggregation
     * @example
     * // Get one DailyAggregation
     * const dailyAggregation = await prisma.dailyAggregation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyAggregationFindUniqueArgs>(args: SelectSubset<T, DailyAggregationFindUniqueArgs<ExtArgs>>): Prisma__DailyAggregationClient<$Result.GetResult<Prisma.$DailyAggregationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyAggregation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyAggregationFindUniqueOrThrowArgs} args - Arguments to find a DailyAggregation
     * @example
     * // Get one DailyAggregation
     * const dailyAggregation = await prisma.dailyAggregation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyAggregationFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyAggregationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyAggregationClient<$Result.GetResult<Prisma.$DailyAggregationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyAggregation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAggregationFindFirstArgs} args - Arguments to find a DailyAggregation
     * @example
     * // Get one DailyAggregation
     * const dailyAggregation = await prisma.dailyAggregation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyAggregationFindFirstArgs>(args?: SelectSubset<T, DailyAggregationFindFirstArgs<ExtArgs>>): Prisma__DailyAggregationClient<$Result.GetResult<Prisma.$DailyAggregationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyAggregation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAggregationFindFirstOrThrowArgs} args - Arguments to find a DailyAggregation
     * @example
     * // Get one DailyAggregation
     * const dailyAggregation = await prisma.dailyAggregation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyAggregationFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyAggregationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyAggregationClient<$Result.GetResult<Prisma.$DailyAggregationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyAggregations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAggregationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyAggregations
     * const dailyAggregations = await prisma.dailyAggregation.findMany()
     * 
     * // Get first 10 DailyAggregations
     * const dailyAggregations = await prisma.dailyAggregation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyAggregationWithIdOnly = await prisma.dailyAggregation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyAggregationFindManyArgs>(args?: SelectSubset<T, DailyAggregationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyAggregationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyAggregation.
     * @param {DailyAggregationCreateArgs} args - Arguments to create a DailyAggregation.
     * @example
     * // Create one DailyAggregation
     * const DailyAggregation = await prisma.dailyAggregation.create({
     *   data: {
     *     // ... data to create a DailyAggregation
     *   }
     * })
     * 
     */
    create<T extends DailyAggregationCreateArgs>(args: SelectSubset<T, DailyAggregationCreateArgs<ExtArgs>>): Prisma__DailyAggregationClient<$Result.GetResult<Prisma.$DailyAggregationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyAggregations.
     * @param {DailyAggregationCreateManyArgs} args - Arguments to create many DailyAggregations.
     * @example
     * // Create many DailyAggregations
     * const dailyAggregation = await prisma.dailyAggregation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyAggregationCreateManyArgs>(args?: SelectSubset<T, DailyAggregationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyAggregations and returns the data saved in the database.
     * @param {DailyAggregationCreateManyAndReturnArgs} args - Arguments to create many DailyAggregations.
     * @example
     * // Create many DailyAggregations
     * const dailyAggregation = await prisma.dailyAggregation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyAggregations and only return the `id`
     * const dailyAggregationWithIdOnly = await prisma.dailyAggregation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyAggregationCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyAggregationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyAggregationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyAggregation.
     * @param {DailyAggregationDeleteArgs} args - Arguments to delete one DailyAggregation.
     * @example
     * // Delete one DailyAggregation
     * const DailyAggregation = await prisma.dailyAggregation.delete({
     *   where: {
     *     // ... filter to delete one DailyAggregation
     *   }
     * })
     * 
     */
    delete<T extends DailyAggregationDeleteArgs>(args: SelectSubset<T, DailyAggregationDeleteArgs<ExtArgs>>): Prisma__DailyAggregationClient<$Result.GetResult<Prisma.$DailyAggregationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyAggregation.
     * @param {DailyAggregationUpdateArgs} args - Arguments to update one DailyAggregation.
     * @example
     * // Update one DailyAggregation
     * const dailyAggregation = await prisma.dailyAggregation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyAggregationUpdateArgs>(args: SelectSubset<T, DailyAggregationUpdateArgs<ExtArgs>>): Prisma__DailyAggregationClient<$Result.GetResult<Prisma.$DailyAggregationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyAggregations.
     * @param {DailyAggregationDeleteManyArgs} args - Arguments to filter DailyAggregations to delete.
     * @example
     * // Delete a few DailyAggregations
     * const { count } = await prisma.dailyAggregation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyAggregationDeleteManyArgs>(args?: SelectSubset<T, DailyAggregationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyAggregations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAggregationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyAggregations
     * const dailyAggregation = await prisma.dailyAggregation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyAggregationUpdateManyArgs>(args: SelectSubset<T, DailyAggregationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyAggregation.
     * @param {DailyAggregationUpsertArgs} args - Arguments to update or create a DailyAggregation.
     * @example
     * // Update or create a DailyAggregation
     * const dailyAggregation = await prisma.dailyAggregation.upsert({
     *   create: {
     *     // ... data to create a DailyAggregation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyAggregation we want to update
     *   }
     * })
     */
    upsert<T extends DailyAggregationUpsertArgs>(args: SelectSubset<T, DailyAggregationUpsertArgs<ExtArgs>>): Prisma__DailyAggregationClient<$Result.GetResult<Prisma.$DailyAggregationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyAggregations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAggregationCountArgs} args - Arguments to filter DailyAggregations to count.
     * @example
     * // Count the number of DailyAggregations
     * const count = await prisma.dailyAggregation.count({
     *   where: {
     *     // ... the filter for the DailyAggregations we want to count
     *   }
     * })
    **/
    count<T extends DailyAggregationCountArgs>(
      args?: Subset<T, DailyAggregationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyAggregationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyAggregation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAggregationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyAggregationAggregateArgs>(args: Subset<T, DailyAggregationAggregateArgs>): Prisma.PrismaPromise<GetDailyAggregationAggregateType<T>>

    /**
     * Group by DailyAggregation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyAggregationGroupByArgs} args - Group by arguments.
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
      T extends DailyAggregationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyAggregationGroupByArgs['orderBy'] }
        : { orderBy?: DailyAggregationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyAggregationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyAggregationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyAggregation model
   */
  readonly fields: DailyAggregationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyAggregation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyAggregationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DailyAggregation model
   */ 
  interface DailyAggregationFieldRefs {
    readonly id: FieldRef<"DailyAggregation", 'String'>
    readonly date: FieldRef<"DailyAggregation", 'DateTime'>
    readonly dateKey: FieldRef<"DailyAggregation", 'String'>
    readonly dailyActiveUsers: FieldRef<"DailyAggregation", 'Int'>
    readonly newUsers: FieldRef<"DailyAggregation", 'Int'>
    readonly lessonsStarted: FieldRef<"DailyAggregation", 'Int'>
    readonly lessonsCompleted: FieldRef<"DailyAggregation", 'Int'>
    readonly avgLessonScore: FieldRef<"DailyAggregation", 'Float'>
    readonly speakingSessions: FieldRef<"DailyAggregation", 'Int'>
    readonly avgSpeakingScore: FieldRef<"DailyAggregation", 'Float'>
    readonly grammarExercises: FieldRef<"DailyAggregation", 'Int'>
    readonly avgGrammarScore: FieldRef<"DailyAggregation", 'Float'>
    readonly vocabularyLearned: FieldRef<"DailyAggregation", 'Int'>
    readonly aiMessages: FieldRef<"DailyAggregation", 'Int'>
    readonly avgAILatency: FieldRef<"DailyAggregation", 'Float'>
    readonly newSubscriptions: FieldRef<"DailyAggregation", 'Int'>
    readonly subscriptionRevenue: FieldRef<"DailyAggregation", 'Int'>
    readonly totalTimeMinutes: FieldRef<"DailyAggregation", 'Int'>
    readonly avgSessionMinutes: FieldRef<"DailyAggregation", 'Float'>
    readonly createdAt: FieldRef<"DailyAggregation", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyAggregation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyAggregation findUnique
   */
  export type DailyAggregationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelect<ExtArgs> | null
    /**
     * Filter, which DailyAggregation to fetch.
     */
    where: DailyAggregationWhereUniqueInput
  }

  /**
   * DailyAggregation findUniqueOrThrow
   */
  export type DailyAggregationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelect<ExtArgs> | null
    /**
     * Filter, which DailyAggregation to fetch.
     */
    where: DailyAggregationWhereUniqueInput
  }

  /**
   * DailyAggregation findFirst
   */
  export type DailyAggregationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelect<ExtArgs> | null
    /**
     * Filter, which DailyAggregation to fetch.
     */
    where?: DailyAggregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyAggregations to fetch.
     */
    orderBy?: DailyAggregationOrderByWithRelationInput | DailyAggregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyAggregations.
     */
    cursor?: DailyAggregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyAggregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyAggregations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyAggregations.
     */
    distinct?: DailyAggregationScalarFieldEnum | DailyAggregationScalarFieldEnum[]
  }

  /**
   * DailyAggregation findFirstOrThrow
   */
  export type DailyAggregationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelect<ExtArgs> | null
    /**
     * Filter, which DailyAggregation to fetch.
     */
    where?: DailyAggregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyAggregations to fetch.
     */
    orderBy?: DailyAggregationOrderByWithRelationInput | DailyAggregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyAggregations.
     */
    cursor?: DailyAggregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyAggregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyAggregations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyAggregations.
     */
    distinct?: DailyAggregationScalarFieldEnum | DailyAggregationScalarFieldEnum[]
  }

  /**
   * DailyAggregation findMany
   */
  export type DailyAggregationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelect<ExtArgs> | null
    /**
     * Filter, which DailyAggregations to fetch.
     */
    where?: DailyAggregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyAggregations to fetch.
     */
    orderBy?: DailyAggregationOrderByWithRelationInput | DailyAggregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyAggregations.
     */
    cursor?: DailyAggregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyAggregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyAggregations.
     */
    skip?: number
    distinct?: DailyAggregationScalarFieldEnum | DailyAggregationScalarFieldEnum[]
  }

  /**
   * DailyAggregation create
   */
  export type DailyAggregationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelect<ExtArgs> | null
    /**
     * The data needed to create a DailyAggregation.
     */
    data: XOR<DailyAggregationCreateInput, DailyAggregationUncheckedCreateInput>
  }

  /**
   * DailyAggregation createMany
   */
  export type DailyAggregationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyAggregations.
     */
    data: DailyAggregationCreateManyInput | DailyAggregationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyAggregation createManyAndReturn
   */
  export type DailyAggregationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyAggregations.
     */
    data: DailyAggregationCreateManyInput | DailyAggregationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyAggregation update
   */
  export type DailyAggregationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelect<ExtArgs> | null
    /**
     * The data needed to update a DailyAggregation.
     */
    data: XOR<DailyAggregationUpdateInput, DailyAggregationUncheckedUpdateInput>
    /**
     * Choose, which DailyAggregation to update.
     */
    where: DailyAggregationWhereUniqueInput
  }

  /**
   * DailyAggregation updateMany
   */
  export type DailyAggregationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyAggregations.
     */
    data: XOR<DailyAggregationUpdateManyMutationInput, DailyAggregationUncheckedUpdateManyInput>
    /**
     * Filter which DailyAggregations to update
     */
    where?: DailyAggregationWhereInput
  }

  /**
   * DailyAggregation upsert
   */
  export type DailyAggregationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelect<ExtArgs> | null
    /**
     * The filter to search for the DailyAggregation to update in case it exists.
     */
    where: DailyAggregationWhereUniqueInput
    /**
     * In case the DailyAggregation found by the `where` argument doesn't exist, create a new DailyAggregation with this data.
     */
    create: XOR<DailyAggregationCreateInput, DailyAggregationUncheckedCreateInput>
    /**
     * In case the DailyAggregation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyAggregationUpdateInput, DailyAggregationUncheckedUpdateInput>
  }

  /**
   * DailyAggregation delete
   */
  export type DailyAggregationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelect<ExtArgs> | null
    /**
     * Filter which DailyAggregation to delete.
     */
    where: DailyAggregationWhereUniqueInput
  }

  /**
   * DailyAggregation deleteMany
   */
  export type DailyAggregationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyAggregations to delete
     */
    where?: DailyAggregationWhereInput
  }

  /**
   * DailyAggregation without action
   */
  export type DailyAggregationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyAggregation
     */
    select?: DailyAggregationSelect<ExtArgs> | null
  }


  /**
   * Model MonthlyAggregation
   */

  export type AggregateMonthlyAggregation = {
    _count: MonthlyAggregationCountAggregateOutputType | null
    _avg: MonthlyAggregationAvgAggregateOutputType | null
    _sum: MonthlyAggregationSumAggregateOutputType | null
    _min: MonthlyAggregationMinAggregateOutputType | null
    _max: MonthlyAggregationMaxAggregateOutputType | null
  }

  export type MonthlyAggregationAvgAggregateOutputType = {
    monthlyActiveUsers: number | null
    totalUsers: number | null
    totalLessonsCompleted: number | null
    avgMonthlyLessons: number | null
    totalSubscriptions: number | null
    conversionRate: number | null
    monthlyRevenue: number | null
    retentionRate: number | null
    churnRate: number | null
  }

  export type MonthlyAggregationSumAggregateOutputType = {
    monthlyActiveUsers: number | null
    totalUsers: number | null
    totalLessonsCompleted: number | null
    avgMonthlyLessons: number | null
    totalSubscriptions: number | null
    conversionRate: number | null
    monthlyRevenue: number | null
    retentionRate: number | null
    churnRate: number | null
  }

  export type MonthlyAggregationMinAggregateOutputType = {
    id: string | null
    month: Date | null
    monthKey: string | null
    monthlyActiveUsers: number | null
    totalUsers: number | null
    totalLessonsCompleted: number | null
    avgMonthlyLessons: number | null
    totalSubscriptions: number | null
    conversionRate: number | null
    monthlyRevenue: number | null
    retentionRate: number | null
    churnRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyAggregationMaxAggregateOutputType = {
    id: string | null
    month: Date | null
    monthKey: string | null
    monthlyActiveUsers: number | null
    totalUsers: number | null
    totalLessonsCompleted: number | null
    avgMonthlyLessons: number | null
    totalSubscriptions: number | null
    conversionRate: number | null
    monthlyRevenue: number | null
    retentionRate: number | null
    churnRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyAggregationCountAggregateOutputType = {
    id: number
    month: number
    monthKey: number
    monthlyActiveUsers: number
    totalUsers: number
    totalLessonsCompleted: number
    avgMonthlyLessons: number
    totalSubscriptions: number
    conversionRate: number
    monthlyRevenue: number
    retentionRate: number
    churnRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonthlyAggregationAvgAggregateInputType = {
    monthlyActiveUsers?: true
    totalUsers?: true
    totalLessonsCompleted?: true
    avgMonthlyLessons?: true
    totalSubscriptions?: true
    conversionRate?: true
    monthlyRevenue?: true
    retentionRate?: true
    churnRate?: true
  }

  export type MonthlyAggregationSumAggregateInputType = {
    monthlyActiveUsers?: true
    totalUsers?: true
    totalLessonsCompleted?: true
    avgMonthlyLessons?: true
    totalSubscriptions?: true
    conversionRate?: true
    monthlyRevenue?: true
    retentionRate?: true
    churnRate?: true
  }

  export type MonthlyAggregationMinAggregateInputType = {
    id?: true
    month?: true
    monthKey?: true
    monthlyActiveUsers?: true
    totalUsers?: true
    totalLessonsCompleted?: true
    avgMonthlyLessons?: true
    totalSubscriptions?: true
    conversionRate?: true
    monthlyRevenue?: true
    retentionRate?: true
    churnRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyAggregationMaxAggregateInputType = {
    id?: true
    month?: true
    monthKey?: true
    monthlyActiveUsers?: true
    totalUsers?: true
    totalLessonsCompleted?: true
    avgMonthlyLessons?: true
    totalSubscriptions?: true
    conversionRate?: true
    monthlyRevenue?: true
    retentionRate?: true
    churnRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyAggregationCountAggregateInputType = {
    id?: true
    month?: true
    monthKey?: true
    monthlyActiveUsers?: true
    totalUsers?: true
    totalLessonsCompleted?: true
    avgMonthlyLessons?: true
    totalSubscriptions?: true
    conversionRate?: true
    monthlyRevenue?: true
    retentionRate?: true
    churnRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonthlyAggregationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyAggregation to aggregate.
     */
    where?: MonthlyAggregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyAggregations to fetch.
     */
    orderBy?: MonthlyAggregationOrderByWithRelationInput | MonthlyAggregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyAggregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyAggregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyAggregations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyAggregations
    **/
    _count?: true | MonthlyAggregationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyAggregationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyAggregationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyAggregationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyAggregationMaxAggregateInputType
  }

  export type GetMonthlyAggregationAggregateType<T extends MonthlyAggregationAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyAggregation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyAggregation[P]>
      : GetScalarType<T[P], AggregateMonthlyAggregation[P]>
  }




  export type MonthlyAggregationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyAggregationWhereInput
    orderBy?: MonthlyAggregationOrderByWithAggregationInput | MonthlyAggregationOrderByWithAggregationInput[]
    by: MonthlyAggregationScalarFieldEnum[] | MonthlyAggregationScalarFieldEnum
    having?: MonthlyAggregationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyAggregationCountAggregateInputType | true
    _avg?: MonthlyAggregationAvgAggregateInputType
    _sum?: MonthlyAggregationSumAggregateInputType
    _min?: MonthlyAggregationMinAggregateInputType
    _max?: MonthlyAggregationMaxAggregateInputType
  }

  export type MonthlyAggregationGroupByOutputType = {
    id: string
    month: Date
    monthKey: string
    monthlyActiveUsers: number
    totalUsers: number
    totalLessonsCompleted: number
    avgMonthlyLessons: number
    totalSubscriptions: number
    conversionRate: number
    monthlyRevenue: number
    retentionRate: number
    churnRate: number
    createdAt: Date
    updatedAt: Date
    _count: MonthlyAggregationCountAggregateOutputType | null
    _avg: MonthlyAggregationAvgAggregateOutputType | null
    _sum: MonthlyAggregationSumAggregateOutputType | null
    _min: MonthlyAggregationMinAggregateOutputType | null
    _max: MonthlyAggregationMaxAggregateOutputType | null
  }

  type GetMonthlyAggregationGroupByPayload<T extends MonthlyAggregationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyAggregationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyAggregationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyAggregationGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyAggregationGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyAggregationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    monthKey?: boolean
    monthlyActiveUsers?: boolean
    totalUsers?: boolean
    totalLessonsCompleted?: boolean
    avgMonthlyLessons?: boolean
    totalSubscriptions?: boolean
    conversionRate?: boolean
    monthlyRevenue?: boolean
    retentionRate?: boolean
    churnRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["monthlyAggregation"]>

  export type MonthlyAggregationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    month?: boolean
    monthKey?: boolean
    monthlyActiveUsers?: boolean
    totalUsers?: boolean
    totalLessonsCompleted?: boolean
    avgMonthlyLessons?: boolean
    totalSubscriptions?: boolean
    conversionRate?: boolean
    monthlyRevenue?: boolean
    retentionRate?: boolean
    churnRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["monthlyAggregation"]>

  export type MonthlyAggregationSelectScalar = {
    id?: boolean
    month?: boolean
    monthKey?: boolean
    monthlyActiveUsers?: boolean
    totalUsers?: boolean
    totalLessonsCompleted?: boolean
    avgMonthlyLessons?: boolean
    totalSubscriptions?: boolean
    conversionRate?: boolean
    monthlyRevenue?: boolean
    retentionRate?: boolean
    churnRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MonthlyAggregationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyAggregation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      month: Date
      monthKey: string
      monthlyActiveUsers: number
      totalUsers: number
      totalLessonsCompleted: number
      avgMonthlyLessons: number
      totalSubscriptions: number
      conversionRate: number
      monthlyRevenue: number
      retentionRate: number
      churnRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monthlyAggregation"]>
    composites: {}
  }

  type MonthlyAggregationGetPayload<S extends boolean | null | undefined | MonthlyAggregationDefaultArgs> = $Result.GetResult<Prisma.$MonthlyAggregationPayload, S>

  type MonthlyAggregationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonthlyAggregationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonthlyAggregationCountAggregateInputType | true
    }

  export interface MonthlyAggregationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyAggregation'], meta: { name: 'MonthlyAggregation' } }
    /**
     * Find zero or one MonthlyAggregation that matches the filter.
     * @param {MonthlyAggregationFindUniqueArgs} args - Arguments to find a MonthlyAggregation
     * @example
     * // Get one MonthlyAggregation
     * const monthlyAggregation = await prisma.monthlyAggregation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyAggregationFindUniqueArgs>(args: SelectSubset<T, MonthlyAggregationFindUniqueArgs<ExtArgs>>): Prisma__MonthlyAggregationClient<$Result.GetResult<Prisma.$MonthlyAggregationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MonthlyAggregation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MonthlyAggregationFindUniqueOrThrowArgs} args - Arguments to find a MonthlyAggregation
     * @example
     * // Get one MonthlyAggregation
     * const monthlyAggregation = await prisma.monthlyAggregation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyAggregationFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyAggregationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyAggregationClient<$Result.GetResult<Prisma.$MonthlyAggregationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MonthlyAggregation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyAggregationFindFirstArgs} args - Arguments to find a MonthlyAggregation
     * @example
     * // Get one MonthlyAggregation
     * const monthlyAggregation = await prisma.monthlyAggregation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyAggregationFindFirstArgs>(args?: SelectSubset<T, MonthlyAggregationFindFirstArgs<ExtArgs>>): Prisma__MonthlyAggregationClient<$Result.GetResult<Prisma.$MonthlyAggregationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MonthlyAggregation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyAggregationFindFirstOrThrowArgs} args - Arguments to find a MonthlyAggregation
     * @example
     * // Get one MonthlyAggregation
     * const monthlyAggregation = await prisma.monthlyAggregation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyAggregationFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyAggregationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyAggregationClient<$Result.GetResult<Prisma.$MonthlyAggregationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MonthlyAggregations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyAggregationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyAggregations
     * const monthlyAggregations = await prisma.monthlyAggregation.findMany()
     * 
     * // Get first 10 MonthlyAggregations
     * const monthlyAggregations = await prisma.monthlyAggregation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyAggregationWithIdOnly = await prisma.monthlyAggregation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyAggregationFindManyArgs>(args?: SelectSubset<T, MonthlyAggregationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyAggregationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MonthlyAggregation.
     * @param {MonthlyAggregationCreateArgs} args - Arguments to create a MonthlyAggregation.
     * @example
     * // Create one MonthlyAggregation
     * const MonthlyAggregation = await prisma.monthlyAggregation.create({
     *   data: {
     *     // ... data to create a MonthlyAggregation
     *   }
     * })
     * 
     */
    create<T extends MonthlyAggregationCreateArgs>(args: SelectSubset<T, MonthlyAggregationCreateArgs<ExtArgs>>): Prisma__MonthlyAggregationClient<$Result.GetResult<Prisma.$MonthlyAggregationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MonthlyAggregations.
     * @param {MonthlyAggregationCreateManyArgs} args - Arguments to create many MonthlyAggregations.
     * @example
     * // Create many MonthlyAggregations
     * const monthlyAggregation = await prisma.monthlyAggregation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyAggregationCreateManyArgs>(args?: SelectSubset<T, MonthlyAggregationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyAggregations and returns the data saved in the database.
     * @param {MonthlyAggregationCreateManyAndReturnArgs} args - Arguments to create many MonthlyAggregations.
     * @example
     * // Create many MonthlyAggregations
     * const monthlyAggregation = await prisma.monthlyAggregation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyAggregations and only return the `id`
     * const monthlyAggregationWithIdOnly = await prisma.monthlyAggregation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyAggregationCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyAggregationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyAggregationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MonthlyAggregation.
     * @param {MonthlyAggregationDeleteArgs} args - Arguments to delete one MonthlyAggregation.
     * @example
     * // Delete one MonthlyAggregation
     * const MonthlyAggregation = await prisma.monthlyAggregation.delete({
     *   where: {
     *     // ... filter to delete one MonthlyAggregation
     *   }
     * })
     * 
     */
    delete<T extends MonthlyAggregationDeleteArgs>(args: SelectSubset<T, MonthlyAggregationDeleteArgs<ExtArgs>>): Prisma__MonthlyAggregationClient<$Result.GetResult<Prisma.$MonthlyAggregationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MonthlyAggregation.
     * @param {MonthlyAggregationUpdateArgs} args - Arguments to update one MonthlyAggregation.
     * @example
     * // Update one MonthlyAggregation
     * const monthlyAggregation = await prisma.monthlyAggregation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyAggregationUpdateArgs>(args: SelectSubset<T, MonthlyAggregationUpdateArgs<ExtArgs>>): Prisma__MonthlyAggregationClient<$Result.GetResult<Prisma.$MonthlyAggregationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MonthlyAggregations.
     * @param {MonthlyAggregationDeleteManyArgs} args - Arguments to filter MonthlyAggregations to delete.
     * @example
     * // Delete a few MonthlyAggregations
     * const { count } = await prisma.monthlyAggregation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyAggregationDeleteManyArgs>(args?: SelectSubset<T, MonthlyAggregationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyAggregations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyAggregationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyAggregations
     * const monthlyAggregation = await prisma.monthlyAggregation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyAggregationUpdateManyArgs>(args: SelectSubset<T, MonthlyAggregationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlyAggregation.
     * @param {MonthlyAggregationUpsertArgs} args - Arguments to update or create a MonthlyAggregation.
     * @example
     * // Update or create a MonthlyAggregation
     * const monthlyAggregation = await prisma.monthlyAggregation.upsert({
     *   create: {
     *     // ... data to create a MonthlyAggregation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyAggregation we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyAggregationUpsertArgs>(args: SelectSubset<T, MonthlyAggregationUpsertArgs<ExtArgs>>): Prisma__MonthlyAggregationClient<$Result.GetResult<Prisma.$MonthlyAggregationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MonthlyAggregations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyAggregationCountArgs} args - Arguments to filter MonthlyAggregations to count.
     * @example
     * // Count the number of MonthlyAggregations
     * const count = await prisma.monthlyAggregation.count({
     *   where: {
     *     // ... the filter for the MonthlyAggregations we want to count
     *   }
     * })
    **/
    count<T extends MonthlyAggregationCountArgs>(
      args?: Subset<T, MonthlyAggregationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyAggregationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyAggregation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyAggregationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonthlyAggregationAggregateArgs>(args: Subset<T, MonthlyAggregationAggregateArgs>): Prisma.PrismaPromise<GetMonthlyAggregationAggregateType<T>>

    /**
     * Group by MonthlyAggregation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyAggregationGroupByArgs} args - Group by arguments.
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
      T extends MonthlyAggregationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyAggregationGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyAggregationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonthlyAggregationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyAggregationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyAggregation model
   */
  readonly fields: MonthlyAggregationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyAggregation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyAggregationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MonthlyAggregation model
   */ 
  interface MonthlyAggregationFieldRefs {
    readonly id: FieldRef<"MonthlyAggregation", 'String'>
    readonly month: FieldRef<"MonthlyAggregation", 'DateTime'>
    readonly monthKey: FieldRef<"MonthlyAggregation", 'String'>
    readonly monthlyActiveUsers: FieldRef<"MonthlyAggregation", 'Int'>
    readonly totalUsers: FieldRef<"MonthlyAggregation", 'Int'>
    readonly totalLessonsCompleted: FieldRef<"MonthlyAggregation", 'Int'>
    readonly avgMonthlyLessons: FieldRef<"MonthlyAggregation", 'Float'>
    readonly totalSubscriptions: FieldRef<"MonthlyAggregation", 'Int'>
    readonly conversionRate: FieldRef<"MonthlyAggregation", 'Float'>
    readonly monthlyRevenue: FieldRef<"MonthlyAggregation", 'Int'>
    readonly retentionRate: FieldRef<"MonthlyAggregation", 'Float'>
    readonly churnRate: FieldRef<"MonthlyAggregation", 'Float'>
    readonly createdAt: FieldRef<"MonthlyAggregation", 'DateTime'>
    readonly updatedAt: FieldRef<"MonthlyAggregation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyAggregation findUnique
   */
  export type MonthlyAggregationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelect<ExtArgs> | null
    /**
     * Filter, which MonthlyAggregation to fetch.
     */
    where: MonthlyAggregationWhereUniqueInput
  }

  /**
   * MonthlyAggregation findUniqueOrThrow
   */
  export type MonthlyAggregationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelect<ExtArgs> | null
    /**
     * Filter, which MonthlyAggregation to fetch.
     */
    where: MonthlyAggregationWhereUniqueInput
  }

  /**
   * MonthlyAggregation findFirst
   */
  export type MonthlyAggregationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelect<ExtArgs> | null
    /**
     * Filter, which MonthlyAggregation to fetch.
     */
    where?: MonthlyAggregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyAggregations to fetch.
     */
    orderBy?: MonthlyAggregationOrderByWithRelationInput | MonthlyAggregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyAggregations.
     */
    cursor?: MonthlyAggregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyAggregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyAggregations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyAggregations.
     */
    distinct?: MonthlyAggregationScalarFieldEnum | MonthlyAggregationScalarFieldEnum[]
  }

  /**
   * MonthlyAggregation findFirstOrThrow
   */
  export type MonthlyAggregationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelect<ExtArgs> | null
    /**
     * Filter, which MonthlyAggregation to fetch.
     */
    where?: MonthlyAggregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyAggregations to fetch.
     */
    orderBy?: MonthlyAggregationOrderByWithRelationInput | MonthlyAggregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyAggregations.
     */
    cursor?: MonthlyAggregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyAggregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyAggregations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyAggregations.
     */
    distinct?: MonthlyAggregationScalarFieldEnum | MonthlyAggregationScalarFieldEnum[]
  }

  /**
   * MonthlyAggregation findMany
   */
  export type MonthlyAggregationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelect<ExtArgs> | null
    /**
     * Filter, which MonthlyAggregations to fetch.
     */
    where?: MonthlyAggregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyAggregations to fetch.
     */
    orderBy?: MonthlyAggregationOrderByWithRelationInput | MonthlyAggregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyAggregations.
     */
    cursor?: MonthlyAggregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyAggregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyAggregations.
     */
    skip?: number
    distinct?: MonthlyAggregationScalarFieldEnum | MonthlyAggregationScalarFieldEnum[]
  }

  /**
   * MonthlyAggregation create
   */
  export type MonthlyAggregationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelect<ExtArgs> | null
    /**
     * The data needed to create a MonthlyAggregation.
     */
    data: XOR<MonthlyAggregationCreateInput, MonthlyAggregationUncheckedCreateInput>
  }

  /**
   * MonthlyAggregation createMany
   */
  export type MonthlyAggregationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyAggregations.
     */
    data: MonthlyAggregationCreateManyInput | MonthlyAggregationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyAggregation createManyAndReturn
   */
  export type MonthlyAggregationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MonthlyAggregations.
     */
    data: MonthlyAggregationCreateManyInput | MonthlyAggregationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyAggregation update
   */
  export type MonthlyAggregationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelect<ExtArgs> | null
    /**
     * The data needed to update a MonthlyAggregation.
     */
    data: XOR<MonthlyAggregationUpdateInput, MonthlyAggregationUncheckedUpdateInput>
    /**
     * Choose, which MonthlyAggregation to update.
     */
    where: MonthlyAggregationWhereUniqueInput
  }

  /**
   * MonthlyAggregation updateMany
   */
  export type MonthlyAggregationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyAggregations.
     */
    data: XOR<MonthlyAggregationUpdateManyMutationInput, MonthlyAggregationUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyAggregations to update
     */
    where?: MonthlyAggregationWhereInput
  }

  /**
   * MonthlyAggregation upsert
   */
  export type MonthlyAggregationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelect<ExtArgs> | null
    /**
     * The filter to search for the MonthlyAggregation to update in case it exists.
     */
    where: MonthlyAggregationWhereUniqueInput
    /**
     * In case the MonthlyAggregation found by the `where` argument doesn't exist, create a new MonthlyAggregation with this data.
     */
    create: XOR<MonthlyAggregationCreateInput, MonthlyAggregationUncheckedCreateInput>
    /**
     * In case the MonthlyAggregation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyAggregationUpdateInput, MonthlyAggregationUncheckedUpdateInput>
  }

  /**
   * MonthlyAggregation delete
   */
  export type MonthlyAggregationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelect<ExtArgs> | null
    /**
     * Filter which MonthlyAggregation to delete.
     */
    where: MonthlyAggregationWhereUniqueInput
  }

  /**
   * MonthlyAggregation deleteMany
   */
  export type MonthlyAggregationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyAggregations to delete
     */
    where?: MonthlyAggregationWhereInput
  }

  /**
   * MonthlyAggregation without action
   */
  export type MonthlyAggregationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyAggregation
     */
    select?: MonthlyAggregationSelect<ExtArgs> | null
  }


  /**
   * Model UserAnalytics
   */

  export type AggregateUserAnalytics = {
    _count: UserAnalyticsCountAggregateOutputType | null
    _avg: UserAnalyticsAvgAggregateOutputType | null
    _sum: UserAnalyticsSumAggregateOutputType | null
    _min: UserAnalyticsMinAggregateOutputType | null
    _max: UserAnalyticsMaxAggregateOutputType | null
  }

  export type UserAnalyticsAvgAggregateOutputType = {
    totalDaysActive: number | null
    totalLessonsCompleted: number | null
    totalSpeakingSessions: number | null
    totalAIMessages: number | null
    totalTimeMinutes: number | null
    avgLessonScore: number | null
    avgSpeakingScore: number | null
  }

  export type UserAnalyticsSumAggregateOutputType = {
    totalDaysActive: number | null
    totalLessonsCompleted: number | null
    totalSpeakingSessions: number | null
    totalAIMessages: number | null
    totalTimeMinutes: number | null
    avgLessonScore: number | null
    avgSpeakingScore: number | null
  }

  export type UserAnalyticsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    firstActivityAt: Date | null
    lastActivityAt: Date | null
    totalDaysActive: number | null
    totalLessonsCompleted: number | null
    totalSpeakingSessions: number | null
    totalAIMessages: number | null
    totalTimeMinutes: number | null
    avgLessonScore: number | null
    avgSpeakingScore: number | null
    currentPlan: string | null
    subscriptionStartAt: Date | null
    isActive: boolean | null
    isAnonymized: boolean | null
    anonymizedAt: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserAnalyticsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    firstActivityAt: Date | null
    lastActivityAt: Date | null
    totalDaysActive: number | null
    totalLessonsCompleted: number | null
    totalSpeakingSessions: number | null
    totalAIMessages: number | null
    totalTimeMinutes: number | null
    avgLessonScore: number | null
    avgSpeakingScore: number | null
    currentPlan: string | null
    subscriptionStartAt: Date | null
    isActive: boolean | null
    isAnonymized: boolean | null
    anonymizedAt: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserAnalyticsCountAggregateOutputType = {
    id: number
    userId: number
    firstActivityAt: number
    lastActivityAt: number
    totalDaysActive: number
    totalLessonsCompleted: number
    totalSpeakingSessions: number
    totalAIMessages: number
    totalTimeMinutes: number
    avgLessonScore: number
    avgSpeakingScore: number
    currentPlan: number
    subscriptionStartAt: number
    isActive: number
    isAnonymized: number
    anonymizedAt: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type UserAnalyticsAvgAggregateInputType = {
    totalDaysActive?: true
    totalLessonsCompleted?: true
    totalSpeakingSessions?: true
    totalAIMessages?: true
    totalTimeMinutes?: true
    avgLessonScore?: true
    avgSpeakingScore?: true
  }

  export type UserAnalyticsSumAggregateInputType = {
    totalDaysActive?: true
    totalLessonsCompleted?: true
    totalSpeakingSessions?: true
    totalAIMessages?: true
    totalTimeMinutes?: true
    avgLessonScore?: true
    avgSpeakingScore?: true
  }

  export type UserAnalyticsMinAggregateInputType = {
    id?: true
    userId?: true
    firstActivityAt?: true
    lastActivityAt?: true
    totalDaysActive?: true
    totalLessonsCompleted?: true
    totalSpeakingSessions?: true
    totalAIMessages?: true
    totalTimeMinutes?: true
    avgLessonScore?: true
    avgSpeakingScore?: true
    currentPlan?: true
    subscriptionStartAt?: true
    isActive?: true
    isAnonymized?: true
    anonymizedAt?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserAnalyticsMaxAggregateInputType = {
    id?: true
    userId?: true
    firstActivityAt?: true
    lastActivityAt?: true
    totalDaysActive?: true
    totalLessonsCompleted?: true
    totalSpeakingSessions?: true
    totalAIMessages?: true
    totalTimeMinutes?: true
    avgLessonScore?: true
    avgSpeakingScore?: true
    currentPlan?: true
    subscriptionStartAt?: true
    isActive?: true
    isAnonymized?: true
    anonymizedAt?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserAnalyticsCountAggregateInputType = {
    id?: true
    userId?: true
    firstActivityAt?: true
    lastActivityAt?: true
    totalDaysActive?: true
    totalLessonsCompleted?: true
    totalSpeakingSessions?: true
    totalAIMessages?: true
    totalTimeMinutes?: true
    avgLessonScore?: true
    avgSpeakingScore?: true
    currentPlan?: true
    subscriptionStartAt?: true
    isActive?: true
    isAnonymized?: true
    anonymizedAt?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnalytics to aggregate.
     */
    where?: UserAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnalytics to fetch.
     */
    orderBy?: UserAnalyticsOrderByWithRelationInput | UserAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAnalytics
    **/
    _count?: true | UserAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAnalyticsMaxAggregateInputType
  }

  export type GetUserAnalyticsAggregateType<T extends UserAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAnalytics[P]>
      : GetScalarType<T[P], AggregateUserAnalytics[P]>
  }




  export type UserAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnalyticsWhereInput
    orderBy?: UserAnalyticsOrderByWithAggregationInput | UserAnalyticsOrderByWithAggregationInput[]
    by: UserAnalyticsScalarFieldEnum[] | UserAnalyticsScalarFieldEnum
    having?: UserAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAnalyticsCountAggregateInputType | true
    _avg?: UserAnalyticsAvgAggregateInputType
    _sum?: UserAnalyticsSumAggregateInputType
    _min?: UserAnalyticsMinAggregateInputType
    _max?: UserAnalyticsMaxAggregateInputType
  }

  export type UserAnalyticsGroupByOutputType = {
    id: string
    userId: string
    firstActivityAt: Date
    lastActivityAt: Date
    totalDaysActive: number
    totalLessonsCompleted: number
    totalSpeakingSessions: number
    totalAIMessages: number
    totalTimeMinutes: number
    avgLessonScore: number
    avgSpeakingScore: number
    currentPlan: string | null
    subscriptionStartAt: Date | null
    isActive: boolean
    isAnonymized: boolean
    anonymizedAt: Date | null
    updatedAt: Date
    createdAt: Date
    _count: UserAnalyticsCountAggregateOutputType | null
    _avg: UserAnalyticsAvgAggregateOutputType | null
    _sum: UserAnalyticsSumAggregateOutputType | null
    _min: UserAnalyticsMinAggregateOutputType | null
    _max: UserAnalyticsMaxAggregateOutputType | null
  }

  type GetUserAnalyticsGroupByPayload<T extends UserAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], UserAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type UserAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstActivityAt?: boolean
    lastActivityAt?: boolean
    totalDaysActive?: boolean
    totalLessonsCompleted?: boolean
    totalSpeakingSessions?: boolean
    totalAIMessages?: boolean
    totalTimeMinutes?: boolean
    avgLessonScore?: boolean
    avgSpeakingScore?: boolean
    currentPlan?: boolean
    subscriptionStartAt?: boolean
    isActive?: boolean
    isAnonymized?: boolean
    anonymizedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userAnalytics"]>

  export type UserAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstActivityAt?: boolean
    lastActivityAt?: boolean
    totalDaysActive?: boolean
    totalLessonsCompleted?: boolean
    totalSpeakingSessions?: boolean
    totalAIMessages?: boolean
    totalTimeMinutes?: boolean
    avgLessonScore?: boolean
    avgSpeakingScore?: boolean
    currentPlan?: boolean
    subscriptionStartAt?: boolean
    isActive?: boolean
    isAnonymized?: boolean
    anonymizedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userAnalytics"]>

  export type UserAnalyticsSelectScalar = {
    id?: boolean
    userId?: boolean
    firstActivityAt?: boolean
    lastActivityAt?: boolean
    totalDaysActive?: boolean
    totalLessonsCompleted?: boolean
    totalSpeakingSessions?: boolean
    totalAIMessages?: boolean
    totalTimeMinutes?: boolean
    avgLessonScore?: boolean
    avgSpeakingScore?: boolean
    currentPlan?: boolean
    subscriptionStartAt?: boolean
    isActive?: boolean
    isAnonymized?: boolean
    anonymizedAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }


  export type $UserAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAnalytics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      firstActivityAt: Date
      lastActivityAt: Date
      totalDaysActive: number
      totalLessonsCompleted: number
      totalSpeakingSessions: number
      totalAIMessages: number
      totalTimeMinutes: number
      avgLessonScore: number
      avgSpeakingScore: number
      currentPlan: string | null
      subscriptionStartAt: Date | null
      isActive: boolean
      isAnonymized: boolean
      anonymizedAt: Date | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["userAnalytics"]>
    composites: {}
  }

  type UserAnalyticsGetPayload<S extends boolean | null | undefined | UserAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$UserAnalyticsPayload, S>

  type UserAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAnalyticsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserAnalyticsCountAggregateInputType | true
    }

  export interface UserAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAnalytics'], meta: { name: 'UserAnalytics' } }
    /**
     * Find zero or one UserAnalytics that matches the filter.
     * @param {UserAnalyticsFindUniqueArgs} args - Arguments to find a UserAnalytics
     * @example
     * // Get one UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAnalyticsFindUniqueArgs>(args: SelectSubset<T, UserAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__UserAnalyticsClient<$Result.GetResult<Prisma.$UserAnalyticsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserAnalytics that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a UserAnalytics
     * @example
     * // Get one UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAnalyticsClient<$Result.GetResult<Prisma.$UserAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnalyticsFindFirstArgs} args - Arguments to find a UserAnalytics
     * @example
     * // Get one UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAnalyticsFindFirstArgs>(args?: SelectSubset<T, UserAnalyticsFindFirstArgs<ExtArgs>>): Prisma__UserAnalyticsClient<$Result.GetResult<Prisma.$UserAnalyticsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnalyticsFindFirstOrThrowArgs} args - Arguments to find a UserAnalytics
     * @example
     * // Get one UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAnalyticsClient<$Result.GetResult<Prisma.$UserAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.findMany()
     * 
     * // Get first 10 UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAnalyticsWithIdOnly = await prisma.userAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAnalyticsFindManyArgs>(args?: SelectSubset<T, UserAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnalyticsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserAnalytics.
     * @param {UserAnalyticsCreateArgs} args - Arguments to create a UserAnalytics.
     * @example
     * // Create one UserAnalytics
     * const UserAnalytics = await prisma.userAnalytics.create({
     *   data: {
     *     // ... data to create a UserAnalytics
     *   }
     * })
     * 
     */
    create<T extends UserAnalyticsCreateArgs>(args: SelectSubset<T, UserAnalyticsCreateArgs<ExtArgs>>): Prisma__UserAnalyticsClient<$Result.GetResult<Prisma.$UserAnalyticsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserAnalytics.
     * @param {UserAnalyticsCreateManyArgs} args - Arguments to create many UserAnalytics.
     * @example
     * // Create many UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAnalyticsCreateManyArgs>(args?: SelectSubset<T, UserAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAnalytics and returns the data saved in the database.
     * @param {UserAnalyticsCreateManyAndReturnArgs} args - Arguments to create many UserAnalytics.
     * @example
     * // Create many UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAnalytics and only return the `id`
     * const userAnalyticsWithIdOnly = await prisma.userAnalytics.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnalyticsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserAnalytics.
     * @param {UserAnalyticsDeleteArgs} args - Arguments to delete one UserAnalytics.
     * @example
     * // Delete one UserAnalytics
     * const UserAnalytics = await prisma.userAnalytics.delete({
     *   where: {
     *     // ... filter to delete one UserAnalytics
     *   }
     * })
     * 
     */
    delete<T extends UserAnalyticsDeleteArgs>(args: SelectSubset<T, UserAnalyticsDeleteArgs<ExtArgs>>): Prisma__UserAnalyticsClient<$Result.GetResult<Prisma.$UserAnalyticsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserAnalytics.
     * @param {UserAnalyticsUpdateArgs} args - Arguments to update one UserAnalytics.
     * @example
     * // Update one UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAnalyticsUpdateArgs>(args: SelectSubset<T, UserAnalyticsUpdateArgs<ExtArgs>>): Prisma__UserAnalyticsClient<$Result.GetResult<Prisma.$UserAnalyticsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserAnalytics.
     * @param {UserAnalyticsDeleteManyArgs} args - Arguments to filter UserAnalytics to delete.
     * @example
     * // Delete a few UserAnalytics
     * const { count } = await prisma.userAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAnalyticsDeleteManyArgs>(args?: SelectSubset<T, UserAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAnalyticsUpdateManyArgs>(args: SelectSubset<T, UserAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAnalytics.
     * @param {UserAnalyticsUpsertArgs} args - Arguments to update or create a UserAnalytics.
     * @example
     * // Update or create a UserAnalytics
     * const userAnalytics = await prisma.userAnalytics.upsert({
     *   create: {
     *     // ... data to create a UserAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends UserAnalyticsUpsertArgs>(args: SelectSubset<T, UserAnalyticsUpsertArgs<ExtArgs>>): Prisma__UserAnalyticsClient<$Result.GetResult<Prisma.$UserAnalyticsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnalyticsCountArgs} args - Arguments to filter UserAnalytics to count.
     * @example
     * // Count the number of UserAnalytics
     * const count = await prisma.userAnalytics.count({
     *   where: {
     *     // ... the filter for the UserAnalytics we want to count
     *   }
     * })
    **/
    count<T extends UserAnalyticsCountArgs>(
      args?: Subset<T, UserAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAnalyticsAggregateArgs>(args: Subset<T, UserAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetUserAnalyticsAggregateType<T>>

    /**
     * Group by UserAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnalyticsGroupByArgs} args - Group by arguments.
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
      T extends UserAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: UserAnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAnalytics model
   */
  readonly fields: UserAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserAnalytics model
   */ 
  interface UserAnalyticsFieldRefs {
    readonly id: FieldRef<"UserAnalytics", 'String'>
    readonly userId: FieldRef<"UserAnalytics", 'String'>
    readonly firstActivityAt: FieldRef<"UserAnalytics", 'DateTime'>
    readonly lastActivityAt: FieldRef<"UserAnalytics", 'DateTime'>
    readonly totalDaysActive: FieldRef<"UserAnalytics", 'Int'>
    readonly totalLessonsCompleted: FieldRef<"UserAnalytics", 'Int'>
    readonly totalSpeakingSessions: FieldRef<"UserAnalytics", 'Int'>
    readonly totalAIMessages: FieldRef<"UserAnalytics", 'Int'>
    readonly totalTimeMinutes: FieldRef<"UserAnalytics", 'Int'>
    readonly avgLessonScore: FieldRef<"UserAnalytics", 'Float'>
    readonly avgSpeakingScore: FieldRef<"UserAnalytics", 'Float'>
    readonly currentPlan: FieldRef<"UserAnalytics", 'String'>
    readonly subscriptionStartAt: FieldRef<"UserAnalytics", 'DateTime'>
    readonly isActive: FieldRef<"UserAnalytics", 'Boolean'>
    readonly isAnonymized: FieldRef<"UserAnalytics", 'Boolean'>
    readonly anonymizedAt: FieldRef<"UserAnalytics", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAnalytics", 'DateTime'>
    readonly createdAt: FieldRef<"UserAnalytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAnalytics findUnique
   */
  export type UserAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which UserAnalytics to fetch.
     */
    where: UserAnalyticsWhereUniqueInput
  }

  /**
   * UserAnalytics findUniqueOrThrow
   */
  export type UserAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which UserAnalytics to fetch.
     */
    where: UserAnalyticsWhereUniqueInput
  }

  /**
   * UserAnalytics findFirst
   */
  export type UserAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which UserAnalytics to fetch.
     */
    where?: UserAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnalytics to fetch.
     */
    orderBy?: UserAnalyticsOrderByWithRelationInput | UserAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnalytics.
     */
    cursor?: UserAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnalytics.
     */
    distinct?: UserAnalyticsScalarFieldEnum | UserAnalyticsScalarFieldEnum[]
  }

  /**
   * UserAnalytics findFirstOrThrow
   */
  export type UserAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which UserAnalytics to fetch.
     */
    where?: UserAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnalytics to fetch.
     */
    orderBy?: UserAnalyticsOrderByWithRelationInput | UserAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnalytics.
     */
    cursor?: UserAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnalytics.
     */
    distinct?: UserAnalyticsScalarFieldEnum | UserAnalyticsScalarFieldEnum[]
  }

  /**
   * UserAnalytics findMany
   */
  export type UserAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelect<ExtArgs> | null
    /**
     * Filter, which UserAnalytics to fetch.
     */
    where?: UserAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnalytics to fetch.
     */
    orderBy?: UserAnalyticsOrderByWithRelationInput | UserAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAnalytics.
     */
    cursor?: UserAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnalytics.
     */
    skip?: number
    distinct?: UserAnalyticsScalarFieldEnum | UserAnalyticsScalarFieldEnum[]
  }

  /**
   * UserAnalytics create
   */
  export type UserAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelect<ExtArgs> | null
    /**
     * The data needed to create a UserAnalytics.
     */
    data: XOR<UserAnalyticsCreateInput, UserAnalyticsUncheckedCreateInput>
  }

  /**
   * UserAnalytics createMany
   */
  export type UserAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAnalytics.
     */
    data: UserAnalyticsCreateManyInput | UserAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAnalytics createManyAndReturn
   */
  export type UserAnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserAnalytics.
     */
    data: UserAnalyticsCreateManyInput | UserAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAnalytics update
   */
  export type UserAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelect<ExtArgs> | null
    /**
     * The data needed to update a UserAnalytics.
     */
    data: XOR<UserAnalyticsUpdateInput, UserAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which UserAnalytics to update.
     */
    where: UserAnalyticsWhereUniqueInput
  }

  /**
   * UserAnalytics updateMany
   */
  export type UserAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAnalytics.
     */
    data: XOR<UserAnalyticsUpdateManyMutationInput, UserAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which UserAnalytics to update
     */
    where?: UserAnalyticsWhereInput
  }

  /**
   * UserAnalytics upsert
   */
  export type UserAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelect<ExtArgs> | null
    /**
     * The filter to search for the UserAnalytics to update in case it exists.
     */
    where: UserAnalyticsWhereUniqueInput
    /**
     * In case the UserAnalytics found by the `where` argument doesn't exist, create a new UserAnalytics with this data.
     */
    create: XOR<UserAnalyticsCreateInput, UserAnalyticsUncheckedCreateInput>
    /**
     * In case the UserAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAnalyticsUpdateInput, UserAnalyticsUncheckedUpdateInput>
  }

  /**
   * UserAnalytics delete
   */
  export type UserAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelect<ExtArgs> | null
    /**
     * Filter which UserAnalytics to delete.
     */
    where: UserAnalyticsWhereUniqueInput
  }

  /**
   * UserAnalytics deleteMany
   */
  export type UserAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnalytics to delete
     */
    where?: UserAnalyticsWhereInput
  }

  /**
   * UserAnalytics without action
   */
  export type UserAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnalytics
     */
    select?: UserAnalyticsSelect<ExtArgs> | null
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


  export const RawEventScalarFieldEnum: {
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

  export type RawEventScalarFieldEnum = (typeof RawEventScalarFieldEnum)[keyof typeof RawEventScalarFieldEnum]


  export const DailyAggregationScalarFieldEnum: {
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

  export type DailyAggregationScalarFieldEnum = (typeof DailyAggregationScalarFieldEnum)[keyof typeof DailyAggregationScalarFieldEnum]


  export const MonthlyAggregationScalarFieldEnum: {
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

  export type MonthlyAggregationScalarFieldEnum = (typeof MonthlyAggregationScalarFieldEnum)[keyof typeof MonthlyAggregationScalarFieldEnum]


  export const UserAnalyticsScalarFieldEnum: {
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

  export type UserAnalyticsScalarFieldEnum = (typeof UserAnalyticsScalarFieldEnum)[keyof typeof UserAnalyticsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type RawEventWhereInput = {
    AND?: RawEventWhereInput | RawEventWhereInput[]
    OR?: RawEventWhereInput[]
    NOT?: RawEventWhereInput | RawEventWhereInput[]
    id?: StringFilter<"RawEvent"> | string
    eventId?: StringFilter<"RawEvent"> | string
    eventType?: StringFilter<"RawEvent"> | string
    eventVersion?: StringFilter<"RawEvent"> | string
    occurredAt?: DateTimeFilter<"RawEvent"> | Date | string
    producer?: StringFilter<"RawEvent"> | string
    userId?: StringNullableFilter<"RawEvent"> | string | null
    requestId?: StringNullableFilter<"RawEvent"> | string | null
    correlationId?: StringNullableFilter<"RawEvent"> | string | null
    payload?: JsonFilter<"RawEvent">
    kafkaTopic?: StringNullableFilter<"RawEvent"> | string | null
    kafkaPartition?: IntNullableFilter<"RawEvent"> | number | null
    kafkaOffset?: StringNullableFilter<"RawEvent"> | string | null
    processedAt?: DateTimeFilter<"RawEvent"> | Date | string
    createdAt?: DateTimeFilter<"RawEvent"> | Date | string
  }

  export type RawEventOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    eventVersion?: SortOrder
    occurredAt?: SortOrder
    producer?: SortOrder
    userId?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    payload?: SortOrder
    kafkaTopic?: SortOrderInput | SortOrder
    kafkaPartition?: SortOrderInput | SortOrder
    kafkaOffset?: SortOrderInput | SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RawEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: RawEventWhereInput | RawEventWhereInput[]
    OR?: RawEventWhereInput[]
    NOT?: RawEventWhereInput | RawEventWhereInput[]
    eventType?: StringFilter<"RawEvent"> | string
    eventVersion?: StringFilter<"RawEvent"> | string
    occurredAt?: DateTimeFilter<"RawEvent"> | Date | string
    producer?: StringFilter<"RawEvent"> | string
    userId?: StringNullableFilter<"RawEvent"> | string | null
    requestId?: StringNullableFilter<"RawEvent"> | string | null
    correlationId?: StringNullableFilter<"RawEvent"> | string | null
    payload?: JsonFilter<"RawEvent">
    kafkaTopic?: StringNullableFilter<"RawEvent"> | string | null
    kafkaPartition?: IntNullableFilter<"RawEvent"> | number | null
    kafkaOffset?: StringNullableFilter<"RawEvent"> | string | null
    processedAt?: DateTimeFilter<"RawEvent"> | Date | string
    createdAt?: DateTimeFilter<"RawEvent"> | Date | string
  }, "id" | "eventId">

  export type RawEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    eventVersion?: SortOrder
    occurredAt?: SortOrder
    producer?: SortOrder
    userId?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    payload?: SortOrder
    kafkaTopic?: SortOrderInput | SortOrder
    kafkaPartition?: SortOrderInput | SortOrder
    kafkaOffset?: SortOrderInput | SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    _count?: RawEventCountOrderByAggregateInput
    _avg?: RawEventAvgOrderByAggregateInput
    _max?: RawEventMaxOrderByAggregateInput
    _min?: RawEventMinOrderByAggregateInput
    _sum?: RawEventSumOrderByAggregateInput
  }

  export type RawEventScalarWhereWithAggregatesInput = {
    AND?: RawEventScalarWhereWithAggregatesInput | RawEventScalarWhereWithAggregatesInput[]
    OR?: RawEventScalarWhereWithAggregatesInput[]
    NOT?: RawEventScalarWhereWithAggregatesInput | RawEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RawEvent"> | string
    eventId?: StringWithAggregatesFilter<"RawEvent"> | string
    eventType?: StringWithAggregatesFilter<"RawEvent"> | string
    eventVersion?: StringWithAggregatesFilter<"RawEvent"> | string
    occurredAt?: DateTimeWithAggregatesFilter<"RawEvent"> | Date | string
    producer?: StringWithAggregatesFilter<"RawEvent"> | string
    userId?: StringNullableWithAggregatesFilter<"RawEvent"> | string | null
    requestId?: StringNullableWithAggregatesFilter<"RawEvent"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"RawEvent"> | string | null
    payload?: JsonWithAggregatesFilter<"RawEvent">
    kafkaTopic?: StringNullableWithAggregatesFilter<"RawEvent"> | string | null
    kafkaPartition?: IntNullableWithAggregatesFilter<"RawEvent"> | number | null
    kafkaOffset?: StringNullableWithAggregatesFilter<"RawEvent"> | string | null
    processedAt?: DateTimeWithAggregatesFilter<"RawEvent"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RawEvent"> | Date | string
  }

  export type DailyAggregationWhereInput = {
    AND?: DailyAggregationWhereInput | DailyAggregationWhereInput[]
    OR?: DailyAggregationWhereInput[]
    NOT?: DailyAggregationWhereInput | DailyAggregationWhereInput[]
    id?: StringFilter<"DailyAggregation"> | string
    date?: DateTimeFilter<"DailyAggregation"> | Date | string
    dateKey?: StringFilter<"DailyAggregation"> | string
    dailyActiveUsers?: IntFilter<"DailyAggregation"> | number
    newUsers?: IntFilter<"DailyAggregation"> | number
    lessonsStarted?: IntFilter<"DailyAggregation"> | number
    lessonsCompleted?: IntFilter<"DailyAggregation"> | number
    avgLessonScore?: FloatFilter<"DailyAggregation"> | number
    speakingSessions?: IntFilter<"DailyAggregation"> | number
    avgSpeakingScore?: FloatFilter<"DailyAggregation"> | number
    grammarExercises?: IntFilter<"DailyAggregation"> | number
    avgGrammarScore?: FloatFilter<"DailyAggregation"> | number
    vocabularyLearned?: IntFilter<"DailyAggregation"> | number
    aiMessages?: IntFilter<"DailyAggregation"> | number
    avgAILatency?: FloatFilter<"DailyAggregation"> | number
    newSubscriptions?: IntFilter<"DailyAggregation"> | number
    subscriptionRevenue?: IntFilter<"DailyAggregation"> | number
    totalTimeMinutes?: IntFilter<"DailyAggregation"> | number
    avgSessionMinutes?: FloatFilter<"DailyAggregation"> | number
    createdAt?: DateTimeFilter<"DailyAggregation"> | Date | string
    updatedAt?: DateTimeFilter<"DailyAggregation"> | Date | string
  }

  export type DailyAggregationOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    dateKey?: SortOrder
    dailyActiveUsers?: SortOrder
    newUsers?: SortOrder
    lessonsStarted?: SortOrder
    lessonsCompleted?: SortOrder
    avgLessonScore?: SortOrder
    speakingSessions?: SortOrder
    avgSpeakingScore?: SortOrder
    grammarExercises?: SortOrder
    avgGrammarScore?: SortOrder
    vocabularyLearned?: SortOrder
    aiMessages?: SortOrder
    avgAILatency?: SortOrder
    newSubscriptions?: SortOrder
    subscriptionRevenue?: SortOrder
    totalTimeMinutes?: SortOrder
    avgSessionMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyAggregationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date?: Date | string
    dateKey?: string
    AND?: DailyAggregationWhereInput | DailyAggregationWhereInput[]
    OR?: DailyAggregationWhereInput[]
    NOT?: DailyAggregationWhereInput | DailyAggregationWhereInput[]
    dailyActiveUsers?: IntFilter<"DailyAggregation"> | number
    newUsers?: IntFilter<"DailyAggregation"> | number
    lessonsStarted?: IntFilter<"DailyAggregation"> | number
    lessonsCompleted?: IntFilter<"DailyAggregation"> | number
    avgLessonScore?: FloatFilter<"DailyAggregation"> | number
    speakingSessions?: IntFilter<"DailyAggregation"> | number
    avgSpeakingScore?: FloatFilter<"DailyAggregation"> | number
    grammarExercises?: IntFilter<"DailyAggregation"> | number
    avgGrammarScore?: FloatFilter<"DailyAggregation"> | number
    vocabularyLearned?: IntFilter<"DailyAggregation"> | number
    aiMessages?: IntFilter<"DailyAggregation"> | number
    avgAILatency?: FloatFilter<"DailyAggregation"> | number
    newSubscriptions?: IntFilter<"DailyAggregation"> | number
    subscriptionRevenue?: IntFilter<"DailyAggregation"> | number
    totalTimeMinutes?: IntFilter<"DailyAggregation"> | number
    avgSessionMinutes?: FloatFilter<"DailyAggregation"> | number
    createdAt?: DateTimeFilter<"DailyAggregation"> | Date | string
    updatedAt?: DateTimeFilter<"DailyAggregation"> | Date | string
  }, "id" | "date" | "dateKey">

  export type DailyAggregationOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    dateKey?: SortOrder
    dailyActiveUsers?: SortOrder
    newUsers?: SortOrder
    lessonsStarted?: SortOrder
    lessonsCompleted?: SortOrder
    avgLessonScore?: SortOrder
    speakingSessions?: SortOrder
    avgSpeakingScore?: SortOrder
    grammarExercises?: SortOrder
    avgGrammarScore?: SortOrder
    vocabularyLearned?: SortOrder
    aiMessages?: SortOrder
    avgAILatency?: SortOrder
    newSubscriptions?: SortOrder
    subscriptionRevenue?: SortOrder
    totalTimeMinutes?: SortOrder
    avgSessionMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyAggregationCountOrderByAggregateInput
    _avg?: DailyAggregationAvgOrderByAggregateInput
    _max?: DailyAggregationMaxOrderByAggregateInput
    _min?: DailyAggregationMinOrderByAggregateInput
    _sum?: DailyAggregationSumOrderByAggregateInput
  }

  export type DailyAggregationScalarWhereWithAggregatesInput = {
    AND?: DailyAggregationScalarWhereWithAggregatesInput | DailyAggregationScalarWhereWithAggregatesInput[]
    OR?: DailyAggregationScalarWhereWithAggregatesInput[]
    NOT?: DailyAggregationScalarWhereWithAggregatesInput | DailyAggregationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyAggregation"> | string
    date?: DateTimeWithAggregatesFilter<"DailyAggregation"> | Date | string
    dateKey?: StringWithAggregatesFilter<"DailyAggregation"> | string
    dailyActiveUsers?: IntWithAggregatesFilter<"DailyAggregation"> | number
    newUsers?: IntWithAggregatesFilter<"DailyAggregation"> | number
    lessonsStarted?: IntWithAggregatesFilter<"DailyAggregation"> | number
    lessonsCompleted?: IntWithAggregatesFilter<"DailyAggregation"> | number
    avgLessonScore?: FloatWithAggregatesFilter<"DailyAggregation"> | number
    speakingSessions?: IntWithAggregatesFilter<"DailyAggregation"> | number
    avgSpeakingScore?: FloatWithAggregatesFilter<"DailyAggregation"> | number
    grammarExercises?: IntWithAggregatesFilter<"DailyAggregation"> | number
    avgGrammarScore?: FloatWithAggregatesFilter<"DailyAggregation"> | number
    vocabularyLearned?: IntWithAggregatesFilter<"DailyAggregation"> | number
    aiMessages?: IntWithAggregatesFilter<"DailyAggregation"> | number
    avgAILatency?: FloatWithAggregatesFilter<"DailyAggregation"> | number
    newSubscriptions?: IntWithAggregatesFilter<"DailyAggregation"> | number
    subscriptionRevenue?: IntWithAggregatesFilter<"DailyAggregation"> | number
    totalTimeMinutes?: IntWithAggregatesFilter<"DailyAggregation"> | number
    avgSessionMinutes?: FloatWithAggregatesFilter<"DailyAggregation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyAggregation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyAggregation"> | Date | string
  }

  export type MonthlyAggregationWhereInput = {
    AND?: MonthlyAggregationWhereInput | MonthlyAggregationWhereInput[]
    OR?: MonthlyAggregationWhereInput[]
    NOT?: MonthlyAggregationWhereInput | MonthlyAggregationWhereInput[]
    id?: StringFilter<"MonthlyAggregation"> | string
    month?: DateTimeFilter<"MonthlyAggregation"> | Date | string
    monthKey?: StringFilter<"MonthlyAggregation"> | string
    monthlyActiveUsers?: IntFilter<"MonthlyAggregation"> | number
    totalUsers?: IntFilter<"MonthlyAggregation"> | number
    totalLessonsCompleted?: IntFilter<"MonthlyAggregation"> | number
    avgMonthlyLessons?: FloatFilter<"MonthlyAggregation"> | number
    totalSubscriptions?: IntFilter<"MonthlyAggregation"> | number
    conversionRate?: FloatFilter<"MonthlyAggregation"> | number
    monthlyRevenue?: IntFilter<"MonthlyAggregation"> | number
    retentionRate?: FloatFilter<"MonthlyAggregation"> | number
    churnRate?: FloatFilter<"MonthlyAggregation"> | number
    createdAt?: DateTimeFilter<"MonthlyAggregation"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyAggregation"> | Date | string
  }

  export type MonthlyAggregationOrderByWithRelationInput = {
    id?: SortOrder
    month?: SortOrder
    monthKey?: SortOrder
    monthlyActiveUsers?: SortOrder
    totalUsers?: SortOrder
    totalLessonsCompleted?: SortOrder
    avgMonthlyLessons?: SortOrder
    totalSubscriptions?: SortOrder
    conversionRate?: SortOrder
    monthlyRevenue?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyAggregationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    month?: Date | string
    monthKey?: string
    AND?: MonthlyAggregationWhereInput | MonthlyAggregationWhereInput[]
    OR?: MonthlyAggregationWhereInput[]
    NOT?: MonthlyAggregationWhereInput | MonthlyAggregationWhereInput[]
    monthlyActiveUsers?: IntFilter<"MonthlyAggregation"> | number
    totalUsers?: IntFilter<"MonthlyAggregation"> | number
    totalLessonsCompleted?: IntFilter<"MonthlyAggregation"> | number
    avgMonthlyLessons?: FloatFilter<"MonthlyAggregation"> | number
    totalSubscriptions?: IntFilter<"MonthlyAggregation"> | number
    conversionRate?: FloatFilter<"MonthlyAggregation"> | number
    monthlyRevenue?: IntFilter<"MonthlyAggregation"> | number
    retentionRate?: FloatFilter<"MonthlyAggregation"> | number
    churnRate?: FloatFilter<"MonthlyAggregation"> | number
    createdAt?: DateTimeFilter<"MonthlyAggregation"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyAggregation"> | Date | string
  }, "id" | "month" | "monthKey">

  export type MonthlyAggregationOrderByWithAggregationInput = {
    id?: SortOrder
    month?: SortOrder
    monthKey?: SortOrder
    monthlyActiveUsers?: SortOrder
    totalUsers?: SortOrder
    totalLessonsCompleted?: SortOrder
    avgMonthlyLessons?: SortOrder
    totalSubscriptions?: SortOrder
    conversionRate?: SortOrder
    monthlyRevenue?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonthlyAggregationCountOrderByAggregateInput
    _avg?: MonthlyAggregationAvgOrderByAggregateInput
    _max?: MonthlyAggregationMaxOrderByAggregateInput
    _min?: MonthlyAggregationMinOrderByAggregateInput
    _sum?: MonthlyAggregationSumOrderByAggregateInput
  }

  export type MonthlyAggregationScalarWhereWithAggregatesInput = {
    AND?: MonthlyAggregationScalarWhereWithAggregatesInput | MonthlyAggregationScalarWhereWithAggregatesInput[]
    OR?: MonthlyAggregationScalarWhereWithAggregatesInput[]
    NOT?: MonthlyAggregationScalarWhereWithAggregatesInput | MonthlyAggregationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyAggregation"> | string
    month?: DateTimeWithAggregatesFilter<"MonthlyAggregation"> | Date | string
    monthKey?: StringWithAggregatesFilter<"MonthlyAggregation"> | string
    monthlyActiveUsers?: IntWithAggregatesFilter<"MonthlyAggregation"> | number
    totalUsers?: IntWithAggregatesFilter<"MonthlyAggregation"> | number
    totalLessonsCompleted?: IntWithAggregatesFilter<"MonthlyAggregation"> | number
    avgMonthlyLessons?: FloatWithAggregatesFilter<"MonthlyAggregation"> | number
    totalSubscriptions?: IntWithAggregatesFilter<"MonthlyAggregation"> | number
    conversionRate?: FloatWithAggregatesFilter<"MonthlyAggregation"> | number
    monthlyRevenue?: IntWithAggregatesFilter<"MonthlyAggregation"> | number
    retentionRate?: FloatWithAggregatesFilter<"MonthlyAggregation"> | number
    churnRate?: FloatWithAggregatesFilter<"MonthlyAggregation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MonthlyAggregation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonthlyAggregation"> | Date | string
  }

  export type UserAnalyticsWhereInput = {
    AND?: UserAnalyticsWhereInput | UserAnalyticsWhereInput[]
    OR?: UserAnalyticsWhereInput[]
    NOT?: UserAnalyticsWhereInput | UserAnalyticsWhereInput[]
    id?: StringFilter<"UserAnalytics"> | string
    userId?: StringFilter<"UserAnalytics"> | string
    firstActivityAt?: DateTimeFilter<"UserAnalytics"> | Date | string
    lastActivityAt?: DateTimeFilter<"UserAnalytics"> | Date | string
    totalDaysActive?: IntFilter<"UserAnalytics"> | number
    totalLessonsCompleted?: IntFilter<"UserAnalytics"> | number
    totalSpeakingSessions?: IntFilter<"UserAnalytics"> | number
    totalAIMessages?: IntFilter<"UserAnalytics"> | number
    totalTimeMinutes?: IntFilter<"UserAnalytics"> | number
    avgLessonScore?: FloatFilter<"UserAnalytics"> | number
    avgSpeakingScore?: FloatFilter<"UserAnalytics"> | number
    currentPlan?: StringNullableFilter<"UserAnalytics"> | string | null
    subscriptionStartAt?: DateTimeNullableFilter<"UserAnalytics"> | Date | string | null
    isActive?: BoolFilter<"UserAnalytics"> | boolean
    isAnonymized?: BoolFilter<"UserAnalytics"> | boolean
    anonymizedAt?: DateTimeNullableFilter<"UserAnalytics"> | Date | string | null
    updatedAt?: DateTimeFilter<"UserAnalytics"> | Date | string
    createdAt?: DateTimeFilter<"UserAnalytics"> | Date | string
  }

  export type UserAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstActivityAt?: SortOrder
    lastActivityAt?: SortOrder
    totalDaysActive?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalSpeakingSessions?: SortOrder
    totalAIMessages?: SortOrder
    totalTimeMinutes?: SortOrder
    avgLessonScore?: SortOrder
    avgSpeakingScore?: SortOrder
    currentPlan?: SortOrderInput | SortOrder
    subscriptionStartAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAnonymized?: SortOrder
    anonymizedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserAnalyticsWhereInput | UserAnalyticsWhereInput[]
    OR?: UserAnalyticsWhereInput[]
    NOT?: UserAnalyticsWhereInput | UserAnalyticsWhereInput[]
    firstActivityAt?: DateTimeFilter<"UserAnalytics"> | Date | string
    lastActivityAt?: DateTimeFilter<"UserAnalytics"> | Date | string
    totalDaysActive?: IntFilter<"UserAnalytics"> | number
    totalLessonsCompleted?: IntFilter<"UserAnalytics"> | number
    totalSpeakingSessions?: IntFilter<"UserAnalytics"> | number
    totalAIMessages?: IntFilter<"UserAnalytics"> | number
    totalTimeMinutes?: IntFilter<"UserAnalytics"> | number
    avgLessonScore?: FloatFilter<"UserAnalytics"> | number
    avgSpeakingScore?: FloatFilter<"UserAnalytics"> | number
    currentPlan?: StringNullableFilter<"UserAnalytics"> | string | null
    subscriptionStartAt?: DateTimeNullableFilter<"UserAnalytics"> | Date | string | null
    isActive?: BoolFilter<"UserAnalytics"> | boolean
    isAnonymized?: BoolFilter<"UserAnalytics"> | boolean
    anonymizedAt?: DateTimeNullableFilter<"UserAnalytics"> | Date | string | null
    updatedAt?: DateTimeFilter<"UserAnalytics"> | Date | string
    createdAt?: DateTimeFilter<"UserAnalytics"> | Date | string
  }, "id" | "userId">

  export type UserAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstActivityAt?: SortOrder
    lastActivityAt?: SortOrder
    totalDaysActive?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalSpeakingSessions?: SortOrder
    totalAIMessages?: SortOrder
    totalTimeMinutes?: SortOrder
    avgLessonScore?: SortOrder
    avgSpeakingScore?: SortOrder
    currentPlan?: SortOrderInput | SortOrder
    subscriptionStartAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAnonymized?: SortOrder
    anonymizedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserAnalyticsCountOrderByAggregateInput
    _avg?: UserAnalyticsAvgOrderByAggregateInput
    _max?: UserAnalyticsMaxOrderByAggregateInput
    _min?: UserAnalyticsMinOrderByAggregateInput
    _sum?: UserAnalyticsSumOrderByAggregateInput
  }

  export type UserAnalyticsScalarWhereWithAggregatesInput = {
    AND?: UserAnalyticsScalarWhereWithAggregatesInput | UserAnalyticsScalarWhereWithAggregatesInput[]
    OR?: UserAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: UserAnalyticsScalarWhereWithAggregatesInput | UserAnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAnalytics"> | string
    userId?: StringWithAggregatesFilter<"UserAnalytics"> | string
    firstActivityAt?: DateTimeWithAggregatesFilter<"UserAnalytics"> | Date | string
    lastActivityAt?: DateTimeWithAggregatesFilter<"UserAnalytics"> | Date | string
    totalDaysActive?: IntWithAggregatesFilter<"UserAnalytics"> | number
    totalLessonsCompleted?: IntWithAggregatesFilter<"UserAnalytics"> | number
    totalSpeakingSessions?: IntWithAggregatesFilter<"UserAnalytics"> | number
    totalAIMessages?: IntWithAggregatesFilter<"UserAnalytics"> | number
    totalTimeMinutes?: IntWithAggregatesFilter<"UserAnalytics"> | number
    avgLessonScore?: FloatWithAggregatesFilter<"UserAnalytics"> | number
    avgSpeakingScore?: FloatWithAggregatesFilter<"UserAnalytics"> | number
    currentPlan?: StringNullableWithAggregatesFilter<"UserAnalytics"> | string | null
    subscriptionStartAt?: DateTimeNullableWithAggregatesFilter<"UserAnalytics"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"UserAnalytics"> | boolean
    isAnonymized?: BoolWithAggregatesFilter<"UserAnalytics"> | boolean
    anonymizedAt?: DateTimeNullableWithAggregatesFilter<"UserAnalytics"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"UserAnalytics"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAnalytics"> | Date | string
  }

  export type RawEventCreateInput = {
    id?: string
    eventId: string
    eventType: string
    eventVersion: string
    occurredAt: Date | string
    producer: string
    userId?: string | null
    requestId?: string | null
    correlationId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    kafkaTopic?: string | null
    kafkaPartition?: number | null
    kafkaOffset?: string | null
    processedAt?: Date | string
    createdAt?: Date | string
  }

  export type RawEventUncheckedCreateInput = {
    id?: string
    eventId: string
    eventType: string
    eventVersion: string
    occurredAt: Date | string
    producer: string
    userId?: string | null
    requestId?: string | null
    correlationId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    kafkaTopic?: string | null
    kafkaPartition?: number | null
    kafkaOffset?: string | null
    processedAt?: Date | string
    createdAt?: Date | string
  }

  export type RawEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventVersion?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producer?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    kafkaTopic?: NullableStringFieldUpdateOperationsInput | string | null
    kafkaPartition?: NullableIntFieldUpdateOperationsInput | number | null
    kafkaOffset?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventVersion?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producer?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    kafkaTopic?: NullableStringFieldUpdateOperationsInput | string | null
    kafkaPartition?: NullableIntFieldUpdateOperationsInput | number | null
    kafkaOffset?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawEventCreateManyInput = {
    id?: string
    eventId: string
    eventType: string
    eventVersion: string
    occurredAt: Date | string
    producer: string
    userId?: string | null
    requestId?: string | null
    correlationId?: string | null
    payload: JsonNullValueInput | InputJsonValue
    kafkaTopic?: string | null
    kafkaPartition?: number | null
    kafkaOffset?: string | null
    processedAt?: Date | string
    createdAt?: Date | string
  }

  export type RawEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventVersion?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producer?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    kafkaTopic?: NullableStringFieldUpdateOperationsInput | string | null
    kafkaPartition?: NullableIntFieldUpdateOperationsInput | number | null
    kafkaOffset?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RawEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventVersion?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producer?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: JsonNullValueInput | InputJsonValue
    kafkaTopic?: NullableStringFieldUpdateOperationsInput | string | null
    kafkaPartition?: NullableIntFieldUpdateOperationsInput | number | null
    kafkaOffset?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyAggregationCreateInput = {
    id?: string
    date: Date | string
    dateKey: string
    dailyActiveUsers?: number
    newUsers?: number
    lessonsStarted?: number
    lessonsCompleted?: number
    avgLessonScore?: number
    speakingSessions?: number
    avgSpeakingScore?: number
    grammarExercises?: number
    avgGrammarScore?: number
    vocabularyLearned?: number
    aiMessages?: number
    avgAILatency?: number
    newSubscriptions?: number
    subscriptionRevenue?: number
    totalTimeMinutes?: number
    avgSessionMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyAggregationUncheckedCreateInput = {
    id?: string
    date: Date | string
    dateKey: string
    dailyActiveUsers?: number
    newUsers?: number
    lessonsStarted?: number
    lessonsCompleted?: number
    avgLessonScore?: number
    speakingSessions?: number
    avgSpeakingScore?: number
    grammarExercises?: number
    avgGrammarScore?: number
    vocabularyLearned?: number
    aiMessages?: number
    avgAILatency?: number
    newSubscriptions?: number
    subscriptionRevenue?: number
    totalTimeMinutes?: number
    avgSessionMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyAggregationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateKey?: StringFieldUpdateOperationsInput | string
    dailyActiveUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    lessonsStarted?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    avgLessonScore?: FloatFieldUpdateOperationsInput | number
    speakingSessions?: IntFieldUpdateOperationsInput | number
    avgSpeakingScore?: FloatFieldUpdateOperationsInput | number
    grammarExercises?: IntFieldUpdateOperationsInput | number
    avgGrammarScore?: FloatFieldUpdateOperationsInput | number
    vocabularyLearned?: IntFieldUpdateOperationsInput | number
    aiMessages?: IntFieldUpdateOperationsInput | number
    avgAILatency?: FloatFieldUpdateOperationsInput | number
    newSubscriptions?: IntFieldUpdateOperationsInput | number
    subscriptionRevenue?: IntFieldUpdateOperationsInput | number
    totalTimeMinutes?: IntFieldUpdateOperationsInput | number
    avgSessionMinutes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyAggregationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateKey?: StringFieldUpdateOperationsInput | string
    dailyActiveUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    lessonsStarted?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    avgLessonScore?: FloatFieldUpdateOperationsInput | number
    speakingSessions?: IntFieldUpdateOperationsInput | number
    avgSpeakingScore?: FloatFieldUpdateOperationsInput | number
    grammarExercises?: IntFieldUpdateOperationsInput | number
    avgGrammarScore?: FloatFieldUpdateOperationsInput | number
    vocabularyLearned?: IntFieldUpdateOperationsInput | number
    aiMessages?: IntFieldUpdateOperationsInput | number
    avgAILatency?: FloatFieldUpdateOperationsInput | number
    newSubscriptions?: IntFieldUpdateOperationsInput | number
    subscriptionRevenue?: IntFieldUpdateOperationsInput | number
    totalTimeMinutes?: IntFieldUpdateOperationsInput | number
    avgSessionMinutes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyAggregationCreateManyInput = {
    id?: string
    date: Date | string
    dateKey: string
    dailyActiveUsers?: number
    newUsers?: number
    lessonsStarted?: number
    lessonsCompleted?: number
    avgLessonScore?: number
    speakingSessions?: number
    avgSpeakingScore?: number
    grammarExercises?: number
    avgGrammarScore?: number
    vocabularyLearned?: number
    aiMessages?: number
    avgAILatency?: number
    newSubscriptions?: number
    subscriptionRevenue?: number
    totalTimeMinutes?: number
    avgSessionMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyAggregationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateKey?: StringFieldUpdateOperationsInput | string
    dailyActiveUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    lessonsStarted?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    avgLessonScore?: FloatFieldUpdateOperationsInput | number
    speakingSessions?: IntFieldUpdateOperationsInput | number
    avgSpeakingScore?: FloatFieldUpdateOperationsInput | number
    grammarExercises?: IntFieldUpdateOperationsInput | number
    avgGrammarScore?: FloatFieldUpdateOperationsInput | number
    vocabularyLearned?: IntFieldUpdateOperationsInput | number
    aiMessages?: IntFieldUpdateOperationsInput | number
    avgAILatency?: FloatFieldUpdateOperationsInput | number
    newSubscriptions?: IntFieldUpdateOperationsInput | number
    subscriptionRevenue?: IntFieldUpdateOperationsInput | number
    totalTimeMinutes?: IntFieldUpdateOperationsInput | number
    avgSessionMinutes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyAggregationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateKey?: StringFieldUpdateOperationsInput | string
    dailyActiveUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    lessonsStarted?: IntFieldUpdateOperationsInput | number
    lessonsCompleted?: IntFieldUpdateOperationsInput | number
    avgLessonScore?: FloatFieldUpdateOperationsInput | number
    speakingSessions?: IntFieldUpdateOperationsInput | number
    avgSpeakingScore?: FloatFieldUpdateOperationsInput | number
    grammarExercises?: IntFieldUpdateOperationsInput | number
    avgGrammarScore?: FloatFieldUpdateOperationsInput | number
    vocabularyLearned?: IntFieldUpdateOperationsInput | number
    aiMessages?: IntFieldUpdateOperationsInput | number
    avgAILatency?: FloatFieldUpdateOperationsInput | number
    newSubscriptions?: IntFieldUpdateOperationsInput | number
    subscriptionRevenue?: IntFieldUpdateOperationsInput | number
    totalTimeMinutes?: IntFieldUpdateOperationsInput | number
    avgSessionMinutes?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyAggregationCreateInput = {
    id?: string
    month: Date | string
    monthKey: string
    monthlyActiveUsers?: number
    totalUsers?: number
    totalLessonsCompleted?: number
    avgMonthlyLessons?: number
    totalSubscriptions?: number
    conversionRate?: number
    monthlyRevenue?: number
    retentionRate?: number
    churnRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyAggregationUncheckedCreateInput = {
    id?: string
    month: Date | string
    monthKey: string
    monthlyActiveUsers?: number
    totalUsers?: number
    totalLessonsCompleted?: number
    avgMonthlyLessons?: number
    totalSubscriptions?: number
    conversionRate?: number
    monthlyRevenue?: number
    retentionRate?: number
    churnRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyAggregationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    monthKey?: StringFieldUpdateOperationsInput | string
    monthlyActiveUsers?: IntFieldUpdateOperationsInput | number
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    avgMonthlyLessons?: FloatFieldUpdateOperationsInput | number
    totalSubscriptions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    monthlyRevenue?: IntFieldUpdateOperationsInput | number
    retentionRate?: FloatFieldUpdateOperationsInput | number
    churnRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyAggregationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    monthKey?: StringFieldUpdateOperationsInput | string
    monthlyActiveUsers?: IntFieldUpdateOperationsInput | number
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    avgMonthlyLessons?: FloatFieldUpdateOperationsInput | number
    totalSubscriptions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    monthlyRevenue?: IntFieldUpdateOperationsInput | number
    retentionRate?: FloatFieldUpdateOperationsInput | number
    churnRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyAggregationCreateManyInput = {
    id?: string
    month: Date | string
    monthKey: string
    monthlyActiveUsers?: number
    totalUsers?: number
    totalLessonsCompleted?: number
    avgMonthlyLessons?: number
    totalSubscriptions?: number
    conversionRate?: number
    monthlyRevenue?: number
    retentionRate?: number
    churnRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyAggregationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    monthKey?: StringFieldUpdateOperationsInput | string
    monthlyActiveUsers?: IntFieldUpdateOperationsInput | number
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    avgMonthlyLessons?: FloatFieldUpdateOperationsInput | number
    totalSubscriptions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    monthlyRevenue?: IntFieldUpdateOperationsInput | number
    retentionRate?: FloatFieldUpdateOperationsInput | number
    churnRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyAggregationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    monthKey?: StringFieldUpdateOperationsInput | string
    monthlyActiveUsers?: IntFieldUpdateOperationsInput | number
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    avgMonthlyLessons?: FloatFieldUpdateOperationsInput | number
    totalSubscriptions?: IntFieldUpdateOperationsInput | number
    conversionRate?: FloatFieldUpdateOperationsInput | number
    monthlyRevenue?: IntFieldUpdateOperationsInput | number
    retentionRate?: FloatFieldUpdateOperationsInput | number
    churnRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnalyticsCreateInput = {
    id?: string
    userId: string
    firstActivityAt: Date | string
    lastActivityAt: Date | string
    totalDaysActive?: number
    totalLessonsCompleted?: number
    totalSpeakingSessions?: number
    totalAIMessages?: number
    totalTimeMinutes?: number
    avgLessonScore?: number
    avgSpeakingScore?: number
    currentPlan?: string | null
    subscriptionStartAt?: Date | string | null
    isActive?: boolean
    isAnonymized?: boolean
    anonymizedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserAnalyticsUncheckedCreateInput = {
    id?: string
    userId: string
    firstActivityAt: Date | string
    lastActivityAt: Date | string
    totalDaysActive?: number
    totalLessonsCompleted?: number
    totalSpeakingSessions?: number
    totalAIMessages?: number
    totalTimeMinutes?: number
    avgLessonScore?: number
    avgSpeakingScore?: number
    currentPlan?: string | null
    subscriptionStartAt?: Date | string | null
    isActive?: boolean
    isAnonymized?: boolean
    anonymizedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDaysActive?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalSpeakingSessions?: IntFieldUpdateOperationsInput | number
    totalAIMessages?: IntFieldUpdateOperationsInput | number
    totalTimeMinutes?: IntFieldUpdateOperationsInput | number
    avgLessonScore?: FloatFieldUpdateOperationsInput | number
    avgSpeakingScore?: FloatFieldUpdateOperationsInput | number
    currentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    anonymizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDaysActive?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalSpeakingSessions?: IntFieldUpdateOperationsInput | number
    totalAIMessages?: IntFieldUpdateOperationsInput | number
    totalTimeMinutes?: IntFieldUpdateOperationsInput | number
    avgLessonScore?: FloatFieldUpdateOperationsInput | number
    avgSpeakingScore?: FloatFieldUpdateOperationsInput | number
    currentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    anonymizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnalyticsCreateManyInput = {
    id?: string
    userId: string
    firstActivityAt: Date | string
    lastActivityAt: Date | string
    totalDaysActive?: number
    totalLessonsCompleted?: number
    totalSpeakingSessions?: number
    totalAIMessages?: number
    totalTimeMinutes?: number
    avgLessonScore?: number
    avgSpeakingScore?: number
    currentPlan?: string | null
    subscriptionStartAt?: Date | string | null
    isActive?: boolean
    isAnonymized?: boolean
    anonymizedAt?: Date | string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDaysActive?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalSpeakingSessions?: IntFieldUpdateOperationsInput | number
    totalAIMessages?: IntFieldUpdateOperationsInput | number
    totalTimeMinutes?: IntFieldUpdateOperationsInput | number
    avgLessonScore?: FloatFieldUpdateOperationsInput | number
    avgSpeakingScore?: FloatFieldUpdateOperationsInput | number
    currentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    anonymizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalDaysActive?: IntFieldUpdateOperationsInput | number
    totalLessonsCompleted?: IntFieldUpdateOperationsInput | number
    totalSpeakingSessions?: IntFieldUpdateOperationsInput | number
    totalAIMessages?: IntFieldUpdateOperationsInput | number
    totalTimeMinutes?: IntFieldUpdateOperationsInput | number
    avgLessonScore?: FloatFieldUpdateOperationsInput | number
    avgSpeakingScore?: FloatFieldUpdateOperationsInput | number
    currentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    anonymizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RawEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    eventVersion?: SortOrder
    occurredAt?: SortOrder
    producer?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    correlationId?: SortOrder
    payload?: SortOrder
    kafkaTopic?: SortOrder
    kafkaPartition?: SortOrder
    kafkaOffset?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RawEventAvgOrderByAggregateInput = {
    kafkaPartition?: SortOrder
  }

  export type RawEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    eventVersion?: SortOrder
    occurredAt?: SortOrder
    producer?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    correlationId?: SortOrder
    kafkaTopic?: SortOrder
    kafkaPartition?: SortOrder
    kafkaOffset?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RawEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    eventVersion?: SortOrder
    occurredAt?: SortOrder
    producer?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    correlationId?: SortOrder
    kafkaTopic?: SortOrder
    kafkaPartition?: SortOrder
    kafkaOffset?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RawEventSumOrderByAggregateInput = {
    kafkaPartition?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type DailyAggregationCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    dateKey?: SortOrder
    dailyActiveUsers?: SortOrder
    newUsers?: SortOrder
    lessonsStarted?: SortOrder
    lessonsCompleted?: SortOrder
    avgLessonScore?: SortOrder
    speakingSessions?: SortOrder
    avgSpeakingScore?: SortOrder
    grammarExercises?: SortOrder
    avgGrammarScore?: SortOrder
    vocabularyLearned?: SortOrder
    aiMessages?: SortOrder
    avgAILatency?: SortOrder
    newSubscriptions?: SortOrder
    subscriptionRevenue?: SortOrder
    totalTimeMinutes?: SortOrder
    avgSessionMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyAggregationAvgOrderByAggregateInput = {
    dailyActiveUsers?: SortOrder
    newUsers?: SortOrder
    lessonsStarted?: SortOrder
    lessonsCompleted?: SortOrder
    avgLessonScore?: SortOrder
    speakingSessions?: SortOrder
    avgSpeakingScore?: SortOrder
    grammarExercises?: SortOrder
    avgGrammarScore?: SortOrder
    vocabularyLearned?: SortOrder
    aiMessages?: SortOrder
    avgAILatency?: SortOrder
    newSubscriptions?: SortOrder
    subscriptionRevenue?: SortOrder
    totalTimeMinutes?: SortOrder
    avgSessionMinutes?: SortOrder
  }

  export type DailyAggregationMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    dateKey?: SortOrder
    dailyActiveUsers?: SortOrder
    newUsers?: SortOrder
    lessonsStarted?: SortOrder
    lessonsCompleted?: SortOrder
    avgLessonScore?: SortOrder
    speakingSessions?: SortOrder
    avgSpeakingScore?: SortOrder
    grammarExercises?: SortOrder
    avgGrammarScore?: SortOrder
    vocabularyLearned?: SortOrder
    aiMessages?: SortOrder
    avgAILatency?: SortOrder
    newSubscriptions?: SortOrder
    subscriptionRevenue?: SortOrder
    totalTimeMinutes?: SortOrder
    avgSessionMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyAggregationMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    dateKey?: SortOrder
    dailyActiveUsers?: SortOrder
    newUsers?: SortOrder
    lessonsStarted?: SortOrder
    lessonsCompleted?: SortOrder
    avgLessonScore?: SortOrder
    speakingSessions?: SortOrder
    avgSpeakingScore?: SortOrder
    grammarExercises?: SortOrder
    avgGrammarScore?: SortOrder
    vocabularyLearned?: SortOrder
    aiMessages?: SortOrder
    avgAILatency?: SortOrder
    newSubscriptions?: SortOrder
    subscriptionRevenue?: SortOrder
    totalTimeMinutes?: SortOrder
    avgSessionMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyAggregationSumOrderByAggregateInput = {
    dailyActiveUsers?: SortOrder
    newUsers?: SortOrder
    lessonsStarted?: SortOrder
    lessonsCompleted?: SortOrder
    avgLessonScore?: SortOrder
    speakingSessions?: SortOrder
    avgSpeakingScore?: SortOrder
    grammarExercises?: SortOrder
    avgGrammarScore?: SortOrder
    vocabularyLearned?: SortOrder
    aiMessages?: SortOrder
    avgAILatency?: SortOrder
    newSubscriptions?: SortOrder
    subscriptionRevenue?: SortOrder
    totalTimeMinutes?: SortOrder
    avgSessionMinutes?: SortOrder
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

  export type MonthlyAggregationCountOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    monthKey?: SortOrder
    monthlyActiveUsers?: SortOrder
    totalUsers?: SortOrder
    totalLessonsCompleted?: SortOrder
    avgMonthlyLessons?: SortOrder
    totalSubscriptions?: SortOrder
    conversionRate?: SortOrder
    monthlyRevenue?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyAggregationAvgOrderByAggregateInput = {
    monthlyActiveUsers?: SortOrder
    totalUsers?: SortOrder
    totalLessonsCompleted?: SortOrder
    avgMonthlyLessons?: SortOrder
    totalSubscriptions?: SortOrder
    conversionRate?: SortOrder
    monthlyRevenue?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
  }

  export type MonthlyAggregationMaxOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    monthKey?: SortOrder
    monthlyActiveUsers?: SortOrder
    totalUsers?: SortOrder
    totalLessonsCompleted?: SortOrder
    avgMonthlyLessons?: SortOrder
    totalSubscriptions?: SortOrder
    conversionRate?: SortOrder
    monthlyRevenue?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyAggregationMinOrderByAggregateInput = {
    id?: SortOrder
    month?: SortOrder
    monthKey?: SortOrder
    monthlyActiveUsers?: SortOrder
    totalUsers?: SortOrder
    totalLessonsCompleted?: SortOrder
    avgMonthlyLessons?: SortOrder
    totalSubscriptions?: SortOrder
    conversionRate?: SortOrder
    monthlyRevenue?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyAggregationSumOrderByAggregateInput = {
    monthlyActiveUsers?: SortOrder
    totalUsers?: SortOrder
    totalLessonsCompleted?: SortOrder
    avgMonthlyLessons?: SortOrder
    totalSubscriptions?: SortOrder
    conversionRate?: SortOrder
    monthlyRevenue?: SortOrder
    retentionRate?: SortOrder
    churnRate?: SortOrder
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

  export type UserAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstActivityAt?: SortOrder
    lastActivityAt?: SortOrder
    totalDaysActive?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalSpeakingSessions?: SortOrder
    totalAIMessages?: SortOrder
    totalTimeMinutes?: SortOrder
    avgLessonScore?: SortOrder
    avgSpeakingScore?: SortOrder
    currentPlan?: SortOrder
    subscriptionStartAt?: SortOrder
    isActive?: SortOrder
    isAnonymized?: SortOrder
    anonymizedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAnalyticsAvgOrderByAggregateInput = {
    totalDaysActive?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalSpeakingSessions?: SortOrder
    totalAIMessages?: SortOrder
    totalTimeMinutes?: SortOrder
    avgLessonScore?: SortOrder
    avgSpeakingScore?: SortOrder
  }

  export type UserAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstActivityAt?: SortOrder
    lastActivityAt?: SortOrder
    totalDaysActive?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalSpeakingSessions?: SortOrder
    totalAIMessages?: SortOrder
    totalTimeMinutes?: SortOrder
    avgLessonScore?: SortOrder
    avgSpeakingScore?: SortOrder
    currentPlan?: SortOrder
    subscriptionStartAt?: SortOrder
    isActive?: SortOrder
    isAnonymized?: SortOrder
    anonymizedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstActivityAt?: SortOrder
    lastActivityAt?: SortOrder
    totalDaysActive?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalSpeakingSessions?: SortOrder
    totalAIMessages?: SortOrder
    totalTimeMinutes?: SortOrder
    avgLessonScore?: SortOrder
    avgSpeakingScore?: SortOrder
    currentPlan?: SortOrder
    subscriptionStartAt?: SortOrder
    isActive?: SortOrder
    isAnonymized?: SortOrder
    anonymizedAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAnalyticsSumOrderByAggregateInput = {
    totalDaysActive?: SortOrder
    totalLessonsCompleted?: SortOrder
    totalSpeakingSessions?: SortOrder
    totalAIMessages?: SortOrder
    totalTimeMinutes?: SortOrder
    avgLessonScore?: SortOrder
    avgSpeakingScore?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RawEventDefaultArgs instead
     */
    export type RawEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RawEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyAggregationDefaultArgs instead
     */
    export type DailyAggregationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyAggregationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonthlyAggregationDefaultArgs instead
     */
    export type MonthlyAggregationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonthlyAggregationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAnalyticsDefaultArgs instead
     */
    export type UserAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAnalyticsDefaultArgs<ExtArgs>

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