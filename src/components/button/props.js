import values from "./prop-values";

export default {
  theme: {
    type: String,
    validator: (value) => {
      return values.theme.includes(value);
    },
  },
  color: {
    type: String,
    validator: (value) => {
      return values.color.includes(value);
    },
  },
  size: {
    type: String,
    validator: (value) => {
      return values.size.includes(value);
    },
  },
  shape: {
    type: String,
    validator: (value) => {
      return values.shape.includes(value);
    },
  },
  align: {
    type: String,
    validator: (value) => {
      return values.align.includes(value);
    },
  },
  type: {
    type: String,
    default: "button",
  },
  tag: {
    type: String,
    default: "button",
  },
  loadingIcon: {
    type: String,
    default: "ri:loader-5-line",
  },
  loading: Boolean,
  disabled: Boolean,
  split: Boolean,
  label: String,
  icon: String,
};
