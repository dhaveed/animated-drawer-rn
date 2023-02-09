import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../../constants/styles/global.styles';

export default function Cart() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.pageTitle}>Your cart items go here</Text>
    </View>
  );
}
