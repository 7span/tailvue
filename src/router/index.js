import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/button",
  },
  {
    path: "/button",
    name: "button",
    component: require("@/views/Button").default,
  },
  {
    path: "/field",
    name: "field",
    component: require("@/views/Field").default,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
