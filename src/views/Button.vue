<template>
  <div class="p-8 grid grid-cols-5">
    <!-- Colors -->
    <props :values="color" #default="{ value }">
      <tv-button :color="value" theme="solid" label="Hello" size="md" />
    </props>

    <!-- Themes -->
    <props :values="theme" #default="{ value }">
      <tv-button color="primary" :theme="value" label="Hello" size="md" />
    </props>

    <!-- Sizes -->
    <props :values="size" #default="{ value }">
      <tv-button
        icon="ph:aperture-duotone"
        color="primary"
        theme="solid"
        label="Hello"
        shape="rounded"
        :size="value"
      />
    </props>

    <!-- Shapes -->
    <props :values="shape" #default="{ value }">
      <tv-button
        color="primary"
        theme="solid"
        :shape="value"
        label="Hello"
        size="md"
        icon="ph:alarm-fill"
      />
    </props>

    <!-- Fluid -->
    <div class="space-y-3">
      <tv-button
        color="primary"
        theme="solid"
        label="Full Width"
        size="md"
        icon="ph:alarm-fill"
        class="w-full"
      />

      <tv-button
        color="primary"
        theme="solid"
        label="Left"
        size="md"
        icon="ph:alarm-fill"
        align="left"
        class="w-full"
      />

      <tv-button
        color="primary"
        theme="solid"
        label="Right"
        size="md"
        icon="ph:alarm-fill"
        align="right"
        class="w-full"
      />

      <tv-button
        color="primary"
        theme="solid"
        label="Right"
        size="md"
        icon="ph:alarm-fill"
        align="right"
        class="w-full"
        split
      />

      <tv-button
        color="primary"
        theme="solid"
        label="Right"
        size="md"
        icon="ph:alarm-fill"
        align="left"
        class="w-full"
        split
      />

      <tv-button
        color="primary"
        theme="solid"
        label="Loading"
        size="md"
        icon="ph:alarm-fill"
        loading
      />
    </div>
  </div>
</template>

<script>
import { size, color, theme, shape } from "@/components/button/prop-values";

export default {
  data() {
    return {
      size,
      color,
      theme,
      shape,
    };
  },
};
</script>
