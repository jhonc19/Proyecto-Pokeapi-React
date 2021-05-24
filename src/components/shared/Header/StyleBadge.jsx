import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyleBadge = withStyles(( ) => ({
  badge: {
    top: '16px',
    right: '17px',
    color: 'white',
    padding: '0 2px',
  },
}))(Badge);

export default StyleBadge;
