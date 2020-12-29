import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isProfileCompleted, isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to={'/login'} />;
    }
    if (!isProfileCompleted) {
        return <Navigate to={'/register'} />
    }
    return Component
};

export default PrivateRoute;