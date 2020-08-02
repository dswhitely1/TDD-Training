import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from './reducers';
const middleware = [thunk];
const enhancers = applyMiddleware(...middleware);

const store = createStore(rootReducer,composeWithDevTools(enhancers));

export default store;
