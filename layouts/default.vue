<template>
  <section class="default-layout">
    <CustomAlert v-if="isShown" />
    <ModalContainer />
    <nuxt />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import CustomAlert from '~/components/CustomAlert/index.vue';
import ModalContainer from '~/components/ModalContainer/index.vue';

export default Vue.extend({
  name: 'default-layout',

  components: {
    CustomAlert,
    ModalContainer,
  },

  computed: {
    ...mapGetters({
      isShown: 'alert/getIsShown',
    }),
  },
});
</script>

<style lang="scss" scoped>
.default-layout {
  @include container;
  background: var(--white);
  min-height: 100vh;
  padding-top: 32px;
  padding-bottom: 32px;
  position: relative;
}
</style>
