export default {
  name: {
    type: String,
    required: true,
  },
  title: String,
  size: {
    type: Number,
    default: 24,
  },
  color: {
    type: String,
    default: "currentColor",
  },
};
