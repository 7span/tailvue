import values from "./prop-values";

export default {
  value: {
    type: [String, Number],
  },
  type: {
    type: String,
    default: "text",
    validator: (value) => {
      return values.type.includes(value);
    },
  },
};
