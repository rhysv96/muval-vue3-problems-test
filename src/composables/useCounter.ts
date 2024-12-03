import { reactive } from 'vue'
import type { MaybeRef } from 'vue'

export function useCounter(initial_value: MaybeRef<number> = 0) {
  const data = reactive({
    count: initial_value,
  })
  const increment = () => data.count++

  return { ...data, increment }
}
