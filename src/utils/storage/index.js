import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessageCustom} from '../alertFlashMessage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    showMessageCustom('Failed save to localstorage : ', e.getMessage());
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    showMessageCustom('Failed read data from localstorage : ', e.getMessage());
  }
};
