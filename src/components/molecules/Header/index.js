import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {IcBack} from '../../../assets';

export default function Header({title, subTitle, withIcon = false, onPress}) {
  return (
    <View style={styles.container}>
      {withIcon && (
        <TouchableOpacity style={styles.wrapperIcon} onPress={onPress}>
          <IcBack />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperIcon: {
    marginRight: 16,
    padding: 16,
    marginLeft: -10,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.poppinsMedium,
    color: colors.secondary,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
    color: colors.third,
  },
});
