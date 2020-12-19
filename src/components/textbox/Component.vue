<template>
  <div class="textbox" :class="classList">
    <!-- Before Icon -->
    <div class="textbox__icon" v-if="beforeIcon || $scopedSlots.beforeIcon">
      <slot name="beforeIcon">
        <tv-icon v-if="beforeIcon" :name="beforeIcon" />
      </slot>
    </div>

    <!-- Before -->
    <div class="textbox__before" v-if="before || $scopedSlots.before">
      <slot name="before">
        <p v-if="before">{{ before }}</p>
      </slot>
    </div>

    <!-- Input -->
    <input
      class="textbox__input"
      :type="type"
      :value="value"
      :name="$parent.name"
      @input="input($event)"
    />

    <!-- After -->
    <div class="textbox__after" v-if="after || $scopedSlots.after">
      <slot name="after">
        <p v-if="after">{{ after }}</p>
      </slot>
    </div>

    <!-- After Icon -->
    <div class="textbox__icon" v-if="afterIcon || $scopedSlots.afterIcon">
      <slot name="afterIcon">
        <tv-icon v-if="afterIcon" :name="afterIcon" />
      </slot>
    </div>
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
        this.theme && `textbox--${this.theme}`,
        this.beforeIcon && `textbox--before-icon`,
        this.afterIcon && `textbox--after-icon`,
      ];
    },
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
