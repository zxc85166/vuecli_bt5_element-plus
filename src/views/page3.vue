<template>
  <div>
    <header class="d-flex justify-content-center align-items-center"></header>
    <section class="pt-4 pb-4">
      <div class="container py-2">
        <h2 class="text-center mb-2">復康巴士申請表</h2>
        <p class="text-center mb-3"></p>
        <form>
          <!--第一行-->
          <div class="row justify-content-center pt-3">
            <div class="col-md-3">
              <div class="form-group">
                <div>申請人姓名:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入申請人姓名"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div>申請人身分證字號:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入申請人身分證字號"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div>申請人連絡電話:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入連絡電話"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div>與搭乘者之關係:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入與搭乘者之關係(例:父子)"
                />
              </div>
            </div>
          </div>
          <!--第一行結束-->
          <!--第二行-->
          <div class="row justify-content-center pt-3">
            <div class="col-md-3">
              <div class="form-group">
                <div>搭乘人姓名:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入搭乘人姓名"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div>搭乘人身分證字號:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入搭乘人身分證字號"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div>搭乘人病例號碼:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入搭乘人病例號碼"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div>搭乘人連絡電話:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入搭乘人連絡電話"
                />
              </div>
            </div>
          </div>
          <!--第三行-->
          <div class="row justify-content-center pt-3">
            <div class="col-md-3">
              <div class="form-group">
                <div>是否有陪同者:</div>
                <select class="form-control">
                  <option>是</option>
                  <option>否</option>
                </select>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div>陪同者姓名:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入陪同者姓名"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div>陪同者連絡電話:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入陪同者連絡電話"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div>是否乘坐輪椅:</div>
                <select class="form-control">
                  <option>是</option>
                  <option>否</option>
                </select>
              </div>
            </div>
          </div>
          <!--第三行結束-->
          <!--第四行-->
          <div class="row justify-content-center pt-3">
            <div class="col-md-6">
              <div class="form-group">
                <div>申請復康巴士上車地點:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入上車地點之地址"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <div>申請復康巴士下車地點:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入下車地點之地址"
                />
              </div>
            </div>
          </div>
          <!--第四行-->
          <div class="row justify-content-center pt-3">
            <div>
              <div class="form-group">
                <label>特別需求及意見:</label>
                <textarea class="form-control"> </textarea>
              </div>
            </div>
          </div>

          <div class="pt-3">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              送出資料
            </button>
          </div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  請確認資料是否正確?
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button type="button" class="btn btn-primary">
                    送出資料
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
header {
  height: 300px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://www.tycg.gov.tw/uploaddowndoc?file=news/202005061826590.jpg&filedisplay=0506%E5%90%B3%E9%99%B3%E7%A7%80%E8%98%AD%E5%A5%B3%E5%A3%AB%E5%BE%A9%E5%BA%B7%E5%B7%B4%E5%A3%AB%E6%8D%90%E8%B4%88%E5%84%80%E5%BC%8F_200506_0001.jpg&flag=pic")
      no-repeat center/cover;
}
</style>
