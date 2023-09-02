import React from "react";
import {Avatar, Button, Checkbox, Grid, Link, Paper, TextField, Typography} from '@mui/material'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Login = ({handleChange}) => {
  // const paperStyle = {padding:20,height:'70vh',width:280,margin:'20px auto'}
  const paperStyle = {
    padding: "30px 20px",
    height: "80vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#0ef059" };
  const btnStyle = { margin: "2px" };
  const initialValues ={
    uname:'',
    passwd:'',
    remember:false
  }
  const validationSchema = Yup.object().shape({
    uname: Yup.string().email("Enter valid email").required("required"),
    passwd: Yup.string().min(8, "Password must be greater than 8 characters").required("required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                name="uname"
                label="Username"
                placeholder="Enter Email"
                variant="standard"
                fullWidth
                helperText={<ErrorMessage name="uname" />}
                required
              />
              <Field
                as={TextField}
                name="passwd"
                label="Passwd"
                placeholder="Enter password"
                variant="standard"
                type="password"
                helperText={<ErrorMessage name="passwd" />}
                fullWidth
                required
              />
              <Field
                as={FormControlLabel}
                name="rememberme"
                label="Remember me"
                control={<Checkbox color="primary" />}
              />
              <Button
                type="submit"
                variant="contained"
                style={btnStyle}
                disabled={props.isSubmitting}
                fullWidth
              >
                {props.isSubmitting?"Loading":'Sign in'}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forget password?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account?
          <Link href="#" onClick={() => handleChange("event", "2")}>
            {" "}
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login