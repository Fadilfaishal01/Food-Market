import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

export default function SuccessOrder({navigation}) {
  return (
    <View style={styles.container}>
      <IlSuccessOrder />
      <Text style={styles.title}>You've Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Text style={styles.subTitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.btnContainer}>
        <Button
          title="Order Other Foods"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12} />
        <Button
          title="View My Order"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})} // Untuk mengarahkan ke Tab Navigation
          color={colors.third}
          textColor={colors.light}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.poppins,
    color: colors.secondary,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.poppinsLight,
    color: colors.third,
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
