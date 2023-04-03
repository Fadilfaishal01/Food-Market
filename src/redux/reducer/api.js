const initStateAPI = {
  url: 'http://192.168.253.30:8000',
  modalAPI: false,
};

export const apiReducer = (state = initStateAPI, action) => {
  if (action.type === 'SET_URL') {
    return {
      ...state,
      url: action.value,
    };
  }

  if (action.type === 'SET_MODAL_API') {
    return {
      ...state,
      modalAPI: action.value,
    };
  }

  return state;
};
