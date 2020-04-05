import React from 'react';
import { Form, Input, Button } from 'antd';

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

export const PhoneForm = () => {
  const [form] = Form.useForm();
  const { dispatchCreateUser, user: { isLoading } } = useUser();

  const onSubmit = values => {
    dispatchCreateUser(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onSubmit}
    >
      <Form.Item
        name="phone"
        label="Phone number"
        rules={[{
          required: true,
          message: 'Please input your phone!',
        },
        {
          pattern: /^\+[1-9]\d{1,14}$/,
          message: 'Invalid number',
        },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
