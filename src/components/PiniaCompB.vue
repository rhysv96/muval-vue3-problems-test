<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div class="grid">
    <code>PiniaCompB.vue</code>
    <pre>{{ counterStore }}</pre>
  </div>
</template>
