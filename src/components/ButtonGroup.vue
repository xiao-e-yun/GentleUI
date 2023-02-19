<script lang="ts" setup>
import { Block } from '../main';
import GentleUI from "../assets/base.module.scss"


</script>

<template>
<Block v-bind="$attrs" :class="[GentleUI['button-group'],GentleUI.padless]">
  <slot/>  
</Block>
</template>