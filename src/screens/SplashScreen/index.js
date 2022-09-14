import {View, Text} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();

  const hideSplashScreen = () => {
    setIsVisible(false);
  };

  const renderSplash = () => {
    return (
      <View>
        <View></View>
      </View>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      hideSplashScreen();
      navigation.navigate('Onboarding');
    }, 1000);
  }, []);
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
