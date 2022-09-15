import {View, Text} from 'react-native';
import React from 'react';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import constants from '../constants';
const RootNavigation = () => {
  const {MyLightTheme, MyDarkTheme} = constants;

  return (
    <NavigationContainer theme={MyLightTheme}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
