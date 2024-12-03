<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import { useCounterStore } from '@/stores/counter'
import PiniaCompA from '@/components/PiniaCompA.vue'
import PiniaCompB from '@/components/PiniaCompB.vue'

const { increment } = useCounterStore()
</script>

<template>
  <Layout>
    <div class="flex flex-col gap-y-2">
      <header>Pinia</header>
      <p>
        In the prior test, we had a <code>useCounter()</code> composable. The limitation to this
        composable is that its state can't be shared between components without lots of prop
        drilling. We can solve this by creating a store instead. Create a
        <code>useCounterStore()</code> that mimics the same functionality as
        <code>useCounter()</code>, and allows the below two components to have shared state.
      </p>
      <button @click="increment">Add</button>
      <div class="grid grid-cols-2 gap-2">
        <PiniaCompA />
        <PiniaCompB />
      </div>
    </div>
  </Layout>
</template>
