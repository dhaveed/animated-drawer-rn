import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {
  BUTTON_PADDING_X,
  BUTTON_PADDING_Y,
  BUTTON_RADIUS,
} from '../../constants/ui.constants';

export default StyleSheet.create({
  baseButtonStyles: {
    backgroundColor: colors.primary,
    paddingVertical: BUTTON_PADDING_Y,
    paddingHorizontal: BUTTON_PADDING_X,
    borderRadius: BUTTON_RADIUS,
  },
  buttonLabel: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
  // primary: {} --> primary button styles in an ideal situation
});
