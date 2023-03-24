import {showMessage} from 'react-native-flash-message';

export const showMessageCustom = (message, type) => {
  return showMessage({
    message: message,
    type: type,
    icon: type,
  });
};
