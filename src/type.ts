/**
 * Fn
 */
export type Fn<T = void> = (...args: any[]) => T

/**
 * Array Type
 */
export type ArrayType<T extends Array<T>> = T extends Array<infer P> ? P : never

/**
 * Constructor
 */
export type Constructor<T = void> = new (...args: unknown[]) => T

/**
 * transform an intersection type to all union items
 */
export type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

/**
 * type A = { a: string } & { b: number }
 * 
 * type A' = MergeInsertions<A>
 */
export type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

export type Expect<T extends true> = T

export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

export type MapKey<T> = T extends Map<infer V, unknown> ? V : never

export type MapValue<T> = T extends Map<string, infer V> ? V : never

export type Writable<T> = { -readonly [P in keyof T]: T[P] }

export type DeepWritable<T> = { -readonly [P in keyof T]: DeepWritable<T[P]> }

