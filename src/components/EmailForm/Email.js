import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import useStyles from './styles';
const Email = ({ recipients, setRecipients }) => {

    const classes = useStyles();
    const [email, setEmail] = useState({
        subject: '',
        body: ''
    });
    const [status, setStatus] = useState({
        isSending: false,
        response: '',
        info: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ ...status, isSending: true })
        try {
            const res = await axios.post('http://localhost:5000/sendMail', { email, recipients });
            setStatus({ ...status, isSending: false, response: 'ok', info: 'Email Sent Successfully' })
            setRecipients([]);
        } catch (error) {
            setStatus({ ...status, isSending: false, response: 'error', info: 'Something Went Wrong, Please try Again' })
        }
        setEmail({
            subject: '',
            body: ''
        })
    }


    return (
        <div className={classes.container}>
            <Grid item xs={12} lg={8}>
                <Paper className={classes.paper} elevation={4}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Typography variant="h6">Recipients :</Typography>
                            <Grid container className={classes.recipientsDiv}>
                                {
                                    recipients.map((r) => (
                                        <Grid item>
                                            <Typography className={classes.recipients} component='p'>{r}</Typography>
                                        </Grid>
                                    ))
                                }
                            </Grid>

                        </div>

                        <TextField
                            value={email.subject}
                            onChange={(e) => setEmail({ ...email, subject: e.target.value })}
                            required
                            className={classes.textField}
                            name="subject"
                            variant="outlined"
                            label="Subject"
                            fullWidth
                        />
                        <TextField
                            value={email.body}
                            onChange={(e) => setEmail({ ...email, body: e.target.value })}
                            required
                            className={classes.textField}
                            name="message"
                            variant="outlined"
                            label="Message"
                            fullWidth
                            multiline={true}
                            rows={4}
                        />

                        {
                            status.isSending &&
                            <div className={classes.progress}>
                                <CircularProgress color="secondary" />
                            </div>

                        }
                        {
                            status.response === 'ok' &&
                            <Alert className={classes.alert} variant='standard' severity="success">{status.info}</Alert>
                        }
                        {
                            status.response === 'error' &&
                            <Alert className={classes.alert} variant='standard' severity="error">{status.info}</Alert>
                        }

                        <Button
                            className={classes.submitButton}
                            variant="contained"
                            color="primary"
                            size="large" fullWidth
                            type="submit"
                        >
                            Send Email
                        </Button>

                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default Email;