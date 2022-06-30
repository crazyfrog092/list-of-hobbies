<template>
  <section class="modal-box">
    <div class="modal-box__container">
      <slot />
    </div>

    <base-button
      class="modal-box__close"
      icon="close"
      @click="closeModal"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'modal-box',

  methods: {
    ...mapActions({
      closeModal: 'modals/closeModal',
    }),
  },
});
</script>

<style lang="scss" scoped>
.modal-box {
  width: 100%;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: var(--white);

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  &__container {
    width: 100%;
    padding: 16px;
  }
}
</style>
