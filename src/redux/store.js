import { createStore } from 'redux';
import rootReducer from './features/rootReducer';
import middleware from './middleware';

export default createStore(rootReducer, middleware);
