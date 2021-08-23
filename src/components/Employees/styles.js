import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    
  },
  paper:{
    padding:'2rem',
    display:'flex',
    justifyContent:'flex-start',
    flexDirection:'column'
  },
  textField:{
    margin:'1.5rem 0',
  },
  alert:{
    marginBottom:'.25rem'

  },

  submitButton:{
    backgroundColor:'#5A5278',
    letterSpacing:'.1rem',
    marginTop:'2rem',
    '&:hover': {
      backgroundColor:'#4d446b',
    }
  }


}));