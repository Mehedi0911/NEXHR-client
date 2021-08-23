import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    marginTop:'2rem'
    
  },
  paper:{
    padding:'2rem',
    display:'flex',
    justifyContent:'flex-start',
    flexDirection:'column',
  },

  dropZone:{
    margin:'2rem 0',
    display:'flex',
    justifyContent:'center',
    padding:'2rem',
    border:'1px dashed lightGray'
  },

  highlighted:{
      backgroundColor:'#F1F1F1',
  },

  drops:{
    textAlign:'center'
  },

  fileText: {
    marginTop:'1rem',
    color:'#5A5278',
  },

  button:{
    backgroundColor:'#5A5278',
    marginTop:'1rem',
    color:'white',
    letterSpacing:'.1rem',
    '&:hover': {
      backgroundColor:'#4d446b',
    }
  },
  csvAlert:{
    backgroundColor:'white',
    color:'#4d446b',
    marginBottom:'.2rem 0',
  },

  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));