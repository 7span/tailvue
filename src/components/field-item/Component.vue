<template>
  <div class="field-item flex justify-center items-center" :class="classList">
    <slot>
      <tv-icon
        :size="OPTIONS.fieldIconSizes[size]"
        :class="iconClassList"
        v-if="icon"
        :name="icon"
      />
    </slot>
  </div>
</template>

<script>
export default {
  props: require("./props").default,
  inject: ["OPTIONS"],
  computed: {
    classList() {
      const classes = [];
      if (this.icon) classes.push(...this.prop__size);
      return classes;
    },
    iconClassList() {
      return [`text-${this.fieldColor}-600`];
    },
    size() {
      return this.$parent.size;
    },
    fieldColor() {
      return this.$parent.fieldColor;
    },
    prop__size() {
      const sizes = this.OPTIONS.fieldSizes;
      const size = sizes[this.size];
      return [`w-${size}`];
    },
  },
};
</script>
