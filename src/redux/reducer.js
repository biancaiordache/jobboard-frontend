const initialState = {
    jobs: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_JOBS':
        return { ...state, jobs: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;