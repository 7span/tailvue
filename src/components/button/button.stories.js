import {
  withKnobs,
  select,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import values from "./prop-values";
import props from "./props";
import icons from "./../../story/icons";
export default {
  title: "Button",
  decorators: [withKnobs],
};

export const Default = () => ({
  props: {
    label: {
      default: text("label", "Hello Storybook"),
    },
    theme: {
      default: select("theme", values.theme, props.theme.default),
    },
    color: {
      default: select("color", values.color, props.color.default),
    },
    size: {
      default: select("size", values.size, props.size.default),
    },
    shape: {
      default: select("Shape", values.shape, props.shape.default),
    },
    full: {
      default: boolean("full", false),
    },
    icon: {
      default: select("icon", icons, "mi-vuejs"),
    },
    loading: {
      default: boolean("loading", false),
    },
    square: {
      default: boolean("square", false),
    },
    align: {
      default: options("align", values.align, props.align.default, {
        display: "radio",
      }),
    },
    disabled: {
      default: boolean("disabled", false),
    },
  },
  template: `<tv-button v-bind="{${Object.keys(props)}}"/>`,
});
