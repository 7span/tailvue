<template>
  <div class="demo p-8">
    <tv-field
      rules="required|email"
      size="lg"
      label="Email"
      note="Valid emails only please."
      color="danger"
    >
      <tv-field-icon name="mi-vuejs" />
      <tv-textbox v-model="val" type="email" />
    </tv-field>

    <!-- VALIDATE -->
    <tv-field-validate
      rules="required"
      label="Test!"
      note="Please provide gmail only."
    >
      <tv-textbox v-model="val" type="email" />
    </tv-field-validate>
    <tv-button class="mt-8" color="primary" label="Submit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: null,
    };
  },
};
</script>
