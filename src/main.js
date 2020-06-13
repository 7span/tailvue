import Vue from "vue";
import App from "./App.vue";
import "@/css/style.scss";
import TailVue from "./install";
Vue.use(TailVue);

Vue.config.productionTip = false;
Vue.component("Menu", require("vue-material-design-icons/Menu").default);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
