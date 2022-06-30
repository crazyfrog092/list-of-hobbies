import { ActionTree } from 'vuex';
import { ModalMutationTypes, ModalState, ModalActions } from './types';

export const actions: ActionTree<ModalState, ModalState> & ModalActions = {
  openModal({ commit }, { key, options }) {
    commit(ModalMutationTypes.SET_MODAL, {
      isShown: true,
      key,
      options: options || {},
    });
  },

  closeModal({ commit }) {
    commit(ModalMutationTypes.SET_MODAL, {
      isShown: false,
      key: '',
      options: {},
    });
  },
};

export default actions;
