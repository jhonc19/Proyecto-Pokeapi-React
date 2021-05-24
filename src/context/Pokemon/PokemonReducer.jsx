const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemonList: action.payload,
        notFound: false,
        search: false,
        pokemon: {},
      };
    case 'GET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };

    case 'SET_FAVORITE':
      return {
        ...state,
        favoriteList: action.payload,
      };

    case 'SET_FOUND':
      return {
        ...state,
        notFound: action.payload,
      };

    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };

    case 'GET_EVOLUTION':
      return {
        ...state,
        pokemonEvolution: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
