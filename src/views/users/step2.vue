<script>
import GetSheetDone from "get-sheet-done";
import axios from "axios";
import $ from "jquery";
export default {
  components: {},
  data() {
    return {
      contents: null,
    };
  },
  methods: {
    click() {
      axios
        // .get("https://run.mocky.io/v3/fd35b8b4-c567-472f-af0d-353e8c8fc23e")
        .get(
          "https://spreadsheets.google.com/feeds/list/1hmSpYoYMZCpa80Gatm0CwYtuPcCtnaheahyps63-tqk/1/public/values?alt=json"
        )
        .then(function (response) {
          console.log(response.data);
        });
    },
    clickimg() {
      axios
        .get("https://run.mocky.io/v3/fd35b8b4-c567-472f-af0d-353e8c8fc23e")
        // .get(
        //   "https://spreadsheets.google.com/feeds/list/1hmSpYoYMZCpa80Gatm0CwYtuPcCtnaheahyps63-tqk/1/public/values?alt=json"
        // )
        .then((response) => (this.contents = response.data))
        .catch(function (error) {
          console.log(error);
        });
    },
    clicktable() {
      $.get(
        "https://spreadsheets.google.com/feeds/list/1hmSpYoYMZCpa80Gatm0CwYtuPcCtnaheahyps63-tqk/1/public/values?alt=json",
        function (data) {
          var d = data.feed.entry;
          var items = [];
          for (var i in d) {
            var item = {};
            item.name = d[i].gsx$name.$t;
            item.imagme = d[i].gsx$imagme.$t;
            items.push(item);
          }
          console.table(items);
        }
      );
    },
    GetSheet() {
      GetSheetDone.raw("1hmSpYoYMZCpa80Gatm0CwYtuPcCtnaheahyps63-tqk").then(
        (sheet) => {
          console.log(sheet);
        }
      );
    },
    //push
    linkStep1() {
      this.$router.push("/users/step1");
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
  <div id="step2">
    <!-- Jumbotron -->
    <header class="d-flex justify-content-center align-items-center">
      <div class="text-center">
        <div class="card alpha-50">
          <div class="card-body">
            <el-steps :active="1" simple>
              <el-step
                @click="linkStep1"
                title="網路掛號"
                icon="el-icon-s-custom"
              ></el-step>
              <el-step
                @click="linkStep3"
                title="至各診間候診"
                icon="el-icon-loading"
              ></el-step>
              <el-step
                @click="linkStep4"
                title="檢查、抽血"
                icon="el-icon-search"
              ></el-step>
              <el-step
                @click="linkStep5"
                title="櫃台批價"
                icon="el-icon-printer"
              ></el-step>
              <el-step
                @click="linkStep6"
                title="藥局領藥"
                icon="el-icon-sugar"
              ></el-step>
              <el-step
                @click="linkStep7"
                title="離院"
                icon="el-icon-school"
              ></el-step>
            </el-steps>
          </div>
        </div>
      </div>
    </header>
    <h1 class="pt-5 py-3">填寫初診單</h1>

    <div
      class="
        container
        justify-content-center
        animate__animated animate__fadeInBottomLeft
        pb-4
      "
    >
      <button @click="click" class="btn btn-warning">直接打spreadsheets</button>
      <button @click="clickimg" class="btn btn-success">打mocky測圖</button>
      <button @click="clicktable" class="btn btn-info">
        打spreadsheets console table
      </button>
      <button @click="GetSheet" class="btn btn-danger">打API測表格</button>
      <ul class="grid">
        <li v-for="content in contents" :key="content.id">
          <div class="imgage">
            <img :src="content.image" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/step3.scss" scoped>
#step2 {
  height: 70vh;
}
</style>
