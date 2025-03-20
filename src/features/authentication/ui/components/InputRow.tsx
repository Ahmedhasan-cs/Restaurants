import React, {memo} from 'react';
import {Text, TextInput, View, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../styles/inputRowStyle';

interface InputRowProps extends TextInputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChangeText?: (val: string) => void;
  isValid?: boolean;
  isFormSubmitted?: boolean;
}

const InputRow = (props: InputRowProps) => {
  const {label, value, isValid, isFormSubmitted, onChangeText, ...rest} = props;
  return (
    <View style={styles.row}>
      <Text style={styles.lbl}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
        {isFormSubmitted && (
          <Icon
            name={isValid ? 'check-circle' : 'cancel'}
            size={20}
            color={isValid ? 'green' : 'red'}
            style={styles.icon}
          />
        )}
      </View>
    </View>
  );
};

export default memo(InputRow);
