import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {IcBackWhite} from '../../assets';
import {Button, Counter, Number, Rating} from '../../components';
import {colors, fonts} from '../../utils';

export default function FoodDetail({navigation, route}) {
  const {name, picturePath, description, rate, ingredients, price} =
    route.params;
  const [totalItem, setTotalItem] = useState(1);

  const onCounterChange = value => {
    setTotalItem(value);
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
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
              <Text style={styles.title}>{name}</Text>
              <Rating rating={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>{ingredients}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price :</Text>
            <Number style={styles.priceTotal} value={totalItem * price} />
          </View>
          <View style={styles.button}>
            <Button
              title="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
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
