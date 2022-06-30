<template>
  <section class="hobby-item">
    <div class="hobby-item__wrap">
      <base-button
        v-if="isMyHobbies"
        icon="close"
        class="hobby-item__left-btn"
        @click="$emit('delete')"
      />

      <base-button
        v-if="!isMyHobbies"
        icon="add"
        class="hobby-item__left-btn"
        @click="$emit('add')"
      />

      <div
        :title="value"
        class="hobby-item__text"
      >
        {{ value }}
      </div>
    </div>

    <base-button
      v-if="!isMyHobbies"
      icon="warning"
      :text="$t('report')"
      class="hobby-item__right-btn"
      @click="$emit('report')"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'hobby-item',

  props: {
    value: {
      type: String,
      required: true,
    },
    isMyHobbies: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.hobby-item {
  display: flex;
  align-items: center;
  overflow: hidden;

  &__wrap {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    &::after {
      content: '';
      position: absolute;
      width: 75px;
      height: 100%;
      top: 0;
      right: 0;
      background: linear-gradient(90deg, transparent, var(--white));
      cursor: text;
    }
  }

  &__left-btn {
    display: none !important;
    margin-right: 8px;
  }

  &__right-btn {
    display: none !important;
    margin-left: 8px;
  }
}

.hobby-item:hover {
  .hobby-item__left-btn {
    display: flex !important;
  }

  .hobby-item__right-btn {
    display: flex !important;
  }
}
</style>
