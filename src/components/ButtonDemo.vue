<template>
  <div>ButtonDemo</div>
  <h1>示例1</h1>
  <div>
    <Button>Hello</Button>
    <Button theme="button">Hello</Button>
    <Button theme="link">Hello</Button>
    <Button theme="text">Hello</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="large">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="large">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="large" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {
      onClick
    }
  }
}
</script>