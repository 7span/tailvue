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
  title: "Button",
  decorators: [withKnobs],
};

export const Default = () => ({
  props: {
    label: {
      default: text("Label", "Hello Storybook"),
    },
    theme: {
      default: select("Theme", values.theme, props.theme.default),
    },
    color: {
      default: select("Color", values.color, props.color.default),
    },
    size: {
      default: select("Size", values.size, props.size.default),
    },
    shape: {
      default: select("Shape", values.shape, props.shape.default),
    },
    full: {
      default: boolean("Full", false),
    },
    icon: {
      default: select("Icon", { None: null, VueJS: "mi-vuejs" }, "mi-vuejs"),
    },
    loading: {
      default: boolean("Loading", false),
    },
    square: {
      default: boolean("Square", false),
    },
    align: {
      default: options("Align", values.align, props.align.default, {
        display: "radio",
      }),
    },
    disabled: {
      default: boolean("Disabled", false),
    },
  },
  template: `<tv-button v-bind="{${Object.keys(props)}}"/>`,
});
