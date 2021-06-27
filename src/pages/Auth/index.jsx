import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Grid, Paper, Container, Tabs, Tab } from '@material-ui/core';

import useStyles from './Auth.styles';
import TabPanel from '../../components/shared/TabPanel';
import FormSignIn from '../../components/FormSignIn';
import FormSignUp from '../../components/FormSignUp';

const Auth = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Grid className={classes.root}>
      <Container maxWidth="lg">
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={8} className={classes.bgImg}></Grid>
            <Grid item xs={4}>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Ingresar" />
                <Tab label="Nueva Cuenta" />
              </Tabs>
              <SwipeableViews index={value} onChangeIndex={handleChange}>
                <TabPanel value={value} index={0}>
                  <FormSignIn />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <FormSignUp />
                </TabPanel>
              </SwipeableViews>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Grid>
  );
};

export default Auth;
