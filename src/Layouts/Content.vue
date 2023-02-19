<script lang="ts" setup>
import { useSlots } from "vue";
import GentleUI from "../assets/base.module.scss"

const slots = useSlots()
</script>

<template>
  <div :class="GentleUI.content">
    <main :class="GentleUI.main" id="gentle-main">
      <slot/>
    </main>
    <aside :class="GentleUI.aside" id="gentle-aside" v-if="slots.aside">
      <slot name="aside"/>
  </aside>
</div></template>