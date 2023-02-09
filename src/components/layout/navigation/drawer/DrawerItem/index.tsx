import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from '../../../../../constants/colors';

export default function DrawerItem({
  item,
  isActive,
  onPress,
}: {
  item: {title: string};
  isActive?: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.drawerItem, isActive && styles.activeDrawerItemStyles]}
      activeOpacity={0.6}
      onPress={onPress}>
      <Text
        style={[
          styles.drawerItemLabel,
          isActive && styles.activeDrawerItemLabelStyles,
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  drawerItem: {
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  drawerItemLabel: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '500',
  },
  activeDrawerItemStyles: {
    backgroundColor: colors.accent + 25,
  },
  activeDrawerItemLabelStyles: {
    color: colors.accent,
  },
});
