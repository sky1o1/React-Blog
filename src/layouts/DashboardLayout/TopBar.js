import React, { useState, useEffect } from 'react';
import { Link as RouterLink, Navigate } from 'react-router-dom';
import firebase from "firebase";
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import  logout  from '../../views/auth/Logout'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';
import auth from '../../services/config'

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));



const Logout = () =>{
  
    // const navigate = useNavigate();
  firebase.auth().signOut().then(function () {
      console.log('logged out')
      // navigate('/login')
      
  }).catch(function (error) {
      console.log('error logging out')
  });
  console.log('logged out')
}

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  let navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log("user", user)
      if (user) {
        setCurrentUser(user)
        console.log(user.phoneNumber)
      }
      else {
        setCurrentUser(null)
      }
    })
  },[setCurrentUser])
  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
  <h1>Welcome: {currentUser.phoneNumber} </h1>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" onClick={() => {
            firebase.auth().signOut().then(function () {
              console.log('logged out')
              navigate('/login')
              window.location.reload(true)
              
          }).catch(function (error) {
              console.log('error logging out')
          });
          }}>
            <ExitToAppIcon></ExitToAppIcon> Logout
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >

            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
