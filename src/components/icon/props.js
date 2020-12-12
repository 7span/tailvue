export default {
  name: {
    type: String,
    required: true,
  },
  title: String,
  size: {
    type: [Number, String],
    default: 24,
  },
  color: {
    type: String,
    default: "currentColor",
  },
};
