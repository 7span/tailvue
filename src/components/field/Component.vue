<template>
  <div class="field">
    <label v-if="label" class="field__label"> {{ label }} </label>
    <div class="field__input">
      <slot />
    </div>
    <p class="field__note text-sm mt-1">{{ note }}</p>
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
