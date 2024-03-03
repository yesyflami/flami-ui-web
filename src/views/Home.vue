<template>
  <div class="topnavAndBanner">
    <div>
      <TopNav />
      <div class="banner">
        <h1>闪电UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="">Github</a>
          <router-link to="/doc" class="start">Start</router-link>
        </p>
      </div>
    </div>


  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-dengpao"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue';
export default {
  components: { TopNav }
}
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  background: rgb(214, 240, 255);
  background: linear-gradient(128deg, rgba(214, 240, 255, 1) 0%, rgba(133, 207, 249, 1) 46%, rgba(120, 188, 226, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  margin: 64px auto;
  width: 400px;

  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 22px;
      }

      >p {
        grid-area: text
      }
    }
  }
}


.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // font-weight: 800;

  >h1,
  >h2 {
    font-weight: 700;
  }

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #341542;
      color: #fff;
      display: inline-block;
      border-radius: 4px;
      padding: 6px 24px;
      border: 1px solid #341542;
    }

    .start {
      background-color: rgba(255, 255, 255, 0);
      color: #341542;
    }
  }
}
</style>