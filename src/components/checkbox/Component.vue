<template>
  <tv-choice v-bind="$attrs">
    <input
      class="checkbox"
      type="checkbox"
      :value="value"
      @input="input($event)"
    />
  </tv-choice>
</template>

<script>
export default {
  inheritAttrs: false,
  props: require("./props").default,
  methods: {
    input(e) {
      this.$emit("input", e.target.value, {
        value: e.target.value,
      });
    },
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
