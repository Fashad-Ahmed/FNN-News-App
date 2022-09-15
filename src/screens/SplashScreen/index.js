import {View, Text, Image} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useEffect} from 'react';

import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {moderateScale, scale} from 'react-native-size-matters';

// import styles from './styles';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();
  const {background, dark} = theme;

  const hideSplashScreen = () => {
    setIsVisible(false);
  };

  const renderSplash = () => {
    return (
      <View>
        <View>
          <Image
            source={
              dark
                ? require('@Asset/splash_icon_dark.png')
                : require('@Asset/splash_icon_light.png')
            }
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
  return (
    <View style={styles.MainContainer}>
      {isVisible === true ? renderSplash() : null}
    </View>
  );
};

const styles = () => {
  EStyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? 20 : 0,
      backgroundColor: '#fffffff',
    },
    SplashScreen_RootView: {
      justifyContent: 'center',
      flex: 1,
      margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    SplashScreen_ChildView: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
  });
};

export default SplashScreen;
