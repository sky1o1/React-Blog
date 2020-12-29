import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'src/mixins/chartjs';
import { auth, firebaseAnalytics } from './services/config'
import ReactGa from 'react-ga';
import { setIsAuthenticated, setPhoneNumber, setUuid, setProfile, setProfileCompleted } from './store/actions/';
import { useDispatch } from 'react-redux';
import { getUserById } from './services/profile';
import { useSelector } from 'react-redux';
import Main from './Main';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
}
const App = () => {

  const [currentUser, setCurrentUser] = useState({});
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile)
  const authChecker = useSelector(state => state.authenticate)
  const [userLogin, setUserLogin] = useState(INITIAL_STATE)


  // api key = AIzaSyBCb_lAj60pxTANSSIrQ7fmV7UFKQA8A8o
  // https://analyticsdata.googleapis.com/$discovery/rest?version=v1alpha


  useEffect(() => {
    ReactGa.initialize('G-6CEFNQXJ5E')
    ReactGa.pageview(window.location.pathname + window.location.search)
    firebaseAnalytics.logEvent("Homepage visited")

    auth.onAuthStateChanged(async user => {
      if (user) {
        dispatch(setPhoneNumber(user.phoneNumber))
        dispatch(setUuid(user.uid))
        try {
          // fetch user info by uid
          setUserLogin(prevState => ({
            ...prevState,
            isLoading: true
          }))
          const userProfileDoc = await getUserById(user.uid)
          if (!userProfileDoc.exists) {
            dispatch(setIsAuthenticated(true))
            dispatch(setProfileCompleted(false))
            return;
          }
          //If user is already existed, then check isProfileCompleted 
          const userProfileData = userProfileDoc.data()
          dispatch(setProfile(userProfileData))
          if (userProfileData.isProfileCompleted) {
            dispatch(setIsAuthenticated(true))
            dispatch(setProfileCompleted(true))
            return
          }
          dispatch(setIsAuthenticated(true))
          dispatch(setProfileCompleted(false))

        }
        catch (error) {
          setUserLogin(INITIAL_STATE)
        } finally {
          setUserLogin(prevState => ({
            ...prevState,
            isLoading: false
          }))
        }

      }
      else {
        setCurrentUser(null)
      }
    })
  }, [])


  // if (userLogin.isLoading) {
  //   return <p> loading... </p>
  // }

  // if (userLogin.error) {
  //   return <div />
  // }

  return (
    <Main isProfileCompleted={profile.isProfileCompleted} isAuthenticated={authChecker.isAuthenticated} />
  );
};

export default App;

