<template>
  <tv-input v-bind="$attrs">
    <input class="textbox" :value="value" @input="input($event)" />
  </tv-input>
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
