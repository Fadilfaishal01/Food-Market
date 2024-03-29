import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';
import {colors, TypeIcon, useForm} from '../../utils';
import {Login} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, setModalAPI, signInAction} from '../../redux/action';

export default function SignIn({navigation}) {
  const stateAPI = useSelector(state => state.apiReducer);
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    if (stateAPI.url === '') {
      dispatch(setModalAPI(true));
    }

    dispatch(setLoading(true, 'Loading...'));
    dispatch(signInAction(form, navigation, stateAPI.url));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.wrapperIconSVG}>
        <Login width={'100%'} height={'100%'} />
      </View>
      <View style={styles.wrapper}>
        <Input
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <Input
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry={true}
        />
        <Gap height={24} />
        <Button
          onPress={() => onSubmit()}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  wrapperIconSVG: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: colors.light,
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 24,
    flex: 1,
  },
});
