import { all } from 'redux-saga/effects';

import { loadUserSaga } from './load-user';
import { verifyUserSaga } from './verify-user';

export function* rootSaga() {
  yield all(
    [
      loadUserSaga,
      verifyUserSaga,
    ],
  );
}
