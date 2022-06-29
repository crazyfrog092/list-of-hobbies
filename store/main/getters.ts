import { GetterTree } from 'vuex';
import { MainState, MainGetters } from './types';

export const getters: GetterTree<MainState, MainState> & MainGetters = {
  getWindowWidth: (state) => state.windowWidth,
};

export default getters;
