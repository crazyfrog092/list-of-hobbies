import { GetterTree } from 'vuex';
import { ModalState, ModalGetters } from './types';

export const getters: GetterTree<ModalState, ModalState> & ModalGetters = {
  getIsShown: (state) => state.isShown,
  getKey: (state) => state.key,
  getOptions: (state) => state.options,
};

export default getters;
