<template>
  <div class="demo p-8">
    <tv-field size="md" label="Email" note="Valid emails only please.">
      <tv-field-item icon="mi-vuejs" />
      <tv-textbox type="email" />
    </tv-field>

    <tv-button class="mt-8" color="primary" label="Submit" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
