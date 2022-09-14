import {View, Text} from 'react-native';
import React from 'react';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
