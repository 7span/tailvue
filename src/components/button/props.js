import values from "./prop-values";

export default {
  theme: {
    type: String,
    default: "solid",
    validator: (value) => {
      return values.theme.includes(value);
    },
  },
  color: {
    type: String,
    default: "primary",
    validator: (value) => {
      return values.color.includes(value);
    },
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => {
      return values.size.includes(value);
    },
  },
  shape: {
    type: String,
    default: "rounded",
    validator: (value) => {
      return values.shape.includes(value);
    },
  },
  full: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: "center",
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
  square: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: String,
  icon: String,
};
