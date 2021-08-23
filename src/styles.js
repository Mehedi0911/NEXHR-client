import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container:{
        backgroundColor:'#F1F1F1',
        display:'flex',
        flexDirection:'column',
    },
    itemContainer:{
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'center', 
      alignItems:'center',
      padding:'2rem',
    },

    linksContainer:{
        display:'flex',
        width:'100%'
    },

    link:{
        margin:'1rem 2rem 0 0',
        cursor:'pointer',
        transition:'all ease .3s',
        color:'#5A5278',
        '&:hover': {
            color:'#6C757D',
          }
    },

    hr:{
        border: '1px solid #6C757D',
        width: '100%',
        opacity:'0.5'
    },

    gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));