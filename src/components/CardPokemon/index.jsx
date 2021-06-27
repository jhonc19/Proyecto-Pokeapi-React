import React, { useContext, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Modal,
} from '@material-ui/core';

import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';

import useStyles from './CardPokemon.styles';

import PokemonContext from '../../context/Pokemon/PokemonContext';
import ModalPokemon from '../ModalPokemon';
import AlertSnackbar from '../shared/AlertSnackbar';

import { getIconByType, getColorByType, capitalizeString } from '../../utils';

const CardPokemon = ({ pokemon }) => {
  const { name, types, sprites } = pokemon;

  const colors = getColorByType(types[0].type.name);
  const classes = useStyles({ colorMax: colors[0], colorMin: colors[1] });

  const pokemonContext = useContext(PokemonContext);
  const { favoriteList, updateFavorites } = pokemonContext;

  const heart = favoriteList.includes(pokemon.name) ? 'secondary' : 'default';

  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const handleHeart = (e) => {
    e.preventDefault();
    updateFavorites(name);
    setOpenSnackbar(true);
  };

  return (
    <Card className={classes.root}>
      {favoriteList.includes(pokemon.name) ? (
        <AlertSnackbar
          open={openSnackbar}
          setOpen={setOpenSnackbar}
          severity="success"
          duration={1500}
          message="Se agregó a favoritos"
        />
      ) : (
        <AlertSnackbar
          open={openSnackbar}
          setOpen={setOpenSnackbar}
          severity="error"
          duration={1500}
          message="Se quitó de favoritos"
        />
      )}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {capitalizeString(name)}
          </Typography>
          <div className={classes.contentTypes}>
            {types.map(({ type }) => (
              <div key={type.name} className={classes.type}>
                {getIconByType(type.name)}
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  className={classes.spaceLeft}
                >
                  {capitalizeString(type.name)}
                </Typography>
              </div>
            ))}
          </div>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="favorite" color={heart} onClick={handleHeart}>
            <FavoriteOutlined />
          </IconButton>
          <Button variant="outlined" size="small" onClick={handleModalOpen}>
            Detalles...
          </Button>
        </div>
      </div>
      <div className={classes.cover}>
        <CardMedia
          className={classes.media}
          image={sprites.front_default}
          title="Live from space album cover"
        />
      </div>
      <Modal
        open={open}
        onClose={handleModalClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalPokemon pokemon={pokemon} />
      </Modal>
    </Card>
  );
};

export default CardPokemon;
