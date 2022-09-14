import {View, Text, Image} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

const Onboarding = () => {
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
          <Image>{item.image}</Image>
        </View>
        <View>
          <Text>{item.text}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Text>Onboarding</Text>
    </View>
  );
};

export default Onboarding;
