<template>
  <div class="hello container">
    <div class="row justify-content-center">
      <div class="col-4">
        <p>
          <span>{{ $store.state.name }}</span>
        </p>
        <!-- <p>
      Name.lnegth =
      <span>{{ $store.getters.nameLength }}</span>
    </p> -->
        <span> 請輸入您的姓名並按下Enter </span>
        <p></p>
        <el-input
          class="enterpriseName"
          type="text"
          v-model="userName"
          placeholder="請輸入姓名"
          @keydown.enter="$store.dispatch('updateName', userName)"
        />
        <!-- <input type="submit" @click=" /> -->

        <el-button @click="linkStep1" type="primary" plain class="mt-5"
          >開始看診</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      userName: "",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
::v-deep .enterpriseName .el-input__inner {
  width: 100%;
  // background-color: #b7d0e7;
  text-align: center;
  // border-color: #c0c4cc;
  color: #000;
}
.hello {
  margin: auto;
  text-align: center;
  font-size: 1.2rem;
  padding-left: 4%;
}

span {
  color: gray;
}
p > span {
  color: blue;
  font-weight: bold;
}
</style>
