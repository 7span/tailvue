<template>
  <div class="space-y-2">
    <div v-for="(value, index) in v" :key="index">
      <slot :value="value" :label="labels && labels[value]" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    values: Array,
    labels: Object,
  },
  computed: {
    v() {
      return [null, ...this.values];
    },
  },
};
</script>
