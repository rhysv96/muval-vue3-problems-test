import { defineStore } from "pinia";
import { ref } from "vue";

// option style, if you like that
// eslint-disable-next-line
const useCounterStoreOptionStyle = defineStore('counter-option', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
})

// composition style, as well. I think I prefer this one so that's what I'll use
export const useCounterStore = defineStore('counter-composition', () => {
  const count = ref(0)
  const increment = () => count.value++

  return { count, increment }
})
