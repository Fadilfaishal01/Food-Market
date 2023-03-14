import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import {colors, fonts} from '../../../utils';

export default function ItemListFood({title, price, image, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.newTasteContainer}>
        <Image style={styles.newTasteImage} source={image} />
        <View style={styles.newTasteDescription}>
          <Text style={styles.newTasteTitle}>{title}</Text>
          <Text style={styles.newTastePrice}>{price}</Text>
        </View>
        <Rating />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  newTasteContainer: {
    flexDirection: 'row',
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  newTasteImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  newTasteDescription: {
    flex: 1,
    marginRight: 10,
  },
  newTasteTitle: {
    fontFamily: fonts.poppins,
    fontSize: 16,
    color: colors.secondary,
  },
  newTastePrice: {
    fontFamily: fonts.poppins,
    fontSize: 13,
    color: colors.third,
  },
});
