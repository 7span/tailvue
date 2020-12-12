export default {
  value: {
    type: String,
  },
  ratio: {
    type: [String, Object],
  },
  fit: {
    type: [String, Object],
    default: "contain",
  },
  position: {
    type: [String, Object],
    default: "center",
  },
  readonly: {
    type: Boolean,
  },
};
