export const setAPIUrl = url => {
  return {type: 'SET_URL', value: url};
};

export const setModalAPI = status => {
  return {type: 'SET_MODAL_API', value: status};
};
