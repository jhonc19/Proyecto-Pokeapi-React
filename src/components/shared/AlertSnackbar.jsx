import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const AlertSnackbar = ({ open, setOpen, severity, duration, message }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
