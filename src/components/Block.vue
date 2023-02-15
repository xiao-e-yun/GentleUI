<script lang="ts" setup>
import GentleUI from "../assets/base.module.scss"

const props = defineProps<{
  tag?: string
}>()

const tag = props.tag ?? "div"
</script>

<template>
  <component :class="[GentleUI.block]" :is="tag">
    <slot />
  </component>
</template>