import { viteStaticCopy } from 'vite-plugin-static-copy'
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, './src/assets/*'),
          dest:  resolve(__dirname, './dist/assets')
        }
      ]
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "GentleUI",
      fileName: "main",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
