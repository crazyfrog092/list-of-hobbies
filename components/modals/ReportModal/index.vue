<template>
  <modal-box class="report-modal">
    <h2 class="report-modal__title">
      {{ $t('reportTitle') }}
    </h2>

    <div class="report-modal__value">
      "{{ options.value }}"
    </div>

    <textarea
      v-model="message"
      :placeholder="$t('enterText')"
      class="report-modal__textarea"
    />

    <button
      type="button"
      class="report-modal__button"
      :disabled="!message"
      @click="send"
    >
      {{ $t('sendReport') }}
    </button>
  </modal-box>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

interface IData {
  message: string,
}

export default Vue.extend({
  name: 'report-modal',

  data(): IData {
    return {
      message: '',
    };
  },

  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
    }),
  },

  methods: {
    ...mapActions({
      sendReport: 'main/sendReport',
      setAlert: 'alert/setAlert',
      closeModal: 'modals/closeModal',
    }),

    send(): void {
      try {
        this.sendReport({
          value: this.options.value,
          message: this.message,
        });
        this.closeModal();
      } catch (e) {
        this.setAlert({
          type: 'error',
          text: this.$t('error'),
        });
      }
    },
  },
});
</script>

<style scoped lang="scss">
.report-modal {
  width: 100%;
  max-width: 780px;
  margin: auto;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  background: var(--white);
  display: flex;

  &__title {
    margin-bottom: 16px;
    font-weight: 400;
  }

  &__value {
    margin-bottom: 12px;
  }

  &__textarea {
    resize: none;
    height: 210px;
    width: 100%;
    background: var(--white);
    border: 1px solid var(--grey);
    padding: 4px 8px;
    margin-bottom: 12px;
    ::placeholder {
      color: var(--grey);
    }
  }

  &__button {
    height: 48px;
    border-radius: 8px;
    background: var(--green);
    padding: 0 16px;
    &:disabled {
      cursor: default;
    }
  }
}
</style>
