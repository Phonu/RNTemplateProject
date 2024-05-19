import React from 'react';
import {View, Text} from 'react-native';
import {ThirdScreenProps} from '../navigations/types';

const ThirdScreen = ({route}: ThirdScreenProps) => {
  const abc = route.params?.data as string[];
  return (
    <View>
      <Text>ThirdScreen</Text>
      <Text>{abc[0]}</Text>
    </View>
  );
};

export default ThirdScreen;
