import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  st0: { fill: '#C8B686' },
  st1: { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FFFFFF' },
  size: { width: '17px' },
}));

const RockIcon = () => {
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
        d="M173.599,124.04c-0.01-0.013-0.014-0.03-0.011-0.046l10.762-62.756c0.005-0.029,0.03-0.05,0.059-0.05h3.406
	c0.026,0,0.049,0.017,0.057,0.042l24.247,76.771c0.008,0.024-0.001,0.05-0.02,0.066l-17.878,13.958
	c-0.027,0.021-0.065,0.015-0.085-0.012L173.599,124.04z M43.077,165.643c0,0.026,0.017,0.049,0.041,0.057l36.853,12.05
	c0.018,0.006,0.038,0.003,0.053-0.008l82.374-56.869c0.014-0.01,0.023-0.024,0.025-0.041l8.834-59.272
	c0.006-0.036-0.023-0.069-0.059-0.069H98.235c-0.018,0-0.035,0.008-0.046,0.022L43.091,127.98c-0.009,0.011-0.014,0.024-0.014,0.039
	V165.643z M95.328,180.82l40.261,13.188c0.018,0.006,0.038,0.003,0.054-0.008l47.933-34.383c0.027-0.019,0.033-0.055,0.015-0.082
	l-17.969-26.739c-0.019-0.028-0.056-0.035-0.084-0.016L95.328,180.82z"
      />
    </svg>
  );
};

export default RockIcon;
