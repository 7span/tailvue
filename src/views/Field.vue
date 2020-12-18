<template>
  <div class="p-8 grid grid-cols-5 gap-8">
    <!-- Sizes -->
    <props :values="size" #default="{value}">
      <tv-field label="Sizes">
        <tv-textbox :size="value" />
      </tv-field>
    </props>

    <!-- Shapes -->
    <props :values="shape" #default="{value}">
      <tv-field label="Shape">
        <tv-textbox size="md" :shape="value" />
      </tv-field>
    </props>
  </div>
</template>

<script>
import { size, shape } from "@/components/textbox/prop-values";

export default {
  data() {
    return {
      size,
      shape,
    };
  },
};
</script>
