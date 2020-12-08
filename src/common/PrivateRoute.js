import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../common/auth";
import LoginView from "src/views/auth/LoginView";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={props =>
                !!currentUser ? (
                    <RouteComponent {...props} />
                ) : (
                        // <Redirect to={LoginView} />
                        <LoginView />
                    )
            }
        />
    );
};


export default PrivateRoute