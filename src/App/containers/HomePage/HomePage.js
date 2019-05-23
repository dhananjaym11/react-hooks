import React from 'react';

import Hooks from '../../components/Home/Hook';

export default class HomePage extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Home Page</h1>
                <Hooks />
            </div>
        )
    }
}