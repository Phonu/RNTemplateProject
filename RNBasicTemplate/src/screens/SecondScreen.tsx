import React from 'react';
import {View, Text, Button} from 'react-native';
import {SecondScreenProps} from '../navigations/types';

const SecondScreen = ({navigation, route}: SecondScreenProps) => {
  const onPressHandler = () => {
    navigation.navigate('ThirdScreen', {data: ['22', '33', '44']});
  };
  return (
    <View>
      <Text>SecondScreen</Text>
      <Text>{route.params.title}</Text>
      <Button title="next" onPress={onPressHandler} />
    </View>
  );
};

export default SecondScreen;
