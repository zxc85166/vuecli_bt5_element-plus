<template>
  <div id="page2">
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
      <div class="container d-flex justify-content-center">
        <div class="row">
          <div class="col-md-12">
            <h3 class="mb-3 d-flex justify-content-center">我該看哪一科</h3>
            <form class="d-flex">
              <input
                type="text"
                id="keyword"
                name="keyword"
                aria-label="Search"
                class="form-control mr-sm-2"
                placeholder="請輸入關鍵字"
              />
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
            </form>
          </div>
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
