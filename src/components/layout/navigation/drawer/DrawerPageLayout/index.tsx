import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../../../../constants/colors';

interface IDrawerPageLayoutProps {
  children: React.ReactNode;
}

export default function DrawerPageLayout({children}: IDrawerPageLayoutProps) {
  const drawerProgress: any = useDrawerProgress();
  const {top: topInset} = useSafeAreaInsets();

  const animatedLayoutStyles = useAnimatedStyle(() => {
    const rotate: number = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, -0.045],
      Extrapolate.CLAMP,
    );
    const borderRadius: number = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, 40],
    );

    const translateY: number = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, 10],
    );

    const translateX: number = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, 60],
    );

    return {
      transform: [
        {translateY},
        {translateX},
        {rotate: `${rotate * Math.PI}rad`},
      ],
      borderRadius,
    };
  });

  const animatedBackdropStyles = useAnimatedStyle(() => {
    const translateY: number = interpolate(
      drawerProgress.value,
      [0, 1],
      [0, topInset],
    );

    return {
      transform: [{translateY}],
    };
  });

  return (
    <Animated.View style={[styles.backdrop, animatedBackdropStyles]}>
      <Animated.View style={[styles.container, animatedLayoutStyles]}>
        {children}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backdrop: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
