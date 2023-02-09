import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import BlockButton from '../../../components/BlockButotn';
import globalStyles from '../../../constants/styles/global.styles';

export default function Screen1() {
  const {navigate} = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.pageTitle}>Welcome to the home screen</Text>
      <BlockButton label="Go to screen 2" onPress={() => navigate('Screen2')} />
    </View>
  );
}
