<script>
export default {
  components: {},
  data() {
    return {
      nowDay: "",
      nowTime: "",
    };
  },
  methods: {
    //push
    order() {
      this.$router.push("/users/step4");
    },
    // 得到當下時間
    timeFormate(timeStamp) {
      let newdate = new Date(timeStamp);
      // let week = ["日", "一", "二", "三", "四", "五", "六"];

      let year = newdate.getFullYear();
      let month =
        newdate.getMonth() + 1 < 10
          ? "0" + (newdate.getMonth() + 1)
          : newdate.getMonth() + 1;
      let date =
        newdate.getDate() < 10 ? "0" + newdate.getDate() : newdate.getDate();
      let hh =
        newdate.getHours() < 10 ? "0" + newdate.getHours() : newdate.getHours();
      let mm =
        newdate.getMinutes() < 10
          ? "0" + newdate.getMinutes()
          : newdate.getMinutes();
      let ss =
        newdate.getSeconds() < 10
          ? "0" + newdate.getSeconds()
          : newdate.getSeconds();

      this.nowTime = hh + ":" + mm + ":" + ss;
      this.nowDay = year + "年" + month + "月" + date + "日";
    },
    // 定時器函數
    nowTimes() {
      let self = this;
      self.timeFormate(new Date());
      setInterval(function () {
        self.timeFormate(new Date());
      }, 1000);
    },
  },
  // 創建完成時
  created() {
    this.nowTimes();
  },
  // 掛載完成時
  mounted() {
    this.nowTimes();
  },
};
</script>
<template>
  <div id="step3">
    <el-backtop></el-backtop>
    <el-steps :active="2" simple>
      <el-step title="步驟 1 網路掛號" icon="el-icon-edit"></el-step>
      <el-step title="步驟 2 填寫初診單" icon="el-icon-upload"></el-step>
      <el-step title="步驟 3 至各診間候診" icon="el-icon-picture"></el-step>
      <el-step title="步驟 4 檢查、抽血檢驗" icon="el-icon-picture"></el-step>
      <el-step title="步驟 5 櫃台批價" icon="el-icon-picture"></el-step>
      <el-step title="步驟 6 藥局領藥" icon="el-icon-picture"></el-step>
      <el-step title="步驟 7 離院" icon="el-icon-picture"></el-step>
    </el-steps>
    <h1>至各診間候診</h1>
    <h5>{{ nowDay }}</h5>
    <h5>{{ nowTime }}</h5>
    <!-- 看診資訊 -->
    <div class="container d-flex justify-content-center">
      <div class="login-box" style="width: 400px">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a @click="order()" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/step3.scss" scoped></style>
