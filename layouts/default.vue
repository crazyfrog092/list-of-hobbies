<template>
  <section class="default-layout">
    <nuxt />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'default-layout',
});
</script>

<style lang="scss" scoped>
.default-layout {
  background: var(--white);
  min-height: 100vh;
}
</style>
