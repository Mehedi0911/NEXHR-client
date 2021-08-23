import { Button, Grid, ListItemText, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { parse } from 'papaparse';
import useStyles from './styles';
import DescriptionIcon from '@material-ui/icons/Description';
import { Alert } from '@material-ui/lab';
import axios from 'axios';

const DragDrop = () => {
    const classes = useStyles();
    const [highlighted, setHighlighted] = useState(false);
    const [employees, setEmployees] = useState(null);
    const [canAdd, setCanAdd] = useState(false);
    const [filename, setFileName] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleCreate = (e) => {
        e.preventDefault();

        let valid = 0;
        let invalid = 0;

        employees.map((em) => {
            const isFirstNameValid = (/^[A-Za-z]+$/).test(em.firstName);
            const isLastNameValid = (/^[A-Za-z]+$/).test(em.lastName);
            const isEmailValid = /\S+@\S+\.\S+/.test(em.email);
            if (isFirstNameValid && isLastNameValid && isEmailValid) { 
                    axios.post('http://localhost:5000/create', em);
                    valid++;  
            } else {
                invalid++;
            }
        })
        setSuccess(`${valid} Employees Created Successfully, ${invalid} invalid entries dropped`)
        console.log(valid + 'employees created successfully');
        console.log(invalid + 'invalid entries');
        console.log(employees);
        setCanAdd(false);
        setFileName(null);
    }

    return (
        <div className={classes.container}>

            <Grid item xs={12} lg={8}>

                <Paper elevation={4} className={classes.paper}>

                    <Typography variant='h6'>
                        Add Multiple Employees at Once
                    </Typography>

                    <div
                        className={!highlighted ? `${classes.dropZone}` : `${classes.dropZone} ${classes.highlighted}`}
                        onDragEnter={() => {
                            setHighlighted(true);
                            setFileName(null);
                            setSuccess(null);
                        }}
                        onDragLeave={() => {
                            setHighlighted(false);
                        }}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setHighlighted(true);
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            setHighlighted(false);
                            Array.from(e.dataTransfer.files)
                                .filter((file) => file.type === "application/vnd.ms-excel" || file.type === "text/csv")
                                .forEach(async (file) => {
                                    setFileName(file.name);
                                    const text = await file.text();
                                    const result = parse(text, { header: true });
                                    const remove = result.data.pop();
                                    setEmployees(result.data);
                                    console.log(result.data);
                                })
                            setCanAdd(true);
                        }}
                    >

                        <div className={classes.drops}>
                            <DescriptionIcon />
                            <Typography variant='h5'>Drop CSV here</Typography>
                            {
                                filename &&
                                <Typography className={classes.fileText} component='p'>
                                    {filename} uploaded
                                </Typography>
                            }
                        </div>
                    </div>

                    <div>
                        {
                            success &&
                            <Alert variant='standard' severity="success">{success}</Alert>
                        }
                        <Alert style={{backgroundColor:'white', marginTop:'.5rem'}} variant='standard' severity="info">Accepts CSV only</Alert>
                        <Alert style={{backgroundColor:'white'}} variant='standard' severity="info">First Row will be ignored as Header</Alert>
                        <Alert style={{backgroundColor:'white'}} variant='standard' severity="info">Any invalid Fields will be ignored</Alert>
                    </div>


                    <Button disabled={canAdd ? false : true} variant='contained' className={classes.button} onClick={handleCreate}>
                        Create
                    </Button>

                </Paper>

            </Grid>

        </div>
    );
};

export default DragDrop;