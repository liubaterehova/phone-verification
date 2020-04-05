import { put, call, takeEvery } from 'redux-saga/effects';

import { verifyCode as verifyCodeAction, createUserSuccess, createUserFailure } from '../actions/create-user';
import { http } from '../api';
import { history } from '../history/history';

const BASE_VERIFY_CODE_URL = 'users/verification';

function loadUserCode(payload) {
  return http.post(BASE_VERIFY_CODE_URL, payload, {
    headers: {
      Accept: 'appliccation/json',
      'Content-Type': 'application/json',
    },
  });
}

function* verifyUser({ payload }) {
  try {
    const response = yield call(loadUserCode, payload);

    if (response.data) {
      yield put(
        createUserSuccess({ ...response.data }),
      );
      history.push('/');
    } else {
      yield put(createUserFailure({ error: 'INVALID_RESPONSE' }));
    }
  } catch (error) {
    if (!error.response) {
      yield put(createUserFailure({ error: 'CONNECTION_PROBLEMS' }));

      return;
    }

    if (error.response.status === 401) {
      yield put(createUserSuccess({ status: error.response.data.status }));
    } else {
      yield put(createUserFailure({ error: error.response.statusText }));
    }
  }
}

export const verifyUserSaga = takeEvery(verifyCodeAction, verifyUser);
