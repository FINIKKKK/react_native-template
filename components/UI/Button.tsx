import React from 'react';
import {StyleSheet, Text, TouchableHighlight, ViewStyle} from 'react-native';
import {blocks, colors, fonts} from "../../constants";

interface CButtonProps {
  label: string;
  styles?: ViewStyle | ViewStyle[];
  onPress?: () => void;
  disabled?: boolean;
}

/**
 * Кастомная кнопка ----------------
 */
export const Btn: React.FC<CButtonProps> = (props) => {
  return (
    <TouchableHighlight
      underlayColor={colors.blueDark}
      style={[ss.btn, props.styles, props.disabled && ss.disabled]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={ss.label}>{props.label}</Text>
    </TouchableHighlight>
  );
};

/**
 * Стили ----------------
 */
const ss = StyleSheet.create({
  btn: {
    backgroundColor: colors.yellow,
    fontSize: fonts.size,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
    borderRadius: blocks.radius,
  },

  disabled: {
    backgroundColor: colors.gray
  },

  label: {
    color: colors.white,
  },
});
