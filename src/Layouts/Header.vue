<script lang="ts" setup>
import Block from '../components/Block.vue';
import GentleUI from "../assets/base.module.scss"


const props = withDefaults(
  defineProps<{
    title?: string
    titleHref?: string
    titleImage?: string | false
    links?: {
      name: string,
      href: string,
      target?: "self" | "blank"
    }[]
  }>(), {
  title: "",
  titleHref: "/",
  titleImage: "/favicon.svg",
}
)

const length = props.links ? props.links.length - 1 : 0
function isBlank(target: string | undefined, str: string) { return target === 'blank' ? str : undefined } 
</script>

<template>
  <Block tag="header" :class="GentleUI.header">
    <a v-if="titleImage || title" href="/#" :class="[GentleUI.home]">
      <img v-if="titleImage" :src="titleImage" :class="[GentleUI.logo, GentleUI.dropShadow]" />
      {{ title }}
    </a>
    <nav v-if="links" :class="GentleUI.nav">
      <a v-for="link, i in links" :href="link.href" :target="isBlank(link.target, '_blank')"
        :rel="isBlank(link.target, 'noreferrer noopener')" :style="{ '--t': length - i }">
        {{ link.name }}
      </a>
    </nav>
  </Block>
</template>