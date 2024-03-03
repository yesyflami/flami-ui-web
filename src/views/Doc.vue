<template>
  <div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible />
    <div class="content" :style="menuVisible ? {} : { paddingLeft: 0 }">
      <aside v-if="menuVisible">

        <ol>
          <h2>文档</h2>
          <li>
            <router-link to="/doc/intro">介绍 </router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装 </router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用 </router-link>
          </li>
          <h2>组件列表</h2>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from '../components/Topnav.vue';
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  z-index: 100;
  font-weight: bold;
  line-height: 32px;
  color: #b3b3b3;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;



  >ol {
    >h2 {
      margin-bottom: 4px;
      color: #423c54;
      line-height: 40px;
      font-weight: 800;
    }

    >li {
      padding: 4px 0;

      &:hover {
        color: #341542;
        transition: all 250ms;
      }
    }
  }
}

.router-link-active {
  color: #341542;
}

main {
  overflow: auto;
}
</style>