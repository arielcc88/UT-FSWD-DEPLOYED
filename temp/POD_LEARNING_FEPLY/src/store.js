import { createStore, applyMiddleware, compose } from 'redux';
import reducer, { initialState } from './reducer';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store