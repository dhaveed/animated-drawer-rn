import Cart from '../../screens/Cart';
import Contacts from '../../screens/Contacts';
import TabNavigator from '../Tab';

export default [
  {
    name: 'Start',
    component: TabNavigator,
  },
  {
    name: 'Contacts',
    component: Contacts,
  },
  {
    name: 'Cart',
    component: Cart,
  },
];
