import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const AuthState = (props) => {
  const initialState = {
    isLogged: true,
  };

  const login = () => {
    const valBoolean = true;

    dispatch({
      type: 'LOGGED',
      payload: valBoolean,
    });
  };

  const logout = () => {
    const valBoolean = false;

    dispatch({
      type: 'LOGGED',
      payload: valBoolean,
    });
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        isLogged: state.isLogged,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
