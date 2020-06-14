<template>
  <component
    v-bind="$attrs"
    :is="tag"
    class="button items-center select-none relative"
    :class="classList"
  >
    <!-- Loading -->
    <tv-icon
      v-if="loading"
      :size="OPTIONS.fieldIconSizes[size]"
      name="mi-loading"
      class="button__loading absolute loading inset-0 m-auto"
    />

    <!-- Icon -->
    <tv-icon
      v-if="icon"
      :size="OPTIONS.fieldIconSizes[size]"
      :name="icon"
      class="button__icon"
      :class="iconClassList"
    />

    <!-- Label -->
    <span v-if="!square" class="button__label" :class="labelClassList">
      <slot>
        {{ label }}
      </slot>
    </span>
  </component>
</template>

<script>
export default {
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
        ...this.props__disabled,
      ];

      return classes;
    },

    labelClassList() {
      return [this.loading ? "opacity-0" : null];
    },

    iconClassList() {
      const classes = [];
      if (this.loading) classes.push("opacity-0");
      if (!this.square) {
        const options = {
          "": ["mr-2"],
          left: ["mr-2"],
          right: ["ml-2"],
          "icon-right": ["ml-2"],
        };
        classes.push(...options[this.align]);
      }
      return classes;
    },

    props__disabled() {
      const options = {
        true: ["cursor-not-allowed", "opacity-75"],
        false: ["cursor-pointer"],
      };
      return options[String(this.disabled)];
    },

    prop__align() {
      if (this.square) return [];
      const options = {
        "": ["justify-center"],
        left: ["justify-start"],
        right: ["justify-start", "flex-row-reverse"],
        "icon-right": ["flex-row-reverse", "justify-between"],
      };
      return options[this.align];
    },

    prop__full() {
      const options = {
        true: ["flex", "w-full"],
        false: ["inline-flex"],
      };
      return options[String(this.full)];
    },

    prop__theme() {
      const color = this.OPTIONS.colors[this.color];
      let options;

      switch (color) {
        case null:
        case undefined:
        case "":
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
            solid: [`text-white`, `bg-black`],
            outline: [`border-2`, `text-black`, `border-black`],
            muted: [
              `bg-black`,
              `text-black`,
              `bg-opacity-25`,
              `hover:bg-opacity-100`,
              `hover:text-white`,
            ],
            clearDark: [],
            clearLight: [],
          };
          break;
        case "white":
          options = {
            solid: [`text-black`, `bg-white`],
            outline: [`border-2`, `text-white`, `border-white`],
            muted: [
              `bg-white`,
              `text-white`,
              `bg-opacity-25`,
              `hover:bg-opacity-100`,
              `hover:text-black`,
            ],
            clearDark: [],
            clearLight: [],
          };
          break;
        default:
          options = {
            solid: [`text-white`, `bg-${color}-500`, `hover:bg-${color}-600`],
            outline: [
              `border-2`,
              `text-${color}-500`,
              `border-${color}-400`,
              `hover:bg-${color}-100`,
            ],
            muted: [
              `bg-${color}-100`,
              `text-${color}-500`,
              `hover:text-${color}-700`,
            ],
            clearLight: [`text-gray-300`, `hover:text-${color}-500`],
            clearDark: [`text-gray-700`, `hover:text-${color}-500`],
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
      const sizes = this.OPTIONS.fieldSizes;
      const options = {
        true: {
          xs: [`w-${sizes.xs}`],
          sm: [`w-${sizes.sm}`],
          md: [`w-${sizes.md}`],
          lg: [`w-${sizes.lg}`],
          xl: [`w-${sizes.xl}`],
        },
        false: {
          xs: ["px-3"],
          sm: ["px-4"],
          md: ["px-6"],
          lg: ["px-8"],
          xl: ["px-10"],
        },
      };

      const classes = options[String(this.square)][this.size];
      if (this.square) classes.push("justify-center");
      return classes;
    },

    prop__size() {
      const sizes = this.OPTIONS.fieldSizes;
      const options = {
        xs: ["text-xs", `h-${sizes.xs}`],
        sm: ["text-sm", `h-${sizes.sm}`],
        md: ["text-md", `h-${sizes.md}`],
        lg: ["text-lg", `h-${sizes.lg}`],
        xl: ["text-lg", `h-${sizes.xl}`],
      };

      return options[this.size];
    },
  },
};
</script>
