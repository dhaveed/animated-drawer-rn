import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {ICON_SIZE} from '../../constants/ui.constants';
import tabRoutes from './tab.routes';
import {colors} from '../../constants/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {tabRoutes.map((tab, index) => (
        <Tab.Screen
          name={tab.name}
          key={index}
          component={tab.component}
          options={{
            tabBarIcon: () => (
              <FontAwesomeIcon
                icon={tab.icon}
                size={ICON_SIZE}
                style={{color: colors.gray}}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
