import React, { useContext, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';

import useStyles from './ListadoPokemon.styles';
import CardPokemon from '../CardPokemon';
import PokemonContext from './../../context/Pokemon/PokemonContext';
import AuthContext from './../../context/Auth/AuthContext';
import Loading from '../shared/Loading';
import NotFound from '../shared/NotFound';

const ListadoPokemon = ({ page }) => {
  const classes = useStyles();
  const location = useLocation();
  const authContext = useContext(AuthContext);
  const { userLogged } = authContext;
  const pokemonContext = useContext(PokemonContext);
  const {
    getPokemons,
    getFavorites,
    pokemonList,
    pokemon,
    notFound,
    search,
    clearPokemons,
    getPokemonsFavorites,
    favoriteList,
  } = pokemonContext;

  useEffect(() => {
    getFavorites(userLogged.email);
  }, []);

  useEffect(() => {
    if (location.pathname === '/pokemon/list') {
      clearPokemons();
      const fetchData = async () => await getPokemons(page * 16);
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    if (location.pathname === '/pokemon/favorites') {
      const fetchData = async () => await getPokemonsFavorites(favoriteList);
      fetchData();
    }
  }, [favoriteList]);

  return (
    <>
      {location.pathname === '/pokemon/favorites' &&
        (pokemonList.length === 0 ? (
          <h1 className={classes.center}>No hay pokemones favoritos</h1>
        ) : (
          <h1 className={classes.center}>Pokemones Favoritos</h1>
        ))}

      <Grid container justify="center" spacing={2} className={classes.root}>
        {search ? (
          Object.entries(pokemon).length !== 0 ? (
            <Grid key={pokemon.id} item xs={12} md={6} lg={4} xl={3}>
              <CardPokemon pokemon={pokemon} />
            </Grid>
          ) : notFound ? (
            <NotFound />
          ) : (
            <Loading />
          )
        ) : pokemonList.length !== 0 ? (
          pokemonList.map((data) => (
            <Grid key={data.id} item xs={12} md={6} lg={4} xl={3}>
              <CardPokemon pokemon={data} />
            </Grid>
          ))
        ) : (
          <Loading />
        )}
      </Grid>
    </>
  );
};

export default ListadoPokemon;
