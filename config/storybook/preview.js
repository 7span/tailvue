import Vue from "vue";
import { configure, addDecorator, addParameters } from "@storybook/vue";
import { withPaddings } from "storybook-addon-paddings";

//CSS
import "./tailwind.css";

//Register 3rd Party Plugins
import "../../src/plugins";

//Register Plugin
import TailVue from "../../src/install";
Vue.use(TailVue);

//Padding
addDecorator(withPaddings);
addParameters({
  paddings: [
    { name: "Small", value: "16px" },
    { name: "Medium", value: "32px", default: true },
    { name: "Large", value: "64px" },
  ],
});
