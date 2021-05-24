import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  st0: { fill: '#919AA2' },
  st1: { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FFFFFF' },
  size: { width: '17px' },
}));

const NormalIcon = () => {
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
        d="M203.89,127.89c0,42-34,76-76,76s-76-34-76-76s34-76,76-76S203.89,85.89,203.89,127.89z M175.816,127.55
	c0,26.503-21.497,48-48,48s-47.853-21.644-47.853-48s21.497-48,48-48S175.816,101.047,175.816,127.55z"
      />
    </svg>
  );
};

export default NormalIcon;
