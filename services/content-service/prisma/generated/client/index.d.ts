
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
 * Model LessonContent
 * 
 */
export type LessonContent = $Result.DefaultSelection<Prisma.$LessonContentPayload>
/**
 * Model LessonSection
 * 
 */
export type LessonSection = $Result.DefaultSelection<Prisma.$LessonSectionPayload>
/**
 * Model ContentAsset
 * 
 */
export type ContentAsset = $Result.DefaultSelection<Prisma.$ContentAssetPayload>
/**
 * Model ContentTag
 * 
 */
export type ContentTag = $Result.DefaultSelection<Prisma.$ContentTagPayload>
/**
 * Model LessonContentTag
 * 
 */
export type LessonContentTag = $Result.DefaultSelection<Prisma.$LessonContentTagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LessonStatus: {
  DRAFT: 'DRAFT',
  REVIEW: 'REVIEW',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type LessonStatus = (typeof LessonStatus)[keyof typeof LessonStatus]


export const ContentType: {
  TEXT: 'TEXT',
  AUDIO: 'AUDIO',
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE',
  EXERCISE: 'EXERCISE',
  QUIZ: 'QUIZ'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const DifficultyLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type DifficultyLevel = (typeof DifficultyLevel)[keyof typeof DifficultyLevel]

}

export type LessonStatus = $Enums.LessonStatus

export const LessonStatus: typeof $Enums.LessonStatus

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type DifficultyLevel = $Enums.DifficultyLevel

export const DifficultyLevel: typeof $Enums.DifficultyLevel

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LessonContents
 * const lessonContents = await prisma.lessonContent.findMany()
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
   * // Fetch zero or more LessonContents
   * const lessonContents = await prisma.lessonContent.findMany()
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
   * `prisma.lessonContent`: Exposes CRUD operations for the **LessonContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonContents
    * const lessonContents = await prisma.lessonContent.findMany()
    * ```
    */
  get lessonContent(): Prisma.LessonContentDelegate<ExtArgs>;

  /**
   * `prisma.lessonSection`: Exposes CRUD operations for the **LessonSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonSections
    * const lessonSections = await prisma.lessonSection.findMany()
    * ```
    */
  get lessonSection(): Prisma.LessonSectionDelegate<ExtArgs>;

  /**
   * `prisma.contentAsset`: Exposes CRUD operations for the **ContentAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentAssets
    * const contentAssets = await prisma.contentAsset.findMany()
    * ```
    */
  get contentAsset(): Prisma.ContentAssetDelegate<ExtArgs>;

  /**
   * `prisma.contentTag`: Exposes CRUD operations for the **ContentTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentTags
    * const contentTags = await prisma.contentTag.findMany()
    * ```
    */
  get contentTag(): Prisma.ContentTagDelegate<ExtArgs>;

  /**
   * `prisma.lessonContentTag`: Exposes CRUD operations for the **LessonContentTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonContentTags
    * const lessonContentTags = await prisma.lessonContentTag.findMany()
    * ```
    */
  get lessonContentTag(): Prisma.LessonContentTagDelegate<ExtArgs>;
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
    LessonContent: 'LessonContent',
    LessonSection: 'LessonSection',
    ContentAsset: 'ContentAsset',
    ContentTag: 'ContentTag',
    LessonContentTag: 'LessonContentTag'
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
      modelProps: "lessonContent" | "lessonSection" | "contentAsset" | "contentTag" | "lessonContentTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LessonContent: {
        payload: Prisma.$LessonContentPayload<ExtArgs>
        fields: Prisma.LessonContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentPayload>
          }
          findFirst: {
            args: Prisma.LessonContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentPayload>
          }
          findMany: {
            args: Prisma.LessonContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentPayload>[]
          }
          create: {
            args: Prisma.LessonContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentPayload>
          }
          createMany: {
            args: Prisma.LessonContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentPayload>[]
          }
          delete: {
            args: Prisma.LessonContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentPayload>
          }
          update: {
            args: Prisma.LessonContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentPayload>
          }
          deleteMany: {
            args: Prisma.LessonContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LessonContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentPayload>
          }
          aggregate: {
            args: Prisma.LessonContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonContent>
          }
          groupBy: {
            args: Prisma.LessonContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonContentCountArgs<ExtArgs>
            result: $Utils.Optional<LessonContentCountAggregateOutputType> | number
          }
        }
      }
      LessonSection: {
        payload: Prisma.$LessonSectionPayload<ExtArgs>
        fields: Prisma.LessonSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonSectionPayload>
          }
          findFirst: {
            args: Prisma.LessonSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonSectionPayload>
          }
          findMany: {
            args: Prisma.LessonSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonSectionPayload>[]
          }
          create: {
            args: Prisma.LessonSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonSectionPayload>
          }
          createMany: {
            args: Prisma.LessonSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonSectionPayload>[]
          }
          delete: {
            args: Prisma.LessonSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonSectionPayload>
          }
          update: {
            args: Prisma.LessonSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonSectionPayload>
          }
          deleteMany: {
            args: Prisma.LessonSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LessonSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonSectionPayload>
          }
          aggregate: {
            args: Prisma.LessonSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonSection>
          }
          groupBy: {
            args: Prisma.LessonSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonSectionCountArgs<ExtArgs>
            result: $Utils.Optional<LessonSectionCountAggregateOutputType> | number
          }
        }
      }
      ContentAsset: {
        payload: Prisma.$ContentAssetPayload<ExtArgs>
        fields: Prisma.ContentAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAssetPayload>
          }
          findFirst: {
            args: Prisma.ContentAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAssetPayload>
          }
          findMany: {
            args: Prisma.ContentAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAssetPayload>[]
          }
          create: {
            args: Prisma.ContentAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAssetPayload>
          }
          createMany: {
            args: Prisma.ContentAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAssetPayload>[]
          }
          delete: {
            args: Prisma.ContentAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAssetPayload>
          }
          update: {
            args: Prisma.ContentAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAssetPayload>
          }
          deleteMany: {
            args: Prisma.ContentAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentAssetPayload>
          }
          aggregate: {
            args: Prisma.ContentAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentAsset>
          }
          groupBy: {
            args: Prisma.ContentAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentAssetCountArgs<ExtArgs>
            result: $Utils.Optional<ContentAssetCountAggregateOutputType> | number
          }
        }
      }
      ContentTag: {
        payload: Prisma.$ContentTagPayload<ExtArgs>
        fields: Prisma.ContentTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentTagPayload>
          }
          findFirst: {
            args: Prisma.ContentTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentTagPayload>
          }
          findMany: {
            args: Prisma.ContentTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentTagPayload>[]
          }
          create: {
            args: Prisma.ContentTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentTagPayload>
          }
          createMany: {
            args: Prisma.ContentTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentTagPayload>[]
          }
          delete: {
            args: Prisma.ContentTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentTagPayload>
          }
          update: {
            args: Prisma.ContentTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentTagPayload>
          }
          deleteMany: {
            args: Prisma.ContentTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentTagPayload>
          }
          aggregate: {
            args: Prisma.ContentTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentTag>
          }
          groupBy: {
            args: Prisma.ContentTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentTagCountArgs<ExtArgs>
            result: $Utils.Optional<ContentTagCountAggregateOutputType> | number
          }
        }
      }
      LessonContentTag: {
        payload: Prisma.$LessonContentTagPayload<ExtArgs>
        fields: Prisma.LessonContentTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonContentTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonContentTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentTagPayload>
          }
          findFirst: {
            args: Prisma.LessonContentTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonContentTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentTagPayload>
          }
          findMany: {
            args: Prisma.LessonContentTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentTagPayload>[]
          }
          create: {
            args: Prisma.LessonContentTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentTagPayload>
          }
          createMany: {
            args: Prisma.LessonContentTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonContentTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentTagPayload>[]
          }
          delete: {
            args: Prisma.LessonContentTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentTagPayload>
          }
          update: {
            args: Prisma.LessonContentTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentTagPayload>
          }
          deleteMany: {
            args: Prisma.LessonContentTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonContentTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LessonContentTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonContentTagPayload>
          }
          aggregate: {
            args: Prisma.LessonContentTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonContentTag>
          }
          groupBy: {
            args: Prisma.LessonContentTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonContentTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonContentTagCountArgs<ExtArgs>
            result: $Utils.Optional<LessonContentTagCountAggregateOutputType> | number
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
   * Count Type LessonContentCountOutputType
   */

  export type LessonContentCountOutputType = {
    sections: number
    assets: number
    tags: number
    versionHistory: number
  }

  export type LessonContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | LessonContentCountOutputTypeCountSectionsArgs
    assets?: boolean | LessonContentCountOutputTypeCountAssetsArgs
    tags?: boolean | LessonContentCountOutputTypeCountTagsArgs
    versionHistory?: boolean | LessonContentCountOutputTypeCountVersionHistoryArgs
  }

  // Custom InputTypes
  /**
   * LessonContentCountOutputType without action
   */
  export type LessonContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentCountOutputType
     */
    select?: LessonContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonContentCountOutputType without action
   */
  export type LessonContentCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonSectionWhereInput
  }

  /**
   * LessonContentCountOutputType without action
   */
  export type LessonContentCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentAssetWhereInput
  }

  /**
   * LessonContentCountOutputType without action
   */
  export type LessonContentCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonContentTagWhereInput
  }

  /**
   * LessonContentCountOutputType without action
   */
  export type LessonContentCountOutputTypeCountVersionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonContentWhereInput
  }


  /**
   * Count Type ContentTagCountOutputType
   */

  export type ContentTagCountOutputType = {
    lessons: number
  }

  export type ContentTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | ContentTagCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * ContentTagCountOutputType without action
   */
  export type ContentTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTagCountOutputType
     */
    select?: ContentTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentTagCountOutputType without action
   */
  export type ContentTagCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonContentTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LessonContent
   */

  export type AggregateLessonContent = {
    _count: LessonContentCountAggregateOutputType | null
    _avg: LessonContentAvgAggregateOutputType | null
    _sum: LessonContentSumAggregateOutputType | null
    _min: LessonContentMinAggregateOutputType | null
    _max: LessonContentMaxAggregateOutputType | null
  }

  export type LessonContentAvgAggregateOutputType = {
    version: number | null
  }

  export type LessonContentSumAggregateOutputType = {
    version: number | null
  }

  export type LessonContentMinAggregateOutputType = {
    id: string | null
    lessonId: string | null
    title: string | null
    description: string | null
    status: $Enums.LessonStatus | null
    contentType: $Enums.ContentType | null
    difficulty: $Enums.DifficultyLevel | null
    version: number | null
    previousVersionId: string | null
    publishedAt: Date | null
    reviewedBy: string | null
    reviewedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonContentMaxAggregateOutputType = {
    id: string | null
    lessonId: string | null
    title: string | null
    description: string | null
    status: $Enums.LessonStatus | null
    contentType: $Enums.ContentType | null
    difficulty: $Enums.DifficultyLevel | null
    version: number | null
    previousVersionId: string | null
    publishedAt: Date | null
    reviewedBy: string | null
    reviewedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonContentCountAggregateOutputType = {
    id: number
    lessonId: number
    title: number
    description: number
    status: number
    contentType: number
    difficulty: number
    content: number
    metadata: number
    version: number
    previousVersionId: number
    publishedAt: number
    reviewedBy: number
    reviewedAt: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonContentAvgAggregateInputType = {
    version?: true
  }

  export type LessonContentSumAggregateInputType = {
    version?: true
  }

  export type LessonContentMinAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    description?: true
    status?: true
    contentType?: true
    difficulty?: true
    version?: true
    previousVersionId?: true
    publishedAt?: true
    reviewedBy?: true
    reviewedAt?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonContentMaxAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    description?: true
    status?: true
    contentType?: true
    difficulty?: true
    version?: true
    previousVersionId?: true
    publishedAt?: true
    reviewedBy?: true
    reviewedAt?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonContentCountAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    description?: true
    status?: true
    contentType?: true
    difficulty?: true
    content?: true
    metadata?: true
    version?: true
    previousVersionId?: true
    publishedAt?: true
    reviewedBy?: true
    reviewedAt?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonContent to aggregate.
     */
    where?: LessonContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonContents to fetch.
     */
    orderBy?: LessonContentOrderByWithRelationInput | LessonContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonContents
    **/
    _count?: true | LessonContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonContentMaxAggregateInputType
  }

  export type GetLessonContentAggregateType<T extends LessonContentAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonContent[P]>
      : GetScalarType<T[P], AggregateLessonContent[P]>
  }




  export type LessonContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonContentWhereInput
    orderBy?: LessonContentOrderByWithAggregationInput | LessonContentOrderByWithAggregationInput[]
    by: LessonContentScalarFieldEnum[] | LessonContentScalarFieldEnum
    having?: LessonContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonContentCountAggregateInputType | true
    _avg?: LessonContentAvgAggregateInputType
    _sum?: LessonContentSumAggregateInputType
    _min?: LessonContentMinAggregateInputType
    _max?: LessonContentMaxAggregateInputType
  }

  export type LessonContentGroupByOutputType = {
    id: string
    lessonId: string
    title: string
    description: string | null
    status: $Enums.LessonStatus
    contentType: $Enums.ContentType
    difficulty: $Enums.DifficultyLevel
    content: JsonValue | null
    metadata: JsonValue | null
    version: number
    previousVersionId: string | null
    publishedAt: Date | null
    reviewedBy: string | null
    reviewedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: LessonContentCountAggregateOutputType | null
    _avg: LessonContentAvgAggregateOutputType | null
    _sum: LessonContentSumAggregateOutputType | null
    _min: LessonContentMinAggregateOutputType | null
    _max: LessonContentMaxAggregateOutputType | null
  }

  type GetLessonContentGroupByPayload<T extends LessonContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonContentGroupByOutputType[P]>
            : GetScalarType<T[P], LessonContentGroupByOutputType[P]>
        }
      >
    >


  export type LessonContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    contentType?: boolean
    difficulty?: boolean
    content?: boolean
    metadata?: boolean
    version?: boolean
    previousVersionId?: boolean
    publishedAt?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sections?: boolean | LessonContent$sectionsArgs<ExtArgs>
    assets?: boolean | LessonContent$assetsArgs<ExtArgs>
    tags?: boolean | LessonContent$tagsArgs<ExtArgs>
    versionHistory?: boolean | LessonContent$versionHistoryArgs<ExtArgs>
    previousVersion?: boolean | LessonContent$previousVersionArgs<ExtArgs>
    _count?: boolean | LessonContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonContent"]>

  export type LessonContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    contentType?: boolean
    difficulty?: boolean
    content?: boolean
    metadata?: boolean
    version?: boolean
    previousVersionId?: boolean
    publishedAt?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    previousVersion?: boolean | LessonContent$previousVersionArgs<ExtArgs>
  }, ExtArgs["result"]["lessonContent"]>

  export type LessonContentSelectScalar = {
    id?: boolean
    lessonId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    contentType?: boolean
    difficulty?: boolean
    content?: boolean
    metadata?: boolean
    version?: boolean
    previousVersionId?: boolean
    publishedAt?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | LessonContent$sectionsArgs<ExtArgs>
    assets?: boolean | LessonContent$assetsArgs<ExtArgs>
    tags?: boolean | LessonContent$tagsArgs<ExtArgs>
    versionHistory?: boolean | LessonContent$versionHistoryArgs<ExtArgs>
    previousVersion?: boolean | LessonContent$previousVersionArgs<ExtArgs>
    _count?: boolean | LessonContentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    previousVersion?: boolean | LessonContent$previousVersionArgs<ExtArgs>
  }

  export type $LessonContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonContent"
    objects: {
      sections: Prisma.$LessonSectionPayload<ExtArgs>[]
      assets: Prisma.$ContentAssetPayload<ExtArgs>[]
      tags: Prisma.$LessonContentTagPayload<ExtArgs>[]
      versionHistory: Prisma.$LessonContentPayload<ExtArgs>[]
      previousVersion: Prisma.$LessonContentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lessonId: string
      title: string
      description: string | null
      status: $Enums.LessonStatus
      contentType: $Enums.ContentType
      difficulty: $Enums.DifficultyLevel
      content: Prisma.JsonValue | null
      metadata: Prisma.JsonValue | null
      version: number
      previousVersionId: string | null
      publishedAt: Date | null
      reviewedBy: string | null
      reviewedAt: Date | null
      createdBy: string | null
      updatedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lessonContent"]>
    composites: {}
  }

  type LessonContentGetPayload<S extends boolean | null | undefined | LessonContentDefaultArgs> = $Result.GetResult<Prisma.$LessonContentPayload, S>

  type LessonContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LessonContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LessonContentCountAggregateInputType | true
    }

  export interface LessonContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonContent'], meta: { name: 'LessonContent' } }
    /**
     * Find zero or one LessonContent that matches the filter.
     * @param {LessonContentFindUniqueArgs} args - Arguments to find a LessonContent
     * @example
     * // Get one LessonContent
     * const lessonContent = await prisma.lessonContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonContentFindUniqueArgs>(args: SelectSubset<T, LessonContentFindUniqueArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LessonContent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LessonContentFindUniqueOrThrowArgs} args - Arguments to find a LessonContent
     * @example
     * // Get one LessonContent
     * const lessonContent = await prisma.lessonContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonContentFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LessonContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentFindFirstArgs} args - Arguments to find a LessonContent
     * @example
     * // Get one LessonContent
     * const lessonContent = await prisma.lessonContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonContentFindFirstArgs>(args?: SelectSubset<T, LessonContentFindFirstArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LessonContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentFindFirstOrThrowArgs} args - Arguments to find a LessonContent
     * @example
     * // Get one LessonContent
     * const lessonContent = await prisma.lessonContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonContentFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LessonContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonContents
     * const lessonContents = await prisma.lessonContent.findMany()
     * 
     * // Get first 10 LessonContents
     * const lessonContents = await prisma.lessonContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonContentWithIdOnly = await prisma.lessonContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonContentFindManyArgs>(args?: SelectSubset<T, LessonContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LessonContent.
     * @param {LessonContentCreateArgs} args - Arguments to create a LessonContent.
     * @example
     * // Create one LessonContent
     * const LessonContent = await prisma.lessonContent.create({
     *   data: {
     *     // ... data to create a LessonContent
     *   }
     * })
     * 
     */
    create<T extends LessonContentCreateArgs>(args: SelectSubset<T, LessonContentCreateArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LessonContents.
     * @param {LessonContentCreateManyArgs} args - Arguments to create many LessonContents.
     * @example
     * // Create many LessonContents
     * const lessonContent = await prisma.lessonContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonContentCreateManyArgs>(args?: SelectSubset<T, LessonContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonContents and returns the data saved in the database.
     * @param {LessonContentCreateManyAndReturnArgs} args - Arguments to create many LessonContents.
     * @example
     * // Create many LessonContents
     * const lessonContent = await prisma.lessonContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonContents and only return the `id`
     * const lessonContentWithIdOnly = await prisma.lessonContent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonContentCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LessonContent.
     * @param {LessonContentDeleteArgs} args - Arguments to delete one LessonContent.
     * @example
     * // Delete one LessonContent
     * const LessonContent = await prisma.lessonContent.delete({
     *   where: {
     *     // ... filter to delete one LessonContent
     *   }
     * })
     * 
     */
    delete<T extends LessonContentDeleteArgs>(args: SelectSubset<T, LessonContentDeleteArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LessonContent.
     * @param {LessonContentUpdateArgs} args - Arguments to update one LessonContent.
     * @example
     * // Update one LessonContent
     * const lessonContent = await prisma.lessonContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonContentUpdateArgs>(args: SelectSubset<T, LessonContentUpdateArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LessonContents.
     * @param {LessonContentDeleteManyArgs} args - Arguments to filter LessonContents to delete.
     * @example
     * // Delete a few LessonContents
     * const { count } = await prisma.lessonContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonContentDeleteManyArgs>(args?: SelectSubset<T, LessonContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonContents
     * const lessonContent = await prisma.lessonContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonContentUpdateManyArgs>(args: SelectSubset<T, LessonContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LessonContent.
     * @param {LessonContentUpsertArgs} args - Arguments to update or create a LessonContent.
     * @example
     * // Update or create a LessonContent
     * const lessonContent = await prisma.lessonContent.upsert({
     *   create: {
     *     // ... data to create a LessonContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonContent we want to update
     *   }
     * })
     */
    upsert<T extends LessonContentUpsertArgs>(args: SelectSubset<T, LessonContentUpsertArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LessonContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentCountArgs} args - Arguments to filter LessonContents to count.
     * @example
     * // Count the number of LessonContents
     * const count = await prisma.lessonContent.count({
     *   where: {
     *     // ... the filter for the LessonContents we want to count
     *   }
     * })
    **/
    count<T extends LessonContentCountArgs>(
      args?: Subset<T, LessonContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonContentAggregateArgs>(args: Subset<T, LessonContentAggregateArgs>): Prisma.PrismaPromise<GetLessonContentAggregateType<T>>

    /**
     * Group by LessonContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentGroupByArgs} args - Group by arguments.
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
      T extends LessonContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonContentGroupByArgs['orderBy'] }
        : { orderBy?: LessonContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonContent model
   */
  readonly fields: LessonContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends LessonContent$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, LessonContent$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "findMany"> | Null>
    assets<T extends LessonContent$assetsArgs<ExtArgs> = {}>(args?: Subset<T, LessonContent$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "findMany"> | Null>
    tags<T extends LessonContent$tagsArgs<ExtArgs> = {}>(args?: Subset<T, LessonContent$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "findMany"> | Null>
    versionHistory<T extends LessonContent$versionHistoryArgs<ExtArgs> = {}>(args?: Subset<T, LessonContent$versionHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "findMany"> | Null>
    previousVersion<T extends LessonContent$previousVersionArgs<ExtArgs> = {}>(args?: Subset<T, LessonContent$previousVersionArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the LessonContent model
   */ 
  interface LessonContentFieldRefs {
    readonly id: FieldRef<"LessonContent", 'String'>
    readonly lessonId: FieldRef<"LessonContent", 'String'>
    readonly title: FieldRef<"LessonContent", 'String'>
    readonly description: FieldRef<"LessonContent", 'String'>
    readonly status: FieldRef<"LessonContent", 'LessonStatus'>
    readonly contentType: FieldRef<"LessonContent", 'ContentType'>
    readonly difficulty: FieldRef<"LessonContent", 'DifficultyLevel'>
    readonly content: FieldRef<"LessonContent", 'Json'>
    readonly metadata: FieldRef<"LessonContent", 'Json'>
    readonly version: FieldRef<"LessonContent", 'Int'>
    readonly previousVersionId: FieldRef<"LessonContent", 'String'>
    readonly publishedAt: FieldRef<"LessonContent", 'DateTime'>
    readonly reviewedBy: FieldRef<"LessonContent", 'String'>
    readonly reviewedAt: FieldRef<"LessonContent", 'DateTime'>
    readonly createdBy: FieldRef<"LessonContent", 'String'>
    readonly updatedBy: FieldRef<"LessonContent", 'String'>
    readonly createdAt: FieldRef<"LessonContent", 'DateTime'>
    readonly updatedAt: FieldRef<"LessonContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonContent findUnique
   */
  export type LessonContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    /**
     * Filter, which LessonContent to fetch.
     */
    where: LessonContentWhereUniqueInput
  }

  /**
   * LessonContent findUniqueOrThrow
   */
  export type LessonContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    /**
     * Filter, which LessonContent to fetch.
     */
    where: LessonContentWhereUniqueInput
  }

  /**
   * LessonContent findFirst
   */
  export type LessonContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    /**
     * Filter, which LessonContent to fetch.
     */
    where?: LessonContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonContents to fetch.
     */
    orderBy?: LessonContentOrderByWithRelationInput | LessonContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonContents.
     */
    cursor?: LessonContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonContents.
     */
    distinct?: LessonContentScalarFieldEnum | LessonContentScalarFieldEnum[]
  }

  /**
   * LessonContent findFirstOrThrow
   */
  export type LessonContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    /**
     * Filter, which LessonContent to fetch.
     */
    where?: LessonContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonContents to fetch.
     */
    orderBy?: LessonContentOrderByWithRelationInput | LessonContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonContents.
     */
    cursor?: LessonContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonContents.
     */
    distinct?: LessonContentScalarFieldEnum | LessonContentScalarFieldEnum[]
  }

  /**
   * LessonContent findMany
   */
  export type LessonContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    /**
     * Filter, which LessonContents to fetch.
     */
    where?: LessonContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonContents to fetch.
     */
    orderBy?: LessonContentOrderByWithRelationInput | LessonContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonContents.
     */
    cursor?: LessonContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonContents.
     */
    skip?: number
    distinct?: LessonContentScalarFieldEnum | LessonContentScalarFieldEnum[]
  }

  /**
   * LessonContent create
   */
  export type LessonContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonContent.
     */
    data: XOR<LessonContentCreateInput, LessonContentUncheckedCreateInput>
  }

  /**
   * LessonContent createMany
   */
  export type LessonContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonContents.
     */
    data: LessonContentCreateManyInput | LessonContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonContent createManyAndReturn
   */
  export type LessonContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LessonContents.
     */
    data: LessonContentCreateManyInput | LessonContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonContent update
   */
  export type LessonContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonContent.
     */
    data: XOR<LessonContentUpdateInput, LessonContentUncheckedUpdateInput>
    /**
     * Choose, which LessonContent to update.
     */
    where: LessonContentWhereUniqueInput
  }

  /**
   * LessonContent updateMany
   */
  export type LessonContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonContents.
     */
    data: XOR<LessonContentUpdateManyMutationInput, LessonContentUncheckedUpdateManyInput>
    /**
     * Filter which LessonContents to update
     */
    where?: LessonContentWhereInput
  }

  /**
   * LessonContent upsert
   */
  export type LessonContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonContent to update in case it exists.
     */
    where: LessonContentWhereUniqueInput
    /**
     * In case the LessonContent found by the `where` argument doesn't exist, create a new LessonContent with this data.
     */
    create: XOR<LessonContentCreateInput, LessonContentUncheckedCreateInput>
    /**
     * In case the LessonContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonContentUpdateInput, LessonContentUncheckedUpdateInput>
  }

  /**
   * LessonContent delete
   */
  export type LessonContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    /**
     * Filter which LessonContent to delete.
     */
    where: LessonContentWhereUniqueInput
  }

  /**
   * LessonContent deleteMany
   */
  export type LessonContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonContents to delete
     */
    where?: LessonContentWhereInput
  }

  /**
   * LessonContent.sections
   */
  export type LessonContent$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
    where?: LessonSectionWhereInput
    orderBy?: LessonSectionOrderByWithRelationInput | LessonSectionOrderByWithRelationInput[]
    cursor?: LessonSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonSectionScalarFieldEnum | LessonSectionScalarFieldEnum[]
  }

  /**
   * LessonContent.assets
   */
  export type LessonContent$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
    where?: ContentAssetWhereInput
    orderBy?: ContentAssetOrderByWithRelationInput | ContentAssetOrderByWithRelationInput[]
    cursor?: ContentAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentAssetScalarFieldEnum | ContentAssetScalarFieldEnum[]
  }

  /**
   * LessonContent.tags
   */
  export type LessonContent$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    where?: LessonContentTagWhereInput
    orderBy?: LessonContentTagOrderByWithRelationInput | LessonContentTagOrderByWithRelationInput[]
    cursor?: LessonContentTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonContentTagScalarFieldEnum | LessonContentTagScalarFieldEnum[]
  }

  /**
   * LessonContent.versionHistory
   */
  export type LessonContent$versionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    where?: LessonContentWhereInput
    orderBy?: LessonContentOrderByWithRelationInput | LessonContentOrderByWithRelationInput[]
    cursor?: LessonContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonContentScalarFieldEnum | LessonContentScalarFieldEnum[]
  }

  /**
   * LessonContent.previousVersion
   */
  export type LessonContent$previousVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
    where?: LessonContentWhereInput
  }

  /**
   * LessonContent without action
   */
  export type LessonContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContent
     */
    select?: LessonContentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentInclude<ExtArgs> | null
  }


  /**
   * Model LessonSection
   */

  export type AggregateLessonSection = {
    _count: LessonSectionCountAggregateOutputType | null
    _avg: LessonSectionAvgAggregateOutputType | null
    _sum: LessonSectionSumAggregateOutputType | null
    _min: LessonSectionMinAggregateOutputType | null
    _max: LessonSectionMaxAggregateOutputType | null
  }

  export type LessonSectionAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type LessonSectionSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type LessonSectionMinAggregateOutputType = {
    id: string | null
    lessonId: string | null
    title: string | null
    description: string | null
    orderIndex: number | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonSectionMaxAggregateOutputType = {
    id: string | null
    lessonId: string | null
    title: string | null
    description: string | null
    orderIndex: number | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonSectionCountAggregateOutputType = {
    id: number
    lessonId: number
    title: number
    description: number
    orderIndex: number
    content: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonSectionAvgAggregateInputType = {
    orderIndex?: true
  }

  export type LessonSectionSumAggregateInputType = {
    orderIndex?: true
  }

  export type LessonSectionMinAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    description?: true
    orderIndex?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonSectionMaxAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    description?: true
    orderIndex?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonSectionCountAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    description?: true
    orderIndex?: true
    content?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonSection to aggregate.
     */
    where?: LessonSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonSections to fetch.
     */
    orderBy?: LessonSectionOrderByWithRelationInput | LessonSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonSections
    **/
    _count?: true | LessonSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonSectionMaxAggregateInputType
  }

  export type GetLessonSectionAggregateType<T extends LessonSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonSection[P]>
      : GetScalarType<T[P], AggregateLessonSection[P]>
  }




  export type LessonSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonSectionWhereInput
    orderBy?: LessonSectionOrderByWithAggregationInput | LessonSectionOrderByWithAggregationInput[]
    by: LessonSectionScalarFieldEnum[] | LessonSectionScalarFieldEnum
    having?: LessonSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonSectionCountAggregateInputType | true
    _avg?: LessonSectionAvgAggregateInputType
    _sum?: LessonSectionSumAggregateInputType
    _min?: LessonSectionMinAggregateInputType
    _max?: LessonSectionMaxAggregateInputType
  }

  export type LessonSectionGroupByOutputType = {
    id: string
    lessonId: string
    title: string
    description: string | null
    orderIndex: number
    content: JsonValue | null
    type: string | null
    createdAt: Date
    updatedAt: Date
    _count: LessonSectionCountAggregateOutputType | null
    _avg: LessonSectionAvgAggregateOutputType | null
    _sum: LessonSectionSumAggregateOutputType | null
    _min: LessonSectionMinAggregateOutputType | null
    _max: LessonSectionMaxAggregateOutputType | null
  }

  type GetLessonSectionGroupByPayload<T extends LessonSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonSectionGroupByOutputType[P]>
            : GetScalarType<T[P], LessonSectionGroupByOutputType[P]>
        }
      >
    >


  export type LessonSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    title?: boolean
    description?: boolean
    orderIndex?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonSection"]>

  export type LessonSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    title?: boolean
    description?: boolean
    orderIndex?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonSection"]>

  export type LessonSectionSelectScalar = {
    id?: boolean
    lessonId?: boolean
    title?: boolean
    description?: boolean
    orderIndex?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
  }
  export type LessonSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
  }

  export type $LessonSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonSection"
    objects: {
      lesson: Prisma.$LessonContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lessonId: string
      title: string
      description: string | null
      orderIndex: number
      content: Prisma.JsonValue | null
      type: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lessonSection"]>
    composites: {}
  }

  type LessonSectionGetPayload<S extends boolean | null | undefined | LessonSectionDefaultArgs> = $Result.GetResult<Prisma.$LessonSectionPayload, S>

  type LessonSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LessonSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LessonSectionCountAggregateInputType | true
    }

  export interface LessonSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonSection'], meta: { name: 'LessonSection' } }
    /**
     * Find zero or one LessonSection that matches the filter.
     * @param {LessonSectionFindUniqueArgs} args - Arguments to find a LessonSection
     * @example
     * // Get one LessonSection
     * const lessonSection = await prisma.lessonSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonSectionFindUniqueArgs>(args: SelectSubset<T, LessonSectionFindUniqueArgs<ExtArgs>>): Prisma__LessonSectionClient<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LessonSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LessonSectionFindUniqueOrThrowArgs} args - Arguments to find a LessonSection
     * @example
     * // Get one LessonSection
     * const lessonSection = await prisma.lessonSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonSectionClient<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LessonSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSectionFindFirstArgs} args - Arguments to find a LessonSection
     * @example
     * // Get one LessonSection
     * const lessonSection = await prisma.lessonSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonSectionFindFirstArgs>(args?: SelectSubset<T, LessonSectionFindFirstArgs<ExtArgs>>): Prisma__LessonSectionClient<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LessonSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSectionFindFirstOrThrowArgs} args - Arguments to find a LessonSection
     * @example
     * // Get one LessonSection
     * const lessonSection = await prisma.lessonSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonSectionClient<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LessonSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonSections
     * const lessonSections = await prisma.lessonSection.findMany()
     * 
     * // Get first 10 LessonSections
     * const lessonSections = await prisma.lessonSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonSectionWithIdOnly = await prisma.lessonSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonSectionFindManyArgs>(args?: SelectSubset<T, LessonSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LessonSection.
     * @param {LessonSectionCreateArgs} args - Arguments to create a LessonSection.
     * @example
     * // Create one LessonSection
     * const LessonSection = await prisma.lessonSection.create({
     *   data: {
     *     // ... data to create a LessonSection
     *   }
     * })
     * 
     */
    create<T extends LessonSectionCreateArgs>(args: SelectSubset<T, LessonSectionCreateArgs<ExtArgs>>): Prisma__LessonSectionClient<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LessonSections.
     * @param {LessonSectionCreateManyArgs} args - Arguments to create many LessonSections.
     * @example
     * // Create many LessonSections
     * const lessonSection = await prisma.lessonSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonSectionCreateManyArgs>(args?: SelectSubset<T, LessonSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonSections and returns the data saved in the database.
     * @param {LessonSectionCreateManyAndReturnArgs} args - Arguments to create many LessonSections.
     * @example
     * // Create many LessonSections
     * const lessonSection = await prisma.lessonSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonSections and only return the `id`
     * const lessonSectionWithIdOnly = await prisma.lessonSection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LessonSection.
     * @param {LessonSectionDeleteArgs} args - Arguments to delete one LessonSection.
     * @example
     * // Delete one LessonSection
     * const LessonSection = await prisma.lessonSection.delete({
     *   where: {
     *     // ... filter to delete one LessonSection
     *   }
     * })
     * 
     */
    delete<T extends LessonSectionDeleteArgs>(args: SelectSubset<T, LessonSectionDeleteArgs<ExtArgs>>): Prisma__LessonSectionClient<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LessonSection.
     * @param {LessonSectionUpdateArgs} args - Arguments to update one LessonSection.
     * @example
     * // Update one LessonSection
     * const lessonSection = await prisma.lessonSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonSectionUpdateArgs>(args: SelectSubset<T, LessonSectionUpdateArgs<ExtArgs>>): Prisma__LessonSectionClient<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LessonSections.
     * @param {LessonSectionDeleteManyArgs} args - Arguments to filter LessonSections to delete.
     * @example
     * // Delete a few LessonSections
     * const { count } = await prisma.lessonSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonSectionDeleteManyArgs>(args?: SelectSubset<T, LessonSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonSections
     * const lessonSection = await prisma.lessonSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonSectionUpdateManyArgs>(args: SelectSubset<T, LessonSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LessonSection.
     * @param {LessonSectionUpsertArgs} args - Arguments to update or create a LessonSection.
     * @example
     * // Update or create a LessonSection
     * const lessonSection = await prisma.lessonSection.upsert({
     *   create: {
     *     // ... data to create a LessonSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonSection we want to update
     *   }
     * })
     */
    upsert<T extends LessonSectionUpsertArgs>(args: SelectSubset<T, LessonSectionUpsertArgs<ExtArgs>>): Prisma__LessonSectionClient<$Result.GetResult<Prisma.$LessonSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LessonSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSectionCountArgs} args - Arguments to filter LessonSections to count.
     * @example
     * // Count the number of LessonSections
     * const count = await prisma.lessonSection.count({
     *   where: {
     *     // ... the filter for the LessonSections we want to count
     *   }
     * })
    **/
    count<T extends LessonSectionCountArgs>(
      args?: Subset<T, LessonSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonSectionAggregateArgs>(args: Subset<T, LessonSectionAggregateArgs>): Prisma.PrismaPromise<GetLessonSectionAggregateType<T>>

    /**
     * Group by LessonSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSectionGroupByArgs} args - Group by arguments.
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
      T extends LessonSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonSectionGroupByArgs['orderBy'] }
        : { orderBy?: LessonSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonSection model
   */
  readonly fields: LessonSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonContentDefaultArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the LessonSection model
   */ 
  interface LessonSectionFieldRefs {
    readonly id: FieldRef<"LessonSection", 'String'>
    readonly lessonId: FieldRef<"LessonSection", 'String'>
    readonly title: FieldRef<"LessonSection", 'String'>
    readonly description: FieldRef<"LessonSection", 'String'>
    readonly orderIndex: FieldRef<"LessonSection", 'Int'>
    readonly content: FieldRef<"LessonSection", 'Json'>
    readonly type: FieldRef<"LessonSection", 'String'>
    readonly createdAt: FieldRef<"LessonSection", 'DateTime'>
    readonly updatedAt: FieldRef<"LessonSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonSection findUnique
   */
  export type LessonSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
    /**
     * Filter, which LessonSection to fetch.
     */
    where: LessonSectionWhereUniqueInput
  }

  /**
   * LessonSection findUniqueOrThrow
   */
  export type LessonSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
    /**
     * Filter, which LessonSection to fetch.
     */
    where: LessonSectionWhereUniqueInput
  }

  /**
   * LessonSection findFirst
   */
  export type LessonSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
    /**
     * Filter, which LessonSection to fetch.
     */
    where?: LessonSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonSections to fetch.
     */
    orderBy?: LessonSectionOrderByWithRelationInput | LessonSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonSections.
     */
    cursor?: LessonSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonSections.
     */
    distinct?: LessonSectionScalarFieldEnum | LessonSectionScalarFieldEnum[]
  }

  /**
   * LessonSection findFirstOrThrow
   */
  export type LessonSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
    /**
     * Filter, which LessonSection to fetch.
     */
    where?: LessonSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonSections to fetch.
     */
    orderBy?: LessonSectionOrderByWithRelationInput | LessonSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonSections.
     */
    cursor?: LessonSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonSections.
     */
    distinct?: LessonSectionScalarFieldEnum | LessonSectionScalarFieldEnum[]
  }

  /**
   * LessonSection findMany
   */
  export type LessonSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
    /**
     * Filter, which LessonSections to fetch.
     */
    where?: LessonSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonSections to fetch.
     */
    orderBy?: LessonSectionOrderByWithRelationInput | LessonSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonSections.
     */
    cursor?: LessonSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonSections.
     */
    skip?: number
    distinct?: LessonSectionScalarFieldEnum | LessonSectionScalarFieldEnum[]
  }

  /**
   * LessonSection create
   */
  export type LessonSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonSection.
     */
    data: XOR<LessonSectionCreateInput, LessonSectionUncheckedCreateInput>
  }

  /**
   * LessonSection createMany
   */
  export type LessonSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonSections.
     */
    data: LessonSectionCreateManyInput | LessonSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonSection createManyAndReturn
   */
  export type LessonSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LessonSections.
     */
    data: LessonSectionCreateManyInput | LessonSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonSection update
   */
  export type LessonSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonSection.
     */
    data: XOR<LessonSectionUpdateInput, LessonSectionUncheckedUpdateInput>
    /**
     * Choose, which LessonSection to update.
     */
    where: LessonSectionWhereUniqueInput
  }

  /**
   * LessonSection updateMany
   */
  export type LessonSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonSections.
     */
    data: XOR<LessonSectionUpdateManyMutationInput, LessonSectionUncheckedUpdateManyInput>
    /**
     * Filter which LessonSections to update
     */
    where?: LessonSectionWhereInput
  }

  /**
   * LessonSection upsert
   */
  export type LessonSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonSection to update in case it exists.
     */
    where: LessonSectionWhereUniqueInput
    /**
     * In case the LessonSection found by the `where` argument doesn't exist, create a new LessonSection with this data.
     */
    create: XOR<LessonSectionCreateInput, LessonSectionUncheckedCreateInput>
    /**
     * In case the LessonSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonSectionUpdateInput, LessonSectionUncheckedUpdateInput>
  }

  /**
   * LessonSection delete
   */
  export type LessonSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
    /**
     * Filter which LessonSection to delete.
     */
    where: LessonSectionWhereUniqueInput
  }

  /**
   * LessonSection deleteMany
   */
  export type LessonSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonSections to delete
     */
    where?: LessonSectionWhereInput
  }

  /**
   * LessonSection without action
   */
  export type LessonSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonSection
     */
    select?: LessonSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonSectionInclude<ExtArgs> | null
  }


  /**
   * Model ContentAsset
   */

  export type AggregateContentAsset = {
    _count: ContentAssetCountAggregateOutputType | null
    _avg: ContentAssetAvgAggregateOutputType | null
    _sum: ContentAssetSumAggregateOutputType | null
    _min: ContentAssetMinAggregateOutputType | null
    _max: ContentAssetMaxAggregateOutputType | null
  }

  export type ContentAssetAvgAggregateOutputType = {
    fileSize: number | null
    duration: number | null
    width: number | null
    height: number | null
  }

  export type ContentAssetSumAggregateOutputType = {
    fileSize: number | null
    duration: number | null
    width: number | null
    height: number | null
  }

  export type ContentAssetMinAggregateOutputType = {
    id: string | null
    lessonId: string | null
    sectionId: string | null
    type: $Enums.ContentType | null
    title: string | null
    description: string | null
    s3Key: string | null
    bucket: string | null
    url: string | null
    fileSize: number | null
    mimeType: string | null
    duration: number | null
    width: number | null
    height: number | null
    isProcessed: boolean | null
    processedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentAssetMaxAggregateOutputType = {
    id: string | null
    lessonId: string | null
    sectionId: string | null
    type: $Enums.ContentType | null
    title: string | null
    description: string | null
    s3Key: string | null
    bucket: string | null
    url: string | null
    fileSize: number | null
    mimeType: string | null
    duration: number | null
    width: number | null
    height: number | null
    isProcessed: boolean | null
    processedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentAssetCountAggregateOutputType = {
    id: number
    lessonId: number
    sectionId: number
    type: number
    title: number
    description: number
    s3Key: number
    bucket: number
    url: number
    fileSize: number
    mimeType: number
    duration: number
    width: number
    height: number
    isProcessed: number
    processedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentAssetAvgAggregateInputType = {
    fileSize?: true
    duration?: true
    width?: true
    height?: true
  }

  export type ContentAssetSumAggregateInputType = {
    fileSize?: true
    duration?: true
    width?: true
    height?: true
  }

  export type ContentAssetMinAggregateInputType = {
    id?: true
    lessonId?: true
    sectionId?: true
    type?: true
    title?: true
    description?: true
    s3Key?: true
    bucket?: true
    url?: true
    fileSize?: true
    mimeType?: true
    duration?: true
    width?: true
    height?: true
    isProcessed?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentAssetMaxAggregateInputType = {
    id?: true
    lessonId?: true
    sectionId?: true
    type?: true
    title?: true
    description?: true
    s3Key?: true
    bucket?: true
    url?: true
    fileSize?: true
    mimeType?: true
    duration?: true
    width?: true
    height?: true
    isProcessed?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentAssetCountAggregateInputType = {
    id?: true
    lessonId?: true
    sectionId?: true
    type?: true
    title?: true
    description?: true
    s3Key?: true
    bucket?: true
    url?: true
    fileSize?: true
    mimeType?: true
    duration?: true
    width?: true
    height?: true
    isProcessed?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentAsset to aggregate.
     */
    where?: ContentAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentAssets to fetch.
     */
    orderBy?: ContentAssetOrderByWithRelationInput | ContentAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentAssets
    **/
    _count?: true | ContentAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentAssetMaxAggregateInputType
  }

  export type GetContentAssetAggregateType<T extends ContentAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateContentAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentAsset[P]>
      : GetScalarType<T[P], AggregateContentAsset[P]>
  }




  export type ContentAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentAssetWhereInput
    orderBy?: ContentAssetOrderByWithAggregationInput | ContentAssetOrderByWithAggregationInput[]
    by: ContentAssetScalarFieldEnum[] | ContentAssetScalarFieldEnum
    having?: ContentAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentAssetCountAggregateInputType | true
    _avg?: ContentAssetAvgAggregateInputType
    _sum?: ContentAssetSumAggregateInputType
    _min?: ContentAssetMinAggregateInputType
    _max?: ContentAssetMaxAggregateInputType
  }

  export type ContentAssetGroupByOutputType = {
    id: string
    lessonId: string
    sectionId: string | null
    type: $Enums.ContentType
    title: string
    description: string | null
    s3Key: string
    bucket: string
    url: string | null
    fileSize: number | null
    mimeType: string | null
    duration: number | null
    width: number | null
    height: number | null
    isProcessed: boolean
    processedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ContentAssetCountAggregateOutputType | null
    _avg: ContentAssetAvgAggregateOutputType | null
    _sum: ContentAssetSumAggregateOutputType | null
    _min: ContentAssetMinAggregateOutputType | null
    _max: ContentAssetMaxAggregateOutputType | null
  }

  type GetContentAssetGroupByPayload<T extends ContentAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentAssetGroupByOutputType[P]>
            : GetScalarType<T[P], ContentAssetGroupByOutputType[P]>
        }
      >
    >


  export type ContentAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    sectionId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    s3Key?: boolean
    bucket?: boolean
    url?: boolean
    fileSize?: boolean
    mimeType?: boolean
    duration?: boolean
    width?: boolean
    height?: boolean
    isProcessed?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentAsset"]>

  export type ContentAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    sectionId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    s3Key?: boolean
    bucket?: boolean
    url?: boolean
    fileSize?: boolean
    mimeType?: boolean
    duration?: boolean
    width?: boolean
    height?: boolean
    isProcessed?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentAsset"]>

  export type ContentAssetSelectScalar = {
    id?: boolean
    lessonId?: boolean
    sectionId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    s3Key?: boolean
    bucket?: boolean
    url?: boolean
    fileSize?: boolean
    mimeType?: boolean
    duration?: boolean
    width?: boolean
    height?: boolean
    isProcessed?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
  }
  export type ContentAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
  }

  export type $ContentAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentAsset"
    objects: {
      lesson: Prisma.$LessonContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lessonId: string
      sectionId: string | null
      type: $Enums.ContentType
      title: string
      description: string | null
      s3Key: string
      bucket: string
      url: string | null
      fileSize: number | null
      mimeType: string | null
      duration: number | null
      width: number | null
      height: number | null
      isProcessed: boolean
      processedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentAsset"]>
    composites: {}
  }

  type ContentAssetGetPayload<S extends boolean | null | undefined | ContentAssetDefaultArgs> = $Result.GetResult<Prisma.$ContentAssetPayload, S>

  type ContentAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContentAssetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContentAssetCountAggregateInputType | true
    }

  export interface ContentAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentAsset'], meta: { name: 'ContentAsset' } }
    /**
     * Find zero or one ContentAsset that matches the filter.
     * @param {ContentAssetFindUniqueArgs} args - Arguments to find a ContentAsset
     * @example
     * // Get one ContentAsset
     * const contentAsset = await prisma.contentAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentAssetFindUniqueArgs>(args: SelectSubset<T, ContentAssetFindUniqueArgs<ExtArgs>>): Prisma__ContentAssetClient<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContentAsset that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContentAssetFindUniqueOrThrowArgs} args - Arguments to find a ContentAsset
     * @example
     * // Get one ContentAsset
     * const contentAsset = await prisma.contentAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentAssetClient<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContentAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAssetFindFirstArgs} args - Arguments to find a ContentAsset
     * @example
     * // Get one ContentAsset
     * const contentAsset = await prisma.contentAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentAssetFindFirstArgs>(args?: SelectSubset<T, ContentAssetFindFirstArgs<ExtArgs>>): Prisma__ContentAssetClient<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContentAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAssetFindFirstOrThrowArgs} args - Arguments to find a ContentAsset
     * @example
     * // Get one ContentAsset
     * const contentAsset = await prisma.contentAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentAssetClient<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContentAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentAssets
     * const contentAssets = await prisma.contentAsset.findMany()
     * 
     * // Get first 10 ContentAssets
     * const contentAssets = await prisma.contentAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentAssetWithIdOnly = await prisma.contentAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentAssetFindManyArgs>(args?: SelectSubset<T, ContentAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContentAsset.
     * @param {ContentAssetCreateArgs} args - Arguments to create a ContentAsset.
     * @example
     * // Create one ContentAsset
     * const ContentAsset = await prisma.contentAsset.create({
     *   data: {
     *     // ... data to create a ContentAsset
     *   }
     * })
     * 
     */
    create<T extends ContentAssetCreateArgs>(args: SelectSubset<T, ContentAssetCreateArgs<ExtArgs>>): Prisma__ContentAssetClient<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContentAssets.
     * @param {ContentAssetCreateManyArgs} args - Arguments to create many ContentAssets.
     * @example
     * // Create many ContentAssets
     * const contentAsset = await prisma.contentAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentAssetCreateManyArgs>(args?: SelectSubset<T, ContentAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentAssets and returns the data saved in the database.
     * @param {ContentAssetCreateManyAndReturnArgs} args - Arguments to create many ContentAssets.
     * @example
     * // Create many ContentAssets
     * const contentAsset = await prisma.contentAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentAssets and only return the `id`
     * const contentAssetWithIdOnly = await prisma.contentAsset.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ContentAsset.
     * @param {ContentAssetDeleteArgs} args - Arguments to delete one ContentAsset.
     * @example
     * // Delete one ContentAsset
     * const ContentAsset = await prisma.contentAsset.delete({
     *   where: {
     *     // ... filter to delete one ContentAsset
     *   }
     * })
     * 
     */
    delete<T extends ContentAssetDeleteArgs>(args: SelectSubset<T, ContentAssetDeleteArgs<ExtArgs>>): Prisma__ContentAssetClient<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContentAsset.
     * @param {ContentAssetUpdateArgs} args - Arguments to update one ContentAsset.
     * @example
     * // Update one ContentAsset
     * const contentAsset = await prisma.contentAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentAssetUpdateArgs>(args: SelectSubset<T, ContentAssetUpdateArgs<ExtArgs>>): Prisma__ContentAssetClient<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContentAssets.
     * @param {ContentAssetDeleteManyArgs} args - Arguments to filter ContentAssets to delete.
     * @example
     * // Delete a few ContentAssets
     * const { count } = await prisma.contentAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentAssetDeleteManyArgs>(args?: SelectSubset<T, ContentAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentAssets
     * const contentAsset = await prisma.contentAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentAssetUpdateManyArgs>(args: SelectSubset<T, ContentAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContentAsset.
     * @param {ContentAssetUpsertArgs} args - Arguments to update or create a ContentAsset.
     * @example
     * // Update or create a ContentAsset
     * const contentAsset = await prisma.contentAsset.upsert({
     *   create: {
     *     // ... data to create a ContentAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentAsset we want to update
     *   }
     * })
     */
    upsert<T extends ContentAssetUpsertArgs>(args: SelectSubset<T, ContentAssetUpsertArgs<ExtArgs>>): Prisma__ContentAssetClient<$Result.GetResult<Prisma.$ContentAssetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ContentAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAssetCountArgs} args - Arguments to filter ContentAssets to count.
     * @example
     * // Count the number of ContentAssets
     * const count = await prisma.contentAsset.count({
     *   where: {
     *     // ... the filter for the ContentAssets we want to count
     *   }
     * })
    **/
    count<T extends ContentAssetCountArgs>(
      args?: Subset<T, ContentAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentAssetAggregateArgs>(args: Subset<T, ContentAssetAggregateArgs>): Prisma.PrismaPromise<GetContentAssetAggregateType<T>>

    /**
     * Group by ContentAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAssetGroupByArgs} args - Group by arguments.
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
      T extends ContentAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentAssetGroupByArgs['orderBy'] }
        : { orderBy?: ContentAssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentAsset model
   */
  readonly fields: ContentAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonContentDefaultArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ContentAsset model
   */ 
  interface ContentAssetFieldRefs {
    readonly id: FieldRef<"ContentAsset", 'String'>
    readonly lessonId: FieldRef<"ContentAsset", 'String'>
    readonly sectionId: FieldRef<"ContentAsset", 'String'>
    readonly type: FieldRef<"ContentAsset", 'ContentType'>
    readonly title: FieldRef<"ContentAsset", 'String'>
    readonly description: FieldRef<"ContentAsset", 'String'>
    readonly s3Key: FieldRef<"ContentAsset", 'String'>
    readonly bucket: FieldRef<"ContentAsset", 'String'>
    readonly url: FieldRef<"ContentAsset", 'String'>
    readonly fileSize: FieldRef<"ContentAsset", 'Int'>
    readonly mimeType: FieldRef<"ContentAsset", 'String'>
    readonly duration: FieldRef<"ContentAsset", 'Int'>
    readonly width: FieldRef<"ContentAsset", 'Int'>
    readonly height: FieldRef<"ContentAsset", 'Int'>
    readonly isProcessed: FieldRef<"ContentAsset", 'Boolean'>
    readonly processedAt: FieldRef<"ContentAsset", 'DateTime'>
    readonly createdAt: FieldRef<"ContentAsset", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentAsset findUnique
   */
  export type ContentAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
    /**
     * Filter, which ContentAsset to fetch.
     */
    where: ContentAssetWhereUniqueInput
  }

  /**
   * ContentAsset findUniqueOrThrow
   */
  export type ContentAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
    /**
     * Filter, which ContentAsset to fetch.
     */
    where: ContentAssetWhereUniqueInput
  }

  /**
   * ContentAsset findFirst
   */
  export type ContentAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
    /**
     * Filter, which ContentAsset to fetch.
     */
    where?: ContentAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentAssets to fetch.
     */
    orderBy?: ContentAssetOrderByWithRelationInput | ContentAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentAssets.
     */
    cursor?: ContentAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentAssets.
     */
    distinct?: ContentAssetScalarFieldEnum | ContentAssetScalarFieldEnum[]
  }

  /**
   * ContentAsset findFirstOrThrow
   */
  export type ContentAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
    /**
     * Filter, which ContentAsset to fetch.
     */
    where?: ContentAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentAssets to fetch.
     */
    orderBy?: ContentAssetOrderByWithRelationInput | ContentAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentAssets.
     */
    cursor?: ContentAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentAssets.
     */
    distinct?: ContentAssetScalarFieldEnum | ContentAssetScalarFieldEnum[]
  }

  /**
   * ContentAsset findMany
   */
  export type ContentAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
    /**
     * Filter, which ContentAssets to fetch.
     */
    where?: ContentAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentAssets to fetch.
     */
    orderBy?: ContentAssetOrderByWithRelationInput | ContentAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentAssets.
     */
    cursor?: ContentAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentAssets.
     */
    skip?: number
    distinct?: ContentAssetScalarFieldEnum | ContentAssetScalarFieldEnum[]
  }

  /**
   * ContentAsset create
   */
  export type ContentAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentAsset.
     */
    data: XOR<ContentAssetCreateInput, ContentAssetUncheckedCreateInput>
  }

  /**
   * ContentAsset createMany
   */
  export type ContentAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentAssets.
     */
    data: ContentAssetCreateManyInput | ContentAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentAsset createManyAndReturn
   */
  export type ContentAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ContentAssets.
     */
    data: ContentAssetCreateManyInput | ContentAssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentAsset update
   */
  export type ContentAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentAsset.
     */
    data: XOR<ContentAssetUpdateInput, ContentAssetUncheckedUpdateInput>
    /**
     * Choose, which ContentAsset to update.
     */
    where: ContentAssetWhereUniqueInput
  }

  /**
   * ContentAsset updateMany
   */
  export type ContentAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentAssets.
     */
    data: XOR<ContentAssetUpdateManyMutationInput, ContentAssetUncheckedUpdateManyInput>
    /**
     * Filter which ContentAssets to update
     */
    where?: ContentAssetWhereInput
  }

  /**
   * ContentAsset upsert
   */
  export type ContentAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentAsset to update in case it exists.
     */
    where: ContentAssetWhereUniqueInput
    /**
     * In case the ContentAsset found by the `where` argument doesn't exist, create a new ContentAsset with this data.
     */
    create: XOR<ContentAssetCreateInput, ContentAssetUncheckedCreateInput>
    /**
     * In case the ContentAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentAssetUpdateInput, ContentAssetUncheckedUpdateInput>
  }

  /**
   * ContentAsset delete
   */
  export type ContentAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
    /**
     * Filter which ContentAsset to delete.
     */
    where: ContentAssetWhereUniqueInput
  }

  /**
   * ContentAsset deleteMany
   */
  export type ContentAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentAssets to delete
     */
    where?: ContentAssetWhereInput
  }

  /**
   * ContentAsset without action
   */
  export type ContentAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentAsset
     */
    select?: ContentAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentAssetInclude<ExtArgs> | null
  }


  /**
   * Model ContentTag
   */

  export type AggregateContentTag = {
    _count: ContentTagCountAggregateOutputType | null
    _min: ContentTagMinAggregateOutputType | null
    _max: ContentTagMaxAggregateOutputType | null
  }

  export type ContentTagMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentTagCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentTagMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentTagMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentTagCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentTag to aggregate.
     */
    where?: ContentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentTags to fetch.
     */
    orderBy?: ContentTagOrderByWithRelationInput | ContentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentTags
    **/
    _count?: true | ContentTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentTagMaxAggregateInputType
  }

  export type GetContentTagAggregateType<T extends ContentTagAggregateArgs> = {
        [P in keyof T & keyof AggregateContentTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentTag[P]>
      : GetScalarType<T[P], AggregateContentTag[P]>
  }




  export type ContentTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentTagWhereInput
    orderBy?: ContentTagOrderByWithAggregationInput | ContentTagOrderByWithAggregationInput[]
    by: ContentTagScalarFieldEnum[] | ContentTagScalarFieldEnum
    having?: ContentTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentTagCountAggregateInputType | true
    _min?: ContentTagMinAggregateInputType
    _max?: ContentTagMaxAggregateInputType
  }

  export type ContentTagGroupByOutputType = {
    id: string
    name: string
    description: string | null
    color: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContentTagCountAggregateOutputType | null
    _min: ContentTagMinAggregateOutputType | null
    _max: ContentTagMaxAggregateOutputType | null
  }

  type GetContentTagGroupByPayload<T extends ContentTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentTagGroupByOutputType[P]>
            : GetScalarType<T[P], ContentTagGroupByOutputType[P]>
        }
      >
    >


  export type ContentTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lessons?: boolean | ContentTag$lessonsArgs<ExtArgs>
    _count?: boolean | ContentTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentTag"]>

  export type ContentTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contentTag"]>

  export type ContentTagSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | ContentTag$lessonsArgs<ExtArgs>
    _count?: boolean | ContentTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContentTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentTag"
    objects: {
      lessons: Prisma.$LessonContentTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      color: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentTag"]>
    composites: {}
  }

  type ContentTagGetPayload<S extends boolean | null | undefined | ContentTagDefaultArgs> = $Result.GetResult<Prisma.$ContentTagPayload, S>

  type ContentTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContentTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContentTagCountAggregateInputType | true
    }

  export interface ContentTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentTag'], meta: { name: 'ContentTag' } }
    /**
     * Find zero or one ContentTag that matches the filter.
     * @param {ContentTagFindUniqueArgs} args - Arguments to find a ContentTag
     * @example
     * // Get one ContentTag
     * const contentTag = await prisma.contentTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentTagFindUniqueArgs>(args: SelectSubset<T, ContentTagFindUniqueArgs<ExtArgs>>): Prisma__ContentTagClient<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContentTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContentTagFindUniqueOrThrowArgs} args - Arguments to find a ContentTag
     * @example
     * // Get one ContentTag
     * const contentTag = await prisma.contentTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentTagClient<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContentTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTagFindFirstArgs} args - Arguments to find a ContentTag
     * @example
     * // Get one ContentTag
     * const contentTag = await prisma.contentTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentTagFindFirstArgs>(args?: SelectSubset<T, ContentTagFindFirstArgs<ExtArgs>>): Prisma__ContentTagClient<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContentTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTagFindFirstOrThrowArgs} args - Arguments to find a ContentTag
     * @example
     * // Get one ContentTag
     * const contentTag = await prisma.contentTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentTagClient<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContentTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentTags
     * const contentTags = await prisma.contentTag.findMany()
     * 
     * // Get first 10 ContentTags
     * const contentTags = await prisma.contentTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentTagWithIdOnly = await prisma.contentTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentTagFindManyArgs>(args?: SelectSubset<T, ContentTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContentTag.
     * @param {ContentTagCreateArgs} args - Arguments to create a ContentTag.
     * @example
     * // Create one ContentTag
     * const ContentTag = await prisma.contentTag.create({
     *   data: {
     *     // ... data to create a ContentTag
     *   }
     * })
     * 
     */
    create<T extends ContentTagCreateArgs>(args: SelectSubset<T, ContentTagCreateArgs<ExtArgs>>): Prisma__ContentTagClient<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContentTags.
     * @param {ContentTagCreateManyArgs} args - Arguments to create many ContentTags.
     * @example
     * // Create many ContentTags
     * const contentTag = await prisma.contentTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentTagCreateManyArgs>(args?: SelectSubset<T, ContentTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentTags and returns the data saved in the database.
     * @param {ContentTagCreateManyAndReturnArgs} args - Arguments to create many ContentTags.
     * @example
     * // Create many ContentTags
     * const contentTag = await prisma.contentTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentTags and only return the `id`
     * const contentTagWithIdOnly = await prisma.contentTag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ContentTag.
     * @param {ContentTagDeleteArgs} args - Arguments to delete one ContentTag.
     * @example
     * // Delete one ContentTag
     * const ContentTag = await prisma.contentTag.delete({
     *   where: {
     *     // ... filter to delete one ContentTag
     *   }
     * })
     * 
     */
    delete<T extends ContentTagDeleteArgs>(args: SelectSubset<T, ContentTagDeleteArgs<ExtArgs>>): Prisma__ContentTagClient<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContentTag.
     * @param {ContentTagUpdateArgs} args - Arguments to update one ContentTag.
     * @example
     * // Update one ContentTag
     * const contentTag = await prisma.contentTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentTagUpdateArgs>(args: SelectSubset<T, ContentTagUpdateArgs<ExtArgs>>): Prisma__ContentTagClient<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContentTags.
     * @param {ContentTagDeleteManyArgs} args - Arguments to filter ContentTags to delete.
     * @example
     * // Delete a few ContentTags
     * const { count } = await prisma.contentTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentTagDeleteManyArgs>(args?: SelectSubset<T, ContentTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentTags
     * const contentTag = await prisma.contentTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentTagUpdateManyArgs>(args: SelectSubset<T, ContentTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContentTag.
     * @param {ContentTagUpsertArgs} args - Arguments to update or create a ContentTag.
     * @example
     * // Update or create a ContentTag
     * const contentTag = await prisma.contentTag.upsert({
     *   create: {
     *     // ... data to create a ContentTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentTag we want to update
     *   }
     * })
     */
    upsert<T extends ContentTagUpsertArgs>(args: SelectSubset<T, ContentTagUpsertArgs<ExtArgs>>): Prisma__ContentTagClient<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ContentTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTagCountArgs} args - Arguments to filter ContentTags to count.
     * @example
     * // Count the number of ContentTags
     * const count = await prisma.contentTag.count({
     *   where: {
     *     // ... the filter for the ContentTags we want to count
     *   }
     * })
    **/
    count<T extends ContentTagCountArgs>(
      args?: Subset<T, ContentTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentTagAggregateArgs>(args: Subset<T, ContentTagAggregateArgs>): Prisma.PrismaPromise<GetContentTagAggregateType<T>>

    /**
     * Group by ContentTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentTagGroupByArgs} args - Group by arguments.
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
      T extends ContentTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentTagGroupByArgs['orderBy'] }
        : { orderBy?: ContentTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentTag model
   */
  readonly fields: ContentTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends ContentTag$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, ContentTag$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ContentTag model
   */ 
  interface ContentTagFieldRefs {
    readonly id: FieldRef<"ContentTag", 'String'>
    readonly name: FieldRef<"ContentTag", 'String'>
    readonly description: FieldRef<"ContentTag", 'String'>
    readonly color: FieldRef<"ContentTag", 'String'>
    readonly createdAt: FieldRef<"ContentTag", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentTag findUnique
   */
  export type ContentTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentTagInclude<ExtArgs> | null
    /**
     * Filter, which ContentTag to fetch.
     */
    where: ContentTagWhereUniqueInput
  }

  /**
   * ContentTag findUniqueOrThrow
   */
  export type ContentTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentTagInclude<ExtArgs> | null
    /**
     * Filter, which ContentTag to fetch.
     */
    where: ContentTagWhereUniqueInput
  }

  /**
   * ContentTag findFirst
   */
  export type ContentTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentTagInclude<ExtArgs> | null
    /**
     * Filter, which ContentTag to fetch.
     */
    where?: ContentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentTags to fetch.
     */
    orderBy?: ContentTagOrderByWithRelationInput | ContentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentTags.
     */
    cursor?: ContentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentTags.
     */
    distinct?: ContentTagScalarFieldEnum | ContentTagScalarFieldEnum[]
  }

  /**
   * ContentTag findFirstOrThrow
   */
  export type ContentTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentTagInclude<ExtArgs> | null
    /**
     * Filter, which ContentTag to fetch.
     */
    where?: ContentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentTags to fetch.
     */
    orderBy?: ContentTagOrderByWithRelationInput | ContentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentTags.
     */
    cursor?: ContentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentTags.
     */
    distinct?: ContentTagScalarFieldEnum | ContentTagScalarFieldEnum[]
  }

  /**
   * ContentTag findMany
   */
  export type ContentTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentTagInclude<ExtArgs> | null
    /**
     * Filter, which ContentTags to fetch.
     */
    where?: ContentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentTags to fetch.
     */
    orderBy?: ContentTagOrderByWithRelationInput | ContentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentTags.
     */
    cursor?: ContentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentTags.
     */
    skip?: number
    distinct?: ContentTagScalarFieldEnum | ContentTagScalarFieldEnum[]
  }

  /**
   * ContentTag create
   */
  export type ContentTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentTag.
     */
    data: XOR<ContentTagCreateInput, ContentTagUncheckedCreateInput>
  }

  /**
   * ContentTag createMany
   */
  export type ContentTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentTags.
     */
    data: ContentTagCreateManyInput | ContentTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentTag createManyAndReturn
   */
  export type ContentTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ContentTags.
     */
    data: ContentTagCreateManyInput | ContentTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentTag update
   */
  export type ContentTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentTag.
     */
    data: XOR<ContentTagUpdateInput, ContentTagUncheckedUpdateInput>
    /**
     * Choose, which ContentTag to update.
     */
    where: ContentTagWhereUniqueInput
  }

  /**
   * ContentTag updateMany
   */
  export type ContentTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentTags.
     */
    data: XOR<ContentTagUpdateManyMutationInput, ContentTagUncheckedUpdateManyInput>
    /**
     * Filter which ContentTags to update
     */
    where?: ContentTagWhereInput
  }

  /**
   * ContentTag upsert
   */
  export type ContentTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentTag to update in case it exists.
     */
    where: ContentTagWhereUniqueInput
    /**
     * In case the ContentTag found by the `where` argument doesn't exist, create a new ContentTag with this data.
     */
    create: XOR<ContentTagCreateInput, ContentTagUncheckedCreateInput>
    /**
     * In case the ContentTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentTagUpdateInput, ContentTagUncheckedUpdateInput>
  }

  /**
   * ContentTag delete
   */
  export type ContentTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentTagInclude<ExtArgs> | null
    /**
     * Filter which ContentTag to delete.
     */
    where: ContentTagWhereUniqueInput
  }

  /**
   * ContentTag deleteMany
   */
  export type ContentTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentTags to delete
     */
    where?: ContentTagWhereInput
  }

  /**
   * ContentTag.lessons
   */
  export type ContentTag$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    where?: LessonContentTagWhereInput
    orderBy?: LessonContentTagOrderByWithRelationInput | LessonContentTagOrderByWithRelationInput[]
    cursor?: LessonContentTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonContentTagScalarFieldEnum | LessonContentTagScalarFieldEnum[]
  }

  /**
   * ContentTag without action
   */
  export type ContentTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentTag
     */
    select?: ContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentTagInclude<ExtArgs> | null
  }


  /**
   * Model LessonContentTag
   */

  export type AggregateLessonContentTag = {
    _count: LessonContentTagCountAggregateOutputType | null
    _min: LessonContentTagMinAggregateOutputType | null
    _max: LessonContentTagMaxAggregateOutputType | null
  }

  export type LessonContentTagMinAggregateOutputType = {
    lessonId: string | null
    tagId: string | null
    assignedAt: Date | null
  }

  export type LessonContentTagMaxAggregateOutputType = {
    lessonId: string | null
    tagId: string | null
    assignedAt: Date | null
  }

  export type LessonContentTagCountAggregateOutputType = {
    lessonId: number
    tagId: number
    assignedAt: number
    _all: number
  }


  export type LessonContentTagMinAggregateInputType = {
    lessonId?: true
    tagId?: true
    assignedAt?: true
  }

  export type LessonContentTagMaxAggregateInputType = {
    lessonId?: true
    tagId?: true
    assignedAt?: true
  }

  export type LessonContentTagCountAggregateInputType = {
    lessonId?: true
    tagId?: true
    assignedAt?: true
    _all?: true
  }

  export type LessonContentTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonContentTag to aggregate.
     */
    where?: LessonContentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonContentTags to fetch.
     */
    orderBy?: LessonContentTagOrderByWithRelationInput | LessonContentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonContentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonContentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonContentTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonContentTags
    **/
    _count?: true | LessonContentTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonContentTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonContentTagMaxAggregateInputType
  }

  export type GetLessonContentTagAggregateType<T extends LessonContentTagAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonContentTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonContentTag[P]>
      : GetScalarType<T[P], AggregateLessonContentTag[P]>
  }




  export type LessonContentTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonContentTagWhereInput
    orderBy?: LessonContentTagOrderByWithAggregationInput | LessonContentTagOrderByWithAggregationInput[]
    by: LessonContentTagScalarFieldEnum[] | LessonContentTagScalarFieldEnum
    having?: LessonContentTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonContentTagCountAggregateInputType | true
    _min?: LessonContentTagMinAggregateInputType
    _max?: LessonContentTagMaxAggregateInputType
  }

  export type LessonContentTagGroupByOutputType = {
    lessonId: string
    tagId: string
    assignedAt: Date
    _count: LessonContentTagCountAggregateOutputType | null
    _min: LessonContentTagMinAggregateOutputType | null
    _max: LessonContentTagMaxAggregateOutputType | null
  }

  type GetLessonContentTagGroupByPayload<T extends LessonContentTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonContentTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonContentTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonContentTagGroupByOutputType[P]>
            : GetScalarType<T[P], LessonContentTagGroupByOutputType[P]>
        }
      >
    >


  export type LessonContentTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lessonId?: boolean
    tagId?: boolean
    assignedAt?: boolean
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
    tag?: boolean | ContentTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonContentTag"]>

  export type LessonContentTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lessonId?: boolean
    tagId?: boolean
    assignedAt?: boolean
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
    tag?: boolean | ContentTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonContentTag"]>

  export type LessonContentTagSelectScalar = {
    lessonId?: boolean
    tagId?: boolean
    assignedAt?: boolean
  }

  export type LessonContentTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
    tag?: boolean | ContentTagDefaultArgs<ExtArgs>
  }
  export type LessonContentTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonContentDefaultArgs<ExtArgs>
    tag?: boolean | ContentTagDefaultArgs<ExtArgs>
  }

  export type $LessonContentTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonContentTag"
    objects: {
      lesson: Prisma.$LessonContentPayload<ExtArgs>
      tag: Prisma.$ContentTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      lessonId: string
      tagId: string
      assignedAt: Date
    }, ExtArgs["result"]["lessonContentTag"]>
    composites: {}
  }

  type LessonContentTagGetPayload<S extends boolean | null | undefined | LessonContentTagDefaultArgs> = $Result.GetResult<Prisma.$LessonContentTagPayload, S>

  type LessonContentTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LessonContentTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LessonContentTagCountAggregateInputType | true
    }

  export interface LessonContentTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonContentTag'], meta: { name: 'LessonContentTag' } }
    /**
     * Find zero or one LessonContentTag that matches the filter.
     * @param {LessonContentTagFindUniqueArgs} args - Arguments to find a LessonContentTag
     * @example
     * // Get one LessonContentTag
     * const lessonContentTag = await prisma.lessonContentTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonContentTagFindUniqueArgs>(args: SelectSubset<T, LessonContentTagFindUniqueArgs<ExtArgs>>): Prisma__LessonContentTagClient<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LessonContentTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LessonContentTagFindUniqueOrThrowArgs} args - Arguments to find a LessonContentTag
     * @example
     * // Get one LessonContentTag
     * const lessonContentTag = await prisma.lessonContentTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonContentTagFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonContentTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonContentTagClient<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LessonContentTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentTagFindFirstArgs} args - Arguments to find a LessonContentTag
     * @example
     * // Get one LessonContentTag
     * const lessonContentTag = await prisma.lessonContentTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonContentTagFindFirstArgs>(args?: SelectSubset<T, LessonContentTagFindFirstArgs<ExtArgs>>): Prisma__LessonContentTagClient<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LessonContentTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentTagFindFirstOrThrowArgs} args - Arguments to find a LessonContentTag
     * @example
     * // Get one LessonContentTag
     * const lessonContentTag = await prisma.lessonContentTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonContentTagFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonContentTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonContentTagClient<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LessonContentTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonContentTags
     * const lessonContentTags = await prisma.lessonContentTag.findMany()
     * 
     * // Get first 10 LessonContentTags
     * const lessonContentTags = await prisma.lessonContentTag.findMany({ take: 10 })
     * 
     * // Only select the `lessonId`
     * const lessonContentTagWithLessonIdOnly = await prisma.lessonContentTag.findMany({ select: { lessonId: true } })
     * 
     */
    findMany<T extends LessonContentTagFindManyArgs>(args?: SelectSubset<T, LessonContentTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LessonContentTag.
     * @param {LessonContentTagCreateArgs} args - Arguments to create a LessonContentTag.
     * @example
     * // Create one LessonContentTag
     * const LessonContentTag = await prisma.lessonContentTag.create({
     *   data: {
     *     // ... data to create a LessonContentTag
     *   }
     * })
     * 
     */
    create<T extends LessonContentTagCreateArgs>(args: SelectSubset<T, LessonContentTagCreateArgs<ExtArgs>>): Prisma__LessonContentTagClient<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LessonContentTags.
     * @param {LessonContentTagCreateManyArgs} args - Arguments to create many LessonContentTags.
     * @example
     * // Create many LessonContentTags
     * const lessonContentTag = await prisma.lessonContentTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonContentTagCreateManyArgs>(args?: SelectSubset<T, LessonContentTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonContentTags and returns the data saved in the database.
     * @param {LessonContentTagCreateManyAndReturnArgs} args - Arguments to create many LessonContentTags.
     * @example
     * // Create many LessonContentTags
     * const lessonContentTag = await prisma.lessonContentTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonContentTags and only return the `lessonId`
     * const lessonContentTagWithLessonIdOnly = await prisma.lessonContentTag.createManyAndReturn({ 
     *   select: { lessonId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonContentTagCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonContentTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LessonContentTag.
     * @param {LessonContentTagDeleteArgs} args - Arguments to delete one LessonContentTag.
     * @example
     * // Delete one LessonContentTag
     * const LessonContentTag = await prisma.lessonContentTag.delete({
     *   where: {
     *     // ... filter to delete one LessonContentTag
     *   }
     * })
     * 
     */
    delete<T extends LessonContentTagDeleteArgs>(args: SelectSubset<T, LessonContentTagDeleteArgs<ExtArgs>>): Prisma__LessonContentTagClient<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LessonContentTag.
     * @param {LessonContentTagUpdateArgs} args - Arguments to update one LessonContentTag.
     * @example
     * // Update one LessonContentTag
     * const lessonContentTag = await prisma.lessonContentTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonContentTagUpdateArgs>(args: SelectSubset<T, LessonContentTagUpdateArgs<ExtArgs>>): Prisma__LessonContentTagClient<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LessonContentTags.
     * @param {LessonContentTagDeleteManyArgs} args - Arguments to filter LessonContentTags to delete.
     * @example
     * // Delete a few LessonContentTags
     * const { count } = await prisma.lessonContentTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonContentTagDeleteManyArgs>(args?: SelectSubset<T, LessonContentTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonContentTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonContentTags
     * const lessonContentTag = await prisma.lessonContentTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonContentTagUpdateManyArgs>(args: SelectSubset<T, LessonContentTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LessonContentTag.
     * @param {LessonContentTagUpsertArgs} args - Arguments to update or create a LessonContentTag.
     * @example
     * // Update or create a LessonContentTag
     * const lessonContentTag = await prisma.lessonContentTag.upsert({
     *   create: {
     *     // ... data to create a LessonContentTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonContentTag we want to update
     *   }
     * })
     */
    upsert<T extends LessonContentTagUpsertArgs>(args: SelectSubset<T, LessonContentTagUpsertArgs<ExtArgs>>): Prisma__LessonContentTagClient<$Result.GetResult<Prisma.$LessonContentTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LessonContentTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentTagCountArgs} args - Arguments to filter LessonContentTags to count.
     * @example
     * // Count the number of LessonContentTags
     * const count = await prisma.lessonContentTag.count({
     *   where: {
     *     // ... the filter for the LessonContentTags we want to count
     *   }
     * })
    **/
    count<T extends LessonContentTagCountArgs>(
      args?: Subset<T, LessonContentTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonContentTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonContentTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonContentTagAggregateArgs>(args: Subset<T, LessonContentTagAggregateArgs>): Prisma.PrismaPromise<GetLessonContentTagAggregateType<T>>

    /**
     * Group by LessonContentTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonContentTagGroupByArgs} args - Group by arguments.
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
      T extends LessonContentTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonContentTagGroupByArgs['orderBy'] }
        : { orderBy?: LessonContentTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonContentTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonContentTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonContentTag model
   */
  readonly fields: LessonContentTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonContentTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonContentTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonContentDefaultArgs<ExtArgs>>): Prisma__LessonContentClient<$Result.GetResult<Prisma.$LessonContentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tag<T extends ContentTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentTagDefaultArgs<ExtArgs>>): Prisma__ContentTagClient<$Result.GetResult<Prisma.$ContentTagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the LessonContentTag model
   */ 
  interface LessonContentTagFieldRefs {
    readonly lessonId: FieldRef<"LessonContentTag", 'String'>
    readonly tagId: FieldRef<"LessonContentTag", 'String'>
    readonly assignedAt: FieldRef<"LessonContentTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonContentTag findUnique
   */
  export type LessonContentTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    /**
     * Filter, which LessonContentTag to fetch.
     */
    where: LessonContentTagWhereUniqueInput
  }

  /**
   * LessonContentTag findUniqueOrThrow
   */
  export type LessonContentTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    /**
     * Filter, which LessonContentTag to fetch.
     */
    where: LessonContentTagWhereUniqueInput
  }

  /**
   * LessonContentTag findFirst
   */
  export type LessonContentTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    /**
     * Filter, which LessonContentTag to fetch.
     */
    where?: LessonContentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonContentTags to fetch.
     */
    orderBy?: LessonContentTagOrderByWithRelationInput | LessonContentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonContentTags.
     */
    cursor?: LessonContentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonContentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonContentTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonContentTags.
     */
    distinct?: LessonContentTagScalarFieldEnum | LessonContentTagScalarFieldEnum[]
  }

  /**
   * LessonContentTag findFirstOrThrow
   */
  export type LessonContentTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    /**
     * Filter, which LessonContentTag to fetch.
     */
    where?: LessonContentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonContentTags to fetch.
     */
    orderBy?: LessonContentTagOrderByWithRelationInput | LessonContentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonContentTags.
     */
    cursor?: LessonContentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonContentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonContentTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonContentTags.
     */
    distinct?: LessonContentTagScalarFieldEnum | LessonContentTagScalarFieldEnum[]
  }

  /**
   * LessonContentTag findMany
   */
  export type LessonContentTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    /**
     * Filter, which LessonContentTags to fetch.
     */
    where?: LessonContentTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonContentTags to fetch.
     */
    orderBy?: LessonContentTagOrderByWithRelationInput | LessonContentTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonContentTags.
     */
    cursor?: LessonContentTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonContentTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonContentTags.
     */
    skip?: number
    distinct?: LessonContentTagScalarFieldEnum | LessonContentTagScalarFieldEnum[]
  }

  /**
   * LessonContentTag create
   */
  export type LessonContentTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonContentTag.
     */
    data: XOR<LessonContentTagCreateInput, LessonContentTagUncheckedCreateInput>
  }

  /**
   * LessonContentTag createMany
   */
  export type LessonContentTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonContentTags.
     */
    data: LessonContentTagCreateManyInput | LessonContentTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonContentTag createManyAndReturn
   */
  export type LessonContentTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LessonContentTags.
     */
    data: LessonContentTagCreateManyInput | LessonContentTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonContentTag update
   */
  export type LessonContentTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonContentTag.
     */
    data: XOR<LessonContentTagUpdateInput, LessonContentTagUncheckedUpdateInput>
    /**
     * Choose, which LessonContentTag to update.
     */
    where: LessonContentTagWhereUniqueInput
  }

  /**
   * LessonContentTag updateMany
   */
  export type LessonContentTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonContentTags.
     */
    data: XOR<LessonContentTagUpdateManyMutationInput, LessonContentTagUncheckedUpdateManyInput>
    /**
     * Filter which LessonContentTags to update
     */
    where?: LessonContentTagWhereInput
  }

  /**
   * LessonContentTag upsert
   */
  export type LessonContentTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonContentTag to update in case it exists.
     */
    where: LessonContentTagWhereUniqueInput
    /**
     * In case the LessonContentTag found by the `where` argument doesn't exist, create a new LessonContentTag with this data.
     */
    create: XOR<LessonContentTagCreateInput, LessonContentTagUncheckedCreateInput>
    /**
     * In case the LessonContentTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonContentTagUpdateInput, LessonContentTagUncheckedUpdateInput>
  }

  /**
   * LessonContentTag delete
   */
  export type LessonContentTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
    /**
     * Filter which LessonContentTag to delete.
     */
    where: LessonContentTagWhereUniqueInput
  }

  /**
   * LessonContentTag deleteMany
   */
  export type LessonContentTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonContentTags to delete
     */
    where?: LessonContentTagWhereInput
  }

  /**
   * LessonContentTag without action
   */
  export type LessonContentTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonContentTag
     */
    select?: LessonContentTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonContentTagInclude<ExtArgs> | null
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


  export const LessonContentScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId',
    title: 'title',
    description: 'description',
    status: 'status',
    contentType: 'contentType',
    difficulty: 'difficulty',
    content: 'content',
    metadata: 'metadata',
    version: 'version',
    previousVersionId: 'previousVersionId',
    publishedAt: 'publishedAt',
    reviewedBy: 'reviewedBy',
    reviewedAt: 'reviewedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonContentScalarFieldEnum = (typeof LessonContentScalarFieldEnum)[keyof typeof LessonContentScalarFieldEnum]


  export const LessonSectionScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId',
    title: 'title',
    description: 'description',
    orderIndex: 'orderIndex',
    content: 'content',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonSectionScalarFieldEnum = (typeof LessonSectionScalarFieldEnum)[keyof typeof LessonSectionScalarFieldEnum]


  export const ContentAssetScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId',
    sectionId: 'sectionId',
    type: 'type',
    title: 'title',
    description: 'description',
    s3Key: 's3Key',
    bucket: 'bucket',
    url: 'url',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    duration: 'duration',
    width: 'width',
    height: 'height',
    isProcessed: 'isProcessed',
    processedAt: 'processedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentAssetScalarFieldEnum = (typeof ContentAssetScalarFieldEnum)[keyof typeof ContentAssetScalarFieldEnum]


  export const ContentTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentTagScalarFieldEnum = (typeof ContentTagScalarFieldEnum)[keyof typeof ContentTagScalarFieldEnum]


  export const LessonContentTagScalarFieldEnum: {
    lessonId: 'lessonId',
    tagId: 'tagId',
    assignedAt: 'assignedAt'
  };

  export type LessonContentTagScalarFieldEnum = (typeof LessonContentTagScalarFieldEnum)[keyof typeof LessonContentTagScalarFieldEnum]


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
   * Reference to a field of type 'LessonStatus'
   */
  export type EnumLessonStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonStatus'>
    


  /**
   * Reference to a field of type 'LessonStatus[]'
   */
  export type ListEnumLessonStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonStatus[]'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'DifficultyLevel'
   */
  export type EnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel'>
    


  /**
   * Reference to a field of type 'DifficultyLevel[]'
   */
  export type ListEnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel[]'>
    


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type LessonContentWhereInput = {
    AND?: LessonContentWhereInput | LessonContentWhereInput[]
    OR?: LessonContentWhereInput[]
    NOT?: LessonContentWhereInput | LessonContentWhereInput[]
    id?: StringFilter<"LessonContent"> | string
    lessonId?: StringFilter<"LessonContent"> | string
    title?: StringFilter<"LessonContent"> | string
    description?: StringNullableFilter<"LessonContent"> | string | null
    status?: EnumLessonStatusFilter<"LessonContent"> | $Enums.LessonStatus
    contentType?: EnumContentTypeFilter<"LessonContent"> | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFilter<"LessonContent"> | $Enums.DifficultyLevel
    content?: JsonNullableFilter<"LessonContent">
    metadata?: JsonNullableFilter<"LessonContent">
    version?: IntFilter<"LessonContent"> | number
    previousVersionId?: StringNullableFilter<"LessonContent"> | string | null
    publishedAt?: DateTimeNullableFilter<"LessonContent"> | Date | string | null
    reviewedBy?: StringNullableFilter<"LessonContent"> | string | null
    reviewedAt?: DateTimeNullableFilter<"LessonContent"> | Date | string | null
    createdBy?: StringNullableFilter<"LessonContent"> | string | null
    updatedBy?: StringNullableFilter<"LessonContent"> | string | null
    createdAt?: DateTimeFilter<"LessonContent"> | Date | string
    updatedAt?: DateTimeFilter<"LessonContent"> | Date | string
    sections?: LessonSectionListRelationFilter
    assets?: ContentAssetListRelationFilter
    tags?: LessonContentTagListRelationFilter
    versionHistory?: LessonContentListRelationFilter
    previousVersion?: XOR<LessonContentNullableRelationFilter, LessonContentWhereInput> | null
  }

  export type LessonContentOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    contentType?: SortOrder
    difficulty?: SortOrder
    content?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    version?: SortOrder
    previousVersionId?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sections?: LessonSectionOrderByRelationAggregateInput
    assets?: ContentAssetOrderByRelationAggregateInput
    tags?: LessonContentTagOrderByRelationAggregateInput
    versionHistory?: LessonContentOrderByRelationAggregateInput
    previousVersion?: LessonContentOrderByWithRelationInput
  }

  export type LessonContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lessonId?: string
    AND?: LessonContentWhereInput | LessonContentWhereInput[]
    OR?: LessonContentWhereInput[]
    NOT?: LessonContentWhereInput | LessonContentWhereInput[]
    title?: StringFilter<"LessonContent"> | string
    description?: StringNullableFilter<"LessonContent"> | string | null
    status?: EnumLessonStatusFilter<"LessonContent"> | $Enums.LessonStatus
    contentType?: EnumContentTypeFilter<"LessonContent"> | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFilter<"LessonContent"> | $Enums.DifficultyLevel
    content?: JsonNullableFilter<"LessonContent">
    metadata?: JsonNullableFilter<"LessonContent">
    version?: IntFilter<"LessonContent"> | number
    previousVersionId?: StringNullableFilter<"LessonContent"> | string | null
    publishedAt?: DateTimeNullableFilter<"LessonContent"> | Date | string | null
    reviewedBy?: StringNullableFilter<"LessonContent"> | string | null
    reviewedAt?: DateTimeNullableFilter<"LessonContent"> | Date | string | null
    createdBy?: StringNullableFilter<"LessonContent"> | string | null
    updatedBy?: StringNullableFilter<"LessonContent"> | string | null
    createdAt?: DateTimeFilter<"LessonContent"> | Date | string
    updatedAt?: DateTimeFilter<"LessonContent"> | Date | string
    sections?: LessonSectionListRelationFilter
    assets?: ContentAssetListRelationFilter
    tags?: LessonContentTagListRelationFilter
    versionHistory?: LessonContentListRelationFilter
    previousVersion?: XOR<LessonContentNullableRelationFilter, LessonContentWhereInput> | null
  }, "id" | "lessonId">

  export type LessonContentOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    contentType?: SortOrder
    difficulty?: SortOrder
    content?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    version?: SortOrder
    previousVersionId?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonContentCountOrderByAggregateInput
    _avg?: LessonContentAvgOrderByAggregateInput
    _max?: LessonContentMaxOrderByAggregateInput
    _min?: LessonContentMinOrderByAggregateInput
    _sum?: LessonContentSumOrderByAggregateInput
  }

  export type LessonContentScalarWhereWithAggregatesInput = {
    AND?: LessonContentScalarWhereWithAggregatesInput | LessonContentScalarWhereWithAggregatesInput[]
    OR?: LessonContentScalarWhereWithAggregatesInput[]
    NOT?: LessonContentScalarWhereWithAggregatesInput | LessonContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonContent"> | string
    lessonId?: StringWithAggregatesFilter<"LessonContent"> | string
    title?: StringWithAggregatesFilter<"LessonContent"> | string
    description?: StringNullableWithAggregatesFilter<"LessonContent"> | string | null
    status?: EnumLessonStatusWithAggregatesFilter<"LessonContent"> | $Enums.LessonStatus
    contentType?: EnumContentTypeWithAggregatesFilter<"LessonContent"> | $Enums.ContentType
    difficulty?: EnumDifficultyLevelWithAggregatesFilter<"LessonContent"> | $Enums.DifficultyLevel
    content?: JsonNullableWithAggregatesFilter<"LessonContent">
    metadata?: JsonNullableWithAggregatesFilter<"LessonContent">
    version?: IntWithAggregatesFilter<"LessonContent"> | number
    previousVersionId?: StringNullableWithAggregatesFilter<"LessonContent"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"LessonContent"> | Date | string | null
    reviewedBy?: StringNullableWithAggregatesFilter<"LessonContent"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"LessonContent"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"LessonContent"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"LessonContent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LessonContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LessonContent"> | Date | string
  }

  export type LessonSectionWhereInput = {
    AND?: LessonSectionWhereInput | LessonSectionWhereInput[]
    OR?: LessonSectionWhereInput[]
    NOT?: LessonSectionWhereInput | LessonSectionWhereInput[]
    id?: StringFilter<"LessonSection"> | string
    lessonId?: StringFilter<"LessonSection"> | string
    title?: StringFilter<"LessonSection"> | string
    description?: StringNullableFilter<"LessonSection"> | string | null
    orderIndex?: IntFilter<"LessonSection"> | number
    content?: JsonNullableFilter<"LessonSection">
    type?: StringNullableFilter<"LessonSection"> | string | null
    createdAt?: DateTimeFilter<"LessonSection"> | Date | string
    updatedAt?: DateTimeFilter<"LessonSection"> | Date | string
    lesson?: XOR<LessonContentRelationFilter, LessonContentWhereInput>
  }

  export type LessonSectionOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lesson?: LessonContentOrderByWithRelationInput
  }

  export type LessonSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lessonId_orderIndex?: LessonSectionLessonIdOrderIndexCompoundUniqueInput
    AND?: LessonSectionWhereInput | LessonSectionWhereInput[]
    OR?: LessonSectionWhereInput[]
    NOT?: LessonSectionWhereInput | LessonSectionWhereInput[]
    lessonId?: StringFilter<"LessonSection"> | string
    title?: StringFilter<"LessonSection"> | string
    description?: StringNullableFilter<"LessonSection"> | string | null
    orderIndex?: IntFilter<"LessonSection"> | number
    content?: JsonNullableFilter<"LessonSection">
    type?: StringNullableFilter<"LessonSection"> | string | null
    createdAt?: DateTimeFilter<"LessonSection"> | Date | string
    updatedAt?: DateTimeFilter<"LessonSection"> | Date | string
    lesson?: XOR<LessonContentRelationFilter, LessonContentWhereInput>
  }, "id" | "lessonId_orderIndex">

  export type LessonSectionOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonSectionCountOrderByAggregateInput
    _avg?: LessonSectionAvgOrderByAggregateInput
    _max?: LessonSectionMaxOrderByAggregateInput
    _min?: LessonSectionMinOrderByAggregateInput
    _sum?: LessonSectionSumOrderByAggregateInput
  }

  export type LessonSectionScalarWhereWithAggregatesInput = {
    AND?: LessonSectionScalarWhereWithAggregatesInput | LessonSectionScalarWhereWithAggregatesInput[]
    OR?: LessonSectionScalarWhereWithAggregatesInput[]
    NOT?: LessonSectionScalarWhereWithAggregatesInput | LessonSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonSection"> | string
    lessonId?: StringWithAggregatesFilter<"LessonSection"> | string
    title?: StringWithAggregatesFilter<"LessonSection"> | string
    description?: StringNullableWithAggregatesFilter<"LessonSection"> | string | null
    orderIndex?: IntWithAggregatesFilter<"LessonSection"> | number
    content?: JsonNullableWithAggregatesFilter<"LessonSection">
    type?: StringNullableWithAggregatesFilter<"LessonSection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LessonSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LessonSection"> | Date | string
  }

  export type ContentAssetWhereInput = {
    AND?: ContentAssetWhereInput | ContentAssetWhereInput[]
    OR?: ContentAssetWhereInput[]
    NOT?: ContentAssetWhereInput | ContentAssetWhereInput[]
    id?: StringFilter<"ContentAsset"> | string
    lessonId?: StringFilter<"ContentAsset"> | string
    sectionId?: StringNullableFilter<"ContentAsset"> | string | null
    type?: EnumContentTypeFilter<"ContentAsset"> | $Enums.ContentType
    title?: StringFilter<"ContentAsset"> | string
    description?: StringNullableFilter<"ContentAsset"> | string | null
    s3Key?: StringFilter<"ContentAsset"> | string
    bucket?: StringFilter<"ContentAsset"> | string
    url?: StringNullableFilter<"ContentAsset"> | string | null
    fileSize?: IntNullableFilter<"ContentAsset"> | number | null
    mimeType?: StringNullableFilter<"ContentAsset"> | string | null
    duration?: IntNullableFilter<"ContentAsset"> | number | null
    width?: IntNullableFilter<"ContentAsset"> | number | null
    height?: IntNullableFilter<"ContentAsset"> | number | null
    isProcessed?: BoolFilter<"ContentAsset"> | boolean
    processedAt?: DateTimeNullableFilter<"ContentAsset"> | Date | string | null
    createdAt?: DateTimeFilter<"ContentAsset"> | Date | string
    updatedAt?: DateTimeFilter<"ContentAsset"> | Date | string
    lesson?: XOR<LessonContentRelationFilter, LessonContentWhereInput>
  }

  export type ContentAssetOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    sectionId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    s3Key?: SortOrder
    bucket?: SortOrder
    url?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    isProcessed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lesson?: LessonContentOrderByWithRelationInput
  }

  export type ContentAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentAssetWhereInput | ContentAssetWhereInput[]
    OR?: ContentAssetWhereInput[]
    NOT?: ContentAssetWhereInput | ContentAssetWhereInput[]
    lessonId?: StringFilter<"ContentAsset"> | string
    sectionId?: StringNullableFilter<"ContentAsset"> | string | null
    type?: EnumContentTypeFilter<"ContentAsset"> | $Enums.ContentType
    title?: StringFilter<"ContentAsset"> | string
    description?: StringNullableFilter<"ContentAsset"> | string | null
    s3Key?: StringFilter<"ContentAsset"> | string
    bucket?: StringFilter<"ContentAsset"> | string
    url?: StringNullableFilter<"ContentAsset"> | string | null
    fileSize?: IntNullableFilter<"ContentAsset"> | number | null
    mimeType?: StringNullableFilter<"ContentAsset"> | string | null
    duration?: IntNullableFilter<"ContentAsset"> | number | null
    width?: IntNullableFilter<"ContentAsset"> | number | null
    height?: IntNullableFilter<"ContentAsset"> | number | null
    isProcessed?: BoolFilter<"ContentAsset"> | boolean
    processedAt?: DateTimeNullableFilter<"ContentAsset"> | Date | string | null
    createdAt?: DateTimeFilter<"ContentAsset"> | Date | string
    updatedAt?: DateTimeFilter<"ContentAsset"> | Date | string
    lesson?: XOR<LessonContentRelationFilter, LessonContentWhereInput>
  }, "id">

  export type ContentAssetOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    sectionId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    s3Key?: SortOrder
    bucket?: SortOrder
    url?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    isProcessed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentAssetCountOrderByAggregateInput
    _avg?: ContentAssetAvgOrderByAggregateInput
    _max?: ContentAssetMaxOrderByAggregateInput
    _min?: ContentAssetMinOrderByAggregateInput
    _sum?: ContentAssetSumOrderByAggregateInput
  }

  export type ContentAssetScalarWhereWithAggregatesInput = {
    AND?: ContentAssetScalarWhereWithAggregatesInput | ContentAssetScalarWhereWithAggregatesInput[]
    OR?: ContentAssetScalarWhereWithAggregatesInput[]
    NOT?: ContentAssetScalarWhereWithAggregatesInput | ContentAssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentAsset"> | string
    lessonId?: StringWithAggregatesFilter<"ContentAsset"> | string
    sectionId?: StringNullableWithAggregatesFilter<"ContentAsset"> | string | null
    type?: EnumContentTypeWithAggregatesFilter<"ContentAsset"> | $Enums.ContentType
    title?: StringWithAggregatesFilter<"ContentAsset"> | string
    description?: StringNullableWithAggregatesFilter<"ContentAsset"> | string | null
    s3Key?: StringWithAggregatesFilter<"ContentAsset"> | string
    bucket?: StringWithAggregatesFilter<"ContentAsset"> | string
    url?: StringNullableWithAggregatesFilter<"ContentAsset"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"ContentAsset"> | number | null
    mimeType?: StringNullableWithAggregatesFilter<"ContentAsset"> | string | null
    duration?: IntNullableWithAggregatesFilter<"ContentAsset"> | number | null
    width?: IntNullableWithAggregatesFilter<"ContentAsset"> | number | null
    height?: IntNullableWithAggregatesFilter<"ContentAsset"> | number | null
    isProcessed?: BoolWithAggregatesFilter<"ContentAsset"> | boolean
    processedAt?: DateTimeNullableWithAggregatesFilter<"ContentAsset"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContentAsset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentAsset"> | Date | string
  }

  export type ContentTagWhereInput = {
    AND?: ContentTagWhereInput | ContentTagWhereInput[]
    OR?: ContentTagWhereInput[]
    NOT?: ContentTagWhereInput | ContentTagWhereInput[]
    id?: StringFilter<"ContentTag"> | string
    name?: StringFilter<"ContentTag"> | string
    description?: StringNullableFilter<"ContentTag"> | string | null
    color?: StringNullableFilter<"ContentTag"> | string | null
    createdAt?: DateTimeFilter<"ContentTag"> | Date | string
    updatedAt?: DateTimeFilter<"ContentTag"> | Date | string
    lessons?: LessonContentTagListRelationFilter
  }

  export type ContentTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessons?: LessonContentTagOrderByRelationAggregateInput
  }

  export type ContentTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ContentTagWhereInput | ContentTagWhereInput[]
    OR?: ContentTagWhereInput[]
    NOT?: ContentTagWhereInput | ContentTagWhereInput[]
    description?: StringNullableFilter<"ContentTag"> | string | null
    color?: StringNullableFilter<"ContentTag"> | string | null
    createdAt?: DateTimeFilter<"ContentTag"> | Date | string
    updatedAt?: DateTimeFilter<"ContentTag"> | Date | string
    lessons?: LessonContentTagListRelationFilter
  }, "id" | "name">

  export type ContentTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentTagCountOrderByAggregateInput
    _max?: ContentTagMaxOrderByAggregateInput
    _min?: ContentTagMinOrderByAggregateInput
  }

  export type ContentTagScalarWhereWithAggregatesInput = {
    AND?: ContentTagScalarWhereWithAggregatesInput | ContentTagScalarWhereWithAggregatesInput[]
    OR?: ContentTagScalarWhereWithAggregatesInput[]
    NOT?: ContentTagScalarWhereWithAggregatesInput | ContentTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentTag"> | string
    name?: StringWithAggregatesFilter<"ContentTag"> | string
    description?: StringNullableWithAggregatesFilter<"ContentTag"> | string | null
    color?: StringNullableWithAggregatesFilter<"ContentTag"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContentTag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentTag"> | Date | string
  }

  export type LessonContentTagWhereInput = {
    AND?: LessonContentTagWhereInput | LessonContentTagWhereInput[]
    OR?: LessonContentTagWhereInput[]
    NOT?: LessonContentTagWhereInput | LessonContentTagWhereInput[]
    lessonId?: StringFilter<"LessonContentTag"> | string
    tagId?: StringFilter<"LessonContentTag"> | string
    assignedAt?: DateTimeFilter<"LessonContentTag"> | Date | string
    lesson?: XOR<LessonContentRelationFilter, LessonContentWhereInput>
    tag?: XOR<ContentTagRelationFilter, ContentTagWhereInput>
  }

  export type LessonContentTagOrderByWithRelationInput = {
    lessonId?: SortOrder
    tagId?: SortOrder
    assignedAt?: SortOrder
    lesson?: LessonContentOrderByWithRelationInput
    tag?: ContentTagOrderByWithRelationInput
  }

  export type LessonContentTagWhereUniqueInput = Prisma.AtLeast<{
    lessonId_tagId?: LessonContentTagLessonIdTagIdCompoundUniqueInput
    AND?: LessonContentTagWhereInput | LessonContentTagWhereInput[]
    OR?: LessonContentTagWhereInput[]
    NOT?: LessonContentTagWhereInput | LessonContentTagWhereInput[]
    lessonId?: StringFilter<"LessonContentTag"> | string
    tagId?: StringFilter<"LessonContentTag"> | string
    assignedAt?: DateTimeFilter<"LessonContentTag"> | Date | string
    lesson?: XOR<LessonContentRelationFilter, LessonContentWhereInput>
    tag?: XOR<ContentTagRelationFilter, ContentTagWhereInput>
  }, "lessonId_tagId">

  export type LessonContentTagOrderByWithAggregationInput = {
    lessonId?: SortOrder
    tagId?: SortOrder
    assignedAt?: SortOrder
    _count?: LessonContentTagCountOrderByAggregateInput
    _max?: LessonContentTagMaxOrderByAggregateInput
    _min?: LessonContentTagMinOrderByAggregateInput
  }

  export type LessonContentTagScalarWhereWithAggregatesInput = {
    AND?: LessonContentTagScalarWhereWithAggregatesInput | LessonContentTagScalarWhereWithAggregatesInput[]
    OR?: LessonContentTagScalarWhereWithAggregatesInput[]
    NOT?: LessonContentTagScalarWhereWithAggregatesInput | LessonContentTagScalarWhereWithAggregatesInput[]
    lessonId?: StringWithAggregatesFilter<"LessonContentTag"> | string
    tagId?: StringWithAggregatesFilter<"LessonContentTag"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"LessonContentTag"> | Date | string
  }

  export type LessonContentCreateInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: LessonSectionCreateNestedManyWithoutLessonInput
    assets?: ContentAssetCreateNestedManyWithoutLessonInput
    tags?: LessonContentTagCreateNestedManyWithoutLessonInput
    versionHistory?: LessonContentCreateNestedManyWithoutPreviousVersionInput
    previousVersion?: LessonContentCreateNestedOneWithoutVersionHistoryInput
  }

  export type LessonContentUncheckedCreateInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    previousVersionId?: string | null
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: LessonSectionUncheckedCreateNestedManyWithoutLessonInput
    assets?: ContentAssetUncheckedCreateNestedManyWithoutLessonInput
    tags?: LessonContentTagUncheckedCreateNestedManyWithoutLessonInput
    versionHistory?: LessonContentUncheckedCreateNestedManyWithoutPreviousVersionInput
  }

  export type LessonContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: LessonSectionUpdateManyWithoutLessonNestedInput
    assets?: ContentAssetUpdateManyWithoutLessonNestedInput
    tags?: LessonContentTagUpdateManyWithoutLessonNestedInput
    versionHistory?: LessonContentUpdateManyWithoutPreviousVersionNestedInput
    previousVersion?: LessonContentUpdateOneWithoutVersionHistoryNestedInput
  }

  export type LessonContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    previousVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: LessonSectionUncheckedUpdateManyWithoutLessonNestedInput
    assets?: ContentAssetUncheckedUpdateManyWithoutLessonNestedInput
    tags?: LessonContentTagUncheckedUpdateManyWithoutLessonNestedInput
    versionHistory?: LessonContentUncheckedUpdateManyWithoutPreviousVersionNestedInput
  }

  export type LessonContentCreateManyInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    previousVersionId?: string | null
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    previousVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonSectionCreateInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lesson: LessonContentCreateNestedOneWithoutSectionsInput
  }

  export type LessonSectionUncheckedCreateInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    orderIndex: number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonContentUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type LessonSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonSectionCreateManyInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    orderIndex: number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentAssetCreateInput = {
    id?: string
    sectionId?: string | null
    type: $Enums.ContentType
    title: string
    description?: string | null
    s3Key: string
    bucket?: string
    url?: string | null
    fileSize?: number | null
    mimeType?: string | null
    duration?: number | null
    width?: number | null
    height?: number | null
    isProcessed?: boolean
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lesson: LessonContentCreateNestedOneWithoutAssetsInput
  }

  export type ContentAssetUncheckedCreateInput = {
    id?: string
    lessonId: string
    sectionId?: string | null
    type: $Enums.ContentType
    title: string
    description?: string | null
    s3Key: string
    bucket?: string
    url?: string | null
    fileSize?: number | null
    mimeType?: string | null
    duration?: number | null
    width?: number | null
    height?: number | null
    isProcessed?: boolean
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    s3Key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonContentUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type ContentAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    s3Key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentAssetCreateManyInput = {
    id?: string
    lessonId: string
    sectionId?: string | null
    type: $Enums.ContentType
    title: string
    description?: string | null
    s3Key: string
    bucket?: string
    url?: string | null
    fileSize?: number | null
    mimeType?: string | null
    duration?: number | null
    width?: number | null
    height?: number | null
    isProcessed?: boolean
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    s3Key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    s3Key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentTagCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonContentTagCreateNestedManyWithoutTagInput
  }

  export type ContentTagUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonContentTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type ContentTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonContentTagUpdateManyWithoutTagNestedInput
  }

  export type ContentTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonContentTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type ContentTagCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonContentTagCreateInput = {
    assignedAt?: Date | string
    lesson: LessonContentCreateNestedOneWithoutTagsInput
    tag: ContentTagCreateNestedOneWithoutLessonsInput
  }

  export type LessonContentTagUncheckedCreateInput = {
    lessonId: string
    tagId: string
    assignedAt?: Date | string
  }

  export type LessonContentTagUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonContentUpdateOneRequiredWithoutTagsNestedInput
    tag?: ContentTagUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonContentTagUncheckedUpdateInput = {
    lessonId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonContentTagCreateManyInput = {
    lessonId: string
    tagId: string
    assignedAt?: Date | string
  }

  export type LessonContentTagUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonContentTagUncheckedUpdateManyInput = {
    lessonId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumLessonStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonStatus | EnumLessonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LessonStatus[] | ListEnumLessonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonStatus[] | ListEnumLessonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonStatusFilter<$PrismaModel> | $Enums.LessonStatus
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type EnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
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

  export type LessonSectionListRelationFilter = {
    every?: LessonSectionWhereInput
    some?: LessonSectionWhereInput
    none?: LessonSectionWhereInput
  }

  export type ContentAssetListRelationFilter = {
    every?: ContentAssetWhereInput
    some?: ContentAssetWhereInput
    none?: ContentAssetWhereInput
  }

  export type LessonContentTagListRelationFilter = {
    every?: LessonContentTagWhereInput
    some?: LessonContentTagWhereInput
    none?: LessonContentTagWhereInput
  }

  export type LessonContentListRelationFilter = {
    every?: LessonContentWhereInput
    some?: LessonContentWhereInput
    none?: LessonContentWhereInput
  }

  export type LessonContentNullableRelationFilter = {
    is?: LessonContentWhereInput | null
    isNot?: LessonContentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LessonSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentAssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonContentTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonContentCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    contentType?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    metadata?: SortOrder
    version?: SortOrder
    previousVersionId?: SortOrder
    publishedAt?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonContentAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type LessonContentMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    contentType?: SortOrder
    difficulty?: SortOrder
    version?: SortOrder
    previousVersionId?: SortOrder
    publishedAt?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonContentMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    contentType?: SortOrder
    difficulty?: SortOrder
    version?: SortOrder
    previousVersionId?: SortOrder
    publishedAt?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonContentSumOrderByAggregateInput = {
    version?: SortOrder
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

  export type EnumLessonStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonStatus | EnumLessonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LessonStatus[] | ListEnumLessonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonStatus[] | ListEnumLessonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonStatusWithAggregatesFilter<$PrismaModel> | $Enums.LessonStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLessonStatusFilter<$PrismaModel>
    _max?: NestedEnumLessonStatusFilter<$PrismaModel>
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
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

  export type LessonContentRelationFilter = {
    is?: LessonContentWhereInput
    isNot?: LessonContentWhereInput
  }

  export type LessonSectionLessonIdOrderIndexCompoundUniqueInput = {
    lessonId: string
    orderIndex: number
  }

  export type LessonSectionCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonSectionAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type LessonSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonSectionMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    orderIndex?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonSectionSumOrderByAggregateInput = {
    orderIndex?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContentAssetCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    sectionId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    s3Key?: SortOrder
    bucket?: SortOrder
    url?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    duration?: SortOrder
    width?: SortOrder
    height?: SortOrder
    isProcessed?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentAssetAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    duration?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ContentAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    sectionId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    s3Key?: SortOrder
    bucket?: SortOrder
    url?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    duration?: SortOrder
    width?: SortOrder
    height?: SortOrder
    isProcessed?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentAssetMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    sectionId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    s3Key?: SortOrder
    bucket?: SortOrder
    url?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    duration?: SortOrder
    width?: SortOrder
    height?: SortOrder
    isProcessed?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentAssetSumOrderByAggregateInput = {
    fileSize?: SortOrder
    duration?: SortOrder
    width?: SortOrder
    height?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContentTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentTagRelationFilter = {
    is?: ContentTagWhereInput
    isNot?: ContentTagWhereInput
  }

  export type LessonContentTagLessonIdTagIdCompoundUniqueInput = {
    lessonId: string
    tagId: string
  }

  export type LessonContentTagCountOrderByAggregateInput = {
    lessonId?: SortOrder
    tagId?: SortOrder
    assignedAt?: SortOrder
  }

  export type LessonContentTagMaxOrderByAggregateInput = {
    lessonId?: SortOrder
    tagId?: SortOrder
    assignedAt?: SortOrder
  }

  export type LessonContentTagMinOrderByAggregateInput = {
    lessonId?: SortOrder
    tagId?: SortOrder
    assignedAt?: SortOrder
  }

  export type LessonSectionCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonSectionCreateWithoutLessonInput, LessonSectionUncheckedCreateWithoutLessonInput> | LessonSectionCreateWithoutLessonInput[] | LessonSectionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonSectionCreateOrConnectWithoutLessonInput | LessonSectionCreateOrConnectWithoutLessonInput[]
    createMany?: LessonSectionCreateManyLessonInputEnvelope
    connect?: LessonSectionWhereUniqueInput | LessonSectionWhereUniqueInput[]
  }

  export type ContentAssetCreateNestedManyWithoutLessonInput = {
    create?: XOR<ContentAssetCreateWithoutLessonInput, ContentAssetUncheckedCreateWithoutLessonInput> | ContentAssetCreateWithoutLessonInput[] | ContentAssetUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ContentAssetCreateOrConnectWithoutLessonInput | ContentAssetCreateOrConnectWithoutLessonInput[]
    createMany?: ContentAssetCreateManyLessonInputEnvelope
    connect?: ContentAssetWhereUniqueInput | ContentAssetWhereUniqueInput[]
  }

  export type LessonContentTagCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonContentTagCreateWithoutLessonInput, LessonContentTagUncheckedCreateWithoutLessonInput> | LessonContentTagCreateWithoutLessonInput[] | LessonContentTagUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonContentTagCreateOrConnectWithoutLessonInput | LessonContentTagCreateOrConnectWithoutLessonInput[]
    createMany?: LessonContentTagCreateManyLessonInputEnvelope
    connect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
  }

  export type LessonContentCreateNestedManyWithoutPreviousVersionInput = {
    create?: XOR<LessonContentCreateWithoutPreviousVersionInput, LessonContentUncheckedCreateWithoutPreviousVersionInput> | LessonContentCreateWithoutPreviousVersionInput[] | LessonContentUncheckedCreateWithoutPreviousVersionInput[]
    connectOrCreate?: LessonContentCreateOrConnectWithoutPreviousVersionInput | LessonContentCreateOrConnectWithoutPreviousVersionInput[]
    createMany?: LessonContentCreateManyPreviousVersionInputEnvelope
    connect?: LessonContentWhereUniqueInput | LessonContentWhereUniqueInput[]
  }

  export type LessonContentCreateNestedOneWithoutVersionHistoryInput = {
    create?: XOR<LessonContentCreateWithoutVersionHistoryInput, LessonContentUncheckedCreateWithoutVersionHistoryInput>
    connectOrCreate?: LessonContentCreateOrConnectWithoutVersionHistoryInput
    connect?: LessonContentWhereUniqueInput
  }

  export type LessonSectionUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonSectionCreateWithoutLessonInput, LessonSectionUncheckedCreateWithoutLessonInput> | LessonSectionCreateWithoutLessonInput[] | LessonSectionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonSectionCreateOrConnectWithoutLessonInput | LessonSectionCreateOrConnectWithoutLessonInput[]
    createMany?: LessonSectionCreateManyLessonInputEnvelope
    connect?: LessonSectionWhereUniqueInput | LessonSectionWhereUniqueInput[]
  }

  export type ContentAssetUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<ContentAssetCreateWithoutLessonInput, ContentAssetUncheckedCreateWithoutLessonInput> | ContentAssetCreateWithoutLessonInput[] | ContentAssetUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ContentAssetCreateOrConnectWithoutLessonInput | ContentAssetCreateOrConnectWithoutLessonInput[]
    createMany?: ContentAssetCreateManyLessonInputEnvelope
    connect?: ContentAssetWhereUniqueInput | ContentAssetWhereUniqueInput[]
  }

  export type LessonContentTagUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonContentTagCreateWithoutLessonInput, LessonContentTagUncheckedCreateWithoutLessonInput> | LessonContentTagCreateWithoutLessonInput[] | LessonContentTagUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonContentTagCreateOrConnectWithoutLessonInput | LessonContentTagCreateOrConnectWithoutLessonInput[]
    createMany?: LessonContentTagCreateManyLessonInputEnvelope
    connect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
  }

  export type LessonContentUncheckedCreateNestedManyWithoutPreviousVersionInput = {
    create?: XOR<LessonContentCreateWithoutPreviousVersionInput, LessonContentUncheckedCreateWithoutPreviousVersionInput> | LessonContentCreateWithoutPreviousVersionInput[] | LessonContentUncheckedCreateWithoutPreviousVersionInput[]
    connectOrCreate?: LessonContentCreateOrConnectWithoutPreviousVersionInput | LessonContentCreateOrConnectWithoutPreviousVersionInput[]
    createMany?: LessonContentCreateManyPreviousVersionInputEnvelope
    connect?: LessonContentWhereUniqueInput | LessonContentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLessonStatusFieldUpdateOperationsInput = {
    set?: $Enums.LessonStatus
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type EnumDifficultyLevelFieldUpdateOperationsInput = {
    set?: $Enums.DifficultyLevel
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
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

  export type LessonSectionUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonSectionCreateWithoutLessonInput, LessonSectionUncheckedCreateWithoutLessonInput> | LessonSectionCreateWithoutLessonInput[] | LessonSectionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonSectionCreateOrConnectWithoutLessonInput | LessonSectionCreateOrConnectWithoutLessonInput[]
    upsert?: LessonSectionUpsertWithWhereUniqueWithoutLessonInput | LessonSectionUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonSectionCreateManyLessonInputEnvelope
    set?: LessonSectionWhereUniqueInput | LessonSectionWhereUniqueInput[]
    disconnect?: LessonSectionWhereUniqueInput | LessonSectionWhereUniqueInput[]
    delete?: LessonSectionWhereUniqueInput | LessonSectionWhereUniqueInput[]
    connect?: LessonSectionWhereUniqueInput | LessonSectionWhereUniqueInput[]
    update?: LessonSectionUpdateWithWhereUniqueWithoutLessonInput | LessonSectionUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonSectionUpdateManyWithWhereWithoutLessonInput | LessonSectionUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonSectionScalarWhereInput | LessonSectionScalarWhereInput[]
  }

  export type ContentAssetUpdateManyWithoutLessonNestedInput = {
    create?: XOR<ContentAssetCreateWithoutLessonInput, ContentAssetUncheckedCreateWithoutLessonInput> | ContentAssetCreateWithoutLessonInput[] | ContentAssetUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ContentAssetCreateOrConnectWithoutLessonInput | ContentAssetCreateOrConnectWithoutLessonInput[]
    upsert?: ContentAssetUpsertWithWhereUniqueWithoutLessonInput | ContentAssetUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: ContentAssetCreateManyLessonInputEnvelope
    set?: ContentAssetWhereUniqueInput | ContentAssetWhereUniqueInput[]
    disconnect?: ContentAssetWhereUniqueInput | ContentAssetWhereUniqueInput[]
    delete?: ContentAssetWhereUniqueInput | ContentAssetWhereUniqueInput[]
    connect?: ContentAssetWhereUniqueInput | ContentAssetWhereUniqueInput[]
    update?: ContentAssetUpdateWithWhereUniqueWithoutLessonInput | ContentAssetUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: ContentAssetUpdateManyWithWhereWithoutLessonInput | ContentAssetUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: ContentAssetScalarWhereInput | ContentAssetScalarWhereInput[]
  }

  export type LessonContentTagUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonContentTagCreateWithoutLessonInput, LessonContentTagUncheckedCreateWithoutLessonInput> | LessonContentTagCreateWithoutLessonInput[] | LessonContentTagUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonContentTagCreateOrConnectWithoutLessonInput | LessonContentTagCreateOrConnectWithoutLessonInput[]
    upsert?: LessonContentTagUpsertWithWhereUniqueWithoutLessonInput | LessonContentTagUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonContentTagCreateManyLessonInputEnvelope
    set?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    disconnect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    delete?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    connect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    update?: LessonContentTagUpdateWithWhereUniqueWithoutLessonInput | LessonContentTagUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonContentTagUpdateManyWithWhereWithoutLessonInput | LessonContentTagUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonContentTagScalarWhereInput | LessonContentTagScalarWhereInput[]
  }

  export type LessonContentUpdateManyWithoutPreviousVersionNestedInput = {
    create?: XOR<LessonContentCreateWithoutPreviousVersionInput, LessonContentUncheckedCreateWithoutPreviousVersionInput> | LessonContentCreateWithoutPreviousVersionInput[] | LessonContentUncheckedCreateWithoutPreviousVersionInput[]
    connectOrCreate?: LessonContentCreateOrConnectWithoutPreviousVersionInput | LessonContentCreateOrConnectWithoutPreviousVersionInput[]
    upsert?: LessonContentUpsertWithWhereUniqueWithoutPreviousVersionInput | LessonContentUpsertWithWhereUniqueWithoutPreviousVersionInput[]
    createMany?: LessonContentCreateManyPreviousVersionInputEnvelope
    set?: LessonContentWhereUniqueInput | LessonContentWhereUniqueInput[]
    disconnect?: LessonContentWhereUniqueInput | LessonContentWhereUniqueInput[]
    delete?: LessonContentWhereUniqueInput | LessonContentWhereUniqueInput[]
    connect?: LessonContentWhereUniqueInput | LessonContentWhereUniqueInput[]
    update?: LessonContentUpdateWithWhereUniqueWithoutPreviousVersionInput | LessonContentUpdateWithWhereUniqueWithoutPreviousVersionInput[]
    updateMany?: LessonContentUpdateManyWithWhereWithoutPreviousVersionInput | LessonContentUpdateManyWithWhereWithoutPreviousVersionInput[]
    deleteMany?: LessonContentScalarWhereInput | LessonContentScalarWhereInput[]
  }

  export type LessonContentUpdateOneWithoutVersionHistoryNestedInput = {
    create?: XOR<LessonContentCreateWithoutVersionHistoryInput, LessonContentUncheckedCreateWithoutVersionHistoryInput>
    connectOrCreate?: LessonContentCreateOrConnectWithoutVersionHistoryInput
    upsert?: LessonContentUpsertWithoutVersionHistoryInput
    disconnect?: LessonContentWhereInput | boolean
    delete?: LessonContentWhereInput | boolean
    connect?: LessonContentWhereUniqueInput
    update?: XOR<XOR<LessonContentUpdateToOneWithWhereWithoutVersionHistoryInput, LessonContentUpdateWithoutVersionHistoryInput>, LessonContentUncheckedUpdateWithoutVersionHistoryInput>
  }

  export type LessonSectionUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonSectionCreateWithoutLessonInput, LessonSectionUncheckedCreateWithoutLessonInput> | LessonSectionCreateWithoutLessonInput[] | LessonSectionUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonSectionCreateOrConnectWithoutLessonInput | LessonSectionCreateOrConnectWithoutLessonInput[]
    upsert?: LessonSectionUpsertWithWhereUniqueWithoutLessonInput | LessonSectionUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonSectionCreateManyLessonInputEnvelope
    set?: LessonSectionWhereUniqueInput | LessonSectionWhereUniqueInput[]
    disconnect?: LessonSectionWhereUniqueInput | LessonSectionWhereUniqueInput[]
    delete?: LessonSectionWhereUniqueInput | LessonSectionWhereUniqueInput[]
    connect?: LessonSectionWhereUniqueInput | LessonSectionWhereUniqueInput[]
    update?: LessonSectionUpdateWithWhereUniqueWithoutLessonInput | LessonSectionUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonSectionUpdateManyWithWhereWithoutLessonInput | LessonSectionUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonSectionScalarWhereInput | LessonSectionScalarWhereInput[]
  }

  export type ContentAssetUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<ContentAssetCreateWithoutLessonInput, ContentAssetUncheckedCreateWithoutLessonInput> | ContentAssetCreateWithoutLessonInput[] | ContentAssetUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: ContentAssetCreateOrConnectWithoutLessonInput | ContentAssetCreateOrConnectWithoutLessonInput[]
    upsert?: ContentAssetUpsertWithWhereUniqueWithoutLessonInput | ContentAssetUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: ContentAssetCreateManyLessonInputEnvelope
    set?: ContentAssetWhereUniqueInput | ContentAssetWhereUniqueInput[]
    disconnect?: ContentAssetWhereUniqueInput | ContentAssetWhereUniqueInput[]
    delete?: ContentAssetWhereUniqueInput | ContentAssetWhereUniqueInput[]
    connect?: ContentAssetWhereUniqueInput | ContentAssetWhereUniqueInput[]
    update?: ContentAssetUpdateWithWhereUniqueWithoutLessonInput | ContentAssetUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: ContentAssetUpdateManyWithWhereWithoutLessonInput | ContentAssetUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: ContentAssetScalarWhereInput | ContentAssetScalarWhereInput[]
  }

  export type LessonContentTagUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonContentTagCreateWithoutLessonInput, LessonContentTagUncheckedCreateWithoutLessonInput> | LessonContentTagCreateWithoutLessonInput[] | LessonContentTagUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonContentTagCreateOrConnectWithoutLessonInput | LessonContentTagCreateOrConnectWithoutLessonInput[]
    upsert?: LessonContentTagUpsertWithWhereUniqueWithoutLessonInput | LessonContentTagUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonContentTagCreateManyLessonInputEnvelope
    set?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    disconnect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    delete?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    connect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    update?: LessonContentTagUpdateWithWhereUniqueWithoutLessonInput | LessonContentTagUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonContentTagUpdateManyWithWhereWithoutLessonInput | LessonContentTagUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonContentTagScalarWhereInput | LessonContentTagScalarWhereInput[]
  }

  export type LessonContentUncheckedUpdateManyWithoutPreviousVersionNestedInput = {
    create?: XOR<LessonContentCreateWithoutPreviousVersionInput, LessonContentUncheckedCreateWithoutPreviousVersionInput> | LessonContentCreateWithoutPreviousVersionInput[] | LessonContentUncheckedCreateWithoutPreviousVersionInput[]
    connectOrCreate?: LessonContentCreateOrConnectWithoutPreviousVersionInput | LessonContentCreateOrConnectWithoutPreviousVersionInput[]
    upsert?: LessonContentUpsertWithWhereUniqueWithoutPreviousVersionInput | LessonContentUpsertWithWhereUniqueWithoutPreviousVersionInput[]
    createMany?: LessonContentCreateManyPreviousVersionInputEnvelope
    set?: LessonContentWhereUniqueInput | LessonContentWhereUniqueInput[]
    disconnect?: LessonContentWhereUniqueInput | LessonContentWhereUniqueInput[]
    delete?: LessonContentWhereUniqueInput | LessonContentWhereUniqueInput[]
    connect?: LessonContentWhereUniqueInput | LessonContentWhereUniqueInput[]
    update?: LessonContentUpdateWithWhereUniqueWithoutPreviousVersionInput | LessonContentUpdateWithWhereUniqueWithoutPreviousVersionInput[]
    updateMany?: LessonContentUpdateManyWithWhereWithoutPreviousVersionInput | LessonContentUpdateManyWithWhereWithoutPreviousVersionInput[]
    deleteMany?: LessonContentScalarWhereInput | LessonContentScalarWhereInput[]
  }

  export type LessonContentCreateNestedOneWithoutSectionsInput = {
    create?: XOR<LessonContentCreateWithoutSectionsInput, LessonContentUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: LessonContentCreateOrConnectWithoutSectionsInput
    connect?: LessonContentWhereUniqueInput
  }

  export type LessonContentUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<LessonContentCreateWithoutSectionsInput, LessonContentUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: LessonContentCreateOrConnectWithoutSectionsInput
    upsert?: LessonContentUpsertWithoutSectionsInput
    connect?: LessonContentWhereUniqueInput
    update?: XOR<XOR<LessonContentUpdateToOneWithWhereWithoutSectionsInput, LessonContentUpdateWithoutSectionsInput>, LessonContentUncheckedUpdateWithoutSectionsInput>
  }

  export type LessonContentCreateNestedOneWithoutAssetsInput = {
    create?: XOR<LessonContentCreateWithoutAssetsInput, LessonContentUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: LessonContentCreateOrConnectWithoutAssetsInput
    connect?: LessonContentWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LessonContentUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<LessonContentCreateWithoutAssetsInput, LessonContentUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: LessonContentCreateOrConnectWithoutAssetsInput
    upsert?: LessonContentUpsertWithoutAssetsInput
    connect?: LessonContentWhereUniqueInput
    update?: XOR<XOR<LessonContentUpdateToOneWithWhereWithoutAssetsInput, LessonContentUpdateWithoutAssetsInput>, LessonContentUncheckedUpdateWithoutAssetsInput>
  }

  export type LessonContentTagCreateNestedManyWithoutTagInput = {
    create?: XOR<LessonContentTagCreateWithoutTagInput, LessonContentTagUncheckedCreateWithoutTagInput> | LessonContentTagCreateWithoutTagInput[] | LessonContentTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: LessonContentTagCreateOrConnectWithoutTagInput | LessonContentTagCreateOrConnectWithoutTagInput[]
    createMany?: LessonContentTagCreateManyTagInputEnvelope
    connect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
  }

  export type LessonContentTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<LessonContentTagCreateWithoutTagInput, LessonContentTagUncheckedCreateWithoutTagInput> | LessonContentTagCreateWithoutTagInput[] | LessonContentTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: LessonContentTagCreateOrConnectWithoutTagInput | LessonContentTagCreateOrConnectWithoutTagInput[]
    createMany?: LessonContentTagCreateManyTagInputEnvelope
    connect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
  }

  export type LessonContentTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<LessonContentTagCreateWithoutTagInput, LessonContentTagUncheckedCreateWithoutTagInput> | LessonContentTagCreateWithoutTagInput[] | LessonContentTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: LessonContentTagCreateOrConnectWithoutTagInput | LessonContentTagCreateOrConnectWithoutTagInput[]
    upsert?: LessonContentTagUpsertWithWhereUniqueWithoutTagInput | LessonContentTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: LessonContentTagCreateManyTagInputEnvelope
    set?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    disconnect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    delete?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    connect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    update?: LessonContentTagUpdateWithWhereUniqueWithoutTagInput | LessonContentTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: LessonContentTagUpdateManyWithWhereWithoutTagInput | LessonContentTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: LessonContentTagScalarWhereInput | LessonContentTagScalarWhereInput[]
  }

  export type LessonContentTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<LessonContentTagCreateWithoutTagInput, LessonContentTagUncheckedCreateWithoutTagInput> | LessonContentTagCreateWithoutTagInput[] | LessonContentTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: LessonContentTagCreateOrConnectWithoutTagInput | LessonContentTagCreateOrConnectWithoutTagInput[]
    upsert?: LessonContentTagUpsertWithWhereUniqueWithoutTagInput | LessonContentTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: LessonContentTagCreateManyTagInputEnvelope
    set?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    disconnect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    delete?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    connect?: LessonContentTagWhereUniqueInput | LessonContentTagWhereUniqueInput[]
    update?: LessonContentTagUpdateWithWhereUniqueWithoutTagInput | LessonContentTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: LessonContentTagUpdateManyWithWhereWithoutTagInput | LessonContentTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: LessonContentTagScalarWhereInput | LessonContentTagScalarWhereInput[]
  }

  export type LessonContentCreateNestedOneWithoutTagsInput = {
    create?: XOR<LessonContentCreateWithoutTagsInput, LessonContentUncheckedCreateWithoutTagsInput>
    connectOrCreate?: LessonContentCreateOrConnectWithoutTagsInput
    connect?: LessonContentWhereUniqueInput
  }

  export type ContentTagCreateNestedOneWithoutLessonsInput = {
    create?: XOR<ContentTagCreateWithoutLessonsInput, ContentTagUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ContentTagCreateOrConnectWithoutLessonsInput
    connect?: ContentTagWhereUniqueInput
  }

  export type LessonContentUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<LessonContentCreateWithoutTagsInput, LessonContentUncheckedCreateWithoutTagsInput>
    connectOrCreate?: LessonContentCreateOrConnectWithoutTagsInput
    upsert?: LessonContentUpsertWithoutTagsInput
    connect?: LessonContentWhereUniqueInput
    update?: XOR<XOR<LessonContentUpdateToOneWithWhereWithoutTagsInput, LessonContentUpdateWithoutTagsInput>, LessonContentUncheckedUpdateWithoutTagsInput>
  }

  export type ContentTagUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<ContentTagCreateWithoutLessonsInput, ContentTagUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ContentTagCreateOrConnectWithoutLessonsInput
    upsert?: ContentTagUpsertWithoutLessonsInput
    connect?: ContentTagWhereUniqueInput
    update?: XOR<XOR<ContentTagUpdateToOneWithWhereWithoutLessonsInput, ContentTagUpdateWithoutLessonsInput>, ContentTagUncheckedUpdateWithoutLessonsInput>
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

  export type NestedEnumLessonStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonStatus | EnumLessonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LessonStatus[] | ListEnumLessonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonStatus[] | ListEnumLessonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonStatusFilter<$PrismaModel> | $Enums.LessonStatus
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedEnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
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

  export type NestedEnumLessonStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonStatus | EnumLessonStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LessonStatus[] | ListEnumLessonStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonStatus[] | ListEnumLessonStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonStatusWithAggregatesFilter<$PrismaModel> | $Enums.LessonStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLessonStatusFilter<$PrismaModel>
    _max?: NestedEnumLessonStatusFilter<$PrismaModel>
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LessonSectionCreateWithoutLessonInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonSectionUncheckedCreateWithoutLessonInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonSectionCreateOrConnectWithoutLessonInput = {
    where: LessonSectionWhereUniqueInput
    create: XOR<LessonSectionCreateWithoutLessonInput, LessonSectionUncheckedCreateWithoutLessonInput>
  }

  export type LessonSectionCreateManyLessonInputEnvelope = {
    data: LessonSectionCreateManyLessonInput | LessonSectionCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type ContentAssetCreateWithoutLessonInput = {
    id?: string
    sectionId?: string | null
    type: $Enums.ContentType
    title: string
    description?: string | null
    s3Key: string
    bucket?: string
    url?: string | null
    fileSize?: number | null
    mimeType?: string | null
    duration?: number | null
    width?: number | null
    height?: number | null
    isProcessed?: boolean
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentAssetUncheckedCreateWithoutLessonInput = {
    id?: string
    sectionId?: string | null
    type: $Enums.ContentType
    title: string
    description?: string | null
    s3Key: string
    bucket?: string
    url?: string | null
    fileSize?: number | null
    mimeType?: string | null
    duration?: number | null
    width?: number | null
    height?: number | null
    isProcessed?: boolean
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentAssetCreateOrConnectWithoutLessonInput = {
    where: ContentAssetWhereUniqueInput
    create: XOR<ContentAssetCreateWithoutLessonInput, ContentAssetUncheckedCreateWithoutLessonInput>
  }

  export type ContentAssetCreateManyLessonInputEnvelope = {
    data: ContentAssetCreateManyLessonInput | ContentAssetCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type LessonContentTagCreateWithoutLessonInput = {
    assignedAt?: Date | string
    tag: ContentTagCreateNestedOneWithoutLessonsInput
  }

  export type LessonContentTagUncheckedCreateWithoutLessonInput = {
    tagId: string
    assignedAt?: Date | string
  }

  export type LessonContentTagCreateOrConnectWithoutLessonInput = {
    where: LessonContentTagWhereUniqueInput
    create: XOR<LessonContentTagCreateWithoutLessonInput, LessonContentTagUncheckedCreateWithoutLessonInput>
  }

  export type LessonContentTagCreateManyLessonInputEnvelope = {
    data: LessonContentTagCreateManyLessonInput | LessonContentTagCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type LessonContentCreateWithoutPreviousVersionInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: LessonSectionCreateNestedManyWithoutLessonInput
    assets?: ContentAssetCreateNestedManyWithoutLessonInput
    tags?: LessonContentTagCreateNestedManyWithoutLessonInput
    versionHistory?: LessonContentCreateNestedManyWithoutPreviousVersionInput
  }

  export type LessonContentUncheckedCreateWithoutPreviousVersionInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: LessonSectionUncheckedCreateNestedManyWithoutLessonInput
    assets?: ContentAssetUncheckedCreateNestedManyWithoutLessonInput
    tags?: LessonContentTagUncheckedCreateNestedManyWithoutLessonInput
    versionHistory?: LessonContentUncheckedCreateNestedManyWithoutPreviousVersionInput
  }

  export type LessonContentCreateOrConnectWithoutPreviousVersionInput = {
    where: LessonContentWhereUniqueInput
    create: XOR<LessonContentCreateWithoutPreviousVersionInput, LessonContentUncheckedCreateWithoutPreviousVersionInput>
  }

  export type LessonContentCreateManyPreviousVersionInputEnvelope = {
    data: LessonContentCreateManyPreviousVersionInput | LessonContentCreateManyPreviousVersionInput[]
    skipDuplicates?: boolean
  }

  export type LessonContentCreateWithoutVersionHistoryInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: LessonSectionCreateNestedManyWithoutLessonInput
    assets?: ContentAssetCreateNestedManyWithoutLessonInput
    tags?: LessonContentTagCreateNestedManyWithoutLessonInput
    previousVersion?: LessonContentCreateNestedOneWithoutVersionHistoryInput
  }

  export type LessonContentUncheckedCreateWithoutVersionHistoryInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    previousVersionId?: string | null
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: LessonSectionUncheckedCreateNestedManyWithoutLessonInput
    assets?: ContentAssetUncheckedCreateNestedManyWithoutLessonInput
    tags?: LessonContentTagUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonContentCreateOrConnectWithoutVersionHistoryInput = {
    where: LessonContentWhereUniqueInput
    create: XOR<LessonContentCreateWithoutVersionHistoryInput, LessonContentUncheckedCreateWithoutVersionHistoryInput>
  }

  export type LessonSectionUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonSectionWhereUniqueInput
    update: XOR<LessonSectionUpdateWithoutLessonInput, LessonSectionUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonSectionCreateWithoutLessonInput, LessonSectionUncheckedCreateWithoutLessonInput>
  }

  export type LessonSectionUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonSectionWhereUniqueInput
    data: XOR<LessonSectionUpdateWithoutLessonInput, LessonSectionUncheckedUpdateWithoutLessonInput>
  }

  export type LessonSectionUpdateManyWithWhereWithoutLessonInput = {
    where: LessonSectionScalarWhereInput
    data: XOR<LessonSectionUpdateManyMutationInput, LessonSectionUncheckedUpdateManyWithoutLessonInput>
  }

  export type LessonSectionScalarWhereInput = {
    AND?: LessonSectionScalarWhereInput | LessonSectionScalarWhereInput[]
    OR?: LessonSectionScalarWhereInput[]
    NOT?: LessonSectionScalarWhereInput | LessonSectionScalarWhereInput[]
    id?: StringFilter<"LessonSection"> | string
    lessonId?: StringFilter<"LessonSection"> | string
    title?: StringFilter<"LessonSection"> | string
    description?: StringNullableFilter<"LessonSection"> | string | null
    orderIndex?: IntFilter<"LessonSection"> | number
    content?: JsonNullableFilter<"LessonSection">
    type?: StringNullableFilter<"LessonSection"> | string | null
    createdAt?: DateTimeFilter<"LessonSection"> | Date | string
    updatedAt?: DateTimeFilter<"LessonSection"> | Date | string
  }

  export type ContentAssetUpsertWithWhereUniqueWithoutLessonInput = {
    where: ContentAssetWhereUniqueInput
    update: XOR<ContentAssetUpdateWithoutLessonInput, ContentAssetUncheckedUpdateWithoutLessonInput>
    create: XOR<ContentAssetCreateWithoutLessonInput, ContentAssetUncheckedCreateWithoutLessonInput>
  }

  export type ContentAssetUpdateWithWhereUniqueWithoutLessonInput = {
    where: ContentAssetWhereUniqueInput
    data: XOR<ContentAssetUpdateWithoutLessonInput, ContentAssetUncheckedUpdateWithoutLessonInput>
  }

  export type ContentAssetUpdateManyWithWhereWithoutLessonInput = {
    where: ContentAssetScalarWhereInput
    data: XOR<ContentAssetUpdateManyMutationInput, ContentAssetUncheckedUpdateManyWithoutLessonInput>
  }

  export type ContentAssetScalarWhereInput = {
    AND?: ContentAssetScalarWhereInput | ContentAssetScalarWhereInput[]
    OR?: ContentAssetScalarWhereInput[]
    NOT?: ContentAssetScalarWhereInput | ContentAssetScalarWhereInput[]
    id?: StringFilter<"ContentAsset"> | string
    lessonId?: StringFilter<"ContentAsset"> | string
    sectionId?: StringNullableFilter<"ContentAsset"> | string | null
    type?: EnumContentTypeFilter<"ContentAsset"> | $Enums.ContentType
    title?: StringFilter<"ContentAsset"> | string
    description?: StringNullableFilter<"ContentAsset"> | string | null
    s3Key?: StringFilter<"ContentAsset"> | string
    bucket?: StringFilter<"ContentAsset"> | string
    url?: StringNullableFilter<"ContentAsset"> | string | null
    fileSize?: IntNullableFilter<"ContentAsset"> | number | null
    mimeType?: StringNullableFilter<"ContentAsset"> | string | null
    duration?: IntNullableFilter<"ContentAsset"> | number | null
    width?: IntNullableFilter<"ContentAsset"> | number | null
    height?: IntNullableFilter<"ContentAsset"> | number | null
    isProcessed?: BoolFilter<"ContentAsset"> | boolean
    processedAt?: DateTimeNullableFilter<"ContentAsset"> | Date | string | null
    createdAt?: DateTimeFilter<"ContentAsset"> | Date | string
    updatedAt?: DateTimeFilter<"ContentAsset"> | Date | string
  }

  export type LessonContentTagUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonContentTagWhereUniqueInput
    update: XOR<LessonContentTagUpdateWithoutLessonInput, LessonContentTagUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonContentTagCreateWithoutLessonInput, LessonContentTagUncheckedCreateWithoutLessonInput>
  }

  export type LessonContentTagUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonContentTagWhereUniqueInput
    data: XOR<LessonContentTagUpdateWithoutLessonInput, LessonContentTagUncheckedUpdateWithoutLessonInput>
  }

  export type LessonContentTagUpdateManyWithWhereWithoutLessonInput = {
    where: LessonContentTagScalarWhereInput
    data: XOR<LessonContentTagUpdateManyMutationInput, LessonContentTagUncheckedUpdateManyWithoutLessonInput>
  }

  export type LessonContentTagScalarWhereInput = {
    AND?: LessonContentTagScalarWhereInput | LessonContentTagScalarWhereInput[]
    OR?: LessonContentTagScalarWhereInput[]
    NOT?: LessonContentTagScalarWhereInput | LessonContentTagScalarWhereInput[]
    lessonId?: StringFilter<"LessonContentTag"> | string
    tagId?: StringFilter<"LessonContentTag"> | string
    assignedAt?: DateTimeFilter<"LessonContentTag"> | Date | string
  }

  export type LessonContentUpsertWithWhereUniqueWithoutPreviousVersionInput = {
    where: LessonContentWhereUniqueInput
    update: XOR<LessonContentUpdateWithoutPreviousVersionInput, LessonContentUncheckedUpdateWithoutPreviousVersionInput>
    create: XOR<LessonContentCreateWithoutPreviousVersionInput, LessonContentUncheckedCreateWithoutPreviousVersionInput>
  }

  export type LessonContentUpdateWithWhereUniqueWithoutPreviousVersionInput = {
    where: LessonContentWhereUniqueInput
    data: XOR<LessonContentUpdateWithoutPreviousVersionInput, LessonContentUncheckedUpdateWithoutPreviousVersionInput>
  }

  export type LessonContentUpdateManyWithWhereWithoutPreviousVersionInput = {
    where: LessonContentScalarWhereInput
    data: XOR<LessonContentUpdateManyMutationInput, LessonContentUncheckedUpdateManyWithoutPreviousVersionInput>
  }

  export type LessonContentScalarWhereInput = {
    AND?: LessonContentScalarWhereInput | LessonContentScalarWhereInput[]
    OR?: LessonContentScalarWhereInput[]
    NOT?: LessonContentScalarWhereInput | LessonContentScalarWhereInput[]
    id?: StringFilter<"LessonContent"> | string
    lessonId?: StringFilter<"LessonContent"> | string
    title?: StringFilter<"LessonContent"> | string
    description?: StringNullableFilter<"LessonContent"> | string | null
    status?: EnumLessonStatusFilter<"LessonContent"> | $Enums.LessonStatus
    contentType?: EnumContentTypeFilter<"LessonContent"> | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFilter<"LessonContent"> | $Enums.DifficultyLevel
    content?: JsonNullableFilter<"LessonContent">
    metadata?: JsonNullableFilter<"LessonContent">
    version?: IntFilter<"LessonContent"> | number
    previousVersionId?: StringNullableFilter<"LessonContent"> | string | null
    publishedAt?: DateTimeNullableFilter<"LessonContent"> | Date | string | null
    reviewedBy?: StringNullableFilter<"LessonContent"> | string | null
    reviewedAt?: DateTimeNullableFilter<"LessonContent"> | Date | string | null
    createdBy?: StringNullableFilter<"LessonContent"> | string | null
    updatedBy?: StringNullableFilter<"LessonContent"> | string | null
    createdAt?: DateTimeFilter<"LessonContent"> | Date | string
    updatedAt?: DateTimeFilter<"LessonContent"> | Date | string
  }

  export type LessonContentUpsertWithoutVersionHistoryInput = {
    update: XOR<LessonContentUpdateWithoutVersionHistoryInput, LessonContentUncheckedUpdateWithoutVersionHistoryInput>
    create: XOR<LessonContentCreateWithoutVersionHistoryInput, LessonContentUncheckedCreateWithoutVersionHistoryInput>
    where?: LessonContentWhereInput
  }

  export type LessonContentUpdateToOneWithWhereWithoutVersionHistoryInput = {
    where?: LessonContentWhereInput
    data: XOR<LessonContentUpdateWithoutVersionHistoryInput, LessonContentUncheckedUpdateWithoutVersionHistoryInput>
  }

  export type LessonContentUpdateWithoutVersionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: LessonSectionUpdateManyWithoutLessonNestedInput
    assets?: ContentAssetUpdateManyWithoutLessonNestedInput
    tags?: LessonContentTagUpdateManyWithoutLessonNestedInput
    previousVersion?: LessonContentUpdateOneWithoutVersionHistoryNestedInput
  }

  export type LessonContentUncheckedUpdateWithoutVersionHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    previousVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: LessonSectionUncheckedUpdateManyWithoutLessonNestedInput
    assets?: ContentAssetUncheckedUpdateManyWithoutLessonNestedInput
    tags?: LessonContentTagUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonContentCreateWithoutSectionsInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ContentAssetCreateNestedManyWithoutLessonInput
    tags?: LessonContentTagCreateNestedManyWithoutLessonInput
    versionHistory?: LessonContentCreateNestedManyWithoutPreviousVersionInput
    previousVersion?: LessonContentCreateNestedOneWithoutVersionHistoryInput
  }

  export type LessonContentUncheckedCreateWithoutSectionsInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    previousVersionId?: string | null
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ContentAssetUncheckedCreateNestedManyWithoutLessonInput
    tags?: LessonContentTagUncheckedCreateNestedManyWithoutLessonInput
    versionHistory?: LessonContentUncheckedCreateNestedManyWithoutPreviousVersionInput
  }

  export type LessonContentCreateOrConnectWithoutSectionsInput = {
    where: LessonContentWhereUniqueInput
    create: XOR<LessonContentCreateWithoutSectionsInput, LessonContentUncheckedCreateWithoutSectionsInput>
  }

  export type LessonContentUpsertWithoutSectionsInput = {
    update: XOR<LessonContentUpdateWithoutSectionsInput, LessonContentUncheckedUpdateWithoutSectionsInput>
    create: XOR<LessonContentCreateWithoutSectionsInput, LessonContentUncheckedCreateWithoutSectionsInput>
    where?: LessonContentWhereInput
  }

  export type LessonContentUpdateToOneWithWhereWithoutSectionsInput = {
    where?: LessonContentWhereInput
    data: XOR<LessonContentUpdateWithoutSectionsInput, LessonContentUncheckedUpdateWithoutSectionsInput>
  }

  export type LessonContentUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ContentAssetUpdateManyWithoutLessonNestedInput
    tags?: LessonContentTagUpdateManyWithoutLessonNestedInput
    versionHistory?: LessonContentUpdateManyWithoutPreviousVersionNestedInput
    previousVersion?: LessonContentUpdateOneWithoutVersionHistoryNestedInput
  }

  export type LessonContentUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    previousVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ContentAssetUncheckedUpdateManyWithoutLessonNestedInput
    tags?: LessonContentTagUncheckedUpdateManyWithoutLessonNestedInput
    versionHistory?: LessonContentUncheckedUpdateManyWithoutPreviousVersionNestedInput
  }

  export type LessonContentCreateWithoutAssetsInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: LessonSectionCreateNestedManyWithoutLessonInput
    tags?: LessonContentTagCreateNestedManyWithoutLessonInput
    versionHistory?: LessonContentCreateNestedManyWithoutPreviousVersionInput
    previousVersion?: LessonContentCreateNestedOneWithoutVersionHistoryInput
  }

  export type LessonContentUncheckedCreateWithoutAssetsInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    previousVersionId?: string | null
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: LessonSectionUncheckedCreateNestedManyWithoutLessonInput
    tags?: LessonContentTagUncheckedCreateNestedManyWithoutLessonInput
    versionHistory?: LessonContentUncheckedCreateNestedManyWithoutPreviousVersionInput
  }

  export type LessonContentCreateOrConnectWithoutAssetsInput = {
    where: LessonContentWhereUniqueInput
    create: XOR<LessonContentCreateWithoutAssetsInput, LessonContentUncheckedCreateWithoutAssetsInput>
  }

  export type LessonContentUpsertWithoutAssetsInput = {
    update: XOR<LessonContentUpdateWithoutAssetsInput, LessonContentUncheckedUpdateWithoutAssetsInput>
    create: XOR<LessonContentCreateWithoutAssetsInput, LessonContentUncheckedCreateWithoutAssetsInput>
    where?: LessonContentWhereInput
  }

  export type LessonContentUpdateToOneWithWhereWithoutAssetsInput = {
    where?: LessonContentWhereInput
    data: XOR<LessonContentUpdateWithoutAssetsInput, LessonContentUncheckedUpdateWithoutAssetsInput>
  }

  export type LessonContentUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: LessonSectionUpdateManyWithoutLessonNestedInput
    tags?: LessonContentTagUpdateManyWithoutLessonNestedInput
    versionHistory?: LessonContentUpdateManyWithoutPreviousVersionNestedInput
    previousVersion?: LessonContentUpdateOneWithoutVersionHistoryNestedInput
  }

  export type LessonContentUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    previousVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: LessonSectionUncheckedUpdateManyWithoutLessonNestedInput
    tags?: LessonContentTagUncheckedUpdateManyWithoutLessonNestedInput
    versionHistory?: LessonContentUncheckedUpdateManyWithoutPreviousVersionNestedInput
  }

  export type LessonContentTagCreateWithoutTagInput = {
    assignedAt?: Date | string
    lesson: LessonContentCreateNestedOneWithoutTagsInput
  }

  export type LessonContentTagUncheckedCreateWithoutTagInput = {
    lessonId: string
    assignedAt?: Date | string
  }

  export type LessonContentTagCreateOrConnectWithoutTagInput = {
    where: LessonContentTagWhereUniqueInput
    create: XOR<LessonContentTagCreateWithoutTagInput, LessonContentTagUncheckedCreateWithoutTagInput>
  }

  export type LessonContentTagCreateManyTagInputEnvelope = {
    data: LessonContentTagCreateManyTagInput | LessonContentTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type LessonContentTagUpsertWithWhereUniqueWithoutTagInput = {
    where: LessonContentTagWhereUniqueInput
    update: XOR<LessonContentTagUpdateWithoutTagInput, LessonContentTagUncheckedUpdateWithoutTagInput>
    create: XOR<LessonContentTagCreateWithoutTagInput, LessonContentTagUncheckedCreateWithoutTagInput>
  }

  export type LessonContentTagUpdateWithWhereUniqueWithoutTagInput = {
    where: LessonContentTagWhereUniqueInput
    data: XOR<LessonContentTagUpdateWithoutTagInput, LessonContentTagUncheckedUpdateWithoutTagInput>
  }

  export type LessonContentTagUpdateManyWithWhereWithoutTagInput = {
    where: LessonContentTagScalarWhereInput
    data: XOR<LessonContentTagUpdateManyMutationInput, LessonContentTagUncheckedUpdateManyWithoutTagInput>
  }

  export type LessonContentCreateWithoutTagsInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: LessonSectionCreateNestedManyWithoutLessonInput
    assets?: ContentAssetCreateNestedManyWithoutLessonInput
    versionHistory?: LessonContentCreateNestedManyWithoutPreviousVersionInput
    previousVersion?: LessonContentCreateNestedOneWithoutVersionHistoryInput
  }

  export type LessonContentUncheckedCreateWithoutTagsInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    previousVersionId?: string | null
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: LessonSectionUncheckedCreateNestedManyWithoutLessonInput
    assets?: ContentAssetUncheckedCreateNestedManyWithoutLessonInput
    versionHistory?: LessonContentUncheckedCreateNestedManyWithoutPreviousVersionInput
  }

  export type LessonContentCreateOrConnectWithoutTagsInput = {
    where: LessonContentWhereUniqueInput
    create: XOR<LessonContentCreateWithoutTagsInput, LessonContentUncheckedCreateWithoutTagsInput>
  }

  export type ContentTagCreateWithoutLessonsInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentTagUncheckedCreateWithoutLessonsInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentTagCreateOrConnectWithoutLessonsInput = {
    where: ContentTagWhereUniqueInput
    create: XOR<ContentTagCreateWithoutLessonsInput, ContentTagUncheckedCreateWithoutLessonsInput>
  }

  export type LessonContentUpsertWithoutTagsInput = {
    update: XOR<LessonContentUpdateWithoutTagsInput, LessonContentUncheckedUpdateWithoutTagsInput>
    create: XOR<LessonContentCreateWithoutTagsInput, LessonContentUncheckedCreateWithoutTagsInput>
    where?: LessonContentWhereInput
  }

  export type LessonContentUpdateToOneWithWhereWithoutTagsInput = {
    where?: LessonContentWhereInput
    data: XOR<LessonContentUpdateWithoutTagsInput, LessonContentUncheckedUpdateWithoutTagsInput>
  }

  export type LessonContentUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: LessonSectionUpdateManyWithoutLessonNestedInput
    assets?: ContentAssetUpdateManyWithoutLessonNestedInput
    versionHistory?: LessonContentUpdateManyWithoutPreviousVersionNestedInput
    previousVersion?: LessonContentUpdateOneWithoutVersionHistoryNestedInput
  }

  export type LessonContentUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    previousVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: LessonSectionUncheckedUpdateManyWithoutLessonNestedInput
    assets?: ContentAssetUncheckedUpdateManyWithoutLessonNestedInput
    versionHistory?: LessonContentUncheckedUpdateManyWithoutPreviousVersionNestedInput
  }

  export type ContentTagUpsertWithoutLessonsInput = {
    update: XOR<ContentTagUpdateWithoutLessonsInput, ContentTagUncheckedUpdateWithoutLessonsInput>
    create: XOR<ContentTagCreateWithoutLessonsInput, ContentTagUncheckedCreateWithoutLessonsInput>
    where?: ContentTagWhereInput
  }

  export type ContentTagUpdateToOneWithWhereWithoutLessonsInput = {
    where?: ContentTagWhereInput
    data: XOR<ContentTagUpdateWithoutLessonsInput, ContentTagUncheckedUpdateWithoutLessonsInput>
  }

  export type ContentTagUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentTagUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonSectionCreateManyLessonInput = {
    id?: string
    title: string
    description?: string | null
    orderIndex: number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentAssetCreateManyLessonInput = {
    id?: string
    sectionId?: string | null
    type: $Enums.ContentType
    title: string
    description?: string | null
    s3Key: string
    bucket?: string
    url?: string | null
    fileSize?: number | null
    mimeType?: string | null
    duration?: number | null
    width?: number | null
    height?: number | null
    isProcessed?: boolean
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonContentTagCreateManyLessonInput = {
    tagId: string
    assignedAt?: Date | string
  }

  export type LessonContentCreateManyPreviousVersionInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    status?: $Enums.LessonStatus
    contentType?: $Enums.ContentType
    difficulty?: $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: number
    publishedAt?: Date | string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonSectionUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonSectionUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonSectionUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentAssetUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    s3Key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentAssetUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    s3Key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentAssetUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    s3Key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    isProcessed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonContentTagUpdateWithoutLessonInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: ContentTagUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonContentTagUncheckedUpdateWithoutLessonInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonContentTagUncheckedUpdateManyWithoutLessonInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonContentUpdateWithoutPreviousVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: LessonSectionUpdateManyWithoutLessonNestedInput
    assets?: ContentAssetUpdateManyWithoutLessonNestedInput
    tags?: LessonContentTagUpdateManyWithoutLessonNestedInput
    versionHistory?: LessonContentUpdateManyWithoutPreviousVersionNestedInput
  }

  export type LessonContentUncheckedUpdateWithoutPreviousVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: LessonSectionUncheckedUpdateManyWithoutLessonNestedInput
    assets?: ContentAssetUncheckedUpdateManyWithoutLessonNestedInput
    tags?: LessonContentTagUncheckedUpdateManyWithoutLessonNestedInput
    versionHistory?: LessonContentUncheckedUpdateManyWithoutPreviousVersionNestedInput
  }

  export type LessonContentUncheckedUpdateManyWithoutPreviousVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLessonStatusFieldUpdateOperationsInput | $Enums.LessonStatus
    contentType?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    content?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: IntFieldUpdateOperationsInput | number
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonContentTagCreateManyTagInput = {
    lessonId: string
    assignedAt?: Date | string
  }

  export type LessonContentTagUpdateWithoutTagInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonContentUpdateOneRequiredWithoutTagsNestedInput
  }

  export type LessonContentTagUncheckedUpdateWithoutTagInput = {
    lessonId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonContentTagUncheckedUpdateManyWithoutTagInput = {
    lessonId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LessonContentCountOutputTypeDefaultArgs instead
     */
    export type LessonContentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonContentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContentTagCountOutputTypeDefaultArgs instead
     */
    export type ContentTagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContentTagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LessonContentDefaultArgs instead
     */
    export type LessonContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LessonSectionDefaultArgs instead
     */
    export type LessonSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContentAssetDefaultArgs instead
     */
    export type ContentAssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContentAssetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContentTagDefaultArgs instead
     */
    export type ContentTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContentTagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LessonContentTagDefaultArgs instead
     */
    export type LessonContentTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LessonContentTagDefaultArgs<ExtArgs>

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