import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {ProfileDummy} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';
import {useSelector} from 'react-redux';

export default function HomeProfile() {
  const [photo, setPhoto] = useState(ProfileDummy);
  const stateAPI = useSelector(state => state.apiReducer);

  useEffect(() => {
    getData('userProfile').then(res => {
      if (res != null) {
        const urlPhoto = `${stateAPI.url}/storage/${res.profile_photo_path}`;
        setPhoto({uri: res.profile_photo_url});
      }
    });
  }, []);
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.desc}>Let's get some foods</Text>
      </View>
      <Image source={photo} style={styles.profile} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: colors.light,
  },
  appName: {
    fontSize: 22,
    fontFamily: fonts.poppinsMedium,
    color: colors.secondary,
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.poppinsLight,
    color: colors.third,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});
