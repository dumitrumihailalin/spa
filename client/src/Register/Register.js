import React from 'react';
import { useFormik, Field  } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const validationSchema = yup.object({
  name: yup
  .string('Enter your name')
  .required('Name is name'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirm_password: yup
    .string('Confirm Password')
    .min(8, 'Passwords must be equal')
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      toggle: false,
      checked: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Register
      </Typography>
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Paper>
          </Grid>
              <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                  <TextField
                    fullWidth
                    id="confirm_password"
                    name="confirm_password"
                    label="Confirm Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                    helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} >
              <Paper className={classes.paper} alignLeft>
                  <input type="checkbox" />Agree terms and conditions.
                </Paper>
              </Grid>
            </Grid>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Register
            </Button>
          </form>
      </div>
    </Container>
   
  );
};

export default Register;