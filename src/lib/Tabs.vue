<template>
  <div class="flami-tabs">
    <div class="flami-tabs-nav" ref="container">
      <div class="flami-tabs-nav-item" v-for="(t, index) in titles"
        :ref="el => { if (t === selected) selectedItems = el }" @click="select(t)" :class="{ selected: t === selected }"
        :key="index">{{ t }}</div>
      <div class="flami-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="flami-tabs-content">
      <component class="flami-tabs-content-item" :class="{ selected: c.props.title === selected }"
        v-for="(c, idx) in defaults" :is="c" :key="idx" />

    </div>
  </div>
</template>
  
<script lang="ts">
import Tab from './Tab.vue'
import {
  computed, onMounted, onUpdated, ref, watchEffect
} from 'vue'
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    // const navItems = ref<HTMLDivElement[]>([])
    const selectedItems = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null) // 移动条
    const container = ref<HTMLDivElement>(null)
    // onMounted只在第一次渲染执行
    // onMounted(x)
    // onUpdated在更新时执行
    // onUpdated(x)

    // watchEffect =第一次挂载前 + onMounted + onUpdated
    onMounted(() => {
      watchEffect(() => {// 动态获取移动条条的宽度

        const { width } = selectedItems.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        // 动态设置移动条的位置
        const { left: left1 } = container.value.getBoundingClientRect()
        const { left: left2 } = selectedItems.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'

      })
    })

    return {
      defaults,
      titles,
      current,
      select,
      selectedItems,
      indicator,
      container
    }
  }
}
</script>
  
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.flami-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>