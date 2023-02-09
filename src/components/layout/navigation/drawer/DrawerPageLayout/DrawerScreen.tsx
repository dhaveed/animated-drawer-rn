import React from 'react';
import {View, StatusBar} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {ParamListBase} from '@react-navigation/native';

import DrawerPageLayout from '.';
import Header from '../../../Header';

interface IDrawerScreenProps extends DrawerScreenProps<ParamListBase> {
  children: React.ReactNode;
}

export default function DrawerScreen({route, children}: IDrawerScreenProps) {
  return (
    <DrawerPageLayout>
      <StatusBar barStyle={'dark-content'} />
      <Header title={route.name} />

      <View style={{flex: 1}}>{children}</View>
    </DrawerPageLayout>
  );
}
