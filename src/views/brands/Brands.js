import React from 'react';
import Edit from './crud/Edit';
import Delete from './crud/Delete';
import Details from './crud/Details';
import {
    Card,
    CardContent,
    Typography,
    makeStyles,
} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        width: '100%',

    },
    controls: {
        display: 'flex',
        alignItems: 'center',
    },
}));


const BrandCards = ({ className, documents, ...rest }) => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.cards}>
                <div >
                    <CardContent style={{ paddingBottom: 12 }}>
                        <Grid container spacing={2} style={{ padding: 0 }}>
                            <Grid item xs={7}
                            >
                                <Typography component="h5" variant="h5">
                                    {documents.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {documents.type}
                                </Typography>
                                <Grid container style={{ paddingTop: 0 }}>
                                    <Grid item xs={3} >
                                        <Details id={documents.id} docs={documents} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Edit id={documents.id} docs={documents} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Delete id={documents.id} docs={documents} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5} >
                                <img src={documents.imageUrl} style={{ width: '100%', height: '100px' }} />
                            </Grid>
                        </Grid>

                    </CardContent>

                </div>

            </Card>
        </>
    );
};

export default BrandCards;
