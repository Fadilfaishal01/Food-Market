import {setLoading} from './global';
import axios from 'axios';
import {showMessageCustom, storeData} from '../../utils';

export const setSignUpAction = form => {
  return {type: 'SET_REGISTER', value: form};
};

export const signUpAction =
  (dataRegister, photoReducer, navigation, url) => dispatch => {
    axios
      .post(url + '/api/register', dataRegister)
      .then(res => {
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const userProfile = res.data.data.user;

        storeData('token', {value: token});

        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);

          // Lakukan aksi upload photo ketika user sudah di registerasi
          axios
            .post(url + '/api/user/photo', photoForUpload, {
              headers: {
                Authorization: token, // Token dari hasil registerasi user
                'Content-Type': 'multipart/form-data',
              },
            })
            .then(resUpload => {
              userProfile.profile_photo_url = `${url}/storage/${resUpload.data.data[0]}`;
              storeData('userProfile', userProfile);
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            })
            .catch(error => {
              showMessageCustom('Failed Upload', 'danger');
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            });
        } else {
          storeData('userProfile', userProfile);
          navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
        }

        dispatch(setLoading(false));
      })
      .catch(error => {
        dispatch(setLoading(false));
        showMessageCustom(error.getMessage(), 'danger');
      });
  };

export const signInAction = (dataLogin, navigation, url) => dispatch => {
  axios({
    method: 'POST',
    url: url + '/api/login',
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(dataLogin),
  })
    .then(res => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const userProfile = res.data.data.user;
      storeData('userProfile', userProfile);
      storeData('token', {value: token});
      dispatch(setLoading(false));
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(error => {
      dispatch(setLoading(false));
      showMessageCustom(error.message, 'danger');
    });
};

export const setPhotoAction = data => {
  return {type: 'SET_PHOTO', value: data};
};

export const setStatusPhotoAction = data => {
  return {type: 'SET_PHOTO', value: data};
};
