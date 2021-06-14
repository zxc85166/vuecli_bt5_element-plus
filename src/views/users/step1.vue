<script>
export default {
  data() {
    return {
      // 表格
      className: "",
      newName: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
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
  <div id="index animate__animated animate__fadeInBottomLeft">
    <!-- Jumbotron -->
    <header class="d-flex justify-content-center align-items-center">
      <div class="text-center">
        <div class="card alpha-50">
          <div class="card-body">
            <el-steps :active="0" simple>
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

    <h1 class="pt-5 py-3">網路掛號</h1>

    <!-- 輸入姓名 -->
    <el-form :inline="true" :model="newName" class="demo-form-inline">
      <el-form-item label="身分證 / 居留證號碼 / 病歷號碼：">
        <el-input v-model="newName.user" placeholder="輸入"></el-input>
      </el-form-item>
      <el-form-item label="看診方式：">
        <el-select v-model="newName.region" placeholder="請選擇">
          <el-option label="到院看診" value="123"></el-option>
          <el-option label="電話看診" value="456"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="linkStep2"
          >初診</el-button
        >
        <el-button type="primary" @click="linkStep3"
          >複診<i class="el-icon-s-claim el-icon--right"></i
        ></el-button>
      </el-form-item>
    </el-form>
    <!-- 輸入姓名 -->
  </div>
</template>

<style lang="scss" scoped>
#index {
  height: 70vh;
  .alpha-50 {
    background: rgba(255, 255, 255, 0.5);
  }

  header {
    height: 300px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("https://cdn.pixabay.com/photo/2016/01/19/15/05/doctor-1149149_960_720.jpg")
        no-repeat center/cover;
  }
}
</style>
