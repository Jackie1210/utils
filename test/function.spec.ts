import { sleep, noop, retry } from "@/function"

const executeAfterTwoHours = (func: any) => {
  setTimeout(func, 1000 * 60 * 60 * 2) // 2 hours
}


describe('function', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('should work with sleep', async () => {
    const fn = vi.fn()
    const p = sleep(3000)
    vi.runAllTimers()
    await p
    fn()
    expect(fn).toBeCalled()
  })

  it('noop should work', () => {
    expect(noop()).toBeUndefined()
  })

  it('should be worked with retry', async () => {
    const resolve = vi.fn(() => Promise.resolve('resolve'))
    const reject = vi.fn(() => Promise.reject('reject'))

    try {
      await retry(reject)
    } catch (e) {
      expect(e).toBe('reject')
      expect(reject).toHaveBeenCalledTimes(3)
    }

    try {
      const res = await retry(resolve)
      expect(res).toBe('resolve')
      expect(resolve).toHaveBeenCalledTimes(1)
    } catch (e) {
      //
    }
  })
})