import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'ViteModuleSample',
      fileName: (format) => `vitemodulesample.${format}.js`,
    },
    minify: false,
    // rollupOptions: {
    //   external: /^lit/,
    // },
  },
});
