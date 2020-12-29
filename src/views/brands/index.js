import React, { useState, useEffect } from 'react';
import BrandCards from './Brands'
import { getRequest } from '../../config/axios.config'
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

const Brands = () => {
    const classes = useStyles();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchMyApi = async () => {
            try {
                const response = await getRequest('/facts');
                console.log('fetched api data', response.data)
                setData(response.data)
                setLoading(true)
                console.log('loading', loading)
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
                                {data && data.map(doc => (
                                    <Grid
                                        item
                                        key={doc._id}
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
                                        key={doc._id}
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
