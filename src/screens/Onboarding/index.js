import {View, Text, Image} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ion from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
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
      <View>
        <View>
          <Text>{item.title}</Text>
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
      <View>
        {/* style={styles().buttonCircle} */}
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
      <View>
        {/* style={styles().buttonCircle} */}
        <Ion name="md-checkmark" color="rgba(255,255,255, .9 )" size={24} />
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View>
        {/* style={styles().skipView} */}
        <Text>Skip</Text>
        {/* style={styles().skipTextColor} */}
      </View>
    );
  };

  const _onEndReached = () => {
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

export default Onboarding;
