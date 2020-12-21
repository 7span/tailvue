<template>
  <div class="icon" :class="{ 'icon--spin': spin }">
    <span class="iconify w-full h-full" :data-icon="name" data-inline="false" />
  </div>
</template>

<script>
export default {
  props: require("./props").default,
};
</script>

<style lang="scss">
@import "style.scss";
</style>
