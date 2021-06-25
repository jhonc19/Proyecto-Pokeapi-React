import React, { useContext, useState } from 'react';

import {
  Box,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
  OutlinedInput,
  InputLabel,
  Button,
  Icon,
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountBox from '@material-ui/icons/AccountCircle';

import AuthContext from '../../context/Auth/AuthContext';
import useStyles from './FormSignIn.styles';
import { useForm } from '../../hooks/useForm';

const FormSignIn = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { login } = authContext;

  const [showPassword, setShowPassword] = useState(false);

  const inititalState = {
    email: '',
    password: '',
  };

  const validatedFields = { email: false, password: false };

  const [values, handleInputChange, handleSubmit, errors] = useForm(
    inititalState,
    validatedFields
  );

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(login);
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
      <form className={classes.form} onSubmit={onSubmit}>
        <FormControl
          className={classes.textField}
          variant="outlined"
          error={errors.email}
        >
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            type="text"
            name="email"
            onChange={handleInputChange}
            required={true}
            endAdornment={
              <InputAdornment position="end">
                <Icon aria-label="toggle password visibility" edge="end">
                  <AccountBox />
                </Icon>
              </InputAdornment>
            }
            labelWidth={70}
          />
          {errors.email && (
            <FormHelperText>Email vacio o invalido</FormHelperText>
          )}
        </FormControl>
        <FormControl
          className={classes.textField}
          variant="outlined"
          error={errors.password}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            onChange={handleInputChange}
            required={true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          {errors.password && (
            <FormHelperText>Password vacio o invalido</FormHelperText>
          )}
        </FormControl>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Ingresar
        </Button>
      </form>
    </>
  );
};

export default FormSignIn;
