import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {ProfileDummy} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function HomeProfile() {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.desc}>Let's get some foods</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: colors.light,
  },
  appName: {
    fontSize: 22,
    fontFamily: fonts.poppinsMedium,
    color: colors.secondary,
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.poppinsLight,
    color: colors.third,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
