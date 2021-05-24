import React from 'react';

// import Auth from './pages/Auth';
import AppRouter from './routers/AppRouter';
import AuthState from './context/Auth/AuthState';
// import Home from './pages/Home';

const App = () => {
  return (
    <AuthState>
      <AppRouter />
    </AuthState>
  );
};

export default App;
