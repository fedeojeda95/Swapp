import categories from 'constants/categories';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './RootReducer';

const blacklist = ['loading', 'error'].concat(
  categories.map(category => category.apiName),
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = __DEV__
  ? composeWithDevTools(applyMiddleware(thunk))
  : applyMiddleware(thunk);

const rootStore = createStore(persistedReducer, middleware);

export const store = rootStore;

export const persist = callback => persistStore(rootStore, null, callback);
