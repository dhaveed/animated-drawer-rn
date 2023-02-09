import React from 'react';
import {View, Text} from 'react-native';
import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import drawerStyles from './drawer.styles';
import DrawerItem from '../../components/layout/navigation/drawer/DrawerItem';
import DrawerItemList from '../../components/layout/navigation/drawer/DrawerItemList';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const drawerProgress: any = useDrawerProgress();
  const {top: topInset} = useSafeAreaInsets();

  const animatedStyles = useAnimatedStyle(() => {
    const translateY: number = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, topInset],
    );

    const borderTopRadius: number = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, 45],
    );

    return {
      transform: [{translateY}],
      borderTopLeftRadius: borderTopRadius,
    };
  });

  return (
    <Animated.ScrollView
      style={[drawerStyles.contentContainerStyles, animatedStyles]}>
      <View style={drawerStyles.drawerHeaderContainer}>
        <Text style={drawerStyles.logoText}>Beka</Text>
      </View>

      <View style={drawerStyles.customDrawerContentContainer}>
        <DrawerItemList {...props} />
      </View>

      <View style={drawerStyles.drawerFooterStyles}>
        <DrawerItem
          item={{title: 'Sign Out'}}
          onPress={() => console.log('Sign Out')}
        />
      </View>
    </Animated.ScrollView>
  );
}
