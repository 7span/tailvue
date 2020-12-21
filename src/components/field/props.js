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
  messageIcon: String,
  successMessageIcon: {
    type: String,
    default: "ph:check-circle-duotone",
  },
  dangerMessageIcon: {
    type: String,
    default: "ph:warning-circle-duotone",
  },
  warningMessageIcon: {
    type: String,
    default: "ph:warning-duotone",
  },
};
