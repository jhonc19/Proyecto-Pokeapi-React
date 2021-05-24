import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  st0: { fill: '#E87236' },
  st1: { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FFFFFF' },
  size: { width: '17px' },
}));

const GroundIcon = () => {
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
      <path
        className={st1}
        d="M83.051,173.856c-0.043,0-0.073-0.042-0.059-0.083L123.28,70.938c0.009-0.025,0.032-0.041,0.059-0.041h51.007
	c0.026,0,0.05,0.017,0.059,0.042l39.689,102.835c0.014,0.04-0.016,0.082-0.059,0.082H83.051L83.051,173.856z M35.359,174.302
	c-0.043,0-0.073-0.043-0.058-0.084l31-80.093c0.009-0.024,0.032-0.04,0.058-0.04h26.067c0.043,0,0.073,0.043,0.058,0.083
	l-30.009,80.093c-0.009,0.024-0.032,0.041-0.058,0.041H35.359z"
      />
    </svg>
  );
};

export default GroundIcon;
