<script>
export default {
  data() {
    return {
      // 圖片上傳
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,

      // form
      form: {
        name: "",
        address: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    handleRemove(file) {
      this.$refs.files.handleRemove(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
  //push
  order() {
    this.$router.push("/users/step3");
  },
};
</script>
<template>
  <div id="step2">
    <el-backtop></el-backtop>
    <el-steps :active="1" simple>
      <el-step title="步驟 1 網路掛號" icon="el-icon-edit"></el-step>
      <el-step title="步驟 2 填寫初診單" icon="el-icon-upload"></el-step>
      <el-step title="步驟 3 至各診間候診" icon="el-icon-picture"></el-step>
      <el-step title="步驟 4 檢查、抽血檢驗" icon="el-icon-picture"></el-step>
      <el-step title="步驟 5 櫃台批價" icon="el-icon-picture"></el-step>
      <el-step title="步驟 6 藥局領藥" icon="el-icon-picture"></el-step>
      <el-step title="步驟 7 離院" icon="el-icon-picture"></el-step>
    </el-steps>
    <h1 class="text-center text-Light">填寫初診單</h1>
    <h1 class="text-center text-Light">{{ form.name }}</h1>
    <div class="container d-flex justify-content-center">
      <!-- form -->
      <div class="login-box">
        <el-form ref="form" :model="form" label-width="80px">
          <div class="container p-5 border radius" style="border-radius: 4px">
            <!-- /////// -->
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <template #default>
                <i class="el-icon-plus"></i>
              </template>
              <template #file="{ file }">
                <div>
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url"
                    alt=""
                  />
                </div>
              </template>
            </el-upload>
            <el-dialog v-model="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
            <!-- //// -->
            <el-dialog v-model="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
            <div class="user-box text-center">
              <input type="text" name="" required="" />
              <label>上傳圖片：顯示比例長寬比 1:1</label>
            </div>
            <el-form-item label="姓名">
              <el-input v-model="form.name" clearable></el-input>
            </el-form-item>

            <el-form-item label="住家地址">
              <el-input v-model="form.address" clearable></el-input>
            </el-form-item>
            <el-form-item label="看診方式">
              <el-select v-model="form.region" placeholder="看診方式">
                <el-option label="電話看診" value="shanghai"></el-option>
                <el-option label="到院看診" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="看診時間">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="選擇日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker
                  placeholder="選擇時間"
                  v-model="form.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="復康巴士">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="過往病史">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="慢性病" name="type"></el-checkbox>
                <el-checkbox label="藥物過敏" name="type"></el-checkbox>
                <el-checkbox label="抽菸" name="type"></el-checkbox>
                <el-checkbox label="喝酒" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="性別">
              <el-radio-group v-model="form.resource">
                <el-radio label="男性"></el-radio>
                <el-radio label="女性"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="其他事項">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="custom-btn btn-8" type="primary" @click="order">
                確認送出
              </el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <!-- form -->
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/step3.scss" scoped>
#step2 {
}
</style>
