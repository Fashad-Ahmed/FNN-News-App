import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import promiseMiddleware from './middleware/ApiCalls';

const middleware = [promiseMiddleware, thunk];
// const middleware = [thunk];

// const middlewareEnhancer = applyMiddleware(...middleware);
// const composedEnhancers = compose(...middlewareEnhancer);

const reduxStore = createStore(rootReducer, applyMiddleware(...middleware));

// const reduxStore = createStore(rootReducer, [thunk]);
export default reduxStore;
