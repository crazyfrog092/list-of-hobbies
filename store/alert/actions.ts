import { ActionTree } from 'vuex';
import { AlertMutationTypes, AlertState, AlertActions } from './types';

export const actions: ActionTree<AlertState, AlertState> & AlertActions = {
  setAlert({ commit }, payload) {
    commit(AlertMutationTypes.SET_ALERT, {
      isShown: true,
      type: payload.type,
      text: payload.text,
    });
  },

  hideAlert({ commit }) {
    commit(AlertMutationTypes.SET_ALERT, {
      isShown: false,
      type: '',
      text: '',
    });
  },
};

export default actions;
