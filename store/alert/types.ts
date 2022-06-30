import { ActionContext } from 'vuex';

export enum AlertMutationTypes {
  SET_ALERT = 'SET_ALERT',
}

export type AlertTypes = 'warning' | 'error' | 'added' | ''

export interface AlertState {
  isShown: boolean,
  type: AlertTypes,
  text: string,
}

export interface AlertMutations<S = AlertState> {
  [AlertMutationTypes.SET_ALERT](state: S, payload: AlertState): void,
}

export interface AlertActions<S = AlertState> {
  setAlert({ commit }: ActionContext<S, S>, payload: AlertState): void,
  hideAlert({ commit }: ActionContext<S, S>): void,
}

export interface AlertGetters<S = AlertState> {
  getIsShown(state: S): boolean,
  getType(state: S): AlertTypes,
  getText(state: S): string,
}
