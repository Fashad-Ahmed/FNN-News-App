import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import RootNavigation from './src/navigation/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import reduxStore from './src/redux';
import EStyleSheet from 'react-native-extended-stylesheet';

export const reduxPersistStore = persistStore(reduxStore);

const App = () => {
  useEffect(() => {
    EStyleSheet.build();
  }, []);

  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={reduxPersistStore}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
