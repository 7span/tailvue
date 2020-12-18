<template>
  <div class="textbox" :class="classList">
    <slot name="before"></slot>
    <input
      class="textbox__input"
      :type="type"
      :value="value"
      :name="$parent.name"
      @input="input($event)"
    />
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  props: require("./props").default,
  methods: {
    input(e) {
      this.$emit("input", e.target.value, {
        value: e.target.value,
      });
    },
  },

  computed: {
    classList() {
      return [
        this.size && `textbox--${this.size}`,
        this.shape && `textbox--${this.shape}`,
      ];
    },
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
