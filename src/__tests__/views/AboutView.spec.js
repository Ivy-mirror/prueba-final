import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

describe('Navegación Router', async () => {
  const routerPrueba = createRouter({
    history: createWebHistory,
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView,
      },
    ],
  })
  it('Navega por la vista AboutView', async () => {
    routerPrueba.push({ name: 'about' })
    await routerPrueba.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba],
      },
    })

    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })
})
