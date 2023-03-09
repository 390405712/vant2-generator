import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import VitePluginStyleInject from 'vite-plugin-style-inject';

export default defineConfig({
  build: {
    lib: {
      entry: ['./lib/index.js', './lib/utils.js', './lib/regexp.js', './lib/regexpToArr.js'],
      name: 'element-ui-generator',
      formats: ['es'],
      // "commonjs" | "esm" | "module" | "systemjs"
      fileName: (format, entryName) => `${entryName}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue', 'element-ui'],
      output: {
        globals: {
          vue: 'Vue',
          'element-ui': 'element-ui',
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