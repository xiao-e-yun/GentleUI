<script setup lang="ts">
import gentleUi from "gentle-ui/base.module.scss"
import "gentle-ui/base.scss"; // add base style in here

import { Image, Block, Content, Code, Button, ButtonGroup } from "gentle-ui"
import { computed, ref } from "vue";

import GetStart from "./pages/get_start.vue"
import Docs from "./pages/docs.vue"

let hash = ref(location.hash)
window.addEventListener('hashchange', function () { hash.value = location.hash }, false);
const path = computed(()=>({
  "": GetStart,
  "docs": Docs,
})[hash.value.replace("#","")])
console.log(path)
</script>

<template>
  <header :class="[$style.header, gentleUi.shadow]">
    <a href="/#">
      <img src="/favicon.svg" :class="[gentleUi.dropShadow, $style.logo]" />
    </a>
    <nav :class="$style.nav">
      <a href="/#">Get Start</a>
      <a href="/#docs">Docs</a>
      <a href="https://github.com/xiao-e-yun/GentleUI" target="_blank">Github</a>
    </nav>
  </header>
  <Content>
    <component v-if="path" :is="path" />
    <Block v-else>Not Found</Block>
  </Content>
</template>

<style module lang="scss">
//else you can add here 
//@import "gentle-ui/base.scss"; 

.logo {
  height: 100%;
}

.header {
  background: color.side-3();
  padding: .3em;
  height: 2em;

  display: flex;
  justify-content: space-between;
}

.nav {
  display: flex;
  gap: 1.2em;

  &>a {
    text-shadow: 0 0 .2em color.black();
    color: color.main();
  }
}
</style>