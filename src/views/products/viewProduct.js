import React, { useState, useEffect } from 'react';
import { getProducts } from '../../firebase/products';
import ProductList from './productList';
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    makeStyles
} from '@material-ui/core';
import Toolbar from './Toolbar';
import Skeleton from '@material-ui/lab/Skeleton';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
}))
const ViewProducts = () => {
    const classes = useStyles()
    const [products, setProducts] = useState()
    useEffect(() => {
        console.log('entered')
        const fetchMyApi = async () => {

            try {
                const response = await getProducts()
                console.log('list of products', response)
                setProducts(response)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchMyApi()
    }, [])
    return (
        <>
            <Page
                className={classes.root}
                title="Blogs"
            >
                <Container maxWidth={false}>
                    <Toolbar />
                    <Card className={classes.cards}>
                        <div >
                            <CardContent style={{ paddingBottom: 12 }}>
                                <Grid container spacing={2} style={{ padding: 0 }}>
                                    {products && products.map(product => (
                                        <Card className={classes.cards}>
                                            <div >
                                                <CardContent style={{ paddingBottom: 12 }}>
                                                    <Grid container spacing={2} style={{ padding: 0 }}>
                                                        <Grid item xs={7}
                                                        >
                                                            <Typography component="h5" variant="h5">
                                                                {product.name}
                                                            </Typography>
                                                            <Typography variant="subtitle1" color="textSecondary">
                                                                {product.type}
                                                            </Typography>
                                                            {/* <Grid container style={{ paddingTop: 0 }}>
                                                             <Grid item xs={3} >
                                                                 <Details id={product.id} docs={product} />
                                                             </Grid>
                                                             <Grid item xs={3}>
                                                                 <Edit id={product.id} docs={product} />
                                                             </Grid>
                                                             <Grid item xs={3}>
                                                                 <Delete id={product.id} docs={product} />
                                                             </Grid>
                                                         </Grid> */}
                                                        </Grid>
                                                        {/* <Grid item xs={5} >
                                                            <img src={product.imageUrl} style={{ width: '100%', height: '100px' }} />
                                                        </Grid> */}
                                                    </Grid>

                                                </CardContent>

                                            </div>

                                        </Card>
                                    ))}

                                </Grid>

                            </CardContent>

                        </div>

                    </Card>
                </Container>
            </Page>
        </>
    )
}

export default ViewProducts;