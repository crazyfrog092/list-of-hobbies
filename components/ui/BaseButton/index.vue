<template>
  <button
    :disabled="disabled"
    class="base-button"
    type="button"
    @click="$emit('click')"
  >
    <span :class="`icon-${icon}`" />
    <span
      v-if="text"
      class="base-button__text"
    >
      {{ text }}
    </span>
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
    text: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.base-button {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    cursor: default;
  }

  [class^="icon-"], [class*=" icon-"] {
    min-width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    margin-left: 8px;
    font-size: 14px;
    color: var(--grey);
  }
}
</style>
