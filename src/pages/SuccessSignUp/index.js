import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

export default function SuccessSignUp({navigation}) {
  return (
    <View style={styles.container}>
      <IlSuccessSignUp />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
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
