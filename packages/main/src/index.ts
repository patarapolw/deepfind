import { deepEqual, isPlainObject } from './util'

export function deepfindExact (o: any, cond: any) {
  return deepfindHistory(o, cond, {})
}

function deepfindHistory (o: any, cond: any, last: any) {
  const result: (Record<string, any> | any[])[] = []

  if (deepEqual(o, cond)) {
    result.push(last)
  } if (Array.isArray(o)) {
    for (const a of o) {
      if (deepEqual(a, cond)) {
        result.push(o)
      } else if (a && typeof a === 'object') {
        result.push(...deepfindHistory(a, cond, o))
      }
    }
  } else {
    if (isPlainObject(o)) {
      for (const a of Object.values(o)) {
        result.push(...deepfindHistory(a, cond, o))
      }
    }
  }

  return result
}
