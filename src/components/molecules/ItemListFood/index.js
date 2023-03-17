import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import {colors, fonts} from '../../../utils';

/*
 TYPE :
 1. product
 2. order-summary
 3. in-progress
 4. past-orders
 */

export default function ItemListFood({
  title,
  price,
  image,
  onPress,
  ratings,
  items,
  type,
  date,
  status,
}) {
  const renderContent = type => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.newTasteDescription}>
              <Text style={styles.newTasteTitle}>{title}</Text>
              <Text style={styles.newTastePrice}>{price}</Text>
            </View>
            <Rating rating={ratings} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.newTasteDescription}>
              <Text style={styles.newTasteTitle}>{title}</Text>
              <Text style={styles.newTastePrice}>{price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.newTasteDescription}>
              <Text style={styles.newTasteTitle}>{title}</Text>
              <Text>
                {items} items . {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={styles.newTasteDescription}>
              <Text style={styles.newTasteTitle}>{title}</Text>
              <Text>
                {items} items . {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.newTasteDescription}>
              <Text style={styles.newTasteTitle}>{title}</Text>
              <Text style={styles.newTastePrice}>{price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.newTasteContainer}>
        <Image style={styles.newTasteImage} source={image} />
        {renderContent(type)}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  newTasteContainer: {
    flexDirection: 'row',
    backgroundColor: colors.light,
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
  items: {
    fontSize: 13,
    fontFamily: fonts.poppins,
    color: colors.third,
  },
  date: {
    fontSize: 10,
    fontFamily: fonts.poppins,
    color: colors.third,
  },
  status: {
    fontSize: 10,
    fontFamily: fonts.poppins,
    color: colors.danger,
    fontWeight: '700',
  },
});
