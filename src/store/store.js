import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

const enhancers = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(sagaMiddleware))
  : composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, defaultState, enhancers);
sagaMiddleware.run(rootSaga);
