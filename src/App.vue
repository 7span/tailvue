<template>
  <div class="demo p-8">
    <tv-field label="Email" note="Valid emails only please." loading>
      <tv-field-icon name="mi-vuejs" />
      <tv-textbox v-model="val" type="email" />
    </tv-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: null
    };
  }
};
</script>
