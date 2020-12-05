import React from 'react';
import clsx from 'clsx';
import useFirestore from '../../hooks/useFirestore'
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  imgs: {
    height: 150,
    width: "auto",
  }
}));

const Details = ({   documents, ...rest }) => {
    const classes = useStyles();
    return(

    <Card
      className={clsx(classes.root)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          {/* <Avatar
            alt="Product"
            src={product.media}
            variant="square"
          /> */}
              {/* <img className={classes.imgs} src={documents.url} alt='uploaded pic' /> */}
          
           
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >




        </Typography>
      </CardContent>
      </Card>
    )
};

export default Details;
