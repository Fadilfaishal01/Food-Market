import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Input, Header, Select} from '../../components';
import {colors, fonts, TypeIcon, useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, signUpAction} from '../../redux/action';

export default function SignUpAddress({navigation}) {
  const stateAPI = useSelector(state => state.apiReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    address: '',
    phoneNumber: '',
    houseNumber: '',
    city: '',
  });

  const {registerReducer, photoReducer} = useSelector(state => state);

  const onSubmit = () => {
    const dataParam = {
      ...form,
      ...registerReducer,
    };

    dispatch(setLoading(true, 'Loading...'));
    dispatch(signUpAction(dataParam, photoReducer, navigation, stateAPI.url));
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scroll}>
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
  scroll: {
    flexGrow: 1,
  },
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
