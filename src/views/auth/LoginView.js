import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import firebase from "firebase";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  Input,
  InputLabel,
  FormControl,
  makeStyles,
  Card,
  InputAdornment,

} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  var uiConfig = {
    signInSuccessUrl: '/app/dashboard',
    signInOptions: [
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '/app/dashboard',
    privacyPolicyUrl: function () {
      window.location.assign('<your-privacy-policy-url>');
    }
  };

  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', uiConfig);

  // const setUpRecaptcha = () => {
  //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
  //     'size': 'invisible',
  //     'callback': function (response) {
  //       onSignInSubmit();
  //     }
  //   });
  // }

  // const onSignInSubmit = (event) => {
  //   event.preventDefault()
  //   setUpRecaptcha()
  //   var phoneNumber = "+9779843608958";
  //   var appVerifier = window.recaptchaVerifier;
  //   firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then(function (confirmationResult) {
  //       window.confirmationResult = confirmationResult;
  //       var code = window.prompt("enter otp");
  //       confirmationResult.confirm(code).then(function (result) {
  //         // User signed in successfully.
  //         var user = result.user;
  //         // ...
  //         console.log("user is logged in")
  //       }).catch(function (error) {
  //         console.log("error")
  //       });
  //     }).catch(function (error) {
  //     });
  // }

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <div id="firebaseui-auth-container"></div>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        {/* <Container maxWidth="sm">
          <Grid container>
            <form onSubmit={onSignInSubmit}>
              <div id="recaptcha-container"></div>
              <Card>
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Phone number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <button type="submit">SUbmite</button>
              </Card>
            </form>
          </Grid>
        </Container> */}
      </Box>
    </Page>
  );
};

export default LoginView;
