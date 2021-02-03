import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { render } from 'react-dom';
import {
  Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
  }));
 
  export default function Navigation() {
    const classes = useStyles();  
       
        return (
            <AppBar position="sticky" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" color="inherit" noWrap>
                Company name
              </Typography>
              <nav>
                <Link variant="button" color="textPrimary" to='/' className={classes.link}>
                  Dashboard
                </Link>
                <Link variant="button" to="/register" color="textPrimary" href="#" className={classes.link}>
                  Register
                </Link>
              </nav>
              <Link  color="primary" to="/login" className={classes.link}>
                Login
              </Link>
            </Toolbar>
          </AppBar>
        )
 }
