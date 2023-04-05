import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import Rating from '../Rating';

export default function FoodCard({image, title, rating, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Image style={styles.images} source={{uri: image}} />
        <View style={styles.content}>
          <Text style={styles.text}>{title}</Text>
          <Rating rating={rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    minHeight: 230,
    // maxHeight: 300,
    backgroundColor: colors.light,
    borderRadius: 8,
    shadowColor: colors.dark,
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  images: {
    resizeMode: 'cover',
    width: 200,
    height: 140,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.poppins,
    color: colors.secondary,
  },
});
