import { mapToArray } from '../src/map'
describe('map', () => {
  it('should work with with mapToArray', () => {
    expect(mapToArray(new Map([['a', 1]]))).toEqual([{ key: 'a', value: 1 }])
  })
})