<template>
  <validation-provider
    ref="field"
    tag="div"
    class="field-validate"
    :rules="rules"
    :name="$attrs.label"
    v-slot="validation"
  >
    <tv-field v-bind="$attrs">
      <slot :validation="validation" />
    </tv-field>
    <p
      v-if="validation.errors.length > 0"
      class="field-validate__error text-sm mt-1"
      :class="errorClassList()"
    >
      {{ validation.errors[0] }}
    </p>
  </validation-provider>
</template>

<script>
export default {
  inheritAttrs: false,
  props: require("./props").default,
  inject: ["OPTIONS"],

  methods: {
    errorClassList() {
      const classes = [];
      const { invalid, dirty } = this.$refs.field?.flags || {};
      if (invalid && dirty) {
        classes.push("text-danger-600");
      }
      return classes;
    },
  },
};
</script>
