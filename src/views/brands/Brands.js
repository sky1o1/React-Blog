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
    useTheme
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';


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
    const theme = useTheme();

    return (
        <>
            <Card className={classes.root}>
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

                <img
                    className={classes.cover}
                    src={documents.imageUrl}
                    alt='documents.imageName'
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
