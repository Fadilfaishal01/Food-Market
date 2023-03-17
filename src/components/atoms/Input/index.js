import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function Input({label, placeholder, ...restProps}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.poppins,
    color: colors.secondary,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    padding: 10,
  },
});
