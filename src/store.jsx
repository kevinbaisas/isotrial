
import { createStore, compose } from 'redux';

import createSagaMiddleware     from 'redux-saga';
import { routerMiddleware }     from 'react-router-redux';

import rootReducer              from './reducers';
import apply                    from './middlewares';

import userSaga                 from './modules/Home/sagas';

const initialize = (preloadedState = {}, history = null) => {

  /** Initiate middlewares */
  const sagaMiddleware  = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history);

  const middlewares = apply(
    sagaMiddleware,
    routeMiddleware
  );

  const enhancers = compose(middlewares);

  const store = createStore(rootReducer, preloadedState, enhancers);

  sagaMiddleware.run(userSaga);

  return store;
};

export default initialize
