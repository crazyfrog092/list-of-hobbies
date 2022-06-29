import { ActionTree } from 'vuex';
import { MainMutationTypes, MainState, MainActions } from './types';

export const actions: ActionTree<MainState, MainState> & MainActions = {
  setWindowWidth({ commit }, payload) {
    commit(MainMutationTypes.SET_WINDOW_WIDTH, payload);
  },
};

export default actions;
