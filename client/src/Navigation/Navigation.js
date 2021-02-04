import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
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
