import React from 'react';
import ProductList from './productList';
import {
    Box,
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';
import Toolbar from './Toolbar';
import Skeleton from '@material-ui/lab/Skeleton';
import Page from 'src/components/Page';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
}))
const Products = () => {
    const classes = useStyles()
    return (
        <>
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
                            <ProductList />
                            {/* {loaderData.map(load => (
                                <Grid
                                    item
                                    lg={4}
                                    md={6}
                                    xs={12}
                                >
                                    <Card className={classes.cards}>
                                        <div >
                                            <CardContent>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={7}
                                                    >
                                                        <Skeleton animation="wave" height={25} />
                                                        <Skeleton animation="wave" width="80%" />
                                                        <Grid container style={{ paddingTop: 20 }}>
                                                            <Grid item xs={3} >
                                                                <Skeleton variant="circle" width={30} height={30} />
                                                            </Grid>
                                                            <Grid item xs={3}>
                                                                <Skeleton variant="circle" width={30} height={30} />
                                                            </Grid>
                                                            <Grid item xs={3}>
                                                                <Skeleton variant="circle" width={30} height={30} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={5} >
                                                        <Skeleton variant="rect" width='auto' style={{ height: 100 }} />
                                                    </Grid>
                                                </Grid>

                                            </CardContent>

                                        </div>

                                    </Card>
                                </Grid>
                            ))} */}
                        </Grid>
                    </Box>
                </Container>
            </Page>
        </>
    )
}

export default Products;