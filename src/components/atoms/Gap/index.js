import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function Gap({height, width}) {
  return <View style={styles.gap(height, width)} />;
}

const styles = StyleSheet.create({
  gap: (height, width) => ({
    height: height,
    width: width,
  }),
});
