<script>
// @ is an alias to /src
import $ from "jquery";
export default {
  data() {
    return {};
  },
  methods() {
    $(function () {
      setTimeout(() => {
        $(".text-animation").removeClass("hidden");
      }, 500);
    });
  },
};
</script>

<template>
  <div id="Home">
    <!-- section -->
    <section class="vh-100">
      <div class="container h-100 aaa">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12">
            <ul
              class="text-animation hidden w-100 h-100 text-center text-white"
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
        <div class="row">
          <div class="col-md-8">
            <h1 class="fw-bold mb-4">服務宗旨</h1>
            <p>沒有服務</p>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="py-5">
      <div class="container">
        <h1 class="py-3">最新消息</h1>
        <div class="row justify-content-center d-none d-md-flex">
          <div class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/250x180/" class="card-image-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/250x180/" class="card-image-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/250x180/" class="card-image-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="https://fakeimg.pl/250x180/" class="card-image-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-md-none">
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-4">
                  <img src="https://fakeimg.pl/170x180/" alt="..." />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-4">
                  <img src="https://fakeimg.pl/170x180/" alt="..." />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-4">
                  <img src="https://fakeimg.pl/170x180/" alt="..." />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-4">
                  <img src="https://fakeimg.pl/170x180/" alt="..." />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
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
}
</style>
