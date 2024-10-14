import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('useCounter', () => {
  //antes de todo activar pinia
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('Contador inicial 0', () => {
    const counterStore = useCounterStore()
    expect(counterStore.count).toBe(0)
  })
  it('Verificar que puede aumentar y disminuir el contador', () => {
    const counterStore = useCounterStore()
    counterStore.increment()
    expect(counterStore.count).toBe(1)
    counterStore.decrement()
    expect(counterStore.count).toBe(0)
  })
})
