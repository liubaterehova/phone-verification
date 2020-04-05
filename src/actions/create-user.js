import { createActions } from 'redux-actions';

export const {
  createUser,
  createUserSuccess,
  createUserFailure,
  verifyCode,
  cleanUserStatus,
} = createActions(
  'CREATE_USER',
  'CREATE_USER_SUCCESS',
  'CREATE_USER_FAILURE',
  'VERIFY_CODE',
  'CLEAN_USER_STATUS',
);
