<script>
export default {
  data() {
    return {
      components: {},
    };
  },
  methods: {
    order() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <div>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" @click="order()"
          ><img src="@/assets/images/logo_main.png" alt="" class="logo me-2" />
          醫院快速通關小幫手</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="mx-4" to="/"> 首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="mx-4" to="/users"> 我的看診流程</router-link>
            </li>
            <li class="nav-item">
              <router-link class="mx-4" to="/page2"> 我該看哪一科</router-link>
            </li>
            <li class="nav-item">
              <router-link class="mx-4" to="/page3"> 復康巴士申請</router-link>
            </li>
            <li class="nav-item">
              <router-link class="mx-4" to="/page4"> 線上填表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="mx-4" to="/page5"> 用藥追蹤</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
* {
  text-decoration: none;
}
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: #00c58e;
}
li {
  overflow: hidden;
}

a,
a:visited {
  color: inherit;
}

a:hover {
  color: #0845eb;
}
a:after,
a:before {
  content: "";
  position: absolute;
  z-index: -1;
}

.logo {
  width: 40px;
}
</style>
