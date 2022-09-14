import {createStore} from 'redux';
import {
  persistStore,
  persistReducer,
  persistCombineReducers,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constant from '../../constants/index';
import authReducer from './authReducers';

const persistConfig = {
  key: Constant.asyncStorageKey,
  storage: AsyncStorage,
  blacklist: [],
};

const appReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
