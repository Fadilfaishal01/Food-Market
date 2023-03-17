import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';
import {colors, fonts} from '../../utils';

export default function OrderSummary({navigation}) {
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
          title="Sop Buntut Sapi"
          price="IDR 150.000"
          image={FoodDummy1}
          items={3}
        />
        {/* Item Value */}
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label="Sop Buntut Sapi" value="IDR 90.000" />
        <ItemValue label="Driver" value="IDR 40.000" />
        <ItemValue label="Tax 10%" value="IDR 13.000" />
        <ItemValue
          valueColor={colors.success}
          label="Total Price"
          value="IDR 143.000"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to :</Text>
        <ItemValue label="Name" value="Fadil Faishal" />
        <ItemValue label="Phone No." value="085156349966" />
        <ItemValue label="Address" value="Villa Ciomas Indah Blok K9 No.8" />
        <ItemValue label="House No." value="8" />
        <ItemValue label="City" value="Bogor" />
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
