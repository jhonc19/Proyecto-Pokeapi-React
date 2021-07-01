import React, { useContext, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import useStyles from './ListadoPokemon.styles';
import CardPokemon from '../CardPokemon';
import PokemonContext from './../../context/Pokemon/PokemonContext';
import AuthContext from './../../context/Auth/AuthContext';
import Loading from '../shared/Loading';
import NotFound from '../shared/NotFound';

const ListadoPokemon = ({ page }) => {
  const classes = useStyles();
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
  } = pokemonContext;

  useEffect(() => {
    getFavorites(userLogged.email);
  }, []);

  useEffect(() => {
    clearPokemons();
    const fetchData = async () => await getPokemons(page * 16);

    fetchData();
  }, [page]);

  return (
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
  );
};

export default ListadoPokemon;
