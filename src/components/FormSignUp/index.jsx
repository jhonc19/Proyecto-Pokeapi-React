import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountBox from '@material-ui/icons/AccountCircle';
import Person from '@material-ui/icons/Person';

import useStyles from './FormSignUp.styles';

const FormSignUp = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    user: '',
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img
          className={classes.img}
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="pokeapi"
        />
      </Box>
      <form className={classes.form}>
        <FormControl className={classes.textField} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
          <OutlinedInput
            id="name"
            type="text"
            name="name"
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <Icon aria-label="toggle password visibility" edge="end">
                  <Person />
                </Icon>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl className={classes.textField} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            id="user"
            type="text"
            name="user"
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <Icon aria-label="toggle password visibility" edge="end">
                  <AccountBox />
                </Icon>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl className={classes.textField} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            name="password"
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
        >
          Registrarse
        </Button>
      </form>
    </>
  );
};

export default FormSignUp;
