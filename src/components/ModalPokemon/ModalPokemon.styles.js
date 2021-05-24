import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((props) => ({
  root: {
    width: 950,
    backgroundColor: (props) => `${props.colorMin}`,
    boxShadow:
      '0px 3px 5px -1px rgb(0 0 0 / 20%),' +
      '0px 5px 8px 0px rgb(0 0 0 / 14%),' +
      '0px 1px 14px 0px rgb(0 0 0 / 12%);',
    padding: '16px',
    borderRadius: '50px',
    border: (props) => `15px solid ${props.colorMax}`,
    textAlign: 'center',
  },

  containerStats: {
    padding: '0 0 8px 0',
  },

  media: {
    width: '80%',
  },

  namePokemon: {
    color: 'black',
    fontWeight: 800,
  },

  contentTitle: {
    border: (props) => `2px solid ${props.colorMax}`,
    background: (props) =>
      `linear-gradient(0deg, ` +
      `${props.colorMax} 0%, ` +
      `${props.colorMin} 50%, ` +
      `${props.colorMax} 100%);`,
  },

  contentDetailsFull: {
    borderLeft: (props) => `2px solid ${props.colorMax}`,
    borderRight: (props) => `2px solid ${props.colorMax}`,
    borderBottom: (props) => `2px solid ${props.colorMax}`,
    backgroundColor: 'white',
    padding: '4px 0',
  },

  contentDetailsLeft: {
    borderLeft: (props) => `2px solid ${props.colorMax}`,
    borderBottom: (props) => `2px solid ${props.colorMax}`,
    backgroundColor: 'white',
    padding: '4px 0',
  },

  contentDetailsRight: {
    borderRight: (props) => `2px solid ${props.colorMax}`,
    borderBottom: (props) => `2px solid ${props.colorMax}`,
    backgroundColor: 'white',
    padding: '4px 0',
  },

  nameTitle: {
    fontWeight: 700,
  },

  nameTitleIcon: {
    fontWeight: 700,
    paddingRight: '3px',
  },

  types: {
    padding: '0 10px',
  },

  contentTypes: {
    padding: '0 0 4px 0',
  },
}));

export default useStyles;
