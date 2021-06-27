import React, { useReducer, useEffect } from 'react';
import { firebase } from '../../firebase/firebaseConfig';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const AuthState = (props) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          dispatch({
            type: 'USER_LOGGED',
            payload: user.providerData[0],
          });

          dispatch({
            type: 'LOGGED',
            payload: true,
          });
        }

        dispatch({
          type: 'PENDING',
          payload: false,
        });
      }, 1000);
    });
  }, []);

  const initialState = {
    isLogged: false,
    userLogged: {},
    isPending: true,
  };

  const login = async (email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setTimeout(() => {
          dispatch({
            type: 'USER_LOGGED',
            payload: firebase.auth().currentUser.providerData[0],
          });

          dispatch({
            type: 'LOGGED',
            payload: true,
          });
        }, 1000);
      })
      // })
      .catch((error) => {
        console.log(error);
      });
  };

  const register = async (name, email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: 'USER_LOGGED',
          payload: {},
        });

        dispatch({
          type: 'LOGGED',
          payload: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        isLogged: state.isLogged,
        isPending: state.isPending,
        userLogged: state.userLogged,
        login,
        logout,
        register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
