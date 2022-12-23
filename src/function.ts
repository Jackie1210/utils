export function noop() {
  //
}

export function sleep(ms: number = 3) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms * 1000)
  })
}

export async function retry<T>(fn: (...v: any[]) => Promise<T> | T, times = 3): Promise<T> {
  try {
    return await fn()
  } catch (e) {
    if (times === 1) {
      throw e
    }
    return retry(fn, --times)
  }
}