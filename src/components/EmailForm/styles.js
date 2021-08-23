import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        margin: '4rem 0 2rem 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',

    },
    paper: {
        padding: '2rem',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    textField: {
        margin: '1.5rem 0',
    },
    alert: {
        marginBottom: '.25rem'
    },
    recipientsDiv: {
        display: 'flex'
    },
    progress: {
        display: 'flex',
        justifyContent: 'center'
    },
    recipients: {
        backgroundColor: '#F1F1F1',
        padding: '.15rem .75rem',
        margin: '.25rem',
        borderRadius: '25px'
    },


    submitButton: {
        backgroundColor: '#5A5278',
        letterSpacing: '.1rem',
        marginTop: '2rem',
        '&:hover': {
            backgroundColor: '#4d446b',
        }
    }


}));