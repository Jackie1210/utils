import { objectKeys, objectPick } from '../src/object'
describe('object', () => {
  const o = {
    a: 1,
    b: '1'
  }
  it('objectKeys should work', () => {
    expect(objectKeys(o)).toEqual(['a', 'b'])
  })
  it('objectPick should work', () => {
    expect(objectPick(o, ['a'])).toEqual({ a: 1 })
  })
})