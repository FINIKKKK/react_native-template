import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TextStyle } from 'react-native';
import { colors, fonts } from '../../constants';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: TextStyle;
  onPress?: () => void;
}

/**
 * Иконка Fontawesome ----------------
 */
export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  return (
    <FontAwesome
      name={name}
      size={props.size || fonts.iconSize}
      color={props.color || colors.blue}
      style={[props.style]}
    />
  );
};
