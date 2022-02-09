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