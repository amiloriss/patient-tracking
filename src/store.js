import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer/index';

// add thunk for work with async action
const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
