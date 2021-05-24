import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  st0: { fill: '#FBD100' },
  st1: { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FFFFFF' },
  size: { width: '17px' },
}));

const ElectricIcon = () => {
  const { st0, st1, size } = useStyles();

  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 255.1 255.1"
      xmlSpace="preserve"
      className={size}
    >
      <circle className={st0} cx="127.6" cy="127.6" r="121.6" />
      <polygon
        className={st1}
        points="180.975,138.406 153.849,54.619 95.401,54.619 111.138,101.734 66.225,101.734 154.632,206.581 
	137.343,138.406 "
      />
    </svg>
  );
};

export default ElectricIcon;
