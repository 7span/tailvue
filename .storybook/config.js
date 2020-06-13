import Vue from "vue";
import { configure, addDecorator, addParameters } from "@storybook/vue";
import { withPaddings } from "storybook-addon-paddings";

//Register Plugin
import TailVue from "../src/install";
Vue.use(TailVue);

//CSS
import "../src/css/tailwind.min.css";
import "../src/css/storybook.scss";
import "../src/css/style.scss";

//Padding
addDecorator(withPaddings);
addParameters({
  paddings: [
    { name: "Small", value: "16px" },
    { name: "Medium", value: "32px", default: true },
    { name: "Large", value: "64px" },
  ],
});

configure(require.context("../src", true, /\.stories\.js$/), module);
