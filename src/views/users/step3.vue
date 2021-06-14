<script>
import nowDay from "@/components/nowDay.vue";
export default {
  components: { nowDay },
  data() {
    return {};
  },
  methods: {
    //push
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
  <div id="step3">
    <el-backtop></el-backtop>
    <!-- Jumbotron -->
    <header class="d-flex justify-content-center align-items-center">
      <div class="text-center">
        <div class="card alpha-50">
          <div class="card-body">
            <el-steps :active="2" simple>
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

    <!-- 看診資訊 -->
    <!-- service_area  -->
    <div class="service_area">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="pt-5 py-3">
              <h1>
                至各診間候診 <br />
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
              <p>100</p>
            </div>
          </div>
          <div class="col-xl-4 col-md-4">
            <div class="single_service text-center">
              <div class="icon">
                <img src="@/assets/svg_icon/2.svg" alt="" />
              </div>
              <h3>目前看診號碼:</h3>
              <p>95</p>
            </div>
          </div>
          <div class="col-xl-4 col-md-4">
            <div class="single_service text-center">
              <div class="icon">
                <img src="@/assets/svg_icon/3.svg" alt="" />
              </div>
              <h3>預計等候時間:</h3>
              <p>50分鐘</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ service_area  -->

    <!-- 路線 -->
    <div class="container border hovering px-1">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="大樓" name="1">
          <div>
            <img
              src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=252"
              alt=""
              class="img-sl"
            />
          </div>
          <div @mouseover="showimg()">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
            non.
          </div>
        </el-collapse-item>
        <el-collapse-item title="A區" name="2">
          <div>
            <img
              src="https://images.pexels.com/photos/7089013/pexels-photo-7089013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=252"
              alt=""
              class="img-sl"
            />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quod!
          </div>
        </el-collapse-item>
        <el-collapse-item title="707廳" name="3">
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet, nulla dicta sunt similique debitis libero magni illo doloribus
            corrupti error rem ipsam aut deleniti quisquam fugiat itaque illum
            cupiditate!
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=252"
              alt=""
              class="img-sl"
            />
          </div>
          <div>Lorem ipsum dolor sit amet.</div>
        </el-collapse-item>
        <el-collapse-item title="202室" name="4">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <el-button type="primary" @click="linkStep4"> 確認送出 </el-button>
  </div>
</template>

<style lang="scss" src="@/assets/scss/step3.scss" scoped>
#step3 {
}
</style>
