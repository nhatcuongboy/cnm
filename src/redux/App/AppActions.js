export const testRequest = (actionSuccess) => ({
    type: 'TEST_REQUEST',
    actionSuccess,
  });
  
  export const testSuccess = (result) => ({
    type: 'TEST_SUCCESS',
    result,
  });
  
  export const testFailure = (error) => ({
    type: 'TEST_FAILURE',
    error,
  });
  
  