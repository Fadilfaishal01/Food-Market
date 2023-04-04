import axios from 'axios';
import {showMessageCustom} from '../../utils';

export const getFoodData = url => dispatch => {
  axios
    .get(`${url}/api/food`)
    .then(res => {
      const dataResponse = res.data.data.data;
      console.log(dataResponse);
      dispatch({type: 'SET_FOOD', value: dataResponse});
    })
    .catch(err => {
      showMessageCustom('Error Get Data Food', 'danger');
      console.log(err.getMessage());
    });
};

export const getFoodDataByTypes = (url, type) => dispatch => {
  axios
    .get(`${url}/api/food?types=${type}`)
    .then(res => {
      const dataResponse = res.data.data.data;
      switch (type) {
        case 'new_food':
          dispatch({type: 'SET_NEW_TASTE', value: dataResponse});
          break;
        case 'popular':
          dispatch({type: 'SET_POPULAR', value: dataResponse});
          break;
        case 'recommended':
          dispatch({type: 'SET_RECOMMENDED', value: dataResponse});
          break;
        default:
          dispatch({type: 'SET_FOOD', value: dataResponse});
          break;
      }
    })
    .catch(err => {
      showMessageCustom('Error Get Data Food', 'danger');
      console.log(err.getMessage());
    });
};
