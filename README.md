# deepfind

Deep find a primitive or a plain Object inside an Array or a plain Object.

<!-- markdownlint-disable no-trailing-punctuation -->
## Why?

I wrote this package specifically to search for a Webpack config inside `nuxt.config.js` and `vue.config.js`, so that I can tweak `pug-plain-loader`

```javascript
const deepfind = require('@patarapolw/deepfind')

console.log(deepfind(config, { loader: 'pug-plain-loader' }))
console.log(deepfind(config, 'pug-plain-loader'))
```

## Installation

Apparently, `deepfind` is already taken. I have to use `@patarapolw/deepfind`

<!-- markdownlint-disable -->
```
npm i @patarapolw/deepfind
# Or yarn add @patarapolw/deepfind
```
