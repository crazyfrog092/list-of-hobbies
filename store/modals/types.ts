import { ActionContext } from 'vuex';

export enum Modals {
  REPORT_MODAL = 'report-modal',
}

export enum ModalMutationTypes {
  SET_MODAL = 'SET_MODAL',
}

export interface ModalOptions {
  value?: string,
}

export interface ModalState {
  isShown: boolean,
  key: string,
  options: ModalOptions,
}

export interface ModalMutations<S = ModalState> {
  [ModalMutationTypes.SET_MODAL](state: S, payload: ModalState): void,
}

export interface ModalActions<S = ModalState> {
  openModal({ commit }: ActionContext<S, S>, payload: {
    key: string,
    options?: ModalOptions,
  }): void,
  closeModal({ commit }: ActionContext<S, S>): void,
}

export interface ModalGetters<S = ModalState> {
  getIsShown(state: S): boolean,
  getKey(state: S): string,
  getOptions(state: S): ModalOptions,
}
