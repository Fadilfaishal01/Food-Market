import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {IcNext} from '../../../assets';

export default function ItemListMenu({label, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      <IcNext />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.poppins,
    color: colors.secondary,
  },
});
