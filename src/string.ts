export function camelCase (str: string) {
  return str.split(/-|_/)
    .map((v, i) => i ? v.toUpperCase() : v)
    .join('')
}

export function underscore (str: string) {
  let i = 0
  let j = i
  const len = str.length
  const res = []

  while(i < len) {
    if (/[A-Z]/.test(str[i])) {
      res.push(str.substring(j, i).toLowerCase())
      j = i
    }
    i++
  }

  if (j !== i) res.push(str.substring(j, i).toLowerCase())

  return res.join('_')
}