import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlEmptyOrder} from '../../../assets';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {useNavigation} from '@react-navigation/native';

export default function EmptyOrder() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IlEmptyOrder />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Seems like you have not</Text>
      <Text style={styles.subTitle}>ordered any food yet</Text>
      <Gap height={30} />
      <View style={styles.btnContainer}>
        <Button
          title="Find Foods"
          onPress={() => navigation.replace('MainApp')}
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
