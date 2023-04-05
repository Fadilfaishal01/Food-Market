import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IcMin, IcPlus} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Counter({onValueChange}) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onCount = type => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    } else if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }

    setValue(result);
    onValueChange(result);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <IcMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
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
