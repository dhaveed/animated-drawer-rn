import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../../constants/styles/global.styles';

export default function Contacts() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.pageTitle}>All your contacts go here</Text>
    </View>
  );
}
