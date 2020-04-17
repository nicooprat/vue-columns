import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-columns',
    file: 'dist/vue-columns.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config
