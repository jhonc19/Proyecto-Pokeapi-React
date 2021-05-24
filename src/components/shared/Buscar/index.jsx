import React, { useContext } from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Search from '@material-ui/icons/Search';

import useStyles from './Buscar.styles';
import PokemonContext from './../../../context/Pokemon/PokemonContext';

const Buscar = () => {
  const classes = useStyles();
  let timeout;

  const pokemonContext = useContext(PokemonContext);
  const { searchPokemon, clearPokemon } = pokemonContext;

  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(timeout);

    value
      ? (timeout = setTimeout(() => {
          clearPokemon();
          searchPokemon(value);
          clearTimeout(timeout);
        }, 1200))
      : clearPokemon();
    /*     const keycode = e.keyCode;
    if(keycode === '13'){
      alert('You pressed a "enter" key in textbox'); 
    } */
  };

  return (
    <>
      <div className={classes.margin}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Search className={classes.iconSize} />
          </Grid>
          <Grid item xs={true}>
            <TextField
              id="standard-search"
              variant="outlined"
              label="Buscar Pokemon..."
              type="search"
              className={classes.textFieldWidth}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Buscar;
