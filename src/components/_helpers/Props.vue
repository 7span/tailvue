<template>
  <div class="space-y-2">
    <div v-for="(value, index) in v" :key="index">
      <p class="text-xs text-gray-500">{{ value }}</p>
      <slot :value="value" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    values: Array,
  },
  computed: {
    v() {
      return [null, ...this.values];
    },
  },
};
</script>
