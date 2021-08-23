import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Checkbox, Grid } from '@material-ui/core';
import useStyles from './styles';
import { useState } from 'react';
import { useEffect } from 'react';


export default function ETable({ recipients, setRecipients, employees, loading }) {
  const classes = useStyles();


  const handleChecked = (e, email) => {

    if (e.target.checked) {
      setRecipients([...recipients, email])
    } else {
      const newRecipients = recipients.filter((r) => r !== email);
      setRecipients(newRecipients);
    }

  }

console.log(recipients);
  return (
    <div className={classes.container}>

      <Grid item xs={12} lg={12}>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className={classes.tableCell}>First Name</TableCell>
                <TableCell className={classes.tableCell} align="left">Last Name</TableCell>
                <TableCell className={classes.tableCell} align="left">Email</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {employees.map((em) => (
                <TableRow key={em.id}>

                  <Checkbox style={{ marginTop: '.5rem' }}
                    color='default'
                    onChange={(e) => handleChecked(e, em.email)}
                  />
                  
                  <TableCell align="left">{em.firstName}</TableCell>
                  <TableCell align="left">{em.lastName}</TableCell>
                  <TableCell align="left">{em.email}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Grid>
    </div>

  );
}
