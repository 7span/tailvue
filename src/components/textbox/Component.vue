<template>
  <div class="textbox flex items-stretch" :class="classList">
    <slot name="before"></slot>
    <input
      class="input bg-transparent w-full px-3"
      :type="type"
      :value="value"
      :name="$parent.name"
      @input="input($event)"
    />
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
      const classes = [
        this.radius,
        dc.bg_x_200[this.$parent.color],
        this.height
      ];
      return classes;
    }
  }
};
</script>
