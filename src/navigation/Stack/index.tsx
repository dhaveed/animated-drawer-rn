import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Screen1 from '../../screens/Home/Screen1';
import Screen2 from '../../screens/Home/Screen2';
import {RootStackParamList} from '../../@types/navigation.types';

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}
