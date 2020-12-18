import { addons } from "@storybook/addons";
import tailvueTheme from "./tailvue-theme";

addons.setConfig({
  panelPosition: "right",
  selectedPanel: "Knobs",
  theme: tailvueTheme,
});
