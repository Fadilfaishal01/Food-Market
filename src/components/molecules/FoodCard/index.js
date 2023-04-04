import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import Rating from '../Rating';
import {useSelector} from 'react-redux';

export default function FoodCard({image, title, rating, onPress}) {
  const {apiReducer} = useSelector(state => state);
  const urlImage = `${apiReducer.url}/${image}`;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Image style={styles.images} source={{uri: urlImage}} />
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
    padding: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.poppins,
    color: colors.secondary,
  },
});
