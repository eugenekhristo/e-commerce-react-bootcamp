import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './features/rootReducer';
import middleware from './middleware';

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);
