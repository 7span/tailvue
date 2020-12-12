<template>
  <component v-bind="$attrs" :is="tag" class="button" :class="classList">
    <!-- Loading -->
    <tv-loader
      v-if="loading"
      :size="OPTIONS.field.iconSizes[size]"
      name="vmdi-loading"
      class="button__loader"
    />

    <!-- Icon -->
    <tv-icon
      v-if="icon"
      :size="OPTIONS.field.iconSizes[size]"
      :name="icon"
      class="button__icon"
      :class="iconClassList"
    />

    <!-- Label -->
    <span v-if="!square" class="button__label" :class="labelClassList">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>

<script>
import dc from "./classlist.js";

export default {
  name: "tv-button",
  inheritAttrs: false,
  props: require("./props").default,
  inject: ["OPTIONS"],
  computed: {
    classList() {
      const classes = [
        ...this.prop__full,
        ...this.prop__theme,
        ...this.prop__size,
        ...this.prop__shape,
        ...this.props__square,
        ...this.prop__align,
        ...this.prop__disabled,
      ];

      return classes;
    },

    labelClassList() {
      return this.loading ? ["opacity-0"] : [];
    },

    iconClassList() {
      const classes = [];
      if (this.loading) {
        classes.push("opacity-0");
      }
      if (!this.square) {
        const options = {
          center: ["mr-2"],
          left: ["mr-2"],
          right: ["ml-2"],
          "icon-right": ["ml-2"],
        };
        classes.push(...options[this.align]);
      }
      return classes;
    },

    prop__disabled() {
      if (this.disabled) {
        return ["cursor-not-allowed", "opacity-75"];
      } else {
        return ["cursor-pointer"];
      }
    },

    prop__align() {
      if (this.square) {
        return [];
      } else {
        const options = {
          center: ["justify-center"],
          left: ["justify-start"],
          right: ["justify-start", "flex-row-reverse"],
          "icon-right": ["flex-row-reverse", "justify-between"],
        };
        return options[this.align];
      }
    },

    prop__full() {
      const options = {
        true: ["flex", "w-full"],
        false: ["inline-flex"],
      };
      return options[String(this.full)];
    },

    prop__theme() {
      const color = this.color;
      let options;

      switch (color) {
        case "none":
          options = {
            solid: [],
            outline: [],
            muted: [],
            clearDark: [],
            clearLight: [],
          };
          break;

        case "black":
          options = {
            solid: ["text-white", "bg-black"],
            outline: ["border-2", "text-black", "border-black"],
            muted: [
              "bg-black",
              "text-black",
              "bg-opacity-25",
              "hover:bg-opacity-100",
              "hover:text-white",
            ],
            clearDark: [],
            clearLight: [],
          };
          break;
        case "white":
          options = {
            solid: ["text-black", "bg-white"],
            outline: ["border-2", "text-white", "border-white"],
            muted: [
              "bg-white",
              "text-white",
              "bg-opacity-25",
              "hover:bg-opacity-100",
              "hover:text-black",
            ],
            clearDark: [],
            clearLight: [],
          };
          break;
        default:
          options = {
            solid: [
              "text-white",
              dc.bg_x_500[color],
              dc.hover__bg_x_600[color],
            ],
            outline: [
              "border-2",
              dc.text_x_500[color],
              dc.border_x_400[color],
              dc.hover__bg_x_100[color],
            ],
            muted: [
              dc.bg_x_100[color],
              dc.text_x_500[color],
              dc.hover__text_x_700[color],
            ],
            clearLight: ["text-gray-300", dc.hover__text_x_500[color]],
            clearDark: ["text-gray-700", dc.hover__text_x_500[color]],
          };
      }

      return options[this.theme];
    },

    prop__shape() {
      const options = {
        rounded: ["rounded-md"],
        flat: [],
        pill: ["rounded-full"],
        circle: ["rounded-full"],
      };
      return options[this.shape];
    },

    props__square() {
      const classes = [];
      if (this.square) {
        classes.push("justify-center", this.OPTIONS.field.widths[this.size]);
      } else {
        const paddings = {
          xs: "px-3",
          sm: "px-4",
          md: "px-6",
          lg: "px-8",
          xl: "px-10",
        };
        classes.push(paddings[this.size]);
      }
      return classes;
    },

    prop__size() {
      const textSize = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-lg",
      };
      return [textSize[this.size], this.OPTIONS.field.heights[this.size]];
    },
  },
};
</script>

<style lang="scss">
.button {
  @apply inline-flex items-center select-none relative;
}

.button__loader {
  @apply absolute inset-0 m-auto;
}
</style>
