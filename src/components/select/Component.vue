<template>
  <div class="h-full w-full relative">
    <select
      class="absolute inset-0 w-full bg-transparent px-3 appearance-none z-10"
      :class="selectClassList"
    >
      <option
        v-for="(option, index) in options"
        :key="`option-${index}`"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <tv-field-icon class="absolute right-0" name="mi-chevron-down" />
  </div>
</template>

<script>
export default {
  props: require("./props").default,
  inject: ["FIELD"],
  methods: {
    input(e) {
      this.$emit("input", e.target.value, {
        value: e.target.value
      });
    }
  },
  computed: {
    selectClassList() {
      return [`pr-${this.FIELD.size}`];
    }
  }
};
</script>
