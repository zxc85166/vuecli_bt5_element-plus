<script>
// @ is an alias to /src
import $ from "jquery";
export default {
  data() {
    return {};
  },
  mounted: function () {
    this.rightnow(); //載入觸發
  },
  methods: {
    rightnow() {
      setTimeout(() => {
        $(".text-animation").removeClass("hidden");
      }, 500);
    },
  },
};
</script>

<template>
  <div id="Home">
    <a href="#" class="d-none d-md-block">
      <div class="gotop"></div>
    </a>
    <!-- section -->
    <section class="vh-100">
      <div class="container h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12">
            <ul
              class="
                text-animation
                hidden
                w-100
                h-100
                text-center text-white
                d-none d-md-block
              "
            >
              <li>E</li>
              <li>化</li>
              <li>醫</li>
              <li>療</li>
              <li>一</li>
              <li>流</li>
              <li>體</li>
              <li>驗</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <div class="py-5">
      <div class="container">
        <h1 class="fw-bold mb-4">網站介紹</h1>
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/images/網路掛號.jpeg" alt="" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h2>我的看診流程</h2>
            <p>跟著圖片流程步驟，就可以完整體驗本網站功能</p>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="py-5">
      <div class="container">
        <h1 class="fw-bold mb-4">COVID-19專區</h1>
        <div class="row">
          <div class="col">
            <img
              src="https://www.cdc.gov.tw/Uploads/110ad31f-5a80-4b98-a801-3585482b7264.jpg"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="py-5">
      <div class="container">
        <h1 class="py-3">最新消息</h1>
        <div class="row justify-content-center d-none d-md-flex aaa">
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://www.pohai.org.tw/Upload/202106/news_202106100908512.png"
                class="card-image-top"
                style="max-height: 202.66px"
              />
              <div class="card-body">
                <h5 class="card-title">
                  「每支檢體代表一份不安的心情」醫檢師3周拚出一間
                </h5>
                <p class="card-text">
                  在疫情之下，檢體的陰性與陽性意味著能否解除隔離、是否染疫、是否須匡列，每支檢體都代表一份不安的心情，為了加強檢驗量能，本院在3周內完成專業級...
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://www.pohai.org.tw/Upload/202106/news_202106100859572.jpg"
                class="card-image-top"
              />
              <div class="card-body">
                <h5 class="card-title">堅守崗位 以助確診者康復出院為己任</h5>
                <p class="card-text">
                  國內爆發武漢肺炎（新型冠狀病毒病，COVID-19）社區感染後，專責醫療院所承受極大壓力，本院5月中旬接下第一個確診病人，收治個案的
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://www.pohai.org.tw/Upload/202106/news_202106061645222.jpg"
                class="card-image-top"
              />
              <div class="card-body">
                <h5 class="card-title">
                  搶救新冠肺炎重症病人 藥師奔百里取救命藥
                </h5>
                <p class="card-text">
                  在對抗新冠肺炎的戰場上，不只醫師、護理師是第一線士兵，背後還有許多後勤補給單位支援，疫苗和治療藥物由藥劑科主責，是最重要的補給部隊之一。藥劑科主任陳淑謐，先前曾為確診重症病人的用藥瑞德西韋，傍晚從宜蘭奔向台北尋找藥品來回路程超過130公里，事後回想，她直呼「藥師是醫療團隊最堅強的後盾」，那一刻感到自己身上充滿藥師的使命感。
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <a href="">
              <div class="card">
                <img
                  src="https://www.pohai.org.tw/Upload/202106/news_202106061422102.jpg"
                  class="card-image-top"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    每天5分鐘 正念減壓讓緊張與壓力輕輕釋放
                  </h5>
                  <p class="card-text">
                    葉女士因乳癌復發，在連續的焦慮症狀影響睡眠後，前來身心科就診，訴說除了焦慮心情外，還有止痛藥物也無法緩解的身體疼痛讓她苦不堪言，經過諮詢，葉女士進行了5周的正念減壓治療，目前身體的疼痛已緩減，也讓她透過意念中斷疼痛與情緒的連動，不再那麼容易陷入低潮與受困於情緒中。
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="row d-md-none bbb">
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-5">
                  <img
                    src="https://www.pohai.org.tw/Upload/202106/news_202106100908512.png"
                    alt="..."
                    class="img-fluid"
                  />
                </div>
                <div class="col-7">
                  <div class="card-body">
                    <h5 class="card-title">
                      「每支檢體代表一份不安的心情」醫檢師3周拚出一間實驗室
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-5">
                  <img
                    src="https://www.pohai.org.tw/Upload/202106/news_202106100859572.jpg"
                    alt="..."
                    class="img-fluid"
                  />
                </div>
                <div class="col-7">
                  <div class="card-body">
                    <h5 class="card-title">
                      堅守崗位 以助確診者康復出院為己任
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-5">
                  <img
                    src="https://www.pohai.org.tw/Upload/202106/news_202106061645222.jpg"
                    alt="..."
                    class="img-fluid"
                  />
                </div>
                <div class="col-7">
                  <div class="card-body">
                    <h5 class="card-title">
                      搶救新冠肺炎重症病人 藥師奔百里取救命藥
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-5">
                  <img
                    src="https://www.pohai.org.tw/Upload/202106/news_202106061422102.jpg"
                    alt="..."
                    class="img-fluid"
                  />
                </div>
                <div class="col-7">
                  <div class="card-body">
                    <h5 class="card-title">
                      每天5分鐘 正念減壓讓緊張與壓力輕輕釋放
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#Home {
  section {
    background-image: url(https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .text-animation {
    list-style: none;
  }

  .text-animation li {
    display: inline-block;
    margin-right: 10px;
    font-family: sans-serif;
    font-weight: 300;
    font-size: 5rem;
    opacity: 1;
    border: 3px solid white;
    transition: all 2.5s ease;
  }

  .text-animation li:first-child {
    width: 86px;
  }

  .text-animation li:last-child {
    margin-right: 0;
  }

  .text-animation.hidden {
    opacity: 0;
  }

  .text-animation.hidden li:nth-child(1) {
    transform: translate(-200px, -200px);
  }

  .text-animation.hidden li:nth-child(2) {
    transform: translate(20px, 100px);
  }

  .text-animation.hidden li:nth-child(3) {
    transform: translate(-150px, -80px);
  }

  .text-animation.hidden li:nth-child(4) {
    transform: translate(10px, -200px);
  }

  .text-animation.hidden li:nth-child(5) {
    transform: translate(-300px, 200px);
  }

  .text-animation.hidden li:nth-child(6) {
    transform: translate(20px, -20px);
  }

  .text-animation.hidden li:nth-child(7) {
    transform: translate(30px, 200px);
  }

  .text-animation.hidden li:nth-child(8) {
    transform: translate(-200px, -200px);
  }

  .text-animation.hidden li:nth-child(9) {
    transform: translate(10px, -200px);
  }

  .text-animation.hidden li:nth-child(10) {
    transform: translate(-300px, 200px);
  }

  @media screen and (max-width: 992px) {
    .aaa {
      display: none;
    }
  }

  .fill-current {
    fill: currentColor;
  }

  .gray {
    color: #646464;
  }
  .gotop {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 5px;
    bottom: 20px;
    background-color: #447a6a;
    border-radius: 100%;
    color: white;
    text-align: center;
    line-height: 50px;
    font-size: 1.2rem;
  }

  .gotop:before {
    content: "^";
  }
}
</style>
