import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { addFunctionsAndVars } from "gentle-ui"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: addFunctionsAndVars()
      },
    },
  },
})
