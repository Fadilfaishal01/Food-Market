import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, fonts} from './../../../utils';
import {Text} from 'react-native-elements';

export default function Loading({text}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.textLoading}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.7)',
  },
  textLoading: {
    fontSize: 20,
    fontFamily: fonts.poppinsMedium,
    marginTop: 12,
    color: colors.light,
  },
});
