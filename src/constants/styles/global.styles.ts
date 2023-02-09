import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontWeight: '800',
    fontSize: 24,
    maxWidth: '70%',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24 * 0.5 + 18,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonLabel: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
});
