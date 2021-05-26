import React, { forwardRef, useContext, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './ModalPokemon.styles';
import {
  getIconByType,
  getColorByType,
  capitalizeString,
  getUrlEvolution,
} from './../../utils';

import PokemonContext from '../../context/Pokemon/PokemonContext';

import AttackIcon from '../Icons/AttackIcon';
import DefenseIcon from '../Icons/DefenseIcon';
import StaminaIcon from '../Icons/StaminaIcon';

const ModalPokemon = forwardRef((props, ref) => {
  const { pokemon } = props;
  const { id, name, sprites, types, height, stats, weight, species } = pokemon;

  const pokemonContext = useContext(PokemonContext);
  const { getEvolution, clearEvolution, pokemonEvolution } = pokemonContext;

  const colors = getColorByType(types[0].type.name);
  const [colorMax, colorMin] = colors;
  const classes = useStyles({ colorMax, colorMin });

  const statsIndexed = stats.reduce(
    (acc, el) => ({
      ...acc,
      [el.stat.name]: el,
    }),
    {}
  );

  const { attack, defense, hp: stamina } = statsIndexed;

  useEffect(() => {
    const fetchData = async () => {
      await clearEvolution();
      const url = await getUrlEvolution(species.url);
      await getEvolution(url);
    };

    fetchData();
  }, []);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={4}>
        <Typography variant="h4" className={classes.namePokemon}>
          {name.toUpperCase() + ' - ' + id}
        </Typography>

        <img
          src={sprites.front_default}
          alt="pokeapi"
          className={classes.media}
        />
        <Grid container justify="center" className={classes.contentTypes}>
          {types.map(({ type }) => (
            <Grid key={type.name} item className={classes.types}>
              {getIconByType(type.name)}
              <Typography variant="subtitle2" color="textSecondary">
                {capitalizeString(type.name)}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          className={classes.containerStats}
          direction="column"
          justify="center"
        >
          <Grid item className={classes.contentTitle}>
            <Typography variant="subtitle1" className={classes.nameTitle}>
              Information
            </Typography>
          </Grid>
          <Grid container justify="space-around">
            <Grid item xs={6} className={classes.contentDetailsFull}>
              <Typography variant="subtitle2" className={classes.nameTitle}>
                Weight
              </Typography>
              <Typography variant="subtitle2">{`${weight / 10} kg`}</Typography>
            </Grid>
            <Grid item xs={6} className={classes.contentDetailsRight}>
              <Typography variant="subtitle2" className={classes.nameTitle}>
                Height
              </Typography>
              <Typography variant="subtitle2">{`${height / 10} m`}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.containerStats}
          direction="column"
          justify="center"
        >
          <Grid item className={classes.contentTitle}>
            <Typography variant="subtitle1" className={classes.nameTitle}>
              Base Stats
            </Typography>
          </Grid>
          <Grid container justify="space-around">
            <Grid item xs={4} className={classes.contentDetailsLeft}>
              <Grid container justify="center">
                <Typography
                  variant="subtitle2"
                  className={classes.nameTitleIcon}
                >
                  Attack
                </Typography>
                <AttackIcon />
              </Grid>
              <Typography variant="subtitle2">{attack.base_stat}</Typography>
            </Grid>
            <Grid item xs={4} className={classes.contentDetailsFull}>
              <Grid container justify="center">
                <Typography
                  variant="subtitle2"
                  className={classes.nameTitleIcon}
                >
                  Defense
                </Typography>
                <DefenseIcon />
              </Grid>
              <Typography variant="subtitle2">{defense.base_stat}</Typography>
            </Grid>
            <Grid item xs={4} className={classes.contentDetailsRight}>
              <Grid container justify="center">
                <Typography
                  variant="subtitle2"
                  className={classes.nameTitleIcon}
                >
                  Stamina
                </Typography>
                <StaminaIcon />
              </Grid>
              <Typography variant="subtitle2">{stamina.base_stat}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={false} md={8}>
        {pokemonEvolution.map((pokemon) => (
          <h1 key={pokemon.id}>{pokemon.name}</h1>
        ))}
      </Grid>
    </Grid>
  );
});

export default ModalPokemon;
