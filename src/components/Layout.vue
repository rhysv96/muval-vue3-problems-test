<template>
  <main class="w-full h-screen grid place-items-center">
    <div class="p-8 rounded-xl border shadow-sm w-full grid place-items-center max-w-xl min-h-64">
      <div class="flex items-center gap-x-4 mb-4">
        <img alt="Vue logo" class="" src="@/assets/logo.svg" width="100" />
        <router-link to="/">Go back</router-link>
      </div>
      <slot />
    </div>
  </main>
</template>
