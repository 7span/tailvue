import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import props from "./props";

export default {
  title: "tv-media",
  decorators: [withKnobs],
};

export const Default = () => ({
  props: {
    value: {
      default: text("value", "https://via.placeholder.com/150"),
    },
    ratio: {
      default: text("ratio", ""),
    },
    fit: {
      default: text("fit", ""),
    },
    position: {
      default: text("position", ""),
    },
    readonly: {
      default: boolean("readonly", true),
    },
  },
  template: `<tv-media v-bind="{${Object.keys(props)}}"/>`,
});
