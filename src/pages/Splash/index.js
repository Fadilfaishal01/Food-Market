import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components';
import colors from '../../utils/colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <Gap height={38} />
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    color: colors.secondary,
    fontFamily: 'Poppins-Medium',
  },
});

export default Splash;
