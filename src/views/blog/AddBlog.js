import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Input
} from '@material-ui/core';
import { createBlog } from '../../services/blog'

const useStyles = makeStyles(() => ({
  root: {}
}));

const AddBlog = ({ className, ...rest }) => {

  const classes = useStyles();

  const [values, setValues] = useState({
    title: '',
    description: '',
    image_url: '',
    createdAt: '',
  });

  const [image, setImage] = useState(null)

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeI = (event) => {
    let file = event.target.files[0]
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await createBlog(values.title, values.description, image)
      alert('Successfully added')

    } catch (error) {
      alert(error)
    }

  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="Add your blog"
          title="Add Blog"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Title"
                name="title"
                onChange={handleChange}
                required
                value={values.title}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Description"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Input
                fullWidth
                type="file"
                label="Image"
                name="image_url"
                onChange={handleChangeI}
              />
            </Grid>




          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AddBlog;
