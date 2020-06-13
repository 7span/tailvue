<template>
  <div class="demo p-8">
    <section
      class="space-y-8"
      v-for="(component, componentName) in components"
      :key="componentName"
    >
      <!-- COMPONENT -->
      <h1 class="text-3xl">{{ startCase(componentName) }}</h1>
      <div
        class="props "
        v-for="(props, propName) in component"
        :key="propName"
      >
        <h3 class="text-xl">{{ startCase(propName) }}</h3>
        <div class="components flex space-x-4">
          <tv-button
            v-for="prop in props"
            :key="prop"
            icon="Menu"
            :label="startCase(prop)"
            v-bind="{ [propName]: prop }"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const button = require("./components/button/props").default;
import { startCase } from "lodash-es";
export default {
  data() {
    return {
      startCase,
      components: {
        button: {
          color: button.color.options,
          size: button.size.options,
          theme: button.theme.options,
          icon: ["Menu"],
          loading: [true],
          full: [true],
        },
      },
    };
  },
};
</script>
