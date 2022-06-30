import { GetterTree } from 'vuex';
import { MainState, MainGetters } from './types';

export const getters: GetterTree<MainState, MainState> & MainGetters = {
  getMyHobbies: (state) => state.myHobbies,
  getFriendHobbies: (state) => state.friendHobbies,
};

export default getters;
