<script lang="ts" setup>
import { Block, Code } from "gentle-ui"
</script>

<template>
  <Block>
    <h1>1. set default vars and functions</h1>
    <p>In <Code :inline="true">vite.config.ts</Code></p>
    <Code>
      import { defineConfig } from &apos;vite&apos;<br>
      import vue from &apos;@vitejs/plugin-vue&apos;<br>
      import { addFunctionsAndVars } from &quot;gentle-ui&quot;<br>
      <br>
      export default defineConfig({<br>
      &ensp;plugins: [vue()],<br>
      &ensp;css: {<br>
      &ensp;&ensp;preprocessorOptions: {<br>
      &ensp;&ensp;&ensp;scss: {<br>
      &ensp;&ensp;&ensp;&ensp;additionalData:<br>
      &ensp;&ensp;&ensp;&ensp;&ensp;addFunctionsAndVars(),<br>
      &ensp;&ensp;&ensp;},<br>
      &ensp;&ensp;},<br>
      &ensp;},<br>
      })
    </Code>

    <h1>2. set default style</h1>
    <p>In <Code :inline="true">main.ts</Code> or <Code :inline="true">App.vue[script]</Code></p>
    <Code>
      import "gentle-ui/base.scss";
      </Code>
    <p>Else <Code :inline="true">App.vue[style.scss]</Code></p>
    <Code>
      @import "gentle-ui/base.scss";
    </Code>

    <h1>3. get base module</h1>
    <p>In <Code :inline="true">Any.vue[script]</Code></p>
    <Code>
      import gentleUi from "gentle-ui/base.module.scss";<br>
      import { Block, /*Other...*/ } from "gentle-ui";
    </Code>
  </Block>
</template>