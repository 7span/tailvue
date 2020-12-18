import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import TailVue from "./install";

import router from "./router";
import "@/css/style.scss";
import "./plugins";

import Props from "@/components/_helpers/Props";
Vue.component("props", Props);

Vue.use(VueRouter);
Vue.use(TailVue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
