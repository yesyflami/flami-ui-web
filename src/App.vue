<template>
  <router-view></router-view>
</template>

<script>
import { provide, ref } from 'vue'
import { router } from './router'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(!!(width > 520))
    provide('menuVisible', menuVisible)
    router.afterEach(() => {
      if (width <= 520)
        menuVisible.value = false
    })
  }
}
</script>
