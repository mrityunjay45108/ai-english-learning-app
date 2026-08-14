
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
 * Model UserXP
 * 
 */
export type UserXP = $Result.DefaultSelection<Prisma.$UserXPPayload>
/**
 * Model XPTransaction
 * 
 */
export type XPTransaction = $Result.DefaultSelection<Prisma.$XPTransactionPayload>
/**
 * Model UserStreak
 * 
 */
export type UserStreak = $Result.DefaultSelection<Prisma.$UserStreakPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model UserBadge
 * 
 */
export type UserBadge = $Result.DefaultSelection<Prisma.$UserBadgePayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model UserAchievement
 * 
 */
export type UserAchievement = $Result.DefaultSelection<Prisma.$UserAchievementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventType: {
  LESSON_COMPLETED: 'LESSON_COMPLETED',
  GRAMMAR_EXERCISE_COMPLETED: 'GRAMMAR_EXERCISE_COMPLETED',
  VOCABULARY_LEARNED: 'VOCABULARY_LEARNED',
  SPEAKING_PRACTICE: 'SPEAKING_PRACTICE',
  ASSESSMENT_COMPLETED: 'ASSESSMENT_COMPLETED',
  DAILY_STREAK_BONUS: 'DAILY_STREAK_BONUS',
  COURSE_COMPLETED: 'COURSE_COMPLETED'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const BadgeCategory: {
  LEARNING: 'LEARNING',
  STREAK: 'STREAK',
  ASSESSMENT: 'ASSESSMENT',
  SPEAKING: 'SPEAKING',
  VOCABULARY: 'VOCABULARY',
  GRAMMAR: 'GRAMMAR',
  SPECIAL: 'SPECIAL'
};

export type BadgeCategory = (typeof BadgeCategory)[keyof typeof BadgeCategory]


export const AchievementType: {
  XP_BASED: 'XP_BASED',
  STREAK_BASED: 'STREAK_BASED',
  ACTION_BASED: 'ACTION_BASED'
};

export type AchievementType = (typeof AchievementType)[keyof typeof AchievementType]

}

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type BadgeCategory = $Enums.BadgeCategory

export const BadgeCategory: typeof $Enums.BadgeCategory

export type AchievementType = $Enums.AchievementType

