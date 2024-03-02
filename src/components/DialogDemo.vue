<template>
  <div>Dialog示例</div>
  <h1>示例一</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true">
    <template v-slot:content>
      <div>第一行字</div>
      <div>第二行字</div>
    </template>
    <template v-slot:title>
      <strong>标题</strong>
    </template>
  </Dialog>
  <h1>示例二</h1>
  <Button @click="showDialog">show</Button>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { openDialog } from '../lib/openDialog'
import { ref } from 'vue';
export default {
  components: {
    Dialog, Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const showDialog = () => {
      openDialog({
        title: 'Title',
        content: 'Hello'
      })
    }
    return { toggle, x, showDialog }
  }
}
</script>