<script>
export default {
  components: {},
};
</script>
<template>
  <div id="users">
    <nav class="flex justify-items-start">
      <router-link to="/users/index">步驟 1</router-link>
      <router-link to="/users/step2">步驟 2</router-link>
      <router-link to="/users/step3">步驟 3</router-link>
      <router-link to="/users/step4">步驟 4</router-link>
      <router-link to="/users/step5">步驟 5</router-link>
      <router-link to="/users/step6">步驟 6</router-link>
      <router-link to="/users/step7">步驟 7</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>
<style lang="scss" scoped>
#users {
  a {
    margin: 0 20px;
  }
  a:hover {
    color: #0845eb;
  }

  a:visited {
    color: rgb(218, 20, 20);
  }
  a.router-link-exact-active {
    color: #00c58e;
  }
  text-align: center;
}
</style>
