import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  st0: { fill: '#5A8EA2' },
  st1: { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FFFFFF' },
  size: { width: '17px' },
}));

const SteelIcon = () => {
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
        d="M44.336,127.584c-0.022-0.038-0.022-0.085,0-0.123l41.883-71.558c0.022-0.037,0.062-0.059,0.104-0.059h83.013
	c0.044,0,0.083,0.022,0.106,0.061l41.423,71.558c0.021,0.037,0.021,0.085,0,0.122l-41.423,71.479
	c-0.022,0.037-0.062,0.061-0.106,0.061H86.323c-0.044,0-0.083-0.022-0.104-0.059L44.336,127.584z M166.187,127.482
	c0,21.304-17.27,38.574-38.574,38.574s-38.574-17.27-38.574-38.574s17.27-38.574,38.574-38.574S166.187,106.178,166.187,127.482z"
      />
    </svg>
  );
};

export default SteelIcon;
