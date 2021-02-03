<template>
  <div class="choice" :class="classList">
    <slot />
  </div>
</template>

<script>
export default {
  props: require("./props").default,

  computed: {
    classList() {
      return [
        this.size && `choice--${this.size}`,
        this.theme && `choice--${this.theme}`,
        this.shape && `choice--${this.shape}`,
      ];
    },
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
