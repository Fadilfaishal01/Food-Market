import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';
import {colors, fonts, TypeIcon} from '../../utils';

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <Header withIcon title="Sign Up" subTitle="Register and eat" />
      <View style={styles.wrapper}>
        <Gap height={26} />
        <TouchableOpacity activeOpacity={0.7} style={styles.sectionPhoto}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Gap height={16} />
        <Input label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <Input label="Email Address" placeholder="Type your email address" />
        <Gap height={16} />
        <Input label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          title="Continue"
          typeButton="btnWithIcon"
          typeIcon={TypeIcon.fontawesome}
          iconName="arrow-right"
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
