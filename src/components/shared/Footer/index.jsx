import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const Footer = () => {
  return (
    <>
      <Box pt={2} p={2} bgcolor="primary.main" color="info.contrastText">
        <Typography variant="body2" align="center">
          {'Copyright © Jhon Choque ' + new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
