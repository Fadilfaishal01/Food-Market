/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import Modal from 'react-native-modal';
import {Button, Gap, Input, Loading} from './components';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {colors, fonts, useForm} from './utils';
import { setAPIUrl, setModalAPI } from './redux/action';

const MainApp = () => {
  const {isLoading, loadingText} = useSelector(state => state.globalReducer);
  const stateAPI = useSelector(state => state.apiReducer);
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    url: stateAPI.url,
  });

  const changeUrlAPI = () => {
    if (form.url === '') {
      return Alert.alert('Perhatian', 'Inputan URL API Tidak Boleh Kosong !');
    }

    Alert.alert('Anda Yakin ?', 'Untuk Mengubah URL API Ini', [
      {
        text: 'Tidak',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Ya',
        onPress: () => actionChangeAPI(),
      },
    ]);
  };

  const actionChangeAPI = () => {
    dispatch(setAPIUrl(form.url));
    dispatch(setModalAPI(false));
  };

  return (
    <NavigationContainer>
      <Router />
      {isLoading && <Loading text={loadingText} />}
      <Modal
        animationIn="fadeInUp"
        isVisible={stateAPI.modalAPI}
        style={styles.modalSummary}>
        <View style={styles.headerModalSummary}>
          <View style={styles.wrapperHeader}>
            <Text style={styles.textTitle}>INFO</Text>
            <Gap height={10} />
            <Text style={styles.textDesc}>
              Aplikasi Food Market Anda Belum Terhubung Ke API, Mohon Masukan
              URL API Yang Valid Dan Benar !
            </Text>
          </View>
          <View style={styles.wrapperBody}>
            <Input
              placeholder="Input Your URL API"
              value={form.url}
              onChangeText={value => setForm('url', value)}
            />
            <Gap height={10} />
            <Button
              color={colors.primary}
              title="Change"
              typeButton="btnWithIcon"
              iconName="exchange"
              typeIcon="font-awesome"
              onPress={() => changeUrlAPI()}
            />
          </View>
        </View>
      </Modal>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

const styles = StyleSheet.create({
  // Modal
  modalSummary: {
    alignItems: 'center',
  },
  headerModalSummary: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.light,
    alignContent: 'center',
  },
  wrapperHeader: {
    paddingTop: 10,
    alignItems: 'center',
  },
  wrapperBody: {
    paddingBottom: 10,
  },
  textTitle: {
    fontFamily: fonts.poppins,
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  textDesc: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 15,
    fontWeight: '600',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

export default App;
