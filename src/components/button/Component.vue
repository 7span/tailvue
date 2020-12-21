<template>
  <component
    v-bind="$attrs"
    :is="tag"
    class="button"
    :class="classList"
    :disabled="loading"
  >
    <!-- Icon -->
    <div v-if="icon" class="button__icon">
      <tv-icon :name="loading ? loadingIcon : icon" :spin="loading" />
    </div>

    <!-- Label -->
    <span class="button__label">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>

<script>
export default {
  name: "tv-button",
  inheritAttrs: false,
  props: require("./props").default,
  computed: {
    classList() {
      const classes = [
        this.color && `button--${this.color}`,
        this.theme && `button--${this.theme}`,
        this.size && `button--${this.size}`,
        this.shape && `button--${this.shape}`,
        this.align && `button--${this.align}`,
        this.split && `button--split`,
        this.loading && `button--loading`,
      ];
      return classes;
    },
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
