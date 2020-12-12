import { withKnobs, text } from "@storybook/addon-knobs";
import props from "./props";

export default {
  title: "tv-link",
  decorators: [withKnobs],
};

export const Default = () => ({
  props: {
    to: {
      default: text("to", "/home"),
    },
    href: {
      text: text("href"),
    },
  },
  template: `<tv-link label="Link" v-bind="{${Object.keys(props)}}"/>`,
});
