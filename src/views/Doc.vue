<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue';
import TopNav from '../components/TopNav.vue';
export default {
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    console.log(menuVisible.value)
    return {menuVisible}
  },
  components: { TopNav }
}
</script>
<style lang="scss">
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>