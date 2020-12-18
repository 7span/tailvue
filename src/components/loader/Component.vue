<template>
  <tv-icon :size="size" name="vmdi-loading" class="loading" />
</template>

<script>
export default {
  props: require("./props").default,
};
</script>

<style lang="scss">
.loading {
  animation-name: loading;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 1s;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
