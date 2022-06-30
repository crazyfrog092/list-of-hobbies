import { MutationTree } from 'vuex';
import { AlertMutationTypes, AlertState, AlertMutations } from './types';

export const mutations: MutationTree<AlertState> & AlertMutations = {
  [AlertMutationTypes.SET_ALERT](state, { isShown, type, text }) {
    state.isShown = isShown;
    state.type = type;
    state.text = text;
  },
};

export default mutations;
