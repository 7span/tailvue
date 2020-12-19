<template>
  <div class="p-8 grid grid-cols-4 gap-8">
    <!-- Sizes -->
    <props :values="size" #default="{value}">
      <tv-field label="Sizes">
        <tv-textbox :size="value" />
      </tv-field>
    </props>

    <!-- Shapes -->
    <props :values="shape" #default="{value}">
      <tv-field label="Shape">
        <tv-textbox size="md" :shape="value" />
      </tv-field>
    </props>

    <!-- Theme -->
    <div class="space-y-5">
      <tv-field label="Outline">
        <tv-textbox size="md" theme="outline" />
      </tv-field>

      <tv-field label="Before Label" note="This is note. Please take care!">
        <tv-textbox size="md" shape="rounded">
          <template #before>Hello!</template>
        </tv-textbox>
      </tv-field>

      <tv-field label="Before Icon" optional error="This is error!">
        <tv-textbox size="md" before-icon="ph:at-duotone" />
      </tv-field>

      <tv-field label="After Icon">
        <tv-textbox size="md" after-icon="ph:at-duotone" />
      </tv-field>

      <tv-field label="Before Icon">
        <tv-textbox
          size="md"
          theme="outline"
          shape="pill"
          before-icon="ph:at-duotone"
        />
      </tv-field>

      <tv-field label="Status" note="This is inline form" inline>
        <tv-button
          color="primary"
          theme="muted"
          size="md"
          shape="squircle"
          icon="ph:archive-duotone"
        />
      </tv-field>

      <tv-field class="items-center" label="Status" inline>
        <tv-button
          color="primary"
          theme="muted"
          size="md"
          shape="squircle"
          icon="ph:archive-duotone"
        />
      </tv-field>

      <tv-field
        label="Before Icon"
        state="warning"
        note="Hey, this is info"
        message="This is error!"
      >
        <tv-textbox size="md" />
      </tv-field>
    </div>
  </div>
</template>

<script>
import { size, shape } from "@/components/textbox/prop-values";

export default {
  data() {
    return {
      size,
      shape,
    };
  },
};
</script>
