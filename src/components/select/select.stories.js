import { withKnobs, object } from "@storybook/addon-knobs";
import props from "./props";
export default {
  title: "Select",
  decorators: [withKnobs],
};

export const Default = () => ({
  props: {
    options: {
      default: object("options", [
        {
          label: "Hi",
          value: "hi",
        },
        {
          label: "Hello",
          value: "hello",
        },
      ]),
    },
  },
  template: `
  <tv-field label="Select">
    <tv-field-icon name="mi-vuejs"/>
    <tv-select :options="options"/>
  </tv-field>
  `,
});
