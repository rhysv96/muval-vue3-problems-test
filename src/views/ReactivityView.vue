<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import { ref } from 'vue'
import { useCounter } from '@/composables/useCounter'

const initialValue = ref(0)

const { data, increment } = useCounter(initialValue)
</script>

<template>
  <Layout>
    <div class="flex flex-col gap-y-2">
      <header>Reactivity</header>
      <p>
        Reactivity is broken in the example below. When you click "Add", the counter should
        increment but it does not. Investigate & explain why reactivity is broken, and fix the
        solution provided. If you find other potential issues, also comment on these.
      </p>
      <button type="button" @click="increment" class="mt-4">Add</button>
      <span>Count: {{ data.count }}</span>
    </div>
  </Layout>
</template>
