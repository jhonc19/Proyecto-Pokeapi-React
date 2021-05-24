import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import useStyles from './Layout.styles';

import PokemonState from '../../context/Pokemon/PokemonState';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <PokemonState>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            {children}
          </Container>
          <Footer />
        </main>
      </div>
    </PokemonState>
  );
};

export default Layout;
