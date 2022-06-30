import { ActionContext } from 'vuex';

export enum MainMutationTypes {
  SET_MY_HOBBIES = 'SET_MY_HOBBIES',
  SET_FRIEND_HOBBIES = 'SET_FRIEND_HOBBIES',
}

export interface MainState {
  myHobbies: Array<string>,
  friendHobbies: Array<string>,
}

export interface MainMutations<S = MainState> {
  [MainMutationTypes.SET_MY_HOBBIES](state: S, payload: Array<string>): void,
  [MainMutationTypes.SET_FRIEND_HOBBIES](state: S, payload: Array<string>): void,
}

export interface MainActions<S = MainState> {
  fetchMyHobbies({ commit }: ActionContext<S, S>): void,
  fetchFriendHobbies({ commit }: ActionContext<S, S>): void,
  addMyHobby({ dispatch }: ActionContext<S, S>, payload: string): void,
  deleteMyHobby({ dispatch }: ActionContext<S, S>, payload: number): void,
  sendReport(_: ActionContext<S, S>, payload: {
    value: string,
    message: string,
  }): void,
}

export interface MainGetters<S = MainState> {
  getMyHobbies(state: S): Array<string>,
  getFriendHobbies(state: S): Array<string>,
}
