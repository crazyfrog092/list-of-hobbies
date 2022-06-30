<template>
  <section class="list-of-hobbies">
    <HobbyItem
      v-for="(item, i) in parsedItems"
      :key="i"
      :value="item"
      :is-my-hobbies="isMyHobbies"
      class="list-of-hobbies__item"
      @delete="$emit('delete', i)"
      @add="$emit('add', item)"
      @report="$emit('report', item)"
    />

    <div
      v-if="items.length > 2"
      class="list-of-hobbies__more"
      @click="isOpened = !isOpened"
    >
      {{ isOpened ? $t('lessHobbies') : $tc('moreHobbies', items.length - 2) }}
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import HobbyItem from '~/components/HobbyCard/ListOfHobbies/HobbyItem/index.vue';

interface IData {
  isOpened: boolean,
}

export default Vue.extend({
  name: 'list-of-hobbies',

  components: {
    HobbyItem,
  },

  props: {
    items: {
      type: Array as () => Array<string>,
      default: () => [],
    },
    isMyHobbies: {
      type: Boolean,
      default: false,
    },
  },

  data(): IData {
    return {
      isOpened: false,
    };
  },

  computed: {
    parsedItems(): Array<string> {
      if (!this.isOpened) {
        return this.items.slice(0, 2);
      }
      return this.items;
    },
  },
});
</script>

<style lang="scss" scoped>
.list-of-hobbies {
  display: grid;
  gap: 8px;

  &__more {
    color: var(--red);
    border-bottom: 1px solid var(--red);
    line-height: 1;
    width: fit-content;
    cursor: pointer;
  }
}
</style>
