import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';

const Employees = () => {
    const classes = useStyles();
    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [employee, setEmployee] = useState({ firstName:'',lastName:'',email:''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFirstNameValid = (/^[A-Za-z]+$/).test(employee.firstName);
        const isLastNameValid = (/^[A-Za-z]+$/).test(employee.lastName);
        const isEmailValid = (/\S+@\S+\.\S+/).test(employee.email);

        if(isFirstNameValid && isLastNameValid &&  isEmailValid){
            try {
                await axios.post('http://localhost:5000/create', employee).then((res) => {
                    setSuccess(true);
                    setTimeout(() => setSuccess(false), 3000);
                })
                
            } catch (error) {
                console.log(error);
            }
            clear()  
        }    
    }

    useEffect(() => {
      
        const isFirstNameValid = (/^[A-Za-z]+$/).test(employee.firstName);
        const isLastNameValid = (/^[A-Za-z]+$/).test(employee.lastName);
        const isEmailValid = (/\S+@\S+\.\S+/).test(employee.email);

        if(employee.firstName !== ''){
            if(!isFirstNameValid){
                setFirstNameError('First Name is not valid, can contain letters only');  
            } else{
                setFirstNameError(null)
            }
        }
        if(employee.lastName !== ''){
            if(!isLastNameValid){
                setLastNameError('Last Name is not valid, can contain letters only');  
            } else{
                setLastNameError(null)
            }
        }
        if(employee.email !== ''){
            if(!isEmailValid){
                setEmailError('Email is not valid, must include @ and .com');  
            } else{
                setEmailError(null)
            }
        }
    }, [employee.firstName, employee.lastName, employee.email]);

    const clear = () => {
        setEmployee({          
            lastName:'',
            firstName:'',
            email:''
        })
    }

    return (
        <div className={classes.container}>
            <Grid item xs={12} lg={8}>
                <Paper className={classes.paper} elevation={4}>
                    <Typography variant='h6'>
                        Add Employee
                    </Typography>

                    <form onSubmit={handleSubmit}>

                        <TextField
                            value={employee.firstName}
                            onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                            required
                            className={classes.textField}
                            name="firstName"
                            variant="outlined"
                            label="First Name"
                            fullWidth
                        />
                        <TextField
                            value={employee.lastName}
                            onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                            required
                            className={classes.textField}
                            name="lastName"
                            variant="outlined"
                            label="Last Name"
                            fullWidth
                        />
                        <TextField
                            value={employee.email}
                            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                            required
                            className={classes.textField}
                            name="email"
                            variant="outlined"
                            label="Email"
                            fullWidth
                        />
                        <div>
                            {
                                firstNameError &&
                                <Alert className={classes.alert}  variant='standard' severity="error">{firstNameError}</Alert>
                                
                            }
                            {
                                lastNameError &&
                                <Alert className={classes.alert}  variant='standard' severity="error">{lastNameError}</Alert>
                            }
                            {
                                emailError &&
                                <Alert className={classes.alert}  variant='standard' severity="error">{emailError}</Alert>
                            }
                            {
                                (!emailError && !firstNameError && !lastNameError && employee.firstName !=='' && employee.lastName !=='' && employee.email !=='') && 
                                <Alert className={classes.alert}  variant='standard' severity="success">Yes! You are good to go!</Alert>
                            }
                            {
                                success && 
                                <Alert className={classes.alert}  variant='standard' severity="success">Employee Created Successfully.</Alert>
                            }

                        </div>

                        <Button
                            className={classes.submitButton}
                            variant="contained"
                            color="primary"
                            size="large" fullWidth
                            type="submit"
                        >
                            Submit
                        </Button>

                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default Employees;