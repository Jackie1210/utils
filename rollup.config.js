import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

const input = 'src/index.ts'

/**
 * @type {import('rollup').RollupOptions}
 */
const dtsConfig = {
  input,
  output: {
    file: input.replace('src', 'dist').replace('.ts', '.d.ts'),
    format: 'esm'
  },
  external: [],
  plugins: [dts()]
}

/**
 * @type {import('rollup').RollupOptions}
 */
const outputConfig = {
  input,
  output: [
    {
      file: input.replace('src', 'dist').replace('.ts', '.mjs'),
      format: 'esm'
    },
    {
      file: input.replace('src', 'dist').replace('.ts', '.cjs'),
      format: 'cjs'
    }
  ],
  external: [],
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    json(),
    commonjs(),
    esbuild({
      target: 'node14',
      minify: process.env.NODE_ENV === 'production'
    })
  ]
}

export default defineConfig([
  outputConfig,
  dtsConfig
])