export const AchievementType: typeof $Enums.AchievementType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserXPS
 * const userXPS = await prisma.userXP.findMany()
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
   * // Fetch zero or more UserXPS
   * const userXPS = await prisma.userXP.findMany()
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
   * `prisma.userXP`: Exposes CRUD operations for the **UserXP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserXPS
    * const userXPS = await prisma.userXP.findMany()
    * ```
    */
  get userXP(): Prisma.UserXPDelegate<ExtArgs>;

  /**
   * `prisma.xPTransaction`: Exposes CRUD operations for the **XPTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more XPTransactions
    * const xPTransactions = await prisma.xPTransaction.findMany()
    * ```
    */
  get xPTransaction(): Prisma.XPTransactionDelegate<ExtArgs>;

  /**
   * `prisma.userStreak`: Exposes CRUD operations for the **UserStreak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStreaks
    * const userStreaks = await prisma.userStreak.findMany()
    * ```
    */
  get userStreak(): Prisma.UserStreakDelegate<ExtArgs>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs>;

  /**
   * `prisma.userBadge`: Exposes CRUD operations for the **UserBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBadges
    * const userBadges = await prisma.userBadge.findMany()
    * ```
    */
  get userBadge(): Prisma.UserBadgeDelegate<ExtArgs>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs>;

  /**
   * `prisma.userAchievement`: Exposes CRUD operations for the **UserAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAchievements
    * const userAchievements = await prisma.userAchievement.findMany()
    * ```
    */
  get userAchievement(): Prisma.UserAchievementDelegate<ExtArgs>;
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
    UserXP: 'UserXP',
    XPTransaction: 'XPTransaction',
    UserStreak: 'UserStreak',
    Badge: 'Badge',
    UserBadge: 'UserBadge',
    Achievement: 'Achievement',
    UserAchievement: 'UserAchievement'
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
      modelProps: "userXP" | "xPTransaction" | "userStreak" | "badge" | "userBadge" | "achievement" | "userAchievement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserXP: {
        payload: Prisma.$UserXPPayload<ExtArgs>
        fields: Prisma.UserXPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserXPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserXPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserXPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserXPPayload>
          }
          findFirst: {
            args: Prisma.UserXPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserXPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserXPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserXPPayload>
          }
          findMany: {
            args: Prisma.UserXPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserXPPayload>[]
          }
          create: {
            args: Prisma.UserXPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserXPPayload>
          }
          createMany: {
            args: Prisma.UserXPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserXPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserXPPayload>[]
          }
          delete: {
            args: Prisma.UserXPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserXPPayload>
          }
          update: {
            args: Prisma.UserXPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserXPPayload>
          }
          deleteMany: {
            args: Prisma.UserXPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserXPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserXPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserXPPayload>
          }
          aggregate: {
            args: Prisma.UserXPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserXP>
          }
          groupBy: {
            args: Prisma.UserXPGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserXPGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserXPCountArgs<ExtArgs>
            result: $Utils.Optional<UserXPCountAggregateOutputType> | number
          }
        }
      }
      XPTransaction: {
        payload: Prisma.$XPTransactionPayload<ExtArgs>
        fields: Prisma.XPTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.XPTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.XPTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPTransactionPayload>
          }
          findFirst: {
            args: Prisma.XPTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.XPTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPTransactionPayload>
          }
          findMany: {
            args: Prisma.XPTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPTransactionPayload>[]
          }
          create: {
            args: Prisma.XPTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPTransactionPayload>
          }
          createMany: {
            args: Prisma.XPTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.XPTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPTransactionPayload>[]
          }
          delete: {
            args: Prisma.XPTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPTransactionPayload>
          }
          update: {
            args: Prisma.XPTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPTransactionPayload>
          }
          deleteMany: {
            args: Prisma.XPTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.XPTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.XPTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPTransactionPayload>
          }
          aggregate: {
            args: Prisma.XPTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateXPTransaction>
          }
          groupBy: {
            args: Prisma.XPTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<XPTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.XPTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<XPTransactionCountAggregateOutputType> | number
          }
        }
      }
      UserStreak: {
        payload: Prisma.$UserStreakPayload<ExtArgs>
        fields: Prisma.UserStreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          findFirst: {
            args: Prisma.UserStreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          findMany: {
            args: Prisma.UserStreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>[]
          }
          create: {
            args: Prisma.UserStreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          createMany: {
            args: Prisma.UserStreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>[]
          }
          delete: {
            args: Prisma.UserStreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          update: {
            args: Prisma.UserStreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          deleteMany: {
            args: Prisma.UserStreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserStreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStreakPayload>
          }
          aggregate: {
            args: Prisma.UserStreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStreak>
          }
          groupBy: {
            args: Prisma.UserStreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStreakCountArgs<ExtArgs>
            result: $Utils.Optional<UserStreakCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      UserBadge: {
        payload: Prisma.$UserBadgePayload<ExtArgs>
        fields: Prisma.UserBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findFirst: {
            args: Prisma.UserBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findMany: {
            args: Prisma.UserBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          create: {
            args: Prisma.UserBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          createMany: {
            args: Prisma.UserBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          delete: {
            args: Prisma.UserBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          update: {
            args: Prisma.UserBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          deleteMany: {
            args: Prisma.UserBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          aggregate: {
            args: Prisma.UserBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBadge>
          }
          groupBy: {
            args: Prisma.UserBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      UserAchievement: {
        payload: Prisma.$UserAchievementPayload<ExtArgs>
        fields: Prisma.UserAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findFirst: {
            args: Prisma.UserAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findMany: {
            args: Prisma.UserAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          create: {
            args: Prisma.UserAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          createMany: {
            args: Prisma.UserAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          delete: {
            args: Prisma.UserAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          update: {
            args: Prisma.UserAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          deleteMany: {
            args: Prisma.UserAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          aggregate: {
            args: Prisma.UserAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAchievement>
          }
          groupBy: {
            args: Prisma.UserAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementCountAggregateOutputType> | number
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
   * Count Type UserXPCountOutputType
   */

  export type UserXPCountOutputType = {
    transactions: number
  }

  export type UserXPCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserXPCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserXPCountOutputType without action
   */
  export type UserXPCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXPCountOutputType
     */
    select?: UserXPCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserXPCountOutputType without action
   */
  export type UserXPCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: XPTransactionWhereInput
  }


  /**
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    userBadges: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | BadgeCountOutputTypeCountUserBadgesArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountUserBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }


  /**
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    userAchievements: number
  }

  export type AchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAchievements?: boolean | AchievementCountOutputTypeCountUserAchievementsArgs
  }

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountUserAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserXP
   */

  export type AggregateUserXP = {
    _count: UserXPCountAggregateOutputType | null
    _avg: UserXPAvgAggregateOutputType | null
    _sum: UserXPSumAggregateOutputType | null
    _min: UserXPMinAggregateOutputType | null
    _max: UserXPMaxAggregateOutputType | null
  }

  export type UserXPAvgAggregateOutputType = {
    totalXp: number | null
    currentLevel: number | null
    levelProgress: number | null
  }

  export type UserXPSumAggregateOutputType = {
    totalXp: number | null
    currentLevel: number | null
    levelProgress: number | null
  }

  export type UserXPMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalXp: number | null
    currentLevel: number | null
    levelProgress: number | null
    updatedAt: Date | null
  }

  export type UserXPMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalXp: number | null
    currentLevel: number | null
    levelProgress: number | null
    updatedAt: Date | null
  }

  export type UserXPCountAggregateOutputType = {
    id: number
    userId: number
    totalXp: number
    currentLevel: number
    levelProgress: number
    updatedAt: number
    _all: number
  }


  export type UserXPAvgAggregateInputType = {
    totalXp?: true
    currentLevel?: true
    levelProgress?: true
  }

  export type UserXPSumAggregateInputType = {
    totalXp?: true
    currentLevel?: true
    levelProgress?: true
  }

  export type UserXPMinAggregateInputType = {
    id?: true
    userId?: true
    totalXp?: true
    currentLevel?: true
    levelProgress?: true
    updatedAt?: true
  }

  export type UserXPMaxAggregateInputType = {
    id?: true
    userId?: true
    totalXp?: true
    currentLevel?: true
    levelProgress?: true
    updatedAt?: true
  }

  export type UserXPCountAggregateInputType = {
    id?: true
    userId?: true
    totalXp?: true
    currentLevel?: true
    levelProgress?: true
    updatedAt?: true
    _all?: true
  }

  export type UserXPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserXP to aggregate.
     */
    where?: UserXPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXPS to fetch.
     */
    orderBy?: UserXPOrderByWithRelationInput | UserXPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserXPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserXPS
    **/
    _count?: true | UserXPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserXPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserXPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserXPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserXPMaxAggregateInputType
  }

  export type GetUserXPAggregateType<T extends UserXPAggregateArgs> = {
        [P in keyof T & keyof AggregateUserXP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserXP[P]>
      : GetScalarType<T[P], AggregateUserXP[P]>
  }




  export type UserXPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserXPWhereInput
    orderBy?: UserXPOrderByWithAggregationInput | UserXPOrderByWithAggregationInput[]
    by: UserXPScalarFieldEnum[] | UserXPScalarFieldEnum
    having?: UserXPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserXPCountAggregateInputType | true
    _avg?: UserXPAvgAggregateInputType
    _sum?: UserXPSumAggregateInputType
    _min?: UserXPMinAggregateInputType
    _max?: UserXPMaxAggregateInputType
  }

  export type UserXPGroupByOutputType = {
    id: string
    userId: string
    totalXp: number
    currentLevel: number
    levelProgress: number
    updatedAt: Date
    _count: UserXPCountAggregateOutputType | null
    _avg: UserXPAvgAggregateOutputType | null
    _sum: UserXPSumAggregateOutputType | null
    _min: UserXPMinAggregateOutputType | null
    _max: UserXPMaxAggregateOutputType | null
  }

  type GetUserXPGroupByPayload<T extends UserXPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserXPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserXPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserXPGroupByOutputType[P]>
            : GetScalarType<T[P], UserXPGroupByOutputType[P]>
        }
      >
    >


  export type UserXPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    levelProgress?: boolean
    updatedAt?: boolean
    transactions?: boolean | UserXP$transactionsArgs<ExtArgs>
    _count?: boolean | UserXPCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userXP"]>

  export type UserXPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    levelProgress?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userXP"]>

  export type UserXPSelectScalar = {
    id?: boolean
    userId?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    levelProgress?: boolean
    updatedAt?: boolean
  }

  export type UserXPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserXP$transactionsArgs<ExtArgs>
    _count?: boolean | UserXPCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserXPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserXPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserXP"
    objects: {
      transactions: Prisma.$XPTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      totalXp: number
      currentLevel: number
      levelProgress: number
      updatedAt: Date
    }, ExtArgs["result"]["userXP"]>
    composites: {}
  }

  type UserXPGetPayload<S extends boolean | null | undefined | UserXPDefaultArgs> = $Result.GetResult<Prisma.$UserXPPayload, S>

  type UserXPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserXPFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserXPCountAggregateInputType | true
    }

  export interface UserXPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserXP'], meta: { name: 'UserXP' } }
    /**
     * Find zero or one UserXP that matches the filter.
     * @param {UserXPFindUniqueArgs} args - Arguments to find a UserXP
     * @example
     * // Get one UserXP
     * const userXP = await prisma.userXP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserXPFindUniqueArgs>(args: SelectSubset<T, UserXPFindUniqueArgs<ExtArgs>>): Prisma__UserXPClient<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserXP that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserXPFindUniqueOrThrowArgs} args - Arguments to find a UserXP
     * @example
     * // Get one UserXP
     * const userXP = await prisma.userXP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserXPFindUniqueOrThrowArgs>(args: SelectSubset<T, UserXPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserXPClient<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserXP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXPFindFirstArgs} args - Arguments to find a UserXP
     * @example
     * // Get one UserXP
     * const userXP = await prisma.userXP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserXPFindFirstArgs>(args?: SelectSubset<T, UserXPFindFirstArgs<ExtArgs>>): Prisma__UserXPClient<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserXP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXPFindFirstOrThrowArgs} args - Arguments to find a UserXP
     * @example
     * // Get one UserXP
     * const userXP = await prisma.userXP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserXPFindFirstOrThrowArgs>(args?: SelectSubset<T, UserXPFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserXPClient<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserXPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserXPS
     * const userXPS = await prisma.userXP.findMany()
     * 
     * // Get first 10 UserXPS
     * const userXPS = await prisma.userXP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userXPWithIdOnly = await prisma.userXP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserXPFindManyArgs>(args?: SelectSubset<T, UserXPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserXP.
     * @param {UserXPCreateArgs} args - Arguments to create a UserXP.
     * @example
     * // Create one UserXP
     * const UserXP = await prisma.userXP.create({
     *   data: {
     *     // ... data to create a UserXP
     *   }
     * })
     * 
     */
    create<T extends UserXPCreateArgs>(args: SelectSubset<T, UserXPCreateArgs<ExtArgs>>): Prisma__UserXPClient<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserXPS.
     * @param {UserXPCreateManyArgs} args - Arguments to create many UserXPS.
     * @example
     * // Create many UserXPS
     * const userXP = await prisma.userXP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserXPCreateManyArgs>(args?: SelectSubset<T, UserXPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserXPS and returns the data saved in the database.
     * @param {UserXPCreateManyAndReturnArgs} args - Arguments to create many UserXPS.
     * @example
     * // Create many UserXPS
     * const userXP = await prisma.userXP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserXPS and only return the `id`
     * const userXPWithIdOnly = await prisma.userXP.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserXPCreateManyAndReturnArgs>(args?: SelectSubset<T, UserXPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserXP.
     * @param {UserXPDeleteArgs} args - Arguments to delete one UserXP.
     * @example
     * // Delete one UserXP
     * const UserXP = await prisma.userXP.delete({
     *   where: {
     *     // ... filter to delete one UserXP
     *   }
     * })
     * 
     */
    delete<T extends UserXPDeleteArgs>(args: SelectSubset<T, UserXPDeleteArgs<ExtArgs>>): Prisma__UserXPClient<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserXP.
     * @param {UserXPUpdateArgs} args - Arguments to update one UserXP.
     * @example
     * // Update one UserXP
     * const userXP = await prisma.userXP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserXPUpdateArgs>(args: SelectSubset<T, UserXPUpdateArgs<ExtArgs>>): Prisma__UserXPClient<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserXPS.
     * @param {UserXPDeleteManyArgs} args - Arguments to filter UserXPS to delete.
     * @example
     * // Delete a few UserXPS
     * const { count } = await prisma.userXP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserXPDeleteManyArgs>(args?: SelectSubset<T, UserXPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserXPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserXPS
     * const userXP = await prisma.userXP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserXPUpdateManyArgs>(args: SelectSubset<T, UserXPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserXP.
     * @param {UserXPUpsertArgs} args - Arguments to update or create a UserXP.
     * @example
     * // Update or create a UserXP
     * const userXP = await prisma.userXP.upsert({
     *   create: {
     *     // ... data to create a UserXP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserXP we want to update
     *   }
     * })
     */
    upsert<T extends UserXPUpsertArgs>(args: SelectSubset<T, UserXPUpsertArgs<ExtArgs>>): Prisma__UserXPClient<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserXPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXPCountArgs} args - Arguments to filter UserXPS to count.
     * @example
     * // Count the number of UserXPS
     * const count = await prisma.userXP.count({
     *   where: {
     *     // ... the filter for the UserXPS we want to count
     *   }
     * })
    **/
    count<T extends UserXPCountArgs>(
      args?: Subset<T, UserXPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserXPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserXP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserXPAggregateArgs>(args: Subset<T, UserXPAggregateArgs>): Prisma.PrismaPromise<GetUserXPAggregateType<T>>

    /**
     * Group by UserXP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXPGroupByArgs} args - Group by arguments.
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
      T extends UserXPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserXPGroupByArgs['orderBy'] }
        : { orderBy?: UserXPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserXPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserXPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserXP model
   */
  readonly fields: UserXPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserXP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserXPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends UserXP$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, UserXP$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the UserXP model
   */ 
  interface UserXPFieldRefs {
    readonly id: FieldRef<"UserXP", 'String'>
    readonly userId: FieldRef<"UserXP", 'String'>
    readonly totalXp: FieldRef<"UserXP", 'Int'>
    readonly currentLevel: FieldRef<"UserXP", 'Int'>
    readonly levelProgress: FieldRef<"UserXP", 'Int'>
    readonly updatedAt: FieldRef<"UserXP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserXP findUnique
   */
  export type UserXPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserXPInclude<ExtArgs> | null
    /**
     * Filter, which UserXP to fetch.
     */
    where: UserXPWhereUniqueInput
  }

  /**
   * UserXP findUniqueOrThrow
   */
  export type UserXPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserXPInclude<ExtArgs> | null
    /**
     * Filter, which UserXP to fetch.
     */
    where: UserXPWhereUniqueInput
  }

  /**
   * UserXP findFirst
   */
  export type UserXPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserXPInclude<ExtArgs> | null
    /**
     * Filter, which UserXP to fetch.
     */
    where?: UserXPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXPS to fetch.
     */
    orderBy?: UserXPOrderByWithRelationInput | UserXPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXPS.
     */
    cursor?: UserXPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXPS.
     */
    distinct?: UserXPScalarFieldEnum | UserXPScalarFieldEnum[]
  }

  /**
   * UserXP findFirstOrThrow
   */
  export type UserXPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserXPInclude<ExtArgs> | null
    /**
     * Filter, which UserXP to fetch.
     */
    where?: UserXPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXPS to fetch.
     */
    orderBy?: UserXPOrderByWithRelationInput | UserXPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXPS.
     */
    cursor?: UserXPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXPS.
     */
    distinct?: UserXPScalarFieldEnum | UserXPScalarFieldEnum[]
  }

  /**
   * UserXP findMany
   */
  export type UserXPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserXPInclude<ExtArgs> | null
    /**
     * Filter, which UserXPS to fetch.
     */
    where?: UserXPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXPS to fetch.
     */
    orderBy?: UserXPOrderByWithRelationInput | UserXPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserXPS.
     */
    cursor?: UserXPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXPS.
     */
    skip?: number
    distinct?: UserXPScalarFieldEnum | UserXPScalarFieldEnum[]
  }

  /**
   * UserXP create
   */
  export type UserXPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserXPInclude<ExtArgs> | null
    /**
     * The data needed to create a UserXP.
     */
    data: XOR<UserXPCreateInput, UserXPUncheckedCreateInput>
  }

  /**
   * UserXP createMany
   */
  export type UserXPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserXPS.
     */
    data: UserXPCreateManyInput | UserXPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserXP createManyAndReturn
   */
  export type UserXPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserXPS.
     */
    data: UserXPCreateManyInput | UserXPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserXP update
   */
  export type UserXPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserXPInclude<ExtArgs> | null
    /**
     * The data needed to update a UserXP.
     */
    data: XOR<UserXPUpdateInput, UserXPUncheckedUpdateInput>
    /**
     * Choose, which UserXP to update.
     */
    where: UserXPWhereUniqueInput
  }

  /**
   * UserXP updateMany
   */
  export type UserXPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserXPS.
     */
    data: XOR<UserXPUpdateManyMutationInput, UserXPUncheckedUpdateManyInput>
    /**
     * Filter which UserXPS to update
     */
    where?: UserXPWhereInput
  }

  /**
   * UserXP upsert
   */
  export type UserXPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserXPInclude<ExtArgs> | null
    /**
     * The filter to search for the UserXP to update in case it exists.
     */
    where: UserXPWhereUniqueInput
    /**
     * In case the UserXP found by the `where` argument doesn't exist, create a new UserXP with this data.
     */
    create: XOR<UserXPCreateInput, UserXPUncheckedCreateInput>
    /**
     * In case the UserXP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserXPUpdateInput, UserXPUncheckedUpdateInput>
  }

  /**
   * UserXP delete
   */
  export type UserXPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserXPInclude<ExtArgs> | null
    /**
     * Filter which UserXP to delete.
     */
    where: UserXPWhereUniqueInput
  }

  /**
   * UserXP deleteMany
   */
  export type UserXPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserXPS to delete
     */
    where?: UserXPWhereInput
  }

  /**
   * UserXP.transactions
   */
  export type UserXP$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
    where?: XPTransactionWhereInput
    orderBy?: XPTransactionOrderByWithRelationInput | XPTransactionOrderByWithRelationInput[]
    cursor?: XPTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: XPTransactionScalarFieldEnum | XPTransactionScalarFieldEnum[]
  }

  /**
   * UserXP without action
   */
  export type UserXPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: UserXPSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserXPInclude<ExtArgs> | null
  }


  /**
   * Model XPTransaction
   */

  export type AggregateXPTransaction = {
    _count: XPTransactionCountAggregateOutputType | null
    _avg: XPTransactionAvgAggregateOutputType | null
    _sum: XPTransactionSumAggregateOutputType | null
    _min: XPTransactionMinAggregateOutputType | null
    _max: XPTransactionMaxAggregateOutputType | null
  }

  export type XPTransactionAvgAggregateOutputType = {
    xpEarned: number | null
    xpBalance: number | null
  }

  export type XPTransactionSumAggregateOutputType = {
    xpEarned: number | null
    xpBalance: number | null
  }

  export type XPTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventType: $Enums.EventType | null
    eventId: string | null
    xpEarned: number | null
    xpBalance: number | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type XPTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventType: $Enums.EventType | null
    eventId: string | null
    xpEarned: number | null
    xpBalance: number | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type XPTransactionCountAggregateOutputType = {
    id: number
    userId: number
    eventType: number
    eventId: number
    xpEarned: number
    xpBalance: number
    metadata: number
    timestamp: number
    createdAt: number
    _all: number
  }


  export type XPTransactionAvgAggregateInputType = {
    xpEarned?: true
    xpBalance?: true
  }

  export type XPTransactionSumAggregateInputType = {
    xpEarned?: true
    xpBalance?: true
  }

  export type XPTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    eventId?: true
    xpEarned?: true
    xpBalance?: true
    timestamp?: true
    createdAt?: true
  }

  export type XPTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    eventId?: true
    xpEarned?: true
    xpBalance?: true
    timestamp?: true
    createdAt?: true
  }

  export type XPTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    eventId?: true
    xpEarned?: true
    xpBalance?: true
    metadata?: true
    timestamp?: true
    createdAt?: true
    _all?: true
  }

  export type XPTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which XPTransaction to aggregate.
     */
    where?: XPTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XPTransactions to fetch.
     */
    orderBy?: XPTransactionOrderByWithRelationInput | XPTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: XPTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XPTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XPTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned XPTransactions
    **/
    _count?: true | XPTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: XPTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: XPTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: XPTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: XPTransactionMaxAggregateInputType
  }

  export type GetXPTransactionAggregateType<T extends XPTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateXPTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateXPTransaction[P]>
      : GetScalarType<T[P], AggregateXPTransaction[P]>
  }




  export type XPTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: XPTransactionWhereInput
    orderBy?: XPTransactionOrderByWithAggregationInput | XPTransactionOrderByWithAggregationInput[]
    by: XPTransactionScalarFieldEnum[] | XPTransactionScalarFieldEnum
    having?: XPTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: XPTransactionCountAggregateInputType | true
    _avg?: XPTransactionAvgAggregateInputType
    _sum?: XPTransactionSumAggregateInputType
    _min?: XPTransactionMinAggregateInputType
    _max?: XPTransactionMaxAggregateInputType
  }

  export type XPTransactionGroupByOutputType = {
    id: string
    userId: string
    eventType: $Enums.EventType
    eventId: string | null
    xpEarned: number
    xpBalance: number
    metadata: JsonValue | null
    timestamp: Date
    createdAt: Date
    _count: XPTransactionCountAggregateOutputType | null
    _avg: XPTransactionAvgAggregateOutputType | null
    _sum: XPTransactionSumAggregateOutputType | null
    _min: XPTransactionMinAggregateOutputType | null
    _max: XPTransactionMaxAggregateOutputType | null
  }

  type GetXPTransactionGroupByPayload<T extends XPTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<XPTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof XPTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], XPTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], XPTransactionGroupByOutputType[P]>
        }
      >
    >


  export type XPTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    eventId?: boolean
    xpEarned?: boolean
    xpBalance?: boolean
    metadata?: boolean
    timestamp?: boolean
    createdAt?: boolean
    user?: boolean | UserXPDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["xPTransaction"]>

  export type XPTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    eventId?: boolean
    xpEarned?: boolean
    xpBalance?: boolean
    metadata?: boolean
    timestamp?: boolean
    createdAt?: boolean
    user?: boolean | UserXPDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["xPTransaction"]>

  export type XPTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    eventType?: boolean
    eventId?: boolean
    xpEarned?: boolean
    xpBalance?: boolean
    metadata?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }

  export type XPTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserXPDefaultArgs<ExtArgs>
  }
  export type XPTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserXPDefaultArgs<ExtArgs>
  }

  export type $XPTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "XPTransaction"
    objects: {
      user: Prisma.$UserXPPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventType: $Enums.EventType
      eventId: string | null
      xpEarned: number
      xpBalance: number
      metadata: Prisma.JsonValue | null
      timestamp: Date
      createdAt: Date
    }, ExtArgs["result"]["xPTransaction"]>
    composites: {}
  }

  type XPTransactionGetPayload<S extends boolean | null | undefined | XPTransactionDefaultArgs> = $Result.GetResult<Prisma.$XPTransactionPayload, S>

  type XPTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<XPTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: XPTransactionCountAggregateInputType | true
    }

  export interface XPTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['XPTransaction'], meta: { name: 'XPTransaction' } }
    /**
     * Find zero or one XPTransaction that matches the filter.
     * @param {XPTransactionFindUniqueArgs} args - Arguments to find a XPTransaction
     * @example
     * // Get one XPTransaction
     * const xPTransaction = await prisma.xPTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends XPTransactionFindUniqueArgs>(args: SelectSubset<T, XPTransactionFindUniqueArgs<ExtArgs>>): Prisma__XPTransactionClient<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one XPTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {XPTransactionFindUniqueOrThrowArgs} args - Arguments to find a XPTransaction
     * @example
     * // Get one XPTransaction
     * const xPTransaction = await prisma.xPTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends XPTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, XPTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__XPTransactionClient<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first XPTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPTransactionFindFirstArgs} args - Arguments to find a XPTransaction
     * @example
     * // Get one XPTransaction
     * const xPTransaction = await prisma.xPTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends XPTransactionFindFirstArgs>(args?: SelectSubset<T, XPTransactionFindFirstArgs<ExtArgs>>): Prisma__XPTransactionClient<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first XPTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPTransactionFindFirstOrThrowArgs} args - Arguments to find a XPTransaction
     * @example
     * // Get one XPTransaction
     * const xPTransaction = await prisma.xPTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends XPTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, XPTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__XPTransactionClient<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more XPTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all XPTransactions
     * const xPTransactions = await prisma.xPTransaction.findMany()
     * 
     * // Get first 10 XPTransactions
     * const xPTransactions = await prisma.xPTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const xPTransactionWithIdOnly = await prisma.xPTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends XPTransactionFindManyArgs>(args?: SelectSubset<T, XPTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a XPTransaction.
     * @param {XPTransactionCreateArgs} args - Arguments to create a XPTransaction.
     * @example
     * // Create one XPTransaction
     * const XPTransaction = await prisma.xPTransaction.create({
     *   data: {
     *     // ... data to create a XPTransaction
     *   }
     * })
     * 
     */
    create<T extends XPTransactionCreateArgs>(args: SelectSubset<T, XPTransactionCreateArgs<ExtArgs>>): Prisma__XPTransactionClient<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many XPTransactions.
     * @param {XPTransactionCreateManyArgs} args - Arguments to create many XPTransactions.
     * @example
     * // Create many XPTransactions
     * const xPTransaction = await prisma.xPTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends XPTransactionCreateManyArgs>(args?: SelectSubset<T, XPTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many XPTransactions and returns the data saved in the database.
     * @param {XPTransactionCreateManyAndReturnArgs} args - Arguments to create many XPTransactions.
     * @example
     * // Create many XPTransactions
     * const xPTransaction = await prisma.xPTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many XPTransactions and only return the `id`
     * const xPTransactionWithIdOnly = await prisma.xPTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends XPTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, XPTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a XPTransaction.
     * @param {XPTransactionDeleteArgs} args - Arguments to delete one XPTransaction.
     * @example
     * // Delete one XPTransaction
     * const XPTransaction = await prisma.xPTransaction.delete({
     *   where: {
     *     // ... filter to delete one XPTransaction
     *   }
     * })
     * 
     */
    delete<T extends XPTransactionDeleteArgs>(args: SelectSubset<T, XPTransactionDeleteArgs<ExtArgs>>): Prisma__XPTransactionClient<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one XPTransaction.
     * @param {XPTransactionUpdateArgs} args - Arguments to update one XPTransaction.
     * @example
     * // Update one XPTransaction
     * const xPTransaction = await prisma.xPTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends XPTransactionUpdateArgs>(args: SelectSubset<T, XPTransactionUpdateArgs<ExtArgs>>): Prisma__XPTransactionClient<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more XPTransactions.
     * @param {XPTransactionDeleteManyArgs} args - Arguments to filter XPTransactions to delete.
     * @example
     * // Delete a few XPTransactions
     * const { count } = await prisma.xPTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends XPTransactionDeleteManyArgs>(args?: SelectSubset<T, XPTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more XPTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many XPTransactions
     * const xPTransaction = await prisma.xPTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends XPTransactionUpdateManyArgs>(args: SelectSubset<T, XPTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one XPTransaction.
     * @param {XPTransactionUpsertArgs} args - Arguments to update or create a XPTransaction.
     * @example
     * // Update or create a XPTransaction
     * const xPTransaction = await prisma.xPTransaction.upsert({
     *   create: {
     *     // ... data to create a XPTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the XPTransaction we want to update
     *   }
     * })
     */
    upsert<T extends XPTransactionUpsertArgs>(args: SelectSubset<T, XPTransactionUpsertArgs<ExtArgs>>): Prisma__XPTransactionClient<$Result.GetResult<Prisma.$XPTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of XPTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPTransactionCountArgs} args - Arguments to filter XPTransactions to count.
     * @example
     * // Count the number of XPTransactions
     * const count = await prisma.xPTransaction.count({
     *   where: {
     *     // ... the filter for the XPTransactions we want to count
     *   }
     * })
    **/
    count<T extends XPTransactionCountArgs>(
      args?: Subset<T, XPTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], XPTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a XPTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends XPTransactionAggregateArgs>(args: Subset<T, XPTransactionAggregateArgs>): Prisma.PrismaPromise<GetXPTransactionAggregateType<T>>

    /**
     * Group by XPTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPTransactionGroupByArgs} args - Group by arguments.
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
      T extends XPTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: XPTransactionGroupByArgs['orderBy'] }
        : { orderBy?: XPTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, XPTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetXPTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the XPTransaction model
   */
  readonly fields: XPTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for XPTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__XPTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserXPDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserXPDefaultArgs<ExtArgs>>): Prisma__UserXPClient<$Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the XPTransaction model
   */ 
  interface XPTransactionFieldRefs {
    readonly id: FieldRef<"XPTransaction", 'String'>
    readonly userId: FieldRef<"XPTransaction", 'String'>
    readonly eventType: FieldRef<"XPTransaction", 'EventType'>
    readonly eventId: FieldRef<"XPTransaction", 'String'>
    readonly xpEarned: FieldRef<"XPTransaction", 'Int'>
    readonly xpBalance: FieldRef<"XPTransaction", 'Int'>
    readonly metadata: FieldRef<"XPTransaction", 'Json'>
    readonly timestamp: FieldRef<"XPTransaction", 'DateTime'>
    readonly createdAt: FieldRef<"XPTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * XPTransaction findUnique
   */
  export type XPTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
    /**
     * Filter, which XPTransaction to fetch.
     */
    where: XPTransactionWhereUniqueInput
  }

  /**
   * XPTransaction findUniqueOrThrow
   */
  export type XPTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
    /**
     * Filter, which XPTransaction to fetch.
     */
    where: XPTransactionWhereUniqueInput
  }

  /**
   * XPTransaction findFirst
   */
  export type XPTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
    /**
     * Filter, which XPTransaction to fetch.
     */
    where?: XPTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XPTransactions to fetch.
     */
    orderBy?: XPTransactionOrderByWithRelationInput | XPTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for XPTransactions.
     */
    cursor?: XPTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XPTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XPTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of XPTransactions.
     */
    distinct?: XPTransactionScalarFieldEnum | XPTransactionScalarFieldEnum[]
  }

  /**
   * XPTransaction findFirstOrThrow
   */
  export type XPTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
    /**
     * Filter, which XPTransaction to fetch.
     */
    where?: XPTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XPTransactions to fetch.
     */
    orderBy?: XPTransactionOrderByWithRelationInput | XPTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for XPTransactions.
     */
    cursor?: XPTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XPTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XPTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of XPTransactions.
     */
    distinct?: XPTransactionScalarFieldEnum | XPTransactionScalarFieldEnum[]
  }

  /**
   * XPTransaction findMany
   */
  export type XPTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
    /**
     * Filter, which XPTransactions to fetch.
     */
    where?: XPTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XPTransactions to fetch.
     */
    orderBy?: XPTransactionOrderByWithRelationInput | XPTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing XPTransactions.
     */
    cursor?: XPTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XPTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XPTransactions.
     */
    skip?: number
    distinct?: XPTransactionScalarFieldEnum | XPTransactionScalarFieldEnum[]
  }

  /**
   * XPTransaction create
   */
  export type XPTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a XPTransaction.
     */
    data: XOR<XPTransactionCreateInput, XPTransactionUncheckedCreateInput>
  }

  /**
   * XPTransaction createMany
   */
  export type XPTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many XPTransactions.
     */
    data: XPTransactionCreateManyInput | XPTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * XPTransaction createManyAndReturn
   */
  export type XPTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many XPTransactions.
     */
    data: XPTransactionCreateManyInput | XPTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * XPTransaction update
   */
  export type XPTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a XPTransaction.
     */
    data: XOR<XPTransactionUpdateInput, XPTransactionUncheckedUpdateInput>
    /**
     * Choose, which XPTransaction to update.
     */
    where: XPTransactionWhereUniqueInput
  }

  /**
   * XPTransaction updateMany
   */
  export type XPTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update XPTransactions.
     */
    data: XOR<XPTransactionUpdateManyMutationInput, XPTransactionUncheckedUpdateManyInput>
    /**
     * Filter which XPTransactions to update
     */
    where?: XPTransactionWhereInput
  }

  /**
   * XPTransaction upsert
   */
  export type XPTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the XPTransaction to update in case it exists.
     */
    where: XPTransactionWhereUniqueInput
    /**
     * In case the XPTransaction found by the `where` argument doesn't exist, create a new XPTransaction with this data.
     */
    create: XOR<XPTransactionCreateInput, XPTransactionUncheckedCreateInput>
    /**
     * In case the XPTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<XPTransactionUpdateInput, XPTransactionUncheckedUpdateInput>
  }

  /**
   * XPTransaction delete
   */
  export type XPTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
    /**
     * Filter which XPTransaction to delete.
     */
    where: XPTransactionWhereUniqueInput
  }

  /**
   * XPTransaction deleteMany
   */
  export type XPTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which XPTransactions to delete
     */
    where?: XPTransactionWhereInput
  }

  /**
   * XPTransaction without action
   */
  export type XPTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPTransaction
     */
    select?: XPTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPTransactionInclude<ExtArgs> | null
  }


  /**
   * Model UserStreak
   */

  export type AggregateUserStreak = {
    _count: UserStreakCountAggregateOutputType | null
    _avg: UserStreakAvgAggregateOutputType | null
    _sum: UserStreakSumAggregateOutputType | null
    _min: UserStreakMinAggregateOutputType | null
    _max: UserStreakMaxAggregateOutputType | null
  }

  export type UserStreakAvgAggregateOutputType = {
    currentStreak: number | null
    bestStreak: number | null
  }

  export type UserStreakSumAggregateOutputType = {
    currentStreak: number | null
    bestStreak: number | null
  }

  export type UserStreakMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currentStreak: number | null
    bestStreak: number | null
    lastActivityDate: Date | null
    streakBonusClaimed: boolean | null
    updatedAt: Date | null
  }

  export type UserStreakMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currentStreak: number | null
    bestStreak: number | null
    lastActivityDate: Date | null
    streakBonusClaimed: boolean | null
    updatedAt: Date | null
  }

  export type UserStreakCountAggregateOutputType = {
    id: number
    userId: number
    currentStreak: number
    bestStreak: number
    lastActivityDate: number
    streakBonusClaimed: number
    updatedAt: number
    _all: number
  }


  export type UserStreakAvgAggregateInputType = {
    currentStreak?: true
    bestStreak?: true
  }

  export type UserStreakSumAggregateInputType = {
    currentStreak?: true
    bestStreak?: true
  }

  export type UserStreakMinAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    bestStreak?: true
    lastActivityDate?: true
    streakBonusClaimed?: true
    updatedAt?: true
  }

  export type UserStreakMaxAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    bestStreak?: true
    lastActivityDate?: true
    streakBonusClaimed?: true
    updatedAt?: true
  }

  export type UserStreakCountAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    bestStreak?: true
    lastActivityDate?: true
    streakBonusClaimed?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStreak to aggregate.
     */
    where?: UserStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStreaks to fetch.
     */
    orderBy?: UserStreakOrderByWithRelationInput | UserStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStreaks
    **/
    _count?: true | UserStreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStreakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStreakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStreakMaxAggregateInputType
  }

  export type GetUserStreakAggregateType<T extends UserStreakAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStreak[P]>
      : GetScalarType<T[P], AggregateUserStreak[P]>
  }




  export type UserStreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStreakWhereInput
    orderBy?: UserStreakOrderByWithAggregationInput | UserStreakOrderByWithAggregationInput[]
    by: UserStreakScalarFieldEnum[] | UserStreakScalarFieldEnum
    having?: UserStreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStreakCountAggregateInputType | true
    _avg?: UserStreakAvgAggregateInputType
    _sum?: UserStreakSumAggregateInputType
    _min?: UserStreakMinAggregateInputType
    _max?: UserStreakMaxAggregateInputType
  }

  export type UserStreakGroupByOutputType = {
    id: string
    userId: string
    currentStreak: number
    bestStreak: number
    lastActivityDate: Date
    streakBonusClaimed: boolean
    updatedAt: Date
    _count: UserStreakCountAggregateOutputType | null
    _avg: UserStreakAvgAggregateOutputType | null
    _sum: UserStreakSumAggregateOutputType | null
    _min: UserStreakMinAggregateOutputType | null
    _max: UserStreakMaxAggregateOutputType | null
  }

  type GetUserStreakGroupByPayload<T extends UserStreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStreakGroupByOutputType[P]>
            : GetScalarType<T[P], UserStreakGroupByOutputType[P]>
        }
      >
    >


  export type UserStreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    bestStreak?: boolean
    lastActivityDate?: boolean
    streakBonusClaimed?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userStreak"]>

  export type UserStreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    bestStreak?: boolean
    lastActivityDate?: boolean
    streakBonusClaimed?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userStreak"]>

  export type UserStreakSelectScalar = {
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    bestStreak?: boolean
    lastActivityDate?: boolean
    streakBonusClaimed?: boolean
    updatedAt?: boolean
  }


  export type $UserStreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStreak"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currentStreak: number
      bestStreak: number
      lastActivityDate: Date
      streakBonusClaimed: boolean
      updatedAt: Date
    }, ExtArgs["result"]["userStreak"]>
    composites: {}
  }

  type UserStreakGetPayload<S extends boolean | null | undefined | UserStreakDefaultArgs> = $Result.GetResult<Prisma.$UserStreakPayload, S>

  type UserStreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStreakFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStreakCountAggregateInputType | true
    }

  export interface UserStreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStreak'], meta: { name: 'UserStreak' } }
    /**
     * Find zero or one UserStreak that matches the filter.
     * @param {UserStreakFindUniqueArgs} args - Arguments to find a UserStreak
     * @example
     * // Get one UserStreak
     * const userStreak = await prisma.userStreak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStreakFindUniqueArgs>(args: SelectSubset<T, UserStreakFindUniqueArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserStreak that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserStreakFindUniqueOrThrowArgs} args - Arguments to find a UserStreak
     * @example
     * // Get one UserStreak
     * const userStreak = await prisma.userStreak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStreakFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserStreak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakFindFirstArgs} args - Arguments to find a UserStreak
     * @example
     * // Get one UserStreak
     * const userStreak = await prisma.userStreak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStreakFindFirstArgs>(args?: SelectSubset<T, UserStreakFindFirstArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserStreak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakFindFirstOrThrowArgs} args - Arguments to find a UserStreak
     * @example
     * // Get one UserStreak
     * const userStreak = await prisma.userStreak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStreakFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserStreaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStreaks
     * const userStreaks = await prisma.userStreak.findMany()
     * 
     * // Get first 10 UserStreaks
     * const userStreaks = await prisma.userStreak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStreakWithIdOnly = await prisma.userStreak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStreakFindManyArgs>(args?: SelectSubset<T, UserStreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserStreak.
     * @param {UserStreakCreateArgs} args - Arguments to create a UserStreak.
     * @example
     * // Create one UserStreak
     * const UserStreak = await prisma.userStreak.create({
     *   data: {
     *     // ... data to create a UserStreak
     *   }
     * })
     * 
     */
    create<T extends UserStreakCreateArgs>(args: SelectSubset<T, UserStreakCreateArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserStreaks.
     * @param {UserStreakCreateManyArgs} args - Arguments to create many UserStreaks.
     * @example
     * // Create many UserStreaks
     * const userStreak = await prisma.userStreak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStreakCreateManyArgs>(args?: SelectSubset<T, UserStreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStreaks and returns the data saved in the database.
     * @param {UserStreakCreateManyAndReturnArgs} args - Arguments to create many UserStreaks.
     * @example
     * // Create many UserStreaks
     * const userStreak = await prisma.userStreak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStreaks and only return the `id`
     * const userStreakWithIdOnly = await prisma.userStreak.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStreakCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserStreak.
     * @param {UserStreakDeleteArgs} args - Arguments to delete one UserStreak.
     * @example
     * // Delete one UserStreak
     * const UserStreak = await prisma.userStreak.delete({
     *   where: {
     *     // ... filter to delete one UserStreak
     *   }
     * })
     * 
     */
    delete<T extends UserStreakDeleteArgs>(args: SelectSubset<T, UserStreakDeleteArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserStreak.
     * @param {UserStreakUpdateArgs} args - Arguments to update one UserStreak.
     * @example
     * // Update one UserStreak
     * const userStreak = await prisma.userStreak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStreakUpdateArgs>(args: SelectSubset<T, UserStreakUpdateArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserStreaks.
     * @param {UserStreakDeleteManyArgs} args - Arguments to filter UserStreaks to delete.
     * @example
     * // Delete a few UserStreaks
     * const { count } = await prisma.userStreak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStreakDeleteManyArgs>(args?: SelectSubset<T, UserStreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStreaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStreaks
     * const userStreak = await prisma.userStreak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStreakUpdateManyArgs>(args: SelectSubset<T, UserStreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStreak.
     * @param {UserStreakUpsertArgs} args - Arguments to update or create a UserStreak.
     * @example
     * // Update or create a UserStreak
     * const userStreak = await prisma.userStreak.upsert({
     *   create: {
     *     // ... data to create a UserStreak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStreak we want to update
     *   }
     * })
     */
    upsert<T extends UserStreakUpsertArgs>(args: SelectSubset<T, UserStreakUpsertArgs<ExtArgs>>): Prisma__UserStreakClient<$Result.GetResult<Prisma.$UserStreakPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserStreaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakCountArgs} args - Arguments to filter UserStreaks to count.
     * @example
     * // Count the number of UserStreaks
     * const count = await prisma.userStreak.count({
     *   where: {
     *     // ... the filter for the UserStreaks we want to count
     *   }
     * })
    **/
    count<T extends UserStreakCountArgs>(
      args?: Subset<T, UserStreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStreak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStreakAggregateArgs>(args: Subset<T, UserStreakAggregateArgs>): Prisma.PrismaPromise<GetUserStreakAggregateType<T>>

    /**
     * Group by UserStreak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStreakGroupByArgs} args - Group by arguments.
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
      T extends UserStreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStreakGroupByArgs['orderBy'] }
        : { orderBy?: UserStreakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStreak model
   */
  readonly fields: UserStreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStreak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserStreak model
   */ 
  interface UserStreakFieldRefs {
    readonly id: FieldRef<"UserStreak", 'String'>
    readonly userId: FieldRef<"UserStreak", 'String'>
    readonly currentStreak: FieldRef<"UserStreak", 'Int'>
    readonly bestStreak: FieldRef<"UserStreak", 'Int'>
    readonly lastActivityDate: FieldRef<"UserStreak", 'DateTime'>
    readonly streakBonusClaimed: FieldRef<"UserStreak", 'Boolean'>
    readonly updatedAt: FieldRef<"UserStreak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStreak findUnique
   */
  export type UserStreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter, which UserStreak to fetch.
     */
    where: UserStreakWhereUniqueInput
  }

  /**
   * UserStreak findUniqueOrThrow
   */
  export type UserStreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter, which UserStreak to fetch.
     */
    where: UserStreakWhereUniqueInput
  }

  /**
   * UserStreak findFirst
   */
  export type UserStreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter, which UserStreak to fetch.
     */
    where?: UserStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStreaks to fetch.
     */
    orderBy?: UserStreakOrderByWithRelationInput | UserStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStreaks.
     */
    cursor?: UserStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStreaks.
     */
    distinct?: UserStreakScalarFieldEnum | UserStreakScalarFieldEnum[]
  }

  /**
   * UserStreak findFirstOrThrow
   */
  export type UserStreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter, which UserStreak to fetch.
     */
    where?: UserStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStreaks to fetch.
     */
    orderBy?: UserStreakOrderByWithRelationInput | UserStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStreaks.
     */
    cursor?: UserStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStreaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStreaks.
     */
    distinct?: UserStreakScalarFieldEnum | UserStreakScalarFieldEnum[]
  }

  /**
   * UserStreak findMany
   */
  export type UserStreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter, which UserStreaks to fetch.
     */
    where?: UserStreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStreaks to fetch.
     */
    orderBy?: UserStreakOrderByWithRelationInput | UserStreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStreaks.
     */
    cursor?: UserStreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStreaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStreaks.
     */
    skip?: number
    distinct?: UserStreakScalarFieldEnum | UserStreakScalarFieldEnum[]
  }

  /**
   * UserStreak create
   */
  export type UserStreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * The data needed to create a UserStreak.
     */
    data: XOR<UserStreakCreateInput, UserStreakUncheckedCreateInput>
  }

  /**
   * UserStreak createMany
   */
  export type UserStreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStreaks.
     */
    data: UserStreakCreateManyInput | UserStreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStreak createManyAndReturn
   */
  export type UserStreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserStreaks.
     */
    data: UserStreakCreateManyInput | UserStreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStreak update
   */
  export type UserStreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * The data needed to update a UserStreak.
     */
    data: XOR<UserStreakUpdateInput, UserStreakUncheckedUpdateInput>
    /**
     * Choose, which UserStreak to update.
     */
    where: UserStreakWhereUniqueInput
  }

  /**
   * UserStreak updateMany
   */
  export type UserStreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStreaks.
     */
    data: XOR<UserStreakUpdateManyMutationInput, UserStreakUncheckedUpdateManyInput>
    /**
     * Filter which UserStreaks to update
     */
    where?: UserStreakWhereInput
  }

  /**
   * UserStreak upsert
   */
  export type UserStreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * The filter to search for the UserStreak to update in case it exists.
     */
    where: UserStreakWhereUniqueInput
    /**
     * In case the UserStreak found by the `where` argument doesn't exist, create a new UserStreak with this data.
     */
    create: XOR<UserStreakCreateInput, UserStreakUncheckedCreateInput>
    /**
     * In case the UserStreak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStreakUpdateInput, UserStreakUncheckedUpdateInput>
  }

  /**
   * UserStreak delete
   */
  export type UserStreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
    /**
     * Filter which UserStreak to delete.
     */
    where: UserStreakWhereUniqueInput
  }

  /**
   * UserStreak deleteMany
   */
  export type UserStreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStreaks to delete
     */
    where?: UserStreakWhereInput
  }

  /**
   * UserStreak without action
   */
  export type UserStreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStreak
     */
    select?: UserStreakSelect<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    xpRequired: number | null
  }

  export type BadgeSumAggregateOutputType = {
    xpRequired: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    category: $Enums.BadgeCategory | null
    xpRequired: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    category: $Enums.BadgeCategory | null
    xpRequired: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    category: number
    xpRequired: number
    criteria: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    xpRequired?: true
  }

  export type BadgeSumAggregateInputType = {
    xpRequired?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    xpRequired?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    xpRequired?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    xpRequired?: true
    criteria?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    xpRequired: number | null
    criteria: JsonValue | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    xpRequired?: boolean
    criteria?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBadges?: boolean | Badge$userBadgesArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    xpRequired?: boolean
    criteria?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    xpRequired?: boolean
    criteria?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | Badge$userBadgesArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      userBadges: Prisma.$UserBadgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      icon: string
      category: $Enums.BadgeCategory
      xpRequired: number | null
      criteria: Prisma.JsonValue | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Badges and returns the data saved in the database.
     * @param {BadgeCreateManyAndReturnArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
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
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBadges<T extends Badge$userBadgesArgs<ExtArgs> = {}>(args?: Subset<T, Badge$userBadgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Badge model
   */ 
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'String'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly description: FieldRef<"Badge", 'String'>
    readonly icon: FieldRef<"Badge", 'String'>
    readonly category: FieldRef<"Badge", 'BadgeCategory'>
    readonly xpRequired: FieldRef<"Badge", 'Int'>
    readonly criteria: FieldRef<"Badge", 'Json'>
    readonly isActive: FieldRef<"Badge", 'Boolean'>
    readonly createdAt: FieldRef<"Badge", 'DateTime'>
    readonly updatedAt: FieldRef<"Badge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge createManyAndReturn
   */
  export type BadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
  }

  /**
   * Badge.userBadges
   */
  export type Badge$userBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model UserBadge
   */

  export type AggregateUserBadge = {
    _count: UserBadgeCountAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  export type UserBadgeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    badgeId: string | null
    earnedAt: Date | null
    isDisplayed: boolean | null
  }

  export type UserBadgeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    badgeId: string | null
    earnedAt: Date | null
    isDisplayed: boolean | null
  }

  export type UserBadgeCountAggregateOutputType = {
    id: number
    userId: number
    badgeId: number
    earnedAt: number
    metadata: number
    isDisplayed: number
    _all: number
  }


  export type UserBadgeMinAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
    isDisplayed?: true
  }

  export type UserBadgeMaxAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
    isDisplayed?: true
  }

  export type UserBadgeCountAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    earnedAt?: true
    metadata?: true
    isDisplayed?: true
    _all?: true
  }

  export type UserBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadge to aggregate.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBadges
    **/
    _count?: true | UserBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBadgeMaxAggregateInputType
  }

  export type GetUserBadgeAggregateType<T extends UserBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBadge[P]>
      : GetScalarType<T[P], AggregateUserBadge[P]>
  }




  export type UserBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithAggregationInput | UserBadgeOrderByWithAggregationInput[]
    by: UserBadgeScalarFieldEnum[] | UserBadgeScalarFieldEnum
    having?: UserBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBadgeCountAggregateInputType | true
    _min?: UserBadgeMinAggregateInputType
    _max?: UserBadgeMaxAggregateInputType
  }

  export type UserBadgeGroupByOutputType = {
    id: string
    userId: string
    badgeId: string
    earnedAt: Date
    metadata: JsonValue | null
    isDisplayed: boolean
    _count: UserBadgeCountAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  type GetUserBadgeGroupByPayload<T extends UserBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
        }
      >
    >


  export type UserBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
    metadata?: boolean
    isDisplayed?: boolean
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
    metadata?: boolean
    isDisplayed?: boolean
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectScalar = {
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    earnedAt?: boolean
    metadata?: boolean
    isDisplayed?: boolean
  }

  export type UserBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }

  export type $UserBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBadge"
    objects: {
      badge: Prisma.$BadgePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      badgeId: string
      earnedAt: Date
      metadata: Prisma.JsonValue | null
      isDisplayed: boolean
    }, ExtArgs["result"]["userBadge"]>
    composites: {}
  }

  type UserBadgeGetPayload<S extends boolean | null | undefined | UserBadgeDefaultArgs> = $Result.GetResult<Prisma.$UserBadgePayload, S>

  type UserBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserBadgeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserBadgeCountAggregateInputType | true
    }

  export interface UserBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBadge'], meta: { name: 'UserBadge' } }
    /**
     * Find zero or one UserBadge that matches the filter.
     * @param {UserBadgeFindUniqueArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBadgeFindUniqueArgs>(args: SelectSubset<T, UserBadgeFindUniqueArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserBadge that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserBadgeFindUniqueOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBadgeFindFirstArgs>(args?: SelectSubset<T, UserBadgeFindFirstArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBadges
     * const userBadges = await prisma.userBadge.findMany()
     * 
     * // Get first 10 UserBadges
     * const userBadges = await prisma.userBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBadgeFindManyArgs>(args?: SelectSubset<T, UserBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserBadge.
     * @param {UserBadgeCreateArgs} args - Arguments to create a UserBadge.
     * @example
     * // Create one UserBadge
     * const UserBadge = await prisma.userBadge.create({
     *   data: {
     *     // ... data to create a UserBadge
     *   }
     * })
     * 
     */
    create<T extends UserBadgeCreateArgs>(args: SelectSubset<T, UserBadgeCreateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserBadges.
     * @param {UserBadgeCreateManyArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBadgeCreateManyArgs>(args?: SelectSubset<T, UserBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBadges and returns the data saved in the database.
     * @param {UserBadgeCreateManyAndReturnArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserBadge.
     * @param {UserBadgeDeleteArgs} args - Arguments to delete one UserBadge.
     * @example
     * // Delete one UserBadge
     * const UserBadge = await prisma.userBadge.delete({
     *   where: {
     *     // ... filter to delete one UserBadge
     *   }
     * })
     * 
     */
    delete<T extends UserBadgeDeleteArgs>(args: SelectSubset<T, UserBadgeDeleteArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserBadge.
     * @param {UserBadgeUpdateArgs} args - Arguments to update one UserBadge.
     * @example
     * // Update one UserBadge
     * const userBadge = await prisma.userBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBadgeUpdateArgs>(args: SelectSubset<T, UserBadgeUpdateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserBadges.
     * @param {UserBadgeDeleteManyArgs} args - Arguments to filter UserBadges to delete.
     * @example
     * // Delete a few UserBadges
     * const { count } = await prisma.userBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBadgeDeleteManyArgs>(args?: SelectSubset<T, UserBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBadgeUpdateManyArgs>(args: SelectSubset<T, UserBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBadge.
     * @param {UserBadgeUpsertArgs} args - Arguments to update or create a UserBadge.
     * @example
     * // Update or create a UserBadge
     * const userBadge = await prisma.userBadge.upsert({
     *   create: {
     *     // ... data to create a UserBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBadge we want to update
     *   }
     * })
     */
    upsert<T extends UserBadgeUpsertArgs>(args: SelectSubset<T, UserBadgeUpsertArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeCountArgs} args - Arguments to filter UserBadges to count.
     * @example
     * // Count the number of UserBadges
     * const count = await prisma.userBadge.count({
     *   where: {
     *     // ... the filter for the UserBadges we want to count
     *   }
     * })
    **/
    count<T extends UserBadgeCountArgs>(
      args?: Subset<T, UserBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBadgeAggregateArgs>(args: Subset<T, UserBadgeAggregateArgs>): Prisma.PrismaPromise<GetUserBadgeAggregateType<T>>

    /**
     * Group by UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeGroupByArgs} args - Group by arguments.
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
      T extends UserBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBadgeGroupByArgs['orderBy'] }
        : { orderBy?: UserBadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBadge model
   */
  readonly fields: UserBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badge<T extends BadgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefaultArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserBadge model
   */ 
  interface UserBadgeFieldRefs {
    readonly id: FieldRef<"UserBadge", 'String'>
    readonly userId: FieldRef<"UserBadge", 'String'>
    readonly badgeId: FieldRef<"UserBadge", 'String'>
    readonly earnedAt: FieldRef<"UserBadge", 'DateTime'>
    readonly metadata: FieldRef<"UserBadge", 'Json'>
    readonly isDisplayed: FieldRef<"UserBadge", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserBadge findUnique
   */
  export type UserBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findUniqueOrThrow
   */
  export type UserBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findFirst
   */
  export type UserBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findFirstOrThrow
   */
  export type UserBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findMany
   */
  export type UserBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge create
   */
  export type UserBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBadge.
     */
    data: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
  }

  /**
   * UserBadge createMany
   */
  export type UserBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBadge createManyAndReturn
   */
  export type UserBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge update
   */
  export type UserBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBadge.
     */
    data: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
    /**
     * Choose, which UserBadge to update.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge updateMany
   */
  export type UserBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
  }

  /**
   * UserBadge upsert
   */
  export type UserBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBadge to update in case it exists.
     */
    where: UserBadgeWhereUniqueInput
    /**
     * In case the UserBadge found by the `where` argument doesn't exist, create a new UserBadge with this data.
     */
    create: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
    /**
     * In case the UserBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
  }

  /**
   * UserBadge delete
   */
  export type UserBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter which UserBadge to delete.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge deleteMany
   */
  export type UserBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadges to delete
     */
    where?: UserBadgeWhereInput
  }

  /**
   * UserBadge without action
   */
  export type UserBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    rewardXp: number | null
  }

  export type AchievementSumAggregateOutputType = {
    rewardXp: number | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: $Enums.AchievementType | null
    rewardXp: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: $Enums.AchievementType | null
    rewardXp: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    criteria: number
    rewardXp: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    rewardXp?: true
  }

  export type AchievementSumAggregateInputType = {
    rewardXp?: true
  }

  export type AchievementMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    rewardXp?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    rewardXp?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    criteria?: true
    rewardXp?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    name: string
    description: string
    type: $Enums.AchievementType
    criteria: JsonValue
    rewardXp: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    criteria?: boolean
    rewardXp?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAchievements?: boolean | Achievement$userAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    criteria?: boolean
    rewardXp?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    criteria?: boolean
    rewardXp?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAchievements?: boolean | Achievement$userAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      userAchievements: Prisma.$UserAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      type: $Enums.AchievementType
      criteria: Prisma.JsonValue
      rewardXp: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
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
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAchievements<T extends Achievement$userAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$userAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Achievement model
   */ 
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly name: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly type: FieldRef<"Achievement", 'AchievementType'>
    readonly criteria: FieldRef<"Achievement", 'Json'>
    readonly rewardXp: FieldRef<"Achievement", 'Int'>
    readonly isActive: FieldRef<"Achievement", 'Boolean'>
    readonly createdAt: FieldRef<"Achievement", 'DateTime'>
    readonly updatedAt: FieldRef<"Achievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
  }

  /**
   * Achievement.userAchievements
   */
  export type Achievement$userAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model UserAchievement
   */

  export type AggregateUserAchievement = {
    _count: UserAchievementCountAggregateOutputType | null
    _avg: UserAchievementAvgAggregateOutputType | null
    _sum: UserAchievementSumAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  export type UserAchievementAvgAggregateOutputType = {
    progress: number | null
  }

  export type UserAchievementSumAggregateOutputType = {
    progress: number | null
  }

  export type UserAchievementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    achievementId: string | null
    progress: number | null
    isCompleted: boolean | null
    completedAt: Date | null
    earnedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAchievementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    achievementId: string | null
    progress: number | null
    isCompleted: boolean | null
    completedAt: Date | null
    earnedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAchievementCountAggregateOutputType = {
    id: number
    userId: number
    achievementId: number
    progress: number
    isCompleted: number
    completedAt: number
    earnedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAchievementAvgAggregateInputType = {
    progress?: true
  }

  export type UserAchievementSumAggregateInputType = {
    progress?: true
  }

  export type UserAchievementMinAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    progress?: true
    isCompleted?: true
    completedAt?: true
    earnedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAchievementMaxAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    progress?: true
    isCompleted?: true
    completedAt?: true
    earnedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAchievementCountAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    progress?: true
    isCompleted?: true
    completedAt?: true
    earnedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievement to aggregate.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAchievements
    **/
    _count?: true | UserAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAchievementMaxAggregateInputType
  }

  export type GetUserAchievementAggregateType<T extends UserAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievement[P]>
      : GetScalarType<T[P], AggregateUserAchievement[P]>
  }




  export type UserAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithAggregationInput | UserAchievementOrderByWithAggregationInput[]
    by: UserAchievementScalarFieldEnum[] | UserAchievementScalarFieldEnum
    having?: UserAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAchievementCountAggregateInputType | true
    _avg?: UserAchievementAvgAggregateInputType
    _sum?: UserAchievementSumAggregateInputType
    _min?: UserAchievementMinAggregateInputType
    _max?: UserAchievementMaxAggregateInputType
  }

  export type UserAchievementGroupByOutputType = {
    id: string
    userId: string
    achievementId: string
    progress: number
    isCompleted: boolean
    completedAt: Date | null
    earnedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserAchievementCountAggregateOutputType | null
    _avg: UserAchievementAvgAggregateOutputType | null
    _sum: UserAchievementSumAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  type GetUserAchievementGroupByPayload<T extends UserAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
        }
      >
    >


  export type UserAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    progress?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    earnedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    progress?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    earnedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectScalar = {
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    progress?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    earnedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }

  export type $UserAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAchievement"
    objects: {
      achievement: Prisma.$AchievementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      achievementId: string
      progress: number
      isCompleted: boolean
      completedAt: Date | null
      earnedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAchievement"]>
    composites: {}
  }

  type UserAchievementGetPayload<S extends boolean | null | undefined | UserAchievementDefaultArgs> = $Result.GetResult<Prisma.$UserAchievementPayload, S>

  type UserAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAchievementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserAchievementCountAggregateInputType | true
    }

  export interface UserAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAchievement'], meta: { name: 'UserAchievement' } }
    /**
     * Find zero or one UserAchievement that matches the filter.
     * @param {UserAchievementFindUniqueArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievementFindUniqueArgs>(args: SelectSubset<T, UserAchievementFindUniqueArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserAchievement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserAchievementFindUniqueOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievementFindFirstArgs>(args?: SelectSubset<T, UserAchievementFindFirstArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany()
     * 
     * // Get first 10 UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAchievementFindManyArgs>(args?: SelectSubset<T, UserAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserAchievement.
     * @param {UserAchievementCreateArgs} args - Arguments to create a UserAchievement.
     * @example
     * // Create one UserAchievement
     * const UserAchievement = await prisma.userAchievement.create({
     *   data: {
     *     // ... data to create a UserAchievement
     *   }
     * })
     * 
     */
    create<T extends UserAchievementCreateArgs>(args: SelectSubset<T, UserAchievementCreateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserAchievements.
     * @param {UserAchievementCreateManyArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAchievementCreateManyArgs>(args?: SelectSubset<T, UserAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAchievements and returns the data saved in the database.
     * @param {UserAchievementCreateManyAndReturnArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserAchievement.
     * @param {UserAchievementDeleteArgs} args - Arguments to delete one UserAchievement.
     * @example
     * // Delete one UserAchievement
     * const UserAchievement = await prisma.userAchievement.delete({
     *   where: {
     *     // ... filter to delete one UserAchievement
     *   }
     * })
     * 
     */
    delete<T extends UserAchievementDeleteArgs>(args: SelectSubset<T, UserAchievementDeleteArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserAchievement.
     * @param {UserAchievementUpdateArgs} args - Arguments to update one UserAchievement.
     * @example
     * // Update one UserAchievement
     * const userAchievement = await prisma.userAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAchievementUpdateArgs>(args: SelectSubset<T, UserAchievementUpdateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserAchievements.
     * @param {UserAchievementDeleteManyArgs} args - Arguments to filter UserAchievements to delete.
     * @example
     * // Delete a few UserAchievements
     * const { count } = await prisma.userAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAchievementDeleteManyArgs>(args?: SelectSubset<T, UserAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAchievementUpdateManyArgs>(args: SelectSubset<T, UserAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAchievement.
     * @param {UserAchievementUpsertArgs} args - Arguments to update or create a UserAchievement.
     * @example
     * // Update or create a UserAchievement
     * const userAchievement = await prisma.userAchievement.upsert({
     *   create: {
     *     // ... data to create a UserAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievement we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievementUpsertArgs>(args: SelectSubset<T, UserAchievementUpsertArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementCountArgs} args - Arguments to filter UserAchievements to count.
     * @example
     * // Count the number of UserAchievements
     * const count = await prisma.userAchievement.count({
     *   where: {
     *     // ... the filter for the UserAchievements we want to count
     *   }
     * })
    **/
    count<T extends UserAchievementCountArgs>(
      args?: Subset<T, UserAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAchievementAggregateArgs>(args: Subset<T, UserAchievementAggregateArgs>): Prisma.PrismaPromise<GetUserAchievementAggregateType<T>>

    /**
     * Group by UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementGroupByArgs} args - Group by arguments.
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
      T extends UserAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievementGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAchievement model
   */
  readonly fields: UserAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementDefaultArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserAchievement model
   */ 
  interface UserAchievementFieldRefs {
    readonly id: FieldRef<"UserAchievement", 'String'>
    readonly userId: FieldRef<"UserAchievement", 'String'>
    readonly achievementId: FieldRef<"UserAchievement", 'String'>
    readonly progress: FieldRef<"UserAchievement", 'Int'>
    readonly isCompleted: FieldRef<"UserAchievement", 'Boolean'>
    readonly completedAt: FieldRef<"UserAchievement", 'DateTime'>
    readonly earnedAt: FieldRef<"UserAchievement", 'DateTime'>
    readonly createdAt: FieldRef<"UserAchievement", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAchievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAchievement findUnique
   */
  export type UserAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findUniqueOrThrow
   */
  export type UserAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findFirst
   */
  export type UserAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findFirstOrThrow
   */
  export type UserAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findMany
   */
  export type UserAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement create
   */
  export type UserAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAchievement.
     */
    data: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
  }

  /**
   * UserAchievement createMany
   */
  export type UserAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAchievement createManyAndReturn
   */
  export type UserAchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement update
   */
  export type UserAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAchievement.
     */
    data: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
    /**
     * Choose, which UserAchievement to update.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement updateMany
   */
  export type UserAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
  }

  /**
   * UserAchievement upsert
   */
  export type UserAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAchievement to update in case it exists.
     */
    where: UserAchievementWhereUniqueInput
    /**
     * In case the UserAchievement found by the `where` argument doesn't exist, create a new UserAchievement with this data.
     */
    create: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
    /**
     * In case the UserAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
  }

  /**
   * UserAchievement delete
   */
  export type UserAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter which UserAchievement to delete.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement deleteMany
   */
  export type UserAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievements to delete
     */
    where?: UserAchievementWhereInput
  }

  /**
   * UserAchievement without action
   */
  export type UserAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
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


  export const UserXPScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalXp: 'totalXp',
    currentLevel: 'currentLevel',
    levelProgress: 'levelProgress',
    updatedAt: 'updatedAt'
  };

  export type UserXPScalarFieldEnum = (typeof UserXPScalarFieldEnum)[keyof typeof UserXPScalarFieldEnum]


  export const XPTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventType: 'eventType',
    eventId: 'eventId',
    xpEarned: 'xpEarned',
    xpBalance: 'xpBalance',
    metadata: 'metadata',
    timestamp: 'timestamp',
    createdAt: 'createdAt'
  };

  export type XPTransactionScalarFieldEnum = (typeof XPTransactionScalarFieldEnum)[keyof typeof XPTransactionScalarFieldEnum]


  export const UserStreakScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentStreak: 'currentStreak',
    bestStreak: 'bestStreak',
    lastActivityDate: 'lastActivityDate',
    streakBonusClaimed: 'streakBonusClaimed',
    updatedAt: 'updatedAt'
  };

  export type UserStreakScalarFieldEnum = (typeof UserStreakScalarFieldEnum)[keyof typeof UserStreakScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    category: 'category',
    xpRequired: 'xpRequired',
    criteria: 'criteria',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const UserBadgeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    badgeId: 'badgeId',
    earnedAt: 'earnedAt',
    metadata: 'metadata',
    isDisplayed: 'isDisplayed'
  };

  export type UserBadgeScalarFieldEnum = (typeof UserBadgeScalarFieldEnum)[keyof typeof UserBadgeScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    criteria: 'criteria',
    rewardXp: 'rewardXp',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const UserAchievementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    achievementId: 'achievementId',
    progress: 'progress',
    isCompleted: 'isCompleted',
    completedAt: 'completedAt',
    earnedAt: 'earnedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAchievementScalarFieldEnum = (typeof UserAchievementScalarFieldEnum)[keyof typeof UserAchievementScalarFieldEnum]


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
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BadgeCategory'
   */
  export type EnumBadgeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BadgeCategory'>
    


  /**
   * Reference to a field of type 'BadgeCategory[]'
   */
  export type ListEnumBadgeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BadgeCategory[]'>
    


  /**
   * Reference to a field of type 'AchievementType'
   */
  export type EnumAchievementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementType'>
    


  /**
   * Reference to a field of type 'AchievementType[]'
   */
  export type ListEnumAchievementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementType[]'>
    


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


  export type UserXPWhereInput = {
    AND?: UserXPWhereInput | UserXPWhereInput[]
    OR?: UserXPWhereInput[]
    NOT?: UserXPWhereInput | UserXPWhereInput[]
    id?: StringFilter<"UserXP"> | string
    userId?: StringFilter<"UserXP"> | string
    totalXp?: IntFilter<"UserXP"> | number
    currentLevel?: IntFilter<"UserXP"> | number
    levelProgress?: IntFilter<"UserXP"> | number
    updatedAt?: DateTimeFilter<"UserXP"> | Date | string
    transactions?: XPTransactionListRelationFilter
  }

  export type UserXPOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    levelProgress?: SortOrder
    updatedAt?: SortOrder
    transactions?: XPTransactionOrderByRelationAggregateInput
  }

  export type UserXPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserXPWhereInput | UserXPWhereInput[]
    OR?: UserXPWhereInput[]
    NOT?: UserXPWhereInput | UserXPWhereInput[]
    totalXp?: IntFilter<"UserXP"> | number
    currentLevel?: IntFilter<"UserXP"> | number
    levelProgress?: IntFilter<"UserXP"> | number
    updatedAt?: DateTimeFilter<"UserXP"> | Date | string
    transactions?: XPTransactionListRelationFilter
  }, "id" | "userId">

  export type UserXPOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    levelProgress?: SortOrder
    updatedAt?: SortOrder
    _count?: UserXPCountOrderByAggregateInput
    _avg?: UserXPAvgOrderByAggregateInput
    _max?: UserXPMaxOrderByAggregateInput
    _min?: UserXPMinOrderByAggregateInput
    _sum?: UserXPSumOrderByAggregateInput
  }

  export type UserXPScalarWhereWithAggregatesInput = {
    AND?: UserXPScalarWhereWithAggregatesInput | UserXPScalarWhereWithAggregatesInput[]
    OR?: UserXPScalarWhereWithAggregatesInput[]
    NOT?: UserXPScalarWhereWithAggregatesInput | UserXPScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserXP"> | string
    userId?: StringWithAggregatesFilter<"UserXP"> | string
    totalXp?: IntWithAggregatesFilter<"UserXP"> | number
    currentLevel?: IntWithAggregatesFilter<"UserXP"> | number
    levelProgress?: IntWithAggregatesFilter<"UserXP"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"UserXP"> | Date | string
  }

  export type XPTransactionWhereInput = {
    AND?: XPTransactionWhereInput | XPTransactionWhereInput[]
    OR?: XPTransactionWhereInput[]
    NOT?: XPTransactionWhereInput | XPTransactionWhereInput[]
    id?: StringFilter<"XPTransaction"> | string
    userId?: StringFilter<"XPTransaction"> | string
    eventType?: EnumEventTypeFilter<"XPTransaction"> | $Enums.EventType
    eventId?: StringNullableFilter<"XPTransaction"> | string | null
    xpEarned?: IntFilter<"XPTransaction"> | number
    xpBalance?: IntFilter<"XPTransaction"> | number
    metadata?: JsonNullableFilter<"XPTransaction">
    timestamp?: DateTimeFilter<"XPTransaction"> | Date | string
    createdAt?: DateTimeFilter<"XPTransaction"> | Date | string
    user?: XOR<UserXPRelationFilter, UserXPWhereInput>
  }

  export type XPTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    eventId?: SortOrderInput | SortOrder
    xpEarned?: SortOrder
    xpBalance?: SortOrder
    metadata?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    user?: UserXPOrderByWithRelationInput
  }

  export type XPTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: XPTransactionWhereInput | XPTransactionWhereInput[]
    OR?: XPTransactionWhereInput[]
    NOT?: XPTransactionWhereInput | XPTransactionWhereInput[]
    userId?: StringFilter<"XPTransaction"> | string
    eventType?: EnumEventTypeFilter<"XPTransaction"> | $Enums.EventType
    eventId?: StringNullableFilter<"XPTransaction"> | string | null
    xpEarned?: IntFilter<"XPTransaction"> | number
    xpBalance?: IntFilter<"XPTransaction"> | number
    metadata?: JsonNullableFilter<"XPTransaction">
    timestamp?: DateTimeFilter<"XPTransaction"> | Date | string
    createdAt?: DateTimeFilter<"XPTransaction"> | Date | string
    user?: XOR<UserXPRelationFilter, UserXPWhereInput>
  }, "id">

  export type XPTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    eventId?: SortOrderInput | SortOrder
    xpEarned?: SortOrder
    xpBalance?: SortOrder
    metadata?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    _count?: XPTransactionCountOrderByAggregateInput
    _avg?: XPTransactionAvgOrderByAggregateInput
    _max?: XPTransactionMaxOrderByAggregateInput
    _min?: XPTransactionMinOrderByAggregateInput
    _sum?: XPTransactionSumOrderByAggregateInput
  }

  export type XPTransactionScalarWhereWithAggregatesInput = {
    AND?: XPTransactionScalarWhereWithAggregatesInput | XPTransactionScalarWhereWithAggregatesInput[]
    OR?: XPTransactionScalarWhereWithAggregatesInput[]
    NOT?: XPTransactionScalarWhereWithAggregatesInput | XPTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"XPTransaction"> | string
    userId?: StringWithAggregatesFilter<"XPTransaction"> | string
    eventType?: EnumEventTypeWithAggregatesFilter<"XPTransaction"> | $Enums.EventType
    eventId?: StringNullableWithAggregatesFilter<"XPTransaction"> | string | null
    xpEarned?: IntWithAggregatesFilter<"XPTransaction"> | number
    xpBalance?: IntWithAggregatesFilter<"XPTransaction"> | number
    metadata?: JsonNullableWithAggregatesFilter<"XPTransaction">
    timestamp?: DateTimeWithAggregatesFilter<"XPTransaction"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"XPTransaction"> | Date | string
  }

  export type UserStreakWhereInput = {
    AND?: UserStreakWhereInput | UserStreakWhereInput[]
    OR?: UserStreakWhereInput[]
    NOT?: UserStreakWhereInput | UserStreakWhereInput[]
    id?: StringFilter<"UserStreak"> | string
    userId?: StringFilter<"UserStreak"> | string
    currentStreak?: IntFilter<"UserStreak"> | number
    bestStreak?: IntFilter<"UserStreak"> | number
    lastActivityDate?: DateTimeFilter<"UserStreak"> | Date | string
    streakBonusClaimed?: BoolFilter<"UserStreak"> | boolean
    updatedAt?: DateTimeFilter<"UserStreak"> | Date | string
  }

  export type UserStreakOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    bestStreak?: SortOrder
    lastActivityDate?: SortOrder
    streakBonusClaimed?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserStreakWhereInput | UserStreakWhereInput[]
    OR?: UserStreakWhereInput[]
    NOT?: UserStreakWhereInput | UserStreakWhereInput[]
    currentStreak?: IntFilter<"UserStreak"> | number
    bestStreak?: IntFilter<"UserStreak"> | number
    lastActivityDate?: DateTimeFilter<"UserStreak"> | Date | string
    streakBonusClaimed?: BoolFilter<"UserStreak"> | boolean
    updatedAt?: DateTimeFilter<"UserStreak"> | Date | string
  }, "id" | "userId">

  export type UserStreakOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    bestStreak?: SortOrder
    lastActivityDate?: SortOrder
    streakBonusClaimed?: SortOrder
    updatedAt?: SortOrder
    _count?: UserStreakCountOrderByAggregateInput
    _avg?: UserStreakAvgOrderByAggregateInput
    _max?: UserStreakMaxOrderByAggregateInput
    _min?: UserStreakMinOrderByAggregateInput
    _sum?: UserStreakSumOrderByAggregateInput
  }

  export type UserStreakScalarWhereWithAggregatesInput = {
    AND?: UserStreakScalarWhereWithAggregatesInput | UserStreakScalarWhereWithAggregatesInput[]
    OR?: UserStreakScalarWhereWithAggregatesInput[]
    NOT?: UserStreakScalarWhereWithAggregatesInput | UserStreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStreak"> | string
    userId?: StringWithAggregatesFilter<"UserStreak"> | string
    currentStreak?: IntWithAggregatesFilter<"UserStreak"> | number
    bestStreak?: IntWithAggregatesFilter<"UserStreak"> | number
    lastActivityDate?: DateTimeWithAggregatesFilter<"UserStreak"> | Date | string
    streakBonusClaimed?: BoolWithAggregatesFilter<"UserStreak"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"UserStreak"> | Date | string
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: StringFilter<"Badge"> | string
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    icon?: StringFilter<"Badge"> | string
    category?: EnumBadgeCategoryFilter<"Badge"> | $Enums.BadgeCategory
    xpRequired?: IntNullableFilter<"Badge"> | number | null
    criteria?: JsonNullableFilter<"Badge">
    isActive?: BoolFilter<"Badge"> | boolean
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    updatedAt?: DateTimeFilter<"Badge"> | Date | string
    userBadges?: UserBadgeListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    xpRequired?: SortOrderInput | SortOrder
    criteria?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userBadges?: UserBadgeOrderByRelationAggregateInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    description?: StringFilter<"Badge"> | string
    icon?: StringFilter<"Badge"> | string
    category?: EnumBadgeCategoryFilter<"Badge"> | $Enums.BadgeCategory
    xpRequired?: IntNullableFilter<"Badge"> | number | null
    criteria?: JsonNullableFilter<"Badge">
    isActive?: BoolFilter<"Badge"> | boolean
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    updatedAt?: DateTimeFilter<"Badge"> | Date | string
    userBadges?: UserBadgeListRelationFilter
  }, "id" | "name">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    xpRequired?: SortOrderInput | SortOrder
    criteria?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Badge"> | string
    name?: StringWithAggregatesFilter<"Badge"> | string
    description?: StringWithAggregatesFilter<"Badge"> | string
    icon?: StringWithAggregatesFilter<"Badge"> | string
    category?: EnumBadgeCategoryWithAggregatesFilter<"Badge"> | $Enums.BadgeCategory
    xpRequired?: IntNullableWithAggregatesFilter<"Badge"> | number | null
    criteria?: JsonNullableWithAggregatesFilter<"Badge">
    isActive?: BoolWithAggregatesFilter<"Badge"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
  }

  export type UserBadgeWhereInput = {
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    id?: StringFilter<"UserBadge"> | string
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: StringFilter<"UserBadge"> | string
    earnedAt?: DateTimeFilter<"UserBadge"> | Date | string
    metadata?: JsonNullableFilter<"UserBadge">
    isDisplayed?: BoolFilter<"UserBadge"> | boolean
    badge?: XOR<BadgeRelationFilter, BadgeWhereInput>
  }

  export type UserBadgeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isDisplayed?: SortOrder
    badge?: BadgeOrderByWithRelationInput
  }

  export type UserBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_badgeId?: UserBadgeUserIdBadgeIdCompoundUniqueInput
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: StringFilter<"UserBadge"> | string
    earnedAt?: DateTimeFilter<"UserBadge"> | Date | string
    metadata?: JsonNullableFilter<"UserBadge">
    isDisplayed?: BoolFilter<"UserBadge"> | boolean
    badge?: XOR<BadgeRelationFilter, BadgeWhereInput>
  }, "id" | "userId_badgeId">

  export type UserBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isDisplayed?: SortOrder
    _count?: UserBadgeCountOrderByAggregateInput
    _max?: UserBadgeMaxOrderByAggregateInput
    _min?: UserBadgeMinOrderByAggregateInput
  }

  export type UserBadgeScalarWhereWithAggregatesInput = {
    AND?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    OR?: UserBadgeScalarWhereWithAggregatesInput[]
    NOT?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserBadge"> | string
    userId?: StringWithAggregatesFilter<"UserBadge"> | string
    badgeId?: StringWithAggregatesFilter<"UserBadge"> | string
    earnedAt?: DateTimeWithAggregatesFilter<"UserBadge"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"UserBadge">
    isDisplayed?: BoolWithAggregatesFilter<"UserBadge"> | boolean
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    type?: EnumAchievementTypeFilter<"Achievement"> | $Enums.AchievementType
    criteria?: JsonFilter<"Achievement">
    rewardXp?: IntFilter<"Achievement"> | number
    isActive?: BoolFilter<"Achievement"> | boolean
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    userAchievements?: UserAchievementListRelationFilter
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    criteria?: SortOrder
    rewardXp?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAchievements?: UserAchievementOrderByRelationAggregateInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    description?: StringFilter<"Achievement"> | string
    type?: EnumAchievementTypeFilter<"Achievement"> | $Enums.AchievementType
    criteria?: JsonFilter<"Achievement">
    rewardXp?: IntFilter<"Achievement"> | number
    isActive?: BoolFilter<"Achievement"> | boolean
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    userAchievements?: UserAchievementListRelationFilter
  }, "id" | "name">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    criteria?: SortOrder
    rewardXp?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    name?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    type?: EnumAchievementTypeWithAggregatesFilter<"Achievement"> | $Enums.AchievementType
    criteria?: JsonWithAggregatesFilter<"Achievement">
    rewardXp?: IntWithAggregatesFilter<"Achievement"> | number
    isActive?: BoolWithAggregatesFilter<"Achievement"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
  }

  export type UserAchievementWhereInput = {
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    progress?: IntFilter<"UserAchievement"> | number
    isCompleted?: BoolFilter<"UserAchievement"> | boolean
    completedAt?: DateTimeNullableFilter<"UserAchievement"> | Date | string | null
    earnedAt?: DateTimeNullableFilter<"UserAchievement"> | Date | string | null
    createdAt?: DateTimeFilter<"UserAchievement"> | Date | string
    updatedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    achievement?: XOR<AchievementRelationFilter, AchievementWhereInput>
  }

  export type UserAchievementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    progress?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    earnedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    achievement?: AchievementOrderByWithRelationInput
  }

  export type UserAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_achievementId?: UserAchievementUserIdAchievementIdCompoundUniqueInput
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    progress?: IntFilter<"UserAchievement"> | number
    isCompleted?: BoolFilter<"UserAchievement"> | boolean
    completedAt?: DateTimeNullableFilter<"UserAchievement"> | Date | string | null
    earnedAt?: DateTimeNullableFilter<"UserAchievement"> | Date | string | null
    createdAt?: DateTimeFilter<"UserAchievement"> | Date | string
    updatedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    achievement?: XOR<AchievementRelationFilter, AchievementWhereInput>
  }, "id" | "userId_achievementId">

  export type UserAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    progress?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    earnedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAchievementCountOrderByAggregateInput
    _avg?: UserAchievementAvgOrderByAggregateInput
    _max?: UserAchievementMaxOrderByAggregateInput
    _min?: UserAchievementMinOrderByAggregateInput
    _sum?: UserAchievementSumOrderByAggregateInput
  }

  export type UserAchievementScalarWhereWithAggregatesInput = {
    AND?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    OR?: UserAchievementScalarWhereWithAggregatesInput[]
    NOT?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAchievement"> | string
    userId?: StringWithAggregatesFilter<"UserAchievement"> | string
    achievementId?: StringWithAggregatesFilter<"UserAchievement"> | string
    progress?: IntWithAggregatesFilter<"UserAchievement"> | number
    isCompleted?: BoolWithAggregatesFilter<"UserAchievement"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserAchievement"> | Date | string | null
    earnedAt?: DateTimeNullableWithAggregatesFilter<"UserAchievement"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserAchievement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAchievement"> | Date | string
  }

  export type UserXPCreateInput = {
    id?: string
    userId: string
    totalXp?: number
    currentLevel?: number
    levelProgress?: number
    updatedAt?: Date | string
    transactions?: XPTransactionCreateNestedManyWithoutUserInput
  }

  export type UserXPUncheckedCreateInput = {
    id?: string
    userId: string
    totalXp?: number
    currentLevel?: number
    levelProgress?: number
    updatedAt?: Date | string
    transactions?: XPTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserXPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    levelProgress?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: XPTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserXPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    levelProgress?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: XPTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserXPCreateManyInput = {
    id?: string
    userId: string
    totalXp?: number
    currentLevel?: number
    levelProgress?: number
    updatedAt?: Date | string
  }

  export type UserXPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    levelProgress?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    levelProgress?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPTransactionCreateInput = {
    id?: string
    eventType: $Enums.EventType
    eventId?: string | null
    xpEarned: number
    xpBalance: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
    user: UserXPCreateNestedOneWithoutTransactionsInput
  }

  export type XPTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    eventType: $Enums.EventType
    eventId?: string | null
    xpEarned: number
    xpBalance: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type XPTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    xpEarned?: IntFieldUpdateOperationsInput | number
    xpBalance?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserXPUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type XPTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    xpEarned?: IntFieldUpdateOperationsInput | number
    xpBalance?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPTransactionCreateManyInput = {
    id?: string
    userId: string
    eventType: $Enums.EventType
    eventId?: string | null
    xpEarned: number
    xpBalance: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type XPTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    xpEarned?: IntFieldUpdateOperationsInput | number
    xpBalance?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    xpEarned?: IntFieldUpdateOperationsInput | number
    xpBalance?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStreakCreateInput = {
    id?: string
    userId: string
    currentStreak?: number
    bestStreak?: number
    lastActivityDate: Date | string
    streakBonusClaimed?: boolean
    updatedAt?: Date | string
  }

  export type UserStreakUncheckedCreateInput = {
    id?: string
    userId: string
    currentStreak?: number
    bestStreak?: number
    lastActivityDate: Date | string
    streakBonusClaimed?: boolean
    updatedAt?: Date | string
  }

  export type UserStreakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    streakBonusClaimed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStreakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    streakBonusClaimed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStreakCreateManyInput = {
    id?: string
    userId: string
    currentStreak?: number
    bestStreak?: number
    lastActivityDate: Date | string
    streakBonusClaimed?: boolean
    updatedAt?: Date | string
  }

  export type UserStreakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    streakBonusClaimed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStreakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    bestStreak?: IntFieldUpdateOperationsInput | number
    lastActivityDate?: DateTimeFieldUpdateOperationsInput | Date | string
    streakBonusClaimed?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeCreateInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    xpRequired?: number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userBadges?: UserBadgeCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    xpRequired?: number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgeUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    xpRequired?: number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateInput = {
    id?: string
    userId: string
    earnedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: boolean
    badge: BadgeCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateInput = {
    id?: string
    userId: string
    badgeId: string
    earnedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: boolean
  }

  export type UserBadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: BoolFieldUpdateOperationsInput | boolean
    badge?: BadgeUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserBadgeCreateManyInput = {
    id?: string
    userId: string
    badgeId: string
    earnedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: boolean
  }

  export type UserBadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserBadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AchievementCreateInput = {
    id?: string
    name: string
    description: string
    type: $Enums.AchievementType
    criteria: JsonNullValueInput | InputJsonValue
    rewardXp?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userAchievements?: UserAchievementCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    type: $Enums.AchievementType
    criteria: JsonNullValueInput | InputJsonValue
    rewardXp?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    criteria?: JsonNullValueInput | InputJsonValue
    rewardXp?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAchievements?: UserAchievementUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    criteria?: JsonNullValueInput | InputJsonValue
    rewardXp?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementCreateManyInput = {
    id?: string
    name: string
    description: string
    type: $Enums.AchievementType
    criteria: JsonNullValueInput | InputJsonValue
    rewardXp?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    criteria?: JsonNullValueInput | InputJsonValue
    rewardXp?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    criteria?: JsonNullValueInput | InputJsonValue
    rewardXp?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateInput = {
    id?: string
    userId: string
    progress?: number
    isCompleted?: boolean
    completedAt?: Date | string | null
    earnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    achievement: AchievementCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementUncheckedCreateInput = {
    id?: string
    userId: string
    achievementId: string
    progress?: number
    isCompleted?: boolean
    completedAt?: Date | string | null
    earnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateManyInput = {
    id?: string
    userId: string
    achievementId: string
    progress?: number
    isCompleted?: boolean
    completedAt?: Date | string | null
    earnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type XPTransactionListRelationFilter = {
    every?: XPTransactionWhereInput
    some?: XPTransactionWhereInput
    none?: XPTransactionWhereInput
  }

  export type XPTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserXPCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    levelProgress?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserXPAvgOrderByAggregateInput = {
    totalXp?: SortOrder
    currentLevel?: SortOrder
    levelProgress?: SortOrder
  }

  export type UserXPMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    levelProgress?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserXPMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    levelProgress?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserXPSumOrderByAggregateInput = {
    totalXp?: SortOrder
    currentLevel?: SortOrder
    levelProgress?: SortOrder
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

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
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

  export type UserXPRelationFilter = {
    is?: UserXPWhereInput
    isNot?: UserXPWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type XPTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    eventId?: SortOrder
    xpEarned?: SortOrder
    xpBalance?: SortOrder
    metadata?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type XPTransactionAvgOrderByAggregateInput = {
    xpEarned?: SortOrder
    xpBalance?: SortOrder
  }

  export type XPTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    eventId?: SortOrder
    xpEarned?: SortOrder
    xpBalance?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type XPTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    eventId?: SortOrder
    xpEarned?: SortOrder
    xpBalance?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type XPTransactionSumOrderByAggregateInput = {
    xpEarned?: SortOrder
    xpBalance?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserStreakCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    bestStreak?: SortOrder
    lastActivityDate?: SortOrder
    streakBonusClaimed?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStreakAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
    bestStreak?: SortOrder
  }

  export type UserStreakMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    bestStreak?: SortOrder
    lastActivityDate?: SortOrder
    streakBonusClaimed?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStreakMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    bestStreak?: SortOrder
    lastActivityDate?: SortOrder
    streakBonusClaimed?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStreakSumOrderByAggregateInput = {
    currentStreak?: SortOrder
    bestStreak?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumBadgeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeCategory | EnumBadgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeCategoryFilter<$PrismaModel> | $Enums.BadgeCategory
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

  export type UserBadgeListRelationFilter = {
    every?: UserBadgeWhereInput
    some?: UserBadgeWhereInput
    none?: UserBadgeWhereInput
  }

  export type UserBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    xpRequired?: SortOrder
    criteria?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    xpRequired?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    xpRequired?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    xpRequired?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    xpRequired?: SortOrder
  }

  export type EnumBadgeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeCategory | EnumBadgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.BadgeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBadgeCategoryFilter<$PrismaModel>
    _max?: NestedEnumBadgeCategoryFilter<$PrismaModel>
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

  export type BadgeRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type UserBadgeUserIdBadgeIdCompoundUniqueInput = {
    userId: string
    badgeId: string
  }

  export type UserBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
    metadata?: SortOrder
    isDisplayed?: SortOrder
  }

  export type UserBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
    isDisplayed?: SortOrder
  }

  export type UserBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    earnedAt?: SortOrder
    isDisplayed?: SortOrder
  }

  export type EnumAchievementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeFilter<$PrismaModel> | $Enums.AchievementType
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

  export type UserAchievementListRelationFilter = {
    every?: UserAchievementWhereInput
    some?: UserAchievementWhereInput
    none?: UserAchievementWhereInput
  }

  export type UserAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    criteria?: SortOrder
    rewardXp?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    rewardXp?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    rewardXp?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    rewardXp?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    rewardXp?: SortOrder
  }

  export type EnumAchievementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AchievementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementTypeFilter<$PrismaModel>
    _max?: NestedEnumAchievementTypeFilter<$PrismaModel>
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

  export type AchievementRelationFilter = {
    is?: AchievementWhereInput
    isNot?: AchievementWhereInput
  }

  export type UserAchievementUserIdAchievementIdCompoundUniqueInput = {
    userId: string
    achievementId: string
  }

  export type UserAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    progress?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
    earnedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAchievementAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type UserAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    progress?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
    earnedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    progress?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
    earnedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAchievementSumOrderByAggregateInput = {
    progress?: SortOrder
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

  export type XPTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<XPTransactionCreateWithoutUserInput, XPTransactionUncheckedCreateWithoutUserInput> | XPTransactionCreateWithoutUserInput[] | XPTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XPTransactionCreateOrConnectWithoutUserInput | XPTransactionCreateOrConnectWithoutUserInput[]
    createMany?: XPTransactionCreateManyUserInputEnvelope
    connect?: XPTransactionWhereUniqueInput | XPTransactionWhereUniqueInput[]
  }

  export type XPTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<XPTransactionCreateWithoutUserInput, XPTransactionUncheckedCreateWithoutUserInput> | XPTransactionCreateWithoutUserInput[] | XPTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XPTransactionCreateOrConnectWithoutUserInput | XPTransactionCreateOrConnectWithoutUserInput[]
    createMany?: XPTransactionCreateManyUserInputEnvelope
    connect?: XPTransactionWhereUniqueInput | XPTransactionWhereUniqueInput[]
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

  export type XPTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<XPTransactionCreateWithoutUserInput, XPTransactionUncheckedCreateWithoutUserInput> | XPTransactionCreateWithoutUserInput[] | XPTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XPTransactionCreateOrConnectWithoutUserInput | XPTransactionCreateOrConnectWithoutUserInput[]
    upsert?: XPTransactionUpsertWithWhereUniqueWithoutUserInput | XPTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: XPTransactionCreateManyUserInputEnvelope
    set?: XPTransactionWhereUniqueInput | XPTransactionWhereUniqueInput[]
    disconnect?: XPTransactionWhereUniqueInput | XPTransactionWhereUniqueInput[]
    delete?: XPTransactionWhereUniqueInput | XPTransactionWhereUniqueInput[]
    connect?: XPTransactionWhereUniqueInput | XPTransactionWhereUniqueInput[]
    update?: XPTransactionUpdateWithWhereUniqueWithoutUserInput | XPTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: XPTransactionUpdateManyWithWhereWithoutUserInput | XPTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: XPTransactionScalarWhereInput | XPTransactionScalarWhereInput[]
  }

  export type XPTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<XPTransactionCreateWithoutUserInput, XPTransactionUncheckedCreateWithoutUserInput> | XPTransactionCreateWithoutUserInput[] | XPTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XPTransactionCreateOrConnectWithoutUserInput | XPTransactionCreateOrConnectWithoutUserInput[]
    upsert?: XPTransactionUpsertWithWhereUniqueWithoutUserInput | XPTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: XPTransactionCreateManyUserInputEnvelope
    set?: XPTransactionWhereUniqueInput | XPTransactionWhereUniqueInput[]
    disconnect?: XPTransactionWhereUniqueInput | XPTransactionWhereUniqueInput[]
    delete?: XPTransactionWhereUniqueInput | XPTransactionWhereUniqueInput[]
    connect?: XPTransactionWhereUniqueInput | XPTransactionWhereUniqueInput[]
    update?: XPTransactionUpdateWithWhereUniqueWithoutUserInput | XPTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: XPTransactionUpdateManyWithWhereWithoutUserInput | XPTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: XPTransactionScalarWhereInput | XPTransactionScalarWhereInput[]
  }

  export type UserXPCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserXPCreateWithoutTransactionsInput, UserXPUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserXPCreateOrConnectWithoutTransactionsInput
    connect?: UserXPWhereUniqueInput
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserXPUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserXPCreateWithoutTransactionsInput, UserXPUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserXPCreateOrConnectWithoutTransactionsInput
    upsert?: UserXPUpsertWithoutTransactionsInput
    connect?: UserXPWhereUniqueInput
    update?: XOR<XOR<UserXPUpdateToOneWithWhereWithoutTransactionsInput, UserXPUpdateWithoutTransactionsInput>, UserXPUncheckedUpdateWithoutTransactionsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserBadgeCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type EnumBadgeCategoryFieldUpdateOperationsInput = {
    set?: $Enums.BadgeCategory
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserBadgeUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type BadgeCreateNestedOneWithoutUserBadgesInput = {
    create?: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUserBadgesInput
    connect?: BadgeWhereUniqueInput
  }

  export type BadgeUpdateOneRequiredWithoutUserBadgesNestedInput = {
    create?: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUserBadgesInput
    upsert?: BadgeUpsertWithoutUserBadgesInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutUserBadgesInput, BadgeUpdateWithoutUserBadgesInput>, BadgeUncheckedUpdateWithoutUserBadgesInput>
  }

  export type UserAchievementCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type EnumAchievementTypeFieldUpdateOperationsInput = {
    set?: $Enums.AchievementType
  }

  export type UserAchievementUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type AchievementCreateNestedOneWithoutUserAchievementsInput = {
    create?: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUserAchievementsInput
    connect?: AchievementWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput = {
    create?: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUserAchievementsInput
    upsert?: AchievementUpsertWithoutUserAchievementsInput
    connect?: AchievementWhereUniqueInput
    update?: XOR<XOR<AchievementUpdateToOneWithWhereWithoutUserAchievementsInput, AchievementUpdateWithoutUserAchievementsInput>, AchievementUncheckedUpdateWithoutUserAchievementsInput>
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

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
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

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBadgeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeCategory | EnumBadgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeCategoryFilter<$PrismaModel> | $Enums.BadgeCategory
  }

  export type NestedEnumBadgeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeCategory | EnumBadgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.BadgeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBadgeCategoryFilter<$PrismaModel>
    _max?: NestedEnumBadgeCategoryFilter<$PrismaModel>
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

  export type NestedEnumAchievementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeFilter<$PrismaModel> | $Enums.AchievementType
  }

  export type NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AchievementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementTypeFilter<$PrismaModel>
    _max?: NestedEnumAchievementTypeFilter<$PrismaModel>
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

  export type XPTransactionCreateWithoutUserInput = {
    id?: string
    eventType: $Enums.EventType
    eventId?: string | null
    xpEarned: number
    xpBalance: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type XPTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    eventType: $Enums.EventType
    eventId?: string | null
    xpEarned: number
    xpBalance: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type XPTransactionCreateOrConnectWithoutUserInput = {
    where: XPTransactionWhereUniqueInput
    create: XOR<XPTransactionCreateWithoutUserInput, XPTransactionUncheckedCreateWithoutUserInput>
  }

  export type XPTransactionCreateManyUserInputEnvelope = {
    data: XPTransactionCreateManyUserInput | XPTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type XPTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: XPTransactionWhereUniqueInput
    update: XOR<XPTransactionUpdateWithoutUserInput, XPTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<XPTransactionCreateWithoutUserInput, XPTransactionUncheckedCreateWithoutUserInput>
  }

  export type XPTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: XPTransactionWhereUniqueInput
    data: XOR<XPTransactionUpdateWithoutUserInput, XPTransactionUncheckedUpdateWithoutUserInput>
  }

  export type XPTransactionUpdateManyWithWhereWithoutUserInput = {
    where: XPTransactionScalarWhereInput
    data: XOR<XPTransactionUpdateManyMutationInput, XPTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type XPTransactionScalarWhereInput = {
    AND?: XPTransactionScalarWhereInput | XPTransactionScalarWhereInput[]
    OR?: XPTransactionScalarWhereInput[]
    NOT?: XPTransactionScalarWhereInput | XPTransactionScalarWhereInput[]
    id?: StringFilter<"XPTransaction"> | string
    userId?: StringFilter<"XPTransaction"> | string
    eventType?: EnumEventTypeFilter<"XPTransaction"> | $Enums.EventType
    eventId?: StringNullableFilter<"XPTransaction"> | string | null
    xpEarned?: IntFilter<"XPTransaction"> | number
    xpBalance?: IntFilter<"XPTransaction"> | number
    metadata?: JsonNullableFilter<"XPTransaction">
    timestamp?: DateTimeFilter<"XPTransaction"> | Date | string
    createdAt?: DateTimeFilter<"XPTransaction"> | Date | string
  }

  export type UserXPCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    totalXp?: number
    currentLevel?: number
    levelProgress?: number
    updatedAt?: Date | string
  }

  export type UserXPUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    totalXp?: number
    currentLevel?: number
    levelProgress?: number
    updatedAt?: Date | string
  }

  export type UserXPCreateOrConnectWithoutTransactionsInput = {
    where: UserXPWhereUniqueInput
    create: XOR<UserXPCreateWithoutTransactionsInput, UserXPUncheckedCreateWithoutTransactionsInput>
  }

  export type UserXPUpsertWithoutTransactionsInput = {
    update: XOR<UserXPUpdateWithoutTransactionsInput, UserXPUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserXPCreateWithoutTransactionsInput, UserXPUncheckedCreateWithoutTransactionsInput>
    where?: UserXPWhereInput
  }

  export type UserXPUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserXPWhereInput
    data: XOR<UserXPUpdateWithoutTransactionsInput, UserXPUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserXPUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    levelProgress?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserXPUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    levelProgress?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateWithoutBadgeInput = {
    id?: string
    userId: string
    earnedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: boolean
  }

  export type UserBadgeUncheckedCreateWithoutBadgeInput = {
    id?: string
    userId: string
    earnedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: boolean
  }

  export type UserBadgeCreateOrConnectWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeCreateManyBadgeInputEnvelope = {
    data: UserBadgeCreateManyBadgeInput | UserBadgeCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutBadgeInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserBadgeScalarWhereInput = {
    AND?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    OR?: UserBadgeScalarWhereInput[]
    NOT?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    id?: StringFilter<"UserBadge"> | string
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: StringFilter<"UserBadge"> | string
    earnedAt?: DateTimeFilter<"UserBadge"> | Date | string
    metadata?: JsonNullableFilter<"UserBadge">
    isDisplayed?: BoolFilter<"UserBadge"> | boolean
  }

  export type BadgeCreateWithoutUserBadgesInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    xpRequired?: number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeUncheckedCreateWithoutUserBadgesInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    xpRequired?: number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgeCreateOrConnectWithoutUserBadgesInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
  }

  export type BadgeUpsertWithoutUserBadgesInput = {
    update: XOR<BadgeUpdateWithoutUserBadgesInput, BadgeUncheckedUpdateWithoutUserBadgesInput>
    create: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutUserBadgesInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutUserBadgesInput, BadgeUncheckedUpdateWithoutUserBadgesInput>
  }

  export type BadgeUpdateWithoutUserBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateWithoutUserBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    xpRequired?: NullableIntFieldUpdateOperationsInput | number | null
    criteria?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateWithoutAchievementInput = {
    id?: string
    userId: string
    progress?: number
    isCompleted?: boolean
    completedAt?: Date | string | null
    earnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAchievementUncheckedCreateWithoutAchievementInput = {
    id?: string
    userId: string
    progress?: number
    isCompleted?: boolean
    completedAt?: Date | string | null
    earnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAchievementCreateOrConnectWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementCreateManyAchievementInputEnvelope = {
    data: UserAchievementCreateManyAchievementInput | UserAchievementCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutAchievementInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutAchievementInput>
  }

  export type UserAchievementScalarWhereInput = {
    AND?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    OR?: UserAchievementScalarWhereInput[]
    NOT?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    progress?: IntFilter<"UserAchievement"> | number
    isCompleted?: BoolFilter<"UserAchievement"> | boolean
    completedAt?: DateTimeNullableFilter<"UserAchievement"> | Date | string | null
    earnedAt?: DateTimeNullableFilter<"UserAchievement"> | Date | string | null
    createdAt?: DateTimeFilter<"UserAchievement"> | Date | string
    updatedAt?: DateTimeFilter<"UserAchievement"> | Date | string
  }

  export type AchievementCreateWithoutUserAchievementsInput = {
    id?: string
    name: string
    description: string
    type: $Enums.AchievementType
    criteria: JsonNullValueInput | InputJsonValue
    rewardXp?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementUncheckedCreateWithoutUserAchievementsInput = {
    id?: string
    name: string
    description: string
    type: $Enums.AchievementType
    criteria: JsonNullValueInput | InputJsonValue
    rewardXp?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementCreateOrConnectWithoutUserAchievementsInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
  }

  export type AchievementUpsertWithoutUserAchievementsInput = {
    update: XOR<AchievementUpdateWithoutUserAchievementsInput, AchievementUncheckedUpdateWithoutUserAchievementsInput>
    create: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    where?: AchievementWhereInput
  }

  export type AchievementUpdateToOneWithWhereWithoutUserAchievementsInput = {
    where?: AchievementWhereInput
    data: XOR<AchievementUpdateWithoutUserAchievementsInput, AchievementUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type AchievementUpdateWithoutUserAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    criteria?: JsonNullValueInput | InputJsonValue
    rewardXp?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateWithoutUserAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    criteria?: JsonNullValueInput | InputJsonValue
    rewardXp?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPTransactionCreateManyUserInput = {
    id?: string
    eventType: $Enums.EventType
    eventId?: string | null
    xpEarned: number
    xpBalance: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    createdAt?: Date | string
  }

  export type XPTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    xpEarned?: IntFieldUpdateOperationsInput | number
    xpBalance?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    xpEarned?: IntFieldUpdateOperationsInput | number
    xpBalance?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    xpEarned?: IntFieldUpdateOperationsInput | number
    xpBalance?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateManyBadgeInput = {
    id?: string
    userId: string
    earnedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: boolean
  }

  export type UserBadgeUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserBadgeUncheckedUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDisplayed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAchievementCreateManyAchievementInput = {
    id?: string
    userId: string
    progress?: number
    isCompleted?: boolean
    completedAt?: Date | string | null
    earnedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAchievementUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    earnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserXPCountOutputTypeDefaultArgs instead
     */
    export type UserXPCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserXPCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BadgeCountOutputTypeDefaultArgs instead
     */
    export type BadgeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BadgeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AchievementCountOutputTypeDefaultArgs instead
     */
    export type AchievementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AchievementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserXPDefaultArgs instead
     */
    export type UserXPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserXPDefaultArgs<ExtArgs>
    /**
     * @deprecated Use XPTransactionDefaultArgs instead
     */
    export type XPTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = XPTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStreakDefaultArgs instead
     */
    export type UserStreakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStreakDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BadgeDefaultArgs instead
     */
    export type BadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BadgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserBadgeDefaultArgs instead
     */
    export type UserBadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserBadgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AchievementDefaultArgs instead
     */
    export type AchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AchievementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAchievementDefaultArgs instead
     */
    export type UserAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAchievementDefaultArgs<ExtArgs>

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