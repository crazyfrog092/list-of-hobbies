import { GetterTree } from 'vuex';
import { AlertState, AlertGetters } from './types';

export const getters: GetterTree<AlertState, AlertState> & AlertGetters = {
  getIsShown: (state) => state.isShown,
  getType: (state) => state.type,
  getText: (state) => state.text,
};

export default getters;
