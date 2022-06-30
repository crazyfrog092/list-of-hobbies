import { ModalState } from './types';

export const state = (): ModalState => ({
  isShown: false,
  key: '',
  options: {},
});

export default state;
