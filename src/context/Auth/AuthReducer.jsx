const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGGED':
      return {
        ...state,
        isLogged: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
