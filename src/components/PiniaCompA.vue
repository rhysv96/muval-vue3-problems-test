<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div class="grid">
    <code>PiniaCompA.vue</code>
    <pre>{{ counterStore }}</pre>
  </div>
</template>
