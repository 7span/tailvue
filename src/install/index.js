import defaultOptions from "./options";
import registerComponents from "./components";
import registerIcons from "./icons";
import { merge } from "lodash-es";

const install = (Vue, options) => {
  const mergedOptions = merge({}, defaultOptions, options);
  //Provide Options
  Vue.mixin({
    provide: {
      OPTIONS: mergedOptions
    }
  });
  registerIcons(Vue);
  registerComponents(Vue);
};

//Export Plugin
const plugin = {
  install,
  version: "__VERSION__"
};
export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
