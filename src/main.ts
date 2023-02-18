//import Layouts
import Header from "./Layouts/Header.vue"
import Content from "./Layouts/Content.vue"
//import Components
import Code from "./components/Code.vue"
import Image from "./components/Image.vue"
import Block from "./components/Block.vue"
import Button from "./components/Button.vue"
import ButtonGroup from "./components/ButtonGroup.vue"

declare global {
  interface Window {
    GentleUI: {
      lazyLoader?: IntersectionObserver
    }
  }
}

export {
  Code,
  Image,
  Block,
  Button,
  Header,
  Content,
  ButtonGroup,
}

/** 
 * Inject variables and functions  
 * 
 * Usage in `vite.config.ts`
 * ```typescript
 * export default defineConfig({
 *   //...other settings
 *   css: {
 *     preprocessorOptions: {
 *       scss: {
 *         additionalData:
 *           setFunctionsAndVars(),
 *       }
 *     },
 *   },
 * },
 * ```
*/

export function addFunctionsAndVars(
  /**
   * add pack prefix
   * `vars` -> `[prefix]`  
   * `{others}` -> `[prefix]-{others}`
  */
  prefix?: string,
  /** add other additionalData */
  other = "",
) {
  const vars = prefix ? " as " + prefix : ""
  const color = prefix ? " as " + prefix + "-color" : ""
  const fixed = `@use "gentle-ui/_color.scss"${color};@use "gentle-ui/_vars.scss"${vars};` + other;
  return (style: string, path: string) => {
    if (path.includes("GentleUI/dist/assets")) return style
    return fixed + style
  }
}