import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';
import {colors, TypeIcon} from '../../utils';
import {Login} from '../../assets';

export default function SignIn({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.wrapperIconSVG}>
        <Login width={'100%'} height={'70%'} />
      </View>
      <View style={styles.wrapper}>
        <Input label="Email Address" placeholder="Type your email address" />
        <Gap height={16} />
        <Input label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          title="Sign In"
          typeButton="btnWithIcon"
          typeIcon={TypeIcon.fontawesome}
          iconName="sign-in"
        />
        <Gap height={12} />
        <Button
          onPress={() => navigation.navigate('SignUp')}
          title="Create New Account"
          typeButton="btnWithIcon"
          color={colors.third}
          textColor={colors.light}
          typeIcon={TypeIcon.fontawesome}
          iconName="user-plus"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  wrapperIconSVG: {
    alignItems: 'center',
    height: 260,
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: colors.light,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
