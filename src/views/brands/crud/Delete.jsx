import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { deleteBrands } from '../../../services/brands'
import { useNavigate } from 'react-router-dom';

const Delete = ({ docs }) => {
    const [open, setOpen] = React.useState(false);
    const [id, setId] = useState(docs.id)
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onDelete = () => {
        setOpen(false);
        deleteBrands(id)
        navigate('/app/brands')
    }

    return (
        <div>
            <IconButton onClick={handleClickOpen} >
                <DeleteOutlineIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onDelete} color="primary">
                        Yes
          </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        No
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Delete;
