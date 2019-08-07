import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

const middlewares = [];

export default composeWithDevTools(applyMiddleware(...middlewares));
