import React from 'react';
import {View, Text} from 'react-native';

import globalStyles from '../../../constants/styles/global.styles';

export default function Screen2() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.pageTitle}>Second stack screen</Text>
    </View>
  );
}
