import { ActionTree } from 'vuex';
import { myHobbies, friendHobbies } from '~/utils/mocks';
import { MainMutationTypes, MainState, MainActions } from './types';

export const actions: ActionTree<MainState, MainState> & MainActions = {
  fetchMyHobbies({ commit }) {
    commit(MainMutationTypes.SET_MY_HOBBIES, [...myHobbies]);
  },

  fetchFriendHobbies({ commit }) {
    commit(MainMutationTypes.SET_FRIEND_HOBBIES, [...friendHobbies]);
  },

  addMyHobby({ dispatch }, payload) {
    myHobbies.unshift(payload);
    dispatch('fetchMyHobbies');
  },

  deleteMyHobby({ dispatch }, payload) {
    myHobbies.splice(payload, 1);
    dispatch('fetchMyHobbies');
  },

  sendReport(_, payload) {
    console.log(payload);
    throw (payload); // just for example
  },
};

export default actions;
