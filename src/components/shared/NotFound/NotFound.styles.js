import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    padding: '50px 0',
  },
  imagen: {
    width: '250px',
    alignSelf: 'center',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;
