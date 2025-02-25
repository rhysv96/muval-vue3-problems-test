import { ref } from 'vue'
import type { MaybeRef } from 'vue'

export function useCounter(initial_value: MaybeRef<number> = 0) {
  // In the last commit I mentioned a better way of fixing this.
  // If you haven't seen it, I suggest going back and taking a look, I go into detail about reactive and proxies
  // But now I want to talk about refs. This is the recommended way of building composables! https://vuejs.org/guide/reusability/composables.html#return-values
  const count = ref(initial_value)

  // usage changes in JS to accomodate for new ref syntax. In SFCs you don't need .value, the compiler infers that for you.
  const increment = () => count.value++

  // If we take a peak at the ref, you can see that this one is not a proxy
  // Instead this is a simple object with a value getter and setter on the prototype.
  // This is much simpler than proxies, and this is where Vue hooks in it's reactivity.
  console.log(count)

  // Instead of destructuring, we just use count directly.
  return { count, increment }
}
