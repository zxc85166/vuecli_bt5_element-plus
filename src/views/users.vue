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
  text-align: center;
}
</style>
