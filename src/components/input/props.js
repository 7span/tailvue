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
  shape: {
    type: String,
    validator: (value) => {
      return values.shape.includes(value);
    },
  },
  theme: {
    type: String,
    validator: (value) => {
      return values.theme.includes(value);
    },
  },

  before: String,
  after: String,
  beforeIcon: String,
  afterIcon: String,
};
