import React, { useState, useEffect } from 'react';
import BrandCards from './Brands';
import { getRequest } from '../../config/axios.config';
import { getBrands } from '../../services/brands';
import {
    Box,
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    productCard: {
        height: '100%',
    },
    skeleton: {
        flex: '1 0 auto',
    }
}));

const Brands = () => {
    const [loading, setLoading] = useState(true)
    const classes = useStyles();
    const loaderData = [1, 2, 3, 4, 5, 6]
    const [data, setData] = useState([])

    useEffect(() => {
        // getBrands().then(brandList => setData(brandList));
        // setLoading(false);
        const fetchMyApi = async () => {
            try {
                const response = await getBrands();
                setData(response);
                setLoading(false)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchMyApi()
    }, [])
    return (
        <>
            {loading ?
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

                                {loaderData.map(load => (
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
                                                        <Grid item xs={8}
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
                                                        <Grid item xs={4} >
                                                            <Skeleton variant="rect" width='auto' height={90} />
                                                        </Grid>
                                                    </Grid>

                                                </CardContent>

                                            </div>

                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <Box
                            mt={3}
                            display="flex"
                            justifyContent="center"
                        >
                            <Pagination
                                color="primary"
                                count={3}
                                size="small"
                            />
                        </Box>
                    </Container>
                </Page>
                :
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
                                        <BrandCards
                                            documents={doc}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <Box
                            mt={3}
                            display="flex"
                            justifyContent="center"
                        >
                            <Pagination
                                color="primary"
                                count={3}
                                size="small"
                            />
                        </Box>
                    </Container>
                </Page>
            }
        </>
    );
};

export default Brands;
