import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import {Formik,Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
function Signup() { 
  const paperStyle = {padding: '30px 20px',height: "131vh",width: 300,margin: "20px auto",};
  const marginTop = { marginTop: 5 };
  const avatarStyle = { backgroundColor: "#0ef059" };
  const initialValues = {
    name:'',email:'',gender:'',phone:'',address:'',college:'',passwd:'',confirmPasswd:'',termsConditions:false
  }
  
  const validationSchema = Yup.object().shape({
      name:Yup.string().min(3,"too short").required("required"),
      email:Yup.string().email("Enter valid email").required("required"),
      gender:Yup.string().oneOf(['male','female'],'required').required("required"),
      phone:Yup.number().typeError("Enter valid number").required("required"),
      passwd:Yup.string().min(8,"Password must be greater than 8 characters").required("required"),
      confirmPasswd:Yup.string().oneOf([Yup.ref('passwd')],"Password not matched").required('required'),
      termsConditions:Yup.string().oneOf(['true'],"Accept terms and conditions")
  })
  const onSubmit=(values,props)=>{
    console.log(values);
    console.log(props);
    setTimeout(()=>{
      props.resetForm()
      props.setSubmitting(false)
    },2000)
  }
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineRoundedIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <Typography varient="caption">
            Please fill this form to create account!
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="name"
                label="Name"
                placeholder="Enter your name"
                variant="standard"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                placeholder="Enter your email"
                variant="standard"
                helperText={<ErrorMessage name="email" />}
              />
              <FormControl style={marginTop}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>

                <Field
                  as={RadioGroup}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="gender"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>
              <FormHelperText>
                <ErrorMessage name="gender" />
              </FormHelperText>
              <Field
                as={TextField}
                fullWidth
                name="phone"
                label="Phone"
                variant="standard"
                placeholder="Enter your phone number"
                helperText={<ErrorMessage name="phone" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="address"
                label="Address"
                variant="standard"
                placeholder="Enter your Address"
                helperText={<ErrorMessage name="address" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="college"
                label="College"
                variant="standard"
                placeholder="Enter your College"
                helperText={<ErrorMessage name="college" />}
              />
              <Field
                as={TextField}
                name="passwd"
                label="Passwd"
                type="password"
                placeholder="Enter password"
                variant="standard"
                fullWidth
                helperText={<ErrorMessage name="passwd" />}
              />
              <Field
                as={TextField}
                name="confirmPasswd"
                label="ConfirmPasswd"
                type="password"
                placeholder="ReEnter password"
                variant="standard"
                fullWidth
                helperText={<ErrorMessage name="confirmPasswd" />}
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termsConditions" />}
                label="I accept the terms and conditions."
              />
              <FormHelperText>
                <ErrorMessage name="termsConditions" />
              </FormHelperText>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={props.isSubmitting}
                fullWidth
              >
                {props.isSubmitting?"Loading":"Sign Up"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default Signup
