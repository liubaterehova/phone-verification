import { put, call, takeEvery } from 'redux-saga/effects';

import { createUser as createUserAction, createUserSuccess, createUserFailure } from '../actions/create-user';
import { http } from '../api';

const BASE_USER_URL = 'users';

function createUser(data) {
  return http.post(BASE_USER_URL, data, {
    headers: {
      Accept: 'appliccation/json',
      'Content-Type': 'application/json',
    },
  });
}

function* loadUser({ payload }) {
  try {
    const response = yield call(createUser, payload);

    if (response.data) {
      yield put(
        createUserSuccess({ status: response.data.status }),
      );
    } else {
      yield put(createUserFailure({ error: 'INVALID_RESPONSE' }));
    }
  } catch (error) {
    if (!error.response) {
      yield put(createUserFailure({ error: 'CONNECTION_PROBLEMS' }));

      return;
    }

    if (error.response.status === 400) {
      yield put(createUserFailure({ error: error.response.data.error }));

      return;
    }

    yield put(createUserFailure({ error: error.response.statusText }));
  }
}

export const loadUserSaga = takeEvery(createUserAction, loadUser);
