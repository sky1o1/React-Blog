import React from 'react';
import Edit from './crud/Edit';
import Delete from './crud/Delete';
import Details from './crud/Details';
import {
    Card,
    CardContent,
    Typography,
    makeStyles,
    CardMedia,
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
            {/* <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {documents.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {documents.type}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <Delete id={documents.id} docs={documents} />
                        <Edit id={documents.id} docs={documents} />
                        <Details id={documents.id} docs={documents} />
                    </div>
                </div>

                <CardMedia
                    className={classes.cover}
                    image={documents.imageUrl}
                    alt='documents.imageName'
                />
            </Card> */}
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
                                {/* <Skeleton animation="wave" height={25} /> */}
                                {/* <Skeleton animation="wave" width="80%" /> */}
                                <Grid container style={{ paddingTop: 0 }}>
                                    <Grid item xs={3} >
                                        <Delete id={documents.id} docs={documents} />
                                        {/* <Skeleton variant="circle" width={30} height={30} /> */}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Edit id={documents.id} docs={documents} />
                                        {/* <Skeleton variant="circle" width={30} height={30} /> */}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Details id={documents.id} docs={documents} />
                                        {/* <Skeleton variant="circle" width={30} height={30} /> */}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5} >
                                <img src={documents.imageUrl} style={{ width: '100%', height: '100px' }} />
                                {/* <Skeleton variant="rect" width='auto' height={90} /> */}
                            </Grid>
                        </Grid>

                    </CardContent>

                </div>

            </Card>
        </>
    );
};

export default BrandCards;
