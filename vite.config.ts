import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import VitePluginStyleInject from 'vite-plugin-style-inject';

export default defineConfig({
  build: {
    lib: {
      entry: ['./lib/index.js'],
      name: 'vant2-generator',
      formats: ['es'],
      // "commonjs" | "esm" | "module" | "systemjs"
      fileName: (format, entryName) => `${entryName}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue', 'vant'],
      output: {
        globals: {
          vue: 'Vue',
          'vant': 'vant',
        },
      },
    },
  },
  plugins: [createVuePlugin({
    jsx: true,
    // jsxOptions: {
    //   compositionAPI: true, injectH: true
    // }
  }), VitePluginStyleInject(),],
});