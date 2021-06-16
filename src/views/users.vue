<script>
export default {
  components: {},
};
</script>
<template>
  <div id="users">
    <el-backtop></el-backtop>
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
