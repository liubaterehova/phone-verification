import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { verifyCode } from '../actions/create-user';

export const useVerification = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector(({ user: { phoneNumber: p } }) => p);
  const dispatchVerificationCode = useCallback(({ smsCode }) => {
    dispatch(verifyCode({ code: smsCode, phoneNumber }));
  }, [dispatch, phoneNumber]);

  return { dispatchVerificationCode };
};
