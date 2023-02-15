# Gentle UI

GentleUI is a user interface design library that emphasizes rounded corners and a poetic aesthetic.

It is designed to provide developers with a unique and elegant design that can
enhance the overall look and feel of their software applications.

The library is built with stability in mind, providing a solid base for the
developer to build on, while the rounded corners give a sense of fluidity and
softness to the final product.

# usage

## 1. set default vars and functions
In `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { addFunctionsAndVars } from "gentle-ui"

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          addFunctionsAndVars(),
      },
    },
  },
})
```
<br>

## 2. set default style
In `main.ts` or `App.vue[script]`
```typescript
import "gentle-ui/base.scss";
```
Else `App.vue[style.scss]`
```scss
@import "gentle-ui/base.scss";
```
<br>

## 3. get base module
In `Any.vue[script]`
```typescript
import gentleUi from "gentle-ui/base.module.scss";
import { Block, /*Other...*/ } from "gentle-ui";
```