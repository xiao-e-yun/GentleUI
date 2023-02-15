<script lang="ts" setup>
import { RendererElement, RendererNode, Slot, useSlots, VNode, VNodeArrayChildren } from "vue";
import GentleUI from "../assets/base.module.scss"

const props = defineProps<{inline:boolean}>()
const inline = props.inline ? GentleUI["code-inline"] : ""
const classList = [GentleUI.block,GentleUI.code,inline]
</script>

<template>
  <code :class="classList"><slot/></code>
</template>