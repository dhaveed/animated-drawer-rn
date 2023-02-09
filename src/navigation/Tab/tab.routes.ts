import {faGhost, faHouse} from '@fortawesome/free-solid-svg-icons';

import StackNavigator from '../Stack';
import Contacts from '../../screens/Contacts';

export default [
  {
    name: 'Home',
    label: 'Home',
    component: StackNavigator,
    icon: faHouse,
  },
  {
    name: 'Contact',
    label: 'Contacts',
    component: Contacts,
    icon: faGhost,
  },
];
