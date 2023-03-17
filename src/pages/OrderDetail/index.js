import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {colors, fonts} from '../../utils';

export default function OrderDetail({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          price="IDR 75.000"
          image={FoodDummy1}
          items={2}
        />
        <ItemListFood
          type="order-summary"
          title="Kebab Empang"
          price="IDR 40.000"
          image={FoodDummy2}
          items={3}
        />
        <ItemListFood
          type="order-summary"
          title="Kari Ayam Spesial"
          price="IDR 100.000"
          image={FoodDummy3}
          items={4}
        />
        {/* Item Value */}
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label="Sop Buntut Sapi" value="IDR 150.000" />
        <ItemValue label="Kebab Empang" value="IDR 120.000" />
        <ItemValue label="Kari Ayam Spesial" value="IDR 350.000" />
        <ItemValue label="Driver" value="IDR 40.000" />
        <ItemValue label="Tax 10%" value="IDR 13.000" />
        <ItemValue
          valueColor={colors.success}
          label="Total Price"
          value="IDR 673.000"
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
      <View style={styles.content}>
        <Text style={styles.label}>Order Status :</Text>
        <ItemValue
          label="#FM202303210001"
          value="Paid"
          valueColor={colors.success}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Cancel My Order"
          color={colors.danger}
          textColor={colors.light}
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
      <Gap height={40} />
    </ScrollView>
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
