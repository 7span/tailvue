import values from "./prop-values";

export default {
  label: String,
  note: String,
  optional: Boolean,
  inline: Boolean,
  message: String,
  state: {
    type: String,
    validator: (value) => {
      return values.state.includes(value);
    },
  },
};
