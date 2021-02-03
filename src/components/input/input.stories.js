import { withKnobs, text, select } from "@storybook/addon-knobs";
import props from "./props";
import values from "./prop-values";

export default {
  title: "tv-textbox",
  decorators: [withKnobs]
};

export const Default = () => ({
  props: {
    value: {
      default: text("value", "Hello!")
    },
    type: {
      default: select("type", values.type, props.type.default)
    }
  },
  template: `<tv-field >
    <tv-textbox v-bind="{${Object.keys(props)}}"/>
  </tv-field>`
});
