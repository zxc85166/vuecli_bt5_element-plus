import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import installElementPlus from "./plugins/element";

// 讓瀏覽器的全域環境可以使用到 $
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

const app = createApp(App);
installElementPlus(app);
app.use(store).use(router).mount("#app");
