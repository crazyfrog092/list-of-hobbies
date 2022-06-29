import { MutationTree } from 'vuex';
import { MainMutationTypes, MainState, MainMutations } from './types';

export const mutations: MutationTree<MainState> & MainMutations = {
  [MainMutationTypes.SET_WINDOW_WIDTH](state, payload) {
    state.windowWidth = payload;
  },
};

export default mutations;
