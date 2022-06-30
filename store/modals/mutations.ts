import { MutationTree } from 'vuex';
import { ModalMutationTypes, ModalState, ModalMutations } from './types';

export const mutations: MutationTree<ModalState> & ModalMutations = {
  [ModalMutationTypes.SET_MODAL](state, { isShown, key, options }) {
    state.isShown = isShown;
    state.key = key;
    state.options = options;
  },
};

export default mutations;
