<template>
  <span :style="iconStyle">
    <component
      class="icon"
      :is="name"
      :size="size"
      :fillColor="color"
      :title="title"
    />
  </span>
</template>

<script>
export default {
  props: require("./props").default,
  computed: {
    iconStyle() {
      return {
        width: this.size + "px",
        height: this.size + "px",
      };
    },
  },
};
</script>
