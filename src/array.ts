export function chunk <T extends any[]>(arr: T, size = 1) {
  const len = arr.length

  if (!len || size < 1) return arr

  let index = 0
  let resIndex = 0
  const result = Array(Math.ceil(len / size))

  while (index < len) {
    result[resIndex++] = arr.slice(index, (index += size))
  }

  return result
}