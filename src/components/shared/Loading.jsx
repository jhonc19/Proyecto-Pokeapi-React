import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import pikachuRun from './../../assets/pikachu.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundSize: 'cover',
    width: '300px',
    height: '300px',
  },

  img: {
    width: '250px',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <img src={pikachuRun} alt="pikachuRun" className={classes.img} />
    </Grid>
  );
};

export default Loading;
