import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getAllUser } from '../../services/user'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import debounce from "lodash.debounce";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../../css/styles.css'
import MaterialTable from 'material-table';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    wrapper: {
        height: '100%',
        overflowY: 'scroll',

    },
});

function createData(Date, Price, ProductName, Uuid) {
    return { Date, Price, ProductName, Uuid };
}


export default function Tables() {
    const classes = useStyles();
    const [datas, setDatas] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});
    const [date, setDate] = useState({
        startDate: null,
        endDate: null
    });
    console.log(datas)
    const scrollContainer = useRef(null);

    useEffect(() => {
        fetchMyApi(page);
    }, [])

    async function fetchMyApi(page) {
        try {
            setLoading(true)
            let response = await getAllUser(page)
            console.log(response)
            const rows = response.data.map(item => createData(item.date, item.price, item.productName, item.uuid))
            setDatas(prev => [...prev, ...rows]);
            setLoading(false)
            setPage(page + 1)
        }
        catch (error) {
            console.log(error)
        }
    }



    const onScrollHandler = debounce(() => {
        const container = scrollContainer.current
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
            console.log("buttom of page")
            if (loading == false) {
                fetchMyApi(page)
            }
        }
    }, 250)

    return (
        <>
            {/* <TableContainer className={classes.wrapper} component={Paper} onScroll={onScrollHandler} ref={scrollContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Date</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>ProductName</TableCell>
                            <TableCell>Uuid</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map((data) => (

                            < TableRow  >
                                <TableCell>{data.Date}</TableCell>
                                <TableCell >{data.Price}</TableCell>
                                <TableCell >{data.ProductName}</TableCell>
                                < TableCell > {data.Uuid}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer > */}
            <MaterialTable
                title="Basic Filtering Preview"
                columns={[
                    { title: 'Date', field: 'Date' },
                    { title: 'Price', field: 'Price' },
                    { title: 'Product Name', field: 'ProductName' },
                    { title: 'Uuid', field: 'Uuid' },
                ]}
                data={datas}
                options={{
                    filtering: true
                }}
            />
        </>
    );
}
