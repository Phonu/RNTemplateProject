import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

import ThirdScreen from '../screens/ThirdScreen';

import {RootStackParamsList} from './types';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          initialParams={{title: 'heyyyyy'}}
        />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
