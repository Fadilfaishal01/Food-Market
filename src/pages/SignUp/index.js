import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, Input} from '../../components';
import {colors, fonts, TypeIcon, useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessageCustom} from '../../utils/alertFlashMessage';
import {
  setPhotoAction,
  setSignUpAction,
  setStatusPhotoAction,
} from '../../redux/action';

export default function SignUp({navigation}) {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [photo, setPhoto] = useState('');

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setSignUpAction(form));
    navigation.navigate('SignUpAddress');
  };

  const addImage = () => {
    launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
      response => {
        if (response.didCancel || response.error) {
          showMessageCustom('Belum memilih foto', 'danger');
        } else {
          const source = {uri: response.assets[0].uri};
          const dataImage = {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
          };

          setPhoto(source);
          dispatch(setPhotoAction(dataImage));
          dispatch(setStatusPhotoAction(true));
        }
      },
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header
          withIcon
          title="Sign Up"
          subTitle="Register and eat"
          onPress={() => navigation.goBack()}
        />
        {/* <Text>{`status error => ${globalState.isError}`}</Text> */}
        <View style={styles.wrapper}>
          <Gap height={26} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.sectionPhoto}
            onPress={addImage}>
            <View style={styles.borderPhoto}>
              {photo ? (
                <Image source={photo} style={styles.photoContainer} />
              ) : (
                <View style={styles.photoContainer}>
                  <Text style={styles.addPhoto}>Add Photo</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <Gap height={16} />
          <Input
            label="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
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
            secureTextEntry
          />
          <Gap height={24} />
          <Button
            title="Continue"
            typeButton="btnWithIcon"
            typeIcon={TypeIcon.fontawesome}
            iconName="arrow-right"
            onPress={onSubmit}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: fonts.poppinsLight,
    color: colors.third,
    textAlign: 'center',
  },
});
