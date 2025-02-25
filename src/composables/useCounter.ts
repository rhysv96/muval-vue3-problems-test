import { reactive } from 'vue'
import type { MaybeRef } from 'vue'

export function useCounter(initial_value: MaybeRef<number> = 0) {
  const data = reactive({
    count: initial_value,
  })
  const increment = () => data.count++

  // The spread operator here is the culprit to the reactivity issues!
  // return { ...data, increment }

  // If you take a look at this in the console, you'll see that `data` isn't just a plain object but instead a Proxy object
  // A Proxy is a type in the JS spec that can listen for changes to a given object, and inform subscribers.
  // In this usage, the "subscribers" are Vue's reactivity engine
  console.log(data)

  // To demonstrate losing the Proxy, here it is spread
  // If you check the console, you'll see it's a plain old JS object. No Proxy, no reactivity!
  console.log({ ...data })

  // This is a solution for sure, but it has some issues.
  return { data, increment }

  // most notably, if you spread the data in usage...
  // const { data: { count }, increment } = useCounter()
  // ...it will also strip the reactivity! No good, we can do better.
}
