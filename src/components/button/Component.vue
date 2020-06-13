<template>
  <button
    class="button items-center select-none cursor-pointer relative"
    :class="classList"
  >
    <!-- Loading -->
    <tv-icon
      v-if="loading"
      :size="iconSizes[size]"
      name="mi-loading"
      class="button__loading absolute loading inset-0 m-auto"
    />

    <!-- Icon -->
    <tv-icon
      v-if="icon"
      :size="iconSizes[size]"
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
  </button>
</template>

<script>
export default {
  name: "tv-button",
  props: require("./props").default,
  inject: ["OPTIONS"],

  data() {
    return {
      iconSizes: {
        xs: 14,
        sm: 18,
        md: 24,
        lg: 28,
        xl: 32,
      },
    };
  },
  computed: {
    classList() {
      const classes = [
        ...this.prop__full,
        ...this.prop__theme,
        ...this.prop__size,
        ...this.prop__shape,
        ...this.props__square,
        ...this.prop__align,
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
      const options = {
        true: {
          xs: ["w-6"],
          sm: ["w-8"],
          md: ["w-10"],
          lg: ["w-12"],
          xl: ["w-16"],
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
      const options = {
        xs: ["text-xs", "h-6"],
        sm: ["text-sm", "h-8"],
        md: ["text-md", "h-10"],
        lg: ["text-lg", "h-12"],
        xl: ["text-lg", "h-16"],
      };

      return options[this.size];
    },
  },
};
</script>
