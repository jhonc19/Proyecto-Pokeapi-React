import React from 'react';
import useStyles from './NotFound.styles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>No se encontro Pokemon</h1>
      <img
        src="https://www.kindpng.com/picc/m/227-2274453_meme-png-surprised-pikachu-surprised-pikachu-no-background.png"
        alt="notfound"
        className={classes.imagen}
      />
    </div>
  );
};

export default NotFound;
