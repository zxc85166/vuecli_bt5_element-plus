<template>
  <div>
    <div class="container">
      <div class="row py-2">
        <div class="col-md-4">
          <label class="form-label">姓名</label>
          <input type="text" class="form-control" />
        </div>
        <div class="col-md-4">
          <label class="form-label">就診科別</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>內科</option>
            <option value="1">外科</option>
            <option value="2">眼科</option>
            <option value="3">骨科</option>
            <option value="4">家醫科</option>
            <option value="5">精神科</option>
          </select>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-md-4 py-2">
          <label class="form-label">就醫日期</label>
          <input type="text" class="form-control" id="datepicker" />
        </div>
        <div class="col-md-4 py-2">
          <label class="form-label">提醒回診日期</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="row py-2">
        <div class="col-md-12 py-2">
          <label class="form-label">藥物不良反應</label>
          <textarea
            type="text"
            class="form-control"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div class="d-flex justify-content-center py-4">
          <button type="button" class="btn btn-success btn-lg w-50">
            提交送出
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-center" id="table1">
          <table class="table table-striped table-primary table-hover">
            <thead>
              <tr>
                <th>就醫日期</th>
                <th>就診科別</th>
                <th>英文名稱</th>
                <th>中文名稱</th>
                <th>成分名稱</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021/1/1</td>
                <td>外科</td>
                <td>Abilify 15mg Tablet</td>
                <td>安立復錠</td>
                <td>aripiprazole 15mg</td>
              </tr>
              <tr>
                <td>2021/1/1</td>
                <td>外科</td>
                <td>Albuterol 糖漿 60Ml Syrup</td>
                <td>舒爾管糖漿</td>
                <td>salbutamol sulfate</td>
              </tr>
              <tr>
                <td>2021/1/1</td>
                <td>外科</td>
                <td>Albuterol 糖漿 60Ml Syrup</td>
                <td>舒爾管糖漿</td>
                <td>salbutamol sulfate</td>
              </tr>
              <tr>
                <td>2021/1/1</td>
                <td>外科</td>
                <td>Albuterol 糖漿 60Ml Syrup</td>
                <td>舒爾管糖漿</td>
                <td>salbutamol sulfate</td>
              </tr>
              <tr>
                <td>2021/1/1</td>
                <td>外科</td>
                <td>Albuterol 糖漿 60Ml Syrup</td>
                <td>舒爾管糖漿</td>
                <td>salbutamol sulfate</td>
              </tr>
              <tr>
                <td>2021/1/1</td>
                <td>外科</td>
                <td>Albuterol 糖漿 60Ml Syrup</td>
                <td>舒爾管糖漿</td>
                <td>salbutamol sulfate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
// import { ref, onMounted } from "vue";
export default {
  data() {
    return {
      className: "",
      newName: {
        user: "",
        region: "",
      },
    };
  },
  mounted: function () {
    this.rightnow(); //載入觸發
  },
  methods: {
    //push
    order() {
      this.$router.push("/users/step2");
    },

    rightnow() {
      $("#datepicker").datepicker({
        dateFormat: "yy/mm/dd",
      });

      $("#table1 tbody tr").hover(
        function () {
          $(this).css({
            "font-weight": "bold",
          });
        },
        function () {
          $(this).css({
            "font-weight": "",
          });
        }
      );
    },
    methods: {},
  },
};
</script>
<style lang="scss" scoped>
#table1 tbody tr:hover {
  font-weight: "bold";
}
</style>
