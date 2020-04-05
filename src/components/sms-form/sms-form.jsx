import React from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import { useVerification } from '../../hooks/use-verification';
import { useUser } from '../../hooks/use-user';

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 4,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 4,
  },
};

export const SmsForm = ({ status }) => {
  const { dispatchVerificationCode } = useVerification();
  const { dispatchCleanUserStatus, user: { isLoading } } = useUser();

  const onSubmit = (data) => dispatchVerificationCode(data);
  const onClickBack = () => {
    dispatchCleanUserStatus();
  };

  return (
    <Form onFinish={onSubmit} {...layout}>
      <Form.Item
        label="Sms code"
        name="smsCode"
        rules={[{ required: true, message: 'Please input your sms code!' }]}
      >
        <Input />
      </Form.Item>
      {
      (status === 'denied')
        ? <p className="error">Your code is not correct</p>
        : null
      }
      <Form.Item {...tailLayout}>
        <Button htmlType="button" onClick={onClickBack}>
          Back
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

SmsForm.propTypes = {
  status: PropTypes.string.isRequired,
};
