import {
  withKnobs,
  select,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import values from "./prop-values";
import props from "./props";

export default {
  title: "Field",
  decorators: [withKnobs],
};

export const Default = () => ({
  props: {
    label: {
      default: text("label", "Field"),
    },
    size: {
      default: select("size", values.size, props.size.default),
    },
    color: {
      default: select("color", values.color, props.color.default),
    },
    note: {
      default: text("note", "Please make sure you provide valid email."),
    },
  },
  template: `<tv-field v-bind="{${Object.keys(props)}}">
    <tv-field-icon name="mi-vuejs" />
    <tv-textbox/>
  </tv-field>`,
});
