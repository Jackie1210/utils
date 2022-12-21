import { sleep, noop } from "@/function"

describe('function', () => {
  it('should work with sleep', async () => {
    let a = 0
    setTimeout(() => {
      expect(a).toBe(0)
    }, 1000)
  
    setTimeout(() => {
      expect(a).toBe(1)
    }, 4000)
  
    await sleep(3)
    ++a
  })

  it('noop should work', () => {
    expect(noop()).toBeUndefined()
  })
})