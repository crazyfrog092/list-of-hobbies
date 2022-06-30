import { MutationTree } from 'vuex';
import { MainMutationTypes, MainState, MainMutations } from './types';

export const mutations: MutationTree<MainState> & MainMutations = {
  [MainMutationTypes.SET_MY_HOBBIES](state, payload) {
    state.myHobbies = payload;
  },

  [MainMutationTypes.SET_FRIEND_HOBBIES](state, payload) {
    state.friendHobbies = payload;
  },
};

export default mutations;
