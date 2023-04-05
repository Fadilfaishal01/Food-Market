import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {colors, fonts, getFormattedNumberRP} from '../../utils';

export default function OrderSummary({navigation, route}) {
  const {item, transaction, userProfile} = route.params;
  return (
    <View>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        withIcon={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>OrderSummary</Text>
        <ItemListFood
          type="order-summary"
          title={item.name}
          price={item.price}
          items={transaction.totalItem}
          image={item.picturePath}
        />
        {/* Item Value */}
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue
          label={item.name}
          value={`IDR ${getFormattedNumberRP(item.price)}`}
        />
        <ItemValue
          label="Driver"
          value={`IDR ${getFormattedNumberRP(transaction.driver)}`}
        />
        <ItemValue
          label="Tax 10%"
          value={`IDR ${getFormattedNumberRP(transaction.tax)}`}
        />
        <ItemValue
          valueColor={colors.success}
          label="Total Price"
          value={`IDR ${getFormattedNumberRP(transaction.totalPrice)}`}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to :</Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No." value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No." value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>
      <View style={styles.button}>
        <Button
          title="Checkout Now"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.light,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.poppins,
    color: colors.secondary,
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
