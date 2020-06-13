import defaultOptions from "./options";
import components from "./components";
import icons from "./icons";

const install = (Vue, options) => {
  const mergedOptions = Object.assign(defaultOptions, options);

  //Provide Options
  Vue.mixin({
    provide: {
      OPTIONS: mergedOptions,
    },
  });

  //Register Icons
  for (var iconName in icons) {
    Vue.component(`mi-${iconName}`, icons[iconName]);
  }

  //Register Components
  for (var componentName in components) {
    Vue.component(`tv-${componentName}`, components[componentName]);
  }
};

const plugin = {
  install,
  version: "__VERSION__",
};

export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
