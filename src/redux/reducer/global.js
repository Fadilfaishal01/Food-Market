const initGlobalState = {
  isError: false,
  message: 'Error',
  isLoading: false,
  loadingText: 'Loading...',
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }

  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value.isLoading,
      loadingText: action.value.loadingText,
    };
  }
  return state;
};
