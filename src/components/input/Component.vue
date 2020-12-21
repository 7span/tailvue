<template>
  <div class="input" :class="classList">
    <!-- Before Icon -->
    <div class="input__icon" v-if="beforeIcon || $scopedSlots.beforeIcon">
      <slot name="beforeIcon">
        <tv-icon v-if="beforeIcon" :name="beforeIcon" />
      </slot>
    </div>

    <!-- Before -->
    <div class="input__before" v-if="before || $scopedSlots.before">
      <slot name="before">
        <p v-if="before">{{ before }}</p>
      </slot>
    </div>

    <!-- Input -->
    <slot />

    <!-- After -->
    <div class="input__after" v-if="after || $scopedSlots.after">
      <slot name="after">
        <p v-if="after">{{ after }}</p>
      </slot>
    </div>

    <!-- After Icon -->
    <div class="input__icon" v-if="afterIcon || $scopedSlots.afterIcon">
      <slot name="afterIcon">
        <tv-icon v-if="afterIcon" :name="afterIcon" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: require("./props").default,

  computed: {
    classList() {
      return [
        this.size && `input--${this.size}`,
        this.shape && `input--${this.shape}`,
        this.theme && `input--${this.theme}`,
        this.beforeIcon && `input--before-icon`,
        this.afterIcon && `input--after-icon`,
      ];
    },
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
