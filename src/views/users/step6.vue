<script>
import nowDay from "@/components/nowDay.vue";
import gsap from "gsap";

export default {
  components: { nowDay },
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
    };
  },
  mounted() {
    this.number += 6546;
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    },
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
  <div id="step5">
    <!-- Jumbotron -->
    <header class="d-flex justify-content-center align-items-center">
      <div class="text-center">
        <div class="card alpha-50">
          <div class="card-body">
            <el-steps :active="5" simple>
              <el-step
                @click="linkStep1"
                title="步驟 1 網路掛號"
                icon="el-icon-s-custom"
              ></el-step>
              <el-step
                @click="linkStep2"
                title="步驟 2 填寫初診單"
                icon="el-icon-edit"
              ></el-step>
              <el-step
                @click="linkStep3"
                title="步驟 3 至各診間候診"
                icon="el-icon-loading"
              ></el-step>
              <el-step
                @click="linkStep4"
                title="步驟 4 檢查、抽血檢驗"
                icon="el-icon-search"
              ></el-step>
              <el-step
                @click="linkStep5"
                title="步驟 5 櫃台批價"
                icon="el-icon-printer"
              ></el-step>
              <el-step
                @click="linkStep6"
                title="步驟 6 藥局領藥"
                icon="el-icon-sugar"
              ></el-step>
              <el-step
                @click="linkStep7"
                title="步驟 7 離院"
                icon="el-icon-school"
              ></el-step>
            </el-steps>
          </div>
        </div>
      </div>
    </header>

    <!-- service_area  -->
    <div class="service_area">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="pt-5 py-3">
              <h1>
                藥局領藥 <br />
                <p></p>
                <h5>
                  <strong>{{ $store.state.name }}</strong> 先生/小姐
                  請依據掛號號碼等候領藥
                </h5>
                <nowDay />
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-md-4">
            <div class="single_service text-center">
              <div class="icon">
                <img src="@/assets/svg_icon/1.svg" alt="" />
              </div>
              <h3>您的掛號號碼:</h3>
              <p>{{ animatedNumber }}</p>
            </div>
          </div>
          <div class="col-xl-4 col-md-4">
            <div class="single_service text-center">
              <div class="icon">
                <img src="@/assets/svg_icon/2.svg" alt="" />
              </div>
              <h3>目前看診號碼:</h3>
              <p>{{ animatedNumber }}</p>
            </div>
          </div>
          <div class="col-xl-4 col-md-4">
            <div class="single_service text-center">
              <div class="icon">
                <img src="@/assets/svg_icon/3.svg" alt="" />
              </div>
              <h3>預計等候時間:</h3>
              <p>{{ animatedNumber }}分鐘</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ service_area  -->
    <!-- 路線 -->
    <div class="container border p-0 m-auto">
      <div class="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.207570602958!2d120.30738351535867!3d22.646048235976995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04effa421c23%3A0xdb5d1b24fab55b9d!2z6auY6ZuE6Yar5a245aSn5a246ZmE6Kit5Lit5ZKM57SA5b-16Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1623722982321!5m2!1szh-TW!2stw"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div class="py-5">
      <el-button type="primary" @click="linkStep7"> 下一步 </el-button>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/step3.scss" scoped></style>
