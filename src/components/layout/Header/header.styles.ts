import {StyleSheet} from 'react-native';

import {colors} from '../../../constants/colors';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 20,
  },
  iconContainer: {
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconStyle: {
    color: colors.gray,
  },

  title: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.gray,
    textTransform: 'uppercase',
    letterSpacing: 4,
    marginLeft: 20,
  },
});
