<template>
  <div class="media overflow-hidden align-top" :class="classList">
    <div class="media__wrapper" :class="wrapperClassList">
      <!-- View -->
      <img
        v-if="readonly && value"
        :class="imageClassList"
        :src="value"
        alt=""
      />

      <div v-else-if="readonly">
        <tv-icon name="vmdi-image" />
      </div>

      <!-- Select -->
      <div v-else class="media__select">
        <tv-icon name="vmdi-image-plus" />
        <input type="file" :accept="accept" @change="select($event)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: require("./props").default,
  computed: {
    classList() {
      const classes = [];
      if (this.ratio) {
        classes.push(...this.deviceClasses("w", this.w || "full"));
      }
      if (this.block) {
        classes.push(`flex`);
      } else {
        classes.push(`inline-flex`);
      }
      return classes;
    },
    wrapperClassList() {
      const classes = [`flex-grow`];
      if (this.ratio) {
        classes.push("relative", `ratio-${this.ratio}`);
      }
      //When ratio is defined, the inline-block does not work
      if (this.block || this.ratio) {
        classes.push(`flex`);
      } else {
        classes.push(`inline-flex`);
      }
      return classes;
    },
    imageClassList() {
      const classes = [];

      if (this.ratio) {
        classes.push("absolute", "top-0", "left-0", "h-full", "w-full");
      } else {
        if (this.h) {
          classes.push(...this.deviceClasses("h", this.h));
        }
        if (this.w) {
          classes.push(...this.deviceClasses("w", this.w));
        }
      }

      if (this.fit) {
        classes.push(`object-${this.fit}`);
      }
      if (this.position) {
        classes.push(`object-${this.position}`);
      }
      return classes;
    }
  }
};
</script>
