export function objectKeys <T extends object>(obj: T) {
  return Object.keys(obj) as Array<keyof T>
}

export function objectPick <T, K extends keyof T>(obj: T, arr: K[]) {
  return arr.reduce((res, item) => {
    res[item] = obj[item]

    return res
  }, {} as Pick<T, K>)
}