<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  count: number
}>()

const displayCount = ref(null)

watch(
  props.count,
  (val) => {
    displayCount.value = val ?? 0
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <span>Count: {{ displayCount }}</span>
</template>
