import React, { useState, useEffect } from 'react';
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
    tosUrl: '',
    privacyPolicyUrl: function () {
      window.location.assign('<your-privacy-policy-url>');
    }
  };

  useEffect(() => {
    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.start('#firebaseui-auth-container', uiConfig)
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
    }
  }, [])


  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <div id="firebaseui-auth-container"></div>
    </Page >
  );
};

export default LoginView;
