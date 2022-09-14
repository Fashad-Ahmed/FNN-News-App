import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '../constants';

const persistConfig = {
  key: Constants.asyncStorageKey,
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
