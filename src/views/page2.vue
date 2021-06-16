<template>
  <div id="page2">
    <el-backtop></el-backtop>
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
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h3 class="mb-3 d-flex justify-content-center">我該看哪一科</h3>

            <div class="d-flex mb-5">
              <input
                class="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="請輸入症狀關鍵字"
              />
              <datalist id="datalistOptions">
                <option value="頭痛"></option>
                <option value="頭暈"></option>
                <option value="痠痛"></option>
                <option value="腹瀉"></option>
                <option value="腹痛"></option>
              </datalist>

              <button
                style="margin-left: 0.5em"
                class="
                  btn btn-primary btn-rounded btn-sm
                  my-0
                  waves-effect waves-light
                "
                type="submit"
              >
                Search
              </button>
            </div>

            <div class="row text-center">
              <div class="col-md-6 d-flex">
                <h3 class="h5">建議科別:</h3>
                <h5 class="ps-3">科別1、科別2、科別3</h5>
              </div>

              <!-- accordion -->
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      科別1
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      <strong>科別介紹</strong> It is shown by default, until
                      the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the
                      overall appearance, as well as the showing and hiding via
                      CSS transitions. You can modify any of this with custom
                      CSS or overriding our default variables. It's also worth
                      noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      科別2
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body">
                      <strong
                        >科別介紹This is the second item's accordion
                        body.</strong
                      >
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      科別3
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div class="accordion-body">
                      <strong
                        >科別介紹This is the third item's accordion
                        body.</strong
                      >
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--row-->
          </div>
          <!--col-md-8-->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
#page2 {
  .alpha-50 {
    background: rgba(255, 255, 255, 0.5);
  }

  header {
    height: 300px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("https://cdn.pixabay.com/photo/2016/01/19/15/05/doctor-1149149_960_720.jpg")
        no-repeat center/cover;
  }
}
</style>
