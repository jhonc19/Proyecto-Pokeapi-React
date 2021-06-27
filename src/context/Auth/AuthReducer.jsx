const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGGED':
      return {
        ...state,
        isLogged: action.payload,
      };

    case 'USER_LOGGED':
      return {
        ...state,
        userLogged: action.payload,
      };

    case 'PENDING':
      return {
        ...state,
        isPending: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
