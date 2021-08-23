import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
    backgroundColor:'#5A5278',
    marginBottom: '.5rem',
    display: 'flex',
    padding: '16px',
  },

  itemContainer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
  },

  toolbar:{
      display:'flex',
      justifyContent:'flex-end',
  },

  reportIcon:{
    marginRight:'1.75rem',
    cursor:'pointer',
  },
  
  userIcon:{
    cursor:'pointer',
  },

  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));