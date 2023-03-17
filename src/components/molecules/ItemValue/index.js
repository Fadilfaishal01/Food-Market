import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function ItemValue({label, value, valueColor}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value(valueColor)}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.poppins,
    color: colors.third,
  },
  value: valueColor => ({
    fontWeight: '700',
    fontSize: 14,
    fontFamily: fonts.poppins,
    color: valueColor ? valueColor : colors.secondary,
  }),
});
