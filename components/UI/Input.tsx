import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { fonts, colors } from '../../constants';
import { Icon } from './Icon';

interface InputProps {
  label: string;
  onChangeText: (value: string) => void;
  value?: string;
  errors?: string[];
  type?: 'password';
}

/**
 * Кастомное поле ввода ----------------
 */
export const Input: React.FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = React.useState(
    props.type === 'password',
  );

  return (
    <View style={[ss.field]}>
      <View style={[ss.input_wrapper]}>
        <TextInput
          style={[ss.input]}
          placeholder={props.label}
          placeholderTextColor={colors.gray}
          onChangeText={props.onChangeText}
          secureTextEntry={showPassword}
        />

        {props.type === 'password' && (
          <TouchableOpacity
            style={ss.password}
            onPress={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <Icon
                name="eye"
                style={ss.password_icon}
                color={colors.blue}
                size={fonts.iconSize}
              />
            ) : (
              <Icon
                name="eye-slash"
                style={ss.password_icon}
                color={colors.blue}
                size={fonts.iconSize}
              />
            )}
          </TouchableOpacity>
        )}
      </View>

      {props.errors?.length && <Text style={ss.errors}>{props.errors[0]}</Text>}
    </View>
  );
};

/**
 * Стили ----------------
 */
const ss = StyleSheet.create({
  field: {
    marginBottom: 23,
    width: '100%',
  },

  input_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingRight: 10,
    paddingLeft: 10,
  },

  input: {
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
  },

  error: {
    borderBottomColor: colors.red,
  },

  errors: {
    color: colors.red,
    fontSize: 11,
    position: 'absolute',
    bottom: -15,
  },

  password: {
    marginLeft: 8,
  },

  password_icon: {},
});
