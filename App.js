import {View, Text} from 'react-native';
import React from 'react';
import RootNavigation from '@Navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import reduxStore from './src/redux';

export const reduxPersistStore = persistStore(reduxStore);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
