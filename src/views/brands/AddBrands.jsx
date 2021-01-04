import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { addBrands } from '../../services/brands';
import { setBrands } from '../../store/actions';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    TextField,
    Typography,
    makeStyles,
    Input
} from '@material-ui/core';
import Page from 'src/components/Page';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    image: ''
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    type: Yup.string().required('Type is required'),
    description: Yup.string().required('Description is required'),
})

function AddBrands() {
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
            console.log('entered')
            try {
                const brandsAdded = await addBrands(values.name, values.type, values.description, values.image)
                dispatch(setBrands(brandsAdded))
                alert('Successfully added')
                onSubmitProps.setSubmitting(false)
                navigate('/app/brands')
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
                                            Add Brands
                                        </Typography>
                                    </Box>
                                    <div className={classes.resize} variant="outlined"
                                        onClick={() => {
                                            wrapperRef.current.click()
                                        }} >
                                        <div>
                                            {/* {formik.values.image &&
                                                <img className={classes.resize} src={URL.createObjectURL(formik.values.image)} />
                                            } */}
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
                                        label="type"
                                        margin="normal"
                                        name="type"
                                        onBlur={formik.handleBlur}
                                        value={formik.values.type}

                                        onChange={formik.handleChange}
                                        variant="outlined"
                                    />
                                    <TextField
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

export default AddBrands;