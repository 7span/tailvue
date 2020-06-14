import Vue from "vue";
import App from "./App.vue";
import "@/css/style.scss";
import TailVue from "./install";
import tailVueOptions from "./options";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(TailVue, tailVueOptions);

Vue.config.productionTip = false;
Vue.component("Menu", require("vue-material-design-icons/Menu").default);

new Vue({
  render: (h) => h(App),
  router: new VueRouter({
    routes: [],
  }),
}).$mount("#app");
