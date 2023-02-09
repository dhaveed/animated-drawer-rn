import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
  DrawerScreenProps,
} from '@react-navigation/drawer';

import routes from './drawer.routes';
import drawerStyles from './drawer.styles';
import CustomDrawer from './CustomDrawer';
import DrawerScreen from '../../components/layout/navigation/drawer/DrawerPageLayout/DrawerScreen';
import {ParamListBase} from '@react-navigation/native';
import TabNavigator from '../Tab';
import Cart from '../../screens/Cart';
import Contacts from '../../screens/Contacts';
import drawerRoutes from './drawer.routes';

type WrapComponentProps = PropsWithChildren<DrawerScreenProps<ParamListBase>>;

const Drawer = createDrawerNavigator();

const WrapComponent = ({children, ...rest}: WrapComponentProps): any => {
  return <DrawerScreen {...rest}>{children}</DrawerScreen>;
};

const drawerNavOptions: DrawerNavigationOptions = {
  drawerStyle: drawerStyles.drawer,
  drawerType: 'back',
  overlayColor: 'transparent',
  sceneContainerStyle: drawerStyles.sceneContainerStyles,
  headerShown: false,
};

const AppDrawer: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={drawerNavOptions}
      initialRouteName={'Start'}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Start">
        {(props: DrawerScreenProps<ParamListBase>) => (
          <WrapComponent {...props}>
            <TabNavigator />
          </WrapComponent>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Contacts">
        {(props: DrawerScreenProps<ParamListBase>) => (
          <WrapComponent {...props}>
            <Contacts />
          </WrapComponent>
        )}
      </Drawer.Screen>

      <Drawer.Screen name="Cart">
        {(props: DrawerScreenProps<ParamListBase>) => (
          <WrapComponent {...props}>
            <Cart />
          </WrapComponent>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default AppDrawer;
