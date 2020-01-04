export default function deepfind (o: any, cond: string | number | null | undefined | Record<string, any>) {
  const result: any[] = []

  if (Array.isArray(o)) {
    for (const a of o) {
      if (Array.isArray(a) || makePlainObject(a)) {
        result.push(...deepfind(a, cond))
      } else {
        if (a === cond) {
          result.push(o)
        }
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
          result.push(...deepfind(a, cond))
        }
      }
    }
  }

  return result
}

function makePlainObject (a: any): Record<string, any> | null {
  return (a && typeof a === 'object' && !Array.isArray(a)) ? a : null
}
