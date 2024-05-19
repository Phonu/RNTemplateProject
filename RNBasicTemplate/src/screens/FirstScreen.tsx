import React from 'react';
import {View, Text, Button, ViewStyle, TextStyle} from 'react-native';

import {FirstScreenProps} from '../navigations/types';

const FirstScreen = ({navigation}: FirstScreenProps) => {
  const handleOnPress = () => {
    navigation.navigate('SecondScreen', {title: 'Wohoooo'});
  };
  return (
    <View>
      <View>
        <Button title="Next Screen" onPress={handleOnPress} />
        <Text style={$textFont}>{'kunalllll'}</Text>
      </View>
    </View>
  );
};

const $textFont: TextStyle = {
  fontSize: 20,
  color: 'red',
};

export default FirstScreen;
