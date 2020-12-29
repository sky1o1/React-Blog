import React from 'react'
import { ThemeProvider } from '@material-ui/core';
import { getRoutes, homeroute } from 'src/routes';
import { useRoutes } from 'react-router-dom';
import GlobalStyles from 'src/components/GlobalStyles';
import theme from 'src/theme';

const Main = ({ isAuthenticated, isProfileCompleted }) => {
	const routing = useRoutes(getRoutes(isProfileCompleted, isAuthenticated));
	const homeRouting = useRoutes(homeroute);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{routing}
			{homeRouting}
		</ThemeProvider>
	)
}

export default Main