import { ModalActionType } from './modal.action';

export interface Action {
  type: ActionType;
  payload?: any;
}

export type ActionType = ModalActionType;
