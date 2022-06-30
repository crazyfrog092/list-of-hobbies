<template>
  <section class="hobby-card">
    <h2 class="hobby-card__title">
      {{ title }}
    </h2>

    <h3 class="hobby-card__subtitle">
      {{ $t('hobby') }}

      <div class="hobby-card__dotted" />
    </h3>

    <div class="hobby-card__list-wrap">
      <base-input
        v-if="isMyHobbies"
        v-model="input"
        :placeholder="$t('enterText')"
        class="hobby-card__input"
        @enter="createHobby"
      />

      <ListOfHobbies
        :items="hobbies"
        :is-my-hobbies="isMyHobbies"
        @delete="$emit('deleteHobby', $event)"
        @add="$emit('addHobby', $event)"
        @report="$emit('report', $event)"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import ListOfHobbies from '~/components/HobbyCard/ListOfHobbies/index.vue';

interface IData {
  input: string,
}

export default Vue.extend({
  name: 'hobby-card',

  components: {
    ListOfHobbies,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    isMyHobbies: {
      type: Boolean,
      default: false,
    },
    hobbies: {
      type: Array as () => Array<string>,
      default: () => [],
    },
  },

  data(): IData {
    return {
      input: '',
    };
  },

  methods: {
    createHobby(): void {
      if (this.input) {
        this.$emit('addHobby', this.input);
        this.input = '';
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.hobby-card {
  width: 100%;

  &__title {
    border-bottom: 1px solid var(--black);
    font-size: 25px;
    line-height: 45px;
    font-weight: 400;
    margin-bottom: 24px;
  }

  &__subtitle {
    font-size: 22px;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  &__dotted {
    width: 100%;
    border-bottom: 1px dotted var(--black);
    margin-left: 16px;
  }

  &__list-wrap {
    margin-left: 24px;
  }

  &__input {
    margin-bottom: 16px;
    max-width: 300px;
  }
}
</style>
