import {
  isBigInt,
  isFunction,
  isNumber,
  isObject,
  isDef,
  isNull
} from '@/is'

describe('is', () => {
  it('should be worked with is', () => {
    expect(isBigInt(BigInt(1))).toBeTruthy()
    expect(isBigInt(1)).toBeFalsy()
    expect(isBigInt(NaN)).toBeFalsy()
    expect(isNumber(1)).toBeTruthy()
    expect(isNumber(NaN)).toBeTruthy()
    expect(isNumber(BigInt(1))).toBeFalsy()
    expect(isObject({})).toBeTruthy()
    expect(isObject(null)).toBeFalsy()
    expect(isFunction(() => {})).toBeTruthy()
    expect(isDef(undefined)).toBeFalsy()
    expect(isDef(null)).toBeFalsy()
    expect(isDef({})).toBeFalsy()
    expect(isNull(undefined)).toBeFalsy()
    expect(isNull(null)).toBeTruthy()
  })
})