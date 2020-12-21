<template>
  <div class="field" :class="classList">
    <!-- Label -->
    <label v-if="label" class="field__label">
      <slot name="label">
        <span>{{ label }}</span>
      </slot>
    </label>

    <!-- Field Input -->
    <div class="field__input">
      <slot />
    </div>

    <!-- Footer -->
    <div class="field__footer">
      <slot name="footer">
        <!-- Note -->
        <p v-if="note" class="field__note">{{ note }}</p>

        <!-- Message -->
        <p v-if="message" class="field__message">
          <slot name="message-icon">
            <tv-icon
              v-if="messageIconByStatus"
              class="field__message-icon"
              :name="messageIconByStatus"
              :key="messageIconByStatus"
            />
          </slot>
          <span>{{ message }}</span>
        </p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: require("./props").default,

  computed: {
    classList() {
      return [
        this.optional && `field--optional`,
        this.inline && `field--inline`,
        this.state && `field--${this.state}`,
      ];
    },

    messageIconByStatus() {
      if (this.messageIcon) {
        return this.messageIcon;
      } else if (this.state == "success") {
        return this.successMessageIcon;
      } else if (this.state == "warning") {
        return this.warningMessageIcon;
      } else if (this.state == "danger") {
        return this.dangerMessageIcon;
      } else {
        return null;
      }
    },
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
