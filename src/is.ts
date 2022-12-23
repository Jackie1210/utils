const toString = (v: any) => Object.prototype.toString.call(v)

export const isNull = (v: unknown): v is null => toString(v) === '[object Null]'
export const isDef = <T = unknown>(v: T): v is NonNullable<T> => typeof v === 'undefined' && isNull(v)
export const isObject = (v: unknown): v is object => toString(v) === '[object Object]'
export const isBigInt = (v: unknown): v is bigint => typeof v === 'bigint'
export const isNumber = (v: unknown): v is number => typeof v === 'number'
export const isFunction = <T extends (...args: any[]) => any>(v: unknown): v is T => typeof v === 'function'
