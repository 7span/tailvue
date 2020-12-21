<template>
  <validation-provider
    ref="field"
    tag="div"
    class="field-validate"
    :rules="rules"
    :name="$attrs.label"
  >
    <template #default="validation">
      <tv-field
        v-bind="$attrs"
        :state="state(validation)"
        :message="message(validation)"
      >
        <slot :validation="validation" />
      </tv-field>
    </template>
  </validation-provider>
</template>

<script>
export default {
  inheritAttrs: false,
  props: require("./props").default,

  methods: {
    state(validation) {
      return validation.invalid && validation.dirty ? "danger" : null;
    },
    message(validation) {
      return validation.errors[0];
    },
  },
};
</script>
