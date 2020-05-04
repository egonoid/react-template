import React, { createContext, useContext, useReducer, Dispatch } from 'react';
import { State } from './models';
import { mainReducer } from './reducers';
import { Action } from './actions';

const getInitialState = (): State => ({
  modal: {
    type: 'NONE',
  },
});

export const StateContext = createContext<[State, Dispatch<Action>]>([
  getInitialState(),
  () => null,
]);

export const StateProvider: React.SFC = ({ children }) => {
  const initialState = getInitialState();

  return (
    <StateContext.Provider value={useReducer(mainReducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
