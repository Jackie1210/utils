import { chunk} from '@/array'

describe('array', () => {
  it('should work with chunk', () => {
    expect(chunk([])).toEqual([])
    expect(chunk([], -1)).toEqual([])
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']])
  })
})