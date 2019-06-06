import React from 'react';

import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

export default function Layout(props) {
    return (
        <>
            <Header />
            {props.isLoading &&
                <Loader />
            }
            <div className="main">
                {props.children}
            </div>
        </>
    );
}