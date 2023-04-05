import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts, getData} from '../../utils';
import {ProfileTabSection} from '../../components';

export default function Profile() {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.contentProfile}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image
              source={{uri: userProfile.profile_photo_url}}
              style={styles.photoContainer}
            />
          </View>
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <View style={styles.contentTabBar}>
        <ProfileTabSection />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
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
  name: {
    fontSize: 18,
    fontFamily: fonts.poppinsMedium,
    color: colors.secondary,
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: fonts.poppinsLight,
    color: colors.third,
    textAlign: 'center',
  },
  contentTabBar: {
    flex: 1,
    marginTop: 24,
  },
  contentProfile: {
    backgroundColor: colors.light,
    paddingBottom: 26,
  },
});
