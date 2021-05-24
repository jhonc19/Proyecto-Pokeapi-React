import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3349C4',
  },

  bgImg: {
    height: '500px',
    backgroundImage:
      'url("https://images5.alphacoders.com/613/thumb-1920-613933.jpg")',
    backgroundSize: 'cover',
  },

  paper: {
    boxShadow: '0 0 40px 10px #7987CF',
  },

  img: {
    maxHeight: '75px',
    padding: '10px',
  },
}));

export default useStyles;
