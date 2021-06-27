import React, { useContext, useState } from 'react';

import {
  Box,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
  Button,
  Icon,
  FormHelperText,
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountBox from '@material-ui/icons/AccountCircle';
import Person from '@material-ui/icons/Person';

import useStyles from './FormSignUp.styles';
import AuthContext from '../../context/Auth/AuthContext';
import { useForm } from '../../hooks/useForm';

const FormSignUp = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { register } = authContext;
  const [showPassword, setShowPassword] = useState(false);

  const inititalState = {
    name: '',
    email: '',
    password: '',
  };

  const validatedFields = { name: false, email: false, password: false };

  const [values, errors, handleInputChange, verificationErrors] = useForm(
    inititalState,
    validatedFields
  );

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!verificationErrors()) {
      await register(values.name, values.email, values.password);
    }
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
      <form className={classes.form} onSubmit={onSubmit} autoComplete="off">
        <FormControl
          className={classes.textField}
          variant="outlined"
          error={errors.name}
        >
          <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
          <OutlinedInput
            type="text"
            name="name"
            onChange={handleInputChange}
            required={true}
            endAdornment={
              <InputAdornment position="end">
                <Icon aria-label="toggle password visibility" edge="end">
                  <Person />
                </Icon>
              </InputAdornment>
            }
            labelWidth={70}
          />
          {errors.name && <FormHelperText>Nombre vacio</FormHelperText>}
        </FormControl>
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
          Registrarse
        </Button>
      </form>
    </>
  );
};

export default FormSignUp;
