import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FoodDummy1, IcBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';
import {colors, fonts} from '../../utils';

export default function FoodDetail({navigation}) {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy1} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Berry</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Makanan khas bandung yang cukup sering dipesan oleh anak muda.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price :</Text>
            <Text style={styles.priceTotal}>IDR 12.900.000</Text>
          </View>
          <View style={styles.button}>
            <Button title="Order Now" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.light,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.poppins,
    color: colors.secondary,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.poppins,
    color: colors.third,
    marginBottom: 16,
  },
  label: {
    fontFamily: fonts.poppins,
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  priceContainer: {
    flex: 1,
  },
  button: {
    width: 163,
  },
  labelTotal: {
    fontSize: 13,
    fontFamily: fonts.poppins,
    color: colors.third,
  },
  priceTotal: {
    fontSize: 20,
    fontFamily: fonts.poppins,
    color: colors.secondary,
  },
});
