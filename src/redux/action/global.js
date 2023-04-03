export const setLoading = (status, text = '') => {
  return {
    type: 'SET_LOADING',
    value: {isLoading: status, loadingText: text},
  };
};
