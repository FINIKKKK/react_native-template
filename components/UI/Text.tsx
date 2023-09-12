import React from 'react';
import { Text } from 'react-native';
import { Text as DefaultText } from 'react-native/Libraries/Text/Text';
import {fonts} from "../../constants";

/**
 * Кастомный текст ----------------
 */
export const CText: React.FC<DefaultText['props']> = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: 'Regular',
          fontSize: fonts.size,
          lineHeight: fonts.lh,
        },
      ]}
    />
  );
};
