import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/types.ts'],
  splitting: false,
  dts: true,
  sourcemap: true,
  clean: true,
})
