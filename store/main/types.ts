import { ActionContext } from 'vuex';

export enum MainMutationTypes {
  SET_WINDOW_WIDTH = 'SET_WINDOW_WIDTH',
}

export interface MainState {
  windowWidth: number,
}

export interface MainMutations<S = MainState> {
  [MainMutationTypes.SET_WINDOW_WIDTH](state: S, payload: number): void,
}

export type MainAugmentedActionContext = {
  commit<K extends keyof MainMutations>(
    key: K,
    payload: Parameters<MainMutations[K]>[1]
  ): ReturnType<MainMutations[K]>
} & Omit<ActionContext<MainState, MainState>, 'commit'>

export interface MainActions {
  setWindowWidth({ commit }: MainAugmentedActionContext, payload: number): void,
}

export interface MainGetters<S = MainState> {
  getWindowWidth(state: S): number,
}
