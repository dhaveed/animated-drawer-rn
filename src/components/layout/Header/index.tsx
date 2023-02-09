import React from 'react';
import {
  DrawerActions,
  NavigationAction,
  useNavigation,
} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

import headerStyles from './header.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

interface IHeaderProps {
  title: string;
}

export default function Header(props: IHeaderProps) {
  const {title} = props;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const drawerProgress: any = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    const borderTopRadius: number = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, 45],
    );

    const paddingTop: number = interpolate(
      drawerProgress.value,
      [0, 1],
      [insets.top + 10, 45],
    );

    return {
      borderTopLeftRadius: borderTopRadius,
      paddingTop,
    };
  });

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Animated.View style={[headerStyles.header, animatedStyles]}>
      <TouchableOpacity
        onPress={toggleDrawer}
        style={headerStyles.iconContainer}>
        <FontAwesomeIcon
          icon={faBars}
          style={headerStyles.iconStyle}
          size={24}
        />
        {/* <Text>test</Text> */}
      </TouchableOpacity>
      <Text style={headerStyles.title}>{title}</Text>
    </Animated.View>
  );
}
