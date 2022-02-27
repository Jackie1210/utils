export function mapToArray<T extends Map<unknown, unknown>>(source: T) {
  return [...source].map(([key, value]) => ({ key, value }))
}