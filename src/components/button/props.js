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
    default: "",
    validator: (value) => {
      return values.align.includes(value);
    },
  },
  label: String,
  icon: String,
  loading: Boolean,
  square: Boolean,
  type: {
    type: String,
    default: "button",
  },
};
