import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Loader.css';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
}));

export default function Loader() {
    const classes = useStyles();

    return (
        <div className="app-loader">
            <div className="app-loader-spinner">
                <CircularProgress className={classes.progress} />
            </div>
        </div>
    );
}