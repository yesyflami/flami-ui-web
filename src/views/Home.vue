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
    <div class="features">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-typescript"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dengpao"></use>
      </svg>
    </div>

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
}

.features {
  >svg {
    width: 64px;
    height: 64px;
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