import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import IconButton from '@material-ui/core/IconButton';
import { updateBrands } from '../../../services/brands';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setBrands } from '../../../store/actions';
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


function Edit({ docs }) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({ docs })
    const [id, setId] = useState(data.docs.id)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const initialValues = {
        name: data.docs.name,
        type: data.docs.type,
        description: data.docs.description,
        image: data.docs.imageUrl,
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (values) => {
            try {
                const brandsUpdated = await updateBrands(id, values.name, values.type, values.description, values.image)
                dispatch(setBrands(brandsUpdated))
                navigate('/app/addBrands')
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    })

    return (

        <>
            <IconButton onClick={handleClickOpen} >
                <EditOutlinedIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <form onSubmit={formik.handleSubmit} >
                        <CardContent>
                            <img style={{
                                height: 200,
                                width: 200
                            }} src={data.docs.imageUrl} alt={data.docs.imageName} />

                            {/* {formik.values.image &&
                                <img style={{
                                    height: 200,
                                    width: 200
                                }} src={URL.createObjectURL(formik.values.image)} />
                            } */}
                            <img style={{
                                height: 200,
                                width: 200
                            }} src='/static/images/placeholder-square.png' alt='Upload a pic' />
                        </CardContent>
                        <Input
                            type="file"
                            name="file"
                            onChange={(event) => {
                                formik.setFieldValue("image", event.currentTarget.files[0]);
                            }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="type"
                            label="Type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="description"
                            label="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                    </Button>
                            <Button onClick={handleClose} type="submit" color="primary">
                                Edit
                    </Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </>
    );
}

export default Edit;