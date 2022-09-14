import {View, Text, Image} from 'react-native';
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
        <View>
          <Image
            source={require('@Asset/splash_icon_dark.png')}
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      hideSplashScreen();
      navigation.navigate('Onboarding');
    }, 1000);
  }, []);
  return <View>{isVisible === true ? renderSplash() : null}</View>;
};

export default SplashScreen;
