import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((props) => ({
  root: {
    display: 'flex',
    background: (props) =>
      `linear-gradient(90deg, ${props.colorMin} 25%, ${props.colorMax} 100%)`,
  },
  details: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '135px',
  },

  media: {
    width: '110px',
    height: '110px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8px',
    paddingBottom: '8px',
  },
  contentTypes: {
    display: 'flex',
    flex: 'wrap',
  },

  type: {
    display: 'flex',
    paddingRight: '8px',
  },

  spaceLeft: {
    paddingLeft: '4px',
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
