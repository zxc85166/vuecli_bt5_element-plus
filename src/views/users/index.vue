<script>
export default {
  data() {
    return {
      newName: {
        user: "",
        region: "",
      },
    };
  },
  methods: {},
};
</script>

<template>
  <div id="step1">
    <el-backtop></el-backtop>
    <el-steps :active="0" simple>
      <el-step title="步驟 1 網路掛號" icon="el-icon-edit"></el-step>
      <el-step title="步驟 2 填寫初診單" icon="el-icon-upload"></el-step>
      <el-step title="步驟 3 至各診間候診" icon="el-icon-picture"></el-step>
      <el-step title="步驟 4 檢查、抽血檢驗" icon="el-icon-picture"></el-step>
      <el-step title="步驟 5 櫃台批價" icon="el-icon-picture"></el-step>
      <el-step title="步驟 6 藥局領藥" icon="el-icon-picture"></el-step>
      <el-step title="步驟 7 離院" icon="el-icon-picture"></el-step>
    </el-steps>
    <h1>網路掛號</h1>

    <!-- 輸入姓名 -->
    <el-form :inline="true" :model="newName5" class="demo-form-inline">
      <el-form-item label="身分證 / 居留證號碼 / 病歷號碼：">
        <el-input v-model="newName" placeholder="輸入"></el-input>
      </el-form-item>
      <el-form-item label="看診方式：">
        <el-select v-model="newName5.region" placeholder="請選擇">
          <el-option label="到院看診" value="123"></el-option>
          <el-option label="電話看診" value="456"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="saveName"
          >初診</el-button
        >
        <el-button type="primary" @click="saveName"
          >複診<i class="el-icon-s-claim el-icon--right"></i
        ></el-button>
      </el-form-item>
    </el-form>
    <!-- 輸入姓名 -->
  </div>
</template>

<style lang="scss" scoped>
#step1 {
}
</style>
