export default function deepfind (o: any, cond: string | number | null | undefined | Record<string, any>) {
  return deepfindHistory(o, cond, {})
}

function deepfindHistory (o: any, cond: string | number | null | undefined | Record<string, any>, last: any) {
  const result: Record<string, any>[] = []

  if (o === cond) {
    result.push(last)
  } if (Array.isArray(o)) {
    for (const a of o) {
      if (a && typeof a === 'object') {
        result.push(...deepfindHistory(a, cond, o))
      } else if (a === cond) {
        result.push(o)
      }
    }
  } else {
    const o1 = makePlainObject(o)
    const cond1 = makePlainObject(cond)

    if (o1) {
      if (cond1 && Object.entries(cond1).every(([k, v]) => o1[k] === v)) {
        result.push(o1)
      } else {
        for (const a of Object.values(o1)) {
          result.push(...deepfindHistory(a, cond, o))
        }
      }
    }
  }

  return result
}

function makePlainObject (a: any): Record<string, any> | null {
  return (a && typeof a === 'object' && !Array.isArray(a)) ? a : null
}
