import React from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

export default function UserList(props) {
    return (
        <Grid container spacing={0}>
            {props.list.map((user) => (
                <Grid item xs={3}>
                    <Link to={`users/${user.login}`}>
                        {user.login}
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
};