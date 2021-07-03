import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '50px 0',
  },

  paper: {
    height: 140,
    width: 100,
  },

  control: {
    padding: theme.spacing(2),
  },

  media: {
    width: '110px',
    height: '110px',
  },

  center: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
