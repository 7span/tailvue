<template>
  <tv-input v-bind="$attrs">
    <select class="select">
      <slot>
        <!-- Option Group -->
        <template v-if="optionGroups">
          <optgroup
            v-for="(group, index) in finalOptionGroups"
            :key="`optgroup-${index}`"
            :label="group.label"
          >
            <p>{{ group }}</p>
            <option
              v-for="(option, index) in group.options"
              :key="`option-${index}`"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </optgroup>
        </template>

        <!-- Options -->
        <option
          v-else-if="options"
          v-for="(option, index) in finalOptions"
          :key="`option-${index}`"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </slot>
    </select>
  </tv-input>
</template>

<script>
export default {
  inheritAttrs: false,
  props: require("./props").default,

  computed: {
    finalOptions() {
      return this.optionMaker(this.options);
    },

    finalOptionGroups() {
      return this.optionGroups?.map((group) => {
        group.options = this.optionMaker(group.options);
        return group;
      });
    },
  },

  methods: {
    input(e) {
      this.$emit("input", e.target.value, {
        value: e.target.value,
      });
    },

    optionMaker(options) {
      return options?.map((option) => {
        if (typeof option != "object") {
          return {
            label: option,
            value: option,
          };
        } else {
          return option;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
