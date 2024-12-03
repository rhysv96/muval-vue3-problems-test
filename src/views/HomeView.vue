<template>
  <main class="grid place-items-center h-screen">
    <div class="p-8 rounded-xl border shadow-sm w-full grid place-items-center max-w-xl min-h-64">
      <div class="flex flex-col items-center gap-y-4">
        <div class="flex items-center gap-x-6">
          <img alt="Vue logo" class="mx-auto" src="@/assets/logo.svg" width="200" />
          <span class="text-2xl font-thin">|</span>
          <span class="text-xl">Vue 3 Testing Suite</span>
        </div>

        <div class="flex gap-4 mt-8">
          <router-link to="/reactivity" class="btn btn-primary">Reactivity</router-link>
          <router-link to="/pinia" class="btn btn-primary">Pinia</router-link>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
a {
  @apply px-4 py-2 rounded-lg font-medium bg-zinc-700 hover:bg-zinc-800 transition-colors text-zinc-50;
}
</style>
<script setup lang="ts"></script>
