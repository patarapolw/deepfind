import assert from 'assert'
import fs from 'fs'

import yaml from 'js-yaml'

import { deepfindExact } from '@/.'

const suite = yaml.load(fs.readFileSync(`${__dirname}/index.spec.yaml`, 'utf8'))

describe('deepfindExact', () => {
  suite.deepfindExact.forEach((t: any) => {
    it(t.name, () => {
      const { obj, cond } = t.input
      assert.deepStrictEqual(deepfindExact(obj, cond), t.expected)
    })
  })
})
