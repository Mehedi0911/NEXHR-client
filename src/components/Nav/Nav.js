import React from 'react';
import { AppBar, Container, Grid, Typography } from "@material-ui/core";
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './styles';
const Nav = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='static' className={classes.appBar}>
                <Container>
                    <Grid container className={classes.itemContainer}>
                        <Grid item xs={6}>
                            <Typography variant="h5">
                                <strong style={{letterSpacing:'.07rem'}}>NEXT</strong> HR
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.toolbar}>
                            <div>
                                <AssessmentIcon className={classes.reportIcon} />
                                <PersonIcon className={classes.userIcon} />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </div>
    );
};

export default Nav;