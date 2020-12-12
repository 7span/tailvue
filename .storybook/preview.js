import Vue from "vue";
import { configure, addDecorator, addParameters } from "@storybook/vue";
import { withPaddings } from "storybook-addon-paddings";

//Register 3rd Party Plugins
import "../src/plugins";

//Register Plugin
import TailVue from "../src/install";
import options from "../src/options";
Vue.use(TailVue, options);

//CSS
import "../src/tailwind/default.css";
// import "../src/css/storybook.scss";
// import "../src/css/style.scss";

//Padding
addDecorator(withPaddings);
addParameters({
  paddings: [
    { name: "Small", value: "16px" },
    { name: "Medium", value: "32px", default: true },
    { name: "Large", value: "64px" },
  ],
});

