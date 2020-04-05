import React from 'react';
import { Provider } from 'react-redux';
import {
  Switch,
  Route,
  Router,
} from 'react-router-dom';

import { history } from './history/history';
import { Registration } from './pages/registration/registration';
import { Home } from './pages/home/home';
import { store } from './store/store';

export const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/registration" component={Registration} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);
