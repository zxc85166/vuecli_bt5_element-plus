<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AOS from "aos";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
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
  a.router-link-exact-active {
    color: #00c58e;
  }
}
</style>
