import { Reducer } from 'react';
import { Action } from '../actions';
import { State } from '../models';
import { modalReducer } from './modal.reducer';

export const mainReducer: Reducer<State, Action> = ({ modal }, action) => {
  return {
    modal: modalReducer(modal, action),
  };
};
