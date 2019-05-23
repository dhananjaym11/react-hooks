import React from 'react';

import Header from '../../components/Header/Header';

const Layout = (props) => (
    <>
        <Header isAuthenticated={props.isAuthenticated} />
        <div className="main">
            {props.children}
        </div>
    </>
);

export default Layout;