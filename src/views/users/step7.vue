<script>
export default {
  data: () => ({
    show: false,
  }),
  methods: {
    order() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <div id="step7">
    <el-backtop></el-backtop>
    <el-steps :active="6" simple>
      <el-step title="步驟 1 網路掛號" icon="el-icon-edit"></el-step>
      <el-step title="步驟 2 填寫初診單" icon="el-icon-upload"></el-step>
      <el-step title="步驟 3 至各診間候診" icon="el-icon-picture"></el-step>
      <el-step title="步驟 4 檢查、抽血檢驗" icon="el-icon-picture"></el-step>
      <el-step title="步驟 5 櫃台批價" icon="el-icon-picture"></el-step>
      <el-step title="步驟 6 藥局領藥" icon="el-icon-picture"></el-step>
      <el-step title="步驟 7 離院" icon="el-icon-picture"></el-step>
    </el-steps>

    <div class="py-5">
      <el-button @click="show = !show">手續已辦妥</el-button>
      <div style="display: flex; margin-top: 20px; height: 100px">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">
            <el-button type="primary" @click="order">回首頁</el-button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#step7 {
}
</style>
