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
  <h5>{{ nowDay }}</h5>
  <h5>{{ nowTime }}</h5>
</template>
