import { withKnobs, text } from "@storybook/addon-knobs";
import props from "./props";

export default {
  title: "tv-field-validate",
  decorators: [withKnobs],
};

export const Default = () => ({
  data() {
    return {
      value: null,
    };
  },
  props: {
    rules: {
      default: text("rules", "required|email"),
    },
  },
  template: `<tv-field-validate label="Email" v-bind="{${Object.keys(props)}}">
    <tv-textbox v-model="value"/>
  </tv-field-validate>`,
});
