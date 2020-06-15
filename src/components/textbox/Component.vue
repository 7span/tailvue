<template>
  <input
    class="input bg-transparent w-full px-3 h-full"
    type="text"
    :value="value"
    @input="input($event)"
  />
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
};
</script>
