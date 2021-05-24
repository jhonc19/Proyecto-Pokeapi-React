import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    maxHeight: '75px',
    padding: '20px 10px',
  },

  form: {
    margin: '16px',
  },

  textField: {
    width: '100%',
    paddingBottom: '15px',
  },

  button: {
    width: '100%',
  },
}));

export default useStyles;
