import { withKnobs, select, number, text, color } from "@storybook/addon-knobs";
import props from "./props";

export default {
  title: "Icon",
  decorators: [withKnobs],
};

export const Default = () => ({
  props: {
    name: {
      default: select("Name", { None: null, VueJS: "mi-vuejs" }, "mi-vuejs"),
    },
    size: {
      default: number("Size", props.size.default),
    },
    title: {
      default: text("Title", props.title.default),
    },
    color: {
      default: color("Color", props.color.default),
    },
  },
  template: `<tv-icon v-bind="{${Object.keys(props)}}"/>`,
});
