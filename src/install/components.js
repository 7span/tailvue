const components = {
  button: require("../components/button/Component").default,
  icon: require("../components/icon/Component").default,
  field: require("../components/field/Component").default,
  "field-validate": require("../components/field-validate/Component").default,
  textbox: require("../components/textbox/Component").default,
  input: require("../components/input/Component").default,
  select: require("../components/select/Component").default,

  //WIP
  checkbox: require("../components/checkbox/Component").default,

  //TODO
  shimmer: require("../components/shimmer/Component").default,
  media: require("../components/media/Component").default,
};

export default (Vue) => {
  for (var componentName in components) {
    Vue.component(`tv-${componentName}`, components[componentName]);
  }
};
