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
::v-deep .el-timeline-item__content {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
