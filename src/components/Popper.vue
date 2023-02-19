<template>
  <div ref="referenceEl" @mouseenter="hover = true" @mouseleave="hover = false" v-bind="$attrs" :class="GentleUI.tooltipReference">
    <slot />
  </div>
  <Teleport to="body">
    <div :class="tooltipClass" :style="tooltipStyle" ref="tooltipEl">
      <div :class="[GentleUI.tooltipInner, GentleUI.block]">
        <component v-if="tooltipSlot" :is="tooltipSlot" />
        <template v-else>{{ tooltip }}</template>
      </div>
    </div>
  </Teleport>
</template>
  
<script lang="ts" setup>
import { computed, ref, useSlots } from "vue";
import { autoUpdate, flip, shift, useFloating } from '@floating-ui/vue';
import type { Placement } from '@floating-ui/vue';
import GentleUI from "../assets/base.module.scss"

const referenceEl = ref<HTMLElement>();
const tooltipEl = ref<HTMLElement>();

const { tooltip: tooltipSlot } = useSlots()
const hover = ref(false)

const {
  placement,
  tooltip,
  realtime,
} = withDefaults(defineProps<{
  placement?: Placement;
  realtime?: boolean
  tooltip?: string;
}>(),{
  realtime: true
})

const {
  x, y
} = useFloating(referenceEl, tooltipEl, {
  placement,
  middleware: [flip(), shift()],
  whileElementsMounted: realtime ? autoUpdate : undefined,
});

const tooltipStyle = computed(() => ({ left: x.value + "px", top: y.value + "px" }))
const tooltipClass = computed(() => [GentleUI.tooltip, { [GentleUI.hover]: hover.value }])
</script>