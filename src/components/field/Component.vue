<template>
  <div class="field" ref="field">
    <label
      v-if="label"
      class="field__label mb-1 inline-block"
      :class="labelClassList"
    >
      {{ label }}
    </label>
    <div class="field__input">
      <slot />
    </div>
    <p class="field__note text-sm mt-1" :class="noteClassList">{{ note }}</p>
  </div>
</template>

<script>
import dc from "./classlist";

export default {
  props: require("./props").default,
  computed: {
    noteClassList() {
      return [dc.text_x_600[this.color]];
    },

    labelClassList() {
      const labelSizes = {
        sm: "text-sm",
        md: "text-md",
        lg: "text-md",
      };
      return [labelSizes[this.size]];
    },
  },
};
</script>
