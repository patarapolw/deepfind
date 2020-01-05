import deepfind from '.'
import assert from 'assert'

interface ITestSuite {
  name: string
  cond: any
  expect: (result: any) => boolean
  obj: any
}

const testSuite: ITestSuite[] = [
  {
    name: 'key',
    cond: {
      loader: 'raw-loader'
    },
    expect: (r) => r.length === 1,
    obj: {
      a: {
        loader: 'raw-loader'
      },
      b: ['raw-loader', 'sth']
    }
  },
  {
    name: 'string',
    cond: 'raw-loader',
    expect: (r) => r.length === 2,
    obj: {
      a: {
        loader: 'raw-loader'
      },
      b: ['raw-loader', 'sth']
    }
  },
  {
    name: 'number',
    cond: 1,
    expect: (r) => r.length === 2,
    obj: {
      a: {
        loader: 1
      },
      b: [1, 'sth']
    }
  },
  {
    name: 'boolean',
    cond: false,
    expect: (r) => r.length === 2,
    obj: {
      a: {
        loader: false
      },
      b: [false, 'sth']
    }
  },
  {
    name: 'null',
    cond: null,
    expect: (r) => r.length === 2,
    obj: {
      a: {
        loader: null
      },
      b: [null, 'sth']
    }
  },
  {
    name: 'undefined',
    cond: undefined,
    expect: (r) => r.length === 2,
    obj: {
      a: {
        loader: undefined
      },
      b: [undefined, 'sth']
    }
  }
]

testSuite.forEach((t) => {
  describe(t.name, () => {
    it(t.name, () => {
      const r = deepfind(t.obj, t.cond)
      console.log(r)
      assert(t.expect(r))
    })
  })
})
