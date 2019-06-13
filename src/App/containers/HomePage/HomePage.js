import React from 'react';
import Container from '@material-ui/core/Container';

import Hooks from '../../components/Home/Hook';

export default class HomePage extends React.Component {

    render() {
        return (
            <Container fixed>
                <h1>Home Page</h1>
                <Hooks />
            </Container>
        )
    }
}