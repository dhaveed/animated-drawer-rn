import React from 'react';
import {View} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

import DrawerItem from '../DrawerItem';

export default function DrawerItemList(props: DrawerContentComponentProps) {
  const {state, navigation} = props;

  return (
    <View>
      {state.routes.map((route, index: number) => {
        const isFocused = state.index === index;
        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        return (
          <DrawerItem
            onPress={onPress}
            item={{title: route.name}}
            isActive={isFocused}
            key={route.key}
          />
        );
      })}
    </View>
  );
}
