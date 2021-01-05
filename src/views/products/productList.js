import React, { useState, useEffect } from 'react';
import { getProducts } from '../../firebase/products';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    makeStyles,
    IconButton,
} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import getInitials from 'src/utils/getInitials';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        marginRight: theme.spacing(2)
    }
}));

const ProductList = ({ className, ...rest }) => {
    const classes = useStyles();
    const [products, setProducts] = useState()
    const [selectedProductIds, setSelectedProductIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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

    const handleSelectAll = (event) => {
        let newSelectedProductIds;

        if (event.target.checked) {
            newSelectedProductIds = products.map((product) => product.id);
        } else {
            newSelectedProductIds = [];
        }

        setSelectedProductIds(newSelectedProductIds);
    };


    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedProductIds.indexOf(id);
        let newSelectedProductIds = [];

        if (selectedIndex === -1) {
            newSelectedProductIds = newSelectedProductIds.concat(selectedProductIds, id);
        } else if (selectedIndex === 0) {
            newSelectedProductIds = newSelectedProductIds.concat(selectedProductIds.slice(1));
        } else if (selectedIndex === selectedProductIds.length - 1) {
            newSelectedProductIds = newSelectedProductIds.concat(selectedProductIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedProductIds = newSelectedProductIds.concat(
                selectedProductIds.slice(0, selectedIndex),
                selectedProductIds.slice(selectedIndex + 1)
            );
        }

        setSelectedProductIds(newSelectedProductIds);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    // const handlePageChange = (event, newPage) => {
    //     setPage(newPage);
    // };

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <PerfectScrollbar >
                <Box minWidth={1050}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        // checked={selectedProductIds.length === products.length}
                                        color="primary"
                                        indeterminate={
                                            selectedProductIds.length > 0
                                            && selectedProductIds.length < products.length
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Type
                                </TableCell>
                                <TableCell>
                                    Selling Price
                                </TableCell>
                                <TableCell>
                                    Discounted Price
                                </TableCell>
                                <TableCell>
                                    Description
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {products.slice(0, limit).map((product) => ( */}
                            {products && products.slice(0, limit).map(product => (
                                <TableRow
                                    hover
                                    key={product.id}
                                    selected={selectedProductIds.indexOf(product.id) !== -1}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedProductIds.indexOf(product.id) !== -1}
                                            onChange={(event) => handleSelectOne(event, product.id)}
                                            value="true"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            alignItems="center"
                                            display="flex"
                                        >
                                            <Avatar
                                                className={classes.avatar}
                                                src={product.imageUrl}
                                            >
                                                {/* {getInitials(customer.name)} */}
                                            </Avatar>
                                            <Typography
                                                color="textPrimary"
                                                variant="body1"
                                            >
                                                {product.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {product.type}
                                    </TableCell>
                                    <TableCell>
                                        {product.sellingPrice}
                                    </TableCell>
                                    <TableCell>
                                        {product.discountedPrice}
                                    </TableCell>
                                    <TableCell>
                                        {product.description}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton edge="end" color="inherit">
                                            <MoreIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />

                                        </IconButton>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>Edit Product</MenuItem>
                                            <MenuItem onClick={handleClose}>View Product</MenuItem>
                                            <MenuItem onClick={handleClose}>Product Orders</MenuItem>
                                            <MenuItem onClick={handleClose}>Remove Product</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            {/* <TablePagination
                component="div"
                count={customers.length}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            /> */}
        </Card>
    );
};

export default ProductList;
