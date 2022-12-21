import { camelCase, underscore } from '@/string'

describe('test string', () => {
  it('should work with camelCase', () => {
    expect(camelCase('')).toBe('')
    expect(camelCase('_a')).toBe('A')
    expect(camelCase('a_a')).toBe('aA')
    expect(camelCase('a-b-C')).toBe('aBC')
  })

  it('should work with underscore', () => {
    expect(underscore('toString')).toBe('to_string')
    expect(underscore('t')).toBe('t')
    expect(underscore('t_t')).toBe('t_t')
    expect(underscore('_t')).toBe('_t')
  })
})