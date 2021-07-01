import React, { useReducer } from 'react';
import axios from 'axios';
import { db } from '../../firebase/firebaseConfig';
import PokemonContext from './PokemonContext';
import PokemonReducer from './PokemonReducer';

const PokemonState = (props) => {
  const initialState = {
    pokemonList: [],
    favoriteList: [],
    pokemon: {},
    pokemonEvolution: [],
    notFound: false,
    search: false,
  };

  const getPokemons = async (offset = 0, limit = 16) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const { data } = await axios.get(url);
      const { results } = data;

      const promises = results.map(async ({ url }) => {
        const { data } = await axios.get(url);
        return data;
      });

      const pokemonList = await Promise.all(promises);

      dispatch({
        type: 'GET_POKEMONS',
        payload: pokemonList,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getFavorites = async (idUser) => {
    let favoriteList;
    const firestoreRef = db.collection('pokemons-favorites').doc(idUser);
    await firestoreRef.get().then((querySnapshot) => {
      if (querySnapshot.data()) {
        favoriteList = querySnapshot.data().pokemonId;
      } else {
        favoriteList = [];
      }
    });

    // window.localStorage.getItem('favorite_pokemon') !== null
    //   ? (favoriteList = JSON.parse(
    //       window.localStorage.getItem('favorite_pokemon')
    //     ))
    //   : (favoriteList = []);

    dispatch({
      type: 'SET_FAVORITE',
      payload: favoriteList,
    });
  };

  const searchPokemon = async (namePokemon) => {
    try {
      setSearch(true);
      const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;
      const { data } = await axios.get(url);

      setNotFound(false);

      dispatch({
        type: 'GET_POKEMON',
        payload: data,
      });
    } catch (error) {
      setNotFound(true);
      console.log(error);
    }
  };

  const clearPokemon = () => {
    setNotFound(false);
    setSearch(false);

    dispatch({
      type: 'GET_POKEMON',
      payload: {},
    });
  };

  const clearPokemons = () => {
    dispatch({
      type: 'GET_POKEMONS',
      payload: [],
    });
  };

  const setNotFound = (found) => {
    const valueFound = Boolean(found);

    dispatch({
      type: 'SET_FOUND',
      payload: valueFound,
    });
  };

  const setSearch = (search) => {
    const valuesearch = Boolean(search);

    dispatch({
      type: 'SET_SEARCH',
      payload: valuesearch,
    });
  };

  const updateFavorites = async (idPokemon, idUser) => {
    let favoriteList;
    const firestoreRef = db.collection('pokemons-favorites').doc(idUser);

    await firestoreRef.get().then((querySnapshot) => {
      if (querySnapshot.data()) {
        favoriteList = querySnapshot.data().pokemonId;
      } else {
        favoriteList = [];
      }
    });

    const isFavorite = favoriteList.indexOf(idPokemon);

    isFavorite >= 0
      ? favoriteList.splice(isFavorite, 1)
      : favoriteList.push(idPokemon);

    await firestoreRef.set({
      pokemonId: favoriteList,
    })  

    dispatch({
      type: 'SET_FAVORITE',
      payload: favoriteList,
    });
  };

  const getPokemon = async (url) => {
    try {
      const { data } = await axios.get(url);

      dispatch({
        type: 'GET_POKEMON',
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getEvolution = async (url) => {
    try {
      const { data } = await axios.get(url);
      const { chain } = data;
      const pokemons = getNamePokemonEvolution(chain);

      const promises = pokemons.map(async (pokemon) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const { data } = await axios.get(url);
        return data;
      });

      const pokemonEvolutions = await Promise.all(promises);

      dispatch({
        type: 'GET_EVOLUTION',
        payload: pokemonEvolutions,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clearEvolution = async () => {
    dispatch({
      type: 'GET_EVOLUTION',
      payload: [],
    });
  };

  const getNamePokemonEvolution = (chain) => {
    let namePokemons = [];

    while (chain) {
      namePokemons.push(chain.species.name);
      chain = chain.evolves_to[0];
    }

    return namePokemons;
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList: state.pokemonList,
        pokemon: state.pokemon,
        favoriteList: state.favoriteList,
        updateFavorites,
        getFavorites,
        getPokemons,
        getPokemon,
        searchPokemon,
        clearPokemon,
        clearPokemons,
        clearEvolution,
        getEvolution,
        notFound: state.notFound,
        search: state.search,
        pokemonEvolution: state.pokemonEvolution,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
