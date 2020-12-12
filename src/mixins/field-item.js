export default {
  inject: ["OPTIONS"],
  data() {
    return {
      radius: this.OPTIONS.field.radius,
      iconSizes: {
        xs: 14,
        sm: 18,
        md: 24,
        lg: 24,
        xl: 28,
      },
      heights: {
        xs: "h-6",
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
        xl: "h-16",
      },
      widths: {
        xs: "w-6",
        sm: "w-8",
        md: "w-10",
        lg: "w-12",
        xl: "w-16",
      },
    };
  },
  computed: {
    size() {
      return this.$parent.size;
    },
    width() {
      return this.widths[this.size];
    },
    height() {
      return this.heights[this.size];
    },
    iconSize() {
      return this.iconSizes[this.size];
    },
  },
};
