<script lang="ts" setup>
import { Block } from '../main';
import GentleUI from "../assets/base.module.scss"


</script>

<template>
<Block :class="[GentleUI['button-group'],GentleUI.padless]">
  <slot/>  
</Block>
</template>