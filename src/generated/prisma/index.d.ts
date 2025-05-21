
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model OrderDetails
 * 
 */
export type OrderDetails = $Result.DefaultSelection<Prisma.$OrderDetailsPayload>
/**
 * Model MessageLog
 * 
 */
export type MessageLog = $Result.DefaultSelection<Prisma.$MessageLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
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
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderDetails`: Exposes CRUD operations for the **OrderDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetails.findMany()
    * ```
    */
  get orderDetails(): Prisma.OrderDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageLog`: Exposes CRUD operations for the **MessageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageLogs
    * const messageLogs = await prisma.messageLog.findMany()
    * ```
    */
  get messageLog(): Prisma.MessageLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Session: 'Session',
    OrderDetails: 'OrderDetails',
    MessageLog: 'MessageLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "orderDetails" | "messageLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      OrderDetails: {
        payload: Prisma.$OrderDetailsPayload<ExtArgs>
        fields: Prisma.OrderDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findMany: {
            args: Prisma.OrderDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          create: {
            args: Prisma.OrderDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          createMany: {
            args: Prisma.OrderDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          delete: {
            args: Prisma.OrderDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          update: {
            args: Prisma.OrderDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          upsert: {
            args: Prisma.OrderDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetails>
          }
          groupBy: {
            args: Prisma.OrderDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailsCountAggregateOutputType> | number
          }
        }
      }
      MessageLog: {
        payload: Prisma.$MessageLogPayload<ExtArgs>
        fields: Prisma.MessageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          findFirst: {
            args: Prisma.MessageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          findMany: {
            args: Prisma.MessageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          create: {
            args: Prisma.MessageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          createMany: {
            args: Prisma.MessageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          delete: {
            args: Prisma.MessageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          update: {
            args: Prisma.MessageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          deleteMany: {
            args: Prisma.MessageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>[]
          }
          upsert: {
            args: Prisma.MessageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLogPayload>
          }
          aggregate: {
            args: Prisma.MessageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageLog>
          }
          groupBy: {
            args: Prisma.MessageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageLogCountArgs<ExtArgs>
            result: $Utils.Optional<MessageLogCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    session?: SessionOmit
    orderDetails?: OrderDetailsOmit
    messageLog?: MessageLogOmit
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
    | 'updateManyAndReturn'
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
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    messages: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | SessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    lastQuestion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    lastQuestion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionId: number
    lastQuestion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionId?: true
    lastQuestion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionId?: true
    lastQuestion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionId?: true
    lastQuestion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionId: string
    lastQuestion: string | null
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    lastQuestion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderDetails?: boolean | Session$orderDetailsArgs<ExtArgs>
    messages?: boolean | Session$messagesArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    lastQuestion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    lastQuestion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionId?: boolean
    lastQuestion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "lastQuestion" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetails?: boolean | Session$orderDetailsArgs<ExtArgs>
    messages?: boolean | Session$messagesArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      orderDetails: Prisma.$OrderDetailsPayload<ExtArgs> | null
      messages: Prisma.$MessageLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      lastQuestion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderDetails<T extends Session$orderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Session$orderDetailsArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends Session$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Session$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionId: FieldRef<"Session", 'String'>
    readonly lastQuestion: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.orderDetails
   */
  export type Session$orderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
  }

  /**
   * Session.messages
   */
  export type Session$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    where?: MessageLogWhereInput
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    cursor?: MessageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetails
   */

  export type AggregateOrderDetails = {
    _count: OrderDetailsCountAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  export type OrderDetailsMinAggregateOutputType = {
    id: string | null
    pizza: string | null
    pizzaSize: string | null
    drink: string | null
    dessert: string | null
    sessionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderDetailsMaxAggregateOutputType = {
    id: string | null
    pizza: string | null
    pizzaSize: string | null
    drink: string | null
    dessert: string | null
    sessionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderDetailsCountAggregateOutputType = {
    id: number
    pizza: number
    pizzaSize: number
    drink: number
    dessert: number
    sessionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderDetailsMinAggregateInputType = {
    id?: true
    pizza?: true
    pizzaSize?: true
    drink?: true
    dessert?: true
    sessionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderDetailsMaxAggregateInputType = {
    id?: true
    pizza?: true
    pizzaSize?: true
    drink?: true
    dessert?: true
    sessionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderDetailsCountAggregateInputType = {
    id?: true
    pizza?: true
    pizzaSize?: true
    drink?: true
    dessert?: true
    sessionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to aggregate.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type GetOrderDetailsAggregateType<T extends OrderDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetails[P]>
      : GetScalarType<T[P], AggregateOrderDetails[P]>
  }




  export type OrderDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithAggregationInput | OrderDetailsOrderByWithAggregationInput[]
    by: OrderDetailsScalarFieldEnum[] | OrderDetailsScalarFieldEnum
    having?: OrderDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailsCountAggregateInputType | true
    _min?: OrderDetailsMinAggregateInputType
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type OrderDetailsGroupByOutputType = {
    id: string
    pizza: string | null
    pizzaSize: string | null
    drink: string | null
    dessert: string | null
    sessionId: string
    createdAt: Date
    updatedAt: Date
    _count: OrderDetailsCountAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  type GetOrderDetailsGroupByPayload<T extends OrderDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pizza?: boolean
    pizzaSize?: boolean
    drink?: boolean
    dessert?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pizza?: boolean
    pizzaSize?: boolean
    drink?: boolean
    dessert?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pizza?: boolean
    pizzaSize?: boolean
    drink?: boolean
    dessert?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectScalar = {
    id?: boolean
    pizza?: boolean
    pizzaSize?: boolean
    drink?: boolean
    dessert?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pizza" | "pizzaSize" | "drink" | "dessert" | "sessionId" | "createdAt" | "updatedAt", ExtArgs["result"]["orderDetails"]>
  export type OrderDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type OrderDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type OrderDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $OrderDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetails"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pizza: string | null
      pizzaSize: string | null
      drink: string | null
      dessert: string | null
      sessionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderDetails"]>
    composites: {}
  }

  type OrderDetailsGetPayload<S extends boolean | null | undefined | OrderDetailsDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailsPayload, S>

  type OrderDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderDetailsCountAggregateInputType | true
    }

  export interface OrderDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetails'], meta: { name: 'OrderDetails' } }
    /**
     * Find zero or one OrderDetails that matches the filter.
     * @param {OrderDetailsFindUniqueArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailsFindUniqueArgs>(args: SelectSubset<T, OrderDetailsFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderDetailsFindUniqueOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailsFindFirstArgs>(args?: SelectSubset<T, OrderDetailsFindFirstArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderDetailsFindManyArgs>(args?: SelectSubset<T, OrderDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderDetails.
     * @param {OrderDetailsCreateArgs} args - Arguments to create a OrderDetails.
     * @example
     * // Create one OrderDetails
     * const OrderDetails = await prisma.orderDetails.create({
     *   data: {
     *     // ... data to create a OrderDetails
     *   }
     * })
     * 
     */
    create<T extends OrderDetailsCreateArgs>(args: SelectSubset<T, OrderDetailsCreateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailsCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailsCreateManyArgs>(args?: SelectSubset<T, OrderDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderDetails and returns the data saved in the database.
     * @param {OrderDetailsCreateManyAndReturnArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetails = await prisma.orderDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderDetails and only return the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderDetails.
     * @param {OrderDetailsDeleteArgs} args - Arguments to delete one OrderDetails.
     * @example
     * // Delete one OrderDetails
     * const OrderDetails = await prisma.orderDetails.delete({
     *   where: {
     *     // ... filter to delete one OrderDetails
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailsDeleteArgs>(args: SelectSubset<T, OrderDetailsDeleteArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderDetails.
     * @param {OrderDetailsUpdateArgs} args - Arguments to update one OrderDetails.
     * @example
     * // Update one OrderDetails
     * const orderDetails = await prisma.orderDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailsUpdateArgs>(args: SelectSubset<T, OrderDetailsUpdateArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailsDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailsDeleteManyArgs>(args?: SelectSubset<T, OrderDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailsUpdateManyArgs>(args: SelectSubset<T, OrderDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails and returns the data updated in the database.
     * @param {OrderDetailsUpdateManyAndReturnArgs} args - Arguments to update many OrderDetails.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderDetails and only return the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderDetails.
     * @param {OrderDetailsUpsertArgs} args - Arguments to update or create a OrderDetails.
     * @example
     * // Update or create a OrderDetails
     * const orderDetails = await prisma.orderDetails.upsert({
     *   create: {
     *     // ... data to create a OrderDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetails we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailsUpsertArgs>(args: SelectSubset<T, OrderDetailsUpsertArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetails.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailsCountArgs>(
      args?: Subset<T, OrderDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderDetailsAggregateArgs>(args: Subset<T, OrderDetailsAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailsAggregateType<T>>

    /**
     * Group by OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsGroupByArgs} args - Group by arguments.
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
      T extends OrderDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailsGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetails model
   */
  readonly fields: OrderDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderDetails model
   */
  interface OrderDetailsFieldRefs {
    readonly id: FieldRef<"OrderDetails", 'String'>
    readonly pizza: FieldRef<"OrderDetails", 'String'>
    readonly pizzaSize: FieldRef<"OrderDetails", 'String'>
    readonly drink: FieldRef<"OrderDetails", 'String'>
    readonly dessert: FieldRef<"OrderDetails", 'String'>
    readonly sessionId: FieldRef<"OrderDetails", 'String'>
    readonly createdAt: FieldRef<"OrderDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetails findUnique
   */
  export type OrderDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findUniqueOrThrow
   */
  export type OrderDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails findFirst
   */
  export type OrderDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findFirstOrThrow
   */
  export type OrderDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails findMany
   */
  export type OrderDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }

  /**
   * OrderDetails create
   */
  export type OrderDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetails.
     */
    data: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
  }

  /**
   * OrderDetails createMany
   */
  export type OrderDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
  }

  /**
   * OrderDetails createManyAndReturn
   */
  export type OrderDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetails update
   */
  export type OrderDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetails.
     */
    data: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
    /**
     * Choose, which OrderDetails to update.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails updateMany
   */
  export type OrderDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
  }

  /**
   * OrderDetails updateManyAndReturn
   */
  export type OrderDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetails upsert
   */
  export type OrderDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetails to update in case it exists.
     */
    where: OrderDetailsWhereUniqueInput
    /**
     * In case the OrderDetails found by the `where` argument doesn't exist, create a new OrderDetails with this data.
     */
    create: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
    /**
     * In case the OrderDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
  }

  /**
   * OrderDetails delete
   */
  export type OrderDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter which OrderDetails to delete.
     */
    where: OrderDetailsWhereUniqueInput
  }

  /**
   * OrderDetails deleteMany
   */
  export type OrderDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailsWhereInput
    /**
     * Limit how many OrderDetails to delete.
     */
    limit?: number
  }

  /**
   * OrderDetails without action
   */
  export type OrderDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetails
     */
    omit?: OrderDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailsInclude<ExtArgs> | null
  }


  /**
   * Model MessageLog
   */

  export type AggregateMessageLog = {
    _count: MessageLogCountAggregateOutputType | null
    _min: MessageLogMinAggregateOutputType | null
    _max: MessageLogMaxAggregateOutputType | null
  }

  export type MessageLogMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    sender: string | null
    text: string | null
    timestamp: Date | null
  }

  export type MessageLogMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    sender: string | null
    text: string | null
    timestamp: Date | null
  }

  export type MessageLogCountAggregateOutputType = {
    id: number
    sessionId: number
    sender: number
    text: number
    timestamp: number
    _all: number
  }


  export type MessageLogMinAggregateInputType = {
    id?: true
    sessionId?: true
    sender?: true
    text?: true
    timestamp?: true
  }

  export type MessageLogMaxAggregateInputType = {
    id?: true
    sessionId?: true
    sender?: true
    text?: true
    timestamp?: true
  }

  export type MessageLogCountAggregateInputType = {
    id?: true
    sessionId?: true
    sender?: true
    text?: true
    timestamp?: true
    _all?: true
  }

  export type MessageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLog to aggregate.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageLogs
    **/
    _count?: true | MessageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageLogMaxAggregateInputType
  }

  export type GetMessageLogAggregateType<T extends MessageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageLog[P]>
      : GetScalarType<T[P], AggregateMessageLog[P]>
  }




  export type MessageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLogWhereInput
    orderBy?: MessageLogOrderByWithAggregationInput | MessageLogOrderByWithAggregationInput[]
    by: MessageLogScalarFieldEnum[] | MessageLogScalarFieldEnum
    having?: MessageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageLogCountAggregateInputType | true
    _min?: MessageLogMinAggregateInputType
    _max?: MessageLogMaxAggregateInputType
  }

  export type MessageLogGroupByOutputType = {
    id: string
    sessionId: string
    sender: string
    text: string
    timestamp: Date
    _count: MessageLogCountAggregateOutputType | null
    _min: MessageLogMinAggregateOutputType | null
    _max: MessageLogMaxAggregateOutputType | null
  }

  type GetMessageLogGroupByPayload<T extends MessageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageLogGroupByOutputType[P]>
            : GetScalarType<T[P], MessageLogGroupByOutputType[P]>
        }
      >
    >


  export type MessageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    text?: boolean
    timestamp?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    text?: boolean
    timestamp?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    text?: boolean
    timestamp?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLog"]>

  export type MessageLogSelectScalar = {
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    text?: boolean
    timestamp?: boolean
  }

  export type MessageLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "sender" | "text" | "timestamp", ExtArgs["result"]["messageLog"]>
  export type MessageLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type MessageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type MessageLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $MessageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageLog"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      sender: string
      text: string
      timestamp: Date
    }, ExtArgs["result"]["messageLog"]>
    composites: {}
  }

  type MessageLogGetPayload<S extends boolean | null | undefined | MessageLogDefaultArgs> = $Result.GetResult<Prisma.$MessageLogPayload, S>

  type MessageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageLogCountAggregateInputType | true
    }

  export interface MessageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageLog'], meta: { name: 'MessageLog' } }
    /**
     * Find zero or one MessageLog that matches the filter.
     * @param {MessageLogFindUniqueArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageLogFindUniqueArgs>(args: SelectSubset<T, MessageLogFindUniqueArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageLogFindUniqueOrThrowArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindFirstArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageLogFindFirstArgs>(args?: SelectSubset<T, MessageLogFindFirstArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindFirstOrThrowArgs} args - Arguments to find a MessageLog
     * @example
     * // Get one MessageLog
     * const messageLog = await prisma.messageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageLogs
     * const messageLogs = await prisma.messageLog.findMany()
     * 
     * // Get first 10 MessageLogs
     * const messageLogs = await prisma.messageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageLogFindManyArgs>(args?: SelectSubset<T, MessageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageLog.
     * @param {MessageLogCreateArgs} args - Arguments to create a MessageLog.
     * @example
     * // Create one MessageLog
     * const MessageLog = await prisma.messageLog.create({
     *   data: {
     *     // ... data to create a MessageLog
     *   }
     * })
     * 
     */
    create<T extends MessageLogCreateArgs>(args: SelectSubset<T, MessageLogCreateArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageLogs.
     * @param {MessageLogCreateManyArgs} args - Arguments to create many MessageLogs.
     * @example
     * // Create many MessageLogs
     * const messageLog = await prisma.messageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageLogCreateManyArgs>(args?: SelectSubset<T, MessageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageLogs and returns the data saved in the database.
     * @param {MessageLogCreateManyAndReturnArgs} args - Arguments to create many MessageLogs.
     * @example
     * // Create many MessageLogs
     * const messageLog = await prisma.messageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageLogs and only return the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageLog.
     * @param {MessageLogDeleteArgs} args - Arguments to delete one MessageLog.
     * @example
     * // Delete one MessageLog
     * const MessageLog = await prisma.messageLog.delete({
     *   where: {
     *     // ... filter to delete one MessageLog
     *   }
     * })
     * 
     */
    delete<T extends MessageLogDeleteArgs>(args: SelectSubset<T, MessageLogDeleteArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageLog.
     * @param {MessageLogUpdateArgs} args - Arguments to update one MessageLog.
     * @example
     * // Update one MessageLog
     * const messageLog = await prisma.messageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageLogUpdateArgs>(args: SelectSubset<T, MessageLogUpdateArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageLogs.
     * @param {MessageLogDeleteManyArgs} args - Arguments to filter MessageLogs to delete.
     * @example
     * // Delete a few MessageLogs
     * const { count } = await prisma.messageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageLogDeleteManyArgs>(args?: SelectSubset<T, MessageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageLogs
     * const messageLog = await prisma.messageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageLogUpdateManyArgs>(args: SelectSubset<T, MessageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLogs and returns the data updated in the database.
     * @param {MessageLogUpdateManyAndReturnArgs} args - Arguments to update many MessageLogs.
     * @example
     * // Update many MessageLogs
     * const messageLog = await prisma.messageLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageLogs and only return the `id`
     * const messageLogWithIdOnly = await prisma.messageLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageLog.
     * @param {MessageLogUpsertArgs} args - Arguments to update or create a MessageLog.
     * @example
     * // Update or create a MessageLog
     * const messageLog = await prisma.messageLog.upsert({
     *   create: {
     *     // ... data to create a MessageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageLog we want to update
     *   }
     * })
     */
    upsert<T extends MessageLogUpsertArgs>(args: SelectSubset<T, MessageLogUpsertArgs<ExtArgs>>): Prisma__MessageLogClient<$Result.GetResult<Prisma.$MessageLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogCountArgs} args - Arguments to filter MessageLogs to count.
     * @example
     * // Count the number of MessageLogs
     * const count = await prisma.messageLog.count({
     *   where: {
     *     // ... the filter for the MessageLogs we want to count
     *   }
     * })
    **/
    count<T extends MessageLogCountArgs>(
      args?: Subset<T, MessageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageLogAggregateArgs>(args: Subset<T, MessageLogAggregateArgs>): Prisma.PrismaPromise<GetMessageLogAggregateType<T>>

    /**
     * Group by MessageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLogGroupByArgs} args - Group by arguments.
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
      T extends MessageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageLogGroupByArgs['orderBy'] }
        : { orderBy?: MessageLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageLog model
   */
  readonly fields: MessageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MessageLog model
   */
  interface MessageLogFieldRefs {
    readonly id: FieldRef<"MessageLog", 'String'>
    readonly sessionId: FieldRef<"MessageLog", 'String'>
    readonly sender: FieldRef<"MessageLog", 'String'>
    readonly text: FieldRef<"MessageLog", 'String'>
    readonly timestamp: FieldRef<"MessageLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageLog findUnique
   */
  export type MessageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog findUniqueOrThrow
   */
  export type MessageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog findFirst
   */
  export type MessageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog findFirstOrThrow
   */
  export type MessageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLog to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLogs.
     */
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog findMany
   */
  export type MessageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter, which MessageLogs to fetch.
     */
    where?: MessageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLogs to fetch.
     */
    orderBy?: MessageLogOrderByWithRelationInput | MessageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageLogs.
     */
    cursor?: MessageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLogs.
     */
    skip?: number
    distinct?: MessageLogScalarFieldEnum | MessageLogScalarFieldEnum[]
  }

  /**
   * MessageLog create
   */
  export type MessageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageLog.
     */
    data: XOR<MessageLogCreateInput, MessageLogUncheckedCreateInput>
  }

  /**
   * MessageLog createMany
   */
  export type MessageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageLogs.
     */
    data: MessageLogCreateManyInput | MessageLogCreateManyInput[]
  }

  /**
   * MessageLog createManyAndReturn
   */
  export type MessageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * The data used to create many MessageLogs.
     */
    data: MessageLogCreateManyInput | MessageLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageLog update
   */
  export type MessageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageLog.
     */
    data: XOR<MessageLogUpdateInput, MessageLogUncheckedUpdateInput>
    /**
     * Choose, which MessageLog to update.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog updateMany
   */
  export type MessageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageLogs.
     */
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyInput>
    /**
     * Filter which MessageLogs to update
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to update.
     */
    limit?: number
  }

  /**
   * MessageLog updateManyAndReturn
   */
  export type MessageLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * The data used to update MessageLogs.
     */
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyInput>
    /**
     * Filter which MessageLogs to update
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageLog upsert
   */
  export type MessageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageLog to update in case it exists.
     */
    where: MessageLogWhereUniqueInput
    /**
     * In case the MessageLog found by the `where` argument doesn't exist, create a new MessageLog with this data.
     */
    create: XOR<MessageLogCreateInput, MessageLogUncheckedCreateInput>
    /**
     * In case the MessageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageLogUpdateInput, MessageLogUncheckedUpdateInput>
  }

  /**
   * MessageLog delete
   */
  export type MessageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
    /**
     * Filter which MessageLog to delete.
     */
    where: MessageLogWhereUniqueInput
  }

  /**
   * MessageLog deleteMany
   */
  export type MessageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLogs to delete
     */
    where?: MessageLogWhereInput
    /**
     * Limit how many MessageLogs to delete.
     */
    limit?: number
  }

  /**
   * MessageLog without action
   */
  export type MessageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLog
     */
    select?: MessageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLog
     */
    omit?: MessageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    lastQuestion: 'lastQuestion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const OrderDetailsScalarFieldEnum: {
    id: 'id',
    pizza: 'pizza',
    pizzaSize: 'pizzaSize',
    drink: 'drink',
    dessert: 'dessert',
    sessionId: 'sessionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderDetailsScalarFieldEnum = (typeof OrderDetailsScalarFieldEnum)[keyof typeof OrderDetailsScalarFieldEnum]


  export const MessageLogScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    sender: 'sender',
    text: 'text',
    timestamp: 'timestamp'
  };

  export type MessageLogScalarFieldEnum = (typeof MessageLogScalarFieldEnum)[keyof typeof MessageLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionId?: StringFilter<"Session"> | string
    lastQuestion?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    orderDetails?: XOR<OrderDetailsNullableScalarRelationFilter, OrderDetailsWhereInput> | null
    messages?: MessageLogListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    lastQuestion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderDetails?: OrderDetailsOrderByWithRelationInput
    messages?: MessageLogOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    lastQuestion?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    orderDetails?: XOR<OrderDetailsNullableScalarRelationFilter, OrderDetailsWhereInput> | null
    messages?: MessageLogListRelationFilter
  }, "id" | "sessionId">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    lastQuestion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionId?: StringWithAggregatesFilter<"Session"> | string
    lastQuestion?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type OrderDetailsWhereInput = {
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    id?: StringFilter<"OrderDetails"> | string
    pizza?: StringNullableFilter<"OrderDetails"> | string | null
    pizzaSize?: StringNullableFilter<"OrderDetails"> | string | null
    drink?: StringNullableFilter<"OrderDetails"> | string | null
    dessert?: StringNullableFilter<"OrderDetails"> | string | null
    sessionId?: StringFilter<"OrderDetails"> | string
    createdAt?: DateTimeFilter<"OrderDetails"> | Date | string
    updatedAt?: DateTimeFilter<"OrderDetails"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type OrderDetailsOrderByWithRelationInput = {
    id?: SortOrder
    pizza?: SortOrderInput | SortOrder
    pizzaSize?: SortOrderInput | SortOrder
    drink?: SortOrderInput | SortOrder
    dessert?: SortOrderInput | SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type OrderDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    pizza?: StringNullableFilter<"OrderDetails"> | string | null
    pizzaSize?: StringNullableFilter<"OrderDetails"> | string | null
    drink?: StringNullableFilter<"OrderDetails"> | string | null
    dessert?: StringNullableFilter<"OrderDetails"> | string | null
    createdAt?: DateTimeFilter<"OrderDetails"> | Date | string
    updatedAt?: DateTimeFilter<"OrderDetails"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "id" | "sessionId">

  export type OrderDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    pizza?: SortOrderInput | SortOrder
    pizzaSize?: SortOrderInput | SortOrder
    drink?: SortOrderInput | SortOrder
    dessert?: SortOrderInput | SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderDetailsCountOrderByAggregateInput
    _max?: OrderDetailsMaxOrderByAggregateInput
    _min?: OrderDetailsMinOrderByAggregateInput
  }

  export type OrderDetailsScalarWhereWithAggregatesInput = {
    AND?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    OR?: OrderDetailsScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderDetails"> | string
    pizza?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    pizzaSize?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    drink?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    dessert?: StringNullableWithAggregatesFilter<"OrderDetails"> | string | null
    sessionId?: StringWithAggregatesFilter<"OrderDetails"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderDetails"> | Date | string
  }

  export type MessageLogWhereInput = {
    AND?: MessageLogWhereInput | MessageLogWhereInput[]
    OR?: MessageLogWhereInput[]
    NOT?: MessageLogWhereInput | MessageLogWhereInput[]
    id?: StringFilter<"MessageLog"> | string
    sessionId?: StringFilter<"MessageLog"> | string
    sender?: StringFilter<"MessageLog"> | string
    text?: StringFilter<"MessageLog"> | string
    timestamp?: DateTimeFilter<"MessageLog"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }

  export type MessageLogOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    session?: SessionOrderByWithRelationInput
  }

  export type MessageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageLogWhereInput | MessageLogWhereInput[]
    OR?: MessageLogWhereInput[]
    NOT?: MessageLogWhereInput | MessageLogWhereInput[]
    sessionId?: StringFilter<"MessageLog"> | string
    sender?: StringFilter<"MessageLog"> | string
    text?: StringFilter<"MessageLog"> | string
    timestamp?: DateTimeFilter<"MessageLog"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
  }, "id">

  export type MessageLogOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    _count?: MessageLogCountOrderByAggregateInput
    _max?: MessageLogMaxOrderByAggregateInput
    _min?: MessageLogMinOrderByAggregateInput
  }

  export type MessageLogScalarWhereWithAggregatesInput = {
    AND?: MessageLogScalarWhereWithAggregatesInput | MessageLogScalarWhereWithAggregatesInput[]
    OR?: MessageLogScalarWhereWithAggregatesInput[]
    NOT?: MessageLogScalarWhereWithAggregatesInput | MessageLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageLog"> | string
    sessionId?: StringWithAggregatesFilter<"MessageLog"> | string
    sender?: StringWithAggregatesFilter<"MessageLog"> | string
    text?: StringWithAggregatesFilter<"MessageLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"MessageLog"> | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionId: string
    lastQuestion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderDetails?: OrderDetailsCreateNestedOneWithoutSessionInput
    messages?: MessageLogCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionId: string
    lastQuestion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderDetails?: OrderDetailsUncheckedCreateNestedOneWithoutSessionInput
    messages?: MessageLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    lastQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetails?: OrderDetailsUpdateOneWithoutSessionNestedInput
    messages?: MessageLogUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    lastQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetails?: OrderDetailsUncheckedUpdateOneWithoutSessionNestedInput
    messages?: MessageLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionId: string
    lastQuestion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    lastQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    lastQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsCreateInput = {
    id?: string
    pizza?: string | null
    pizzaSize?: string | null
    drink?: string | null
    dessert?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session: SessionCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateInput = {
    id?: string
    pizza?: string | null
    pizzaSize?: string | null
    drink?: string | null
    dessert?: string | null
    sessionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizza?: NullableStringFieldUpdateOperationsInput | string | null
    pizzaSize?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableStringFieldUpdateOperationsInput | string | null
    dessert?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutOrderDetailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizza?: NullableStringFieldUpdateOperationsInput | string | null
    pizzaSize?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableStringFieldUpdateOperationsInput | string | null
    dessert?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsCreateManyInput = {
    id?: string
    pizza?: string | null
    pizzaSize?: string | null
    drink?: string | null
    dessert?: string | null
    sessionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizza?: NullableStringFieldUpdateOperationsInput | string | null
    pizzaSize?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableStringFieldUpdateOperationsInput | string | null
    dessert?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizza?: NullableStringFieldUpdateOperationsInput | string | null
    pizzaSize?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableStringFieldUpdateOperationsInput | string | null
    dessert?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogCreateInput = {
    id?: string
    sender: string
    text: string
    timestamp?: Date | string
    session: SessionCreateNestedOneWithoutMessagesInput
  }

  export type MessageLogUncheckedCreateInput = {
    id?: string
    sessionId: string
    sender: string
    text: string
    timestamp?: Date | string
  }

  export type MessageLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogCreateManyInput = {
    id?: string
    sessionId: string
    sender: string
    text: string
    timestamp?: Date | string
  }

  export type MessageLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderDetailsNullableScalarRelationFilter = {
    is?: OrderDetailsWhereInput | null
    isNot?: OrderDetailsWhereInput | null
  }

  export type MessageLogListRelationFilter = {
    every?: MessageLogWhereInput
    some?: MessageLogWhereInput
    none?: MessageLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    lastQuestion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    lastQuestion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    lastQuestion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type OrderDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    pizza?: SortOrder
    pizzaSize?: SortOrder
    drink?: SortOrder
    dessert?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    pizza?: SortOrder
    pizzaSize?: SortOrder
    drink?: SortOrder
    dessert?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    pizza?: SortOrder
    pizzaSize?: SortOrder
    drink?: SortOrder
    dessert?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageLogCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
  }

  export type MessageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
  }

  export type MessageLogMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
  }

  export type OrderDetailsCreateNestedOneWithoutSessionInput = {
    create?: XOR<OrderDetailsCreateWithoutSessionInput, OrderDetailsUncheckedCreateWithoutSessionInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutSessionInput
    connect?: OrderDetailsWhereUniqueInput
  }

  export type MessageLogCreateNestedManyWithoutSessionInput = {
    create?: XOR<MessageLogCreateWithoutSessionInput, MessageLogUncheckedCreateWithoutSessionInput> | MessageLogCreateWithoutSessionInput[] | MessageLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutSessionInput | MessageLogCreateOrConnectWithoutSessionInput[]
    createMany?: MessageLogCreateManySessionInputEnvelope
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
  }

  export type OrderDetailsUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<OrderDetailsCreateWithoutSessionInput, OrderDetailsUncheckedCreateWithoutSessionInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutSessionInput
    connect?: OrderDetailsWhereUniqueInput
  }

  export type MessageLogUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<MessageLogCreateWithoutSessionInput, MessageLogUncheckedCreateWithoutSessionInput> | MessageLogCreateWithoutSessionInput[] | MessageLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutSessionInput | MessageLogCreateOrConnectWithoutSessionInput[]
    createMany?: MessageLogCreateManySessionInputEnvelope
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderDetailsUpdateOneWithoutSessionNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutSessionInput, OrderDetailsUncheckedCreateWithoutSessionInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutSessionInput
    upsert?: OrderDetailsUpsertWithoutSessionInput
    disconnect?: OrderDetailsWhereInput | boolean
    delete?: OrderDetailsWhereInput | boolean
    connect?: OrderDetailsWhereUniqueInput
    update?: XOR<XOR<OrderDetailsUpdateToOneWithWhereWithoutSessionInput, OrderDetailsUpdateWithoutSessionInput>, OrderDetailsUncheckedUpdateWithoutSessionInput>
  }

  export type MessageLogUpdateManyWithoutSessionNestedInput = {
    create?: XOR<MessageLogCreateWithoutSessionInput, MessageLogUncheckedCreateWithoutSessionInput> | MessageLogCreateWithoutSessionInput[] | MessageLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutSessionInput | MessageLogCreateOrConnectWithoutSessionInput[]
    upsert?: MessageLogUpsertWithWhereUniqueWithoutSessionInput | MessageLogUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: MessageLogCreateManySessionInputEnvelope
    set?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    disconnect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    delete?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    update?: MessageLogUpdateWithWhereUniqueWithoutSessionInput | MessageLogUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: MessageLogUpdateManyWithWhereWithoutSessionInput | MessageLogUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
  }

  export type OrderDetailsUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutSessionInput, OrderDetailsUncheckedCreateWithoutSessionInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutSessionInput
    upsert?: OrderDetailsUpsertWithoutSessionInput
    disconnect?: OrderDetailsWhereInput | boolean
    delete?: OrderDetailsWhereInput | boolean
    connect?: OrderDetailsWhereUniqueInput
    update?: XOR<XOR<OrderDetailsUpdateToOneWithWhereWithoutSessionInput, OrderDetailsUpdateWithoutSessionInput>, OrderDetailsUncheckedUpdateWithoutSessionInput>
  }

  export type MessageLogUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<MessageLogCreateWithoutSessionInput, MessageLogUncheckedCreateWithoutSessionInput> | MessageLogCreateWithoutSessionInput[] | MessageLogUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: MessageLogCreateOrConnectWithoutSessionInput | MessageLogCreateOrConnectWithoutSessionInput[]
    upsert?: MessageLogUpsertWithWhereUniqueWithoutSessionInput | MessageLogUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: MessageLogCreateManySessionInputEnvelope
    set?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    disconnect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    delete?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    connect?: MessageLogWhereUniqueInput | MessageLogWhereUniqueInput[]
    update?: MessageLogUpdateWithWhereUniqueWithoutSessionInput | MessageLogUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: MessageLogUpdateManyWithWhereWithoutSessionInput | MessageLogUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<SessionCreateWithoutOrderDetailsInput, SessionUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutOrderDetailsInput
    connect?: SessionWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutOrderDetailsNestedInput = {
    create?: XOR<SessionCreateWithoutOrderDetailsInput, SessionUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutOrderDetailsInput
    upsert?: SessionUpsertWithoutOrderDetailsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutOrderDetailsInput, SessionUpdateWithoutOrderDetailsInput>, SessionUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type SessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<SessionCreateWithoutMessagesInput, SessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutMessagesInput
    connect?: SessionWhereUniqueInput
  }

  export type SessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<SessionCreateWithoutMessagesInput, SessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutMessagesInput
    upsert?: SessionUpsertWithoutMessagesInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutMessagesInput, SessionUpdateWithoutMessagesInput>, SessionUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrderDetailsCreateWithoutSessionInput = {
    id?: string
    pizza?: string | null
    pizzaSize?: string | null
    drink?: string | null
    dessert?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailsUncheckedCreateWithoutSessionInput = {
    id?: string
    pizza?: string | null
    pizzaSize?: string | null
    drink?: string | null
    dessert?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailsCreateOrConnectWithoutSessionInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutSessionInput, OrderDetailsUncheckedCreateWithoutSessionInput>
  }

  export type MessageLogCreateWithoutSessionInput = {
    id?: string
    sender: string
    text: string
    timestamp?: Date | string
  }

  export type MessageLogUncheckedCreateWithoutSessionInput = {
    id?: string
    sender: string
    text: string
    timestamp?: Date | string
  }

  export type MessageLogCreateOrConnectWithoutSessionInput = {
    where: MessageLogWhereUniqueInput
    create: XOR<MessageLogCreateWithoutSessionInput, MessageLogUncheckedCreateWithoutSessionInput>
  }

  export type MessageLogCreateManySessionInputEnvelope = {
    data: MessageLogCreateManySessionInput | MessageLogCreateManySessionInput[]
  }

  export type OrderDetailsUpsertWithoutSessionInput = {
    update: XOR<OrderDetailsUpdateWithoutSessionInput, OrderDetailsUncheckedUpdateWithoutSessionInput>
    create: XOR<OrderDetailsCreateWithoutSessionInput, OrderDetailsUncheckedCreateWithoutSessionInput>
    where?: OrderDetailsWhereInput
  }

  export type OrderDetailsUpdateToOneWithWhereWithoutSessionInput = {
    where?: OrderDetailsWhereInput
    data: XOR<OrderDetailsUpdateWithoutSessionInput, OrderDetailsUncheckedUpdateWithoutSessionInput>
  }

  export type OrderDetailsUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizza?: NullableStringFieldUpdateOperationsInput | string | null
    pizzaSize?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableStringFieldUpdateOperationsInput | string | null
    dessert?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pizza?: NullableStringFieldUpdateOperationsInput | string | null
    pizzaSize?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableStringFieldUpdateOperationsInput | string | null
    dessert?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUpsertWithWhereUniqueWithoutSessionInput = {
    where: MessageLogWhereUniqueInput
    update: XOR<MessageLogUpdateWithoutSessionInput, MessageLogUncheckedUpdateWithoutSessionInput>
    create: XOR<MessageLogCreateWithoutSessionInput, MessageLogUncheckedCreateWithoutSessionInput>
  }

  export type MessageLogUpdateWithWhereUniqueWithoutSessionInput = {
    where: MessageLogWhereUniqueInput
    data: XOR<MessageLogUpdateWithoutSessionInput, MessageLogUncheckedUpdateWithoutSessionInput>
  }

  export type MessageLogUpdateManyWithWhereWithoutSessionInput = {
    where: MessageLogScalarWhereInput
    data: XOR<MessageLogUpdateManyMutationInput, MessageLogUncheckedUpdateManyWithoutSessionInput>
  }

  export type MessageLogScalarWhereInput = {
    AND?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
    OR?: MessageLogScalarWhereInput[]
    NOT?: MessageLogScalarWhereInput | MessageLogScalarWhereInput[]
    id?: StringFilter<"MessageLog"> | string
    sessionId?: StringFilter<"MessageLog"> | string
    sender?: StringFilter<"MessageLog"> | string
    text?: StringFilter<"MessageLog"> | string
    timestamp?: DateTimeFilter<"MessageLog"> | Date | string
  }

  export type SessionCreateWithoutOrderDetailsInput = {
    id?: string
    sessionId: string
    lastQuestion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageLogCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutOrderDetailsInput = {
    id?: string
    sessionId: string
    lastQuestion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageLogUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutOrderDetailsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutOrderDetailsInput, SessionUncheckedCreateWithoutOrderDetailsInput>
  }

  export type SessionUpsertWithoutOrderDetailsInput = {
    update: XOR<SessionUpdateWithoutOrderDetailsInput, SessionUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<SessionCreateWithoutOrderDetailsInput, SessionUncheckedCreateWithoutOrderDetailsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutOrderDetailsInput, SessionUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type SessionUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    lastQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageLogUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutOrderDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    lastQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageLogUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateWithoutMessagesInput = {
    id?: string
    sessionId: string
    lastQuestion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderDetails?: OrderDetailsCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    sessionId: string
    lastQuestion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderDetails?: OrderDetailsUncheckedCreateNestedOneWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutMessagesInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutMessagesInput, SessionUncheckedCreateWithoutMessagesInput>
  }

  export type SessionUpsertWithoutMessagesInput = {
    update: XOR<SessionUpdateWithoutMessagesInput, SessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<SessionCreateWithoutMessagesInput, SessionUncheckedCreateWithoutMessagesInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutMessagesInput, SessionUncheckedUpdateWithoutMessagesInput>
  }

  export type SessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    lastQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetails?: OrderDetailsUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    lastQuestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDetails?: OrderDetailsUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type MessageLogCreateManySessionInput = {
    id?: string
    sender: string
    text: string
    timestamp?: Date | string
  }

  export type MessageLogUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageLogUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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