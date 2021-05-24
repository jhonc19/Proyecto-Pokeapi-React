import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  st0: { fill: '#5B5466' },
  st1: { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FFFFFF' },
  size: { width: '17px' },
}));

const DarkIcon = () => {
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
        d="M107.525,189.876c3.54,0.472,7.168,0.718,10.861,0.718c39.32,0,71.194-27.794,71.194-62.077
	c0-34.285-31.875-62.077-71.194-62.077c-2.638,0-5.244,0.126-7.805,0.369c19.504,12.884,32.401,35.204,32.401,60.579
	C142.98,154.066,128.728,177.365,107.525,189.876z M127.6,204.963c42.727,0,77.363-34.636,77.363-77.363
	S170.327,50.237,127.6,50.237S50.237,84.873,50.237,127.6S84.873,204.963,127.6,204.963z"
      />
    </svg>
  );
};

export default DarkIcon;
