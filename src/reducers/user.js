import { handleActions } from 'redux-actions';

import {
  createUser, createUserSuccess, createUserFailure, cleanUserStatus, verifyCode,
} from '../actions/create-user';

const defaultState = {
  phoneNumber: '', isLoading: false, error: null, status: '',
};

export const user = handleActions(
  {
    [createUser]: (state, { payload: { phoneNumber } }) =>
      ({
        ...state, phoneNumber, isLoading: true,
      }),
    [verifyCode]: (state) =>
      ({
        ...state, isLoading: true,
      }),
    [createUserSuccess]: (state, { payload: { status } }) =>
      ({
        ...state, status, isLoading: false,
      }),
    [createUserFailure]: (state, { payload: { error } }) =>
      ({
        ...state, error, isLoading: false,
      }),
    [cleanUserStatus]: (state) =>
      ({
        ...state,
        status: null,
        error: null,
        isLoading: false,
        phoneNumber: '',
      }),
  }, defaultState,
);
