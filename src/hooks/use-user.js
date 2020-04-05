import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createUser, cleanUserStatus } from '../actions/create-user';

export const useUser = () => {
  const dispatch = useDispatch();
  const dispatchCreateUser = useCallback(({ phone }) => {
    dispatch(createUser({ phoneNumber: phone }));
  }, [dispatch]);
  const dispatchCleanUserStatus = useCallback(() => dispatch(cleanUserStatus()), [dispatch]);
  const user = useSelector(({ user: u }) => u);

  return {
    dispatchCreateUser, dispatchCleanUserStatus, user,
  };
};
