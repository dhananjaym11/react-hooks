import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Layout from '../Layout/Layout';

const PrivateRoute = ({ component: Component, isLoading: isLoading, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('isLogin')
            ? <Layout isLoading={isLoading}><Component {...props} /></Layout>
            : <Redirect to={{ pathname: '/login' }} />
    )} />
);

export default PrivateRoute;