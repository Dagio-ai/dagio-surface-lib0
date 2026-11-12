import * as fs from 'fs'

const roots = ['./', './crypto/', './hash/', './diff/', './delta/', './trait/']

const files = roots.map(root => fs.readdirSync(root).map(f => root + f)).flat().filter(file => /(?<!(test|config))\.js$/.test(file))
console.log(files)

export default [{
  input: files,
  output: {
    dir: './dist',
    format: 'cjs',
    sourcemap: true,
    entryFileNames: '[name].cjs',
    chunkFileNames: '[name]-[hash].cjs'
  },
  external: ['isomorphic.js', 'node:crypto', '@dagio-ai/surface-lib0/webcrypto', '@dagio-ai/surface-lib0/performance', 'perf_hooks', 'isomorphic-webcrypto/src/react-native', 'node:perf_hooks', '@dagio-ai/surface-lib0/logging']
}]
