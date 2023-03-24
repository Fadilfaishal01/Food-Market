import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-community/picker';
import {colors, fonts} from '../../../utils';

export default function Select({label, value, onSelectChange}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}>
          <Picker.Item label="- Choose City -" value="0" />
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Bogor" value="Bogor" />
          <Picker.Item label="Jogyakarta" value="Jogyakarta" />
          <Picker.Item label="Malang" value="Malang" />
          <Picker.Item label="Surabaya" value="Surabaya" />
          <Picker.Item label="Lampung" value="Lampung" />
          <Picker.Item label="Aceh" value="Aceh" />
          <Picker.Item label="Sumedang" value="Sumedang" />
          <Picker.Item label="Banten" value="Banten" />
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
