import React, { useRef, useState } from 'react';
import { addProducts } from '../../../firebase/products';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    TextField,
    Typography,
    makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
import Autocomplete from '@material-ui/lab/Autocomplete';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(5),
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    resize: {
        height: 200,
        width: 200,
    }
}));

const initialValues = {
    name: '',
    type: '',
    description: '',
    image: '',
    code: '',
    sellingPrice: '',
    discountedPrice: '',
    stock: '',
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    type: Yup.string().required('Type is required'),
    description: Yup.string().required('Description is required'),
    code: Yup.number().required('Code is required'),
    sellingPrice: Yup.number().required('Price is required'),
    discountedPrice: Yup.number().required('Price is required'),
    stock: Yup.number().required('Price is required'),
})

function AddProducts() {
    const classes = useStyles();
    const [img, setImg] = useState('/static/images/placeholder-square.png')
    const dispatch = useDispatch()
    const wrapperRef = useRef(null)
    const navigate = useNavigate()
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
    ];

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, onSubmitProps) => {
            try {
                await addProducts(values.name, values.type, values.description, values.image, values.code, values.sellingPrice, values.discountedPrice, values.stock)
                alert('Successfully added')
                onSubmitProps.setSubmitting(false)
                navigate('/app/products')
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        validationSchema,
    })

    return (
        <>
            <Page
                className={classes.root}
                title="Register"
            >

                <Box
                    display="flex"
                    flexDirection="column"
                    height="100%"
                    justifyContent="center"
                >
                    <Card maxWidth="sm">
                        <CardContent>
                            <Container maxWidth="sm">

                                <form
                                    onSubmit={formik.handleSubmit}
                                >
                                    <Box mb={3}>
                                        <Typography
                                            color="textPrimary"
                                            variant="h2"
                                        >
                                            Add Products
                                        </Typography>
                                    </Box>
                                    <div className={classes.resize} variant="outlined"
                                        onClick={() => {
                                            wrapperRef.current.click()
                                        }} >
                                        <div>
                                            {formik.values.image ?
                                                (formik.values.image &&
                                                    <img className={classes.resize} src={URL.createObjectURL(formik.values.image)} />) :
                                                <img className={classes.resize} src={img} alt='Upload a pic' />

                                            }

                                        </div>
                                    </div>
                                    <input
                                        type="file"
                                        name="file"
                                        ref={wrapperRef}
                                        onChange={(event) => {
                                            formik.setFieldValue("image", event.currentTarget.files[0]);
                                            {
                                                formik.values.image &&
                                                    setImg(URL.createObjectURL(formik.values.image))
                                            }

                                        }}
                                        style={{
                                            display: 'none'
                                        }}

                                    />
                                    <div>
                                    </div>
                                    <Autocomplete
                                        id="combo-box-demo"
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width: 300, paddingTop: 50 }}
                                        renderInput={(params) => <TextField {...params} label="Type" variant="outlined" />}
                                    />
                                    <TextField
                                        error={Boolean(formik.touched.name && formik.errors.name)}
                                        fullWidth
                                        id="name"
                                        helperText={formik.touched.name && formik.errors.name}
                                        label="Name"
                                        margin="normal"
                                        name="name"
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        variant="outlined"
                                    />
                                    <TextField
                                        error={Boolean(formik.touched.type && formik.errors.type)}
                                        fullWidth
                                        id="type"
                                        helperText={formik.touched.type && formik.errors.type}
                                        label="Type"
                                        margin="normal"
                                        name="type"
                                        onBlur={formik.handleBlur}
                                        value={formik.values.type}

                                        onChange={formik.handleChange}
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="description"
                                        label="Multiline"
                                        multiline
                                        rows={4}
                                        error={Boolean(formik.touched.description && formik.errors.description)}
                                        fullWidth
                                        helperText={formik.touched.description && formik.errors.description}
                                        label="Description"
                                        margin="normal"
                                        name="description"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.description}
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="code"
                                        error={Boolean(formik.touched.code && formik.errors.code)}
                                        fullWidth
                                        helperText={formik.touched.code && formik.errors.code}
                                        label="Code"
                                        margin="normal"
                                        name="code"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.code}
                                        variant="outlined"
                                    />
                                    <InputLabel htmlFor="outlined-adornment-amount">Selling Price</InputLabel>
                                    <OutlinedInput
                                        id='sellingPrice'
                                        name='sellingPrice'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.sellingPrice}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        labelWidth={60}
                                        error={Boolean(formik.touched.sellingPrice && formik.errors.sellingPrice)}
                                        helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
                                    />
                                    <InputLabel htmlFor="outlined-adornment-amount">Discounted Price</InputLabel>
                                    <OutlinedInput
                                        id='discountedPrice'
                                        name='discountedPrice'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.discountedPrice}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        labelWidth={60}
                                        error={Boolean(formik.touched.discountedPrice && formik.errors.discountedPrice)}
                                        helperText={formik.touched.discountedPrice && formik.errors.discountedPrice}
                                    />
                                    <TextField
                                        id="code"
                                        error={Boolean(formik.touched.stock && formik.errors.stock)}
                                        fullWidth
                                        helperText={formik.touched.stock && formik.errors.stock}
                                        label="Stock"
                                        margin="normal"
                                        name="stock"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.stock}
                                        variant="outlined"
                                    />
                                    <Box my={2}>
                                        <Button
                                            color="primary"
                                            disabled={!formik.isValid || formik.isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                        >
                                            Add
                                        </Button>
                                    </Box>
                                </form>
                            </Container>
                        </CardContent>
                    </Card>
                </Box>
            </Page >
        </>
    )
}

export default AddProducts;