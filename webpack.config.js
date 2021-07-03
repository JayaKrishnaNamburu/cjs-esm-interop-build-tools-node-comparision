import { fileURLToPath } from 'url';
import * as path from 'path'
import  HTMLWebpackPlugin from 'html-webpack-plugin'
const { resolve, dirname } = path
const __dirname = dirname(fileURLToPath(import.meta.url))


// export default  {
//   entry: './build-tools.mjs',
//   output: {
//     filename: 'bundled.js',
//     path: resolve(__dirname, 'build')
//   },
//   mode: 'production',
//   plugins: [
//     new HTMLWebpackPlugin()
//   ],
//   target: 'web'
// };

export default  {
  entry: './node.mjs',
  resolve: {
    alias: {
      'jss-preset-default': 'jss-preset-default/dist/jss-preset-default.cjs.js'
    }
  },
  output: {
    filename: 'bundled.js',
    path: resolve(__dirname, 'build')
  },
  mode: 'production',
  plugins: [
    new HTMLWebpackPlugin()
  ],
  target: 'web'
};