<!-- 
Field Icons is a child of Field Item.
Hence all the field related config are taken from parent component.
-->
<template>
  <div class="field__icon flex justify-center items-center" :class="classList">
    <tv-icon :size="$parent.iconSize" :name="name" />
  </div>
</template>

<script>
export default {
  props: require("./props").default,
  computed: {
    classList() {
      return [this.$parent.width, this.$parent.height];
    }
  }
};
</script>
