import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextInputProps,
} from 'react-native';

interface InputFieldProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  error?: string;
  touched?: boolean;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  multiline?: boolean;
  numberOfLines?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  error,
  touched,
  icon,
  style,
  multiline = false,
  numberOfLines = 1,
  ...rest
}) => {
  const showError = touched && error;

  return (
    <View style={[styles.container, style]}>
      <View style={[
        styles.inputContainer,
        showError ? styles.inputContainerError : null,
        multiline ? styles.inputContainerMultiline : null
      ]}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          style={[
            styles.input,
            icon ? styles.inputWithIcon : null,
            multiline ? styles.inputMultiline : null
          ]}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          textAlignVertical={multiline ? 'top' : 'center'}
          {...rest}
        />
      </View>
      {showError && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    paddingHorizontal: 16,
    minHeight: 56,
  },
  inputContainerMultiline: {
    minHeight: 100,
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  inputContainerError: {
    borderColor: '#EF4444',
    borderWidth: 1,
  },
  iconContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    paddingVertical: 0,
  },
  inputWithIcon: {
    paddingLeft: 0,
  },
  inputMultiline: {
    paddingTop: 4,
    minHeight: 76,
  },
  errorText: {
    fontSize: 12,
    color: '#EF4444',
    marginTop: 6,
    marginLeft: 4,
  },
});

export default InputField;