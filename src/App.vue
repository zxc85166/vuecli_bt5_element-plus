<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<template>
  <div id="app">
    <Header />
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  a:hover,
  a.router-link-active {
    border-bottom: 2px solid #3498db;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
  // .page {
  //   position: absolute;
  //   top: 30px;
  // }
}
</style>
