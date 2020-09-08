import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import initialState from './initial_state';
import serviceReducer from '../reducers';
import { createMiddleware } from './middleware';

/**
 *
 * preloadedState - Any preloaded state to be applied to the store after it is initially configured.
 * appReducer - An object containing any app-specific reducer functions that the client needs.
 */

const windowAny = window as any;

export default function configureServiceStore(preloadedState: any, appReducer: any) {
  const baseState = Object.assign({}, initialState, preloadedState);
  // test

  const composeEnhancers = windowAny.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = createMiddleware()
  
  const store = createStore(
    combineReducers({ ...serviceReducer, ...appReducer }),
    baseState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
}
