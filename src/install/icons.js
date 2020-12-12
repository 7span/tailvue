const icons = {
  loading: require("vue-material-design-icons/Loading").default,
  "image-plus": require("vue-material-design-icons/ImagePlus").default,
  vuejs: require("vue-material-design-icons/Vuejs").default,
  "chevron-down": require("vue-material-design-icons/ChevronDown").default,
  image: require("vue-material-design-icons/Image").default,
};

export default (Vue) => {
  for (var iconName in icons) {
    Vue.component(`vmdi-${iconName}`, icons[iconName]);
  }
};
