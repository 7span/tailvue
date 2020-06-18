import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import values from "./prop-values";
import props from "./props";
import icons from "./../../story/icons";

export default {
  title: "Field",
  decorators: [withKnobs],
};

const fieldGroup = "Field";
const fieldIconGroup = "Field Icon";

export const Default = () => ({
  props: {
    label: {
      default: text("label", "Field", fieldGroup),
    },
    size: {
      default: select("size", values.size, props.size.default, fieldGroup),
    },
    color: {
      default: select("color", values.color, props.color.default, fieldGroup),
    },
    note: {
      default: text(
        "note",
        "Please make sure you provide valid email.",
        fieldGroup
      ),
    },
    loading: {
      default: boolean("loading", false, fieldGroup),
    },
    fieldIcon: {
      default: select("name", icons, "mi-vuejs", fieldIconGroup),
    },
  },
  template: `<tv-field v-bind="{${Object.keys(props)}}">
    <tv-field-icon :name="fieldIcon" />
    <tv-textbox/>
  </tv-field>`,
});
