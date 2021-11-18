type TargetFun<V> = (...args: any[]) => V

function memoize<V>(fn: TargetFun<V>) {
  return new Proxy(fn, {
    cache: new Map<string, V>(),
    apply(target, thisArg, argsList) {
      const currentCache = (this as any).cache

      const cacheKey = argsList.toString()

      if (!currentCache.has(cacheKey)) {
        currentCache.set(cacheKey, target.apply(thisArg, argsList))
      }
      return currentCache.get(cacheKey)
    },
  })
}

// 测试
export const fibonacci = (n: number): number =>
  n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2) // 1271.25ms
export const memoizedFibonacci = memoize<number>(fibonacci) // 13.7ms

const generateKeyError = new Error("Can't generate key from function argument")

// 基于函数参数生成唯一值
export default function generateKey(argument: any[]): string {
  try {
    return `${Array.from(argument).join(',')}`
  } catch (_) {
    throw generateKeyError
  }
}
