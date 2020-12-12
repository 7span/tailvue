const components = {
  button: require("../components/button/Component").default,
  icon: require("../components/icon/Component").default,
  link: require("../components/link/Component").default,
  field: require("../components/field/Component").default,
  "field-validate": require("../components/field-validate/Component").default,
  "field-icon": require("../components/field-icon/Component").default,
  textbox: require("../components/textbox/Component").default,
  loader: require("../components/loader/Component").default,
  shimmer: require("../components/shimmer/Component").default,
  select: require("../components/select/Component").default,
  media: require("../components/media/Component").default,
};

export default (Vue) => {
  for (var componentName in components) {
    Vue.component(`tv-${componentName}`, components[componentName]);
  }
};
