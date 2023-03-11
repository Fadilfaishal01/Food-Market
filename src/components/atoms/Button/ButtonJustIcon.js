import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {Icon} from 'react-native-elements';

export default function ButtonJustIcon({
  typeIcon,
  iconName,
  onPress,
  color = colors.dark,
  textColor,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container(color)}>
      <Icon name={iconName} type={typeIcon} size={24} color={textColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 16,
    borderRadius: 8,
  }),
});
