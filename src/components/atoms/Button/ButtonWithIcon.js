import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Icon} from 'react-native-elements';

export default function ButtonWithIcon({
  typeIcon,
  iconName,
  title,
  onPress,
  color = colors.primary,
  textColor = colors.secondary,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7} // Agar tidak terlalu transparant saat di klik atau di tekan
      style={styles.container(color)}
      onPress={onPress}>
      <Icon name={iconName} type={typeIcon} color={textColor} />
      <Text style={styles.text(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: color => ({
    marginLeft: 10,
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
    color: color,
    textAlign: 'center',
  }),
});
