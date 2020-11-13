const defaultState = {
    error: '',
    isTesting: false,
    result: null
  };
  
  const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'TEST_REQUEST':
        return { ...state, isTesting: true };
      case 'TEST_SUCCESS':
        return { ...state, isTesting: false, result: action.result };
      case 'TEST_FAILURE':
        return { ...state, isTesting: false, error: action.error };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  