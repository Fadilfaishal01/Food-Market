import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import ButtonWithIcon from './ButtonWithIcon';
import ButtonJustIcon from './ButtonJustIcon';

export default function Button({
  typeButton,
  typeIcon,
  iconName,
  title,
  onPress,
  color = colors.primary,
  textColor = colors.secondary,
}) {
  if (typeButton === 'btnWithIcon') {
    return (
      <ButtonWithIcon
        textColor={textColor}
        iconName={iconName}
        title={title}
        color={color}
        typeIcon={typeIcon}
        onPress={onPress}
      />
    );
  } else if (typeButton === 'btnIcon') {
    return (
      <ButtonJustIcon
        iconName={iconName}
        typeIcon={typeIcon}
        color={color}
        textColor={textColor}
        onPress={onPress}
      />
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 16,
    borderRadius: 8,
  }),
  text: color => ({
    fontSize: 15,
    fontFamily: fonts.poppinsMedium,
    color: color,
    textAlign: 'center',
  }),
});
