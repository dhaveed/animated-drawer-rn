import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  drawer: {
    // width: '100%',
    width: '50%',
    // paddingTop: 40,
  },
  sceneContainerStyles: {
    // backgroundColor: colors.accent,
    backgroundColor: 'transparent',
    // backgroundColor: colors.background,
  },

  contentContainerStyles: {
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: colors.background,
  },

  customDrawerContentContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray + 40,
    paddingVertical: 20,
  },

  drawerHeaderContainer: {
    marginBottom: 20,
  },

  logoText: {
    fontWeight: '900',
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    paddingVertical: 10,
  },

  drawerFooterStyles: {
    marginTop: 20,
  },
});
