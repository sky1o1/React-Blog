import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import IconButton from '@material-ui/core/IconButton';
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
                        <Typography component="h5" variant="h5">
                            {documents._id}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {documents.type}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton >
                            <DeleteOutlineIcon />
                        </IconButton>
                        <IconButton >
                            <EditOutlinedIcon />
                        </IconButton>
                        <IconButton >
                            <VisibilityOutlinedIcon />
                        </IconButton>

                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    src="https://play.google.com/store/apps/details?id=com.google.android.apps.searchlite&hl=en&gl=US"
                    title="Live from space album cover"

                />
            </Card>
            {/* <Card className={classes.root}>
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

            </Card> */}
        </>
    );
};

export default BrandCards;
