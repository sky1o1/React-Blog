import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import { routes, homeroute } from 'src/routes';
import firebase, { auth } from './services/config'
import { AuthProvider } from '../src/common/auth'
import PrivateRoute from '../src/common/PrivateRoute'
import LoginView from './views/auth/LoginView';
import Dashboard from './views/reports/DashboardView';
import AddBlog from 'src/views/blog/AddBlog'

const App = () => {
  const routing = useRoutes(routes);
  const homeRouting = useRoutes(homeroute);

  const [currentUser, setCurrentUser] = useState(null);
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
  }, [])

  console.log('cureent user in app', currentUser)


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <PrivateRoute path="/app/dashboard" component={routing} /> */}


        {routing}

        {homeRouting}



      </ThemeProvider>
    </>
  );
};

export default App;
