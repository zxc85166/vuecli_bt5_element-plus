<script>
export default {
  data: () => ({
    show: false,
  }),
  methods: {
    order() {
      this.$router.push("/");
    },
    //push
    linkStep1() {
      this.$router.push("/users/step1");
    },
    linkStep2() {
      this.$router.push("/users/step2");
    },
    linkStep3() {
      this.$router.push("/users/step3");
    },
    linkStep4() {
      this.$router.push("/users/step4");
    },
    linkStep5() {
      this.$router.push("/users/step5");
    },
    linkStep6() {
      this.$router.push("/users/step6");
    },
    linkStep7() {
      this.$router.push("/users/step7");
    },
  },
};
</script>
<template>
  <div id="step7">
    <el-backtop></el-backtop>
    <!-- Jumbotron -->
    <header class="d-flex justify-content-center align-items-center">
      <div class="text-center">
        <div class="card alpha-50">
          <div class="card-body">
            <el-steps :active="6" simple>
              <el-step
                @click="linkStep1"
                title="步驟 1 網路掛號"
                icon="el-icon-edit"
              ></el-step>
              <el-step
                @click="linkStep2"
                title="步驟 2 填寫初診單"
                icon="el-icon-upload"
              ></el-step>
              <el-step
                @click="linkStep3"
                title="步驟 3 至各診間候診"
                icon="el-icon-picture"
              ></el-step>
              <el-step
                @click="linkStep4"
                title="步驟 4 檢查、抽血檢驗"
                icon="el-icon-picture"
              ></el-step>
              <el-step
                @click="linkStep5"
                title="步驟 5 櫃台批價"
                icon="el-icon-picture"
              ></el-step>
              <el-step
                @click="linkStep6"
                title="步驟 6 藥局領藥"
                icon="el-icon-picture"
              ></el-step>
              <el-step
                @click="linkStep7"
                title="步驟 7 離院"
                icon="el-icon-picture"
              ></el-step>
            </el-steps>
          </div>
        </div>
      </div>
    </header>
    <h1 class="pt-5 py-3">準備離院</h1>
    <h3 class="pt-5 py-3 animate__animated animate__shakeY">
      恭喜順利完成看診，可以準備出院囉~
    </h3>
    <div class="py-5">
      <el-button @click="show = !show">手續已辦妥</el-button>
      <div style="margin-top: 20px; height: 100px">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">
            <el-button type="primary" @click="order">回首頁</el-button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/step3.scss" scoped>
#step7 {
}
</style>
