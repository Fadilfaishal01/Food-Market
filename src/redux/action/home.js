import axios from 'axios';
import {showMessageCustom} from '../../utils';

export const getFoodData = url => dispatch => {
  axios
    .get(`${url}/api/food`)
    .then(res => {
      const dataResponse = res.data.data.data;
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
      if (type === 'new_food') {
        return dispatch({type: 'SET_NEW_TASTE', value: dataResponse});
      }

      if (type === 'popular') {
        return dispatch({type: 'SET_POPULAR', value: dataResponse});
      }

      if (type === 'recommended') {
        return dispatch({type: 'SET_RECOMMENDED', value: dataResponse});
      }
    })
    .catch(err => {
      showMessageCustom('Error Get Data Food', 'danger');
      console.log(err.getMessage());
    });
};
