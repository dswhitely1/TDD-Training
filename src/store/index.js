import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from './reducers';
import api from "../api";
const middleware = [thunk.withExtraArgument(api)];
const enhancers = applyMiddleware(...middleware);

const store = createStore(rootReducer,composeWithDevTools(enhancers));

export default store;
