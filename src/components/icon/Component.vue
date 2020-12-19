<template>
  <div class="icon">
    <span class="iconify w-full h-full" :data-icon="name" data-inline="false" />
  </div>
</template>

<script>
export default {
  props: require("./props").default,
};
</script>
