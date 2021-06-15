<script>
//VueScrollTo套件

export default {
  data() {
    return {
      // 圖片
      url: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      srcList: [
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      url2: "https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      srcList2: [
        "https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      url3: "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      srcList3: [
        "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      url4: "https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      srcList4: [
        "https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      url5: "https://images.pexels.com/photos/4269273/pexels-photo-4269273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      srcList5: [
        "https://images.pexels.com/photos/4269273/pexels-photo-4269273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      url6: "https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      srcList6: [
        "https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
      url7: "https://images.pexels.com/photos/451/red-school-blur-factory.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      srcList7: [
        "https://images.pexels.com/photos/451/red-school-blur-factory.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      ],
    };
  },

  methods: {
    //push
    linkStep1() {
      this.$router.push("/users/step1");
    },
  },
};
</script>
<template>
  <div id="index">
    <!-- 時間軸 -->
    <div class="container mx-auto px-5 pt-4">
      <h1>流程</h1>
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="步驟1" placement="top">
            <el-card>
              <h4>網路掛號</h4>
              <p>填寫：身分證 / 居留證號碼 / 病歷號碼 以及 選擇看診方式</p>
              <div class="demo-image__preview">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  :preview-src-list="srcList"
                >
                </el-image>
              </div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="步驟2" placement="top">
            <el-card>
              <h4>填寫資料</h4>
              <p>填寫初診單</p>
              <div class="demo-image__preview">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url2"
                  :preview-src-list="srcList2"
                >
                </el-image>
              </div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="步驟3" placement="top">
            <el-card>
              <h4>至各診間候診</h4>
              <p>您的掛號號碼、目前看診號碼、預計等候時間</p>
              <div class="demo-image__preview">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url3"
                  :preview-src-list="srcList3"
                >
                </el-image>
              </div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="步驟4" placement="top">
            <el-card>
              <h4>檢查</h4>
              <p>檢查、抽血檢驗</p>
              <div class="demo-image__preview">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url4"
                  :preview-src-list="srcList4"
                >
                </el-image>
              </div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="步驟5" placement="top">
            <el-card>
              <h4>批價</h4>
              <p>櫃台批價</p>
              <div class="demo-image__preview">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url5"
                  :preview-src-list="srcList5"
                >
                </el-image>
              </div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="步驟6" placement="top">
            <el-card>
              <h4>領藥</h4>
              <p>藥局領藥</p>
              <div class="demo-image__preview">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url6"
                  :preview-src-list="srcList6"
                >
                </el-image>
              </div>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="步驟7" placement="top">
            <el-card>
              <h4>手續完成</h4>
              <p>離院</p>
              <div class="demo-image__preview">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url7"
                  :preview-src-list="srcList7"
                >
                </el-image>
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
  <el-button @click="linkStep1" type="primary" plain class="ms-5"
    >開始看診</el-button
  >
</template>

<style lang="scss" scoped>
#index {
  h1 {
    padding-left: 5%;
  }
}
</style>
