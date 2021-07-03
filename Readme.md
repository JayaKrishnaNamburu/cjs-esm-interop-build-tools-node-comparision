A small example to understand importing a `cjs` module inside `esm`. In `Node v14.6`. You can import a `cjs` package using

```js
import { create } from 'jss'
import preset from 'jss-preset-default'
const jss = create(preset.default())
```

`.default` convention for importing anything from `module.exports`. In the example i am importing `preset` from
`jss-preset-default` which exposes `cjs` bundle using [main](https://unpkg.com/browse/jss-preset-default@10.7.1/package.json).

So, to make it work in `Node v14` we need to import using

```js
const jss = create(preset.default())
```

But to do the same using `webpack` we just need to do it using

```js
import { create } from 'jss'
import preset from 'jss-preset-default'
const jss = create(preset())
```

And this works in `webpack` builds but not in nodejs