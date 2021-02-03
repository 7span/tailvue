import values from "./prop-values";

export default {
  type: {
    type: String,
    default: "text",
    validator: (value) => {
      return values.type.includes(value);
    },
  },
  value: [Number, String],
};
