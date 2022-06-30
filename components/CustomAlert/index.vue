<template>
  <section
    :title="text"
    class="custom-alert"
  >
    <div :class="`custom-alert__text custom-alert__text_${type}`">
      {{ text }}
    </div>

    <div
      v-if="type === 'added'"
      class="custom-alert__added"
    >
      <span class="icon-ok" />
      {{ $t('hobbyAdded') }}
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

interface IData {
  timer: ReturnType<typeof setTimeout> | undefined,
}

export default Vue.extend({
  name: 'custom-alert',

  data(): IData {
    return {
      timer: undefined,
    };
  },

  computed: {
    ...mapGetters({
      type: 'alert/getType',
      text: 'alert/getText',
      isShown: 'alert/getIsShown',
    }),
  },

  created(): void {
    this.setTimer();
  },

  methods: {
    ...mapActions({
      hideAlert: 'alert/hideAlert',
    }),

    setTimer(): void {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.hideAlert();
      }, 5000);
    },
  },
});
</script>

<style lang="scss" scoped>
.custom-alert {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 8px 16px;

  &__text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-right: 16px;
    &_warning {
      color: var(--yellow);
    }
    &_error {
      color: var(--red);
    }
  }

  &__added {
    display: flex;
    align-items: center;
    color: var(--green);
  }

  .icon-ok {
    margin-right: 8px;
    font-size: 18px;
  }
}
</style>
