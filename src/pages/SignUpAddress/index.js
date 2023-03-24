import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Input, Header, Select} from '../../components';
import {colors, fonts, showMessageCustom, TypeIcon, useForm} from '../../utils';
import {useSelector} from 'react-redux';
import axios from 'axios';

export default function SignUpAddress({navigation}) {
  const [form, setForm] = useForm({
    address: '',
    phoneNumber: '',
    houseNumber: '',
    city: '',
  });
  const registerReducer = useSelector(state => state.registerReducer);

  const onSubmit = () => {
    const dataParam = {
      ...form,
      ...registerReducer,
    };

    axios
      .post('http://192.168.20.254:8001/api/register', dataParam)
      .then(res => {
        const dataResponse = res.data;
        if (dataResponse.meta.code === 200) {
          showMessageCustom('Successfully Registered User', 'success');
          navigation.replace('SuccessSignUp');
          setForm('reset');
        }
      })
      .catch(error => {
        showMessageCustom(error.response, 'danger');
      });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Header
          withIcon
          title="Address"
          subTitle="Make sure it's valid"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.wrapper}>
          <Gap height={26} />
          <Input
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <Input
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <Input
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button
            onPress={onSubmit}
            title="Sign Up Now"
            typeButton="btnWithIcon"
            typeIcon={TypeIcon.fontawesome}
            iconName="save"
          />
        </View>
      </View>
    </ScrollView>
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
