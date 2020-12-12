<template>
  <div class="select flex items-stretch" :class="classList">
    <slot name="before"></slot>
    <div class="h-100 select__input relative flex justify-end flex-grow">
      <select
        class=" absolute inset-0 bg-transparent w-full px-3 appearance-none z-10"
      >
        <option
          v-for="(option, index) in options"
          :key="`option-${index}`"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <div
        class="select__arrow flex items-center justify-center"
        :class="arrowClassList"
      >
        <tv-icon :size="24" name="vmdi-chevron-down" />
      </div>
    </div>
    <slot name="after"></slot>
  </div>
</template>

<script>
import fieldItem from "../../mixins/field-item";
import dc from "../field/classlist";

export default {
  props: require("./props").default,
  mixins: [fieldItem],
  methods: {
    input(e) {
      this.$emit("input", e.target.value, {
        value: e.target.value
      });
    }
  },
  computed: {
    classList() {
      return [
        this.heights[this.$parent.size],
        this.radius,
        dc.bg_x_200[this.$parent.color]
      ];
    },
    arrowClassList() {
      return [this.widths[this.$parent.size]];
    }
  }
};
</script>
