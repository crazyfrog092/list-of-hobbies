<template>
  <div
    v-if="isShown"
    class="modal-container"
    @mousedown.self="backgroundClick"
  >
    <component :is="key" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { Modals } from '~/store/modals/types';
import ReportModal from '~/components/modals/ReportModal/index.vue';

export default Vue.extend({
  name: 'modal-container',

  components: {
    [Modals.REPORT_MODAL]: ReportModal,
  },

  computed: {
    ...mapGetters({
      isShown: 'modals/getIsShown',
      key: 'modals/getKey',
    }),
  },

  methods: {
    ...mapActions({
      closeModal: 'modals/closeModal',
    }),

    backgroundClick(): void {
      this.closeModal();
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-container {
  padding: 16px;
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(#000000, .9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
