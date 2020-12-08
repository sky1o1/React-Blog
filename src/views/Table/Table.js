import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getRequest } from '../../config/axios.config';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(ID, Email, Title, Firstname, Picture, Lastname) {
    return { ID, Email, Title, Firstname, Picture, Lastname };
}


export default function Tables() {
    const classes = useStyles();
    const [datas, setDatas] = useState([])

    useEffect(() => {
        async function fetchMyApi(event) {
            try {
                let response = await getRequest('/');
                const rows = response.data.data.map(item => createData(item.id, item.email, item.title, item.firstName, item.picture, item.lastName))
                setDatas(rows);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchMyApi();
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Email</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Firstname</TableCell>
                        <TableCell>Picture</TableCell>
                        <TableCell >Lastname</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((data) => (
                        <TableRow key={data.name}>
                            <TableCell>{data.Email}</TableCell>
                            <TableCell >{data.Title}</TableCell>
                            <TableCell >{data.Firstname}</TableCell>
                            <TableCell ><Avatar alt={data.Title} src={data.picture} /></TableCell>
                            <TableCell >{data.Lastname}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
