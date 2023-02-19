<script setup lang="ts">
import "gentle-ui/base.module.scss"
import "gentle-ui/base.scss"; // add base style in here

import { Block, Content, Header } from "gentle-ui"
import { computed, ref } from "vue";

import GetStart from "./pages/get_start.vue"
import Docs from "./pages/docs.vue"

//Pages
let hash = ref(location.hash)
window.addEventListener('hashchange', function () { hash.value = location.hash }, false);
const path = computed(() => ({
  "": GetStart,
  "docs": Docs,
})[hash.value.replace("#", "")])

// Header Links
const links = [
  {name: "Get Start", href: "#"},
  {name: "Docs", href: "#docs"},
  {name: "GitHub", href: "//github.com/xiao-e-yun/GentleUI", target: "blank"},
] as {
  name: string;
  href: string;
  target?: "blank" | "self" | undefined;
}[]
</script>

<template>
  <Header
    titleHref="#"
    title="Gentle UI"
    titleImage="./favicon.svg"
    :links="links"
  />
  <Content>
    <component v-if="path" :is="path" />
    <Block v-else>Not Found</Block>
  </Content>
</template>

<style module lang="scss">
//else you can add here
//@import "gentle-ui/base.scss";
</style>
