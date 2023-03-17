import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcStarOff, IcStarOn} from '../../../assets';
import {fonts} from '../../../utils';

export default function Rating({rating}) {
  return (
    <View style={styles.rateContainer}>
      <View style={styles.starContainer}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
      </View>
      <Text style={styles.rateNumber}>4.5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rateContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
  },
  rateNumber: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
    fontWeight: '700',
  },
});
