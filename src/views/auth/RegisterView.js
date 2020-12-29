import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import firebase from "firebase";
import { createProfile } from '../../services/profile';
import { setProfile } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';
import '../../css/styles.css'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles,
  Input
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '100%',
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));


const initialValues = {
  email: '',
  fullName: '',
  gender: null,
  image: '',
  policy: false
}


const validationSchema = Yup.object({
  fullName: Yup.string().required('Fullname is required'),
  email: Yup.string().email('Invalid email format').required('Fullname is required'),

}
)

const RegisterView = () => {

  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile)
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, onSubmitProps) => {
      try {
        const profileSet = await createProfile(values.fullName, values.email, values.gender, values.image, profile.id, profile.phoneNumber, profile.isProfileCompleted)
        dispatch(setProfile(profileSet))
        alert('Successfully added')
        onSubmitProps.setSubmitting(false)
        navigate('/')
      } catch (error) {
        console.log(error)
      }

    },
    validationSchema,
  })

  return (

    <Page
      className={classes.root}
      title="Register"
    >

      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Card maxWidth="sm">
          <CardContent>
            <Container maxWidth="sm">

              <form
                onSubmit={formik.handleSubmit}
              >
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create your profile
                </Typography>
                </Box>
                {/* <img src={formik.values.photo1} /> */}
                <Input
                  type="file"
                  name="file"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
                <TextField
                  error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                  fullWidth
                  id="fullName"
                  helperText={formik.touched.fullName && formik.errors.fullName}
                  label="Full name"
                  margin="normal"
                  name="fullName"
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}

                  onChange={formik.handleChange}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                  variant="outlined"
                />
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender"
                  value={formik.values.gender}
                  name="gender"
                  onChange={formik.handleChange}

                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>


                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={!formik.isValid || formik.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Register Profile
                </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                {' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    variant="h6"
                  >
                    Sign in
                </Link>
                </Typography>
              </form>
            </Container>
          </CardContent>
        </Card>
      </Box>
    </Page >
  )
}

export default RegisterView;
