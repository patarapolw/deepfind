# @patarapolw/deepfind

Deep find a primitive or a plain Object inside an Array or a plain Object. Always return a Object (an Array or a plain Object), so that the Object (an Array or a plain Object) can be tweaked.

<!-- markdownlint-disable no-trailing-punctuation -->
## Why?

I wrote this package specifically to search for a Webpack config inside `nuxt.config.js` and `vue.config.js`, so that I can tweak `pug-plain-loader` or `raw-loader`.

```javascript
const deepfind = require('@patarapolw/deepfind')

console.log(deepfind(config, { loader: 'pug-plain-loader' }))
console.log(deepfind(config, 'raw-loader'))
```

Output

```javascript
[
  {
    loader: 'pug-plain-loader',
    options: {}
  },
  {
    loader: 'pug-plain-loader',
    options: {}
  }
]
[
  [
    'raw-loader',
    {
      loader: 'pug-plain-loader',
      options: {}
    }
  ]
]
```

## How I actually use

In my `nuxt.config.js`

```javascript
import deepfind from '@patarapolw/deepfind'
import showdown from 'showdown'

const mdConverter = new showdown.Converter()

export default {
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      for (const r of deepfind(config, 'pug-plain-loader')) {
        if (!Array.isArray(r)) {
          r.options = r.options || {}
          r.options.filters = {
            markdown: (s: string) => mdConverter.makeHtml(s)
          }
        }
      }
    }
  }
}
```

## Installation

Apparently, `deepfind` is already taken. I have to use `@patarapolw/deepfind`

```sh
yarn add @patarapolw/deepfind
# Or npm i @patarapolw/deepfind
```
