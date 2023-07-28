<template>
  <div>
    ButtonDemo
    <div>
      <Button>Hello</Button>
      <Button theme="button">Hello</Button>
      <Button theme="link">Hello</Button>
      <Button theme="text">Hello</Button>
    </div>
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