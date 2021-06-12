import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import installElementPlus from "./plugins/element";

const app = createApp(App);
installElementPlus(app);
app.use(store).use(router).mount("#app");
