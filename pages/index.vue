<template>
  <section class="index-page">
    <div class="index-page__cards">
      <HobbyCard
        is-my-hobbies
        :title="$t('aboutMe')"
        :hobbies="myHobbies"
        @addHobby="addHobby"
        @deleteHobby="deleteHobby"
      />

      <HobbyCard
        :title="$t('aboutFriend')"
        :hobbies="friendHobbies"
        @addHobby="addHobby"
        @report="openReportModal"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import HobbyCard from '~/components/HobbyCard/index.vue';
import { mapGetters, mapActions } from 'vuex';
import { Modals } from '~/store/modals/types';

export default Vue.extend({
  name: 'index-page',

  components: {
    HobbyCard,
  },

  computed: {
    ...mapGetters({
      myHobbies: 'main/getMyHobbies',
      friendHobbies: 'main/getFriendHobbies',
    }),
  },

  created(): void {
    try {
      this.fetchMyHobbies();
      this.fetchFriendHobbies();
    } catch (e) {
      this.setAlert({
        type: 'error',
        text: this.$t('error'),
      });
    }
  },

  methods: {
    ...mapActions({
      fetchMyHobbies: 'main/fetchMyHobbies',
      fetchFriendHobbies: 'main/fetchFriendHobbies',
      addMyHobby: 'main/addMyHobby',
      deleteMyHobby: 'main/deleteMyHobby',
      setAlert: 'alert/setAlert',
      openModal: 'modals/openModal',
    }),

    addHobby(value: string): void {
      if (!this.myHobbies.includes(value)) {
        try {
          this.addMyHobby(value);
          this.setAlert({
            type: 'added',
            text: value,
          });
        } catch (e) {
          this.setAlert({
            type: 'error',
            text: this.$t('error'),
          });
        }
      } else {
        this.setAlert({
          type: 'warning',
          text: `${value} ${this.$t('alreadyAdded')}`,
        });
      }
    },

    deleteHobby(value: number): void {
      try {
        this.deleteMyHobby(value);
      } catch (e) {
        this.setAlert({
          type: 'error',
          text: this.$t('error'),
        });
      }
    },

    openReportModal(value: string): void {
      this.openModal({
        key: Modals.REPORT_MODAL,
        options: { value },
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.index-page {
  width: 100%;

  &__cards {
    display: grid;
    gap: 32px;
  }
}
</style>
