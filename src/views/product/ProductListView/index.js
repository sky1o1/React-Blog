import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import firebase from "firebase";
import { getBlog } from '../../../services/blog';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';
import Details from '../Details'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const [data, setData] = useState([])

  useEffect(() => {
    getBlog().then(blogList => setData(blogList))
  }, [])

  var user = firebase.auth().currentUser;
  console.log('user data', user)
  console.log('data ui', data)

  return (
    <Page
      className={classes.root}
      title="Blogs"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {data && data.map(doc => (
              <Grid
                item
                key={doc.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard
                  className={classes.productCard}
                  documents={doc}
                />
                {/* <Route path="/product/details">
                  <Details blog={data.title} />
                </Route> */}
              </Grid>

            ))}


            {/* <Details /> */}

          </Grid>
        </Box>
        {/* <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box> */}
      </Container>
    </Page>
  );
};

export default ProductList;
