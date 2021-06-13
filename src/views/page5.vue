<template>
  <div>
    <div class="container">
      <div class="row">
        <h1 class="fs-1 text-center mb-10">用藥追蹤</h1>
        <div class="col-md-3">
          <div class="mb-3 py-2">
            <label class="form-label">姓名</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3 py-2">
            <label class="form-label">看診科別</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>內科</option>
              <option value="1">外科</option>
              <option value="2">眼科</option>
              <option value="3">骨科</option>
              <option value="4">家醫科</option>
              <option value="5">精神科</option>
            </select>
          </div>
          <div class="mb-3 py-2">
            <label class="form-label">藥物類別</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>普拿疼</option>
              <option value="1">阿斯匹靈</option>
              <option value="2">止痛藥</option>
              <option value="3">眼藥水</option>
              <option value="4">退燒藥</option>
              <option value="5">咳嗽藥水</option>
            </select>
          </div>
          <div class="mb-3 py-2">
            <label class="form-label">上次回診日期</label>
            <input type="text" class="form-control" id="datepicker" />
          </div>
          <div class="mb-3 py-2">
            <label class="form-label">提醒回診日期</label>
            <input type="text" class="form-control" id="backToHospital" />
          </div>
        </div>
        <div class="col-md-9 text-center" id="table1">
          <table class="table table-striped table-primary table-hover">
            <thead>
              <tr>
                <th>英文名稱</th>
                <th>中文名稱</th>
                <th>成分名稱</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abilify 15mg Tablet</td>
                <td>安立復錠</td>
                <td>aripiprazole 15mg</td>
              </tr>
              <tr>
                <td>Actein顆粒 100Mg Pkg</td>
                <td>愛克痰顆粒20公絲/公克</td>
                <td>acetylcysteine 20mg/gm</td>
              </tr>
              <tr>
                <td>Albuterol 糖漿 60Ml Syrup</td>
                <td>舒爾管糖漿</td>
                <td>salbutamol sulfate</td>
              </tr>
              <tr>
                <td>Albuterol 糖漿 60Ml Syrup</td>
                <td>舒爾管糖漿</td>
                <td>salbutamol sulfate</td>
              </tr>
              <tr>
                <td>Albuterol 糖漿 60Ml Syrup</td>
                <td>舒爾管糖漿</td>
                <td>salbutamol sulfate</td>
              </tr>
              <tr>
                <td>Albuterol 糖漿 60Ml Syrup</td>
                <td>舒爾管糖漿</td>
                <td>salbutamol sulfate</td>
              </tr>
              <tr>
                <td>Albuterol 糖漿 60Ml Syrup</td>
                <td>舒爾管糖漿</td>
                <td>salbutamol sulfate</td>
              </tr>
              <tr>
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
  methods: {
    //push
    order() {
      this.$router.push("/users/step2");
    },
    mounted: function () {
      this.rightnow(); //載入觸發
    },
    methods: {
      rightnow() {
        $("#datepicker").datepicker().click($("#backToHospital").text("SSSSS"));

        $("#table1 tbody tr").click(function () {
          $("img").hide();
          $("img").show();
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
    },
  },
};
</script>
<style lang="scss" scoped></style>
