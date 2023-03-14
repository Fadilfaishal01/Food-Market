import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Input, Header, Select} from '../../components';
import {colors, fonts, TypeIcon} from '../../utils';

export default function SignUpAddress({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        withIcon
        title="Address"
        subTitle="Make sure it's valid"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <Gap height={26} />
        <Input label="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <Input label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <Input label="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={24} />
        <Button
          onPress={() => navigation.replace('SuccessSignUp')}
          title="Sign Up Now"
          typeButton="btnWithIcon"
          typeIcon={TypeIcon.fontawesome}
          iconName="save"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  wrapper: {
    backgroundColor: colors.light,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  sectionPhoto: {
    alignItems: 'center',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: colors.third,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: colors.fourth,
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: fonts.poppinsLight,
    color: colors.third,
    textAlign: 'center',
  },
});
