import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcMin, IcPlus} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Counter() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity>
        <IcPlus />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    fontFamily: fonts.poppins,
    color: colors.third,
    marginHorizontal: 10,
  },
});
