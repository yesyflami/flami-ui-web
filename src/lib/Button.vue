<template>
  <button>
    <slot />
  </button>
</template>
<script lang="ts">
export default {
  // 默认所有属性都可以绑定到根元素，使用inheritAttrs: false可以取消默认的绑定
  inheritAttrs: false,
  props: {},
  setup(props, ctx) {
  },
}
</script>
<style lang="scss" scoped></style>