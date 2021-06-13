<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {
    order() {
      this.$router.push("/users/step5#step5");
    },
  },
};
</script>
<template>
  <div id="step4">
    <el-backtop></el-backtop>
    <el-steps :active="3" simple>
      <el-step title="步驟 1 網路掛號" icon="el-icon-edit"></el-step>
      <el-step title="步驟 2 填寫初診單" icon="el-icon-upload"></el-step>
      <el-step title="步驟 3 至各診間候診" icon="el-icon-picture"></el-step>
      <el-step title="步驟 4 檢查、抽血檢驗" icon="el-icon-picture"></el-step>
      <el-step title="步驟 5 櫃台批價" icon="el-icon-picture"></el-step>
      <el-step title="步驟 6 藥局領藥" icon="el-icon-picture"></el-step>
      <el-step title="步驟 7 離院" icon="el-icon-picture"></el-step>
    </el-steps>
    <h1>檢查、抽血檢驗</h1>
    <!-- 看診資訊 -->
    <div class="container-fluid" id="content">
      <h1 class="text-center text-Light">看診資訊</h1>
      <div class="container col-md-6">
        <!-- 內容 -->
        <div class="col-12">
          <div class="card-group">
            <div class="card border-info text-center">
              <div class="card-header">您的掛號號碼:</div>
              <div class="card-body">
                <h5 class="card-title">100</h5>
              </div>
            </div>
            <div class="card border-info text-center">
              <div class="card-header">目前看診號碼:</div>
              <div class="card-body">
                <h5 class="card-title">95</h5>
              </div>
            </div>
            <div class="card border-info text-center">
              <div class="card-header">目前看診號碼:</div>
              <div class="card-body">
                <h5 class="card-title">95</h5>
              </div>
            </div>
            <div class="card border-info text-center">
              <div class="card-header">預計等候時間:</div>
              <div class="card-body">
                <h5 class="card-title">50分鐘</h5>
              </div>
            </div>
          </div>
          <!-- --------------------看診完畢---------------------- -->
          <el-row>
            <el-col :span="24">
              <el-card :body-style="{ padding: '0px' }">
                <img
                  src="https://802.mnd.gov.tw/zcommon03/images/TrafficMap01.jpg"
                  class="image"
                />
                <div style="padding: 14px">
                  <span>醫療大樓</span>
                  <div class="bottom">
                    <el-row :gutter="20">
                      <el-col :span="12">
                        <time class="time">{{ currentDate }}</time>
                      </el-col>
                      <el-col :span="6" offset="6">
                        <el-button type="primary ml-1" @click="order"
                          >下一步</el-button
                        >
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <!-- --------回首頁----------- -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#step4 {
}
</style>
