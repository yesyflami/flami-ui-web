<template>
  <div>
    ButtonDemo
    <div>
      <Button @click="onClick" @focus="onClick" @mouseover="onClick">Hello</Button>
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