
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
 * Model corredor
 * 
 */
export type corredor = $Result.DefaultSelection<Prisma.$corredorPayload>
/**
 * Model corredorparada
 * 
 */
export type corredorparada = $Result.DefaultSelection<Prisma.$corredorparadaPayload>
/**
 * Model itinerario
 * 
 */
export type itinerario = $Result.DefaultSelection<Prisma.$itinerarioPayload>
/**
 * Model linha
 * 
 */
export type linha = $Result.DefaultSelection<Prisma.$linhaPayload>
/**
 * Model linhaparada
 * 
 */
export type linhaparada = $Result.DefaultSelection<Prisma.$linhaparadaPayload>
/**
 * Model parada
 * 
 */
export type parada = $Result.DefaultSelection<Prisma.$paradaPayload>
/**
 * Model veiculo
 * 
 */
export type veiculo = $Result.DefaultSelection<Prisma.$veiculoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Corredors
 * const corredors = await prisma.corredor.findMany()
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
   * // Fetch zero or more Corredors
   * const corredors = await prisma.corredor.findMany()
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
   * `prisma.corredor`: Exposes CRUD operations for the **corredor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Corredors
    * const corredors = await prisma.corredor.findMany()
    * ```
    */
  get corredor(): Prisma.corredorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.corredorparada`: Exposes CRUD operations for the **corredorparada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Corredorparadas
    * const corredorparadas = await prisma.corredorparada.findMany()
    * ```
    */
  get corredorparada(): Prisma.corredorparadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itinerario`: Exposes CRUD operations for the **itinerario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Itinerarios
    * const itinerarios = await prisma.itinerario.findMany()
    * ```
    */
  get itinerario(): Prisma.itinerarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linha`: Exposes CRUD operations for the **linha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Linhas
    * const linhas = await prisma.linha.findMany()
    * ```
    */
  get linha(): Prisma.linhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linhaparada`: Exposes CRUD operations for the **linhaparada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Linhaparadas
    * const linhaparadas = await prisma.linhaparada.findMany()
    * ```
    */
  get linhaparada(): Prisma.linhaparadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parada`: Exposes CRUD operations for the **parada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paradas
    * const paradas = await prisma.parada.findMany()
    * ```
    */
  get parada(): Prisma.paradaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veiculo`: Exposes CRUD operations for the **veiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculo.findMany()
    * ```
    */
  get veiculo(): Prisma.veiculoDelegate<ExtArgs, ClientOptions>;
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
    corredor: 'corredor',
    corredorparada: 'corredorparada',
    itinerario: 'itinerario',
    linha: 'linha',
    linhaparada: 'linhaparada',
    parada: 'parada',
    veiculo: 'veiculo'
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
      modelProps: "corredor" | "corredorparada" | "itinerario" | "linha" | "linhaparada" | "parada" | "veiculo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      corredor: {
        payload: Prisma.$corredorPayload<ExtArgs>
        fields: Prisma.corredorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.corredorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.corredorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload>
          }
          findFirst: {
            args: Prisma.corredorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.corredorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload>
          }
          findMany: {
            args: Prisma.corredorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload>[]
          }
          create: {
            args: Prisma.corredorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload>
          }
          createMany: {
            args: Prisma.corredorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.corredorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload>[]
          }
          delete: {
            args: Prisma.corredorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload>
          }
          update: {
            args: Prisma.corredorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload>
          }
          deleteMany: {
            args: Prisma.corredorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.corredorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.corredorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload>[]
          }
          upsert: {
            args: Prisma.corredorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorPayload>
          }
          aggregate: {
            args: Prisma.CorredorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCorredor>
          }
          groupBy: {
            args: Prisma.corredorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CorredorGroupByOutputType>[]
          }
          count: {
            args: Prisma.corredorCountArgs<ExtArgs>
            result: $Utils.Optional<CorredorCountAggregateOutputType> | number
          }
        }
      }
      corredorparada: {
        payload: Prisma.$corredorparadaPayload<ExtArgs>
        fields: Prisma.corredorparadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.corredorparadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.corredorparadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload>
          }
          findFirst: {
            args: Prisma.corredorparadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.corredorparadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload>
          }
          findMany: {
            args: Prisma.corredorparadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload>[]
          }
          create: {
            args: Prisma.corredorparadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload>
          }
          createMany: {
            args: Prisma.corredorparadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.corredorparadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload>[]
          }
          delete: {
            args: Prisma.corredorparadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload>
          }
          update: {
            args: Prisma.corredorparadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload>
          }
          deleteMany: {
            args: Prisma.corredorparadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.corredorparadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.corredorparadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload>[]
          }
          upsert: {
            args: Prisma.corredorparadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corredorparadaPayload>
          }
          aggregate: {
            args: Prisma.CorredorparadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCorredorparada>
          }
          groupBy: {
            args: Prisma.corredorparadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CorredorparadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.corredorparadaCountArgs<ExtArgs>
            result: $Utils.Optional<CorredorparadaCountAggregateOutputType> | number
          }
        }
      }
      itinerario: {
        payload: Prisma.$itinerarioPayload<ExtArgs>
        fields: Prisma.itinerarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itinerarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itinerarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload>
          }
          findFirst: {
            args: Prisma.itinerarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itinerarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload>
          }
          findMany: {
            args: Prisma.itinerarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload>[]
          }
          create: {
            args: Prisma.itinerarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload>
          }
          createMany: {
            args: Prisma.itinerarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itinerarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload>[]
          }
          delete: {
            args: Prisma.itinerarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload>
          }
          update: {
            args: Prisma.itinerarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload>
          }
          deleteMany: {
            args: Prisma.itinerarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itinerarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.itinerarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload>[]
          }
          upsert: {
            args: Prisma.itinerarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerarioPayload>
          }
          aggregate: {
            args: Prisma.ItinerarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItinerario>
          }
          groupBy: {
            args: Prisma.itinerarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItinerarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.itinerarioCountArgs<ExtArgs>
            result: $Utils.Optional<ItinerarioCountAggregateOutputType> | number
          }
        }
      }
      linha: {
        payload: Prisma.$linhaPayload<ExtArgs>
        fields: Prisma.linhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.linhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.linhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload>
          }
          findFirst: {
            args: Prisma.linhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.linhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload>
          }
          findMany: {
            args: Prisma.linhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload>[]
          }
          create: {
            args: Prisma.linhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload>
          }
          createMany: {
            args: Prisma.linhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.linhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload>[]
          }
          delete: {
            args: Prisma.linhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload>
          }
          update: {
            args: Prisma.linhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload>
          }
          deleteMany: {
            args: Prisma.linhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.linhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.linhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload>[]
          }
          upsert: {
            args: Prisma.linhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaPayload>
          }
          aggregate: {
            args: Prisma.LinhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinha>
          }
          groupBy: {
            args: Prisma.linhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.linhaCountArgs<ExtArgs>
            result: $Utils.Optional<LinhaCountAggregateOutputType> | number
          }
        }
      }
      linhaparada: {
        payload: Prisma.$linhaparadaPayload<ExtArgs>
        fields: Prisma.linhaparadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.linhaparadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.linhaparadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload>
          }
          findFirst: {
            args: Prisma.linhaparadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.linhaparadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload>
          }
          findMany: {
            args: Prisma.linhaparadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload>[]
          }
          create: {
            args: Prisma.linhaparadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload>
          }
          createMany: {
            args: Prisma.linhaparadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.linhaparadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload>[]
          }
          delete: {
            args: Prisma.linhaparadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload>
          }
          update: {
            args: Prisma.linhaparadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload>
          }
          deleteMany: {
            args: Prisma.linhaparadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.linhaparadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.linhaparadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload>[]
          }
          upsert: {
            args: Prisma.linhaparadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$linhaparadaPayload>
          }
          aggregate: {
            args: Prisma.LinhaparadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinhaparada>
          }
          groupBy: {
            args: Prisma.linhaparadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinhaparadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.linhaparadaCountArgs<ExtArgs>
            result: $Utils.Optional<LinhaparadaCountAggregateOutputType> | number
          }
        }
      }
      parada: {
        payload: Prisma.$paradaPayload<ExtArgs>
        fields: Prisma.paradaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paradaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paradaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload>
          }
          findFirst: {
            args: Prisma.paradaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paradaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload>
          }
          findMany: {
            args: Prisma.paradaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload>[]
          }
          create: {
            args: Prisma.paradaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload>
          }
          createMany: {
            args: Prisma.paradaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paradaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload>[]
          }
          delete: {
            args: Prisma.paradaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload>
          }
          update: {
            args: Prisma.paradaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload>
          }
          deleteMany: {
            args: Prisma.paradaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paradaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paradaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload>[]
          }
          upsert: {
            args: Prisma.paradaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paradaPayload>
          }
          aggregate: {
            args: Prisma.ParadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParada>
          }
          groupBy: {
            args: Prisma.paradaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.paradaCountArgs<ExtArgs>
            result: $Utils.Optional<ParadaCountAggregateOutputType> | number
          }
        }
      }
      veiculo: {
        payload: Prisma.$veiculoPayload<ExtArgs>
        fields: Prisma.veiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.veiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.veiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          findFirst: {
            args: Prisma.veiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.veiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          findMany: {
            args: Prisma.veiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>[]
          }
          create: {
            args: Prisma.veiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          createMany: {
            args: Prisma.veiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.veiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>[]
          }
          delete: {
            args: Prisma.veiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          update: {
            args: Prisma.veiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          deleteMany: {
            args: Prisma.veiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.veiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.veiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>[]
          }
          upsert: {
            args: Prisma.veiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          aggregate: {
            args: Prisma.VeiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeiculo>
          }
          groupBy: {
            args: Prisma.veiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.veiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VeiculoCountAggregateOutputType> | number
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
    corredor?: corredorOmit
    corredorparada?: corredorparadaOmit
    itinerario?: itinerarioOmit
    linha?: linhaOmit
    linhaparada?: linhaparadaOmit
    parada?: paradaOmit
    veiculo?: veiculoOmit
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
   * Count Type CorredorCountOutputType
   */

  export type CorredorCountOutputType = {
    corredorparada: number
  }

  export type CorredorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corredorparada?: boolean | CorredorCountOutputTypeCountCorredorparadaArgs
  }

  // Custom InputTypes
  /**
   * CorredorCountOutputType without action
   */
  export type CorredorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorredorCountOutputType
     */
    select?: CorredorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CorredorCountOutputType without action
   */
  export type CorredorCountOutputTypeCountCorredorparadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: corredorparadaWhereInput
  }


  /**
   * Count Type LinhaCountOutputType
   */

  export type LinhaCountOutputType = {
    itinerario: number
    linhaparada: number
  }

  export type LinhaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itinerario?: boolean | LinhaCountOutputTypeCountItinerarioArgs
    linhaparada?: boolean | LinhaCountOutputTypeCountLinhaparadaArgs
  }

  // Custom InputTypes
  /**
   * LinhaCountOutputType without action
   */
  export type LinhaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinhaCountOutputType
     */
    select?: LinhaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinhaCountOutputType without action
   */
  export type LinhaCountOutputTypeCountItinerarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itinerarioWhereInput
  }

  /**
   * LinhaCountOutputType without action
   */
  export type LinhaCountOutputTypeCountLinhaparadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: linhaparadaWhereInput
  }


  /**
   * Count Type ParadaCountOutputType
   */

  export type ParadaCountOutputType = {
    corredorparada: number
    itinerario: number
    linhaparada: number
  }

  export type ParadaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corredorparada?: boolean | ParadaCountOutputTypeCountCorredorparadaArgs
    itinerario?: boolean | ParadaCountOutputTypeCountItinerarioArgs
    linhaparada?: boolean | ParadaCountOutputTypeCountLinhaparadaArgs
  }

  // Custom InputTypes
  /**
   * ParadaCountOutputType without action
   */
  export type ParadaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParadaCountOutputType
     */
    select?: ParadaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParadaCountOutputType without action
   */
  export type ParadaCountOutputTypeCountCorredorparadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: corredorparadaWhereInput
  }

  /**
   * ParadaCountOutputType without action
   */
  export type ParadaCountOutputTypeCountItinerarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itinerarioWhereInput
  }

  /**
   * ParadaCountOutputType without action
   */
  export type ParadaCountOutputTypeCountLinhaparadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: linhaparadaWhereInput
  }


  /**
   * Count Type VeiculoCountOutputType
   */

  export type VeiculoCountOutputType = {
    itinerario: number
  }

  export type VeiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itinerario?: boolean | VeiculoCountOutputTypeCountItinerarioArgs
  }

  // Custom InputTypes
  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoCountOutputType
     */
    select?: VeiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeCountItinerarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itinerarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model corredor
   */

  export type AggregateCorredor = {
    _count: CorredorCountAggregateOutputType | null
    _avg: CorredorAvgAggregateOutputType | null
    _sum: CorredorSumAggregateOutputType | null
    _min: CorredorMinAggregateOutputType | null
    _max: CorredorMaxAggregateOutputType | null
  }

  export type CorredorAvgAggregateOutputType = {
    codigo: number | null
  }

  export type CorredorSumAggregateOutputType = {
    codigo: number | null
  }

  export type CorredorMinAggregateOutputType = {
    codigo: number | null
    nome: string | null
  }

  export type CorredorMaxAggregateOutputType = {
    codigo: number | null
    nome: string | null
  }

  export type CorredorCountAggregateOutputType = {
    codigo: number
    nome: number
    _all: number
  }


  export type CorredorAvgAggregateInputType = {
    codigo?: true
  }

  export type CorredorSumAggregateInputType = {
    codigo?: true
  }

  export type CorredorMinAggregateInputType = {
    codigo?: true
    nome?: true
  }

  export type CorredorMaxAggregateInputType = {
    codigo?: true
    nome?: true
  }

  export type CorredorCountAggregateInputType = {
    codigo?: true
    nome?: true
    _all?: true
  }

  export type CorredorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which corredor to aggregate.
     */
    where?: corredorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corredors to fetch.
     */
    orderBy?: corredorOrderByWithRelationInput | corredorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: corredorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corredors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corredors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned corredors
    **/
    _count?: true | CorredorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CorredorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CorredorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorredorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorredorMaxAggregateInputType
  }

  export type GetCorredorAggregateType<T extends CorredorAggregateArgs> = {
        [P in keyof T & keyof AggregateCorredor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorredor[P]>
      : GetScalarType<T[P], AggregateCorredor[P]>
  }




  export type corredorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: corredorWhereInput
    orderBy?: corredorOrderByWithAggregationInput | corredorOrderByWithAggregationInput[]
    by: CorredorScalarFieldEnum[] | CorredorScalarFieldEnum
    having?: corredorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorredorCountAggregateInputType | true
    _avg?: CorredorAvgAggregateInputType
    _sum?: CorredorSumAggregateInputType
    _min?: CorredorMinAggregateInputType
    _max?: CorredorMaxAggregateInputType
  }

  export type CorredorGroupByOutputType = {
    codigo: number
    nome: string
    _count: CorredorCountAggregateOutputType | null
    _avg: CorredorAvgAggregateOutputType | null
    _sum: CorredorSumAggregateOutputType | null
    _min: CorredorMinAggregateOutputType | null
    _max: CorredorMaxAggregateOutputType | null
  }

  type GetCorredorGroupByPayload<T extends corredorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CorredorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorredorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorredorGroupByOutputType[P]>
            : GetScalarType<T[P], CorredorGroupByOutputType[P]>
        }
      >
    >


  export type corredorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nome?: boolean
    corredorparada?: boolean | corredor$corredorparadaArgs<ExtArgs>
    _count?: boolean | CorredorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corredor"]>

  export type corredorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nome?: boolean
  }, ExtArgs["result"]["corredor"]>

  export type corredorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nome?: boolean
  }, ExtArgs["result"]["corredor"]>

  export type corredorSelectScalar = {
    codigo?: boolean
    nome?: boolean
  }

  export type corredorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigo" | "nome", ExtArgs["result"]["corredor"]>
  export type corredorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corredorparada?: boolean | corredor$corredorparadaArgs<ExtArgs>
    _count?: boolean | CorredorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type corredorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type corredorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $corredorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "corredor"
    objects: {
      corredorparada: Prisma.$corredorparadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codigo: number
      nome: string
    }, ExtArgs["result"]["corredor"]>
    composites: {}
  }

  type corredorGetPayload<S extends boolean | null | undefined | corredorDefaultArgs> = $Result.GetResult<Prisma.$corredorPayload, S>

  type corredorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<corredorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CorredorCountAggregateInputType | true
    }

  export interface corredorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['corredor'], meta: { name: 'corredor' } }
    /**
     * Find zero or one Corredor that matches the filter.
     * @param {corredorFindUniqueArgs} args - Arguments to find a Corredor
     * @example
     * // Get one Corredor
     * const corredor = await prisma.corredor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends corredorFindUniqueArgs>(args: SelectSubset<T, corredorFindUniqueArgs<ExtArgs>>): Prisma__corredorClient<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Corredor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {corredorFindUniqueOrThrowArgs} args - Arguments to find a Corredor
     * @example
     * // Get one Corredor
     * const corredor = await prisma.corredor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends corredorFindUniqueOrThrowArgs>(args: SelectSubset<T, corredorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__corredorClient<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Corredor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorFindFirstArgs} args - Arguments to find a Corredor
     * @example
     * // Get one Corredor
     * const corredor = await prisma.corredor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends corredorFindFirstArgs>(args?: SelectSubset<T, corredorFindFirstArgs<ExtArgs>>): Prisma__corredorClient<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Corredor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorFindFirstOrThrowArgs} args - Arguments to find a Corredor
     * @example
     * // Get one Corredor
     * const corredor = await prisma.corredor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends corredorFindFirstOrThrowArgs>(args?: SelectSubset<T, corredorFindFirstOrThrowArgs<ExtArgs>>): Prisma__corredorClient<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Corredors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Corredors
     * const corredors = await prisma.corredor.findMany()
     * 
     * // Get first 10 Corredors
     * const corredors = await prisma.corredor.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const corredorWithCodigoOnly = await prisma.corredor.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends corredorFindManyArgs>(args?: SelectSubset<T, corredorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Corredor.
     * @param {corredorCreateArgs} args - Arguments to create a Corredor.
     * @example
     * // Create one Corredor
     * const Corredor = await prisma.corredor.create({
     *   data: {
     *     // ... data to create a Corredor
     *   }
     * })
     * 
     */
    create<T extends corredorCreateArgs>(args: SelectSubset<T, corredorCreateArgs<ExtArgs>>): Prisma__corredorClient<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Corredors.
     * @param {corredorCreateManyArgs} args - Arguments to create many Corredors.
     * @example
     * // Create many Corredors
     * const corredor = await prisma.corredor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends corredorCreateManyArgs>(args?: SelectSubset<T, corredorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Corredors and returns the data saved in the database.
     * @param {corredorCreateManyAndReturnArgs} args - Arguments to create many Corredors.
     * @example
     * // Create many Corredors
     * const corredor = await prisma.corredor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Corredors and only return the `codigo`
     * const corredorWithCodigoOnly = await prisma.corredor.createManyAndReturn({
     *   select: { codigo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends corredorCreateManyAndReturnArgs>(args?: SelectSubset<T, corredorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Corredor.
     * @param {corredorDeleteArgs} args - Arguments to delete one Corredor.
     * @example
     * // Delete one Corredor
     * const Corredor = await prisma.corredor.delete({
     *   where: {
     *     // ... filter to delete one Corredor
     *   }
     * })
     * 
     */
    delete<T extends corredorDeleteArgs>(args: SelectSubset<T, corredorDeleteArgs<ExtArgs>>): Prisma__corredorClient<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Corredor.
     * @param {corredorUpdateArgs} args - Arguments to update one Corredor.
     * @example
     * // Update one Corredor
     * const corredor = await prisma.corredor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends corredorUpdateArgs>(args: SelectSubset<T, corredorUpdateArgs<ExtArgs>>): Prisma__corredorClient<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Corredors.
     * @param {corredorDeleteManyArgs} args - Arguments to filter Corredors to delete.
     * @example
     * // Delete a few Corredors
     * const { count } = await prisma.corredor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends corredorDeleteManyArgs>(args?: SelectSubset<T, corredorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Corredors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Corredors
     * const corredor = await prisma.corredor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends corredorUpdateManyArgs>(args: SelectSubset<T, corredorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Corredors and returns the data updated in the database.
     * @param {corredorUpdateManyAndReturnArgs} args - Arguments to update many Corredors.
     * @example
     * // Update many Corredors
     * const corredor = await prisma.corredor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Corredors and only return the `codigo`
     * const corredorWithCodigoOnly = await prisma.corredor.updateManyAndReturn({
     *   select: { codigo: true },
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
    updateManyAndReturn<T extends corredorUpdateManyAndReturnArgs>(args: SelectSubset<T, corredorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Corredor.
     * @param {corredorUpsertArgs} args - Arguments to update or create a Corredor.
     * @example
     * // Update or create a Corredor
     * const corredor = await prisma.corredor.upsert({
     *   create: {
     *     // ... data to create a Corredor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Corredor we want to update
     *   }
     * })
     */
    upsert<T extends corredorUpsertArgs>(args: SelectSubset<T, corredorUpsertArgs<ExtArgs>>): Prisma__corredorClient<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Corredors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorCountArgs} args - Arguments to filter Corredors to count.
     * @example
     * // Count the number of Corredors
     * const count = await prisma.corredor.count({
     *   where: {
     *     // ... the filter for the Corredors we want to count
     *   }
     * })
    **/
    count<T extends corredorCountArgs>(
      args?: Subset<T, corredorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorredorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Corredor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorredorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CorredorAggregateArgs>(args: Subset<T, CorredorAggregateArgs>): Prisma.PrismaPromise<GetCorredorAggregateType<T>>

    /**
     * Group by Corredor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorGroupByArgs} args - Group by arguments.
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
      T extends corredorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: corredorGroupByArgs['orderBy'] }
        : { orderBy?: corredorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, corredorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorredorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the corredor model
   */
  readonly fields: corredorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for corredor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__corredorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    corredorparada<T extends corredor$corredorparadaArgs<ExtArgs> = {}>(args?: Subset<T, corredor$corredorparadaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the corredor model
   */
  interface corredorFieldRefs {
    readonly codigo: FieldRef<"corredor", 'Int'>
    readonly nome: FieldRef<"corredor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * corredor findUnique
   */
  export type corredorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorInclude<ExtArgs> | null
    /**
     * Filter, which corredor to fetch.
     */
    where: corredorWhereUniqueInput
  }

  /**
   * corredor findUniqueOrThrow
   */
  export type corredorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorInclude<ExtArgs> | null
    /**
     * Filter, which corredor to fetch.
     */
    where: corredorWhereUniqueInput
  }

  /**
   * corredor findFirst
   */
  export type corredorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorInclude<ExtArgs> | null
    /**
     * Filter, which corredor to fetch.
     */
    where?: corredorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corredors to fetch.
     */
    orderBy?: corredorOrderByWithRelationInput | corredorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for corredors.
     */
    cursor?: corredorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corredors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corredors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of corredors.
     */
    distinct?: CorredorScalarFieldEnum | CorredorScalarFieldEnum[]
  }

  /**
   * corredor findFirstOrThrow
   */
  export type corredorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorInclude<ExtArgs> | null
    /**
     * Filter, which corredor to fetch.
     */
    where?: corredorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corredors to fetch.
     */
    orderBy?: corredorOrderByWithRelationInput | corredorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for corredors.
     */
    cursor?: corredorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corredors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corredors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of corredors.
     */
    distinct?: CorredorScalarFieldEnum | CorredorScalarFieldEnum[]
  }

  /**
   * corredor findMany
   */
  export type corredorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorInclude<ExtArgs> | null
    /**
     * Filter, which corredors to fetch.
     */
    where?: corredorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corredors to fetch.
     */
    orderBy?: corredorOrderByWithRelationInput | corredorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing corredors.
     */
    cursor?: corredorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corredors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corredors.
     */
    skip?: number
    distinct?: CorredorScalarFieldEnum | CorredorScalarFieldEnum[]
  }

  /**
   * corredor create
   */
  export type corredorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorInclude<ExtArgs> | null
    /**
     * The data needed to create a corredor.
     */
    data: XOR<corredorCreateInput, corredorUncheckedCreateInput>
  }

  /**
   * corredor createMany
   */
  export type corredorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many corredors.
     */
    data: corredorCreateManyInput | corredorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * corredor createManyAndReturn
   */
  export type corredorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * The data used to create many corredors.
     */
    data: corredorCreateManyInput | corredorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * corredor update
   */
  export type corredorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorInclude<ExtArgs> | null
    /**
     * The data needed to update a corredor.
     */
    data: XOR<corredorUpdateInput, corredorUncheckedUpdateInput>
    /**
     * Choose, which corredor to update.
     */
    where: corredorWhereUniqueInput
  }

  /**
   * corredor updateMany
   */
  export type corredorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update corredors.
     */
    data: XOR<corredorUpdateManyMutationInput, corredorUncheckedUpdateManyInput>
    /**
     * Filter which corredors to update
     */
    where?: corredorWhereInput
    /**
     * Limit how many corredors to update.
     */
    limit?: number
  }

  /**
   * corredor updateManyAndReturn
   */
  export type corredorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * The data used to update corredors.
     */
    data: XOR<corredorUpdateManyMutationInput, corredorUncheckedUpdateManyInput>
    /**
     * Filter which corredors to update
     */
    where?: corredorWhereInput
    /**
     * Limit how many corredors to update.
     */
    limit?: number
  }

  /**
   * corredor upsert
   */
  export type corredorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorInclude<ExtArgs> | null
    /**
     * The filter to search for the corredor to update in case it exists.
     */
    where: corredorWhereUniqueInput
    /**
     * In case the corredor found by the `where` argument doesn't exist, create a new corredor with this data.
     */
    create: XOR<corredorCreateInput, corredorUncheckedCreateInput>
    /**
     * In case the corredor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<corredorUpdateInput, corredorUncheckedUpdateInput>
  }

  /**
   * corredor delete
   */
  export type corredorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorInclude<ExtArgs> | null
    /**
     * Filter which corredor to delete.
     */
    where: corredorWhereUniqueInput
  }

  /**
   * corredor deleteMany
   */
  export type corredorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which corredors to delete
     */
    where?: corredorWhereInput
    /**
     * Limit how many corredors to delete.
     */
    limit?: number
  }

  /**
   * corredor.corredorparada
   */
  export type corredor$corredorparadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    where?: corredorparadaWhereInput
    orderBy?: corredorparadaOrderByWithRelationInput | corredorparadaOrderByWithRelationInput[]
    cursor?: corredorparadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CorredorparadaScalarFieldEnum | CorredorparadaScalarFieldEnum[]
  }

  /**
   * corredor without action
   */
  export type corredorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredor
     */
    select?: corredorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredor
     */
    omit?: corredorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorInclude<ExtArgs> | null
  }


  /**
   * Model corredorparada
   */

  export type AggregateCorredorparada = {
    _count: CorredorparadaCountAggregateOutputType | null
    _avg: CorredorparadaAvgAggregateOutputType | null
    _sum: CorredorparadaSumAggregateOutputType | null
    _min: CorredorparadaMinAggregateOutputType | null
    _max: CorredorparadaMaxAggregateOutputType | null
  }

  export type CorredorparadaAvgAggregateOutputType = {
    codigocorredor: number | null
    codigoparada: number | null
  }

  export type CorredorparadaSumAggregateOutputType = {
    codigocorredor: number | null
    codigoparada: number | null
  }

  export type CorredorparadaMinAggregateOutputType = {
    codigocorredor: number | null
    codigoparada: number | null
  }

  export type CorredorparadaMaxAggregateOutputType = {
    codigocorredor: number | null
    codigoparada: number | null
  }

  export type CorredorparadaCountAggregateOutputType = {
    codigocorredor: number
    codigoparada: number
    _all: number
  }


  export type CorredorparadaAvgAggregateInputType = {
    codigocorredor?: true
    codigoparada?: true
  }

  export type CorredorparadaSumAggregateInputType = {
    codigocorredor?: true
    codigoparada?: true
  }

  export type CorredorparadaMinAggregateInputType = {
    codigocorredor?: true
    codigoparada?: true
  }

  export type CorredorparadaMaxAggregateInputType = {
    codigocorredor?: true
    codigoparada?: true
  }

  export type CorredorparadaCountAggregateInputType = {
    codigocorredor?: true
    codigoparada?: true
    _all?: true
  }

  export type CorredorparadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which corredorparada to aggregate.
     */
    where?: corredorparadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corredorparadas to fetch.
     */
    orderBy?: corredorparadaOrderByWithRelationInput | corredorparadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: corredorparadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corredorparadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corredorparadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned corredorparadas
    **/
    _count?: true | CorredorparadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CorredorparadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CorredorparadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorredorparadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorredorparadaMaxAggregateInputType
  }

  export type GetCorredorparadaAggregateType<T extends CorredorparadaAggregateArgs> = {
        [P in keyof T & keyof AggregateCorredorparada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorredorparada[P]>
      : GetScalarType<T[P], AggregateCorredorparada[P]>
  }




  export type corredorparadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: corredorparadaWhereInput
    orderBy?: corredorparadaOrderByWithAggregationInput | corredorparadaOrderByWithAggregationInput[]
    by: CorredorparadaScalarFieldEnum[] | CorredorparadaScalarFieldEnum
    having?: corredorparadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorredorparadaCountAggregateInputType | true
    _avg?: CorredorparadaAvgAggregateInputType
    _sum?: CorredorparadaSumAggregateInputType
    _min?: CorredorparadaMinAggregateInputType
    _max?: CorredorparadaMaxAggregateInputType
  }

  export type CorredorparadaGroupByOutputType = {
    codigocorredor: number
    codigoparada: number
    _count: CorredorparadaCountAggregateOutputType | null
    _avg: CorredorparadaAvgAggregateOutputType | null
    _sum: CorredorparadaSumAggregateOutputType | null
    _min: CorredorparadaMinAggregateOutputType | null
    _max: CorredorparadaMaxAggregateOutputType | null
  }

  type GetCorredorparadaGroupByPayload<T extends corredorparadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CorredorparadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorredorparadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorredorparadaGroupByOutputType[P]>
            : GetScalarType<T[P], CorredorparadaGroupByOutputType[P]>
        }
      >
    >


  export type corredorparadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigocorredor?: boolean
    codigoparada?: boolean
    corredor?: boolean | corredorDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corredorparada"]>

  export type corredorparadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigocorredor?: boolean
    codigoparada?: boolean
    corredor?: boolean | corredorDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corredorparada"]>

  export type corredorparadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigocorredor?: boolean
    codigoparada?: boolean
    corredor?: boolean | corredorDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corredorparada"]>

  export type corredorparadaSelectScalar = {
    codigocorredor?: boolean
    codigoparada?: boolean
  }

  export type corredorparadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigocorredor" | "codigoparada", ExtArgs["result"]["corredorparada"]>
  export type corredorparadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corredor?: boolean | corredorDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }
  export type corredorparadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corredor?: boolean | corredorDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }
  export type corredorparadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corredor?: boolean | corredorDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }

  export type $corredorparadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "corredorparada"
    objects: {
      corredor: Prisma.$corredorPayload<ExtArgs>
      parada: Prisma.$paradaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      codigocorredor: number
      codigoparada: number
    }, ExtArgs["result"]["corredorparada"]>
    composites: {}
  }

  type corredorparadaGetPayload<S extends boolean | null | undefined | corredorparadaDefaultArgs> = $Result.GetResult<Prisma.$corredorparadaPayload, S>

  type corredorparadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<corredorparadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CorredorparadaCountAggregateInputType | true
    }

  export interface corredorparadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['corredorparada'], meta: { name: 'corredorparada' } }
    /**
     * Find zero or one Corredorparada that matches the filter.
     * @param {corredorparadaFindUniqueArgs} args - Arguments to find a Corredorparada
     * @example
     * // Get one Corredorparada
     * const corredorparada = await prisma.corredorparada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends corredorparadaFindUniqueArgs>(args: SelectSubset<T, corredorparadaFindUniqueArgs<ExtArgs>>): Prisma__corredorparadaClient<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Corredorparada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {corredorparadaFindUniqueOrThrowArgs} args - Arguments to find a Corredorparada
     * @example
     * // Get one Corredorparada
     * const corredorparada = await prisma.corredorparada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends corredorparadaFindUniqueOrThrowArgs>(args: SelectSubset<T, corredorparadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__corredorparadaClient<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Corredorparada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorparadaFindFirstArgs} args - Arguments to find a Corredorparada
     * @example
     * // Get one Corredorparada
     * const corredorparada = await prisma.corredorparada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends corredorparadaFindFirstArgs>(args?: SelectSubset<T, corredorparadaFindFirstArgs<ExtArgs>>): Prisma__corredorparadaClient<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Corredorparada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorparadaFindFirstOrThrowArgs} args - Arguments to find a Corredorparada
     * @example
     * // Get one Corredorparada
     * const corredorparada = await prisma.corredorparada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends corredorparadaFindFirstOrThrowArgs>(args?: SelectSubset<T, corredorparadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__corredorparadaClient<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Corredorparadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorparadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Corredorparadas
     * const corredorparadas = await prisma.corredorparada.findMany()
     * 
     * // Get first 10 Corredorparadas
     * const corredorparadas = await prisma.corredorparada.findMany({ take: 10 })
     * 
     * // Only select the `codigocorredor`
     * const corredorparadaWithCodigocorredorOnly = await prisma.corredorparada.findMany({ select: { codigocorredor: true } })
     * 
     */
    findMany<T extends corredorparadaFindManyArgs>(args?: SelectSubset<T, corredorparadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Corredorparada.
     * @param {corredorparadaCreateArgs} args - Arguments to create a Corredorparada.
     * @example
     * // Create one Corredorparada
     * const Corredorparada = await prisma.corredorparada.create({
     *   data: {
     *     // ... data to create a Corredorparada
     *   }
     * })
     * 
     */
    create<T extends corredorparadaCreateArgs>(args: SelectSubset<T, corredorparadaCreateArgs<ExtArgs>>): Prisma__corredorparadaClient<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Corredorparadas.
     * @param {corredorparadaCreateManyArgs} args - Arguments to create many Corredorparadas.
     * @example
     * // Create many Corredorparadas
     * const corredorparada = await prisma.corredorparada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends corredorparadaCreateManyArgs>(args?: SelectSubset<T, corredorparadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Corredorparadas and returns the data saved in the database.
     * @param {corredorparadaCreateManyAndReturnArgs} args - Arguments to create many Corredorparadas.
     * @example
     * // Create many Corredorparadas
     * const corredorparada = await prisma.corredorparada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Corredorparadas and only return the `codigocorredor`
     * const corredorparadaWithCodigocorredorOnly = await prisma.corredorparada.createManyAndReturn({
     *   select: { codigocorredor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends corredorparadaCreateManyAndReturnArgs>(args?: SelectSubset<T, corredorparadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Corredorparada.
     * @param {corredorparadaDeleteArgs} args - Arguments to delete one Corredorparada.
     * @example
     * // Delete one Corredorparada
     * const Corredorparada = await prisma.corredorparada.delete({
     *   where: {
     *     // ... filter to delete one Corredorparada
     *   }
     * })
     * 
     */
    delete<T extends corredorparadaDeleteArgs>(args: SelectSubset<T, corredorparadaDeleteArgs<ExtArgs>>): Prisma__corredorparadaClient<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Corredorparada.
     * @param {corredorparadaUpdateArgs} args - Arguments to update one Corredorparada.
     * @example
     * // Update one Corredorparada
     * const corredorparada = await prisma.corredorparada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends corredorparadaUpdateArgs>(args: SelectSubset<T, corredorparadaUpdateArgs<ExtArgs>>): Prisma__corredorparadaClient<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Corredorparadas.
     * @param {corredorparadaDeleteManyArgs} args - Arguments to filter Corredorparadas to delete.
     * @example
     * // Delete a few Corredorparadas
     * const { count } = await prisma.corredorparada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends corredorparadaDeleteManyArgs>(args?: SelectSubset<T, corredorparadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Corredorparadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorparadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Corredorparadas
     * const corredorparada = await prisma.corredorparada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends corredorparadaUpdateManyArgs>(args: SelectSubset<T, corredorparadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Corredorparadas and returns the data updated in the database.
     * @param {corredorparadaUpdateManyAndReturnArgs} args - Arguments to update many Corredorparadas.
     * @example
     * // Update many Corredorparadas
     * const corredorparada = await prisma.corredorparada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Corredorparadas and only return the `codigocorredor`
     * const corredorparadaWithCodigocorredorOnly = await prisma.corredorparada.updateManyAndReturn({
     *   select: { codigocorredor: true },
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
    updateManyAndReturn<T extends corredorparadaUpdateManyAndReturnArgs>(args: SelectSubset<T, corredorparadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Corredorparada.
     * @param {corredorparadaUpsertArgs} args - Arguments to update or create a Corredorparada.
     * @example
     * // Update or create a Corredorparada
     * const corredorparada = await prisma.corredorparada.upsert({
     *   create: {
     *     // ... data to create a Corredorparada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Corredorparada we want to update
     *   }
     * })
     */
    upsert<T extends corredorparadaUpsertArgs>(args: SelectSubset<T, corredorparadaUpsertArgs<ExtArgs>>): Prisma__corredorparadaClient<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Corredorparadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorparadaCountArgs} args - Arguments to filter Corredorparadas to count.
     * @example
     * // Count the number of Corredorparadas
     * const count = await prisma.corredorparada.count({
     *   where: {
     *     // ... the filter for the Corredorparadas we want to count
     *   }
     * })
    **/
    count<T extends corredorparadaCountArgs>(
      args?: Subset<T, corredorparadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorredorparadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Corredorparada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorredorparadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CorredorparadaAggregateArgs>(args: Subset<T, CorredorparadaAggregateArgs>): Prisma.PrismaPromise<GetCorredorparadaAggregateType<T>>

    /**
     * Group by Corredorparada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corredorparadaGroupByArgs} args - Group by arguments.
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
      T extends corredorparadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: corredorparadaGroupByArgs['orderBy'] }
        : { orderBy?: corredorparadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, corredorparadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorredorparadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the corredorparada model
   */
  readonly fields: corredorparadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for corredorparada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__corredorparadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    corredor<T extends corredorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, corredorDefaultArgs<ExtArgs>>): Prisma__corredorClient<$Result.GetResult<Prisma.$corredorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parada<T extends paradaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paradaDefaultArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the corredorparada model
   */
  interface corredorparadaFieldRefs {
    readonly codigocorredor: FieldRef<"corredorparada", 'Int'>
    readonly codigoparada: FieldRef<"corredorparada", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * corredorparada findUnique
   */
  export type corredorparadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    /**
     * Filter, which corredorparada to fetch.
     */
    where: corredorparadaWhereUniqueInput
  }

  /**
   * corredorparada findUniqueOrThrow
   */
  export type corredorparadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    /**
     * Filter, which corredorparada to fetch.
     */
    where: corredorparadaWhereUniqueInput
  }

  /**
   * corredorparada findFirst
   */
  export type corredorparadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    /**
     * Filter, which corredorparada to fetch.
     */
    where?: corredorparadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corredorparadas to fetch.
     */
    orderBy?: corredorparadaOrderByWithRelationInput | corredorparadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for corredorparadas.
     */
    cursor?: corredorparadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corredorparadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corredorparadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of corredorparadas.
     */
    distinct?: CorredorparadaScalarFieldEnum | CorredorparadaScalarFieldEnum[]
  }

  /**
   * corredorparada findFirstOrThrow
   */
  export type corredorparadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    /**
     * Filter, which corredorparada to fetch.
     */
    where?: corredorparadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corredorparadas to fetch.
     */
    orderBy?: corredorparadaOrderByWithRelationInput | corredorparadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for corredorparadas.
     */
    cursor?: corredorparadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corredorparadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corredorparadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of corredorparadas.
     */
    distinct?: CorredorparadaScalarFieldEnum | CorredorparadaScalarFieldEnum[]
  }

  /**
   * corredorparada findMany
   */
  export type corredorparadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    /**
     * Filter, which corredorparadas to fetch.
     */
    where?: corredorparadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corredorparadas to fetch.
     */
    orderBy?: corredorparadaOrderByWithRelationInput | corredorparadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing corredorparadas.
     */
    cursor?: corredorparadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corredorparadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corredorparadas.
     */
    skip?: number
    distinct?: CorredorparadaScalarFieldEnum | CorredorparadaScalarFieldEnum[]
  }

  /**
   * corredorparada create
   */
  export type corredorparadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    /**
     * The data needed to create a corredorparada.
     */
    data: XOR<corredorparadaCreateInput, corredorparadaUncheckedCreateInput>
  }

  /**
   * corredorparada createMany
   */
  export type corredorparadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many corredorparadas.
     */
    data: corredorparadaCreateManyInput | corredorparadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * corredorparada createManyAndReturn
   */
  export type corredorparadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * The data used to create many corredorparadas.
     */
    data: corredorparadaCreateManyInput | corredorparadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * corredorparada update
   */
  export type corredorparadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    /**
     * The data needed to update a corredorparada.
     */
    data: XOR<corredorparadaUpdateInput, corredorparadaUncheckedUpdateInput>
    /**
     * Choose, which corredorparada to update.
     */
    where: corredorparadaWhereUniqueInput
  }

  /**
   * corredorparada updateMany
   */
  export type corredorparadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update corredorparadas.
     */
    data: XOR<corredorparadaUpdateManyMutationInput, corredorparadaUncheckedUpdateManyInput>
    /**
     * Filter which corredorparadas to update
     */
    where?: corredorparadaWhereInput
    /**
     * Limit how many corredorparadas to update.
     */
    limit?: number
  }

  /**
   * corredorparada updateManyAndReturn
   */
  export type corredorparadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * The data used to update corredorparadas.
     */
    data: XOR<corredorparadaUpdateManyMutationInput, corredorparadaUncheckedUpdateManyInput>
    /**
     * Filter which corredorparadas to update
     */
    where?: corredorparadaWhereInput
    /**
     * Limit how many corredorparadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * corredorparada upsert
   */
  export type corredorparadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    /**
     * The filter to search for the corredorparada to update in case it exists.
     */
    where: corredorparadaWhereUniqueInput
    /**
     * In case the corredorparada found by the `where` argument doesn't exist, create a new corredorparada with this data.
     */
    create: XOR<corredorparadaCreateInput, corredorparadaUncheckedCreateInput>
    /**
     * In case the corredorparada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<corredorparadaUpdateInput, corredorparadaUncheckedUpdateInput>
  }

  /**
   * corredorparada delete
   */
  export type corredorparadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    /**
     * Filter which corredorparada to delete.
     */
    where: corredorparadaWhereUniqueInput
  }

  /**
   * corredorparada deleteMany
   */
  export type corredorparadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which corredorparadas to delete
     */
    where?: corredorparadaWhereInput
    /**
     * Limit how many corredorparadas to delete.
     */
    limit?: number
  }

  /**
   * corredorparada without action
   */
  export type corredorparadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
  }


  /**
   * Model itinerario
   */

  export type AggregateItinerario = {
    _count: ItinerarioCountAggregateOutputType | null
    _avg: ItinerarioAvgAggregateOutputType | null
    _sum: ItinerarioSumAggregateOutputType | null
    _min: ItinerarioMinAggregateOutputType | null
    _max: ItinerarioMaxAggregateOutputType | null
  }

  export type ItinerarioAvgAggregateOutputType = {
    codigolinha: number | null
    codigoparada: number | null
  }

  export type ItinerarioSumAggregateOutputType = {
    codigolinha: number | null
    codigoparada: number | null
  }

  export type ItinerarioMinAggregateOutputType = {
    codigolinha: number | null
    prefixoveiculo: string | null
    datareferencia: Date | null
    codigoparada: number | null
    previsaochegada: Date | null
  }

  export type ItinerarioMaxAggregateOutputType = {
    codigolinha: number | null
    prefixoveiculo: string | null
    datareferencia: Date | null
    codigoparada: number | null
    previsaochegada: Date | null
  }

  export type ItinerarioCountAggregateOutputType = {
    codigolinha: number
    prefixoveiculo: number
    datareferencia: number
    codigoparada: number
    previsaochegada: number
    _all: number
  }


  export type ItinerarioAvgAggregateInputType = {
    codigolinha?: true
    codigoparada?: true
  }

  export type ItinerarioSumAggregateInputType = {
    codigolinha?: true
    codigoparada?: true
  }

  export type ItinerarioMinAggregateInputType = {
    codigolinha?: true
    prefixoveiculo?: true
    datareferencia?: true
    codigoparada?: true
    previsaochegada?: true
  }

  export type ItinerarioMaxAggregateInputType = {
    codigolinha?: true
    prefixoveiculo?: true
    datareferencia?: true
    codigoparada?: true
    previsaochegada?: true
  }

  export type ItinerarioCountAggregateInputType = {
    codigolinha?: true
    prefixoveiculo?: true
    datareferencia?: true
    codigoparada?: true
    previsaochegada?: true
    _all?: true
  }

  export type ItinerarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itinerario to aggregate.
     */
    where?: itinerarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itinerarios to fetch.
     */
    orderBy?: itinerarioOrderByWithRelationInput | itinerarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itinerarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itinerarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itinerarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned itinerarios
    **/
    _count?: true | ItinerarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItinerarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItinerarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItinerarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItinerarioMaxAggregateInputType
  }

  export type GetItinerarioAggregateType<T extends ItinerarioAggregateArgs> = {
        [P in keyof T & keyof AggregateItinerario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItinerario[P]>
      : GetScalarType<T[P], AggregateItinerario[P]>
  }




  export type itinerarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itinerarioWhereInput
    orderBy?: itinerarioOrderByWithAggregationInput | itinerarioOrderByWithAggregationInput[]
    by: ItinerarioScalarFieldEnum[] | ItinerarioScalarFieldEnum
    having?: itinerarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItinerarioCountAggregateInputType | true
    _avg?: ItinerarioAvgAggregateInputType
    _sum?: ItinerarioSumAggregateInputType
    _min?: ItinerarioMinAggregateInputType
    _max?: ItinerarioMaxAggregateInputType
  }

  export type ItinerarioGroupByOutputType = {
    codigolinha: number
    prefixoveiculo: string
    datareferencia: Date
    codigoparada: number
    previsaochegada: Date
    _count: ItinerarioCountAggregateOutputType | null
    _avg: ItinerarioAvgAggregateOutputType | null
    _sum: ItinerarioSumAggregateOutputType | null
    _min: ItinerarioMinAggregateOutputType | null
    _max: ItinerarioMaxAggregateOutputType | null
  }

  type GetItinerarioGroupByPayload<T extends itinerarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItinerarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItinerarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItinerarioGroupByOutputType[P]>
            : GetScalarType<T[P], ItinerarioGroupByOutputType[P]>
        }
      >
    >


  export type itinerarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigolinha?: boolean
    prefixoveiculo?: boolean
    datareferencia?: boolean
    codigoparada?: boolean
    previsaochegada?: boolean
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerario"]>

  export type itinerarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigolinha?: boolean
    prefixoveiculo?: boolean
    datareferencia?: boolean
    codigoparada?: boolean
    previsaochegada?: boolean
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerario"]>

  export type itinerarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigolinha?: boolean
    prefixoveiculo?: boolean
    datareferencia?: boolean
    codigoparada?: boolean
    previsaochegada?: boolean
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerario"]>

  export type itinerarioSelectScalar = {
    codigolinha?: boolean
    prefixoveiculo?: boolean
    datareferencia?: boolean
    codigoparada?: boolean
    previsaochegada?: boolean
  }

  export type itinerarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigolinha" | "prefixoveiculo" | "datareferencia" | "codigoparada" | "previsaochegada", ExtArgs["result"]["itinerario"]>
  export type itinerarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }
  export type itinerarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }
  export type itinerarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }

  export type $itinerarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "itinerario"
    objects: {
      linha: Prisma.$linhaPayload<ExtArgs>
      parada: Prisma.$paradaPayload<ExtArgs>
      veiculo: Prisma.$veiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      codigolinha: number
      prefixoveiculo: string
      datareferencia: Date
      codigoparada: number
      previsaochegada: Date
    }, ExtArgs["result"]["itinerario"]>
    composites: {}
  }

  type itinerarioGetPayload<S extends boolean | null | undefined | itinerarioDefaultArgs> = $Result.GetResult<Prisma.$itinerarioPayload, S>

  type itinerarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itinerarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItinerarioCountAggregateInputType | true
    }

  export interface itinerarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['itinerario'], meta: { name: 'itinerario' } }
    /**
     * Find zero or one Itinerario that matches the filter.
     * @param {itinerarioFindUniqueArgs} args - Arguments to find a Itinerario
     * @example
     * // Get one Itinerario
     * const itinerario = await prisma.itinerario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itinerarioFindUniqueArgs>(args: SelectSubset<T, itinerarioFindUniqueArgs<ExtArgs>>): Prisma__itinerarioClient<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Itinerario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itinerarioFindUniqueOrThrowArgs} args - Arguments to find a Itinerario
     * @example
     * // Get one Itinerario
     * const itinerario = await prisma.itinerario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itinerarioFindUniqueOrThrowArgs>(args: SelectSubset<T, itinerarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itinerarioClient<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itinerario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerarioFindFirstArgs} args - Arguments to find a Itinerario
     * @example
     * // Get one Itinerario
     * const itinerario = await prisma.itinerario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itinerarioFindFirstArgs>(args?: SelectSubset<T, itinerarioFindFirstArgs<ExtArgs>>): Prisma__itinerarioClient<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itinerario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerarioFindFirstOrThrowArgs} args - Arguments to find a Itinerario
     * @example
     * // Get one Itinerario
     * const itinerario = await prisma.itinerario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itinerarioFindFirstOrThrowArgs>(args?: SelectSubset<T, itinerarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__itinerarioClient<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Itinerarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Itinerarios
     * const itinerarios = await prisma.itinerario.findMany()
     * 
     * // Get first 10 Itinerarios
     * const itinerarios = await prisma.itinerario.findMany({ take: 10 })
     * 
     * // Only select the `codigolinha`
     * const itinerarioWithCodigolinhaOnly = await prisma.itinerario.findMany({ select: { codigolinha: true } })
     * 
     */
    findMany<T extends itinerarioFindManyArgs>(args?: SelectSubset<T, itinerarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Itinerario.
     * @param {itinerarioCreateArgs} args - Arguments to create a Itinerario.
     * @example
     * // Create one Itinerario
     * const Itinerario = await prisma.itinerario.create({
     *   data: {
     *     // ... data to create a Itinerario
     *   }
     * })
     * 
     */
    create<T extends itinerarioCreateArgs>(args: SelectSubset<T, itinerarioCreateArgs<ExtArgs>>): Prisma__itinerarioClient<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Itinerarios.
     * @param {itinerarioCreateManyArgs} args - Arguments to create many Itinerarios.
     * @example
     * // Create many Itinerarios
     * const itinerario = await prisma.itinerario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itinerarioCreateManyArgs>(args?: SelectSubset<T, itinerarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Itinerarios and returns the data saved in the database.
     * @param {itinerarioCreateManyAndReturnArgs} args - Arguments to create many Itinerarios.
     * @example
     * // Create many Itinerarios
     * const itinerario = await prisma.itinerario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Itinerarios and only return the `codigolinha`
     * const itinerarioWithCodigolinhaOnly = await prisma.itinerario.createManyAndReturn({
     *   select: { codigolinha: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itinerarioCreateManyAndReturnArgs>(args?: SelectSubset<T, itinerarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Itinerario.
     * @param {itinerarioDeleteArgs} args - Arguments to delete one Itinerario.
     * @example
     * // Delete one Itinerario
     * const Itinerario = await prisma.itinerario.delete({
     *   where: {
     *     // ... filter to delete one Itinerario
     *   }
     * })
     * 
     */
    delete<T extends itinerarioDeleteArgs>(args: SelectSubset<T, itinerarioDeleteArgs<ExtArgs>>): Prisma__itinerarioClient<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Itinerario.
     * @param {itinerarioUpdateArgs} args - Arguments to update one Itinerario.
     * @example
     * // Update one Itinerario
     * const itinerario = await prisma.itinerario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itinerarioUpdateArgs>(args: SelectSubset<T, itinerarioUpdateArgs<ExtArgs>>): Prisma__itinerarioClient<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Itinerarios.
     * @param {itinerarioDeleteManyArgs} args - Arguments to filter Itinerarios to delete.
     * @example
     * // Delete a few Itinerarios
     * const { count } = await prisma.itinerario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itinerarioDeleteManyArgs>(args?: SelectSubset<T, itinerarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itinerarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Itinerarios
     * const itinerario = await prisma.itinerario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itinerarioUpdateManyArgs>(args: SelectSubset<T, itinerarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itinerarios and returns the data updated in the database.
     * @param {itinerarioUpdateManyAndReturnArgs} args - Arguments to update many Itinerarios.
     * @example
     * // Update many Itinerarios
     * const itinerario = await prisma.itinerario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Itinerarios and only return the `codigolinha`
     * const itinerarioWithCodigolinhaOnly = await prisma.itinerario.updateManyAndReturn({
     *   select: { codigolinha: true },
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
    updateManyAndReturn<T extends itinerarioUpdateManyAndReturnArgs>(args: SelectSubset<T, itinerarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Itinerario.
     * @param {itinerarioUpsertArgs} args - Arguments to update or create a Itinerario.
     * @example
     * // Update or create a Itinerario
     * const itinerario = await prisma.itinerario.upsert({
     *   create: {
     *     // ... data to create a Itinerario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Itinerario we want to update
     *   }
     * })
     */
    upsert<T extends itinerarioUpsertArgs>(args: SelectSubset<T, itinerarioUpsertArgs<ExtArgs>>): Prisma__itinerarioClient<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Itinerarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerarioCountArgs} args - Arguments to filter Itinerarios to count.
     * @example
     * // Count the number of Itinerarios
     * const count = await prisma.itinerario.count({
     *   where: {
     *     // ... the filter for the Itinerarios we want to count
     *   }
     * })
    **/
    count<T extends itinerarioCountArgs>(
      args?: Subset<T, itinerarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItinerarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Itinerario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinerarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItinerarioAggregateArgs>(args: Subset<T, ItinerarioAggregateArgs>): Prisma.PrismaPromise<GetItinerarioAggregateType<T>>

    /**
     * Group by Itinerario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerarioGroupByArgs} args - Group by arguments.
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
      T extends itinerarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itinerarioGroupByArgs['orderBy'] }
        : { orderBy?: itinerarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, itinerarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItinerarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the itinerario model
   */
  readonly fields: itinerarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for itinerario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itinerarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    linha<T extends linhaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, linhaDefaultArgs<ExtArgs>>): Prisma__linhaClient<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parada<T extends paradaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paradaDefaultArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    veiculo<T extends veiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, veiculoDefaultArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the itinerario model
   */
  interface itinerarioFieldRefs {
    readonly codigolinha: FieldRef<"itinerario", 'Int'>
    readonly prefixoveiculo: FieldRef<"itinerario", 'String'>
    readonly datareferencia: FieldRef<"itinerario", 'DateTime'>
    readonly codigoparada: FieldRef<"itinerario", 'Int'>
    readonly previsaochegada: FieldRef<"itinerario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * itinerario findUnique
   */
  export type itinerarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    /**
     * Filter, which itinerario to fetch.
     */
    where: itinerarioWhereUniqueInput
  }

  /**
   * itinerario findUniqueOrThrow
   */
  export type itinerarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    /**
     * Filter, which itinerario to fetch.
     */
    where: itinerarioWhereUniqueInput
  }

  /**
   * itinerario findFirst
   */
  export type itinerarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    /**
     * Filter, which itinerario to fetch.
     */
    where?: itinerarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itinerarios to fetch.
     */
    orderBy?: itinerarioOrderByWithRelationInput | itinerarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itinerarios.
     */
    cursor?: itinerarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itinerarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itinerarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itinerarios.
     */
    distinct?: ItinerarioScalarFieldEnum | ItinerarioScalarFieldEnum[]
  }

  /**
   * itinerario findFirstOrThrow
   */
  export type itinerarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    /**
     * Filter, which itinerario to fetch.
     */
    where?: itinerarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itinerarios to fetch.
     */
    orderBy?: itinerarioOrderByWithRelationInput | itinerarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itinerarios.
     */
    cursor?: itinerarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itinerarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itinerarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itinerarios.
     */
    distinct?: ItinerarioScalarFieldEnum | ItinerarioScalarFieldEnum[]
  }

  /**
   * itinerario findMany
   */
  export type itinerarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    /**
     * Filter, which itinerarios to fetch.
     */
    where?: itinerarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itinerarios to fetch.
     */
    orderBy?: itinerarioOrderByWithRelationInput | itinerarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing itinerarios.
     */
    cursor?: itinerarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itinerarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itinerarios.
     */
    skip?: number
    distinct?: ItinerarioScalarFieldEnum | ItinerarioScalarFieldEnum[]
  }

  /**
   * itinerario create
   */
  export type itinerarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    /**
     * The data needed to create a itinerario.
     */
    data: XOR<itinerarioCreateInput, itinerarioUncheckedCreateInput>
  }

  /**
   * itinerario createMany
   */
  export type itinerarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many itinerarios.
     */
    data: itinerarioCreateManyInput | itinerarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * itinerario createManyAndReturn
   */
  export type itinerarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * The data used to create many itinerarios.
     */
    data: itinerarioCreateManyInput | itinerarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * itinerario update
   */
  export type itinerarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    /**
     * The data needed to update a itinerario.
     */
    data: XOR<itinerarioUpdateInput, itinerarioUncheckedUpdateInput>
    /**
     * Choose, which itinerario to update.
     */
    where: itinerarioWhereUniqueInput
  }

  /**
   * itinerario updateMany
   */
  export type itinerarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update itinerarios.
     */
    data: XOR<itinerarioUpdateManyMutationInput, itinerarioUncheckedUpdateManyInput>
    /**
     * Filter which itinerarios to update
     */
    where?: itinerarioWhereInput
    /**
     * Limit how many itinerarios to update.
     */
    limit?: number
  }

  /**
   * itinerario updateManyAndReturn
   */
  export type itinerarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * The data used to update itinerarios.
     */
    data: XOR<itinerarioUpdateManyMutationInput, itinerarioUncheckedUpdateManyInput>
    /**
     * Filter which itinerarios to update
     */
    where?: itinerarioWhereInput
    /**
     * Limit how many itinerarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * itinerario upsert
   */
  export type itinerarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    /**
     * The filter to search for the itinerario to update in case it exists.
     */
    where: itinerarioWhereUniqueInput
    /**
     * In case the itinerario found by the `where` argument doesn't exist, create a new itinerario with this data.
     */
    create: XOR<itinerarioCreateInput, itinerarioUncheckedCreateInput>
    /**
     * In case the itinerario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itinerarioUpdateInput, itinerarioUncheckedUpdateInput>
  }

  /**
   * itinerario delete
   */
  export type itinerarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    /**
     * Filter which itinerario to delete.
     */
    where: itinerarioWhereUniqueInput
  }

  /**
   * itinerario deleteMany
   */
  export type itinerarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itinerarios to delete
     */
    where?: itinerarioWhereInput
    /**
     * Limit how many itinerarios to delete.
     */
    limit?: number
  }

  /**
   * itinerario without action
   */
  export type itinerarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
  }


  /**
   * Model linha
   */

  export type AggregateLinha = {
    _count: LinhaCountAggregateOutputType | null
    _avg: LinhaAvgAggregateOutputType | null
    _sum: LinhaSumAggregateOutputType | null
    _min: LinhaMinAggregateOutputType | null
    _max: LinhaMaxAggregateOutputType | null
  }

  export type LinhaAvgAggregateOutputType = {
    codigo: number | null
    modooperacao: number | null
    sentido: number | null
  }

  export type LinhaSumAggregateOutputType = {
    codigo: number | null
    modooperacao: number | null
    sentido: number | null
  }

  export type LinhaMinAggregateOutputType = {
    codigo: number | null
    letreironumerico: string | null
    modooperacao: number | null
    modocircular: boolean | null
    sentido: number | null
    descritivoprincipal: string | null
    descritivosecundario: string | null
  }

  export type LinhaMaxAggregateOutputType = {
    codigo: number | null
    letreironumerico: string | null
    modooperacao: number | null
    modocircular: boolean | null
    sentido: number | null
    descritivoprincipal: string | null
    descritivosecundario: string | null
  }

  export type LinhaCountAggregateOutputType = {
    codigo: number
    letreironumerico: number
    modooperacao: number
    modocircular: number
    sentido: number
    descritivoprincipal: number
    descritivosecundario: number
    _all: number
  }


  export type LinhaAvgAggregateInputType = {
    codigo?: true
    modooperacao?: true
    sentido?: true
  }

  export type LinhaSumAggregateInputType = {
    codigo?: true
    modooperacao?: true
    sentido?: true
  }

  export type LinhaMinAggregateInputType = {
    codigo?: true
    letreironumerico?: true
    modooperacao?: true
    modocircular?: true
    sentido?: true
    descritivoprincipal?: true
    descritivosecundario?: true
  }

  export type LinhaMaxAggregateInputType = {
    codigo?: true
    letreironumerico?: true
    modooperacao?: true
    modocircular?: true
    sentido?: true
    descritivoprincipal?: true
    descritivosecundario?: true
  }

  export type LinhaCountAggregateInputType = {
    codigo?: true
    letreironumerico?: true
    modooperacao?: true
    modocircular?: true
    sentido?: true
    descritivoprincipal?: true
    descritivosecundario?: true
    _all?: true
  }

  export type LinhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which linha to aggregate.
     */
    where?: linhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of linhas to fetch.
     */
    orderBy?: linhaOrderByWithRelationInput | linhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: linhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` linhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` linhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned linhas
    **/
    _count?: true | LinhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinhaMaxAggregateInputType
  }

  export type GetLinhaAggregateType<T extends LinhaAggregateArgs> = {
        [P in keyof T & keyof AggregateLinha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinha[P]>
      : GetScalarType<T[P], AggregateLinha[P]>
  }




  export type linhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: linhaWhereInput
    orderBy?: linhaOrderByWithAggregationInput | linhaOrderByWithAggregationInput[]
    by: LinhaScalarFieldEnum[] | LinhaScalarFieldEnum
    having?: linhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinhaCountAggregateInputType | true
    _avg?: LinhaAvgAggregateInputType
    _sum?: LinhaSumAggregateInputType
    _min?: LinhaMinAggregateInputType
    _max?: LinhaMaxAggregateInputType
  }

  export type LinhaGroupByOutputType = {
    codigo: number
    letreironumerico: string
    modooperacao: number
    modocircular: boolean
    sentido: number
    descritivoprincipal: string
    descritivosecundario: string
    _count: LinhaCountAggregateOutputType | null
    _avg: LinhaAvgAggregateOutputType | null
    _sum: LinhaSumAggregateOutputType | null
    _min: LinhaMinAggregateOutputType | null
    _max: LinhaMaxAggregateOutputType | null
  }

  type GetLinhaGroupByPayload<T extends linhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinhaGroupByOutputType[P]>
            : GetScalarType<T[P], LinhaGroupByOutputType[P]>
        }
      >
    >


  export type linhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    letreironumerico?: boolean
    modooperacao?: boolean
    modocircular?: boolean
    sentido?: boolean
    descritivoprincipal?: boolean
    descritivosecundario?: boolean
    itinerario?: boolean | linha$itinerarioArgs<ExtArgs>
    linhaparada?: boolean | linha$linhaparadaArgs<ExtArgs>
    _count?: boolean | LinhaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linha"]>

  export type linhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    letreironumerico?: boolean
    modooperacao?: boolean
    modocircular?: boolean
    sentido?: boolean
    descritivoprincipal?: boolean
    descritivosecundario?: boolean
  }, ExtArgs["result"]["linha"]>

  export type linhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    letreironumerico?: boolean
    modooperacao?: boolean
    modocircular?: boolean
    sentido?: boolean
    descritivoprincipal?: boolean
    descritivosecundario?: boolean
  }, ExtArgs["result"]["linha"]>

  export type linhaSelectScalar = {
    codigo?: boolean
    letreironumerico?: boolean
    modooperacao?: boolean
    modocircular?: boolean
    sentido?: boolean
    descritivoprincipal?: boolean
    descritivosecundario?: boolean
  }

  export type linhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigo" | "letreironumerico" | "modooperacao" | "modocircular" | "sentido" | "descritivoprincipal" | "descritivosecundario", ExtArgs["result"]["linha"]>
  export type linhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itinerario?: boolean | linha$itinerarioArgs<ExtArgs>
    linhaparada?: boolean | linha$linhaparadaArgs<ExtArgs>
    _count?: boolean | LinhaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type linhaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type linhaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $linhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "linha"
    objects: {
      itinerario: Prisma.$itinerarioPayload<ExtArgs>[]
      linhaparada: Prisma.$linhaparadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codigo: number
      letreironumerico: string
      modooperacao: number
      modocircular: boolean
      sentido: number
      descritivoprincipal: string
      descritivosecundario: string
    }, ExtArgs["result"]["linha"]>
    composites: {}
  }

  type linhaGetPayload<S extends boolean | null | undefined | linhaDefaultArgs> = $Result.GetResult<Prisma.$linhaPayload, S>

  type linhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<linhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinhaCountAggregateInputType | true
    }

  export interface linhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['linha'], meta: { name: 'linha' } }
    /**
     * Find zero or one Linha that matches the filter.
     * @param {linhaFindUniqueArgs} args - Arguments to find a Linha
     * @example
     * // Get one Linha
     * const linha = await prisma.linha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends linhaFindUniqueArgs>(args: SelectSubset<T, linhaFindUniqueArgs<ExtArgs>>): Prisma__linhaClient<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Linha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {linhaFindUniqueOrThrowArgs} args - Arguments to find a Linha
     * @example
     * // Get one Linha
     * const linha = await prisma.linha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends linhaFindUniqueOrThrowArgs>(args: SelectSubset<T, linhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__linhaClient<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Linha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaFindFirstArgs} args - Arguments to find a Linha
     * @example
     * // Get one Linha
     * const linha = await prisma.linha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends linhaFindFirstArgs>(args?: SelectSubset<T, linhaFindFirstArgs<ExtArgs>>): Prisma__linhaClient<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Linha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaFindFirstOrThrowArgs} args - Arguments to find a Linha
     * @example
     * // Get one Linha
     * const linha = await prisma.linha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends linhaFindFirstOrThrowArgs>(args?: SelectSubset<T, linhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__linhaClient<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Linhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Linhas
     * const linhas = await prisma.linha.findMany()
     * 
     * // Get first 10 Linhas
     * const linhas = await prisma.linha.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const linhaWithCodigoOnly = await prisma.linha.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends linhaFindManyArgs>(args?: SelectSubset<T, linhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Linha.
     * @param {linhaCreateArgs} args - Arguments to create a Linha.
     * @example
     * // Create one Linha
     * const Linha = await prisma.linha.create({
     *   data: {
     *     // ... data to create a Linha
     *   }
     * })
     * 
     */
    create<T extends linhaCreateArgs>(args: SelectSubset<T, linhaCreateArgs<ExtArgs>>): Prisma__linhaClient<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Linhas.
     * @param {linhaCreateManyArgs} args - Arguments to create many Linhas.
     * @example
     * // Create many Linhas
     * const linha = await prisma.linha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends linhaCreateManyArgs>(args?: SelectSubset<T, linhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Linhas and returns the data saved in the database.
     * @param {linhaCreateManyAndReturnArgs} args - Arguments to create many Linhas.
     * @example
     * // Create many Linhas
     * const linha = await prisma.linha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Linhas and only return the `codigo`
     * const linhaWithCodigoOnly = await prisma.linha.createManyAndReturn({
     *   select: { codigo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends linhaCreateManyAndReturnArgs>(args?: SelectSubset<T, linhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Linha.
     * @param {linhaDeleteArgs} args - Arguments to delete one Linha.
     * @example
     * // Delete one Linha
     * const Linha = await prisma.linha.delete({
     *   where: {
     *     // ... filter to delete one Linha
     *   }
     * })
     * 
     */
    delete<T extends linhaDeleteArgs>(args: SelectSubset<T, linhaDeleteArgs<ExtArgs>>): Prisma__linhaClient<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Linha.
     * @param {linhaUpdateArgs} args - Arguments to update one Linha.
     * @example
     * // Update one Linha
     * const linha = await prisma.linha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends linhaUpdateArgs>(args: SelectSubset<T, linhaUpdateArgs<ExtArgs>>): Prisma__linhaClient<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Linhas.
     * @param {linhaDeleteManyArgs} args - Arguments to filter Linhas to delete.
     * @example
     * // Delete a few Linhas
     * const { count } = await prisma.linha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends linhaDeleteManyArgs>(args?: SelectSubset<T, linhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Linhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Linhas
     * const linha = await prisma.linha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends linhaUpdateManyArgs>(args: SelectSubset<T, linhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Linhas and returns the data updated in the database.
     * @param {linhaUpdateManyAndReturnArgs} args - Arguments to update many Linhas.
     * @example
     * // Update many Linhas
     * const linha = await prisma.linha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Linhas and only return the `codigo`
     * const linhaWithCodigoOnly = await prisma.linha.updateManyAndReturn({
     *   select: { codigo: true },
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
    updateManyAndReturn<T extends linhaUpdateManyAndReturnArgs>(args: SelectSubset<T, linhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Linha.
     * @param {linhaUpsertArgs} args - Arguments to update or create a Linha.
     * @example
     * // Update or create a Linha
     * const linha = await prisma.linha.upsert({
     *   create: {
     *     // ... data to create a Linha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Linha we want to update
     *   }
     * })
     */
    upsert<T extends linhaUpsertArgs>(args: SelectSubset<T, linhaUpsertArgs<ExtArgs>>): Prisma__linhaClient<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Linhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaCountArgs} args - Arguments to filter Linhas to count.
     * @example
     * // Count the number of Linhas
     * const count = await prisma.linha.count({
     *   where: {
     *     // ... the filter for the Linhas we want to count
     *   }
     * })
    **/
    count<T extends linhaCountArgs>(
      args?: Subset<T, linhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Linha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinhaAggregateArgs>(args: Subset<T, LinhaAggregateArgs>): Prisma.PrismaPromise<GetLinhaAggregateType<T>>

    /**
     * Group by Linha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaGroupByArgs} args - Group by arguments.
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
      T extends linhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: linhaGroupByArgs['orderBy'] }
        : { orderBy?: linhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, linhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the linha model
   */
  readonly fields: linhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for linha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__linhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itinerario<T extends linha$itinerarioArgs<ExtArgs> = {}>(args?: Subset<T, linha$itinerarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linhaparada<T extends linha$linhaparadaArgs<ExtArgs> = {}>(args?: Subset<T, linha$linhaparadaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the linha model
   */
  interface linhaFieldRefs {
    readonly codigo: FieldRef<"linha", 'Int'>
    readonly letreironumerico: FieldRef<"linha", 'String'>
    readonly modooperacao: FieldRef<"linha", 'Int'>
    readonly modocircular: FieldRef<"linha", 'Boolean'>
    readonly sentido: FieldRef<"linha", 'Int'>
    readonly descritivoprincipal: FieldRef<"linha", 'String'>
    readonly descritivosecundario: FieldRef<"linha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * linha findUnique
   */
  export type linhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaInclude<ExtArgs> | null
    /**
     * Filter, which linha to fetch.
     */
    where: linhaWhereUniqueInput
  }

  /**
   * linha findUniqueOrThrow
   */
  export type linhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaInclude<ExtArgs> | null
    /**
     * Filter, which linha to fetch.
     */
    where: linhaWhereUniqueInput
  }

  /**
   * linha findFirst
   */
  export type linhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaInclude<ExtArgs> | null
    /**
     * Filter, which linha to fetch.
     */
    where?: linhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of linhas to fetch.
     */
    orderBy?: linhaOrderByWithRelationInput | linhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for linhas.
     */
    cursor?: linhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` linhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` linhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of linhas.
     */
    distinct?: LinhaScalarFieldEnum | LinhaScalarFieldEnum[]
  }

  /**
   * linha findFirstOrThrow
   */
  export type linhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaInclude<ExtArgs> | null
    /**
     * Filter, which linha to fetch.
     */
    where?: linhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of linhas to fetch.
     */
    orderBy?: linhaOrderByWithRelationInput | linhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for linhas.
     */
    cursor?: linhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` linhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` linhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of linhas.
     */
    distinct?: LinhaScalarFieldEnum | LinhaScalarFieldEnum[]
  }

  /**
   * linha findMany
   */
  export type linhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaInclude<ExtArgs> | null
    /**
     * Filter, which linhas to fetch.
     */
    where?: linhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of linhas to fetch.
     */
    orderBy?: linhaOrderByWithRelationInput | linhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing linhas.
     */
    cursor?: linhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` linhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` linhas.
     */
    skip?: number
    distinct?: LinhaScalarFieldEnum | LinhaScalarFieldEnum[]
  }

  /**
   * linha create
   */
  export type linhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaInclude<ExtArgs> | null
    /**
     * The data needed to create a linha.
     */
    data: XOR<linhaCreateInput, linhaUncheckedCreateInput>
  }

  /**
   * linha createMany
   */
  export type linhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many linhas.
     */
    data: linhaCreateManyInput | linhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * linha createManyAndReturn
   */
  export type linhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * The data used to create many linhas.
     */
    data: linhaCreateManyInput | linhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * linha update
   */
  export type linhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaInclude<ExtArgs> | null
    /**
     * The data needed to update a linha.
     */
    data: XOR<linhaUpdateInput, linhaUncheckedUpdateInput>
    /**
     * Choose, which linha to update.
     */
    where: linhaWhereUniqueInput
  }

  /**
   * linha updateMany
   */
  export type linhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update linhas.
     */
    data: XOR<linhaUpdateManyMutationInput, linhaUncheckedUpdateManyInput>
    /**
     * Filter which linhas to update
     */
    where?: linhaWhereInput
    /**
     * Limit how many linhas to update.
     */
    limit?: number
  }

  /**
   * linha updateManyAndReturn
   */
  export type linhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * The data used to update linhas.
     */
    data: XOR<linhaUpdateManyMutationInput, linhaUncheckedUpdateManyInput>
    /**
     * Filter which linhas to update
     */
    where?: linhaWhereInput
    /**
     * Limit how many linhas to update.
     */
    limit?: number
  }

  /**
   * linha upsert
   */
  export type linhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaInclude<ExtArgs> | null
    /**
     * The filter to search for the linha to update in case it exists.
     */
    where: linhaWhereUniqueInput
    /**
     * In case the linha found by the `where` argument doesn't exist, create a new linha with this data.
     */
    create: XOR<linhaCreateInput, linhaUncheckedCreateInput>
    /**
     * In case the linha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<linhaUpdateInput, linhaUncheckedUpdateInput>
  }

  /**
   * linha delete
   */
  export type linhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaInclude<ExtArgs> | null
    /**
     * Filter which linha to delete.
     */
    where: linhaWhereUniqueInput
  }

  /**
   * linha deleteMany
   */
  export type linhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which linhas to delete
     */
    where?: linhaWhereInput
    /**
     * Limit how many linhas to delete.
     */
    limit?: number
  }

  /**
   * linha.itinerario
   */
  export type linha$itinerarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    where?: itinerarioWhereInput
    orderBy?: itinerarioOrderByWithRelationInput | itinerarioOrderByWithRelationInput[]
    cursor?: itinerarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItinerarioScalarFieldEnum | ItinerarioScalarFieldEnum[]
  }

  /**
   * linha.linhaparada
   */
  export type linha$linhaparadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    where?: linhaparadaWhereInput
    orderBy?: linhaparadaOrderByWithRelationInput | linhaparadaOrderByWithRelationInput[]
    cursor?: linhaparadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinhaparadaScalarFieldEnum | LinhaparadaScalarFieldEnum[]
  }

  /**
   * linha without action
   */
  export type linhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linha
     */
    select?: linhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linha
     */
    omit?: linhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaInclude<ExtArgs> | null
  }


  /**
   * Model linhaparada
   */

  export type AggregateLinhaparada = {
    _count: LinhaparadaCountAggregateOutputType | null
    _avg: LinhaparadaAvgAggregateOutputType | null
    _sum: LinhaparadaSumAggregateOutputType | null
    _min: LinhaparadaMinAggregateOutputType | null
    _max: LinhaparadaMaxAggregateOutputType | null
  }

  export type LinhaparadaAvgAggregateOutputType = {
    codigolinha: number | null
    codigoparada: number | null
  }

  export type LinhaparadaSumAggregateOutputType = {
    codigolinha: number | null
    codigoparada: number | null
  }

  export type LinhaparadaMinAggregateOutputType = {
    codigolinha: number | null
    codigoparada: number | null
  }

  export type LinhaparadaMaxAggregateOutputType = {
    codigolinha: number | null
    codigoparada: number | null
  }

  export type LinhaparadaCountAggregateOutputType = {
    codigolinha: number
    codigoparada: number
    _all: number
  }


  export type LinhaparadaAvgAggregateInputType = {
    codigolinha?: true
    codigoparada?: true
  }

  export type LinhaparadaSumAggregateInputType = {
    codigolinha?: true
    codigoparada?: true
  }

  export type LinhaparadaMinAggregateInputType = {
    codigolinha?: true
    codigoparada?: true
  }

  export type LinhaparadaMaxAggregateInputType = {
    codigolinha?: true
    codigoparada?: true
  }

  export type LinhaparadaCountAggregateInputType = {
    codigolinha?: true
    codigoparada?: true
    _all?: true
  }

  export type LinhaparadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which linhaparada to aggregate.
     */
    where?: linhaparadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of linhaparadas to fetch.
     */
    orderBy?: linhaparadaOrderByWithRelationInput | linhaparadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: linhaparadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` linhaparadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` linhaparadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned linhaparadas
    **/
    _count?: true | LinhaparadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinhaparadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinhaparadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinhaparadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinhaparadaMaxAggregateInputType
  }

  export type GetLinhaparadaAggregateType<T extends LinhaparadaAggregateArgs> = {
        [P in keyof T & keyof AggregateLinhaparada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinhaparada[P]>
      : GetScalarType<T[P], AggregateLinhaparada[P]>
  }




  export type linhaparadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: linhaparadaWhereInput
    orderBy?: linhaparadaOrderByWithAggregationInput | linhaparadaOrderByWithAggregationInput[]
    by: LinhaparadaScalarFieldEnum[] | LinhaparadaScalarFieldEnum
    having?: linhaparadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinhaparadaCountAggregateInputType | true
    _avg?: LinhaparadaAvgAggregateInputType
    _sum?: LinhaparadaSumAggregateInputType
    _min?: LinhaparadaMinAggregateInputType
    _max?: LinhaparadaMaxAggregateInputType
  }

  export type LinhaparadaGroupByOutputType = {
    codigolinha: number
    codigoparada: number
    _count: LinhaparadaCountAggregateOutputType | null
    _avg: LinhaparadaAvgAggregateOutputType | null
    _sum: LinhaparadaSumAggregateOutputType | null
    _min: LinhaparadaMinAggregateOutputType | null
    _max: LinhaparadaMaxAggregateOutputType | null
  }

  type GetLinhaparadaGroupByPayload<T extends linhaparadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinhaparadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinhaparadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinhaparadaGroupByOutputType[P]>
            : GetScalarType<T[P], LinhaparadaGroupByOutputType[P]>
        }
      >
    >


  export type linhaparadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigolinha?: boolean
    codigoparada?: boolean
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linhaparada"]>

  export type linhaparadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigolinha?: boolean
    codigoparada?: boolean
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linhaparada"]>

  export type linhaparadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigolinha?: boolean
    codigoparada?: boolean
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linhaparada"]>

  export type linhaparadaSelectScalar = {
    codigolinha?: boolean
    codigoparada?: boolean
  }

  export type linhaparadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigolinha" | "codigoparada", ExtArgs["result"]["linhaparada"]>
  export type linhaparadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }
  export type linhaparadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }
  export type linhaparadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linha?: boolean | linhaDefaultArgs<ExtArgs>
    parada?: boolean | paradaDefaultArgs<ExtArgs>
  }

  export type $linhaparadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "linhaparada"
    objects: {
      linha: Prisma.$linhaPayload<ExtArgs>
      parada: Prisma.$paradaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      codigolinha: number
      codigoparada: number
    }, ExtArgs["result"]["linhaparada"]>
    composites: {}
  }

  type linhaparadaGetPayload<S extends boolean | null | undefined | linhaparadaDefaultArgs> = $Result.GetResult<Prisma.$linhaparadaPayload, S>

  type linhaparadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<linhaparadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinhaparadaCountAggregateInputType | true
    }

  export interface linhaparadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['linhaparada'], meta: { name: 'linhaparada' } }
    /**
     * Find zero or one Linhaparada that matches the filter.
     * @param {linhaparadaFindUniqueArgs} args - Arguments to find a Linhaparada
     * @example
     * // Get one Linhaparada
     * const linhaparada = await prisma.linhaparada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends linhaparadaFindUniqueArgs>(args: SelectSubset<T, linhaparadaFindUniqueArgs<ExtArgs>>): Prisma__linhaparadaClient<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Linhaparada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {linhaparadaFindUniqueOrThrowArgs} args - Arguments to find a Linhaparada
     * @example
     * // Get one Linhaparada
     * const linhaparada = await prisma.linhaparada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends linhaparadaFindUniqueOrThrowArgs>(args: SelectSubset<T, linhaparadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__linhaparadaClient<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Linhaparada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaparadaFindFirstArgs} args - Arguments to find a Linhaparada
     * @example
     * // Get one Linhaparada
     * const linhaparada = await prisma.linhaparada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends linhaparadaFindFirstArgs>(args?: SelectSubset<T, linhaparadaFindFirstArgs<ExtArgs>>): Prisma__linhaparadaClient<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Linhaparada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaparadaFindFirstOrThrowArgs} args - Arguments to find a Linhaparada
     * @example
     * // Get one Linhaparada
     * const linhaparada = await prisma.linhaparada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends linhaparadaFindFirstOrThrowArgs>(args?: SelectSubset<T, linhaparadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__linhaparadaClient<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Linhaparadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaparadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Linhaparadas
     * const linhaparadas = await prisma.linhaparada.findMany()
     * 
     * // Get first 10 Linhaparadas
     * const linhaparadas = await prisma.linhaparada.findMany({ take: 10 })
     * 
     * // Only select the `codigolinha`
     * const linhaparadaWithCodigolinhaOnly = await prisma.linhaparada.findMany({ select: { codigolinha: true } })
     * 
     */
    findMany<T extends linhaparadaFindManyArgs>(args?: SelectSubset<T, linhaparadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Linhaparada.
     * @param {linhaparadaCreateArgs} args - Arguments to create a Linhaparada.
     * @example
     * // Create one Linhaparada
     * const Linhaparada = await prisma.linhaparada.create({
     *   data: {
     *     // ... data to create a Linhaparada
     *   }
     * })
     * 
     */
    create<T extends linhaparadaCreateArgs>(args: SelectSubset<T, linhaparadaCreateArgs<ExtArgs>>): Prisma__linhaparadaClient<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Linhaparadas.
     * @param {linhaparadaCreateManyArgs} args - Arguments to create many Linhaparadas.
     * @example
     * // Create many Linhaparadas
     * const linhaparada = await prisma.linhaparada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends linhaparadaCreateManyArgs>(args?: SelectSubset<T, linhaparadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Linhaparadas and returns the data saved in the database.
     * @param {linhaparadaCreateManyAndReturnArgs} args - Arguments to create many Linhaparadas.
     * @example
     * // Create many Linhaparadas
     * const linhaparada = await prisma.linhaparada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Linhaparadas and only return the `codigolinha`
     * const linhaparadaWithCodigolinhaOnly = await prisma.linhaparada.createManyAndReturn({
     *   select: { codigolinha: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends linhaparadaCreateManyAndReturnArgs>(args?: SelectSubset<T, linhaparadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Linhaparada.
     * @param {linhaparadaDeleteArgs} args - Arguments to delete one Linhaparada.
     * @example
     * // Delete one Linhaparada
     * const Linhaparada = await prisma.linhaparada.delete({
     *   where: {
     *     // ... filter to delete one Linhaparada
     *   }
     * })
     * 
     */
    delete<T extends linhaparadaDeleteArgs>(args: SelectSubset<T, linhaparadaDeleteArgs<ExtArgs>>): Prisma__linhaparadaClient<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Linhaparada.
     * @param {linhaparadaUpdateArgs} args - Arguments to update one Linhaparada.
     * @example
     * // Update one Linhaparada
     * const linhaparada = await prisma.linhaparada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends linhaparadaUpdateArgs>(args: SelectSubset<T, linhaparadaUpdateArgs<ExtArgs>>): Prisma__linhaparadaClient<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Linhaparadas.
     * @param {linhaparadaDeleteManyArgs} args - Arguments to filter Linhaparadas to delete.
     * @example
     * // Delete a few Linhaparadas
     * const { count } = await prisma.linhaparada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends linhaparadaDeleteManyArgs>(args?: SelectSubset<T, linhaparadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Linhaparadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaparadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Linhaparadas
     * const linhaparada = await prisma.linhaparada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends linhaparadaUpdateManyArgs>(args: SelectSubset<T, linhaparadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Linhaparadas and returns the data updated in the database.
     * @param {linhaparadaUpdateManyAndReturnArgs} args - Arguments to update many Linhaparadas.
     * @example
     * // Update many Linhaparadas
     * const linhaparada = await prisma.linhaparada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Linhaparadas and only return the `codigolinha`
     * const linhaparadaWithCodigolinhaOnly = await prisma.linhaparada.updateManyAndReturn({
     *   select: { codigolinha: true },
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
    updateManyAndReturn<T extends linhaparadaUpdateManyAndReturnArgs>(args: SelectSubset<T, linhaparadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Linhaparada.
     * @param {linhaparadaUpsertArgs} args - Arguments to update or create a Linhaparada.
     * @example
     * // Update or create a Linhaparada
     * const linhaparada = await prisma.linhaparada.upsert({
     *   create: {
     *     // ... data to create a Linhaparada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Linhaparada we want to update
     *   }
     * })
     */
    upsert<T extends linhaparadaUpsertArgs>(args: SelectSubset<T, linhaparadaUpsertArgs<ExtArgs>>): Prisma__linhaparadaClient<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Linhaparadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaparadaCountArgs} args - Arguments to filter Linhaparadas to count.
     * @example
     * // Count the number of Linhaparadas
     * const count = await prisma.linhaparada.count({
     *   where: {
     *     // ... the filter for the Linhaparadas we want to count
     *   }
     * })
    **/
    count<T extends linhaparadaCountArgs>(
      args?: Subset<T, linhaparadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinhaparadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Linhaparada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinhaparadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinhaparadaAggregateArgs>(args: Subset<T, LinhaparadaAggregateArgs>): Prisma.PrismaPromise<GetLinhaparadaAggregateType<T>>

    /**
     * Group by Linhaparada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linhaparadaGroupByArgs} args - Group by arguments.
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
      T extends linhaparadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: linhaparadaGroupByArgs['orderBy'] }
        : { orderBy?: linhaparadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, linhaparadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinhaparadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the linhaparada model
   */
  readonly fields: linhaparadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for linhaparada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__linhaparadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    linha<T extends linhaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, linhaDefaultArgs<ExtArgs>>): Prisma__linhaClient<$Result.GetResult<Prisma.$linhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parada<T extends paradaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paradaDefaultArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the linhaparada model
   */
  interface linhaparadaFieldRefs {
    readonly codigolinha: FieldRef<"linhaparada", 'Int'>
    readonly codigoparada: FieldRef<"linhaparada", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * linhaparada findUnique
   */
  export type linhaparadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    /**
     * Filter, which linhaparada to fetch.
     */
    where: linhaparadaWhereUniqueInput
  }

  /**
   * linhaparada findUniqueOrThrow
   */
  export type linhaparadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    /**
     * Filter, which linhaparada to fetch.
     */
    where: linhaparadaWhereUniqueInput
  }

  /**
   * linhaparada findFirst
   */
  export type linhaparadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    /**
     * Filter, which linhaparada to fetch.
     */
    where?: linhaparadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of linhaparadas to fetch.
     */
    orderBy?: linhaparadaOrderByWithRelationInput | linhaparadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for linhaparadas.
     */
    cursor?: linhaparadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` linhaparadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` linhaparadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of linhaparadas.
     */
    distinct?: LinhaparadaScalarFieldEnum | LinhaparadaScalarFieldEnum[]
  }

  /**
   * linhaparada findFirstOrThrow
   */
  export type linhaparadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    /**
     * Filter, which linhaparada to fetch.
     */
    where?: linhaparadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of linhaparadas to fetch.
     */
    orderBy?: linhaparadaOrderByWithRelationInput | linhaparadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for linhaparadas.
     */
    cursor?: linhaparadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` linhaparadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` linhaparadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of linhaparadas.
     */
    distinct?: LinhaparadaScalarFieldEnum | LinhaparadaScalarFieldEnum[]
  }

  /**
   * linhaparada findMany
   */
  export type linhaparadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    /**
     * Filter, which linhaparadas to fetch.
     */
    where?: linhaparadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of linhaparadas to fetch.
     */
    orderBy?: linhaparadaOrderByWithRelationInput | linhaparadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing linhaparadas.
     */
    cursor?: linhaparadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` linhaparadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` linhaparadas.
     */
    skip?: number
    distinct?: LinhaparadaScalarFieldEnum | LinhaparadaScalarFieldEnum[]
  }

  /**
   * linhaparada create
   */
  export type linhaparadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    /**
     * The data needed to create a linhaparada.
     */
    data: XOR<linhaparadaCreateInput, linhaparadaUncheckedCreateInput>
  }

  /**
   * linhaparada createMany
   */
  export type linhaparadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many linhaparadas.
     */
    data: linhaparadaCreateManyInput | linhaparadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * linhaparada createManyAndReturn
   */
  export type linhaparadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * The data used to create many linhaparadas.
     */
    data: linhaparadaCreateManyInput | linhaparadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * linhaparada update
   */
  export type linhaparadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    /**
     * The data needed to update a linhaparada.
     */
    data: XOR<linhaparadaUpdateInput, linhaparadaUncheckedUpdateInput>
    /**
     * Choose, which linhaparada to update.
     */
    where: linhaparadaWhereUniqueInput
  }

  /**
   * linhaparada updateMany
   */
  export type linhaparadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update linhaparadas.
     */
    data: XOR<linhaparadaUpdateManyMutationInput, linhaparadaUncheckedUpdateManyInput>
    /**
     * Filter which linhaparadas to update
     */
    where?: linhaparadaWhereInput
    /**
     * Limit how many linhaparadas to update.
     */
    limit?: number
  }

  /**
   * linhaparada updateManyAndReturn
   */
  export type linhaparadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * The data used to update linhaparadas.
     */
    data: XOR<linhaparadaUpdateManyMutationInput, linhaparadaUncheckedUpdateManyInput>
    /**
     * Filter which linhaparadas to update
     */
    where?: linhaparadaWhereInput
    /**
     * Limit how many linhaparadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * linhaparada upsert
   */
  export type linhaparadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    /**
     * The filter to search for the linhaparada to update in case it exists.
     */
    where: linhaparadaWhereUniqueInput
    /**
     * In case the linhaparada found by the `where` argument doesn't exist, create a new linhaparada with this data.
     */
    create: XOR<linhaparadaCreateInput, linhaparadaUncheckedCreateInput>
    /**
     * In case the linhaparada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<linhaparadaUpdateInput, linhaparadaUncheckedUpdateInput>
  }

  /**
   * linhaparada delete
   */
  export type linhaparadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    /**
     * Filter which linhaparada to delete.
     */
    where: linhaparadaWhereUniqueInput
  }

  /**
   * linhaparada deleteMany
   */
  export type linhaparadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which linhaparadas to delete
     */
    where?: linhaparadaWhereInput
    /**
     * Limit how many linhaparadas to delete.
     */
    limit?: number
  }

  /**
   * linhaparada without action
   */
  export type linhaparadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
  }


  /**
   * Model parada
   */

  export type AggregateParada = {
    _count: ParadaCountAggregateOutputType | null
    _avg: ParadaAvgAggregateOutputType | null
    _sum: ParadaSumAggregateOutputType | null
    _min: ParadaMinAggregateOutputType | null
    _max: ParadaMaxAggregateOutputType | null
  }

  export type ParadaAvgAggregateOutputType = {
    codigo: number | null
    longitude: number | null
    latitude: number | null
  }

  export type ParadaSumAggregateOutputType = {
    codigo: number | null
    longitude: number | null
    latitude: number | null
  }

  export type ParadaMinAggregateOutputType = {
    codigo: number | null
    nome: string | null
    endereco: string | null
    longitude: number | null
    latitude: number | null
  }

  export type ParadaMaxAggregateOutputType = {
    codigo: number | null
    nome: string | null
    endereco: string | null
    longitude: number | null
    latitude: number | null
  }

  export type ParadaCountAggregateOutputType = {
    codigo: number
    nome: number
    endereco: number
    longitude: number
    latitude: number
    _all: number
  }


  export type ParadaAvgAggregateInputType = {
    codigo?: true
    longitude?: true
    latitude?: true
  }

  export type ParadaSumAggregateInputType = {
    codigo?: true
    longitude?: true
    latitude?: true
  }

  export type ParadaMinAggregateInputType = {
    codigo?: true
    nome?: true
    endereco?: true
    longitude?: true
    latitude?: true
  }

  export type ParadaMaxAggregateInputType = {
    codigo?: true
    nome?: true
    endereco?: true
    longitude?: true
    latitude?: true
  }

  export type ParadaCountAggregateInputType = {
    codigo?: true
    nome?: true
    endereco?: true
    longitude?: true
    latitude?: true
    _all?: true
  }

  export type ParadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parada to aggregate.
     */
    where?: paradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paradas to fetch.
     */
    orderBy?: paradaOrderByWithRelationInput | paradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paradas
    **/
    _count?: true | ParadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParadaMaxAggregateInputType
  }

  export type GetParadaAggregateType<T extends ParadaAggregateArgs> = {
        [P in keyof T & keyof AggregateParada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParada[P]>
      : GetScalarType<T[P], AggregateParada[P]>
  }




  export type paradaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paradaWhereInput
    orderBy?: paradaOrderByWithAggregationInput | paradaOrderByWithAggregationInput[]
    by: ParadaScalarFieldEnum[] | ParadaScalarFieldEnum
    having?: paradaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParadaCountAggregateInputType | true
    _avg?: ParadaAvgAggregateInputType
    _sum?: ParadaSumAggregateInputType
    _min?: ParadaMinAggregateInputType
    _max?: ParadaMaxAggregateInputType
  }

  export type ParadaGroupByOutputType = {
    codigo: number
    nome: string | null
    endereco: string | null
    longitude: number
    latitude: number
    _count: ParadaCountAggregateOutputType | null
    _avg: ParadaAvgAggregateOutputType | null
    _sum: ParadaSumAggregateOutputType | null
    _min: ParadaMinAggregateOutputType | null
    _max: ParadaMaxAggregateOutputType | null
  }

  type GetParadaGroupByPayload<T extends paradaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParadaGroupByOutputType[P]>
            : GetScalarType<T[P], ParadaGroupByOutputType[P]>
        }
      >
    >


  export type paradaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nome?: boolean
    endereco?: boolean
    longitude?: boolean
    latitude?: boolean
    corredorparada?: boolean | parada$corredorparadaArgs<ExtArgs>
    itinerario?: boolean | parada$itinerarioArgs<ExtArgs>
    linhaparada?: boolean | parada$linhaparadaArgs<ExtArgs>
    _count?: boolean | ParadaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parada"]>

  export type paradaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nome?: boolean
    endereco?: boolean
    longitude?: boolean
    latitude?: boolean
  }, ExtArgs["result"]["parada"]>

  export type paradaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    nome?: boolean
    endereco?: boolean
    longitude?: boolean
    latitude?: boolean
  }, ExtArgs["result"]["parada"]>

  export type paradaSelectScalar = {
    codigo?: boolean
    nome?: boolean
    endereco?: boolean
    longitude?: boolean
    latitude?: boolean
  }

  export type paradaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigo" | "nome" | "endereco" | "longitude" | "latitude", ExtArgs["result"]["parada"]>
  export type paradaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corredorparada?: boolean | parada$corredorparadaArgs<ExtArgs>
    itinerario?: boolean | parada$itinerarioArgs<ExtArgs>
    linhaparada?: boolean | parada$linhaparadaArgs<ExtArgs>
    _count?: boolean | ParadaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type paradaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type paradaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $paradaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "parada"
    objects: {
      corredorparada: Prisma.$corredorparadaPayload<ExtArgs>[]
      itinerario: Prisma.$itinerarioPayload<ExtArgs>[]
      linhaparada: Prisma.$linhaparadaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codigo: number
      nome: string | null
      endereco: string | null
      longitude: number
      latitude: number
    }, ExtArgs["result"]["parada"]>
    composites: {}
  }

  type paradaGetPayload<S extends boolean | null | undefined | paradaDefaultArgs> = $Result.GetResult<Prisma.$paradaPayload, S>

  type paradaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paradaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParadaCountAggregateInputType | true
    }

  export interface paradaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['parada'], meta: { name: 'parada' } }
    /**
     * Find zero or one Parada that matches the filter.
     * @param {paradaFindUniqueArgs} args - Arguments to find a Parada
     * @example
     * // Get one Parada
     * const parada = await prisma.parada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paradaFindUniqueArgs>(args: SelectSubset<T, paradaFindUniqueArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paradaFindUniqueOrThrowArgs} args - Arguments to find a Parada
     * @example
     * // Get one Parada
     * const parada = await prisma.parada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paradaFindUniqueOrThrowArgs>(args: SelectSubset<T, paradaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paradaFindFirstArgs} args - Arguments to find a Parada
     * @example
     * // Get one Parada
     * const parada = await prisma.parada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paradaFindFirstArgs>(args?: SelectSubset<T, paradaFindFirstArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paradaFindFirstOrThrowArgs} args - Arguments to find a Parada
     * @example
     * // Get one Parada
     * const parada = await prisma.parada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paradaFindFirstOrThrowArgs>(args?: SelectSubset<T, paradaFindFirstOrThrowArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paradas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paradaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paradas
     * const paradas = await prisma.parada.findMany()
     * 
     * // Get first 10 Paradas
     * const paradas = await prisma.parada.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const paradaWithCodigoOnly = await prisma.parada.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends paradaFindManyArgs>(args?: SelectSubset<T, paradaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parada.
     * @param {paradaCreateArgs} args - Arguments to create a Parada.
     * @example
     * // Create one Parada
     * const Parada = await prisma.parada.create({
     *   data: {
     *     // ... data to create a Parada
     *   }
     * })
     * 
     */
    create<T extends paradaCreateArgs>(args: SelectSubset<T, paradaCreateArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paradas.
     * @param {paradaCreateManyArgs} args - Arguments to create many Paradas.
     * @example
     * // Create many Paradas
     * const parada = await prisma.parada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paradaCreateManyArgs>(args?: SelectSubset<T, paradaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paradas and returns the data saved in the database.
     * @param {paradaCreateManyAndReturnArgs} args - Arguments to create many Paradas.
     * @example
     * // Create many Paradas
     * const parada = await prisma.parada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paradas and only return the `codigo`
     * const paradaWithCodigoOnly = await prisma.parada.createManyAndReturn({
     *   select: { codigo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paradaCreateManyAndReturnArgs>(args?: SelectSubset<T, paradaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parada.
     * @param {paradaDeleteArgs} args - Arguments to delete one Parada.
     * @example
     * // Delete one Parada
     * const Parada = await prisma.parada.delete({
     *   where: {
     *     // ... filter to delete one Parada
     *   }
     * })
     * 
     */
    delete<T extends paradaDeleteArgs>(args: SelectSubset<T, paradaDeleteArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parada.
     * @param {paradaUpdateArgs} args - Arguments to update one Parada.
     * @example
     * // Update one Parada
     * const parada = await prisma.parada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paradaUpdateArgs>(args: SelectSubset<T, paradaUpdateArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paradas.
     * @param {paradaDeleteManyArgs} args - Arguments to filter Paradas to delete.
     * @example
     * // Delete a few Paradas
     * const { count } = await prisma.parada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paradaDeleteManyArgs>(args?: SelectSubset<T, paradaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paradaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paradas
     * const parada = await prisma.parada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paradaUpdateManyArgs>(args: SelectSubset<T, paradaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paradas and returns the data updated in the database.
     * @param {paradaUpdateManyAndReturnArgs} args - Arguments to update many Paradas.
     * @example
     * // Update many Paradas
     * const parada = await prisma.parada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paradas and only return the `codigo`
     * const paradaWithCodigoOnly = await prisma.parada.updateManyAndReturn({
     *   select: { codigo: true },
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
    updateManyAndReturn<T extends paradaUpdateManyAndReturnArgs>(args: SelectSubset<T, paradaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parada.
     * @param {paradaUpsertArgs} args - Arguments to update or create a Parada.
     * @example
     * // Update or create a Parada
     * const parada = await prisma.parada.upsert({
     *   create: {
     *     // ... data to create a Parada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parada we want to update
     *   }
     * })
     */
    upsert<T extends paradaUpsertArgs>(args: SelectSubset<T, paradaUpsertArgs<ExtArgs>>): Prisma__paradaClient<$Result.GetResult<Prisma.$paradaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paradaCountArgs} args - Arguments to filter Paradas to count.
     * @example
     * // Count the number of Paradas
     * const count = await prisma.parada.count({
     *   where: {
     *     // ... the filter for the Paradas we want to count
     *   }
     * })
    **/
    count<T extends paradaCountArgs>(
      args?: Subset<T, paradaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParadaAggregateArgs>(args: Subset<T, ParadaAggregateArgs>): Prisma.PrismaPromise<GetParadaAggregateType<T>>

    /**
     * Group by Parada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paradaGroupByArgs} args - Group by arguments.
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
      T extends paradaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paradaGroupByArgs['orderBy'] }
        : { orderBy?: paradaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paradaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the parada model
   */
  readonly fields: paradaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for parada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paradaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    corredorparada<T extends parada$corredorparadaArgs<ExtArgs> = {}>(args?: Subset<T, parada$corredorparadaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corredorparadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itinerario<T extends parada$itinerarioArgs<ExtArgs> = {}>(args?: Subset<T, parada$itinerarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linhaparada<T extends parada$linhaparadaArgs<ExtArgs> = {}>(args?: Subset<T, parada$linhaparadaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$linhaparadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the parada model
   */
  interface paradaFieldRefs {
    readonly codigo: FieldRef<"parada", 'Int'>
    readonly nome: FieldRef<"parada", 'String'>
    readonly endereco: FieldRef<"parada", 'String'>
    readonly longitude: FieldRef<"parada", 'Float'>
    readonly latitude: FieldRef<"parada", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * parada findUnique
   */
  export type paradaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paradaInclude<ExtArgs> | null
    /**
     * Filter, which parada to fetch.
     */
    where: paradaWhereUniqueInput
  }

  /**
   * parada findUniqueOrThrow
   */
  export type paradaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paradaInclude<ExtArgs> | null
    /**
     * Filter, which parada to fetch.
     */
    where: paradaWhereUniqueInput
  }

  /**
   * parada findFirst
   */
  export type paradaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paradaInclude<ExtArgs> | null
    /**
     * Filter, which parada to fetch.
     */
    where?: paradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paradas to fetch.
     */
    orderBy?: paradaOrderByWithRelationInput | paradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paradas.
     */
    cursor?: paradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paradas.
     */
    distinct?: ParadaScalarFieldEnum | ParadaScalarFieldEnum[]
  }

  /**
   * parada findFirstOrThrow
   */
  export type paradaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paradaInclude<ExtArgs> | null
    /**
     * Filter, which parada to fetch.
     */
    where?: paradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paradas to fetch.
     */
    orderBy?: paradaOrderByWithRelationInput | paradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paradas.
     */
    cursor?: paradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paradas.
     */
    distinct?: ParadaScalarFieldEnum | ParadaScalarFieldEnum[]
  }

  /**
   * parada findMany
   */
  export type paradaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paradaInclude<ExtArgs> | null
    /**
     * Filter, which paradas to fetch.
     */
    where?: paradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paradas to fetch.
     */
    orderBy?: paradaOrderByWithRelationInput | paradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paradas.
     */
    cursor?: paradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paradas.
     */
    skip?: number
    distinct?: ParadaScalarFieldEnum | ParadaScalarFieldEnum[]
  }

  /**
   * parada create
   */
  export type paradaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paradaInclude<ExtArgs> | null
    /**
     * The data needed to create a parada.
     */
    data: XOR<paradaCreateInput, paradaUncheckedCreateInput>
  }

  /**
   * parada createMany
   */
  export type paradaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paradas.
     */
    data: paradaCreateManyInput | paradaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * parada createManyAndReturn
   */
  export type paradaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * The data used to create many paradas.
     */
    data: paradaCreateManyInput | paradaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * parada update
   */
  export type paradaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paradaInclude<ExtArgs> | null
    /**
     * The data needed to update a parada.
     */
    data: XOR<paradaUpdateInput, paradaUncheckedUpdateInput>
    /**
     * Choose, which parada to update.
     */
    where: paradaWhereUniqueInput
  }

  /**
   * parada updateMany
   */
  export type paradaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paradas.
     */
    data: XOR<paradaUpdateManyMutationInput, paradaUncheckedUpdateManyInput>
    /**
     * Filter which paradas to update
     */
    where?: paradaWhereInput
    /**
     * Limit how many paradas to update.
     */
    limit?: number
  }

  /**
   * parada updateManyAndReturn
   */
  export type paradaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * The data used to update paradas.
     */
    data: XOR<paradaUpdateManyMutationInput, paradaUncheckedUpdateManyInput>
    /**
     * Filter which paradas to update
     */
    where?: paradaWhereInput
    /**
     * Limit how many paradas to update.
     */
    limit?: number
  }

  /**
   * parada upsert
   */
  export type paradaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paradaInclude<ExtArgs> | null
    /**
     * The filter to search for the parada to update in case it exists.
     */
    where: paradaWhereUniqueInput
    /**
     * In case the parada found by the `where` argument doesn't exist, create a new parada with this data.
     */
    create: XOR<paradaCreateInput, paradaUncheckedCreateInput>
    /**
     * In case the parada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paradaUpdateInput, paradaUncheckedUpdateInput>
  }

  /**
   * parada delete
   */
  export type paradaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paradaInclude<ExtArgs> | null
    /**
     * Filter which parada to delete.
     */
    where: paradaWhereUniqueInput
  }

  /**
   * parada deleteMany
   */
  export type paradaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paradas to delete
     */
    where?: paradaWhereInput
    /**
     * Limit how many paradas to delete.
     */
    limit?: number
  }

  /**
   * parada.corredorparada
   */
  export type parada$corredorparadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corredorparada
     */
    select?: corredorparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corredorparada
     */
    omit?: corredorparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corredorparadaInclude<ExtArgs> | null
    where?: corredorparadaWhereInput
    orderBy?: corredorparadaOrderByWithRelationInput | corredorparadaOrderByWithRelationInput[]
    cursor?: corredorparadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CorredorparadaScalarFieldEnum | CorredorparadaScalarFieldEnum[]
  }

  /**
   * parada.itinerario
   */
  export type parada$itinerarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    where?: itinerarioWhereInput
    orderBy?: itinerarioOrderByWithRelationInput | itinerarioOrderByWithRelationInput[]
    cursor?: itinerarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItinerarioScalarFieldEnum | ItinerarioScalarFieldEnum[]
  }

  /**
   * parada.linhaparada
   */
  export type parada$linhaparadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the linhaparada
     */
    select?: linhaparadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the linhaparada
     */
    omit?: linhaparadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: linhaparadaInclude<ExtArgs> | null
    where?: linhaparadaWhereInput
    orderBy?: linhaparadaOrderByWithRelationInput | linhaparadaOrderByWithRelationInput[]
    cursor?: linhaparadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinhaparadaScalarFieldEnum | LinhaparadaScalarFieldEnum[]
  }

  /**
   * parada without action
   */
  export type paradaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parada
     */
    select?: paradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the parada
     */
    omit?: paradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paradaInclude<ExtArgs> | null
  }


  /**
   * Model veiculo
   */

  export type AggregateVeiculo = {
    _count: VeiculoCountAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  export type VeiculoMinAggregateOutputType = {
    prefixo: string | null
    acessopcd: boolean | null
  }

  export type VeiculoMaxAggregateOutputType = {
    prefixo: string | null
    acessopcd: boolean | null
  }

  export type VeiculoCountAggregateOutputType = {
    prefixo: number
    acessopcd: number
    _all: number
  }


  export type VeiculoMinAggregateInputType = {
    prefixo?: true
    acessopcd?: true
  }

  export type VeiculoMaxAggregateInputType = {
    prefixo?: true
    acessopcd?: true
  }

  export type VeiculoCountAggregateInputType = {
    prefixo?: true
    acessopcd?: true
    _all?: true
  }

  export type VeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which veiculo to aggregate.
     */
    where?: veiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: veiculoOrderByWithRelationInput | veiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: veiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned veiculos
    **/
    _count?: true | VeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoMaxAggregateInputType
  }

  export type GetVeiculoAggregateType<T extends VeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculo[P]>
      : GetScalarType<T[P], AggregateVeiculo[P]>
  }




  export type veiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: veiculoWhereInput
    orderBy?: veiculoOrderByWithAggregationInput | veiculoOrderByWithAggregationInput[]
    by: VeiculoScalarFieldEnum[] | VeiculoScalarFieldEnum
    having?: veiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoCountAggregateInputType | true
    _min?: VeiculoMinAggregateInputType
    _max?: VeiculoMaxAggregateInputType
  }

  export type VeiculoGroupByOutputType = {
    prefixo: string
    acessopcd: boolean
    _count: VeiculoCountAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  type GetVeiculoGroupByPayload<T extends veiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
        }
      >
    >


  export type veiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prefixo?: boolean
    acessopcd?: boolean
    itinerario?: boolean | veiculo$itinerarioArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type veiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prefixo?: boolean
    acessopcd?: boolean
  }, ExtArgs["result"]["veiculo"]>

  export type veiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prefixo?: boolean
    acessopcd?: boolean
  }, ExtArgs["result"]["veiculo"]>

  export type veiculoSelectScalar = {
    prefixo?: boolean
    acessopcd?: boolean
  }

  export type veiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prefixo" | "acessopcd", ExtArgs["result"]["veiculo"]>
  export type veiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itinerario?: boolean | veiculo$itinerarioArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type veiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type veiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $veiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "veiculo"
    objects: {
      itinerario: Prisma.$itinerarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      prefixo: string
      acessopcd: boolean
    }, ExtArgs["result"]["veiculo"]>
    composites: {}
  }

  type veiculoGetPayload<S extends boolean | null | undefined | veiculoDefaultArgs> = $Result.GetResult<Prisma.$veiculoPayload, S>

  type veiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<veiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeiculoCountAggregateInputType | true
    }

  export interface veiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['veiculo'], meta: { name: 'veiculo' } }
    /**
     * Find zero or one Veiculo that matches the filter.
     * @param {veiculoFindUniqueArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends veiculoFindUniqueArgs>(args: SelectSubset<T, veiculoFindUniqueArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {veiculoFindUniqueOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends veiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, veiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoFindFirstArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends veiculoFindFirstArgs>(args?: SelectSubset<T, veiculoFindFirstArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoFindFirstOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends veiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, veiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculo.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculo.findMany({ take: 10 })
     * 
     * // Only select the `prefixo`
     * const veiculoWithPrefixoOnly = await prisma.veiculo.findMany({ select: { prefixo: true } })
     * 
     */
    findMany<T extends veiculoFindManyArgs>(args?: SelectSubset<T, veiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veiculo.
     * @param {veiculoCreateArgs} args - Arguments to create a Veiculo.
     * @example
     * // Create one Veiculo
     * const Veiculo = await prisma.veiculo.create({
     *   data: {
     *     // ... data to create a Veiculo
     *   }
     * })
     * 
     */
    create<T extends veiculoCreateArgs>(args: SelectSubset<T, veiculoCreateArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veiculos.
     * @param {veiculoCreateManyArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends veiculoCreateManyArgs>(args?: SelectSubset<T, veiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veiculos and returns the data saved in the database.
     * @param {veiculoCreateManyAndReturnArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veiculos and only return the `prefixo`
     * const veiculoWithPrefixoOnly = await prisma.veiculo.createManyAndReturn({
     *   select: { prefixo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends veiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, veiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veiculo.
     * @param {veiculoDeleteArgs} args - Arguments to delete one Veiculo.
     * @example
     * // Delete one Veiculo
     * const Veiculo = await prisma.veiculo.delete({
     *   where: {
     *     // ... filter to delete one Veiculo
     *   }
     * })
     * 
     */
    delete<T extends veiculoDeleteArgs>(args: SelectSubset<T, veiculoDeleteArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veiculo.
     * @param {veiculoUpdateArgs} args - Arguments to update one Veiculo.
     * @example
     * // Update one Veiculo
     * const veiculo = await prisma.veiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends veiculoUpdateArgs>(args: SelectSubset<T, veiculoUpdateArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veiculos.
     * @param {veiculoDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends veiculoDeleteManyArgs>(args?: SelectSubset<T, veiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends veiculoUpdateManyArgs>(args: SelectSubset<T, veiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos and returns the data updated in the database.
     * @param {veiculoUpdateManyAndReturnArgs} args - Arguments to update many Veiculos.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veiculos and only return the `prefixo`
     * const veiculoWithPrefixoOnly = await prisma.veiculo.updateManyAndReturn({
     *   select: { prefixo: true },
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
    updateManyAndReturn<T extends veiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, veiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veiculo.
     * @param {veiculoUpsertArgs} args - Arguments to update or create a Veiculo.
     * @example
     * // Update or create a Veiculo
     * const veiculo = await prisma.veiculo.upsert({
     *   create: {
     *     // ... data to create a Veiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculo we want to update
     *   }
     * })
     */
    upsert<T extends veiculoUpsertArgs>(args: SelectSubset<T, veiculoUpsertArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculo.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends veiculoCountArgs>(
      args?: Subset<T, veiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeiculoAggregateArgs>(args: Subset<T, VeiculoAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAggregateType<T>>

    /**
     * Group by Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoGroupByArgs} args - Group by arguments.
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
      T extends veiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: veiculoGroupByArgs['orderBy'] }
        : { orderBy?: veiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, veiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the veiculo model
   */
  readonly fields: veiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for veiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__veiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itinerario<T extends veiculo$itinerarioArgs<ExtArgs> = {}>(args?: Subset<T, veiculo$itinerarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the veiculo model
   */
  interface veiculoFieldRefs {
    readonly prefixo: FieldRef<"veiculo", 'String'>
    readonly acessopcd: FieldRef<"veiculo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * veiculo findUnique
   */
  export type veiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter, which veiculo to fetch.
     */
    where: veiculoWhereUniqueInput
  }

  /**
   * veiculo findUniqueOrThrow
   */
  export type veiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter, which veiculo to fetch.
     */
    where: veiculoWhereUniqueInput
  }

  /**
   * veiculo findFirst
   */
  export type veiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter, which veiculo to fetch.
     */
    where?: veiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: veiculoOrderByWithRelationInput | veiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veiculos.
     */
    cursor?: veiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * veiculo findFirstOrThrow
   */
  export type veiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter, which veiculo to fetch.
     */
    where?: veiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: veiculoOrderByWithRelationInput | veiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veiculos.
     */
    cursor?: veiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * veiculo findMany
   */
  export type veiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter, which veiculos to fetch.
     */
    where?: veiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: veiculoOrderByWithRelationInput | veiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing veiculos.
     */
    cursor?: veiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * veiculo create
   */
  export type veiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a veiculo.
     */
    data: XOR<veiculoCreateInput, veiculoUncheckedCreateInput>
  }

  /**
   * veiculo createMany
   */
  export type veiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many veiculos.
     */
    data: veiculoCreateManyInput | veiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * veiculo createManyAndReturn
   */
  export type veiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * The data used to create many veiculos.
     */
    data: veiculoCreateManyInput | veiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * veiculo update
   */
  export type veiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a veiculo.
     */
    data: XOR<veiculoUpdateInput, veiculoUncheckedUpdateInput>
    /**
     * Choose, which veiculo to update.
     */
    where: veiculoWhereUniqueInput
  }

  /**
   * veiculo updateMany
   */
  export type veiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update veiculos.
     */
    data: XOR<veiculoUpdateManyMutationInput, veiculoUncheckedUpdateManyInput>
    /**
     * Filter which veiculos to update
     */
    where?: veiculoWhereInput
    /**
     * Limit how many veiculos to update.
     */
    limit?: number
  }

  /**
   * veiculo updateManyAndReturn
   */
  export type veiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * The data used to update veiculos.
     */
    data: XOR<veiculoUpdateManyMutationInput, veiculoUncheckedUpdateManyInput>
    /**
     * Filter which veiculos to update
     */
    where?: veiculoWhereInput
    /**
     * Limit how many veiculos to update.
     */
    limit?: number
  }

  /**
   * veiculo upsert
   */
  export type veiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the veiculo to update in case it exists.
     */
    where: veiculoWhereUniqueInput
    /**
     * In case the veiculo found by the `where` argument doesn't exist, create a new veiculo with this data.
     */
    create: XOR<veiculoCreateInput, veiculoUncheckedCreateInput>
    /**
     * In case the veiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<veiculoUpdateInput, veiculoUncheckedUpdateInput>
  }

  /**
   * veiculo delete
   */
  export type veiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter which veiculo to delete.
     */
    where: veiculoWhereUniqueInput
  }

  /**
   * veiculo deleteMany
   */
  export type veiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which veiculos to delete
     */
    where?: veiculoWhereInput
    /**
     * Limit how many veiculos to delete.
     */
    limit?: number
  }

  /**
   * veiculo.itinerario
   */
  export type veiculo$itinerarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerario
     */
    select?: itinerarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerario
     */
    omit?: itinerarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerarioInclude<ExtArgs> | null
    where?: itinerarioWhereInput
    orderBy?: itinerarioOrderByWithRelationInput | itinerarioOrderByWithRelationInput[]
    cursor?: itinerarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItinerarioScalarFieldEnum | ItinerarioScalarFieldEnum[]
  }

  /**
   * veiculo without action
   */
  export type veiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
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


  export const CorredorScalarFieldEnum: {
    codigo: 'codigo',
    nome: 'nome'
  };

  export type CorredorScalarFieldEnum = (typeof CorredorScalarFieldEnum)[keyof typeof CorredorScalarFieldEnum]


  export const CorredorparadaScalarFieldEnum: {
    codigocorredor: 'codigocorredor',
    codigoparada: 'codigoparada'
  };

  export type CorredorparadaScalarFieldEnum = (typeof CorredorparadaScalarFieldEnum)[keyof typeof CorredorparadaScalarFieldEnum]


  export const ItinerarioScalarFieldEnum: {
    codigolinha: 'codigolinha',
    prefixoveiculo: 'prefixoveiculo',
    datareferencia: 'datareferencia',
    codigoparada: 'codigoparada',
    previsaochegada: 'previsaochegada'
  };

  export type ItinerarioScalarFieldEnum = (typeof ItinerarioScalarFieldEnum)[keyof typeof ItinerarioScalarFieldEnum]


  export const LinhaScalarFieldEnum: {
    codigo: 'codigo',
    letreironumerico: 'letreironumerico',
    modooperacao: 'modooperacao',
    modocircular: 'modocircular',
    sentido: 'sentido',
    descritivoprincipal: 'descritivoprincipal',
    descritivosecundario: 'descritivosecundario'
  };

  export type LinhaScalarFieldEnum = (typeof LinhaScalarFieldEnum)[keyof typeof LinhaScalarFieldEnum]


  export const LinhaparadaScalarFieldEnum: {
    codigolinha: 'codigolinha',
    codigoparada: 'codigoparada'
  };

  export type LinhaparadaScalarFieldEnum = (typeof LinhaparadaScalarFieldEnum)[keyof typeof LinhaparadaScalarFieldEnum]


  export const ParadaScalarFieldEnum: {
    codigo: 'codigo',
    nome: 'nome',
    endereco: 'endereco',
    longitude: 'longitude',
    latitude: 'latitude'
  };

  export type ParadaScalarFieldEnum = (typeof ParadaScalarFieldEnum)[keyof typeof ParadaScalarFieldEnum]


  export const VeiculoScalarFieldEnum: {
    prefixo: 'prefixo',
    acessopcd: 'acessopcd'
  };

  export type VeiculoScalarFieldEnum = (typeof VeiculoScalarFieldEnum)[keyof typeof VeiculoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type corredorWhereInput = {
    AND?: corredorWhereInput | corredorWhereInput[]
    OR?: corredorWhereInput[]
    NOT?: corredorWhereInput | corredorWhereInput[]
    codigo?: IntFilter<"corredor"> | number
    nome?: StringFilter<"corredor"> | string
    corredorparada?: CorredorparadaListRelationFilter
  }

  export type corredorOrderByWithRelationInput = {
    codigo?: SortOrder
    nome?: SortOrder
    corredorparada?: corredorparadaOrderByRelationAggregateInput
  }

  export type corredorWhereUniqueInput = Prisma.AtLeast<{
    codigo?: number
    AND?: corredorWhereInput | corredorWhereInput[]
    OR?: corredorWhereInput[]
    NOT?: corredorWhereInput | corredorWhereInput[]
    nome?: StringFilter<"corredor"> | string
    corredorparada?: CorredorparadaListRelationFilter
  }, "codigo">

  export type corredorOrderByWithAggregationInput = {
    codigo?: SortOrder
    nome?: SortOrder
    _count?: corredorCountOrderByAggregateInput
    _avg?: corredorAvgOrderByAggregateInput
    _max?: corredorMaxOrderByAggregateInput
    _min?: corredorMinOrderByAggregateInput
    _sum?: corredorSumOrderByAggregateInput
  }

  export type corredorScalarWhereWithAggregatesInput = {
    AND?: corredorScalarWhereWithAggregatesInput | corredorScalarWhereWithAggregatesInput[]
    OR?: corredorScalarWhereWithAggregatesInput[]
    NOT?: corredorScalarWhereWithAggregatesInput | corredorScalarWhereWithAggregatesInput[]
    codigo?: IntWithAggregatesFilter<"corredor"> | number
    nome?: StringWithAggregatesFilter<"corredor"> | string
  }

  export type corredorparadaWhereInput = {
    AND?: corredorparadaWhereInput | corredorparadaWhereInput[]
    OR?: corredorparadaWhereInput[]
    NOT?: corredorparadaWhereInput | corredorparadaWhereInput[]
    codigocorredor?: IntFilter<"corredorparada"> | number
    codigoparada?: IntFilter<"corredorparada"> | number
    corredor?: XOR<CorredorScalarRelationFilter, corredorWhereInput>
    parada?: XOR<ParadaScalarRelationFilter, paradaWhereInput>
  }

  export type corredorparadaOrderByWithRelationInput = {
    codigocorredor?: SortOrder
    codigoparada?: SortOrder
    corredor?: corredorOrderByWithRelationInput
    parada?: paradaOrderByWithRelationInput
  }

  export type corredorparadaWhereUniqueInput = Prisma.AtLeast<{
    codigocorredor_codigoparada?: corredorparadaCodigocorredorCodigoparadaCompoundUniqueInput
    AND?: corredorparadaWhereInput | corredorparadaWhereInput[]
    OR?: corredorparadaWhereInput[]
    NOT?: corredorparadaWhereInput | corredorparadaWhereInput[]
    codigocorredor?: IntFilter<"corredorparada"> | number
    codigoparada?: IntFilter<"corredorparada"> | number
    corredor?: XOR<CorredorScalarRelationFilter, corredorWhereInput>
    parada?: XOR<ParadaScalarRelationFilter, paradaWhereInput>
  }, "codigocorredor_codigoparada">

  export type corredorparadaOrderByWithAggregationInput = {
    codigocorredor?: SortOrder
    codigoparada?: SortOrder
    _count?: corredorparadaCountOrderByAggregateInput
    _avg?: corredorparadaAvgOrderByAggregateInput
    _max?: corredorparadaMaxOrderByAggregateInput
    _min?: corredorparadaMinOrderByAggregateInput
    _sum?: corredorparadaSumOrderByAggregateInput
  }

  export type corredorparadaScalarWhereWithAggregatesInput = {
    AND?: corredorparadaScalarWhereWithAggregatesInput | corredorparadaScalarWhereWithAggregatesInput[]
    OR?: corredorparadaScalarWhereWithAggregatesInput[]
    NOT?: corredorparadaScalarWhereWithAggregatesInput | corredorparadaScalarWhereWithAggregatesInput[]
    codigocorredor?: IntWithAggregatesFilter<"corredorparada"> | number
    codigoparada?: IntWithAggregatesFilter<"corredorparada"> | number
  }

  export type itinerarioWhereInput = {
    AND?: itinerarioWhereInput | itinerarioWhereInput[]
    OR?: itinerarioWhereInput[]
    NOT?: itinerarioWhereInput | itinerarioWhereInput[]
    codigolinha?: IntFilter<"itinerario"> | number
    prefixoveiculo?: StringFilter<"itinerario"> | string
    datareferencia?: DateTimeFilter<"itinerario"> | Date | string
    codigoparada?: IntFilter<"itinerario"> | number
    previsaochegada?: DateTimeFilter<"itinerario"> | Date | string
    linha?: XOR<LinhaScalarRelationFilter, linhaWhereInput>
    parada?: XOR<ParadaScalarRelationFilter, paradaWhereInput>
    veiculo?: XOR<VeiculoScalarRelationFilter, veiculoWhereInput>
  }

  export type itinerarioOrderByWithRelationInput = {
    codigolinha?: SortOrder
    prefixoveiculo?: SortOrder
    datareferencia?: SortOrder
    codigoparada?: SortOrder
    previsaochegada?: SortOrder
    linha?: linhaOrderByWithRelationInput
    parada?: paradaOrderByWithRelationInput
    veiculo?: veiculoOrderByWithRelationInput
  }

  export type itinerarioWhereUniqueInput = Prisma.AtLeast<{
    codigolinha_codigoparada_datareferencia?: itinerarioCodigolinhaCodigoparadaDatareferenciaCompoundUniqueInput
    AND?: itinerarioWhereInput | itinerarioWhereInput[]
    OR?: itinerarioWhereInput[]
    NOT?: itinerarioWhereInput | itinerarioWhereInput[]
    codigolinha?: IntFilter<"itinerario"> | number
    prefixoveiculo?: StringFilter<"itinerario"> | string
    datareferencia?: DateTimeFilter<"itinerario"> | Date | string
    codigoparada?: IntFilter<"itinerario"> | number
    previsaochegada?: DateTimeFilter<"itinerario"> | Date | string
    linha?: XOR<LinhaScalarRelationFilter, linhaWhereInput>
    parada?: XOR<ParadaScalarRelationFilter, paradaWhereInput>
    veiculo?: XOR<VeiculoScalarRelationFilter, veiculoWhereInput>
  }, "codigolinha_codigoparada_datareferencia">

  export type itinerarioOrderByWithAggregationInput = {
    codigolinha?: SortOrder
    prefixoveiculo?: SortOrder
    datareferencia?: SortOrder
    codigoparada?: SortOrder
    previsaochegada?: SortOrder
    _count?: itinerarioCountOrderByAggregateInput
    _avg?: itinerarioAvgOrderByAggregateInput
    _max?: itinerarioMaxOrderByAggregateInput
    _min?: itinerarioMinOrderByAggregateInput
    _sum?: itinerarioSumOrderByAggregateInput
  }

  export type itinerarioScalarWhereWithAggregatesInput = {
    AND?: itinerarioScalarWhereWithAggregatesInput | itinerarioScalarWhereWithAggregatesInput[]
    OR?: itinerarioScalarWhereWithAggregatesInput[]
    NOT?: itinerarioScalarWhereWithAggregatesInput | itinerarioScalarWhereWithAggregatesInput[]
    codigolinha?: IntWithAggregatesFilter<"itinerario"> | number
    prefixoveiculo?: StringWithAggregatesFilter<"itinerario"> | string
    datareferencia?: DateTimeWithAggregatesFilter<"itinerario"> | Date | string
    codigoparada?: IntWithAggregatesFilter<"itinerario"> | number
    previsaochegada?: DateTimeWithAggregatesFilter<"itinerario"> | Date | string
  }

  export type linhaWhereInput = {
    AND?: linhaWhereInput | linhaWhereInput[]
    OR?: linhaWhereInput[]
    NOT?: linhaWhereInput | linhaWhereInput[]
    codigo?: IntFilter<"linha"> | number
    letreironumerico?: StringFilter<"linha"> | string
    modooperacao?: IntFilter<"linha"> | number
    modocircular?: BoolFilter<"linha"> | boolean
    sentido?: IntFilter<"linha"> | number
    descritivoprincipal?: StringFilter<"linha"> | string
    descritivosecundario?: StringFilter<"linha"> | string
    itinerario?: ItinerarioListRelationFilter
    linhaparada?: LinhaparadaListRelationFilter
  }

  export type linhaOrderByWithRelationInput = {
    codigo?: SortOrder
    letreironumerico?: SortOrder
    modooperacao?: SortOrder
    modocircular?: SortOrder
    sentido?: SortOrder
    descritivoprincipal?: SortOrder
    descritivosecundario?: SortOrder
    itinerario?: itinerarioOrderByRelationAggregateInput
    linhaparada?: linhaparadaOrderByRelationAggregateInput
  }

  export type linhaWhereUniqueInput = Prisma.AtLeast<{
    codigo?: number
    AND?: linhaWhereInput | linhaWhereInput[]
    OR?: linhaWhereInput[]
    NOT?: linhaWhereInput | linhaWhereInput[]
    letreironumerico?: StringFilter<"linha"> | string
    modooperacao?: IntFilter<"linha"> | number
    modocircular?: BoolFilter<"linha"> | boolean
    sentido?: IntFilter<"linha"> | number
    descritivoprincipal?: StringFilter<"linha"> | string
    descritivosecundario?: StringFilter<"linha"> | string
    itinerario?: ItinerarioListRelationFilter
    linhaparada?: LinhaparadaListRelationFilter
  }, "codigo">

  export type linhaOrderByWithAggregationInput = {
    codigo?: SortOrder
    letreironumerico?: SortOrder
    modooperacao?: SortOrder
    modocircular?: SortOrder
    sentido?: SortOrder
    descritivoprincipal?: SortOrder
    descritivosecundario?: SortOrder
    _count?: linhaCountOrderByAggregateInput
    _avg?: linhaAvgOrderByAggregateInput
    _max?: linhaMaxOrderByAggregateInput
    _min?: linhaMinOrderByAggregateInput
    _sum?: linhaSumOrderByAggregateInput
  }

  export type linhaScalarWhereWithAggregatesInput = {
    AND?: linhaScalarWhereWithAggregatesInput | linhaScalarWhereWithAggregatesInput[]
    OR?: linhaScalarWhereWithAggregatesInput[]
    NOT?: linhaScalarWhereWithAggregatesInput | linhaScalarWhereWithAggregatesInput[]
    codigo?: IntWithAggregatesFilter<"linha"> | number
    letreironumerico?: StringWithAggregatesFilter<"linha"> | string
    modooperacao?: IntWithAggregatesFilter<"linha"> | number
    modocircular?: BoolWithAggregatesFilter<"linha"> | boolean
    sentido?: IntWithAggregatesFilter<"linha"> | number
    descritivoprincipal?: StringWithAggregatesFilter<"linha"> | string
    descritivosecundario?: StringWithAggregatesFilter<"linha"> | string
  }

  export type linhaparadaWhereInput = {
    AND?: linhaparadaWhereInput | linhaparadaWhereInput[]
    OR?: linhaparadaWhereInput[]
    NOT?: linhaparadaWhereInput | linhaparadaWhereInput[]
    codigolinha?: IntFilter<"linhaparada"> | number
    codigoparada?: IntFilter<"linhaparada"> | number
    linha?: XOR<LinhaScalarRelationFilter, linhaWhereInput>
    parada?: XOR<ParadaScalarRelationFilter, paradaWhereInput>
  }

  export type linhaparadaOrderByWithRelationInput = {
    codigolinha?: SortOrder
    codigoparada?: SortOrder
    linha?: linhaOrderByWithRelationInput
    parada?: paradaOrderByWithRelationInput
  }

  export type linhaparadaWhereUniqueInput = Prisma.AtLeast<{
    codigolinha_codigoparada?: linhaparadaCodigolinhaCodigoparadaCompoundUniqueInput
    AND?: linhaparadaWhereInput | linhaparadaWhereInput[]
    OR?: linhaparadaWhereInput[]
    NOT?: linhaparadaWhereInput | linhaparadaWhereInput[]
    codigolinha?: IntFilter<"linhaparada"> | number
    codigoparada?: IntFilter<"linhaparada"> | number
    linha?: XOR<LinhaScalarRelationFilter, linhaWhereInput>
    parada?: XOR<ParadaScalarRelationFilter, paradaWhereInput>
  }, "codigolinha_codigoparada">

  export type linhaparadaOrderByWithAggregationInput = {
    codigolinha?: SortOrder
    codigoparada?: SortOrder
    _count?: linhaparadaCountOrderByAggregateInput
    _avg?: linhaparadaAvgOrderByAggregateInput
    _max?: linhaparadaMaxOrderByAggregateInput
    _min?: linhaparadaMinOrderByAggregateInput
    _sum?: linhaparadaSumOrderByAggregateInput
  }

  export type linhaparadaScalarWhereWithAggregatesInput = {
    AND?: linhaparadaScalarWhereWithAggregatesInput | linhaparadaScalarWhereWithAggregatesInput[]
    OR?: linhaparadaScalarWhereWithAggregatesInput[]
    NOT?: linhaparadaScalarWhereWithAggregatesInput | linhaparadaScalarWhereWithAggregatesInput[]
    codigolinha?: IntWithAggregatesFilter<"linhaparada"> | number
    codigoparada?: IntWithAggregatesFilter<"linhaparada"> | number
  }

  export type paradaWhereInput = {
    AND?: paradaWhereInput | paradaWhereInput[]
    OR?: paradaWhereInput[]
    NOT?: paradaWhereInput | paradaWhereInput[]
    codigo?: IntFilter<"parada"> | number
    nome?: StringNullableFilter<"parada"> | string | null
    endereco?: StringNullableFilter<"parada"> | string | null
    longitude?: FloatFilter<"parada"> | number
    latitude?: FloatFilter<"parada"> | number
    corredorparada?: CorredorparadaListRelationFilter
    itinerario?: ItinerarioListRelationFilter
    linhaparada?: LinhaparadaListRelationFilter
  }

  export type paradaOrderByWithRelationInput = {
    codigo?: SortOrder
    nome?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    corredorparada?: corredorparadaOrderByRelationAggregateInput
    itinerario?: itinerarioOrderByRelationAggregateInput
    linhaparada?: linhaparadaOrderByRelationAggregateInput
  }

  export type paradaWhereUniqueInput = Prisma.AtLeast<{
    codigo?: number
    AND?: paradaWhereInput | paradaWhereInput[]
    OR?: paradaWhereInput[]
    NOT?: paradaWhereInput | paradaWhereInput[]
    nome?: StringNullableFilter<"parada"> | string | null
    endereco?: StringNullableFilter<"parada"> | string | null
    longitude?: FloatFilter<"parada"> | number
    latitude?: FloatFilter<"parada"> | number
    corredorparada?: CorredorparadaListRelationFilter
    itinerario?: ItinerarioListRelationFilter
    linhaparada?: LinhaparadaListRelationFilter
  }, "codigo">

  export type paradaOrderByWithAggregationInput = {
    codigo?: SortOrder
    nome?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    _count?: paradaCountOrderByAggregateInput
    _avg?: paradaAvgOrderByAggregateInput
    _max?: paradaMaxOrderByAggregateInput
    _min?: paradaMinOrderByAggregateInput
    _sum?: paradaSumOrderByAggregateInput
  }

  export type paradaScalarWhereWithAggregatesInput = {
    AND?: paradaScalarWhereWithAggregatesInput | paradaScalarWhereWithAggregatesInput[]
    OR?: paradaScalarWhereWithAggregatesInput[]
    NOT?: paradaScalarWhereWithAggregatesInput | paradaScalarWhereWithAggregatesInput[]
    codigo?: IntWithAggregatesFilter<"parada"> | number
    nome?: StringNullableWithAggregatesFilter<"parada"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"parada"> | string | null
    longitude?: FloatWithAggregatesFilter<"parada"> | number
    latitude?: FloatWithAggregatesFilter<"parada"> | number
  }

  export type veiculoWhereInput = {
    AND?: veiculoWhereInput | veiculoWhereInput[]
    OR?: veiculoWhereInput[]
    NOT?: veiculoWhereInput | veiculoWhereInput[]
    prefixo?: StringFilter<"veiculo"> | string
    acessopcd?: BoolFilter<"veiculo"> | boolean
    itinerario?: ItinerarioListRelationFilter
  }

  export type veiculoOrderByWithRelationInput = {
    prefixo?: SortOrder
    acessopcd?: SortOrder
    itinerario?: itinerarioOrderByRelationAggregateInput
  }

  export type veiculoWhereUniqueInput = Prisma.AtLeast<{
    prefixo?: string
    AND?: veiculoWhereInput | veiculoWhereInput[]
    OR?: veiculoWhereInput[]
    NOT?: veiculoWhereInput | veiculoWhereInput[]
    acessopcd?: BoolFilter<"veiculo"> | boolean
    itinerario?: ItinerarioListRelationFilter
  }, "prefixo">

  export type veiculoOrderByWithAggregationInput = {
    prefixo?: SortOrder
    acessopcd?: SortOrder
    _count?: veiculoCountOrderByAggregateInput
    _max?: veiculoMaxOrderByAggregateInput
    _min?: veiculoMinOrderByAggregateInput
  }

  export type veiculoScalarWhereWithAggregatesInput = {
    AND?: veiculoScalarWhereWithAggregatesInput | veiculoScalarWhereWithAggregatesInput[]
    OR?: veiculoScalarWhereWithAggregatesInput[]
    NOT?: veiculoScalarWhereWithAggregatesInput | veiculoScalarWhereWithAggregatesInput[]
    prefixo?: StringWithAggregatesFilter<"veiculo"> | string
    acessopcd?: BoolWithAggregatesFilter<"veiculo"> | boolean
  }

  export type corredorCreateInput = {
    codigo: number
    nome: string
    corredorparada?: corredorparadaCreateNestedManyWithoutCorredorInput
  }

  export type corredorUncheckedCreateInput = {
    codigo: number
    nome: string
    corredorparada?: corredorparadaUncheckedCreateNestedManyWithoutCorredorInput
  }

  export type corredorUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    corredorparada?: corredorparadaUpdateManyWithoutCorredorNestedInput
  }

  export type corredorUncheckedUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    corredorparada?: corredorparadaUncheckedUpdateManyWithoutCorredorNestedInput
  }

  export type corredorCreateManyInput = {
    codigo: number
    nome: string
  }

  export type corredorUpdateManyMutationInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type corredorUncheckedUpdateManyInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type corredorparadaCreateInput = {
    corredor: corredorCreateNestedOneWithoutCorredorparadaInput
    parada: paradaCreateNestedOneWithoutCorredorparadaInput
  }

  export type corredorparadaUncheckedCreateInput = {
    codigocorredor: number
    codigoparada: number
  }

  export type corredorparadaUpdateInput = {
    corredor?: corredorUpdateOneRequiredWithoutCorredorparadaNestedInput
    parada?: paradaUpdateOneRequiredWithoutCorredorparadaNestedInput
  }

  export type corredorparadaUncheckedUpdateInput = {
    codigocorredor?: IntFieldUpdateOperationsInput | number
    codigoparada?: IntFieldUpdateOperationsInput | number
  }

  export type corredorparadaCreateManyInput = {
    codigocorredor: number
    codigoparada: number
  }

  export type corredorparadaUpdateManyMutationInput = {

  }

  export type corredorparadaUncheckedUpdateManyInput = {
    codigocorredor?: IntFieldUpdateOperationsInput | number
    codigoparada?: IntFieldUpdateOperationsInput | number
  }

  export type itinerarioCreateInput = {
    datareferencia: Date | string
    previsaochegada: Date | string
    linha: linhaCreateNestedOneWithoutItinerarioInput
    parada: paradaCreateNestedOneWithoutItinerarioInput
    veiculo: veiculoCreateNestedOneWithoutItinerarioInput
  }

  export type itinerarioUncheckedCreateInput = {
    codigolinha: number
    prefixoveiculo: string
    datareferencia: Date | string
    codigoparada: number
    previsaochegada: Date | string
  }

  export type itinerarioUpdateInput = {
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
    linha?: linhaUpdateOneRequiredWithoutItinerarioNestedInput
    parada?: paradaUpdateOneRequiredWithoutItinerarioNestedInput
    veiculo?: veiculoUpdateOneRequiredWithoutItinerarioNestedInput
  }

  export type itinerarioUncheckedUpdateInput = {
    codigolinha?: IntFieldUpdateOperationsInput | number
    prefixoveiculo?: StringFieldUpdateOperationsInput | string
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoparada?: IntFieldUpdateOperationsInput | number
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type itinerarioCreateManyInput = {
    codigolinha: number
    prefixoveiculo: string
    datareferencia: Date | string
    codigoparada: number
    previsaochegada: Date | string
  }

  export type itinerarioUpdateManyMutationInput = {
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type itinerarioUncheckedUpdateManyInput = {
    codigolinha?: IntFieldUpdateOperationsInput | number
    prefixoveiculo?: StringFieldUpdateOperationsInput | string
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoparada?: IntFieldUpdateOperationsInput | number
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type linhaCreateInput = {
    codigo: number
    letreironumerico: string
    modooperacao: number
    modocircular: boolean
    sentido: number
    descritivoprincipal: string
    descritivosecundario: string
    itinerario?: itinerarioCreateNestedManyWithoutLinhaInput
    linhaparada?: linhaparadaCreateNestedManyWithoutLinhaInput
  }

  export type linhaUncheckedCreateInput = {
    codigo: number
    letreironumerico: string
    modooperacao: number
    modocircular: boolean
    sentido: number
    descritivoprincipal: string
    descritivosecundario: string
    itinerario?: itinerarioUncheckedCreateNestedManyWithoutLinhaInput
    linhaparada?: linhaparadaUncheckedCreateNestedManyWithoutLinhaInput
  }

  export type linhaUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    letreironumerico?: StringFieldUpdateOperationsInput | string
    modooperacao?: IntFieldUpdateOperationsInput | number
    modocircular?: BoolFieldUpdateOperationsInput | boolean
    sentido?: IntFieldUpdateOperationsInput | number
    descritivoprincipal?: StringFieldUpdateOperationsInput | string
    descritivosecundario?: StringFieldUpdateOperationsInput | string
    itinerario?: itinerarioUpdateManyWithoutLinhaNestedInput
    linhaparada?: linhaparadaUpdateManyWithoutLinhaNestedInput
  }

  export type linhaUncheckedUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    letreironumerico?: StringFieldUpdateOperationsInput | string
    modooperacao?: IntFieldUpdateOperationsInput | number
    modocircular?: BoolFieldUpdateOperationsInput | boolean
    sentido?: IntFieldUpdateOperationsInput | number
    descritivoprincipal?: StringFieldUpdateOperationsInput | string
    descritivosecundario?: StringFieldUpdateOperationsInput | string
    itinerario?: itinerarioUncheckedUpdateManyWithoutLinhaNestedInput
    linhaparada?: linhaparadaUncheckedUpdateManyWithoutLinhaNestedInput
  }

  export type linhaCreateManyInput = {
    codigo: number
    letreironumerico: string
    modooperacao: number
    modocircular: boolean
    sentido: number
    descritivoprincipal: string
    descritivosecundario: string
  }

  export type linhaUpdateManyMutationInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    letreironumerico?: StringFieldUpdateOperationsInput | string
    modooperacao?: IntFieldUpdateOperationsInput | number
    modocircular?: BoolFieldUpdateOperationsInput | boolean
    sentido?: IntFieldUpdateOperationsInput | number
    descritivoprincipal?: StringFieldUpdateOperationsInput | string
    descritivosecundario?: StringFieldUpdateOperationsInput | string
  }

  export type linhaUncheckedUpdateManyInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    letreironumerico?: StringFieldUpdateOperationsInput | string
    modooperacao?: IntFieldUpdateOperationsInput | number
    modocircular?: BoolFieldUpdateOperationsInput | boolean
    sentido?: IntFieldUpdateOperationsInput | number
    descritivoprincipal?: StringFieldUpdateOperationsInput | string
    descritivosecundario?: StringFieldUpdateOperationsInput | string
  }

  export type linhaparadaCreateInput = {
    linha: linhaCreateNestedOneWithoutLinhaparadaInput
    parada: paradaCreateNestedOneWithoutLinhaparadaInput
  }

  export type linhaparadaUncheckedCreateInput = {
    codigolinha: number
    codigoparada: number
  }

  export type linhaparadaUpdateInput = {
    linha?: linhaUpdateOneRequiredWithoutLinhaparadaNestedInput
    parada?: paradaUpdateOneRequiredWithoutLinhaparadaNestedInput
  }

  export type linhaparadaUncheckedUpdateInput = {
    codigolinha?: IntFieldUpdateOperationsInput | number
    codigoparada?: IntFieldUpdateOperationsInput | number
  }

  export type linhaparadaCreateManyInput = {
    codigolinha: number
    codigoparada: number
  }

  export type linhaparadaUpdateManyMutationInput = {

  }

  export type linhaparadaUncheckedUpdateManyInput = {
    codigolinha?: IntFieldUpdateOperationsInput | number
    codigoparada?: IntFieldUpdateOperationsInput | number
  }

  export type paradaCreateInput = {
    codigo: number
    nome?: string | null
    endereco?: string | null
    longitude: number
    latitude: number
    corredorparada?: corredorparadaCreateNestedManyWithoutParadaInput
    itinerario?: itinerarioCreateNestedManyWithoutParadaInput
    linhaparada?: linhaparadaCreateNestedManyWithoutParadaInput
  }

  export type paradaUncheckedCreateInput = {
    codigo: number
    nome?: string | null
    endereco?: string | null
    longitude: number
    latitude: number
    corredorparada?: corredorparadaUncheckedCreateNestedManyWithoutParadaInput
    itinerario?: itinerarioUncheckedCreateNestedManyWithoutParadaInput
    linhaparada?: linhaparadaUncheckedCreateNestedManyWithoutParadaInput
  }

  export type paradaUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    corredorparada?: corredorparadaUpdateManyWithoutParadaNestedInput
    itinerario?: itinerarioUpdateManyWithoutParadaNestedInput
    linhaparada?: linhaparadaUpdateManyWithoutParadaNestedInput
  }

  export type paradaUncheckedUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    corredorparada?: corredorparadaUncheckedUpdateManyWithoutParadaNestedInput
    itinerario?: itinerarioUncheckedUpdateManyWithoutParadaNestedInput
    linhaparada?: linhaparadaUncheckedUpdateManyWithoutParadaNestedInput
  }

  export type paradaCreateManyInput = {
    codigo: number
    nome?: string | null
    endereco?: string | null
    longitude: number
    latitude: number
  }

  export type paradaUpdateManyMutationInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
  }

  export type paradaUncheckedUpdateManyInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
  }

  export type veiculoCreateInput = {
    prefixo: string
    acessopcd: boolean
    itinerario?: itinerarioCreateNestedManyWithoutVeiculoInput
  }

  export type veiculoUncheckedCreateInput = {
    prefixo: string
    acessopcd: boolean
    itinerario?: itinerarioUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type veiculoUpdateInput = {
    prefixo?: StringFieldUpdateOperationsInput | string
    acessopcd?: BoolFieldUpdateOperationsInput | boolean
    itinerario?: itinerarioUpdateManyWithoutVeiculoNestedInput
  }

  export type veiculoUncheckedUpdateInput = {
    prefixo?: StringFieldUpdateOperationsInput | string
    acessopcd?: BoolFieldUpdateOperationsInput | boolean
    itinerario?: itinerarioUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type veiculoCreateManyInput = {
    prefixo: string
    acessopcd: boolean
  }

  export type veiculoUpdateManyMutationInput = {
    prefixo?: StringFieldUpdateOperationsInput | string
    acessopcd?: BoolFieldUpdateOperationsInput | boolean
  }

  export type veiculoUncheckedUpdateManyInput = {
    prefixo?: StringFieldUpdateOperationsInput | string
    acessopcd?: BoolFieldUpdateOperationsInput | boolean
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

  export type CorredorparadaListRelationFilter = {
    every?: corredorparadaWhereInput
    some?: corredorparadaWhereInput
    none?: corredorparadaWhereInput
  }

  export type corredorparadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type corredorCountOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
  }

  export type corredorAvgOrderByAggregateInput = {
    codigo?: SortOrder
  }

  export type corredorMaxOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
  }

  export type corredorMinOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
  }

  export type corredorSumOrderByAggregateInput = {
    codigo?: SortOrder
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

  export type CorredorScalarRelationFilter = {
    is?: corredorWhereInput
    isNot?: corredorWhereInput
  }

  export type ParadaScalarRelationFilter = {
    is?: paradaWhereInput
    isNot?: paradaWhereInput
  }

  export type corredorparadaCodigocorredorCodigoparadaCompoundUniqueInput = {
    codigocorredor: number
    codigoparada: number
  }

  export type corredorparadaCountOrderByAggregateInput = {
    codigocorredor?: SortOrder
    codigoparada?: SortOrder
  }

  export type corredorparadaAvgOrderByAggregateInput = {
    codigocorredor?: SortOrder
    codigoparada?: SortOrder
  }

  export type corredorparadaMaxOrderByAggregateInput = {
    codigocorredor?: SortOrder
    codigoparada?: SortOrder
  }

  export type corredorparadaMinOrderByAggregateInput = {
    codigocorredor?: SortOrder
    codigoparada?: SortOrder
  }

  export type corredorparadaSumOrderByAggregateInput = {
    codigocorredor?: SortOrder
    codigoparada?: SortOrder
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

  export type LinhaScalarRelationFilter = {
    is?: linhaWhereInput
    isNot?: linhaWhereInput
  }

  export type VeiculoScalarRelationFilter = {
    is?: veiculoWhereInput
    isNot?: veiculoWhereInput
  }

  export type itinerarioCodigolinhaCodigoparadaDatareferenciaCompoundUniqueInput = {
    codigolinha: number
    codigoparada: number
    datareferencia: Date | string
  }

  export type itinerarioCountOrderByAggregateInput = {
    codigolinha?: SortOrder
    prefixoveiculo?: SortOrder
    datareferencia?: SortOrder
    codigoparada?: SortOrder
    previsaochegada?: SortOrder
  }

  export type itinerarioAvgOrderByAggregateInput = {
    codigolinha?: SortOrder
    codigoparada?: SortOrder
  }

  export type itinerarioMaxOrderByAggregateInput = {
    codigolinha?: SortOrder
    prefixoveiculo?: SortOrder
    datareferencia?: SortOrder
    codigoparada?: SortOrder
    previsaochegada?: SortOrder
  }

  export type itinerarioMinOrderByAggregateInput = {
    codigolinha?: SortOrder
    prefixoveiculo?: SortOrder
    datareferencia?: SortOrder
    codigoparada?: SortOrder
    previsaochegada?: SortOrder
  }

  export type itinerarioSumOrderByAggregateInput = {
    codigolinha?: SortOrder
    codigoparada?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ItinerarioListRelationFilter = {
    every?: itinerarioWhereInput
    some?: itinerarioWhereInput
    none?: itinerarioWhereInput
  }

  export type LinhaparadaListRelationFilter = {
    every?: linhaparadaWhereInput
    some?: linhaparadaWhereInput
    none?: linhaparadaWhereInput
  }

  export type itinerarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type linhaparadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type linhaCountOrderByAggregateInput = {
    codigo?: SortOrder
    letreironumerico?: SortOrder
    modooperacao?: SortOrder
    modocircular?: SortOrder
    sentido?: SortOrder
    descritivoprincipal?: SortOrder
    descritivosecundario?: SortOrder
  }

  export type linhaAvgOrderByAggregateInput = {
    codigo?: SortOrder
    modooperacao?: SortOrder
    sentido?: SortOrder
  }

  export type linhaMaxOrderByAggregateInput = {
    codigo?: SortOrder
    letreironumerico?: SortOrder
    modooperacao?: SortOrder
    modocircular?: SortOrder
    sentido?: SortOrder
    descritivoprincipal?: SortOrder
    descritivosecundario?: SortOrder
  }

  export type linhaMinOrderByAggregateInput = {
    codigo?: SortOrder
    letreironumerico?: SortOrder
    modooperacao?: SortOrder
    modocircular?: SortOrder
    sentido?: SortOrder
    descritivoprincipal?: SortOrder
    descritivosecundario?: SortOrder
  }

  export type linhaSumOrderByAggregateInput = {
    codigo?: SortOrder
    modooperacao?: SortOrder
    sentido?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type linhaparadaCodigolinhaCodigoparadaCompoundUniqueInput = {
    codigolinha: number
    codigoparada: number
  }

  export type linhaparadaCountOrderByAggregateInput = {
    codigolinha?: SortOrder
    codigoparada?: SortOrder
  }

  export type linhaparadaAvgOrderByAggregateInput = {
    codigolinha?: SortOrder
    codigoparada?: SortOrder
  }

  export type linhaparadaMaxOrderByAggregateInput = {
    codigolinha?: SortOrder
    codigoparada?: SortOrder
  }

  export type linhaparadaMinOrderByAggregateInput = {
    codigolinha?: SortOrder
    codigoparada?: SortOrder
  }

  export type linhaparadaSumOrderByAggregateInput = {
    codigolinha?: SortOrder
    codigoparada?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type paradaCountOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type paradaAvgOrderByAggregateInput = {
    codigo?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type paradaMaxOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type paradaMinOrderByAggregateInput = {
    codigo?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type paradaSumOrderByAggregateInput = {
    codigo?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
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

  export type veiculoCountOrderByAggregateInput = {
    prefixo?: SortOrder
    acessopcd?: SortOrder
  }

  export type veiculoMaxOrderByAggregateInput = {
    prefixo?: SortOrder
    acessopcd?: SortOrder
  }

  export type veiculoMinOrderByAggregateInput = {
    prefixo?: SortOrder
    acessopcd?: SortOrder
  }

  export type corredorparadaCreateNestedManyWithoutCorredorInput = {
    create?: XOR<corredorparadaCreateWithoutCorredorInput, corredorparadaUncheckedCreateWithoutCorredorInput> | corredorparadaCreateWithoutCorredorInput[] | corredorparadaUncheckedCreateWithoutCorredorInput[]
    connectOrCreate?: corredorparadaCreateOrConnectWithoutCorredorInput | corredorparadaCreateOrConnectWithoutCorredorInput[]
    createMany?: corredorparadaCreateManyCorredorInputEnvelope
    connect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
  }

  export type corredorparadaUncheckedCreateNestedManyWithoutCorredorInput = {
    create?: XOR<corredorparadaCreateWithoutCorredorInput, corredorparadaUncheckedCreateWithoutCorredorInput> | corredorparadaCreateWithoutCorredorInput[] | corredorparadaUncheckedCreateWithoutCorredorInput[]
    connectOrCreate?: corredorparadaCreateOrConnectWithoutCorredorInput | corredorparadaCreateOrConnectWithoutCorredorInput[]
    createMany?: corredorparadaCreateManyCorredorInputEnvelope
    connect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type corredorparadaUpdateManyWithoutCorredorNestedInput = {
    create?: XOR<corredorparadaCreateWithoutCorredorInput, corredorparadaUncheckedCreateWithoutCorredorInput> | corredorparadaCreateWithoutCorredorInput[] | corredorparadaUncheckedCreateWithoutCorredorInput[]
    connectOrCreate?: corredorparadaCreateOrConnectWithoutCorredorInput | corredorparadaCreateOrConnectWithoutCorredorInput[]
    upsert?: corredorparadaUpsertWithWhereUniqueWithoutCorredorInput | corredorparadaUpsertWithWhereUniqueWithoutCorredorInput[]
    createMany?: corredorparadaCreateManyCorredorInputEnvelope
    set?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    disconnect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    delete?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    connect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    update?: corredorparadaUpdateWithWhereUniqueWithoutCorredorInput | corredorparadaUpdateWithWhereUniqueWithoutCorredorInput[]
    updateMany?: corredorparadaUpdateManyWithWhereWithoutCorredorInput | corredorparadaUpdateManyWithWhereWithoutCorredorInput[]
    deleteMany?: corredorparadaScalarWhereInput | corredorparadaScalarWhereInput[]
  }

  export type corredorparadaUncheckedUpdateManyWithoutCorredorNestedInput = {
    create?: XOR<corredorparadaCreateWithoutCorredorInput, corredorparadaUncheckedCreateWithoutCorredorInput> | corredorparadaCreateWithoutCorredorInput[] | corredorparadaUncheckedCreateWithoutCorredorInput[]
    connectOrCreate?: corredorparadaCreateOrConnectWithoutCorredorInput | corredorparadaCreateOrConnectWithoutCorredorInput[]
    upsert?: corredorparadaUpsertWithWhereUniqueWithoutCorredorInput | corredorparadaUpsertWithWhereUniqueWithoutCorredorInput[]
    createMany?: corredorparadaCreateManyCorredorInputEnvelope
    set?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    disconnect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    delete?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    connect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    update?: corredorparadaUpdateWithWhereUniqueWithoutCorredorInput | corredorparadaUpdateWithWhereUniqueWithoutCorredorInput[]
    updateMany?: corredorparadaUpdateManyWithWhereWithoutCorredorInput | corredorparadaUpdateManyWithWhereWithoutCorredorInput[]
    deleteMany?: corredorparadaScalarWhereInput | corredorparadaScalarWhereInput[]
  }

  export type corredorCreateNestedOneWithoutCorredorparadaInput = {
    create?: XOR<corredorCreateWithoutCorredorparadaInput, corredorUncheckedCreateWithoutCorredorparadaInput>
    connectOrCreate?: corredorCreateOrConnectWithoutCorredorparadaInput
    connect?: corredorWhereUniqueInput
  }

  export type paradaCreateNestedOneWithoutCorredorparadaInput = {
    create?: XOR<paradaCreateWithoutCorredorparadaInput, paradaUncheckedCreateWithoutCorredorparadaInput>
    connectOrCreate?: paradaCreateOrConnectWithoutCorredorparadaInput
    connect?: paradaWhereUniqueInput
  }

  export type corredorUpdateOneRequiredWithoutCorredorparadaNestedInput = {
    create?: XOR<corredorCreateWithoutCorredorparadaInput, corredorUncheckedCreateWithoutCorredorparadaInput>
    connectOrCreate?: corredorCreateOrConnectWithoutCorredorparadaInput
    upsert?: corredorUpsertWithoutCorredorparadaInput
    connect?: corredorWhereUniqueInput
    update?: XOR<XOR<corredorUpdateToOneWithWhereWithoutCorredorparadaInput, corredorUpdateWithoutCorredorparadaInput>, corredorUncheckedUpdateWithoutCorredorparadaInput>
  }

  export type paradaUpdateOneRequiredWithoutCorredorparadaNestedInput = {
    create?: XOR<paradaCreateWithoutCorredorparadaInput, paradaUncheckedCreateWithoutCorredorparadaInput>
    connectOrCreate?: paradaCreateOrConnectWithoutCorredorparadaInput
    upsert?: paradaUpsertWithoutCorredorparadaInput
    connect?: paradaWhereUniqueInput
    update?: XOR<XOR<paradaUpdateToOneWithWhereWithoutCorredorparadaInput, paradaUpdateWithoutCorredorparadaInput>, paradaUncheckedUpdateWithoutCorredorparadaInput>
  }

  export type linhaCreateNestedOneWithoutItinerarioInput = {
    create?: XOR<linhaCreateWithoutItinerarioInput, linhaUncheckedCreateWithoutItinerarioInput>
    connectOrCreate?: linhaCreateOrConnectWithoutItinerarioInput
    connect?: linhaWhereUniqueInput
  }

  export type paradaCreateNestedOneWithoutItinerarioInput = {
    create?: XOR<paradaCreateWithoutItinerarioInput, paradaUncheckedCreateWithoutItinerarioInput>
    connectOrCreate?: paradaCreateOrConnectWithoutItinerarioInput
    connect?: paradaWhereUniqueInput
  }

  export type veiculoCreateNestedOneWithoutItinerarioInput = {
    create?: XOR<veiculoCreateWithoutItinerarioInput, veiculoUncheckedCreateWithoutItinerarioInput>
    connectOrCreate?: veiculoCreateOrConnectWithoutItinerarioInput
    connect?: veiculoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type linhaUpdateOneRequiredWithoutItinerarioNestedInput = {
    create?: XOR<linhaCreateWithoutItinerarioInput, linhaUncheckedCreateWithoutItinerarioInput>
    connectOrCreate?: linhaCreateOrConnectWithoutItinerarioInput
    upsert?: linhaUpsertWithoutItinerarioInput
    connect?: linhaWhereUniqueInput
    update?: XOR<XOR<linhaUpdateToOneWithWhereWithoutItinerarioInput, linhaUpdateWithoutItinerarioInput>, linhaUncheckedUpdateWithoutItinerarioInput>
  }

  export type paradaUpdateOneRequiredWithoutItinerarioNestedInput = {
    create?: XOR<paradaCreateWithoutItinerarioInput, paradaUncheckedCreateWithoutItinerarioInput>
    connectOrCreate?: paradaCreateOrConnectWithoutItinerarioInput
    upsert?: paradaUpsertWithoutItinerarioInput
    connect?: paradaWhereUniqueInput
    update?: XOR<XOR<paradaUpdateToOneWithWhereWithoutItinerarioInput, paradaUpdateWithoutItinerarioInput>, paradaUncheckedUpdateWithoutItinerarioInput>
  }

  export type veiculoUpdateOneRequiredWithoutItinerarioNestedInput = {
    create?: XOR<veiculoCreateWithoutItinerarioInput, veiculoUncheckedCreateWithoutItinerarioInput>
    connectOrCreate?: veiculoCreateOrConnectWithoutItinerarioInput
    upsert?: veiculoUpsertWithoutItinerarioInput
    connect?: veiculoWhereUniqueInput
    update?: XOR<XOR<veiculoUpdateToOneWithWhereWithoutItinerarioInput, veiculoUpdateWithoutItinerarioInput>, veiculoUncheckedUpdateWithoutItinerarioInput>
  }

  export type itinerarioCreateNestedManyWithoutLinhaInput = {
    create?: XOR<itinerarioCreateWithoutLinhaInput, itinerarioUncheckedCreateWithoutLinhaInput> | itinerarioCreateWithoutLinhaInput[] | itinerarioUncheckedCreateWithoutLinhaInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutLinhaInput | itinerarioCreateOrConnectWithoutLinhaInput[]
    createMany?: itinerarioCreateManyLinhaInputEnvelope
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
  }

  export type linhaparadaCreateNestedManyWithoutLinhaInput = {
    create?: XOR<linhaparadaCreateWithoutLinhaInput, linhaparadaUncheckedCreateWithoutLinhaInput> | linhaparadaCreateWithoutLinhaInput[] | linhaparadaUncheckedCreateWithoutLinhaInput[]
    connectOrCreate?: linhaparadaCreateOrConnectWithoutLinhaInput | linhaparadaCreateOrConnectWithoutLinhaInput[]
    createMany?: linhaparadaCreateManyLinhaInputEnvelope
    connect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
  }

  export type itinerarioUncheckedCreateNestedManyWithoutLinhaInput = {
    create?: XOR<itinerarioCreateWithoutLinhaInput, itinerarioUncheckedCreateWithoutLinhaInput> | itinerarioCreateWithoutLinhaInput[] | itinerarioUncheckedCreateWithoutLinhaInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutLinhaInput | itinerarioCreateOrConnectWithoutLinhaInput[]
    createMany?: itinerarioCreateManyLinhaInputEnvelope
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
  }

  export type linhaparadaUncheckedCreateNestedManyWithoutLinhaInput = {
    create?: XOR<linhaparadaCreateWithoutLinhaInput, linhaparadaUncheckedCreateWithoutLinhaInput> | linhaparadaCreateWithoutLinhaInput[] | linhaparadaUncheckedCreateWithoutLinhaInput[]
    connectOrCreate?: linhaparadaCreateOrConnectWithoutLinhaInput | linhaparadaCreateOrConnectWithoutLinhaInput[]
    createMany?: linhaparadaCreateManyLinhaInputEnvelope
    connect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type itinerarioUpdateManyWithoutLinhaNestedInput = {
    create?: XOR<itinerarioCreateWithoutLinhaInput, itinerarioUncheckedCreateWithoutLinhaInput> | itinerarioCreateWithoutLinhaInput[] | itinerarioUncheckedCreateWithoutLinhaInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutLinhaInput | itinerarioCreateOrConnectWithoutLinhaInput[]
    upsert?: itinerarioUpsertWithWhereUniqueWithoutLinhaInput | itinerarioUpsertWithWhereUniqueWithoutLinhaInput[]
    createMany?: itinerarioCreateManyLinhaInputEnvelope
    set?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    disconnect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    delete?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    update?: itinerarioUpdateWithWhereUniqueWithoutLinhaInput | itinerarioUpdateWithWhereUniqueWithoutLinhaInput[]
    updateMany?: itinerarioUpdateManyWithWhereWithoutLinhaInput | itinerarioUpdateManyWithWhereWithoutLinhaInput[]
    deleteMany?: itinerarioScalarWhereInput | itinerarioScalarWhereInput[]
  }

  export type linhaparadaUpdateManyWithoutLinhaNestedInput = {
    create?: XOR<linhaparadaCreateWithoutLinhaInput, linhaparadaUncheckedCreateWithoutLinhaInput> | linhaparadaCreateWithoutLinhaInput[] | linhaparadaUncheckedCreateWithoutLinhaInput[]
    connectOrCreate?: linhaparadaCreateOrConnectWithoutLinhaInput | linhaparadaCreateOrConnectWithoutLinhaInput[]
    upsert?: linhaparadaUpsertWithWhereUniqueWithoutLinhaInput | linhaparadaUpsertWithWhereUniqueWithoutLinhaInput[]
    createMany?: linhaparadaCreateManyLinhaInputEnvelope
    set?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    disconnect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    delete?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    connect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    update?: linhaparadaUpdateWithWhereUniqueWithoutLinhaInput | linhaparadaUpdateWithWhereUniqueWithoutLinhaInput[]
    updateMany?: linhaparadaUpdateManyWithWhereWithoutLinhaInput | linhaparadaUpdateManyWithWhereWithoutLinhaInput[]
    deleteMany?: linhaparadaScalarWhereInput | linhaparadaScalarWhereInput[]
  }

  export type itinerarioUncheckedUpdateManyWithoutLinhaNestedInput = {
    create?: XOR<itinerarioCreateWithoutLinhaInput, itinerarioUncheckedCreateWithoutLinhaInput> | itinerarioCreateWithoutLinhaInput[] | itinerarioUncheckedCreateWithoutLinhaInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutLinhaInput | itinerarioCreateOrConnectWithoutLinhaInput[]
    upsert?: itinerarioUpsertWithWhereUniqueWithoutLinhaInput | itinerarioUpsertWithWhereUniqueWithoutLinhaInput[]
    createMany?: itinerarioCreateManyLinhaInputEnvelope
    set?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    disconnect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    delete?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    update?: itinerarioUpdateWithWhereUniqueWithoutLinhaInput | itinerarioUpdateWithWhereUniqueWithoutLinhaInput[]
    updateMany?: itinerarioUpdateManyWithWhereWithoutLinhaInput | itinerarioUpdateManyWithWhereWithoutLinhaInput[]
    deleteMany?: itinerarioScalarWhereInput | itinerarioScalarWhereInput[]
  }

  export type linhaparadaUncheckedUpdateManyWithoutLinhaNestedInput = {
    create?: XOR<linhaparadaCreateWithoutLinhaInput, linhaparadaUncheckedCreateWithoutLinhaInput> | linhaparadaCreateWithoutLinhaInput[] | linhaparadaUncheckedCreateWithoutLinhaInput[]
    connectOrCreate?: linhaparadaCreateOrConnectWithoutLinhaInput | linhaparadaCreateOrConnectWithoutLinhaInput[]
    upsert?: linhaparadaUpsertWithWhereUniqueWithoutLinhaInput | linhaparadaUpsertWithWhereUniqueWithoutLinhaInput[]
    createMany?: linhaparadaCreateManyLinhaInputEnvelope
    set?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    disconnect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    delete?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    connect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    update?: linhaparadaUpdateWithWhereUniqueWithoutLinhaInput | linhaparadaUpdateWithWhereUniqueWithoutLinhaInput[]
    updateMany?: linhaparadaUpdateManyWithWhereWithoutLinhaInput | linhaparadaUpdateManyWithWhereWithoutLinhaInput[]
    deleteMany?: linhaparadaScalarWhereInput | linhaparadaScalarWhereInput[]
  }

  export type linhaCreateNestedOneWithoutLinhaparadaInput = {
    create?: XOR<linhaCreateWithoutLinhaparadaInput, linhaUncheckedCreateWithoutLinhaparadaInput>
    connectOrCreate?: linhaCreateOrConnectWithoutLinhaparadaInput
    connect?: linhaWhereUniqueInput
  }

  export type paradaCreateNestedOneWithoutLinhaparadaInput = {
    create?: XOR<paradaCreateWithoutLinhaparadaInput, paradaUncheckedCreateWithoutLinhaparadaInput>
    connectOrCreate?: paradaCreateOrConnectWithoutLinhaparadaInput
    connect?: paradaWhereUniqueInput
  }

  export type linhaUpdateOneRequiredWithoutLinhaparadaNestedInput = {
    create?: XOR<linhaCreateWithoutLinhaparadaInput, linhaUncheckedCreateWithoutLinhaparadaInput>
    connectOrCreate?: linhaCreateOrConnectWithoutLinhaparadaInput
    upsert?: linhaUpsertWithoutLinhaparadaInput
    connect?: linhaWhereUniqueInput
    update?: XOR<XOR<linhaUpdateToOneWithWhereWithoutLinhaparadaInput, linhaUpdateWithoutLinhaparadaInput>, linhaUncheckedUpdateWithoutLinhaparadaInput>
  }

  export type paradaUpdateOneRequiredWithoutLinhaparadaNestedInput = {
    create?: XOR<paradaCreateWithoutLinhaparadaInput, paradaUncheckedCreateWithoutLinhaparadaInput>
    connectOrCreate?: paradaCreateOrConnectWithoutLinhaparadaInput
    upsert?: paradaUpsertWithoutLinhaparadaInput
    connect?: paradaWhereUniqueInput
    update?: XOR<XOR<paradaUpdateToOneWithWhereWithoutLinhaparadaInput, paradaUpdateWithoutLinhaparadaInput>, paradaUncheckedUpdateWithoutLinhaparadaInput>
  }

  export type corredorparadaCreateNestedManyWithoutParadaInput = {
    create?: XOR<corredorparadaCreateWithoutParadaInput, corredorparadaUncheckedCreateWithoutParadaInput> | corredorparadaCreateWithoutParadaInput[] | corredorparadaUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: corredorparadaCreateOrConnectWithoutParadaInput | corredorparadaCreateOrConnectWithoutParadaInput[]
    createMany?: corredorparadaCreateManyParadaInputEnvelope
    connect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
  }

  export type itinerarioCreateNestedManyWithoutParadaInput = {
    create?: XOR<itinerarioCreateWithoutParadaInput, itinerarioUncheckedCreateWithoutParadaInput> | itinerarioCreateWithoutParadaInput[] | itinerarioUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutParadaInput | itinerarioCreateOrConnectWithoutParadaInput[]
    createMany?: itinerarioCreateManyParadaInputEnvelope
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
  }

  export type linhaparadaCreateNestedManyWithoutParadaInput = {
    create?: XOR<linhaparadaCreateWithoutParadaInput, linhaparadaUncheckedCreateWithoutParadaInput> | linhaparadaCreateWithoutParadaInput[] | linhaparadaUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: linhaparadaCreateOrConnectWithoutParadaInput | linhaparadaCreateOrConnectWithoutParadaInput[]
    createMany?: linhaparadaCreateManyParadaInputEnvelope
    connect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
  }

  export type corredorparadaUncheckedCreateNestedManyWithoutParadaInput = {
    create?: XOR<corredorparadaCreateWithoutParadaInput, corredorparadaUncheckedCreateWithoutParadaInput> | corredorparadaCreateWithoutParadaInput[] | corredorparadaUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: corredorparadaCreateOrConnectWithoutParadaInput | corredorparadaCreateOrConnectWithoutParadaInput[]
    createMany?: corredorparadaCreateManyParadaInputEnvelope
    connect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
  }

  export type itinerarioUncheckedCreateNestedManyWithoutParadaInput = {
    create?: XOR<itinerarioCreateWithoutParadaInput, itinerarioUncheckedCreateWithoutParadaInput> | itinerarioCreateWithoutParadaInput[] | itinerarioUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutParadaInput | itinerarioCreateOrConnectWithoutParadaInput[]
    createMany?: itinerarioCreateManyParadaInputEnvelope
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
  }

  export type linhaparadaUncheckedCreateNestedManyWithoutParadaInput = {
    create?: XOR<linhaparadaCreateWithoutParadaInput, linhaparadaUncheckedCreateWithoutParadaInput> | linhaparadaCreateWithoutParadaInput[] | linhaparadaUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: linhaparadaCreateOrConnectWithoutParadaInput | linhaparadaCreateOrConnectWithoutParadaInput[]
    createMany?: linhaparadaCreateManyParadaInputEnvelope
    connect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type corredorparadaUpdateManyWithoutParadaNestedInput = {
    create?: XOR<corredorparadaCreateWithoutParadaInput, corredorparadaUncheckedCreateWithoutParadaInput> | corredorparadaCreateWithoutParadaInput[] | corredorparadaUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: corredorparadaCreateOrConnectWithoutParadaInput | corredorparadaCreateOrConnectWithoutParadaInput[]
    upsert?: corredorparadaUpsertWithWhereUniqueWithoutParadaInput | corredorparadaUpsertWithWhereUniqueWithoutParadaInput[]
    createMany?: corredorparadaCreateManyParadaInputEnvelope
    set?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    disconnect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    delete?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    connect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    update?: corredorparadaUpdateWithWhereUniqueWithoutParadaInput | corredorparadaUpdateWithWhereUniqueWithoutParadaInput[]
    updateMany?: corredorparadaUpdateManyWithWhereWithoutParadaInput | corredorparadaUpdateManyWithWhereWithoutParadaInput[]
    deleteMany?: corredorparadaScalarWhereInput | corredorparadaScalarWhereInput[]
  }

  export type itinerarioUpdateManyWithoutParadaNestedInput = {
    create?: XOR<itinerarioCreateWithoutParadaInput, itinerarioUncheckedCreateWithoutParadaInput> | itinerarioCreateWithoutParadaInput[] | itinerarioUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutParadaInput | itinerarioCreateOrConnectWithoutParadaInput[]
    upsert?: itinerarioUpsertWithWhereUniqueWithoutParadaInput | itinerarioUpsertWithWhereUniqueWithoutParadaInput[]
    createMany?: itinerarioCreateManyParadaInputEnvelope
    set?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    disconnect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    delete?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    update?: itinerarioUpdateWithWhereUniqueWithoutParadaInput | itinerarioUpdateWithWhereUniqueWithoutParadaInput[]
    updateMany?: itinerarioUpdateManyWithWhereWithoutParadaInput | itinerarioUpdateManyWithWhereWithoutParadaInput[]
    deleteMany?: itinerarioScalarWhereInput | itinerarioScalarWhereInput[]
  }

  export type linhaparadaUpdateManyWithoutParadaNestedInput = {
    create?: XOR<linhaparadaCreateWithoutParadaInput, linhaparadaUncheckedCreateWithoutParadaInput> | linhaparadaCreateWithoutParadaInput[] | linhaparadaUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: linhaparadaCreateOrConnectWithoutParadaInput | linhaparadaCreateOrConnectWithoutParadaInput[]
    upsert?: linhaparadaUpsertWithWhereUniqueWithoutParadaInput | linhaparadaUpsertWithWhereUniqueWithoutParadaInput[]
    createMany?: linhaparadaCreateManyParadaInputEnvelope
    set?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    disconnect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    delete?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    connect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    update?: linhaparadaUpdateWithWhereUniqueWithoutParadaInput | linhaparadaUpdateWithWhereUniqueWithoutParadaInput[]
    updateMany?: linhaparadaUpdateManyWithWhereWithoutParadaInput | linhaparadaUpdateManyWithWhereWithoutParadaInput[]
    deleteMany?: linhaparadaScalarWhereInput | linhaparadaScalarWhereInput[]
  }

  export type corredorparadaUncheckedUpdateManyWithoutParadaNestedInput = {
    create?: XOR<corredorparadaCreateWithoutParadaInput, corredorparadaUncheckedCreateWithoutParadaInput> | corredorparadaCreateWithoutParadaInput[] | corredorparadaUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: corredorparadaCreateOrConnectWithoutParadaInput | corredorparadaCreateOrConnectWithoutParadaInput[]
    upsert?: corredorparadaUpsertWithWhereUniqueWithoutParadaInput | corredorparadaUpsertWithWhereUniqueWithoutParadaInput[]
    createMany?: corredorparadaCreateManyParadaInputEnvelope
    set?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    disconnect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    delete?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    connect?: corredorparadaWhereUniqueInput | corredorparadaWhereUniqueInput[]
    update?: corredorparadaUpdateWithWhereUniqueWithoutParadaInput | corredorparadaUpdateWithWhereUniqueWithoutParadaInput[]
    updateMany?: corredorparadaUpdateManyWithWhereWithoutParadaInput | corredorparadaUpdateManyWithWhereWithoutParadaInput[]
    deleteMany?: corredorparadaScalarWhereInput | corredorparadaScalarWhereInput[]
  }

  export type itinerarioUncheckedUpdateManyWithoutParadaNestedInput = {
    create?: XOR<itinerarioCreateWithoutParadaInput, itinerarioUncheckedCreateWithoutParadaInput> | itinerarioCreateWithoutParadaInput[] | itinerarioUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutParadaInput | itinerarioCreateOrConnectWithoutParadaInput[]
    upsert?: itinerarioUpsertWithWhereUniqueWithoutParadaInput | itinerarioUpsertWithWhereUniqueWithoutParadaInput[]
    createMany?: itinerarioCreateManyParadaInputEnvelope
    set?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    disconnect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    delete?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    update?: itinerarioUpdateWithWhereUniqueWithoutParadaInput | itinerarioUpdateWithWhereUniqueWithoutParadaInput[]
    updateMany?: itinerarioUpdateManyWithWhereWithoutParadaInput | itinerarioUpdateManyWithWhereWithoutParadaInput[]
    deleteMany?: itinerarioScalarWhereInput | itinerarioScalarWhereInput[]
  }

  export type linhaparadaUncheckedUpdateManyWithoutParadaNestedInput = {
    create?: XOR<linhaparadaCreateWithoutParadaInput, linhaparadaUncheckedCreateWithoutParadaInput> | linhaparadaCreateWithoutParadaInput[] | linhaparadaUncheckedCreateWithoutParadaInput[]
    connectOrCreate?: linhaparadaCreateOrConnectWithoutParadaInput | linhaparadaCreateOrConnectWithoutParadaInput[]
    upsert?: linhaparadaUpsertWithWhereUniqueWithoutParadaInput | linhaparadaUpsertWithWhereUniqueWithoutParadaInput[]
    createMany?: linhaparadaCreateManyParadaInputEnvelope
    set?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    disconnect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    delete?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    connect?: linhaparadaWhereUniqueInput | linhaparadaWhereUniqueInput[]
    update?: linhaparadaUpdateWithWhereUniqueWithoutParadaInput | linhaparadaUpdateWithWhereUniqueWithoutParadaInput[]
    updateMany?: linhaparadaUpdateManyWithWhereWithoutParadaInput | linhaparadaUpdateManyWithWhereWithoutParadaInput[]
    deleteMany?: linhaparadaScalarWhereInput | linhaparadaScalarWhereInput[]
  }

  export type itinerarioCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<itinerarioCreateWithoutVeiculoInput, itinerarioUncheckedCreateWithoutVeiculoInput> | itinerarioCreateWithoutVeiculoInput[] | itinerarioUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutVeiculoInput | itinerarioCreateOrConnectWithoutVeiculoInput[]
    createMany?: itinerarioCreateManyVeiculoInputEnvelope
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
  }

  export type itinerarioUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<itinerarioCreateWithoutVeiculoInput, itinerarioUncheckedCreateWithoutVeiculoInput> | itinerarioCreateWithoutVeiculoInput[] | itinerarioUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutVeiculoInput | itinerarioCreateOrConnectWithoutVeiculoInput[]
    createMany?: itinerarioCreateManyVeiculoInputEnvelope
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
  }

  export type itinerarioUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<itinerarioCreateWithoutVeiculoInput, itinerarioUncheckedCreateWithoutVeiculoInput> | itinerarioCreateWithoutVeiculoInput[] | itinerarioUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutVeiculoInput | itinerarioCreateOrConnectWithoutVeiculoInput[]
    upsert?: itinerarioUpsertWithWhereUniqueWithoutVeiculoInput | itinerarioUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: itinerarioCreateManyVeiculoInputEnvelope
    set?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    disconnect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    delete?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    update?: itinerarioUpdateWithWhereUniqueWithoutVeiculoInput | itinerarioUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: itinerarioUpdateManyWithWhereWithoutVeiculoInput | itinerarioUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: itinerarioScalarWhereInput | itinerarioScalarWhereInput[]
  }

  export type itinerarioUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<itinerarioCreateWithoutVeiculoInput, itinerarioUncheckedCreateWithoutVeiculoInput> | itinerarioCreateWithoutVeiculoInput[] | itinerarioUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: itinerarioCreateOrConnectWithoutVeiculoInput | itinerarioCreateOrConnectWithoutVeiculoInput[]
    upsert?: itinerarioUpsertWithWhereUniqueWithoutVeiculoInput | itinerarioUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: itinerarioCreateManyVeiculoInputEnvelope
    set?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    disconnect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    delete?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    connect?: itinerarioWhereUniqueInput | itinerarioWhereUniqueInput[]
    update?: itinerarioUpdateWithWhereUniqueWithoutVeiculoInput | itinerarioUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: itinerarioUpdateManyWithWhereWithoutVeiculoInput | itinerarioUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: itinerarioScalarWhereInput | itinerarioScalarWhereInput[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type corredorparadaCreateWithoutCorredorInput = {
    parada: paradaCreateNestedOneWithoutCorredorparadaInput
  }

  export type corredorparadaUncheckedCreateWithoutCorredorInput = {
    codigoparada: number
  }

  export type corredorparadaCreateOrConnectWithoutCorredorInput = {
    where: corredorparadaWhereUniqueInput
    create: XOR<corredorparadaCreateWithoutCorredorInput, corredorparadaUncheckedCreateWithoutCorredorInput>
  }

  export type corredorparadaCreateManyCorredorInputEnvelope = {
    data: corredorparadaCreateManyCorredorInput | corredorparadaCreateManyCorredorInput[]
    skipDuplicates?: boolean
  }

  export type corredorparadaUpsertWithWhereUniqueWithoutCorredorInput = {
    where: corredorparadaWhereUniqueInput
    update: XOR<corredorparadaUpdateWithoutCorredorInput, corredorparadaUncheckedUpdateWithoutCorredorInput>
    create: XOR<corredorparadaCreateWithoutCorredorInput, corredorparadaUncheckedCreateWithoutCorredorInput>
  }

  export type corredorparadaUpdateWithWhereUniqueWithoutCorredorInput = {
    where: corredorparadaWhereUniqueInput
    data: XOR<corredorparadaUpdateWithoutCorredorInput, corredorparadaUncheckedUpdateWithoutCorredorInput>
  }

  export type corredorparadaUpdateManyWithWhereWithoutCorredorInput = {
    where: corredorparadaScalarWhereInput
    data: XOR<corredorparadaUpdateManyMutationInput, corredorparadaUncheckedUpdateManyWithoutCorredorInput>
  }

  export type corredorparadaScalarWhereInput = {
    AND?: corredorparadaScalarWhereInput | corredorparadaScalarWhereInput[]
    OR?: corredorparadaScalarWhereInput[]
    NOT?: corredorparadaScalarWhereInput | corredorparadaScalarWhereInput[]
    codigocorredor?: IntFilter<"corredorparada"> | number
    codigoparada?: IntFilter<"corredorparada"> | number
  }

  export type corredorCreateWithoutCorredorparadaInput = {
    codigo: number
    nome: string
  }

  export type corredorUncheckedCreateWithoutCorredorparadaInput = {
    codigo: number
    nome: string
  }

  export type corredorCreateOrConnectWithoutCorredorparadaInput = {
    where: corredorWhereUniqueInput
    create: XOR<corredorCreateWithoutCorredorparadaInput, corredorUncheckedCreateWithoutCorredorparadaInput>
  }

  export type paradaCreateWithoutCorredorparadaInput = {
    codigo: number
    nome?: string | null
    endereco?: string | null
    longitude: number
    latitude: number
    itinerario?: itinerarioCreateNestedManyWithoutParadaInput
    linhaparada?: linhaparadaCreateNestedManyWithoutParadaInput
  }

  export type paradaUncheckedCreateWithoutCorredorparadaInput = {
    codigo: number
    nome?: string | null
    endereco?: string | null
    longitude: number
    latitude: number
    itinerario?: itinerarioUncheckedCreateNestedManyWithoutParadaInput
    linhaparada?: linhaparadaUncheckedCreateNestedManyWithoutParadaInput
  }

  export type paradaCreateOrConnectWithoutCorredorparadaInput = {
    where: paradaWhereUniqueInput
    create: XOR<paradaCreateWithoutCorredorparadaInput, paradaUncheckedCreateWithoutCorredorparadaInput>
  }

  export type corredorUpsertWithoutCorredorparadaInput = {
    update: XOR<corredorUpdateWithoutCorredorparadaInput, corredorUncheckedUpdateWithoutCorredorparadaInput>
    create: XOR<corredorCreateWithoutCorredorparadaInput, corredorUncheckedCreateWithoutCorredorparadaInput>
    where?: corredorWhereInput
  }

  export type corredorUpdateToOneWithWhereWithoutCorredorparadaInput = {
    where?: corredorWhereInput
    data: XOR<corredorUpdateWithoutCorredorparadaInput, corredorUncheckedUpdateWithoutCorredorparadaInput>
  }

  export type corredorUpdateWithoutCorredorparadaInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type corredorUncheckedUpdateWithoutCorredorparadaInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type paradaUpsertWithoutCorredorparadaInput = {
    update: XOR<paradaUpdateWithoutCorredorparadaInput, paradaUncheckedUpdateWithoutCorredorparadaInput>
    create: XOR<paradaCreateWithoutCorredorparadaInput, paradaUncheckedCreateWithoutCorredorparadaInput>
    where?: paradaWhereInput
  }

  export type paradaUpdateToOneWithWhereWithoutCorredorparadaInput = {
    where?: paradaWhereInput
    data: XOR<paradaUpdateWithoutCorredorparadaInput, paradaUncheckedUpdateWithoutCorredorparadaInput>
  }

  export type paradaUpdateWithoutCorredorparadaInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    itinerario?: itinerarioUpdateManyWithoutParadaNestedInput
    linhaparada?: linhaparadaUpdateManyWithoutParadaNestedInput
  }

  export type paradaUncheckedUpdateWithoutCorredorparadaInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    itinerario?: itinerarioUncheckedUpdateManyWithoutParadaNestedInput
    linhaparada?: linhaparadaUncheckedUpdateManyWithoutParadaNestedInput
  }

  export type linhaCreateWithoutItinerarioInput = {
    codigo: number
    letreironumerico: string
    modooperacao: number
    modocircular: boolean
    sentido: number
    descritivoprincipal: string
    descritivosecundario: string
    linhaparada?: linhaparadaCreateNestedManyWithoutLinhaInput
  }

  export type linhaUncheckedCreateWithoutItinerarioInput = {
    codigo: number
    letreironumerico: string
    modooperacao: number
    modocircular: boolean
    sentido: number
    descritivoprincipal: string
    descritivosecundario: string
    linhaparada?: linhaparadaUncheckedCreateNestedManyWithoutLinhaInput
  }

  export type linhaCreateOrConnectWithoutItinerarioInput = {
    where: linhaWhereUniqueInput
    create: XOR<linhaCreateWithoutItinerarioInput, linhaUncheckedCreateWithoutItinerarioInput>
  }

  export type paradaCreateWithoutItinerarioInput = {
    codigo: number
    nome?: string | null
    endereco?: string | null
    longitude: number
    latitude: number
    corredorparada?: corredorparadaCreateNestedManyWithoutParadaInput
    linhaparada?: linhaparadaCreateNestedManyWithoutParadaInput
  }

  export type paradaUncheckedCreateWithoutItinerarioInput = {
    codigo: number
    nome?: string | null
    endereco?: string | null
    longitude: number
    latitude: number
    corredorparada?: corredorparadaUncheckedCreateNestedManyWithoutParadaInput
    linhaparada?: linhaparadaUncheckedCreateNestedManyWithoutParadaInput
  }

  export type paradaCreateOrConnectWithoutItinerarioInput = {
    where: paradaWhereUniqueInput
    create: XOR<paradaCreateWithoutItinerarioInput, paradaUncheckedCreateWithoutItinerarioInput>
  }

  export type veiculoCreateWithoutItinerarioInput = {
    prefixo: string
    acessopcd: boolean
  }

  export type veiculoUncheckedCreateWithoutItinerarioInput = {
    prefixo: string
    acessopcd: boolean
  }

  export type veiculoCreateOrConnectWithoutItinerarioInput = {
    where: veiculoWhereUniqueInput
    create: XOR<veiculoCreateWithoutItinerarioInput, veiculoUncheckedCreateWithoutItinerarioInput>
  }

  export type linhaUpsertWithoutItinerarioInput = {
    update: XOR<linhaUpdateWithoutItinerarioInput, linhaUncheckedUpdateWithoutItinerarioInput>
    create: XOR<linhaCreateWithoutItinerarioInput, linhaUncheckedCreateWithoutItinerarioInput>
    where?: linhaWhereInput
  }

  export type linhaUpdateToOneWithWhereWithoutItinerarioInput = {
    where?: linhaWhereInput
    data: XOR<linhaUpdateWithoutItinerarioInput, linhaUncheckedUpdateWithoutItinerarioInput>
  }

  export type linhaUpdateWithoutItinerarioInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    letreironumerico?: StringFieldUpdateOperationsInput | string
    modooperacao?: IntFieldUpdateOperationsInput | number
    modocircular?: BoolFieldUpdateOperationsInput | boolean
    sentido?: IntFieldUpdateOperationsInput | number
    descritivoprincipal?: StringFieldUpdateOperationsInput | string
    descritivosecundario?: StringFieldUpdateOperationsInput | string
    linhaparada?: linhaparadaUpdateManyWithoutLinhaNestedInput
  }

  export type linhaUncheckedUpdateWithoutItinerarioInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    letreironumerico?: StringFieldUpdateOperationsInput | string
    modooperacao?: IntFieldUpdateOperationsInput | number
    modocircular?: BoolFieldUpdateOperationsInput | boolean
    sentido?: IntFieldUpdateOperationsInput | number
    descritivoprincipal?: StringFieldUpdateOperationsInput | string
    descritivosecundario?: StringFieldUpdateOperationsInput | string
    linhaparada?: linhaparadaUncheckedUpdateManyWithoutLinhaNestedInput
  }

  export type paradaUpsertWithoutItinerarioInput = {
    update: XOR<paradaUpdateWithoutItinerarioInput, paradaUncheckedUpdateWithoutItinerarioInput>
    create: XOR<paradaCreateWithoutItinerarioInput, paradaUncheckedCreateWithoutItinerarioInput>
    where?: paradaWhereInput
  }

  export type paradaUpdateToOneWithWhereWithoutItinerarioInput = {
    where?: paradaWhereInput
    data: XOR<paradaUpdateWithoutItinerarioInput, paradaUncheckedUpdateWithoutItinerarioInput>
  }

  export type paradaUpdateWithoutItinerarioInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    corredorparada?: corredorparadaUpdateManyWithoutParadaNestedInput
    linhaparada?: linhaparadaUpdateManyWithoutParadaNestedInput
  }

  export type paradaUncheckedUpdateWithoutItinerarioInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    corredorparada?: corredorparadaUncheckedUpdateManyWithoutParadaNestedInput
    linhaparada?: linhaparadaUncheckedUpdateManyWithoutParadaNestedInput
  }

  export type veiculoUpsertWithoutItinerarioInput = {
    update: XOR<veiculoUpdateWithoutItinerarioInput, veiculoUncheckedUpdateWithoutItinerarioInput>
    create: XOR<veiculoCreateWithoutItinerarioInput, veiculoUncheckedCreateWithoutItinerarioInput>
    where?: veiculoWhereInput
  }

  export type veiculoUpdateToOneWithWhereWithoutItinerarioInput = {
    where?: veiculoWhereInput
    data: XOR<veiculoUpdateWithoutItinerarioInput, veiculoUncheckedUpdateWithoutItinerarioInput>
  }

  export type veiculoUpdateWithoutItinerarioInput = {
    prefixo?: StringFieldUpdateOperationsInput | string
    acessopcd?: BoolFieldUpdateOperationsInput | boolean
  }

  export type veiculoUncheckedUpdateWithoutItinerarioInput = {
    prefixo?: StringFieldUpdateOperationsInput | string
    acessopcd?: BoolFieldUpdateOperationsInput | boolean
  }

  export type itinerarioCreateWithoutLinhaInput = {
    datareferencia: Date | string
    previsaochegada: Date | string
    parada: paradaCreateNestedOneWithoutItinerarioInput
    veiculo: veiculoCreateNestedOneWithoutItinerarioInput
  }

  export type itinerarioUncheckedCreateWithoutLinhaInput = {
    prefixoveiculo: string
    datareferencia: Date | string
    codigoparada: number
    previsaochegada: Date | string
  }

  export type itinerarioCreateOrConnectWithoutLinhaInput = {
    where: itinerarioWhereUniqueInput
    create: XOR<itinerarioCreateWithoutLinhaInput, itinerarioUncheckedCreateWithoutLinhaInput>
  }

  export type itinerarioCreateManyLinhaInputEnvelope = {
    data: itinerarioCreateManyLinhaInput | itinerarioCreateManyLinhaInput[]
    skipDuplicates?: boolean
  }

  export type linhaparadaCreateWithoutLinhaInput = {
    parada: paradaCreateNestedOneWithoutLinhaparadaInput
  }

  export type linhaparadaUncheckedCreateWithoutLinhaInput = {
    codigoparada: number
  }

  export type linhaparadaCreateOrConnectWithoutLinhaInput = {
    where: linhaparadaWhereUniqueInput
    create: XOR<linhaparadaCreateWithoutLinhaInput, linhaparadaUncheckedCreateWithoutLinhaInput>
  }

  export type linhaparadaCreateManyLinhaInputEnvelope = {
    data: linhaparadaCreateManyLinhaInput | linhaparadaCreateManyLinhaInput[]
    skipDuplicates?: boolean
  }

  export type itinerarioUpsertWithWhereUniqueWithoutLinhaInput = {
    where: itinerarioWhereUniqueInput
    update: XOR<itinerarioUpdateWithoutLinhaInput, itinerarioUncheckedUpdateWithoutLinhaInput>
    create: XOR<itinerarioCreateWithoutLinhaInput, itinerarioUncheckedCreateWithoutLinhaInput>
  }

  export type itinerarioUpdateWithWhereUniqueWithoutLinhaInput = {
    where: itinerarioWhereUniqueInput
    data: XOR<itinerarioUpdateWithoutLinhaInput, itinerarioUncheckedUpdateWithoutLinhaInput>
  }

  export type itinerarioUpdateManyWithWhereWithoutLinhaInput = {
    where: itinerarioScalarWhereInput
    data: XOR<itinerarioUpdateManyMutationInput, itinerarioUncheckedUpdateManyWithoutLinhaInput>
  }

  export type itinerarioScalarWhereInput = {
    AND?: itinerarioScalarWhereInput | itinerarioScalarWhereInput[]
    OR?: itinerarioScalarWhereInput[]
    NOT?: itinerarioScalarWhereInput | itinerarioScalarWhereInput[]
    codigolinha?: IntFilter<"itinerario"> | number
    prefixoveiculo?: StringFilter<"itinerario"> | string
    datareferencia?: DateTimeFilter<"itinerario"> | Date | string
    codigoparada?: IntFilter<"itinerario"> | number
    previsaochegada?: DateTimeFilter<"itinerario"> | Date | string
  }

  export type linhaparadaUpsertWithWhereUniqueWithoutLinhaInput = {
    where: linhaparadaWhereUniqueInput
    update: XOR<linhaparadaUpdateWithoutLinhaInput, linhaparadaUncheckedUpdateWithoutLinhaInput>
    create: XOR<linhaparadaCreateWithoutLinhaInput, linhaparadaUncheckedCreateWithoutLinhaInput>
  }

  export type linhaparadaUpdateWithWhereUniqueWithoutLinhaInput = {
    where: linhaparadaWhereUniqueInput
    data: XOR<linhaparadaUpdateWithoutLinhaInput, linhaparadaUncheckedUpdateWithoutLinhaInput>
  }

  export type linhaparadaUpdateManyWithWhereWithoutLinhaInput = {
    where: linhaparadaScalarWhereInput
    data: XOR<linhaparadaUpdateManyMutationInput, linhaparadaUncheckedUpdateManyWithoutLinhaInput>
  }

  export type linhaparadaScalarWhereInput = {
    AND?: linhaparadaScalarWhereInput | linhaparadaScalarWhereInput[]
    OR?: linhaparadaScalarWhereInput[]
    NOT?: linhaparadaScalarWhereInput | linhaparadaScalarWhereInput[]
    codigolinha?: IntFilter<"linhaparada"> | number
    codigoparada?: IntFilter<"linhaparada"> | number
  }

  export type linhaCreateWithoutLinhaparadaInput = {
    codigo: number
    letreironumerico: string
    modooperacao: number
    modocircular: boolean
    sentido: number
    descritivoprincipal: string
    descritivosecundario: string
    itinerario?: itinerarioCreateNestedManyWithoutLinhaInput
  }

  export type linhaUncheckedCreateWithoutLinhaparadaInput = {
    codigo: number
    letreironumerico: string
    modooperacao: number
    modocircular: boolean
    sentido: number
    descritivoprincipal: string
    descritivosecundario: string
    itinerario?: itinerarioUncheckedCreateNestedManyWithoutLinhaInput
  }

  export type linhaCreateOrConnectWithoutLinhaparadaInput = {
    where: linhaWhereUniqueInput
    create: XOR<linhaCreateWithoutLinhaparadaInput, linhaUncheckedCreateWithoutLinhaparadaInput>
  }

  export type paradaCreateWithoutLinhaparadaInput = {
    codigo: number
    nome?: string | null
    endereco?: string | null
    longitude: number
    latitude: number
    corredorparada?: corredorparadaCreateNestedManyWithoutParadaInput
    itinerario?: itinerarioCreateNestedManyWithoutParadaInput
  }

  export type paradaUncheckedCreateWithoutLinhaparadaInput = {
    codigo: number
    nome?: string | null
    endereco?: string | null
    longitude: number
    latitude: number
    corredorparada?: corredorparadaUncheckedCreateNestedManyWithoutParadaInput
    itinerario?: itinerarioUncheckedCreateNestedManyWithoutParadaInput
  }

  export type paradaCreateOrConnectWithoutLinhaparadaInput = {
    where: paradaWhereUniqueInput
    create: XOR<paradaCreateWithoutLinhaparadaInput, paradaUncheckedCreateWithoutLinhaparadaInput>
  }

  export type linhaUpsertWithoutLinhaparadaInput = {
    update: XOR<linhaUpdateWithoutLinhaparadaInput, linhaUncheckedUpdateWithoutLinhaparadaInput>
    create: XOR<linhaCreateWithoutLinhaparadaInput, linhaUncheckedCreateWithoutLinhaparadaInput>
    where?: linhaWhereInput
  }

  export type linhaUpdateToOneWithWhereWithoutLinhaparadaInput = {
    where?: linhaWhereInput
    data: XOR<linhaUpdateWithoutLinhaparadaInput, linhaUncheckedUpdateWithoutLinhaparadaInput>
  }

  export type linhaUpdateWithoutLinhaparadaInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    letreironumerico?: StringFieldUpdateOperationsInput | string
    modooperacao?: IntFieldUpdateOperationsInput | number
    modocircular?: BoolFieldUpdateOperationsInput | boolean
    sentido?: IntFieldUpdateOperationsInput | number
    descritivoprincipal?: StringFieldUpdateOperationsInput | string
    descritivosecundario?: StringFieldUpdateOperationsInput | string
    itinerario?: itinerarioUpdateManyWithoutLinhaNestedInput
  }

  export type linhaUncheckedUpdateWithoutLinhaparadaInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    letreironumerico?: StringFieldUpdateOperationsInput | string
    modooperacao?: IntFieldUpdateOperationsInput | number
    modocircular?: BoolFieldUpdateOperationsInput | boolean
    sentido?: IntFieldUpdateOperationsInput | number
    descritivoprincipal?: StringFieldUpdateOperationsInput | string
    descritivosecundario?: StringFieldUpdateOperationsInput | string
    itinerario?: itinerarioUncheckedUpdateManyWithoutLinhaNestedInput
  }

  export type paradaUpsertWithoutLinhaparadaInput = {
    update: XOR<paradaUpdateWithoutLinhaparadaInput, paradaUncheckedUpdateWithoutLinhaparadaInput>
    create: XOR<paradaCreateWithoutLinhaparadaInput, paradaUncheckedCreateWithoutLinhaparadaInput>
    where?: paradaWhereInput
  }

  export type paradaUpdateToOneWithWhereWithoutLinhaparadaInput = {
    where?: paradaWhereInput
    data: XOR<paradaUpdateWithoutLinhaparadaInput, paradaUncheckedUpdateWithoutLinhaparadaInput>
  }

  export type paradaUpdateWithoutLinhaparadaInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    corredorparada?: corredorparadaUpdateManyWithoutParadaNestedInput
    itinerario?: itinerarioUpdateManyWithoutParadaNestedInput
  }

  export type paradaUncheckedUpdateWithoutLinhaparadaInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    corredorparada?: corredorparadaUncheckedUpdateManyWithoutParadaNestedInput
    itinerario?: itinerarioUncheckedUpdateManyWithoutParadaNestedInput
  }

  export type corredorparadaCreateWithoutParadaInput = {
    corredor: corredorCreateNestedOneWithoutCorredorparadaInput
  }

  export type corredorparadaUncheckedCreateWithoutParadaInput = {
    codigocorredor: number
  }

  export type corredorparadaCreateOrConnectWithoutParadaInput = {
    where: corredorparadaWhereUniqueInput
    create: XOR<corredorparadaCreateWithoutParadaInput, corredorparadaUncheckedCreateWithoutParadaInput>
  }

  export type corredorparadaCreateManyParadaInputEnvelope = {
    data: corredorparadaCreateManyParadaInput | corredorparadaCreateManyParadaInput[]
    skipDuplicates?: boolean
  }

  export type itinerarioCreateWithoutParadaInput = {
    datareferencia: Date | string
    previsaochegada: Date | string
    linha: linhaCreateNestedOneWithoutItinerarioInput
    veiculo: veiculoCreateNestedOneWithoutItinerarioInput
  }

  export type itinerarioUncheckedCreateWithoutParadaInput = {
    codigolinha: number
    prefixoveiculo: string
    datareferencia: Date | string
    previsaochegada: Date | string
  }

  export type itinerarioCreateOrConnectWithoutParadaInput = {
    where: itinerarioWhereUniqueInput
    create: XOR<itinerarioCreateWithoutParadaInput, itinerarioUncheckedCreateWithoutParadaInput>
  }

  export type itinerarioCreateManyParadaInputEnvelope = {
    data: itinerarioCreateManyParadaInput | itinerarioCreateManyParadaInput[]
    skipDuplicates?: boolean
  }

  export type linhaparadaCreateWithoutParadaInput = {
    linha: linhaCreateNestedOneWithoutLinhaparadaInput
  }

  export type linhaparadaUncheckedCreateWithoutParadaInput = {
    codigolinha: number
  }

  export type linhaparadaCreateOrConnectWithoutParadaInput = {
    where: linhaparadaWhereUniqueInput
    create: XOR<linhaparadaCreateWithoutParadaInput, linhaparadaUncheckedCreateWithoutParadaInput>
  }

  export type linhaparadaCreateManyParadaInputEnvelope = {
    data: linhaparadaCreateManyParadaInput | linhaparadaCreateManyParadaInput[]
    skipDuplicates?: boolean
  }

  export type corredorparadaUpsertWithWhereUniqueWithoutParadaInput = {
    where: corredorparadaWhereUniqueInput
    update: XOR<corredorparadaUpdateWithoutParadaInput, corredorparadaUncheckedUpdateWithoutParadaInput>
    create: XOR<corredorparadaCreateWithoutParadaInput, corredorparadaUncheckedCreateWithoutParadaInput>
  }

  export type corredorparadaUpdateWithWhereUniqueWithoutParadaInput = {
    where: corredorparadaWhereUniqueInput
    data: XOR<corredorparadaUpdateWithoutParadaInput, corredorparadaUncheckedUpdateWithoutParadaInput>
  }

  export type corredorparadaUpdateManyWithWhereWithoutParadaInput = {
    where: corredorparadaScalarWhereInput
    data: XOR<corredorparadaUpdateManyMutationInput, corredorparadaUncheckedUpdateManyWithoutParadaInput>
  }

  export type itinerarioUpsertWithWhereUniqueWithoutParadaInput = {
    where: itinerarioWhereUniqueInput
    update: XOR<itinerarioUpdateWithoutParadaInput, itinerarioUncheckedUpdateWithoutParadaInput>
    create: XOR<itinerarioCreateWithoutParadaInput, itinerarioUncheckedCreateWithoutParadaInput>
  }

  export type itinerarioUpdateWithWhereUniqueWithoutParadaInput = {
    where: itinerarioWhereUniqueInput
    data: XOR<itinerarioUpdateWithoutParadaInput, itinerarioUncheckedUpdateWithoutParadaInput>
  }

  export type itinerarioUpdateManyWithWhereWithoutParadaInput = {
    where: itinerarioScalarWhereInput
    data: XOR<itinerarioUpdateManyMutationInput, itinerarioUncheckedUpdateManyWithoutParadaInput>
  }

  export type linhaparadaUpsertWithWhereUniqueWithoutParadaInput = {
    where: linhaparadaWhereUniqueInput
    update: XOR<linhaparadaUpdateWithoutParadaInput, linhaparadaUncheckedUpdateWithoutParadaInput>
    create: XOR<linhaparadaCreateWithoutParadaInput, linhaparadaUncheckedCreateWithoutParadaInput>
  }

  export type linhaparadaUpdateWithWhereUniqueWithoutParadaInput = {
    where: linhaparadaWhereUniqueInput
    data: XOR<linhaparadaUpdateWithoutParadaInput, linhaparadaUncheckedUpdateWithoutParadaInput>
  }

  export type linhaparadaUpdateManyWithWhereWithoutParadaInput = {
    where: linhaparadaScalarWhereInput
    data: XOR<linhaparadaUpdateManyMutationInput, linhaparadaUncheckedUpdateManyWithoutParadaInput>
  }

  export type itinerarioCreateWithoutVeiculoInput = {
    datareferencia: Date | string
    previsaochegada: Date | string
    linha: linhaCreateNestedOneWithoutItinerarioInput
    parada: paradaCreateNestedOneWithoutItinerarioInput
  }

  export type itinerarioUncheckedCreateWithoutVeiculoInput = {
    codigolinha: number
    datareferencia: Date | string
    codigoparada: number
    previsaochegada: Date | string
  }

  export type itinerarioCreateOrConnectWithoutVeiculoInput = {
    where: itinerarioWhereUniqueInput
    create: XOR<itinerarioCreateWithoutVeiculoInput, itinerarioUncheckedCreateWithoutVeiculoInput>
  }

  export type itinerarioCreateManyVeiculoInputEnvelope = {
    data: itinerarioCreateManyVeiculoInput | itinerarioCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type itinerarioUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: itinerarioWhereUniqueInput
    update: XOR<itinerarioUpdateWithoutVeiculoInput, itinerarioUncheckedUpdateWithoutVeiculoInput>
    create: XOR<itinerarioCreateWithoutVeiculoInput, itinerarioUncheckedCreateWithoutVeiculoInput>
  }

  export type itinerarioUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: itinerarioWhereUniqueInput
    data: XOR<itinerarioUpdateWithoutVeiculoInput, itinerarioUncheckedUpdateWithoutVeiculoInput>
  }

  export type itinerarioUpdateManyWithWhereWithoutVeiculoInput = {
    where: itinerarioScalarWhereInput
    data: XOR<itinerarioUpdateManyMutationInput, itinerarioUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type corredorparadaCreateManyCorredorInput = {
    codigoparada: number
  }

  export type corredorparadaUpdateWithoutCorredorInput = {
    parada?: paradaUpdateOneRequiredWithoutCorredorparadaNestedInput
  }

  export type corredorparadaUncheckedUpdateWithoutCorredorInput = {
    codigoparada?: IntFieldUpdateOperationsInput | number
  }

  export type corredorparadaUncheckedUpdateManyWithoutCorredorInput = {
    codigoparada?: IntFieldUpdateOperationsInput | number
  }

  export type itinerarioCreateManyLinhaInput = {
    prefixoveiculo: string
    datareferencia: Date | string
    codigoparada: number
    previsaochegada: Date | string
  }

  export type linhaparadaCreateManyLinhaInput = {
    codigoparada: number
  }

  export type itinerarioUpdateWithoutLinhaInput = {
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
    parada?: paradaUpdateOneRequiredWithoutItinerarioNestedInput
    veiculo?: veiculoUpdateOneRequiredWithoutItinerarioNestedInput
  }

  export type itinerarioUncheckedUpdateWithoutLinhaInput = {
    prefixoveiculo?: StringFieldUpdateOperationsInput | string
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoparada?: IntFieldUpdateOperationsInput | number
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type itinerarioUncheckedUpdateManyWithoutLinhaInput = {
    prefixoveiculo?: StringFieldUpdateOperationsInput | string
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoparada?: IntFieldUpdateOperationsInput | number
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type linhaparadaUpdateWithoutLinhaInput = {
    parada?: paradaUpdateOneRequiredWithoutLinhaparadaNestedInput
  }

  export type linhaparadaUncheckedUpdateWithoutLinhaInput = {
    codigoparada?: IntFieldUpdateOperationsInput | number
  }

  export type linhaparadaUncheckedUpdateManyWithoutLinhaInput = {
    codigoparada?: IntFieldUpdateOperationsInput | number
  }

  export type corredorparadaCreateManyParadaInput = {
    codigocorredor: number
  }

  export type itinerarioCreateManyParadaInput = {
    codigolinha: number
    prefixoveiculo: string
    datareferencia: Date | string
    previsaochegada: Date | string
  }

  export type linhaparadaCreateManyParadaInput = {
    codigolinha: number
  }

  export type corredorparadaUpdateWithoutParadaInput = {
    corredor?: corredorUpdateOneRequiredWithoutCorredorparadaNestedInput
  }

  export type corredorparadaUncheckedUpdateWithoutParadaInput = {
    codigocorredor?: IntFieldUpdateOperationsInput | number
  }

  export type corredorparadaUncheckedUpdateManyWithoutParadaInput = {
    codigocorredor?: IntFieldUpdateOperationsInput | number
  }

  export type itinerarioUpdateWithoutParadaInput = {
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
    linha?: linhaUpdateOneRequiredWithoutItinerarioNestedInput
    veiculo?: veiculoUpdateOneRequiredWithoutItinerarioNestedInput
  }

  export type itinerarioUncheckedUpdateWithoutParadaInput = {
    codigolinha?: IntFieldUpdateOperationsInput | number
    prefixoveiculo?: StringFieldUpdateOperationsInput | string
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type itinerarioUncheckedUpdateManyWithoutParadaInput = {
    codigolinha?: IntFieldUpdateOperationsInput | number
    prefixoveiculo?: StringFieldUpdateOperationsInput | string
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type linhaparadaUpdateWithoutParadaInput = {
    linha?: linhaUpdateOneRequiredWithoutLinhaparadaNestedInput
  }

  export type linhaparadaUncheckedUpdateWithoutParadaInput = {
    codigolinha?: IntFieldUpdateOperationsInput | number
  }

  export type linhaparadaUncheckedUpdateManyWithoutParadaInput = {
    codigolinha?: IntFieldUpdateOperationsInput | number
  }

  export type itinerarioCreateManyVeiculoInput = {
    codigolinha: number
    datareferencia: Date | string
    codigoparada: number
    previsaochegada: Date | string
  }

  export type itinerarioUpdateWithoutVeiculoInput = {
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
    linha?: linhaUpdateOneRequiredWithoutItinerarioNestedInput
    parada?: paradaUpdateOneRequiredWithoutItinerarioNestedInput
  }

  export type itinerarioUncheckedUpdateWithoutVeiculoInput = {
    codigolinha?: IntFieldUpdateOperationsInput | number
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoparada?: IntFieldUpdateOperationsInput | number
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type itinerarioUncheckedUpdateManyWithoutVeiculoInput = {
    codigolinha?: IntFieldUpdateOperationsInput | number
    datareferencia?: DateTimeFieldUpdateOperationsInput | Date | string
    codigoparada?: IntFieldUpdateOperationsInput | number
    previsaochegada?: DateTimeFieldUpdateOperationsInput | Date | string
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