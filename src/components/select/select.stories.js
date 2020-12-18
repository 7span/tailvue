import { withKnobs, object } from "@storybook/addon-knobs";
import props from "./props";
export default {
  title: "tv-select",
  decorators: [withKnobs]
};

export const Default = () => ({
  props: {
    options: {
      default: object("options", [
        {
          label: "Hi",
          value: "hi"
        },
        {
          label: "Hello",
          value: "hello"
        }
      ])
    }
  },
  template: `
  <tv-field label="Select">
    <tv-select :options="options">
      <template #before>
        <tv-field-icon size="md" name="vmdi-vuejs"/>
      </template>
    </tv-select>
  </tv-field>
  `
});
