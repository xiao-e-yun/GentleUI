<script lang="ts" setup>
import GentleUI from "../assets/base.module.scss"

</script>

<template>
  <main :class="GentleUI.content">
    <slot/>
  </main>
</template>