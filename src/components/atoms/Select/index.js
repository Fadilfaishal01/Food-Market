import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-community/picker';
import {colors, fonts} from '../../../utils';

export default function Select({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.picker}>
        <Picker
        // selectedValue={this.state.language}
        // onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue}) }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.poppins,
    color: colors.secondary,
  },
  picker: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
