
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
 * Model VocabularyWord
 * 
 */
export type VocabularyWord = $Result.DefaultSelection<Prisma.$VocabularyWordPayload>
/**
 * Model VocabularyMeaning
 * 
 */
export type VocabularyMeaning = $Result.DefaultSelection<Prisma.$VocabularyMeaningPayload>
/**
 * Model UserVocabulary
 * 
 */
export type UserVocabulary = $Result.DefaultSelection<Prisma.$UserVocabularyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WordDifficulty: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
  EXPERT: 'EXPERT'
};

export type WordDifficulty = (typeof WordDifficulty)[keyof typeof WordDifficulty]


export const WordStatus: {
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED',
  PENDING: 'PENDING'
};

export type WordStatus = (typeof WordStatus)[keyof typeof WordStatus]


export const PartOfSpeech: {
  NOUN: 'NOUN',
  VERB: 'VERB',
  ADJECTIVE: 'ADJECTIVE',
  ADVERB: 'ADVERB',
  PRONOUN: 'PRONOUN',
  PREPOSITION: 'PREPOSITION',
  CONJUNCTION: 'CONJUNCTION',
  INTERJECTION: 'INTERJECTION'
};

export type PartOfSpeech = (typeof PartOfSpeech)[keyof typeof PartOfSpeech]


export const UserWordStatus: {
  NOT_STARTED: 'NOT_STARTED',
  LEARNING: 'LEARNING',
  REVIEWING: 'REVIEWING',
  LEARNED: 'LEARNED'
};

export type UserWordStatus = (typeof UserWordStatus)[keyof typeof UserWordStatus]

}

export type WordDifficulty = $Enums.WordDifficulty

export const WordDifficulty: typeof $Enums.WordDifficulty

export type WordStatus = $Enums.WordStatus

export const WordStatus: typeof $Enums.WordStatus

export type PartOfSpeech = $Enums.PartOfSpeech

export const PartOfSpeech: typeof $Enums.PartOfSpeech

export type UserWordStatus = $Enums.UserWordStatus

