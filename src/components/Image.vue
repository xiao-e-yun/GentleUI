<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import { imageLazyLoader } from '../lib';
import GentleUI from "../assets/base.module.scss"

const props = defineProps<{
  /**  */
  src: string | string[]
  /** */
  alt: string
  /** LazyLoad */
  lazyload?: boolean
}>()

const imageEl = ref<HTMLImageElement>()
const lazyload = props.lazyload !== false

const watcher = watch(imageEl, value => {
  if (!value) return

  if (lazyload)
    imageLazyLoader().observe(value)
  else
    value.src = value.dataset.src!
  watcher()
}, { immediate: true })
</script>

<template>
  <img v-once ref="imageEl" v-bind="$attrs" :alt="props.alt" :data-src="props.src" :class="[GentleUI.block,GentleUI.padless,GentleUI.image]">
</template>