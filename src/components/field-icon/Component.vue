<template>
  <div class="field__icon flex justify-center items-center" :class="classList">
    <tv-icon :size="OPTIONS.fieldIconSizes[FIELD.size]" :name="name" />
  </div>
</template>

<script>
export default {
  props: require("./props").default,
  inject: ["OPTIONS", "FIELD"],
  computed: {
    classList() {
      const classes = [
        `w-${this.FIELD.sizeValue}`,
        `h-${this.FIELD.sizeValue}`,
        `text-${this.FIELD.color}-600`
      ];
      return classes;
    }
  }
};
</script>
