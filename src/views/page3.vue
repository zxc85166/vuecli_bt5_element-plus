<template>
  <div>
    <header class="d-flex justify-content-center align-items-center"></header>
    <section class="pt-4 pb-4">
      <div class="container max-w-1080" style="font-family: DFKai-sb">
        <h2 class="text-center mb-2">復康巴士申請表</h2>
        <p class="text-center mb-3"></p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <div>申請人姓名:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入申請人姓名"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <div>身分證字號或居留證號碼:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入身分證字號"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <div>市內電話:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入市內電話"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <div>行動電話:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入行動電話"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>申請路線</label>
                <select class="form-control">
                  <option>路線一</option>
                  <option>路線二</option>
                  <option>路線三</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <div>緊急聯絡人:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入緊急連絡人"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <div>聯絡人電話:</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入聯絡人電話"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div>
              <div class="form-group">
                <label>注意事項:</label>
                <textarea class="form-control">
                              例:
                              請勿抽菸
                              請勿喝酒
                            </textarea
                >
              </div>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            送出資料
          </button>
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
