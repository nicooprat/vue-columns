import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'vue-columns',
    file: 'dist/vue-columns.esm.js',
    format: 'es',
    sourcemap: process.env.NODE_ENV === 'production',
  },
  external: [
    ...base.external,
  ],
})

export default config
