<template>
  <div class="field" ref="field">
    <label class="field__label mb-1 inline-block" :class="labelClassList">
      {{ label }}
    </label>
    <div class="field__set flex rounded-md" :class="setClassList">
      <slot></slot>
    </div>
    <p class="field__note text-sm mt-1" :class="noteClassList">{{ note }}</p>
  </div>
</template>

<script>
export default {
  props: require("./props").default,
  inject: ["OPTIONS"],
  provide() {
    return {
      FIELD: {
        size: this.fieldSize,
        color: this.fieldColor,
      },
    };
  },
  computed: {
    setClassList() {
      const classes = [`bg-${this.fieldColor}-200`, `h-${this.fieldSize}`];
      return classes;
    },

    noteClassList() {
      const classes = [];
      classes.push(`text-${this.fieldColor}-600`);
      return classes;
    },

    labelClassList() {
      const labelSizes = this.OPTIONS.fieldLabelSizes;
      const labelSize = labelSizes[this.size];
      return [`text-${labelSize}`];
    },

    fieldColor() {
      return this.OPTIONS.colors[this.color];
    },

    fieldSize() {
      const sizes = this.OPTIONS.fieldSizes;
      return sizes[this.size];
    },
  },
};
</script>
