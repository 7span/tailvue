import values from "./prop-values";

export default {
  value: {
    type: [String, Number],
  },
  size: {
    type: String,
    validator: (value) => {
      return values.size.includes(value);
    },
  },
  shape: String,
  theme: {
    type: String,
    validator: (value) => {
      return values.theme.includes(value);
    },
  },
};
