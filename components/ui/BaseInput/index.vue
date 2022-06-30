<template>
  <input
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :type="type"
    class="base-input"
    @input="input"
    @keyup.enter="$emit('enter')"
  >
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'base-input',

  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },

  methods: {
    input(event: Event): void {
      const { value } = (event.target as HTMLInputElement);
      switch (this.type) {
        case 'number':
          if (value.match(/^-?\d*\.?\d*$/)) this.$emit('input', value);
          break;
        default:
          this.$emit('input', value);
          break;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  background: var(--white);
  border: 1px solid var(--grey);
  padding: 4px 8px;
  ::placeholder {
    color: var(--grey);
  }
}
</style>
