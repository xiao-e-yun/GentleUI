<script lang="ts" setup>
import GentleUI from "../assets/base.module.scss"

</script>

<template>
<button v-bind="$attrs" :class="[GentleUI.block,GentleUI.button]"><slot/></button>
</template>