export const UserWordStatus: typeof $Enums.UserWordStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more VocabularyWords
 * const vocabularyWords = await prisma.vocabularyWord.findMany()
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
   * // Fetch zero or more VocabularyWords
   * const vocabularyWords = await prisma.vocabularyWord.findMany()
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
   * `prisma.vocabularyWord`: Exposes CRUD operations for the **VocabularyWord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VocabularyWords
    * const vocabularyWords = await prisma.vocabularyWord.findMany()
    * ```
    */
  get vocabularyWord(): Prisma.VocabularyWordDelegate<ExtArgs>;

  /**
   * `prisma.vocabularyMeaning`: Exposes CRUD operations for the **VocabularyMeaning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VocabularyMeanings
    * const vocabularyMeanings = await prisma.vocabularyMeaning.findMany()
    * ```
    */
  get vocabularyMeaning(): Prisma.VocabularyMeaningDelegate<ExtArgs>;

  /**
   * `prisma.userVocabulary`: Exposes CRUD operations for the **UserVocabulary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVocabularies
    * const userVocabularies = await prisma.userVocabulary.findMany()
    * ```
    */
  get userVocabulary(): Prisma.UserVocabularyDelegate<ExtArgs>;
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
    VocabularyWord: 'VocabularyWord',
    VocabularyMeaning: 'VocabularyMeaning',
    UserVocabulary: 'UserVocabulary'
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
      modelProps: "vocabularyWord" | "vocabularyMeaning" | "userVocabulary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      VocabularyWord: {
        payload: Prisma.$VocabularyWordPayload<ExtArgs>
        fields: Prisma.VocabularyWordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VocabularyWordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyWordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VocabularyWordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyWordPayload>
          }
          findFirst: {
            args: Prisma.VocabularyWordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyWordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VocabularyWordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyWordPayload>
          }
          findMany: {
            args: Prisma.VocabularyWordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyWordPayload>[]
          }
          create: {
            args: Prisma.VocabularyWordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyWordPayload>
          }
          createMany: {
            args: Prisma.VocabularyWordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VocabularyWordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyWordPayload>[]
          }
          delete: {
            args: Prisma.VocabularyWordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyWordPayload>
          }
          update: {
            args: Prisma.VocabularyWordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyWordPayload>
          }
          deleteMany: {
            args: Prisma.VocabularyWordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VocabularyWordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VocabularyWordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyWordPayload>
          }
          aggregate: {
            args: Prisma.VocabularyWordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocabularyWord>
          }
          groupBy: {
            args: Prisma.VocabularyWordGroupByArgs<ExtArgs>
            result: $Utils.Optional<VocabularyWordGroupByOutputType>[]
          }
          count: {
            args: Prisma.VocabularyWordCountArgs<ExtArgs>
            result: $Utils.Optional<VocabularyWordCountAggregateOutputType> | number
          }
        }
      }
      VocabularyMeaning: {
        payload: Prisma.$VocabularyMeaningPayload<ExtArgs>
        fields: Prisma.VocabularyMeaningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VocabularyMeaningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyMeaningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VocabularyMeaningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyMeaningPayload>
          }
          findFirst: {
            args: Prisma.VocabularyMeaningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyMeaningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VocabularyMeaningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyMeaningPayload>
          }
          findMany: {
            args: Prisma.VocabularyMeaningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyMeaningPayload>[]
          }
          create: {
            args: Prisma.VocabularyMeaningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyMeaningPayload>
          }
          createMany: {
            args: Prisma.VocabularyMeaningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VocabularyMeaningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyMeaningPayload>[]
          }
          delete: {
            args: Prisma.VocabularyMeaningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyMeaningPayload>
          }
          update: {
            args: Prisma.VocabularyMeaningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyMeaningPayload>
          }
          deleteMany: {
            args: Prisma.VocabularyMeaningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VocabularyMeaningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VocabularyMeaningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyMeaningPayload>
          }
          aggregate: {
            args: Prisma.VocabularyMeaningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocabularyMeaning>
          }
          groupBy: {
            args: Prisma.VocabularyMeaningGroupByArgs<ExtArgs>
            result: $Utils.Optional<VocabularyMeaningGroupByOutputType>[]
          }
          count: {
            args: Prisma.VocabularyMeaningCountArgs<ExtArgs>
            result: $Utils.Optional<VocabularyMeaningCountAggregateOutputType> | number
          }
        }
      }
      UserVocabulary: {
        payload: Prisma.$UserVocabularyPayload<ExtArgs>
        fields: Prisma.UserVocabularyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVocabularyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVocabularyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyPayload>
          }
          findFirst: {
            args: Prisma.UserVocabularyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVocabularyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyPayload>
          }
          findMany: {
            args: Prisma.UserVocabularyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyPayload>[]
          }
          create: {
            args: Prisma.UserVocabularyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyPayload>
          }
          createMany: {
            args: Prisma.UserVocabularyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserVocabularyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyPayload>[]
          }
          delete: {
            args: Prisma.UserVocabularyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyPayload>
          }
          update: {
            args: Prisma.UserVocabularyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyPayload>
          }
          deleteMany: {
            args: Prisma.UserVocabularyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVocabularyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserVocabularyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyPayload>
          }
          aggregate: {
            args: Prisma.UserVocabularyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVocabulary>
          }
          groupBy: {
            args: Prisma.UserVocabularyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVocabularyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVocabularyCountArgs<ExtArgs>
            result: $Utils.Optional<UserVocabularyCountAggregateOutputType> | number
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
   * Count Type VocabularyWordCountOutputType
   */

  export type VocabularyWordCountOutputType = {
    meanings: number
    userWords: number
  }

  export type VocabularyWordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meanings?: boolean | VocabularyWordCountOutputTypeCountMeaningsArgs
    userWords?: boolean | VocabularyWordCountOutputTypeCountUserWordsArgs
  }

  // Custom InputTypes
  /**
   * VocabularyWordCountOutputType without action
   */
  export type VocabularyWordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWordCountOutputType
     */
    select?: VocabularyWordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VocabularyWordCountOutputType without action
   */
  export type VocabularyWordCountOutputTypeCountMeaningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyMeaningWhereInput
  }

  /**
   * VocabularyWordCountOutputType without action
   */
  export type VocabularyWordCountOutputTypeCountUserWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVocabularyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model VocabularyWord
   */

  export type AggregateVocabularyWord = {
    _count: VocabularyWordCountAggregateOutputType | null
    _min: VocabularyWordMinAggregateOutputType | null
    _max: VocabularyWordMaxAggregateOutputType | null
  }

  export type VocabularyWordMinAggregateOutputType = {
    id: string | null
    word: string | null
    pronunciation: string | null
    difficulty: $Enums.WordDifficulty | null
    category: string | null
    status: $Enums.WordStatus | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VocabularyWordMaxAggregateOutputType = {
    id: string | null
    word: string | null
    pronunciation: string | null
    difficulty: $Enums.WordDifficulty | null
    category: string | null
    status: $Enums.WordStatus | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VocabularyWordCountAggregateOutputType = {
    id: number
    word: number
    pronunciation: number
    difficulty: number
    category: number
    status: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VocabularyWordMinAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    difficulty?: true
    category?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VocabularyWordMaxAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    difficulty?: true
    category?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VocabularyWordCountAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    difficulty?: true
    category?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VocabularyWordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VocabularyWord to aggregate.
     */
    where?: VocabularyWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyWords to fetch.
     */
    orderBy?: VocabularyWordOrderByWithRelationInput | VocabularyWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VocabularyWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VocabularyWords
    **/
    _count?: true | VocabularyWordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VocabularyWordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VocabularyWordMaxAggregateInputType
  }

  export type GetVocabularyWordAggregateType<T extends VocabularyWordAggregateArgs> = {
        [P in keyof T & keyof AggregateVocabularyWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocabularyWord[P]>
      : GetScalarType<T[P], AggregateVocabularyWord[P]>
  }




  export type VocabularyWordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWordWhereInput
    orderBy?: VocabularyWordOrderByWithAggregationInput | VocabularyWordOrderByWithAggregationInput[]
    by: VocabularyWordScalarFieldEnum[] | VocabularyWordScalarFieldEnum
    having?: VocabularyWordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VocabularyWordCountAggregateInputType | true
    _min?: VocabularyWordMinAggregateInputType
    _max?: VocabularyWordMaxAggregateInputType
  }

  export type VocabularyWordGroupByOutputType = {
    id: string
    word: string
    pronunciation: string | null
    difficulty: $Enums.WordDifficulty
    category: string | null
    status: $Enums.WordStatus
    createdBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: VocabularyWordCountAggregateOutputType | null
    _min: VocabularyWordMinAggregateOutputType | null
    _max: VocabularyWordMaxAggregateOutputType | null
  }

  type GetVocabularyWordGroupByPayload<T extends VocabularyWordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VocabularyWordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VocabularyWordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VocabularyWordGroupByOutputType[P]>
            : GetScalarType<T[P], VocabularyWordGroupByOutputType[P]>
        }
      >
    >


  export type VocabularyWordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    difficulty?: boolean
    category?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meanings?: boolean | VocabularyWord$meaningsArgs<ExtArgs>
    userWords?: boolean | VocabularyWord$userWordsArgs<ExtArgs>
    _count?: boolean | VocabularyWordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabularyWord"]>

  export type VocabularyWordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    difficulty?: boolean
    category?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vocabularyWord"]>

  export type VocabularyWordSelectScalar = {
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    difficulty?: boolean
    category?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VocabularyWordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meanings?: boolean | VocabularyWord$meaningsArgs<ExtArgs>
    userWords?: boolean | VocabularyWord$userWordsArgs<ExtArgs>
    _count?: boolean | VocabularyWordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VocabularyWordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VocabularyWordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VocabularyWord"
    objects: {
      meanings: Prisma.$VocabularyMeaningPayload<ExtArgs>[]
      userWords: Prisma.$UserVocabularyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      pronunciation: string | null
      difficulty: $Enums.WordDifficulty
      category: string | null
      status: $Enums.WordStatus
      createdBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vocabularyWord"]>
    composites: {}
  }

  type VocabularyWordGetPayload<S extends boolean | null | undefined | VocabularyWordDefaultArgs> = $Result.GetResult<Prisma.$VocabularyWordPayload, S>

  type VocabularyWordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VocabularyWordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VocabularyWordCountAggregateInputType | true
    }

  export interface VocabularyWordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VocabularyWord'], meta: { name: 'VocabularyWord' } }
    /**
     * Find zero or one VocabularyWord that matches the filter.
     * @param {VocabularyWordFindUniqueArgs} args - Arguments to find a VocabularyWord
     * @example
     * // Get one VocabularyWord
     * const vocabularyWord = await prisma.vocabularyWord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VocabularyWordFindUniqueArgs>(args: SelectSubset<T, VocabularyWordFindUniqueArgs<ExtArgs>>): Prisma__VocabularyWordClient<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VocabularyWord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VocabularyWordFindUniqueOrThrowArgs} args - Arguments to find a VocabularyWord
     * @example
     * // Get one VocabularyWord
     * const vocabularyWord = await prisma.vocabularyWord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VocabularyWordFindUniqueOrThrowArgs>(args: SelectSubset<T, VocabularyWordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VocabularyWordClient<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VocabularyWord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyWordFindFirstArgs} args - Arguments to find a VocabularyWord
     * @example
     * // Get one VocabularyWord
     * const vocabularyWord = await prisma.vocabularyWord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VocabularyWordFindFirstArgs>(args?: SelectSubset<T, VocabularyWordFindFirstArgs<ExtArgs>>): Prisma__VocabularyWordClient<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VocabularyWord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyWordFindFirstOrThrowArgs} args - Arguments to find a VocabularyWord
     * @example
     * // Get one VocabularyWord
     * const vocabularyWord = await prisma.vocabularyWord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VocabularyWordFindFirstOrThrowArgs>(args?: SelectSubset<T, VocabularyWordFindFirstOrThrowArgs<ExtArgs>>): Prisma__VocabularyWordClient<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VocabularyWords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyWordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VocabularyWords
     * const vocabularyWords = await prisma.vocabularyWord.findMany()
     * 
     * // Get first 10 VocabularyWords
     * const vocabularyWords = await prisma.vocabularyWord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vocabularyWordWithIdOnly = await prisma.vocabularyWord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VocabularyWordFindManyArgs>(args?: SelectSubset<T, VocabularyWordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VocabularyWord.
     * @param {VocabularyWordCreateArgs} args - Arguments to create a VocabularyWord.
     * @example
     * // Create one VocabularyWord
     * const VocabularyWord = await prisma.vocabularyWord.create({
     *   data: {
     *     // ... data to create a VocabularyWord
     *   }
     * })
     * 
     */
    create<T extends VocabularyWordCreateArgs>(args: SelectSubset<T, VocabularyWordCreateArgs<ExtArgs>>): Prisma__VocabularyWordClient<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VocabularyWords.
     * @param {VocabularyWordCreateManyArgs} args - Arguments to create many VocabularyWords.
     * @example
     * // Create many VocabularyWords
     * const vocabularyWord = await prisma.vocabularyWord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VocabularyWordCreateManyArgs>(args?: SelectSubset<T, VocabularyWordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VocabularyWords and returns the data saved in the database.
     * @param {VocabularyWordCreateManyAndReturnArgs} args - Arguments to create many VocabularyWords.
     * @example
     * // Create many VocabularyWords
     * const vocabularyWord = await prisma.vocabularyWord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VocabularyWords and only return the `id`
     * const vocabularyWordWithIdOnly = await prisma.vocabularyWord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VocabularyWordCreateManyAndReturnArgs>(args?: SelectSubset<T, VocabularyWordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VocabularyWord.
     * @param {VocabularyWordDeleteArgs} args - Arguments to delete one VocabularyWord.
     * @example
     * // Delete one VocabularyWord
     * const VocabularyWord = await prisma.vocabularyWord.delete({
     *   where: {
     *     // ... filter to delete one VocabularyWord
     *   }
     * })
     * 
     */
    delete<T extends VocabularyWordDeleteArgs>(args: SelectSubset<T, VocabularyWordDeleteArgs<ExtArgs>>): Prisma__VocabularyWordClient<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VocabularyWord.
     * @param {VocabularyWordUpdateArgs} args - Arguments to update one VocabularyWord.
     * @example
     * // Update one VocabularyWord
     * const vocabularyWord = await prisma.vocabularyWord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VocabularyWordUpdateArgs>(args: SelectSubset<T, VocabularyWordUpdateArgs<ExtArgs>>): Prisma__VocabularyWordClient<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VocabularyWords.
     * @param {VocabularyWordDeleteManyArgs} args - Arguments to filter VocabularyWords to delete.
     * @example
     * // Delete a few VocabularyWords
     * const { count } = await prisma.vocabularyWord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VocabularyWordDeleteManyArgs>(args?: SelectSubset<T, VocabularyWordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VocabularyWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyWordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VocabularyWords
     * const vocabularyWord = await prisma.vocabularyWord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VocabularyWordUpdateManyArgs>(args: SelectSubset<T, VocabularyWordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VocabularyWord.
     * @param {VocabularyWordUpsertArgs} args - Arguments to update or create a VocabularyWord.
     * @example
     * // Update or create a VocabularyWord
     * const vocabularyWord = await prisma.vocabularyWord.upsert({
     *   create: {
     *     // ... data to create a VocabularyWord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VocabularyWord we want to update
     *   }
     * })
     */
    upsert<T extends VocabularyWordUpsertArgs>(args: SelectSubset<T, VocabularyWordUpsertArgs<ExtArgs>>): Prisma__VocabularyWordClient<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VocabularyWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyWordCountArgs} args - Arguments to filter VocabularyWords to count.
     * @example
     * // Count the number of VocabularyWords
     * const count = await prisma.vocabularyWord.count({
     *   where: {
     *     // ... the filter for the VocabularyWords we want to count
     *   }
     * })
    **/
    count<T extends VocabularyWordCountArgs>(
      args?: Subset<T, VocabularyWordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VocabularyWordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VocabularyWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyWordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VocabularyWordAggregateArgs>(args: Subset<T, VocabularyWordAggregateArgs>): Prisma.PrismaPromise<GetVocabularyWordAggregateType<T>>

    /**
     * Group by VocabularyWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyWordGroupByArgs} args - Group by arguments.
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
      T extends VocabularyWordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VocabularyWordGroupByArgs['orderBy'] }
        : { orderBy?: VocabularyWordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VocabularyWordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocabularyWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VocabularyWord model
   */
  readonly fields: VocabularyWordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VocabularyWord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VocabularyWordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meanings<T extends VocabularyWord$meaningsArgs<ExtArgs> = {}>(args?: Subset<T, VocabularyWord$meaningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "findMany"> | Null>
    userWords<T extends VocabularyWord$userWordsArgs<ExtArgs> = {}>(args?: Subset<T, VocabularyWord$userWordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the VocabularyWord model
   */ 
  interface VocabularyWordFieldRefs {
    readonly id: FieldRef<"VocabularyWord", 'String'>
    readonly word: FieldRef<"VocabularyWord", 'String'>
    readonly pronunciation: FieldRef<"VocabularyWord", 'String'>
    readonly difficulty: FieldRef<"VocabularyWord", 'WordDifficulty'>
    readonly category: FieldRef<"VocabularyWord", 'String'>
    readonly status: FieldRef<"VocabularyWord", 'WordStatus'>
    readonly createdBy: FieldRef<"VocabularyWord", 'String'>
    readonly createdAt: FieldRef<"VocabularyWord", 'DateTime'>
    readonly updatedAt: FieldRef<"VocabularyWord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VocabularyWord findUnique
   */
  export type VocabularyWordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyWordInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyWord to fetch.
     */
    where: VocabularyWordWhereUniqueInput
  }

  /**
   * VocabularyWord findUniqueOrThrow
   */
  export type VocabularyWordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyWordInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyWord to fetch.
     */
    where: VocabularyWordWhereUniqueInput
  }

  /**
   * VocabularyWord findFirst
   */
  export type VocabularyWordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyWordInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyWord to fetch.
     */
    where?: VocabularyWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyWords to fetch.
     */
    orderBy?: VocabularyWordOrderByWithRelationInput | VocabularyWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VocabularyWords.
     */
    cursor?: VocabularyWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VocabularyWords.
     */
    distinct?: VocabularyWordScalarFieldEnum | VocabularyWordScalarFieldEnum[]
  }

  /**
   * VocabularyWord findFirstOrThrow
   */
  export type VocabularyWordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyWordInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyWord to fetch.
     */
    where?: VocabularyWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyWords to fetch.
     */
    orderBy?: VocabularyWordOrderByWithRelationInput | VocabularyWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VocabularyWords.
     */
    cursor?: VocabularyWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VocabularyWords.
     */
    distinct?: VocabularyWordScalarFieldEnum | VocabularyWordScalarFieldEnum[]
  }

  /**
   * VocabularyWord findMany
   */
  export type VocabularyWordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyWordInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyWords to fetch.
     */
    where?: VocabularyWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyWords to fetch.
     */
    orderBy?: VocabularyWordOrderByWithRelationInput | VocabularyWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VocabularyWords.
     */
    cursor?: VocabularyWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyWords.
     */
    skip?: number
    distinct?: VocabularyWordScalarFieldEnum | VocabularyWordScalarFieldEnum[]
  }

  /**
   * VocabularyWord create
   */
  export type VocabularyWordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyWordInclude<ExtArgs> | null
    /**
     * The data needed to create a VocabularyWord.
     */
    data: XOR<VocabularyWordCreateInput, VocabularyWordUncheckedCreateInput>
  }

  /**
   * VocabularyWord createMany
   */
  export type VocabularyWordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VocabularyWords.
     */
    data: VocabularyWordCreateManyInput | VocabularyWordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VocabularyWord createManyAndReturn
   */
  export type VocabularyWordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VocabularyWords.
     */
    data: VocabularyWordCreateManyInput | VocabularyWordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VocabularyWord update
   */
  export type VocabularyWordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyWordInclude<ExtArgs> | null
    /**
     * The data needed to update a VocabularyWord.
     */
    data: XOR<VocabularyWordUpdateInput, VocabularyWordUncheckedUpdateInput>
    /**
     * Choose, which VocabularyWord to update.
     */
    where: VocabularyWordWhereUniqueInput
  }

  /**
   * VocabularyWord updateMany
   */
  export type VocabularyWordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VocabularyWords.
     */
    data: XOR<VocabularyWordUpdateManyMutationInput, VocabularyWordUncheckedUpdateManyInput>
    /**
     * Filter which VocabularyWords to update
     */
    where?: VocabularyWordWhereInput
  }

  /**
   * VocabularyWord upsert
   */
  export type VocabularyWordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyWordInclude<ExtArgs> | null
    /**
     * The filter to search for the VocabularyWord to update in case it exists.
     */
    where: VocabularyWordWhereUniqueInput
    /**
     * In case the VocabularyWord found by the `where` argument doesn't exist, create a new VocabularyWord with this data.
     */
    create: XOR<VocabularyWordCreateInput, VocabularyWordUncheckedCreateInput>
    /**
     * In case the VocabularyWord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VocabularyWordUpdateInput, VocabularyWordUncheckedUpdateInput>
  }

  /**
   * VocabularyWord delete
   */
  export type VocabularyWordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyWordInclude<ExtArgs> | null
    /**
     * Filter which VocabularyWord to delete.
     */
    where: VocabularyWordWhereUniqueInput
  }

  /**
   * VocabularyWord deleteMany
   */
  export type VocabularyWordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VocabularyWords to delete
     */
    where?: VocabularyWordWhereInput
  }

  /**
   * VocabularyWord.meanings
   */
  export type VocabularyWord$meaningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
    where?: VocabularyMeaningWhereInput
    orderBy?: VocabularyMeaningOrderByWithRelationInput | VocabularyMeaningOrderByWithRelationInput[]
    cursor?: VocabularyMeaningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VocabularyMeaningScalarFieldEnum | VocabularyMeaningScalarFieldEnum[]
  }

  /**
   * VocabularyWord.userWords
   */
  export type VocabularyWord$userWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
    where?: UserVocabularyWhereInput
    orderBy?: UserVocabularyOrderByWithRelationInput | UserVocabularyOrderByWithRelationInput[]
    cursor?: UserVocabularyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVocabularyScalarFieldEnum | UserVocabularyScalarFieldEnum[]
  }

  /**
   * VocabularyWord without action
   */
  export type VocabularyWordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyWord
     */
    select?: VocabularyWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyWordInclude<ExtArgs> | null
  }


  /**
   * Model VocabularyMeaning
   */

  export type AggregateVocabularyMeaning = {
    _count: VocabularyMeaningCountAggregateOutputType | null
    _min: VocabularyMeaningMinAggregateOutputType | null
    _max: VocabularyMeaningMaxAggregateOutputType | null
  }

  export type VocabularyMeaningMinAggregateOutputType = {
    id: string | null
    wordId: string | null
    partOfSpeech: $Enums.PartOfSpeech | null
    meaning: string | null
    meaningHindi: string | null
    exampleSentence: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VocabularyMeaningMaxAggregateOutputType = {
    id: string | null
    wordId: string | null
    partOfSpeech: $Enums.PartOfSpeech | null
    meaning: string | null
    meaningHindi: string | null
    exampleSentence: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VocabularyMeaningCountAggregateOutputType = {
    id: number
    wordId: number
    partOfSpeech: number
    meaning: number
    meaningHindi: number
    exampleSentence: number
    synonyms: number
    antonyms: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VocabularyMeaningMinAggregateInputType = {
    id?: true
    wordId?: true
    partOfSpeech?: true
    meaning?: true
    meaningHindi?: true
    exampleSentence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VocabularyMeaningMaxAggregateInputType = {
    id?: true
    wordId?: true
    partOfSpeech?: true
    meaning?: true
    meaningHindi?: true
    exampleSentence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VocabularyMeaningCountAggregateInputType = {
    id?: true
    wordId?: true
    partOfSpeech?: true
    meaning?: true
    meaningHindi?: true
    exampleSentence?: true
    synonyms?: true
    antonyms?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VocabularyMeaningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VocabularyMeaning to aggregate.
     */
    where?: VocabularyMeaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyMeanings to fetch.
     */
    orderBy?: VocabularyMeaningOrderByWithRelationInput | VocabularyMeaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VocabularyMeaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyMeanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyMeanings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VocabularyMeanings
    **/
    _count?: true | VocabularyMeaningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VocabularyMeaningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VocabularyMeaningMaxAggregateInputType
  }

  export type GetVocabularyMeaningAggregateType<T extends VocabularyMeaningAggregateArgs> = {
        [P in keyof T & keyof AggregateVocabularyMeaning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocabularyMeaning[P]>
      : GetScalarType<T[P], AggregateVocabularyMeaning[P]>
  }




  export type VocabularyMeaningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyMeaningWhereInput
    orderBy?: VocabularyMeaningOrderByWithAggregationInput | VocabularyMeaningOrderByWithAggregationInput[]
    by: VocabularyMeaningScalarFieldEnum[] | VocabularyMeaningScalarFieldEnum
    having?: VocabularyMeaningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VocabularyMeaningCountAggregateInputType | true
    _min?: VocabularyMeaningMinAggregateInputType
    _max?: VocabularyMeaningMaxAggregateInputType
  }

  export type VocabularyMeaningGroupByOutputType = {
    id: string
    wordId: string
    partOfSpeech: $Enums.PartOfSpeech
    meaning: string
    meaningHindi: string | null
    exampleSentence: string | null
    synonyms: JsonValue | null
    antonyms: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: VocabularyMeaningCountAggregateOutputType | null
    _min: VocabularyMeaningMinAggregateOutputType | null
    _max: VocabularyMeaningMaxAggregateOutputType | null
  }

  type GetVocabularyMeaningGroupByPayload<T extends VocabularyMeaningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VocabularyMeaningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VocabularyMeaningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VocabularyMeaningGroupByOutputType[P]>
            : GetScalarType<T[P], VocabularyMeaningGroupByOutputType[P]>
        }
      >
    >


  export type VocabularyMeaningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    partOfSpeech?: boolean
    meaning?: boolean
    meaningHindi?: boolean
    exampleSentence?: boolean
    synonyms?: boolean
    antonyms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    word?: boolean | VocabularyWordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabularyMeaning"]>

  export type VocabularyMeaningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    partOfSpeech?: boolean
    meaning?: boolean
    meaningHindi?: boolean
    exampleSentence?: boolean
    synonyms?: boolean
    antonyms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    word?: boolean | VocabularyWordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabularyMeaning"]>

  export type VocabularyMeaningSelectScalar = {
    id?: boolean
    wordId?: boolean
    partOfSpeech?: boolean
    meaning?: boolean
    meaningHindi?: boolean
    exampleSentence?: boolean
    synonyms?: boolean
    antonyms?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VocabularyMeaningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | VocabularyWordDefaultArgs<ExtArgs>
  }
  export type VocabularyMeaningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | VocabularyWordDefaultArgs<ExtArgs>
  }

  export type $VocabularyMeaningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VocabularyMeaning"
    objects: {
      word: Prisma.$VocabularyWordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wordId: string
      partOfSpeech: $Enums.PartOfSpeech
      meaning: string
      meaningHindi: string | null
      exampleSentence: string | null
      synonyms: Prisma.JsonValue | null
      antonyms: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vocabularyMeaning"]>
    composites: {}
  }

  type VocabularyMeaningGetPayload<S extends boolean | null | undefined | VocabularyMeaningDefaultArgs> = $Result.GetResult<Prisma.$VocabularyMeaningPayload, S>

  type VocabularyMeaningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VocabularyMeaningFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VocabularyMeaningCountAggregateInputType | true
    }

  export interface VocabularyMeaningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VocabularyMeaning'], meta: { name: 'VocabularyMeaning' } }
    /**
     * Find zero or one VocabularyMeaning that matches the filter.
     * @param {VocabularyMeaningFindUniqueArgs} args - Arguments to find a VocabularyMeaning
     * @example
     * // Get one VocabularyMeaning
     * const vocabularyMeaning = await prisma.vocabularyMeaning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VocabularyMeaningFindUniqueArgs>(args: SelectSubset<T, VocabularyMeaningFindUniqueArgs<ExtArgs>>): Prisma__VocabularyMeaningClient<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VocabularyMeaning that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VocabularyMeaningFindUniqueOrThrowArgs} args - Arguments to find a VocabularyMeaning
     * @example
     * // Get one VocabularyMeaning
     * const vocabularyMeaning = await prisma.vocabularyMeaning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VocabularyMeaningFindUniqueOrThrowArgs>(args: SelectSubset<T, VocabularyMeaningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VocabularyMeaningClient<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VocabularyMeaning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyMeaningFindFirstArgs} args - Arguments to find a VocabularyMeaning
     * @example
     * // Get one VocabularyMeaning
     * const vocabularyMeaning = await prisma.vocabularyMeaning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VocabularyMeaningFindFirstArgs>(args?: SelectSubset<T, VocabularyMeaningFindFirstArgs<ExtArgs>>): Prisma__VocabularyMeaningClient<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VocabularyMeaning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyMeaningFindFirstOrThrowArgs} args - Arguments to find a VocabularyMeaning
     * @example
     * // Get one VocabularyMeaning
     * const vocabularyMeaning = await prisma.vocabularyMeaning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VocabularyMeaningFindFirstOrThrowArgs>(args?: SelectSubset<T, VocabularyMeaningFindFirstOrThrowArgs<ExtArgs>>): Prisma__VocabularyMeaningClient<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VocabularyMeanings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyMeaningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VocabularyMeanings
     * const vocabularyMeanings = await prisma.vocabularyMeaning.findMany()
     * 
     * // Get first 10 VocabularyMeanings
     * const vocabularyMeanings = await prisma.vocabularyMeaning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vocabularyMeaningWithIdOnly = await prisma.vocabularyMeaning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VocabularyMeaningFindManyArgs>(args?: SelectSubset<T, VocabularyMeaningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VocabularyMeaning.
     * @param {VocabularyMeaningCreateArgs} args - Arguments to create a VocabularyMeaning.
     * @example
     * // Create one VocabularyMeaning
     * const VocabularyMeaning = await prisma.vocabularyMeaning.create({
     *   data: {
     *     // ... data to create a VocabularyMeaning
     *   }
     * })
     * 
     */
    create<T extends VocabularyMeaningCreateArgs>(args: SelectSubset<T, VocabularyMeaningCreateArgs<ExtArgs>>): Prisma__VocabularyMeaningClient<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VocabularyMeanings.
     * @param {VocabularyMeaningCreateManyArgs} args - Arguments to create many VocabularyMeanings.
     * @example
     * // Create many VocabularyMeanings
     * const vocabularyMeaning = await prisma.vocabularyMeaning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VocabularyMeaningCreateManyArgs>(args?: SelectSubset<T, VocabularyMeaningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VocabularyMeanings and returns the data saved in the database.
     * @param {VocabularyMeaningCreateManyAndReturnArgs} args - Arguments to create many VocabularyMeanings.
     * @example
     * // Create many VocabularyMeanings
     * const vocabularyMeaning = await prisma.vocabularyMeaning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VocabularyMeanings and only return the `id`
     * const vocabularyMeaningWithIdOnly = await prisma.vocabularyMeaning.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VocabularyMeaningCreateManyAndReturnArgs>(args?: SelectSubset<T, VocabularyMeaningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VocabularyMeaning.
     * @param {VocabularyMeaningDeleteArgs} args - Arguments to delete one VocabularyMeaning.
     * @example
     * // Delete one VocabularyMeaning
     * const VocabularyMeaning = await prisma.vocabularyMeaning.delete({
     *   where: {
     *     // ... filter to delete one VocabularyMeaning
     *   }
     * })
     * 
     */
    delete<T extends VocabularyMeaningDeleteArgs>(args: SelectSubset<T, VocabularyMeaningDeleteArgs<ExtArgs>>): Prisma__VocabularyMeaningClient<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VocabularyMeaning.
     * @param {VocabularyMeaningUpdateArgs} args - Arguments to update one VocabularyMeaning.
     * @example
     * // Update one VocabularyMeaning
     * const vocabularyMeaning = await prisma.vocabularyMeaning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VocabularyMeaningUpdateArgs>(args: SelectSubset<T, VocabularyMeaningUpdateArgs<ExtArgs>>): Prisma__VocabularyMeaningClient<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VocabularyMeanings.
     * @param {VocabularyMeaningDeleteManyArgs} args - Arguments to filter VocabularyMeanings to delete.
     * @example
     * // Delete a few VocabularyMeanings
     * const { count } = await prisma.vocabularyMeaning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VocabularyMeaningDeleteManyArgs>(args?: SelectSubset<T, VocabularyMeaningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VocabularyMeanings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyMeaningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VocabularyMeanings
     * const vocabularyMeaning = await prisma.vocabularyMeaning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VocabularyMeaningUpdateManyArgs>(args: SelectSubset<T, VocabularyMeaningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VocabularyMeaning.
     * @param {VocabularyMeaningUpsertArgs} args - Arguments to update or create a VocabularyMeaning.
     * @example
     * // Update or create a VocabularyMeaning
     * const vocabularyMeaning = await prisma.vocabularyMeaning.upsert({
     *   create: {
     *     // ... data to create a VocabularyMeaning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VocabularyMeaning we want to update
     *   }
     * })
     */
    upsert<T extends VocabularyMeaningUpsertArgs>(args: SelectSubset<T, VocabularyMeaningUpsertArgs<ExtArgs>>): Prisma__VocabularyMeaningClient<$Result.GetResult<Prisma.$VocabularyMeaningPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VocabularyMeanings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyMeaningCountArgs} args - Arguments to filter VocabularyMeanings to count.
     * @example
     * // Count the number of VocabularyMeanings
     * const count = await prisma.vocabularyMeaning.count({
     *   where: {
     *     // ... the filter for the VocabularyMeanings we want to count
     *   }
     * })
    **/
    count<T extends VocabularyMeaningCountArgs>(
      args?: Subset<T, VocabularyMeaningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VocabularyMeaningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VocabularyMeaning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyMeaningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VocabularyMeaningAggregateArgs>(args: Subset<T, VocabularyMeaningAggregateArgs>): Prisma.PrismaPromise<GetVocabularyMeaningAggregateType<T>>

    /**
     * Group by VocabularyMeaning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyMeaningGroupByArgs} args - Group by arguments.
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
      T extends VocabularyMeaningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VocabularyMeaningGroupByArgs['orderBy'] }
        : { orderBy?: VocabularyMeaningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VocabularyMeaningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocabularyMeaningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VocabularyMeaning model
   */
  readonly fields: VocabularyMeaningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VocabularyMeaning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VocabularyMeaningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends VocabularyWordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VocabularyWordDefaultArgs<ExtArgs>>): Prisma__VocabularyWordClient<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the VocabularyMeaning model
   */ 
  interface VocabularyMeaningFieldRefs {
    readonly id: FieldRef<"VocabularyMeaning", 'String'>
    readonly wordId: FieldRef<"VocabularyMeaning", 'String'>
    readonly partOfSpeech: FieldRef<"VocabularyMeaning", 'PartOfSpeech'>
    readonly meaning: FieldRef<"VocabularyMeaning", 'String'>
    readonly meaningHindi: FieldRef<"VocabularyMeaning", 'String'>
    readonly exampleSentence: FieldRef<"VocabularyMeaning", 'String'>
    readonly synonyms: FieldRef<"VocabularyMeaning", 'Json'>
    readonly antonyms: FieldRef<"VocabularyMeaning", 'Json'>
    readonly createdAt: FieldRef<"VocabularyMeaning", 'DateTime'>
    readonly updatedAt: FieldRef<"VocabularyMeaning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VocabularyMeaning findUnique
   */
  export type VocabularyMeaningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyMeaning to fetch.
     */
    where: VocabularyMeaningWhereUniqueInput
  }

  /**
   * VocabularyMeaning findUniqueOrThrow
   */
  export type VocabularyMeaningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyMeaning to fetch.
     */
    where: VocabularyMeaningWhereUniqueInput
  }

  /**
   * VocabularyMeaning findFirst
   */
  export type VocabularyMeaningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyMeaning to fetch.
     */
    where?: VocabularyMeaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyMeanings to fetch.
     */
    orderBy?: VocabularyMeaningOrderByWithRelationInput | VocabularyMeaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VocabularyMeanings.
     */
    cursor?: VocabularyMeaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyMeanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyMeanings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VocabularyMeanings.
     */
    distinct?: VocabularyMeaningScalarFieldEnum | VocabularyMeaningScalarFieldEnum[]
  }

  /**
   * VocabularyMeaning findFirstOrThrow
   */
  export type VocabularyMeaningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyMeaning to fetch.
     */
    where?: VocabularyMeaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyMeanings to fetch.
     */
    orderBy?: VocabularyMeaningOrderByWithRelationInput | VocabularyMeaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VocabularyMeanings.
     */
    cursor?: VocabularyMeaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyMeanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyMeanings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VocabularyMeanings.
     */
    distinct?: VocabularyMeaningScalarFieldEnum | VocabularyMeaningScalarFieldEnum[]
  }

  /**
   * VocabularyMeaning findMany
   */
  export type VocabularyMeaningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyMeanings to fetch.
     */
    where?: VocabularyMeaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyMeanings to fetch.
     */
    orderBy?: VocabularyMeaningOrderByWithRelationInput | VocabularyMeaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VocabularyMeanings.
     */
    cursor?: VocabularyMeaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyMeanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyMeanings.
     */
    skip?: number
    distinct?: VocabularyMeaningScalarFieldEnum | VocabularyMeaningScalarFieldEnum[]
  }

  /**
   * VocabularyMeaning create
   */
  export type VocabularyMeaningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
    /**
     * The data needed to create a VocabularyMeaning.
     */
    data: XOR<VocabularyMeaningCreateInput, VocabularyMeaningUncheckedCreateInput>
  }

  /**
   * VocabularyMeaning createMany
   */
  export type VocabularyMeaningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VocabularyMeanings.
     */
    data: VocabularyMeaningCreateManyInput | VocabularyMeaningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VocabularyMeaning createManyAndReturn
   */
  export type VocabularyMeaningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VocabularyMeanings.
     */
    data: VocabularyMeaningCreateManyInput | VocabularyMeaningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VocabularyMeaning update
   */
  export type VocabularyMeaningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
    /**
     * The data needed to update a VocabularyMeaning.
     */
    data: XOR<VocabularyMeaningUpdateInput, VocabularyMeaningUncheckedUpdateInput>
    /**
     * Choose, which VocabularyMeaning to update.
     */
    where: VocabularyMeaningWhereUniqueInput
  }

  /**
   * VocabularyMeaning updateMany
   */
  export type VocabularyMeaningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VocabularyMeanings.
     */
    data: XOR<VocabularyMeaningUpdateManyMutationInput, VocabularyMeaningUncheckedUpdateManyInput>
    /**
     * Filter which VocabularyMeanings to update
     */
    where?: VocabularyMeaningWhereInput
  }

  /**
   * VocabularyMeaning upsert
   */
  export type VocabularyMeaningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
    /**
     * The filter to search for the VocabularyMeaning to update in case it exists.
     */
    where: VocabularyMeaningWhereUniqueInput
    /**
     * In case the VocabularyMeaning found by the `where` argument doesn't exist, create a new VocabularyMeaning with this data.
     */
    create: XOR<VocabularyMeaningCreateInput, VocabularyMeaningUncheckedCreateInput>
    /**
     * In case the VocabularyMeaning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VocabularyMeaningUpdateInput, VocabularyMeaningUncheckedUpdateInput>
  }

  /**
   * VocabularyMeaning delete
   */
  export type VocabularyMeaningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
    /**
     * Filter which VocabularyMeaning to delete.
     */
    where: VocabularyMeaningWhereUniqueInput
  }

  /**
   * VocabularyMeaning deleteMany
   */
  export type VocabularyMeaningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VocabularyMeanings to delete
     */
    where?: VocabularyMeaningWhereInput
  }

  /**
   * VocabularyMeaning without action
   */
  export type VocabularyMeaningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyMeaning
     */
    select?: VocabularyMeaningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyMeaningInclude<ExtArgs> | null
  }


  /**
   * Model UserVocabulary
   */

  export type AggregateUserVocabulary = {
    _count: UserVocabularyCountAggregateOutputType | null
    _avg: UserVocabularyAvgAggregateOutputType | null
    _sum: UserVocabularySumAggregateOutputType | null
    _min: UserVocabularyMinAggregateOutputType | null
    _max: UserVocabularyMaxAggregateOutputType | null
  }

  export type UserVocabularyAvgAggregateOutputType = {
    confidence: number | null
    reviewCount: number | null
    correctCount: number | null
    wrongCount: number | null
  }

  export type UserVocabularySumAggregateOutputType = {
    confidence: number | null
    reviewCount: number | null
    correctCount: number | null
    wrongCount: number | null
  }

  export type UserVocabularyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    wordId: string | null
    status: $Enums.UserWordStatus | null
    confidence: number | null
    isFavorite: boolean | null
    reviewCount: number | null
    correctCount: number | null
    wrongCount: number | null
    lastReviewed: Date | null
    nextReview: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVocabularyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    wordId: string | null
    status: $Enums.UserWordStatus | null
    confidence: number | null
    isFavorite: boolean | null
    reviewCount: number | null
    correctCount: number | null
    wrongCount: number | null
    lastReviewed: Date | null
    nextReview: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVocabularyCountAggregateOutputType = {
    id: number
    userId: number
    wordId: number
    status: number
    confidence: number
    isFavorite: number
    reviewCount: number
    correctCount: number
    wrongCount: number
    lastReviewed: number
    nextReview: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserVocabularyAvgAggregateInputType = {
    confidence?: true
    reviewCount?: true
    correctCount?: true
    wrongCount?: true
  }

  export type UserVocabularySumAggregateInputType = {
    confidence?: true
    reviewCount?: true
    correctCount?: true
    wrongCount?: true
  }

  export type UserVocabularyMinAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    status?: true
    confidence?: true
    isFavorite?: true
    reviewCount?: true
    correctCount?: true
    wrongCount?: true
    lastReviewed?: true
    nextReview?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVocabularyMaxAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    status?: true
    confidence?: true
    isFavorite?: true
    reviewCount?: true
    correctCount?: true
    wrongCount?: true
    lastReviewed?: true
    nextReview?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVocabularyCountAggregateInputType = {
    id?: true
    userId?: true
    wordId?: true
    status?: true
    confidence?: true
    isFavorite?: true
    reviewCount?: true
    correctCount?: true
    wrongCount?: true
    lastReviewed?: true
    nextReview?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserVocabularyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVocabulary to aggregate.
     */
    where?: UserVocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVocabularies to fetch.
     */
    orderBy?: UserVocabularyOrderByWithRelationInput | UserVocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVocabularies
    **/
    _count?: true | UserVocabularyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserVocabularyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserVocabularySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVocabularyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVocabularyMaxAggregateInputType
  }

  export type GetUserVocabularyAggregateType<T extends UserVocabularyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVocabulary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVocabulary[P]>
      : GetScalarType<T[P], AggregateUserVocabulary[P]>
  }




  export type UserVocabularyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVocabularyWhereInput
    orderBy?: UserVocabularyOrderByWithAggregationInput | UserVocabularyOrderByWithAggregationInput[]
    by: UserVocabularyScalarFieldEnum[] | UserVocabularyScalarFieldEnum
    having?: UserVocabularyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVocabularyCountAggregateInputType | true
    _avg?: UserVocabularyAvgAggregateInputType
    _sum?: UserVocabularySumAggregateInputType
    _min?: UserVocabularyMinAggregateInputType
    _max?: UserVocabularyMaxAggregateInputType
  }

  export type UserVocabularyGroupByOutputType = {
    id: string
    userId: string
    wordId: string
    status: $Enums.UserWordStatus
    confidence: number
    isFavorite: boolean
    reviewCount: number
    correctCount: number
    wrongCount: number
    lastReviewed: Date | null
    nextReview: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserVocabularyCountAggregateOutputType | null
    _avg: UserVocabularyAvgAggregateOutputType | null
    _sum: UserVocabularySumAggregateOutputType | null
    _min: UserVocabularyMinAggregateOutputType | null
    _max: UserVocabularyMaxAggregateOutputType | null
  }

  type GetUserVocabularyGroupByPayload<T extends UserVocabularyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVocabularyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVocabularyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVocabularyGroupByOutputType[P]>
            : GetScalarType<T[P], UserVocabularyGroupByOutputType[P]>
        }
      >
    >


  export type UserVocabularySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    status?: boolean
    confidence?: boolean
    isFavorite?: boolean
    reviewCount?: boolean
    correctCount?: boolean
    wrongCount?: boolean
    lastReviewed?: boolean
    nextReview?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    word?: boolean | VocabularyWordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVocabulary"]>

  export type UserVocabularySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wordId?: boolean
    status?: boolean
    confidence?: boolean
    isFavorite?: boolean
    reviewCount?: boolean
    correctCount?: boolean
    wrongCount?: boolean
    lastReviewed?: boolean
    nextReview?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    word?: boolean | VocabularyWordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVocabulary"]>

  export type UserVocabularySelectScalar = {
    id?: boolean
    userId?: boolean
    wordId?: boolean
    status?: boolean
    confidence?: boolean
    isFavorite?: boolean
    reviewCount?: boolean
    correctCount?: boolean
    wrongCount?: boolean
    lastReviewed?: boolean
    nextReview?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserVocabularyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | VocabularyWordDefaultArgs<ExtArgs>
  }
  export type UserVocabularyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | VocabularyWordDefaultArgs<ExtArgs>
  }

  export type $UserVocabularyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVocabulary"
    objects: {
      word: Prisma.$VocabularyWordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      wordId: string
      status: $Enums.UserWordStatus
      confidence: number
      isFavorite: boolean
      reviewCount: number
      correctCount: number
      wrongCount: number
      lastReviewed: Date | null
      nextReview: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userVocabulary"]>
    composites: {}
  }

  type UserVocabularyGetPayload<S extends boolean | null | undefined | UserVocabularyDefaultArgs> = $Result.GetResult<Prisma.$UserVocabularyPayload, S>

  type UserVocabularyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserVocabularyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserVocabularyCountAggregateInputType | true
    }

  export interface UserVocabularyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVocabulary'], meta: { name: 'UserVocabulary' } }
    /**
     * Find zero or one UserVocabulary that matches the filter.
     * @param {UserVocabularyFindUniqueArgs} args - Arguments to find a UserVocabulary
     * @example
     * // Get one UserVocabulary
     * const userVocabulary = await prisma.userVocabulary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVocabularyFindUniqueArgs>(args: SelectSubset<T, UserVocabularyFindUniqueArgs<ExtArgs>>): Prisma__UserVocabularyClient<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserVocabulary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserVocabularyFindUniqueOrThrowArgs} args - Arguments to find a UserVocabulary
     * @example
     * // Get one UserVocabulary
     * const userVocabulary = await prisma.userVocabulary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVocabularyFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVocabularyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVocabularyClient<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserVocabulary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyFindFirstArgs} args - Arguments to find a UserVocabulary
     * @example
     * // Get one UserVocabulary
     * const userVocabulary = await prisma.userVocabulary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVocabularyFindFirstArgs>(args?: SelectSubset<T, UserVocabularyFindFirstArgs<ExtArgs>>): Prisma__UserVocabularyClient<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserVocabulary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyFindFirstOrThrowArgs} args - Arguments to find a UserVocabulary
     * @example
     * // Get one UserVocabulary
     * const userVocabulary = await prisma.userVocabulary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVocabularyFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVocabularyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVocabularyClient<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserVocabularies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVocabularies
     * const userVocabularies = await prisma.userVocabulary.findMany()
     * 
     * // Get first 10 UserVocabularies
     * const userVocabularies = await prisma.userVocabulary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVocabularyWithIdOnly = await prisma.userVocabulary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVocabularyFindManyArgs>(args?: SelectSubset<T, UserVocabularyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserVocabulary.
     * @param {UserVocabularyCreateArgs} args - Arguments to create a UserVocabulary.
     * @example
     * // Create one UserVocabulary
     * const UserVocabulary = await prisma.userVocabulary.create({
     *   data: {
     *     // ... data to create a UserVocabulary
     *   }
     * })
     * 
     */
    create<T extends UserVocabularyCreateArgs>(args: SelectSubset<T, UserVocabularyCreateArgs<ExtArgs>>): Prisma__UserVocabularyClient<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserVocabularies.
     * @param {UserVocabularyCreateManyArgs} args - Arguments to create many UserVocabularies.
     * @example
     * // Create many UserVocabularies
     * const userVocabulary = await prisma.userVocabulary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVocabularyCreateManyArgs>(args?: SelectSubset<T, UserVocabularyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserVocabularies and returns the data saved in the database.
     * @param {UserVocabularyCreateManyAndReturnArgs} args - Arguments to create many UserVocabularies.
     * @example
     * // Create many UserVocabularies
     * const userVocabulary = await prisma.userVocabulary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserVocabularies and only return the `id`
     * const userVocabularyWithIdOnly = await prisma.userVocabulary.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserVocabularyCreateManyAndReturnArgs>(args?: SelectSubset<T, UserVocabularyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserVocabulary.
     * @param {UserVocabularyDeleteArgs} args - Arguments to delete one UserVocabulary.
     * @example
     * // Delete one UserVocabulary
     * const UserVocabulary = await prisma.userVocabulary.delete({
     *   where: {
     *     // ... filter to delete one UserVocabulary
     *   }
     * })
     * 
     */
    delete<T extends UserVocabularyDeleteArgs>(args: SelectSubset<T, UserVocabularyDeleteArgs<ExtArgs>>): Prisma__UserVocabularyClient<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserVocabulary.
     * @param {UserVocabularyUpdateArgs} args - Arguments to update one UserVocabulary.
     * @example
     * // Update one UserVocabulary
     * const userVocabulary = await prisma.userVocabulary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVocabularyUpdateArgs>(args: SelectSubset<T, UserVocabularyUpdateArgs<ExtArgs>>): Prisma__UserVocabularyClient<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserVocabularies.
     * @param {UserVocabularyDeleteManyArgs} args - Arguments to filter UserVocabularies to delete.
     * @example
     * // Delete a few UserVocabularies
     * const { count } = await prisma.userVocabulary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVocabularyDeleteManyArgs>(args?: SelectSubset<T, UserVocabularyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVocabularies
     * const userVocabulary = await prisma.userVocabulary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVocabularyUpdateManyArgs>(args: SelectSubset<T, UserVocabularyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserVocabulary.
     * @param {UserVocabularyUpsertArgs} args - Arguments to update or create a UserVocabulary.
     * @example
     * // Update or create a UserVocabulary
     * const userVocabulary = await prisma.userVocabulary.upsert({
     *   create: {
     *     // ... data to create a UserVocabulary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVocabulary we want to update
     *   }
     * })
     */
    upsert<T extends UserVocabularyUpsertArgs>(args: SelectSubset<T, UserVocabularyUpsertArgs<ExtArgs>>): Prisma__UserVocabularyClient<$Result.GetResult<Prisma.$UserVocabularyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserVocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyCountArgs} args - Arguments to filter UserVocabularies to count.
     * @example
     * // Count the number of UserVocabularies
     * const count = await prisma.userVocabulary.count({
     *   where: {
     *     // ... the filter for the UserVocabularies we want to count
     *   }
     * })
    **/
    count<T extends UserVocabularyCountArgs>(
      args?: Subset<T, UserVocabularyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVocabularyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserVocabularyAggregateArgs>(args: Subset<T, UserVocabularyAggregateArgs>): Prisma.PrismaPromise<GetUserVocabularyAggregateType<T>>

    /**
     * Group by UserVocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyGroupByArgs} args - Group by arguments.
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
      T extends UserVocabularyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVocabularyGroupByArgs['orderBy'] }
        : { orderBy?: UserVocabularyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserVocabularyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVocabularyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVocabulary model
   */
  readonly fields: UserVocabularyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVocabulary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVocabularyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends VocabularyWordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VocabularyWordDefaultArgs<ExtArgs>>): Prisma__VocabularyWordClient<$Result.GetResult<Prisma.$VocabularyWordPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserVocabulary model
   */ 
  interface UserVocabularyFieldRefs {
    readonly id: FieldRef<"UserVocabulary", 'String'>
    readonly userId: FieldRef<"UserVocabulary", 'String'>
    readonly wordId: FieldRef<"UserVocabulary", 'String'>
    readonly status: FieldRef<"UserVocabulary", 'UserWordStatus'>
    readonly confidence: FieldRef<"UserVocabulary", 'Int'>
    readonly isFavorite: FieldRef<"UserVocabulary", 'Boolean'>
    readonly reviewCount: FieldRef<"UserVocabulary", 'Int'>
    readonly correctCount: FieldRef<"UserVocabulary", 'Int'>
    readonly wrongCount: FieldRef<"UserVocabulary", 'Int'>
    readonly lastReviewed: FieldRef<"UserVocabulary", 'DateTime'>
    readonly nextReview: FieldRef<"UserVocabulary", 'DateTime'>
    readonly notes: FieldRef<"UserVocabulary", 'String'>
    readonly createdAt: FieldRef<"UserVocabulary", 'DateTime'>
    readonly updatedAt: FieldRef<"UserVocabulary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVocabulary findUnique
   */
  export type UserVocabularyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
    /**
     * Filter, which UserVocabulary to fetch.
     */
    where: UserVocabularyWhereUniqueInput
  }

  /**
   * UserVocabulary findUniqueOrThrow
   */
  export type UserVocabularyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
    /**
     * Filter, which UserVocabulary to fetch.
     */
    where: UserVocabularyWhereUniqueInput
  }

  /**
   * UserVocabulary findFirst
   */
  export type UserVocabularyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
    /**
     * Filter, which UserVocabulary to fetch.
     */
    where?: UserVocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVocabularies to fetch.
     */
    orderBy?: UserVocabularyOrderByWithRelationInput | UserVocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVocabularies.
     */
    cursor?: UserVocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVocabularies.
     */
    distinct?: UserVocabularyScalarFieldEnum | UserVocabularyScalarFieldEnum[]
  }

  /**
   * UserVocabulary findFirstOrThrow
   */
  export type UserVocabularyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
    /**
     * Filter, which UserVocabulary to fetch.
     */
    where?: UserVocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVocabularies to fetch.
     */
    orderBy?: UserVocabularyOrderByWithRelationInput | UserVocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVocabularies.
     */
    cursor?: UserVocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVocabularies.
     */
    distinct?: UserVocabularyScalarFieldEnum | UserVocabularyScalarFieldEnum[]
  }

  /**
   * UserVocabulary findMany
   */
  export type UserVocabularyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
    /**
     * Filter, which UserVocabularies to fetch.
     */
    where?: UserVocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVocabularies to fetch.
     */
    orderBy?: UserVocabularyOrderByWithRelationInput | UserVocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVocabularies.
     */
    cursor?: UserVocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVocabularies.
     */
    skip?: number
    distinct?: UserVocabularyScalarFieldEnum | UserVocabularyScalarFieldEnum[]
  }

  /**
   * UserVocabulary create
   */
  export type UserVocabularyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
    /**
     * The data needed to create a UserVocabulary.
     */
    data: XOR<UserVocabularyCreateInput, UserVocabularyUncheckedCreateInput>
  }

  /**
   * UserVocabulary createMany
   */
  export type UserVocabularyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVocabularies.
     */
    data: UserVocabularyCreateManyInput | UserVocabularyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVocabulary createManyAndReturn
   */
  export type UserVocabularyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserVocabularies.
     */
    data: UserVocabularyCreateManyInput | UserVocabularyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVocabulary update
   */
  export type UserVocabularyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
    /**
     * The data needed to update a UserVocabulary.
     */
    data: XOR<UserVocabularyUpdateInput, UserVocabularyUncheckedUpdateInput>
    /**
     * Choose, which UserVocabulary to update.
     */
    where: UserVocabularyWhereUniqueInput
  }

  /**
   * UserVocabulary updateMany
   */
  export type UserVocabularyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVocabularies.
     */
    data: XOR<UserVocabularyUpdateManyMutationInput, UserVocabularyUncheckedUpdateManyInput>
    /**
     * Filter which UserVocabularies to update
     */
    where?: UserVocabularyWhereInput
  }

  /**
   * UserVocabulary upsert
   */
  export type UserVocabularyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
    /**
     * The filter to search for the UserVocabulary to update in case it exists.
     */
    where: UserVocabularyWhereUniqueInput
    /**
     * In case the UserVocabulary found by the `where` argument doesn't exist, create a new UserVocabulary with this data.
     */
    create: XOR<UserVocabularyCreateInput, UserVocabularyUncheckedCreateInput>
    /**
     * In case the UserVocabulary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVocabularyUpdateInput, UserVocabularyUncheckedUpdateInput>
  }

  /**
   * UserVocabulary delete
   */
  export type UserVocabularyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
    /**
     * Filter which UserVocabulary to delete.
     */
    where: UserVocabularyWhereUniqueInput
  }

  /**
   * UserVocabulary deleteMany
   */
  export type UserVocabularyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVocabularies to delete
     */
    where?: UserVocabularyWhereInput
  }

  /**
   * UserVocabulary without action
   */
  export type UserVocabularyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabulary
     */
    select?: UserVocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyInclude<ExtArgs> | null
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


  export const VocabularyWordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    pronunciation: 'pronunciation',
    difficulty: 'difficulty',
    category: 'category',
    status: 'status',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VocabularyWordScalarFieldEnum = (typeof VocabularyWordScalarFieldEnum)[keyof typeof VocabularyWordScalarFieldEnum]


  export const VocabularyMeaningScalarFieldEnum: {
    id: 'id',
    wordId: 'wordId',
    partOfSpeech: 'partOfSpeech',
    meaning: 'meaning',
    meaningHindi: 'meaningHindi',
    exampleSentence: 'exampleSentence',
    synonyms: 'synonyms',
    antonyms: 'antonyms',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VocabularyMeaningScalarFieldEnum = (typeof VocabularyMeaningScalarFieldEnum)[keyof typeof VocabularyMeaningScalarFieldEnum]


  export const UserVocabularyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    wordId: 'wordId',
    status: 'status',
    confidence: 'confidence',
    isFavorite: 'isFavorite',
    reviewCount: 'reviewCount',
    correctCount: 'correctCount',
    wrongCount: 'wrongCount',
    lastReviewed: 'lastReviewed',
    nextReview: 'nextReview',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserVocabularyScalarFieldEnum = (typeof UserVocabularyScalarFieldEnum)[keyof typeof UserVocabularyScalarFieldEnum]


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
   * Reference to a field of type 'WordDifficulty'
   */
  export type EnumWordDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WordDifficulty'>
    


  /**
   * Reference to a field of type 'WordDifficulty[]'
   */
  export type ListEnumWordDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WordDifficulty[]'>
    


  /**
   * Reference to a field of type 'WordStatus'
   */
  export type EnumWordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WordStatus'>
    


  /**
   * Reference to a field of type 'WordStatus[]'
   */
  export type ListEnumWordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WordStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PartOfSpeech'
   */
  export type EnumPartOfSpeechFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartOfSpeech'>
    


  /**
   * Reference to a field of type 'PartOfSpeech[]'
   */
  export type ListEnumPartOfSpeechFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartOfSpeech[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'UserWordStatus'
   */
  export type EnumUserWordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserWordStatus'>
    


  /**
   * Reference to a field of type 'UserWordStatus[]'
   */
  export type ListEnumUserWordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserWordStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type VocabularyWordWhereInput = {
    AND?: VocabularyWordWhereInput | VocabularyWordWhereInput[]
    OR?: VocabularyWordWhereInput[]
    NOT?: VocabularyWordWhereInput | VocabularyWordWhereInput[]
    id?: StringFilter<"VocabularyWord"> | string
    word?: StringFilter<"VocabularyWord"> | string
    pronunciation?: StringNullableFilter<"VocabularyWord"> | string | null
    difficulty?: EnumWordDifficultyFilter<"VocabularyWord"> | $Enums.WordDifficulty
    category?: StringNullableFilter<"VocabularyWord"> | string | null
    status?: EnumWordStatusFilter<"VocabularyWord"> | $Enums.WordStatus
    createdBy?: StringNullableFilter<"VocabularyWord"> | string | null
    createdAt?: DateTimeFilter<"VocabularyWord"> | Date | string
    updatedAt?: DateTimeFilter<"VocabularyWord"> | Date | string
    meanings?: VocabularyMeaningListRelationFilter
    userWords?: UserVocabularyListRelationFilter
  }

  export type VocabularyWordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meanings?: VocabularyMeaningOrderByRelationAggregateInput
    userWords?: UserVocabularyOrderByRelationAggregateInput
  }

  export type VocabularyWordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    word?: string
    AND?: VocabularyWordWhereInput | VocabularyWordWhereInput[]
    OR?: VocabularyWordWhereInput[]
    NOT?: VocabularyWordWhereInput | VocabularyWordWhereInput[]
    pronunciation?: StringNullableFilter<"VocabularyWord"> | string | null
    difficulty?: EnumWordDifficultyFilter<"VocabularyWord"> | $Enums.WordDifficulty
    category?: StringNullableFilter<"VocabularyWord"> | string | null
    status?: EnumWordStatusFilter<"VocabularyWord"> | $Enums.WordStatus
    createdBy?: StringNullableFilter<"VocabularyWord"> | string | null
    createdAt?: DateTimeFilter<"VocabularyWord"> | Date | string
    updatedAt?: DateTimeFilter<"VocabularyWord"> | Date | string
    meanings?: VocabularyMeaningListRelationFilter
    userWords?: UserVocabularyListRelationFilter
  }, "id" | "word">

  export type VocabularyWordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VocabularyWordCountOrderByAggregateInput
    _max?: VocabularyWordMaxOrderByAggregateInput
    _min?: VocabularyWordMinOrderByAggregateInput
  }

  export type VocabularyWordScalarWhereWithAggregatesInput = {
    AND?: VocabularyWordScalarWhereWithAggregatesInput | VocabularyWordScalarWhereWithAggregatesInput[]
    OR?: VocabularyWordScalarWhereWithAggregatesInput[]
    NOT?: VocabularyWordScalarWhereWithAggregatesInput | VocabularyWordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VocabularyWord"> | string
    word?: StringWithAggregatesFilter<"VocabularyWord"> | string
    pronunciation?: StringNullableWithAggregatesFilter<"VocabularyWord"> | string | null
    difficulty?: EnumWordDifficultyWithAggregatesFilter<"VocabularyWord"> | $Enums.WordDifficulty
    category?: StringNullableWithAggregatesFilter<"VocabularyWord"> | string | null
    status?: EnumWordStatusWithAggregatesFilter<"VocabularyWord"> | $Enums.WordStatus
    createdBy?: StringNullableWithAggregatesFilter<"VocabularyWord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VocabularyWord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VocabularyWord"> | Date | string
  }

  export type VocabularyMeaningWhereInput = {
    AND?: VocabularyMeaningWhereInput | VocabularyMeaningWhereInput[]
    OR?: VocabularyMeaningWhereInput[]
    NOT?: VocabularyMeaningWhereInput | VocabularyMeaningWhereInput[]
    id?: StringFilter<"VocabularyMeaning"> | string
    wordId?: StringFilter<"VocabularyMeaning"> | string
    partOfSpeech?: EnumPartOfSpeechFilter<"VocabularyMeaning"> | $Enums.PartOfSpeech
    meaning?: StringFilter<"VocabularyMeaning"> | string
    meaningHindi?: StringNullableFilter<"VocabularyMeaning"> | string | null
    exampleSentence?: StringNullableFilter<"VocabularyMeaning"> | string | null
    synonyms?: JsonNullableFilter<"VocabularyMeaning">
    antonyms?: JsonNullableFilter<"VocabularyMeaning">
    createdAt?: DateTimeFilter<"VocabularyMeaning"> | Date | string
    updatedAt?: DateTimeFilter<"VocabularyMeaning"> | Date | string
    word?: XOR<VocabularyWordRelationFilter, VocabularyWordWhereInput>
  }

  export type VocabularyMeaningOrderByWithRelationInput = {
    id?: SortOrder
    wordId?: SortOrder
    partOfSpeech?: SortOrder
    meaning?: SortOrder
    meaningHindi?: SortOrderInput | SortOrder
    exampleSentence?: SortOrderInput | SortOrder
    synonyms?: SortOrderInput | SortOrder
    antonyms?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    word?: VocabularyWordOrderByWithRelationInput
  }

  export type VocabularyMeaningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VocabularyMeaningWhereInput | VocabularyMeaningWhereInput[]
    OR?: VocabularyMeaningWhereInput[]
    NOT?: VocabularyMeaningWhereInput | VocabularyMeaningWhereInput[]
    wordId?: StringFilter<"VocabularyMeaning"> | string
    partOfSpeech?: EnumPartOfSpeechFilter<"VocabularyMeaning"> | $Enums.PartOfSpeech
    meaning?: StringFilter<"VocabularyMeaning"> | string
    meaningHindi?: StringNullableFilter<"VocabularyMeaning"> | string | null
    exampleSentence?: StringNullableFilter<"VocabularyMeaning"> | string | null
    synonyms?: JsonNullableFilter<"VocabularyMeaning">
    antonyms?: JsonNullableFilter<"VocabularyMeaning">
    createdAt?: DateTimeFilter<"VocabularyMeaning"> | Date | string
    updatedAt?: DateTimeFilter<"VocabularyMeaning"> | Date | string
    word?: XOR<VocabularyWordRelationFilter, VocabularyWordWhereInput>
  }, "id">

  export type VocabularyMeaningOrderByWithAggregationInput = {
    id?: SortOrder
    wordId?: SortOrder
    partOfSpeech?: SortOrder
    meaning?: SortOrder
    meaningHindi?: SortOrderInput | SortOrder
    exampleSentence?: SortOrderInput | SortOrder
    synonyms?: SortOrderInput | SortOrder
    antonyms?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VocabularyMeaningCountOrderByAggregateInput
    _max?: VocabularyMeaningMaxOrderByAggregateInput
    _min?: VocabularyMeaningMinOrderByAggregateInput
  }

  export type VocabularyMeaningScalarWhereWithAggregatesInput = {
    AND?: VocabularyMeaningScalarWhereWithAggregatesInput | VocabularyMeaningScalarWhereWithAggregatesInput[]
    OR?: VocabularyMeaningScalarWhereWithAggregatesInput[]
    NOT?: VocabularyMeaningScalarWhereWithAggregatesInput | VocabularyMeaningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VocabularyMeaning"> | string
    wordId?: StringWithAggregatesFilter<"VocabularyMeaning"> | string
    partOfSpeech?: EnumPartOfSpeechWithAggregatesFilter<"VocabularyMeaning"> | $Enums.PartOfSpeech
    meaning?: StringWithAggregatesFilter<"VocabularyMeaning"> | string
    meaningHindi?: StringNullableWithAggregatesFilter<"VocabularyMeaning"> | string | null
    exampleSentence?: StringNullableWithAggregatesFilter<"VocabularyMeaning"> | string | null
    synonyms?: JsonNullableWithAggregatesFilter<"VocabularyMeaning">
    antonyms?: JsonNullableWithAggregatesFilter<"VocabularyMeaning">
    createdAt?: DateTimeWithAggregatesFilter<"VocabularyMeaning"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VocabularyMeaning"> | Date | string
  }

  export type UserVocabularyWhereInput = {
    AND?: UserVocabularyWhereInput | UserVocabularyWhereInput[]
    OR?: UserVocabularyWhereInput[]
    NOT?: UserVocabularyWhereInput | UserVocabularyWhereInput[]
    id?: StringFilter<"UserVocabulary"> | string
    userId?: StringFilter<"UserVocabulary"> | string
    wordId?: StringFilter<"UserVocabulary"> | string
    status?: EnumUserWordStatusFilter<"UserVocabulary"> | $Enums.UserWordStatus
    confidence?: IntFilter<"UserVocabulary"> | number
    isFavorite?: BoolFilter<"UserVocabulary"> | boolean
    reviewCount?: IntFilter<"UserVocabulary"> | number
    correctCount?: IntFilter<"UserVocabulary"> | number
    wrongCount?: IntFilter<"UserVocabulary"> | number
    lastReviewed?: DateTimeNullableFilter<"UserVocabulary"> | Date | string | null
    nextReview?: DateTimeNullableFilter<"UserVocabulary"> | Date | string | null
    notes?: StringNullableFilter<"UserVocabulary"> | string | null
    createdAt?: DateTimeFilter<"UserVocabulary"> | Date | string
    updatedAt?: DateTimeFilter<"UserVocabulary"> | Date | string
    word?: XOR<VocabularyWordRelationFilter, VocabularyWordWhereInput>
  }

  export type UserVocabularyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    status?: SortOrder
    confidence?: SortOrder
    isFavorite?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    lastReviewed?: SortOrderInput | SortOrder
    nextReview?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    word?: VocabularyWordOrderByWithRelationInput
  }

  export type UserVocabularyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_wordId?: UserVocabularyUserIdWordIdCompoundUniqueInput
    AND?: UserVocabularyWhereInput | UserVocabularyWhereInput[]
    OR?: UserVocabularyWhereInput[]
    NOT?: UserVocabularyWhereInput | UserVocabularyWhereInput[]
    userId?: StringFilter<"UserVocabulary"> | string
    wordId?: StringFilter<"UserVocabulary"> | string
    status?: EnumUserWordStatusFilter<"UserVocabulary"> | $Enums.UserWordStatus
    confidence?: IntFilter<"UserVocabulary"> | number
    isFavorite?: BoolFilter<"UserVocabulary"> | boolean
    reviewCount?: IntFilter<"UserVocabulary"> | number
    correctCount?: IntFilter<"UserVocabulary"> | number
    wrongCount?: IntFilter<"UserVocabulary"> | number
    lastReviewed?: DateTimeNullableFilter<"UserVocabulary"> | Date | string | null
    nextReview?: DateTimeNullableFilter<"UserVocabulary"> | Date | string | null
    notes?: StringNullableFilter<"UserVocabulary"> | string | null
    createdAt?: DateTimeFilter<"UserVocabulary"> | Date | string
    updatedAt?: DateTimeFilter<"UserVocabulary"> | Date | string
    word?: XOR<VocabularyWordRelationFilter, VocabularyWordWhereInput>
  }, "id" | "userId_wordId">

  export type UserVocabularyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    status?: SortOrder
    confidence?: SortOrder
    isFavorite?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    lastReviewed?: SortOrderInput | SortOrder
    nextReview?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserVocabularyCountOrderByAggregateInput
    _avg?: UserVocabularyAvgOrderByAggregateInput
    _max?: UserVocabularyMaxOrderByAggregateInput
    _min?: UserVocabularyMinOrderByAggregateInput
    _sum?: UserVocabularySumOrderByAggregateInput
  }

  export type UserVocabularyScalarWhereWithAggregatesInput = {
    AND?: UserVocabularyScalarWhereWithAggregatesInput | UserVocabularyScalarWhereWithAggregatesInput[]
    OR?: UserVocabularyScalarWhereWithAggregatesInput[]
    NOT?: UserVocabularyScalarWhereWithAggregatesInput | UserVocabularyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserVocabulary"> | string
    userId?: StringWithAggregatesFilter<"UserVocabulary"> | string
    wordId?: StringWithAggregatesFilter<"UserVocabulary"> | string
    status?: EnumUserWordStatusWithAggregatesFilter<"UserVocabulary"> | $Enums.UserWordStatus
    confidence?: IntWithAggregatesFilter<"UserVocabulary"> | number
    isFavorite?: BoolWithAggregatesFilter<"UserVocabulary"> | boolean
    reviewCount?: IntWithAggregatesFilter<"UserVocabulary"> | number
    correctCount?: IntWithAggregatesFilter<"UserVocabulary"> | number
    wrongCount?: IntWithAggregatesFilter<"UserVocabulary"> | number
    lastReviewed?: DateTimeNullableWithAggregatesFilter<"UserVocabulary"> | Date | string | null
    nextReview?: DateTimeNullableWithAggregatesFilter<"UserVocabulary"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"UserVocabulary"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserVocabulary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserVocabulary"> | Date | string
  }

  export type VocabularyWordCreateInput = {
    id?: string
    word: string
    pronunciation?: string | null
    difficulty?: $Enums.WordDifficulty
    category?: string | null
    status?: $Enums.WordStatus
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meanings?: VocabularyMeaningCreateNestedManyWithoutWordInput
    userWords?: UserVocabularyCreateNestedManyWithoutWordInput
  }

  export type VocabularyWordUncheckedCreateInput = {
    id?: string
    word: string
    pronunciation?: string | null
    difficulty?: $Enums.WordDifficulty
    category?: string | null
    status?: $Enums.WordStatus
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meanings?: VocabularyMeaningUncheckedCreateNestedManyWithoutWordInput
    userWords?: UserVocabularyUncheckedCreateNestedManyWithoutWordInput
  }

  export type VocabularyWordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumWordDifficultyFieldUpdateOperationsInput | $Enums.WordDifficulty
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meanings?: VocabularyMeaningUpdateManyWithoutWordNestedInput
    userWords?: UserVocabularyUpdateManyWithoutWordNestedInput
  }

  export type VocabularyWordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumWordDifficultyFieldUpdateOperationsInput | $Enums.WordDifficulty
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meanings?: VocabularyMeaningUncheckedUpdateManyWithoutWordNestedInput
    userWords?: UserVocabularyUncheckedUpdateManyWithoutWordNestedInput
  }

  export type VocabularyWordCreateManyInput = {
    id?: string
    word: string
    pronunciation?: string | null
    difficulty?: $Enums.WordDifficulty
    category?: string | null
    status?: $Enums.WordStatus
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyWordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumWordDifficultyFieldUpdateOperationsInput | $Enums.WordDifficulty
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyWordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumWordDifficultyFieldUpdateOperationsInput | $Enums.WordDifficulty
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyMeaningCreateInput = {
    id?: string
    partOfSpeech: $Enums.PartOfSpeech
    meaning: string
    meaningHindi?: string | null
    exampleSentence?: string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    word: VocabularyWordCreateNestedOneWithoutMeaningsInput
  }

  export type VocabularyMeaningUncheckedCreateInput = {
    id?: string
    wordId: string
    partOfSpeech: $Enums.PartOfSpeech
    meaning: string
    meaningHindi?: string | null
    exampleSentence?: string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyMeaningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    meaning?: StringFieldUpdateOperationsInput | string
    meaningHindi?: NullableStringFieldUpdateOperationsInput | string | null
    exampleSentence?: NullableStringFieldUpdateOperationsInput | string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    word?: VocabularyWordUpdateOneRequiredWithoutMeaningsNestedInput
  }

  export type VocabularyMeaningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    meaning?: StringFieldUpdateOperationsInput | string
    meaningHindi?: NullableStringFieldUpdateOperationsInput | string | null
    exampleSentence?: NullableStringFieldUpdateOperationsInput | string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyMeaningCreateManyInput = {
    id?: string
    wordId: string
    partOfSpeech: $Enums.PartOfSpeech
    meaning: string
    meaningHindi?: string | null
    exampleSentence?: string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyMeaningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    meaning?: StringFieldUpdateOperationsInput | string
    meaningHindi?: NullableStringFieldUpdateOperationsInput | string | null
    exampleSentence?: NullableStringFieldUpdateOperationsInput | string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyMeaningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    meaning?: StringFieldUpdateOperationsInput | string
    meaningHindi?: NullableStringFieldUpdateOperationsInput | string | null
    exampleSentence?: NullableStringFieldUpdateOperationsInput | string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyCreateInput = {
    id?: string
    userId: string
    status?: $Enums.UserWordStatus
    confidence?: number
    isFavorite?: boolean
    reviewCount?: number
    correctCount?: number
    wrongCount?: number
    lastReviewed?: Date | string | null
    nextReview?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    word: VocabularyWordCreateNestedOneWithoutUserWordsInput
  }

  export type UserVocabularyUncheckedCreateInput = {
    id?: string
    userId: string
    wordId: string
    status?: $Enums.UserWordStatus
    confidence?: number
    isFavorite?: boolean
    reviewCount?: number
    correctCount?: number
    wrongCount?: number
    lastReviewed?: Date | string | null
    nextReview?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumUserWordStatusFieldUpdateOperationsInput | $Enums.UserWordStatus
    confidence?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastReviewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    word?: VocabularyWordUpdateOneRequiredWithoutUserWordsNestedInput
  }

  export type UserVocabularyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    status?: EnumUserWordStatusFieldUpdateOperationsInput | $Enums.UserWordStatus
    confidence?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastReviewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyCreateManyInput = {
    id?: string
    userId: string
    wordId: string
    status?: $Enums.UserWordStatus
    confidence?: number
    isFavorite?: boolean
    reviewCount?: number
    correctCount?: number
    wrongCount?: number
    lastReviewed?: Date | string | null
    nextReview?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumUserWordStatusFieldUpdateOperationsInput | $Enums.UserWordStatus
    confidence?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastReviewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    status?: EnumUserWordStatusFieldUpdateOperationsInput | $Enums.UserWordStatus
    confidence?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastReviewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumWordDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.WordDifficulty | EnumWordDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.WordDifficulty[] | ListEnumWordDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordDifficulty[] | ListEnumWordDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumWordDifficultyFilter<$PrismaModel> | $Enums.WordDifficulty
  }

  export type EnumWordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WordStatus | EnumWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWordStatusFilter<$PrismaModel> | $Enums.WordStatus
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

  export type VocabularyMeaningListRelationFilter = {
    every?: VocabularyMeaningWhereInput
    some?: VocabularyMeaningWhereInput
    none?: VocabularyMeaningWhereInput
  }

  export type UserVocabularyListRelationFilter = {
    every?: UserVocabularyWhereInput
    some?: UserVocabularyWhereInput
    none?: UserVocabularyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VocabularyMeaningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserVocabularyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VocabularyWordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VocabularyWordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VocabularyWordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    difficulty?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumWordDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WordDifficulty | EnumWordDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.WordDifficulty[] | ListEnumWordDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordDifficulty[] | ListEnumWordDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumWordDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.WordDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWordDifficultyFilter<$PrismaModel>
    _max?: NestedEnumWordDifficultyFilter<$PrismaModel>
  }

  export type EnumWordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WordStatus | EnumWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWordStatusWithAggregatesFilter<$PrismaModel> | $Enums.WordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWordStatusFilter<$PrismaModel>
    _max?: NestedEnumWordStatusFilter<$PrismaModel>
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

  export type EnumPartOfSpeechFilter<$PrismaModel = never> = {
    equals?: $Enums.PartOfSpeech | EnumPartOfSpeechFieldRefInput<$PrismaModel>
    in?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    not?: NestedEnumPartOfSpeechFilter<$PrismaModel> | $Enums.PartOfSpeech
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

  export type VocabularyWordRelationFilter = {
    is?: VocabularyWordWhereInput
    isNot?: VocabularyWordWhereInput
  }

  export type VocabularyMeaningCountOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    partOfSpeech?: SortOrder
    meaning?: SortOrder
    meaningHindi?: SortOrder
    exampleSentence?: SortOrder
    synonyms?: SortOrder
    antonyms?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VocabularyMeaningMaxOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    partOfSpeech?: SortOrder
    meaning?: SortOrder
    meaningHindi?: SortOrder
    exampleSentence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VocabularyMeaningMinOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    partOfSpeech?: SortOrder
    meaning?: SortOrder
    meaningHindi?: SortOrder
    exampleSentence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPartOfSpeechWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartOfSpeech | EnumPartOfSpeechFieldRefInput<$PrismaModel>
    in?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    not?: NestedEnumPartOfSpeechWithAggregatesFilter<$PrismaModel> | $Enums.PartOfSpeech
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartOfSpeechFilter<$PrismaModel>
    _max?: NestedEnumPartOfSpeechFilter<$PrismaModel>
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

  export type EnumUserWordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserWordStatus | EnumUserWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserWordStatus[] | ListEnumUserWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserWordStatus[] | ListEnumUserWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserWordStatusFilter<$PrismaModel> | $Enums.UserWordStatus
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserVocabularyUserIdWordIdCompoundUniqueInput = {
    userId: string
    wordId: string
  }

  export type UserVocabularyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    status?: SortOrder
    confidence?: SortOrder
    isFavorite?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    lastReviewed?: SortOrder
    nextReview?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVocabularyAvgOrderByAggregateInput = {
    confidence?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
  }

  export type UserVocabularyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    status?: SortOrder
    confidence?: SortOrder
    isFavorite?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    lastReviewed?: SortOrder
    nextReview?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVocabularyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    status?: SortOrder
    confidence?: SortOrder
    isFavorite?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
    lastReviewed?: SortOrder
    nextReview?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVocabularySumOrderByAggregateInput = {
    confidence?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    wrongCount?: SortOrder
  }

  export type EnumUserWordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserWordStatus | EnumUserWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserWordStatus[] | ListEnumUserWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserWordStatus[] | ListEnumUserWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserWordStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserWordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserWordStatusFilter<$PrismaModel>
    _max?: NestedEnumUserWordStatusFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type VocabularyMeaningCreateNestedManyWithoutWordInput = {
    create?: XOR<VocabularyMeaningCreateWithoutWordInput, VocabularyMeaningUncheckedCreateWithoutWordInput> | VocabularyMeaningCreateWithoutWordInput[] | VocabularyMeaningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: VocabularyMeaningCreateOrConnectWithoutWordInput | VocabularyMeaningCreateOrConnectWithoutWordInput[]
    createMany?: VocabularyMeaningCreateManyWordInputEnvelope
    connect?: VocabularyMeaningWhereUniqueInput | VocabularyMeaningWhereUniqueInput[]
  }

  export type UserVocabularyCreateNestedManyWithoutWordInput = {
    create?: XOR<UserVocabularyCreateWithoutWordInput, UserVocabularyUncheckedCreateWithoutWordInput> | UserVocabularyCreateWithoutWordInput[] | UserVocabularyUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserVocabularyCreateOrConnectWithoutWordInput | UserVocabularyCreateOrConnectWithoutWordInput[]
    createMany?: UserVocabularyCreateManyWordInputEnvelope
    connect?: UserVocabularyWhereUniqueInput | UserVocabularyWhereUniqueInput[]
  }

  export type VocabularyMeaningUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<VocabularyMeaningCreateWithoutWordInput, VocabularyMeaningUncheckedCreateWithoutWordInput> | VocabularyMeaningCreateWithoutWordInput[] | VocabularyMeaningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: VocabularyMeaningCreateOrConnectWithoutWordInput | VocabularyMeaningCreateOrConnectWithoutWordInput[]
    createMany?: VocabularyMeaningCreateManyWordInputEnvelope
    connect?: VocabularyMeaningWhereUniqueInput | VocabularyMeaningWhereUniqueInput[]
  }

  export type UserVocabularyUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<UserVocabularyCreateWithoutWordInput, UserVocabularyUncheckedCreateWithoutWordInput> | UserVocabularyCreateWithoutWordInput[] | UserVocabularyUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserVocabularyCreateOrConnectWithoutWordInput | UserVocabularyCreateOrConnectWithoutWordInput[]
    createMany?: UserVocabularyCreateManyWordInputEnvelope
    connect?: UserVocabularyWhereUniqueInput | UserVocabularyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumWordDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.WordDifficulty
  }

  export type EnumWordStatusFieldUpdateOperationsInput = {
    set?: $Enums.WordStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VocabularyMeaningUpdateManyWithoutWordNestedInput = {
    create?: XOR<VocabularyMeaningCreateWithoutWordInput, VocabularyMeaningUncheckedCreateWithoutWordInput> | VocabularyMeaningCreateWithoutWordInput[] | VocabularyMeaningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: VocabularyMeaningCreateOrConnectWithoutWordInput | VocabularyMeaningCreateOrConnectWithoutWordInput[]
    upsert?: VocabularyMeaningUpsertWithWhereUniqueWithoutWordInput | VocabularyMeaningUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: VocabularyMeaningCreateManyWordInputEnvelope
    set?: VocabularyMeaningWhereUniqueInput | VocabularyMeaningWhereUniqueInput[]
    disconnect?: VocabularyMeaningWhereUniqueInput | VocabularyMeaningWhereUniqueInput[]
    delete?: VocabularyMeaningWhereUniqueInput | VocabularyMeaningWhereUniqueInput[]
    connect?: VocabularyMeaningWhereUniqueInput | VocabularyMeaningWhereUniqueInput[]
    update?: VocabularyMeaningUpdateWithWhereUniqueWithoutWordInput | VocabularyMeaningUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: VocabularyMeaningUpdateManyWithWhereWithoutWordInput | VocabularyMeaningUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: VocabularyMeaningScalarWhereInput | VocabularyMeaningScalarWhereInput[]
  }

  export type UserVocabularyUpdateManyWithoutWordNestedInput = {
    create?: XOR<UserVocabularyCreateWithoutWordInput, UserVocabularyUncheckedCreateWithoutWordInput> | UserVocabularyCreateWithoutWordInput[] | UserVocabularyUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserVocabularyCreateOrConnectWithoutWordInput | UserVocabularyCreateOrConnectWithoutWordInput[]
    upsert?: UserVocabularyUpsertWithWhereUniqueWithoutWordInput | UserVocabularyUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: UserVocabularyCreateManyWordInputEnvelope
    set?: UserVocabularyWhereUniqueInput | UserVocabularyWhereUniqueInput[]
    disconnect?: UserVocabularyWhereUniqueInput | UserVocabularyWhereUniqueInput[]
    delete?: UserVocabularyWhereUniqueInput | UserVocabularyWhereUniqueInput[]
    connect?: UserVocabularyWhereUniqueInput | UserVocabularyWhereUniqueInput[]
    update?: UserVocabularyUpdateWithWhereUniqueWithoutWordInput | UserVocabularyUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: UserVocabularyUpdateManyWithWhereWithoutWordInput | UserVocabularyUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: UserVocabularyScalarWhereInput | UserVocabularyScalarWhereInput[]
  }

  export type VocabularyMeaningUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<VocabularyMeaningCreateWithoutWordInput, VocabularyMeaningUncheckedCreateWithoutWordInput> | VocabularyMeaningCreateWithoutWordInput[] | VocabularyMeaningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: VocabularyMeaningCreateOrConnectWithoutWordInput | VocabularyMeaningCreateOrConnectWithoutWordInput[]
    upsert?: VocabularyMeaningUpsertWithWhereUniqueWithoutWordInput | VocabularyMeaningUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: VocabularyMeaningCreateManyWordInputEnvelope
    set?: VocabularyMeaningWhereUniqueInput | VocabularyMeaningWhereUniqueInput[]
    disconnect?: VocabularyMeaningWhereUniqueInput | VocabularyMeaningWhereUniqueInput[]
    delete?: VocabularyMeaningWhereUniqueInput | VocabularyMeaningWhereUniqueInput[]
    connect?: VocabularyMeaningWhereUniqueInput | VocabularyMeaningWhereUniqueInput[]
    update?: VocabularyMeaningUpdateWithWhereUniqueWithoutWordInput | VocabularyMeaningUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: VocabularyMeaningUpdateManyWithWhereWithoutWordInput | VocabularyMeaningUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: VocabularyMeaningScalarWhereInput | VocabularyMeaningScalarWhereInput[]
  }

  export type UserVocabularyUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<UserVocabularyCreateWithoutWordInput, UserVocabularyUncheckedCreateWithoutWordInput> | UserVocabularyCreateWithoutWordInput[] | UserVocabularyUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserVocabularyCreateOrConnectWithoutWordInput | UserVocabularyCreateOrConnectWithoutWordInput[]
    upsert?: UserVocabularyUpsertWithWhereUniqueWithoutWordInput | UserVocabularyUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: UserVocabularyCreateManyWordInputEnvelope
    set?: UserVocabularyWhereUniqueInput | UserVocabularyWhereUniqueInput[]
    disconnect?: UserVocabularyWhereUniqueInput | UserVocabularyWhereUniqueInput[]
    delete?: UserVocabularyWhereUniqueInput | UserVocabularyWhereUniqueInput[]
    connect?: UserVocabularyWhereUniqueInput | UserVocabularyWhereUniqueInput[]
    update?: UserVocabularyUpdateWithWhereUniqueWithoutWordInput | UserVocabularyUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: UserVocabularyUpdateManyWithWhereWithoutWordInput | UserVocabularyUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: UserVocabularyScalarWhereInput | UserVocabularyScalarWhereInput[]
  }

  export type VocabularyWordCreateNestedOneWithoutMeaningsInput = {
    create?: XOR<VocabularyWordCreateWithoutMeaningsInput, VocabularyWordUncheckedCreateWithoutMeaningsInput>
    connectOrCreate?: VocabularyWordCreateOrConnectWithoutMeaningsInput
    connect?: VocabularyWordWhereUniqueInput
  }

  export type EnumPartOfSpeechFieldUpdateOperationsInput = {
    set?: $Enums.PartOfSpeech
  }

  export type VocabularyWordUpdateOneRequiredWithoutMeaningsNestedInput = {
    create?: XOR<VocabularyWordCreateWithoutMeaningsInput, VocabularyWordUncheckedCreateWithoutMeaningsInput>
    connectOrCreate?: VocabularyWordCreateOrConnectWithoutMeaningsInput
    upsert?: VocabularyWordUpsertWithoutMeaningsInput
    connect?: VocabularyWordWhereUniqueInput
    update?: XOR<XOR<VocabularyWordUpdateToOneWithWhereWithoutMeaningsInput, VocabularyWordUpdateWithoutMeaningsInput>, VocabularyWordUncheckedUpdateWithoutMeaningsInput>
  }

  export type VocabularyWordCreateNestedOneWithoutUserWordsInput = {
    create?: XOR<VocabularyWordCreateWithoutUserWordsInput, VocabularyWordUncheckedCreateWithoutUserWordsInput>
    connectOrCreate?: VocabularyWordCreateOrConnectWithoutUserWordsInput
    connect?: VocabularyWordWhereUniqueInput
  }

  export type EnumUserWordStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserWordStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VocabularyWordUpdateOneRequiredWithoutUserWordsNestedInput = {
    create?: XOR<VocabularyWordCreateWithoutUserWordsInput, VocabularyWordUncheckedCreateWithoutUserWordsInput>
    connectOrCreate?: VocabularyWordCreateOrConnectWithoutUserWordsInput
    upsert?: VocabularyWordUpsertWithoutUserWordsInput
    connect?: VocabularyWordWhereUniqueInput
    update?: XOR<XOR<VocabularyWordUpdateToOneWithWhereWithoutUserWordsInput, VocabularyWordUpdateWithoutUserWordsInput>, VocabularyWordUncheckedUpdateWithoutUserWordsInput>
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

  export type NestedEnumWordDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.WordDifficulty | EnumWordDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.WordDifficulty[] | ListEnumWordDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordDifficulty[] | ListEnumWordDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumWordDifficultyFilter<$PrismaModel> | $Enums.WordDifficulty
  }

  export type NestedEnumWordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WordStatus | EnumWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWordStatusFilter<$PrismaModel> | $Enums.WordStatus
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

  export type NestedEnumWordDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WordDifficulty | EnumWordDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.WordDifficulty[] | ListEnumWordDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordDifficulty[] | ListEnumWordDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumWordDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.WordDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWordDifficultyFilter<$PrismaModel>
    _max?: NestedEnumWordDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumWordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WordStatus | EnumWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWordStatusWithAggregatesFilter<$PrismaModel> | $Enums.WordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWordStatusFilter<$PrismaModel>
    _max?: NestedEnumWordStatusFilter<$PrismaModel>
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

  export type NestedEnumPartOfSpeechFilter<$PrismaModel = never> = {
    equals?: $Enums.PartOfSpeech | EnumPartOfSpeechFieldRefInput<$PrismaModel>
    in?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    not?: NestedEnumPartOfSpeechFilter<$PrismaModel> | $Enums.PartOfSpeech
  }

  export type NestedEnumPartOfSpeechWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartOfSpeech | EnumPartOfSpeechFieldRefInput<$PrismaModel>
    in?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    not?: NestedEnumPartOfSpeechWithAggregatesFilter<$PrismaModel> | $Enums.PartOfSpeech
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartOfSpeechFilter<$PrismaModel>
    _max?: NestedEnumPartOfSpeechFilter<$PrismaModel>
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

  export type NestedEnumUserWordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserWordStatus | EnumUserWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserWordStatus[] | ListEnumUserWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserWordStatus[] | ListEnumUserWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserWordStatusFilter<$PrismaModel> | $Enums.UserWordStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserWordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserWordStatus | EnumUserWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserWordStatus[] | ListEnumUserWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserWordStatus[] | ListEnumUserWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserWordStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserWordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserWordStatusFilter<$PrismaModel>
    _max?: NestedEnumUserWordStatusFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type VocabularyMeaningCreateWithoutWordInput = {
    id?: string
    partOfSpeech: $Enums.PartOfSpeech
    meaning: string
    meaningHindi?: string | null
    exampleSentence?: string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyMeaningUncheckedCreateWithoutWordInput = {
    id?: string
    partOfSpeech: $Enums.PartOfSpeech
    meaning: string
    meaningHindi?: string | null
    exampleSentence?: string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyMeaningCreateOrConnectWithoutWordInput = {
    where: VocabularyMeaningWhereUniqueInput
    create: XOR<VocabularyMeaningCreateWithoutWordInput, VocabularyMeaningUncheckedCreateWithoutWordInput>
  }

  export type VocabularyMeaningCreateManyWordInputEnvelope = {
    data: VocabularyMeaningCreateManyWordInput | VocabularyMeaningCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type UserVocabularyCreateWithoutWordInput = {
    id?: string
    userId: string
    status?: $Enums.UserWordStatus
    confidence?: number
    isFavorite?: boolean
    reviewCount?: number
    correctCount?: number
    wrongCount?: number
    lastReviewed?: Date | string | null
    nextReview?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyUncheckedCreateWithoutWordInput = {
    id?: string
    userId: string
    status?: $Enums.UserWordStatus
    confidence?: number
    isFavorite?: boolean
    reviewCount?: number
    correctCount?: number
    wrongCount?: number
    lastReviewed?: Date | string | null
    nextReview?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyCreateOrConnectWithoutWordInput = {
    where: UserVocabularyWhereUniqueInput
    create: XOR<UserVocabularyCreateWithoutWordInput, UserVocabularyUncheckedCreateWithoutWordInput>
  }

  export type UserVocabularyCreateManyWordInputEnvelope = {
    data: UserVocabularyCreateManyWordInput | UserVocabularyCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type VocabularyMeaningUpsertWithWhereUniqueWithoutWordInput = {
    where: VocabularyMeaningWhereUniqueInput
    update: XOR<VocabularyMeaningUpdateWithoutWordInput, VocabularyMeaningUncheckedUpdateWithoutWordInput>
    create: XOR<VocabularyMeaningCreateWithoutWordInput, VocabularyMeaningUncheckedCreateWithoutWordInput>
  }

  export type VocabularyMeaningUpdateWithWhereUniqueWithoutWordInput = {
    where: VocabularyMeaningWhereUniqueInput
    data: XOR<VocabularyMeaningUpdateWithoutWordInput, VocabularyMeaningUncheckedUpdateWithoutWordInput>
  }

  export type VocabularyMeaningUpdateManyWithWhereWithoutWordInput = {
    where: VocabularyMeaningScalarWhereInput
    data: XOR<VocabularyMeaningUpdateManyMutationInput, VocabularyMeaningUncheckedUpdateManyWithoutWordInput>
  }

  export type VocabularyMeaningScalarWhereInput = {
    AND?: VocabularyMeaningScalarWhereInput | VocabularyMeaningScalarWhereInput[]
    OR?: VocabularyMeaningScalarWhereInput[]
    NOT?: VocabularyMeaningScalarWhereInput | VocabularyMeaningScalarWhereInput[]
    id?: StringFilter<"VocabularyMeaning"> | string
    wordId?: StringFilter<"VocabularyMeaning"> | string
    partOfSpeech?: EnumPartOfSpeechFilter<"VocabularyMeaning"> | $Enums.PartOfSpeech
    meaning?: StringFilter<"VocabularyMeaning"> | string
    meaningHindi?: StringNullableFilter<"VocabularyMeaning"> | string | null
    exampleSentence?: StringNullableFilter<"VocabularyMeaning"> | string | null
    synonyms?: JsonNullableFilter<"VocabularyMeaning">
    antonyms?: JsonNullableFilter<"VocabularyMeaning">
    createdAt?: DateTimeFilter<"VocabularyMeaning"> | Date | string
    updatedAt?: DateTimeFilter<"VocabularyMeaning"> | Date | string
  }

  export type UserVocabularyUpsertWithWhereUniqueWithoutWordInput = {
    where: UserVocabularyWhereUniqueInput
    update: XOR<UserVocabularyUpdateWithoutWordInput, UserVocabularyUncheckedUpdateWithoutWordInput>
    create: XOR<UserVocabularyCreateWithoutWordInput, UserVocabularyUncheckedCreateWithoutWordInput>
  }

  export type UserVocabularyUpdateWithWhereUniqueWithoutWordInput = {
    where: UserVocabularyWhereUniqueInput
    data: XOR<UserVocabularyUpdateWithoutWordInput, UserVocabularyUncheckedUpdateWithoutWordInput>
  }

  export type UserVocabularyUpdateManyWithWhereWithoutWordInput = {
    where: UserVocabularyScalarWhereInput
    data: XOR<UserVocabularyUpdateManyMutationInput, UserVocabularyUncheckedUpdateManyWithoutWordInput>
  }

  export type UserVocabularyScalarWhereInput = {
    AND?: UserVocabularyScalarWhereInput | UserVocabularyScalarWhereInput[]
    OR?: UserVocabularyScalarWhereInput[]
    NOT?: UserVocabularyScalarWhereInput | UserVocabularyScalarWhereInput[]
    id?: StringFilter<"UserVocabulary"> | string
    userId?: StringFilter<"UserVocabulary"> | string
    wordId?: StringFilter<"UserVocabulary"> | string
    status?: EnumUserWordStatusFilter<"UserVocabulary"> | $Enums.UserWordStatus
    confidence?: IntFilter<"UserVocabulary"> | number
    isFavorite?: BoolFilter<"UserVocabulary"> | boolean
    reviewCount?: IntFilter<"UserVocabulary"> | number
    correctCount?: IntFilter<"UserVocabulary"> | number
    wrongCount?: IntFilter<"UserVocabulary"> | number
    lastReviewed?: DateTimeNullableFilter<"UserVocabulary"> | Date | string | null
    nextReview?: DateTimeNullableFilter<"UserVocabulary"> | Date | string | null
    notes?: StringNullableFilter<"UserVocabulary"> | string | null
    createdAt?: DateTimeFilter<"UserVocabulary"> | Date | string
    updatedAt?: DateTimeFilter<"UserVocabulary"> | Date | string
  }

  export type VocabularyWordCreateWithoutMeaningsInput = {
    id?: string
    word: string
    pronunciation?: string | null
    difficulty?: $Enums.WordDifficulty
    category?: string | null
    status?: $Enums.WordStatus
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userWords?: UserVocabularyCreateNestedManyWithoutWordInput
  }

  export type VocabularyWordUncheckedCreateWithoutMeaningsInput = {
    id?: string
    word: string
    pronunciation?: string | null
    difficulty?: $Enums.WordDifficulty
    category?: string | null
    status?: $Enums.WordStatus
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userWords?: UserVocabularyUncheckedCreateNestedManyWithoutWordInput
  }

  export type VocabularyWordCreateOrConnectWithoutMeaningsInput = {
    where: VocabularyWordWhereUniqueInput
    create: XOR<VocabularyWordCreateWithoutMeaningsInput, VocabularyWordUncheckedCreateWithoutMeaningsInput>
  }

  export type VocabularyWordUpsertWithoutMeaningsInput = {
    update: XOR<VocabularyWordUpdateWithoutMeaningsInput, VocabularyWordUncheckedUpdateWithoutMeaningsInput>
    create: XOR<VocabularyWordCreateWithoutMeaningsInput, VocabularyWordUncheckedCreateWithoutMeaningsInput>
    where?: VocabularyWordWhereInput
  }

  export type VocabularyWordUpdateToOneWithWhereWithoutMeaningsInput = {
    where?: VocabularyWordWhereInput
    data: XOR<VocabularyWordUpdateWithoutMeaningsInput, VocabularyWordUncheckedUpdateWithoutMeaningsInput>
  }

  export type VocabularyWordUpdateWithoutMeaningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumWordDifficultyFieldUpdateOperationsInput | $Enums.WordDifficulty
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userWords?: UserVocabularyUpdateManyWithoutWordNestedInput
  }

  export type VocabularyWordUncheckedUpdateWithoutMeaningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumWordDifficultyFieldUpdateOperationsInput | $Enums.WordDifficulty
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userWords?: UserVocabularyUncheckedUpdateManyWithoutWordNestedInput
  }

  export type VocabularyWordCreateWithoutUserWordsInput = {
    id?: string
    word: string
    pronunciation?: string | null
    difficulty?: $Enums.WordDifficulty
    category?: string | null
    status?: $Enums.WordStatus
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meanings?: VocabularyMeaningCreateNestedManyWithoutWordInput
  }

  export type VocabularyWordUncheckedCreateWithoutUserWordsInput = {
    id?: string
    word: string
    pronunciation?: string | null
    difficulty?: $Enums.WordDifficulty
    category?: string | null
    status?: $Enums.WordStatus
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meanings?: VocabularyMeaningUncheckedCreateNestedManyWithoutWordInput
  }

  export type VocabularyWordCreateOrConnectWithoutUserWordsInput = {
    where: VocabularyWordWhereUniqueInput
    create: XOR<VocabularyWordCreateWithoutUserWordsInput, VocabularyWordUncheckedCreateWithoutUserWordsInput>
  }

  export type VocabularyWordUpsertWithoutUserWordsInput = {
    update: XOR<VocabularyWordUpdateWithoutUserWordsInput, VocabularyWordUncheckedUpdateWithoutUserWordsInput>
    create: XOR<VocabularyWordCreateWithoutUserWordsInput, VocabularyWordUncheckedCreateWithoutUserWordsInput>
    where?: VocabularyWordWhereInput
  }

  export type VocabularyWordUpdateToOneWithWhereWithoutUserWordsInput = {
    where?: VocabularyWordWhereInput
    data: XOR<VocabularyWordUpdateWithoutUserWordsInput, VocabularyWordUncheckedUpdateWithoutUserWordsInput>
  }

  export type VocabularyWordUpdateWithoutUserWordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumWordDifficultyFieldUpdateOperationsInput | $Enums.WordDifficulty
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meanings?: VocabularyMeaningUpdateManyWithoutWordNestedInput
  }

  export type VocabularyWordUncheckedUpdateWithoutUserWordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumWordDifficultyFieldUpdateOperationsInput | $Enums.WordDifficulty
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meanings?: VocabularyMeaningUncheckedUpdateManyWithoutWordNestedInput
  }

  export type VocabularyMeaningCreateManyWordInput = {
    id?: string
    partOfSpeech: $Enums.PartOfSpeech
    meaning: string
    meaningHindi?: string | null
    exampleSentence?: string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyCreateManyWordInput = {
    id?: string
    userId: string
    status?: $Enums.UserWordStatus
    confidence?: number
    isFavorite?: boolean
    reviewCount?: number
    correctCount?: number
    wrongCount?: number
    lastReviewed?: Date | string | null
    nextReview?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VocabularyMeaningUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    meaning?: StringFieldUpdateOperationsInput | string
    meaningHindi?: NullableStringFieldUpdateOperationsInput | string | null
    exampleSentence?: NullableStringFieldUpdateOperationsInput | string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyMeaningUncheckedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    meaning?: StringFieldUpdateOperationsInput | string
    meaningHindi?: NullableStringFieldUpdateOperationsInput | string | null
    exampleSentence?: NullableStringFieldUpdateOperationsInput | string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyMeaningUncheckedUpdateManyWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    meaning?: StringFieldUpdateOperationsInput | string
    meaningHindi?: NullableStringFieldUpdateOperationsInput | string | null
    exampleSentence?: NullableStringFieldUpdateOperationsInput | string | null
    synonyms?: NullableJsonNullValueInput | InputJsonValue
    antonyms?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumUserWordStatusFieldUpdateOperationsInput | $Enums.UserWordStatus
    confidence?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastReviewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyUncheckedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumUserWordStatusFieldUpdateOperationsInput | $Enums.UserWordStatus
    confidence?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastReviewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyUncheckedUpdateManyWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumUserWordStatusFieldUpdateOperationsInput | $Enums.UserWordStatus
    confidence?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    wrongCount?: IntFieldUpdateOperationsInput | number
    lastReviewed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReview?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VocabularyWordCountOutputTypeDefaultArgs instead
     */
    export type VocabularyWordCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VocabularyWordCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VocabularyWordDefaultArgs instead
     */
    export type VocabularyWordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VocabularyWordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VocabularyMeaningDefaultArgs instead
     */
    export type VocabularyMeaningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VocabularyMeaningDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserVocabularyDefaultArgs instead
     */
    export type UserVocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserVocabularyDefaultArgs<ExtArgs>

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