import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    
  },
  tableHead:{
    backgroundColor:'#5A5278',
   
  },
  tableCell:{
    color:'white',
    fontSize:'1.25rem',
    letterSpacing:'.07rem'
  },
  
  emailBtn: {
    marginTop: '2rem',
    float: 'right',
    backgroundColor:'#5A5278',
    '&:hover': {
      backgroundColor: '#4d446b',
  }
},
 


}));