import resolve from '@rollup/plugin-node-resolve';
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import replace from '@rollup/plugin-replace'

// export default {
// 	input: 'build-tools.mjs',
// 	output: {
// 		file: 'build-rollup/bundle.js',
// 		format: 'iife',
// 		sourcemap: true
// 	},
// 	plugins: [
// 		resolve(),
//         injectProcessEnv({
//             NODE_ENV: 'production'
//         })
// 	]
// };

export default {
	input: 'node.mjs',
	output: {
		file: 'build-rollup/bundle.js',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		// replace({
		// 	'jss-preset-default': 'jss-preset-default/dist/jss-preset-default.cjs.js'
		// }),
		resolve(),
        injectProcessEnv({
            NODE_ENV: 'production'
        }),
	]
};