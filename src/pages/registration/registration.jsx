import React from 'react';

import { PhoneForm } from '../../components/phone-form/phone-form';
import { SmsForm } from '../../components/sms-form/sms-form';
import { useUser } from '../../hooks/use-user';
import { ErrorRegistration } from '../../components/error-registration/error-registration';

import './registration.scss';

export const Registration = () => {
  const { user: { status, error }, dispatchCleanUserStatus } = useUser();

  if (error) {
    return <ErrorRegistration error={error} onClickBack={dispatchCleanUserStatus} />;
  }

  if (!status) return <PhoneForm />;

  return <SmsForm status={status} />;
};
