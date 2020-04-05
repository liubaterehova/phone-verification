import React from 'react';
import { Card } from 'antd';
import { Redirect } from 'react-router';

import { useUser } from '../../hooks/use-user';

import './home.scss';

export const Home = () => {
  const { user: { status } } = useUser();

  return status === 'approved'
    ? (
      <div className="site-card-border-less-wrapper">
        <Card title="Success">
          <p>You have successfully registered</p>
          <p>Good Luck</p>
        </Card>
      </div>
    ) : <Redirect to="/registration" />;
};
