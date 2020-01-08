import yaml from 'js-yaml'

export function deepEqual (o1: any, o2: any) {
  return deepDump(o1) === deepDump(o2)
}

/**
 * Uses unsafe YAML Dump
 */
export function deepDump (obj: any) {
  return yaml.dump(obj, {
    noRefs: true,
    indent: 0,
    noArrayIndent: true,
    sortKeys: true
  })
}

export function isPlainObject (a: any): boolean {
  return a && typeof a === 'object' && !Array.isArray(a)
}

export function makeOrNull (a: any, check: (a0: any) => boolean) {
  return check(a) ? a : null
}
