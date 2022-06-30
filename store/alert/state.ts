import { AlertState } from './types';

export const state = (): AlertState => ({
  isShown: false,
  type: '',
  text: '',
});

export default state;
