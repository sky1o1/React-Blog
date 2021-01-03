import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const Details = ({ docs }) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen} >
                <VisibilityOutlinedIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title"> {docs.name}</DialogTitle>
                <img style={{
                    height: 200,
                    width: 200
                }} src={docs.imageUrl} alt={docs.imageName} />
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {docs.type}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        {docs.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Details;