import {View, Text, Image} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ion from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation, useTheme} from '@react-navigation/native';

import * as authAction from '../../redux/actions/authActions';
import Constant from '../../constants/index';
import EStyleSheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';

// import {styles} from './styles';
const {
  THEME: {primary, secondary},
} = Constant;

const Onboarding = ({...props}) => {
  console.log(props);
  console.log('styles', styles);

  const {updateOnboarding} = props;

  const navigation = useNavigation();
  const theme = useTheme();

  const {background, dark} = theme;
  console.log(theme);
  const slides = [
    {
      key: 'slide1',
      image: require('@Asset/onboarding/frontal_home.png'),
      title: 'Welcome to React Native News App.',
      text: 'Here you can read latest news updates. By registering to this application.',
    },
    {
      key: 'slide2',
      image: require('@Asset/onboarding/doodle_reading.png'),
      title: 'Read News',
      text: 'Read news at anywhere at any place just by connecting to the internet.',
    },
    {
      key: 'slide3',
      image: require('@Asset/onboarding/stting_on_floor.png'),
      title: 'Add to favorite.',
      text: 'Add to your favorite read list and also you can add comments.',
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <Image source={item.image} />
        </View>
        <View>
          <Text>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="arrow-forward-outline"
          color="rgba(255,255,255, .9 )"
          size={24}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion name="md-checkmark" color="rgba(255,255,255, .9 )" size={24} />
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={styles.skipView}>
        <Text style={styles.skipTextColor}>Skip</Text>
      </View>
    );
  };

  const _onEndReached = () => {
    updateOnboarding(false);
    navigation.navigate('Login');
  };
  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderSkipButton={_renderSkipButton}
      renderNextButton={_renderNextButton}
      onDone={_onEndReached}
      onSkip={_onEndReached}
      dotClickEnabled={true}
      showNextButton={true}
    />
  );
};

const styles = () => {
  EStyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    titleContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingStart: '8%',
      paddingRight: '8%',
    },
    title: {
      color: secondary,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    imageContainer: {
      flex: 3,
      justifyContent: 'center',
    },
    image: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },
    textContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingStart: '8%',
      paddingRight: '8%',
    },

    text: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
    buttonCircle: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    skipTextColor: {
      color: primary,
      fontWeight: 'bold',
    },
    skipView: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

const mapStateToProps = state => {
  return {
    isOnboardingDisabled: state.auth.isOnboardingDisabled,
  };
};

const mapDispatchToProps = dispatch => {
  updateOnboarding: status => dispatch(authAction.updateOnboarding(state));
};

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
