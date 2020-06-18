<template>
  <div class="shimmer"></div>
</template>

<style lang="scss" scoped>
.shimmer {
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
  background: linear-gradient(
    to right,
    #edf2f7 5%,
    #cbd5e0 50%,
    #edf2f7 95%
  ); //TODO: Storybook Rule. Should be removed once CSS is rendered in Storybook
  background: linear-gradient(
    to right,
    theme("colors.gray.200") 5%,
    theme("colors.gray.400") 50%,
    theme("colors.gray.200") 95%
  );
  background-size: 1200px 100%;
  width: 100%;
  position: relative;
}
@keyframes shimmer {
  0% {
    background-position: -1200px 0;
  }

  100% {
    background-position: 1200px 0;
  }
}
</style>
