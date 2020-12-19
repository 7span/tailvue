<template>
  <div class="field" :class="classList">
    <label v-if="label" class="field__label">
      <span>{{ label }}</span>
    </label>
    <div class="field__input">
      <slot />
    </div>
    <div class="field__footer">
      <p v-if="note" class="field__note">{{ note }}</p>
      <p v-if="message" class="field__message">
        <tv-icon class="field__message-icon" name="ph:info-bold" />
        <span>{{ message }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: require("./props").default,

  computed: {
    classList() {
      return [
        this.optional && `field--optional`,
        this.inline && `field--inline`,
        this.state && `field--${this.state}`,
      ];
    },
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
