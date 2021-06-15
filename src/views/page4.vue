<template>
  <div>
    <!-- Jumbotron -->
    <header class="d-flex justify-content-center align-items-center">
      <div class="text-center">
        <div class="card alpha-50">
          <div class="card-body">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              facere.
            </p>
          </div>
        </div>
      </div>
    </header>

    <section class="py-5">
      <!--初診基本資表-->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h3 class="text-center fw-bold">初診基本資料表</h3>
            <div class="row pt-5">
              <div class="col-md-5">
                <label for="">身分證字號</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-4">
                <label for="">姓名</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-3">
                <label for="">出生日期</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="row py-3">
              <div class="col-md-5">
                <label for="">連絡電話</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-7">
                <label for="">戶籍地址</label>
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row py-3">
              <div class="col-md-5">
                <label for="">緊急連絡人姓名</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-7">
                <label for="">緊急連絡人電話</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="row py-3">
              <div class="col-md-12">
                <label for="">電子信箱</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <hr />
            <h4>是否願意收到本院相關訊息</h4>

            <div class="row">
              <div class="col-md-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1"
                    >是</label
                  >
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2"
                    >否</label
                  >
                </div>
              </div>
            </div>

            <hr />
            <button
              @click="linkStep3"
              class="btn btn-success w-100 d-block btn-lg mb-4"
            >
              提交
            </button>
          </div>
        </div>
      </div>
      <!--container-->
      <hr />
      <!-- 病人健康資料表 -->
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h3 class="text-center fw-bold">病人健康資料表</h3>
            <div class="row pt-5">
              <div class="col-md-4">
                <div class="input-group mb-3">
                  <label class="input-group-text" for="inputGroupSelect01"
                    >病史獲取人</label
                  >
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>病人</option>
                    <option value="1">家屬</option>
                    <option value="2">其他</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-group mb-4">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >身高(公分)</span
                  >
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-group mb-4">
                  <span class="input-group-text" id="inputGroup-sizing-default"
                    >體重(公斤)</span
                  >
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <label for="">職業</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-4">
                <label for="">教育程度</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-4">
                <label for="">宗教信仰</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="row py-3">
              <div class="col-md-12">
                <label for="">最近一年是否出國</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="row pb-3">
              <div class="col-md-4">
                <label for="">慣用語言</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-4">
                <label for="">以往就醫地點</label>
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row">
              <h4 class="py-2">過去病史</h4>
              <h5>請問是否曾患下列疾病?</h5>
              <div class="col-md-12">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1"
                    >肺結核</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >心臟病</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >糖尿病</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >腎臟病</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >肝炎</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >高血壓</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >中風</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >癲癇</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >氣喘</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >紅斑性狼瘡</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >蠶豆症</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >高血脂</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >血友病</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >惡性腫瘤</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >手術</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >食物過敏</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >藥物過敏</label
                  >
                </div>
              </div>
              <!--col-md-12-->
            </div>
            <!--row-->
            <div class="row pb-3">
              <div class="col-md-12">
                <label for="">其他：</label>
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row">
              <h4 class="py-2">家族病史</h4>
              <div class="col-md-12">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label"
                    >請問您的直系血親中，是否曾罹患重大疾病?</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <h4 class="py-2">現在病史</h4>
              <div class="col-md-6">
                <label for="">此次就診問題?</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-6 pb-3">
                <label for="">這個問題約持續多久了</label>
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row pb-3">
              <h4 class="py-2">過去一年回顧</h4>
              <div class="col-md-12">
                <label for="" class="pe-4">1.睡眠時間:</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  每日睡足7~8小時
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  不足7~8小時
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  時常失眠
                </label>
              </div>
              <div class="col-md-12">
                <label for="" class="pe-4">2.吸菸習慣:</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  不吸菸
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  吸菸，菸量約______支/天
                </label>
              </div>
              <div class="col-md-12">
                <label for="" class="pe-4">3.喝酒習慣:</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  不喝酒
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  偶爾喝
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  時常喝，酒量約________杯/天
                </label>
              </div>
              <div class="col-md-12">
                <label for="" class="pe-4">4.嚼食檳榔:</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  不嚼食檳榔
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  嚼食檳榔，量約______粒/天
                </label>
              </div>
              <div class="col-md-12">
                <label for="" class="pe-4"
                  >5.最近兩個星期以來，你是否差不多每天的大部分時間都覺得憂鬱或情緒低落?</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  很少或沒有
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  偶爾
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  時常
                </label>
              </div>
              <div class="col-md-12">
                <label for="" class="pe-4"
                  >6.最近兩個星期以來，你是否對大多數的事物比較感受不到興趣，或是對過去大部分時間應會覺得愉快的事情，比較不能感受到樂趣？</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  很少或沒有
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  偶爾
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  時常
                </label>
              </div>
              <div class="col-md-12">
                <label for="" class="pe-4">7.目前是否有長期服用藥物？</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  無
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label pe-2" for="flexCheckChecked">
                  有
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  降血糖藥
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  降血壓藥
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  抗凝血藥
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  心臟病藥
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  其他_______
                </label>
              </div>
            </div>

            <div class="row">
              <h4 class="py-2">其他</h4>
              <div class="col-md-12">
                <label for="" class="pe-4 text-danger"
                  >請問您目前是否領有下列相關證明？</label
                >
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    class="form-check-label pe-2 text-danger"
                    for="flexCheckChecked"
                  >
                    中低收入戶
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    class="form-check-label pe-2 text-danger"
                    for="flexCheckChecked"
                  >
                    清寒家庭
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    class="form-check-label pe-2 text-danger"
                    for="flexCheckChecked"
                  >
                    身心障礙手冊
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    class="form-check-label pe-2 text-danger"
                    for="flexCheckChecked"
                  >
                    重大傷病卡
                  </label>
                </div>
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    class="form-check-label pe-2 text-danger"
                    for="flexCheckChecked"
                  >
                    無
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <button
              @click="linkStep3"
              class="btn btn-success w-100 d-block btn-lg mb-4"
            >
              提交
            </button>
          </div>
        </div>
      </div>
      <!--container-->
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
      value1: "",
    };
  },
  methods: {
    linkStep3() {
      this.$router.push("/users/step3");
    },
  },
};
</script>
<style lang="scss" scoped>
.logo {
  width: 40px;
}

.alpha-50 {
  background: rgba(255, 255, 255, 0.5);
}

header {
  height: 300px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://cdn.pixabay.com/photo/2018/11/17/07/10/desktop-3820634_960_720.jpg")
      no-repeat center/cover;
}
</style>
