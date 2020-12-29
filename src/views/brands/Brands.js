import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Card,
    CardContent,
    Typography,
    makeStyles,
    CardMedia
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));
const BrandCards = ({ className, documents, ...rest }) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <CardMedia
                            className={classes.cover}
                            image="/static/images/cards/live-from-space.jpg"
                        />
                        <Typography component="h5" variant="h5">
                            Name:
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Type:{documents.type}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Description:{documents.text}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    </div>
                </div>

            </Card>
        </>
    );
};

export default BrandCards;
