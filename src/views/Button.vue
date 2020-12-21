<template>
  <div class="p-8 flex space-x-8">
    <!-- Colors -->
    <props :values="color" #default="{ value }">
      <tv-button
        class="capitalize"
        :color="value"
        theme="solid"
        :label="value || 'default'"
        size="md"
      />
    </props>

    <!-- Themes -->
    <props :values="theme" #default="{ value }">
      <tv-button
        class="capitalize"
        color="primary"
        :theme="value"
        :label="value || 'default'"
        size="md"
      />
    </props>

    <!-- Sizes -->
    <props :values="size" #default="{ value, }">
      <tv-button
        class="capitalize"
        icon="ph:aperture-duotone"
        color="primary"
        theme="solid"
        :label="`Size - ${value || 'default'}`"
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
    <div class="space-y-3 w-48">
      <tv-button
        shape="rounded"
        color="primary"
        theme="solid"
        label="Full Width"
        size="md"
        icon="ph:alarm-fill"
        class="w-full"
      />

      <tv-button
        shape="rounded"
        color="primary"
        theme="solid"
        label="Left"
        size="md"
        icon="ph:alarm-fill"
        align="left"
        class="w-full"
      />

      <tv-button
        shape="rounded"
        color="primary"
        theme="solid"
        label="Right"
        size="md"
        icon="ph:alarm-fill"
        align="right"
        class="w-full"
      />

      <tv-button
        shape="rounded"
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
        shape="rounded"
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
        shape="rounded"
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
