<template>
  <tv-button :tag="tag" v-bind="$attrs" :to="to" :href="href" />
</template>

<script>
export default {
  inheritAttrs: false,
  props: require("./props").default,

  computed: {
    tag() {
      if (this.href) {
        return "a";
      } else if (this.to) {
        return "router-link";
      } else {
        return null;
      }
    }
  }
};
</script>
