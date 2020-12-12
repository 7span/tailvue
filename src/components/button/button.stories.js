import {
  withKnobs,
  select,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import values from "./prop-values";
import icons from "../../story/icons";
import props from "./props";

export default {
  title: "tv-button",
  decorators: [withKnobs],
};

export const Default = () => ({
  props: {
    label: { default: text("label", "Hello Storybook") },
    theme: {
      default: select("theme", values.theme, props.theme.default),
    },
    color: {
      default: select("color", values.color, props.color.default),
    },
    size: { default: select("size", values.size, props.size.default) },
    shape: {
      default: select("shape", values.shape, props.shape.default),
    },
    full: { default: boolean("full", false) },
    icon: { default: select("icon", icons, "vmdi-vuejs") },
    loading: { default: boolean("loading", false) },
    square: { default: boolean("square", false) },
    align: {
      default: options(
        "align",
        values.align.reduce((prev, curr) => {
          prev[curr] = curr;
          return prev;
        }, {}),
        props.align.default,
        {
          display: "radio",
        }
      ),
    },
    disabled: { default: props.disabled.default },
    tag: { default: props.tag.default },
    type: { default: props.type.default },
  },
  template: `<tv-button v-bind="{${Object.keys(props)}}"/>`,
});
