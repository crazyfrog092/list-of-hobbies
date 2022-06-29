<template>
  <button
    :disabled="disabled"
    class="base-button"
    type="button"
    @click="$emit('click')"
  >
    <span :class="`icon-${icon}`" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'base-button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.base-button {
  width: 56px;
  min-width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: $transition;
  background: transparent;
  &:disabled {
    cursor: default;
  }
}
</style>
