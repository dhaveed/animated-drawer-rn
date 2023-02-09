import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import buttonStyles from './button.styles';

interface IBlockButtonProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  //   type?: 'primary' | 'secondary'; --> would use this in an ideal situation
}

export default function BlockButton(props: IBlockButtonProps) {
  const {label, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.baseButtonStyles}>
      <Text style={buttonStyles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}
