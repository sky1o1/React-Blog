import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import "react-datepicker/dist/react-datepicker.css";
import '../../css/styles.css'
import { isBefore } from "date-fns";
import DateRangePicker from "../../services/DateRangePicker";
import dummyData from "./dummy-date";
import { isObjectEmpty } from "../../utils/index";
import MaterialTable from 'material-table';
import { endOfDay, startOfDay } from 'date-fns';

function DateRangeTable() {
    const [error, setError] = useState({});
    const [date, setDate] = useState({
        startDate: null,
        endDate: null
    });
    const [filteredData, setFilteredData] = useState(dummyData);



    const onDateChangeHandler = (dateData, id) => {
        setDate((prevDate) => ({
            ...prevDate,
            [id]: dateData.getTime() // save as UTC time
        }));
        setError({});
        //Check if end date is after start date
        if (id === "endDate" && !isBefore(date.startDate, dateData)) {
            setError((prevError) => ({
                ...prevError,
                endDate: "End date is before start date"
            }));
            alert('End date is before start date')
        }

        if (id === "startDate" && isBefore(date.endDate, dateData)) {
            setError((prevError) => ({
                ...prevError,
                startDate: "start date is after end date"
            }));
            alert('Start date is after end date')

        }
    };

    useEffect(() => {
        if (
            isObjectEmpty(error) &&
            date.starDate !== null &&
            date.endDate !== null
        ) {
            //filter data
            const filterData = dummyData.filter((element) => {
                if (
                    startOfDay(element.createdAt) >= date.startDate &&
                    element.createdAt <= endOfDay(date.endDate)
                ) {
                    return element;
                }
            });
            setFilteredData(filterData);
        }
    }, [date.startDate, date.endDate]);

    return (
        <React.Fragment>
            <DateRangePicker
                startDate={date.startDate}
                endDate={date.endDate}
                error={error}
                onDateChangeHandler={onDateChangeHandler}
            />
            <MaterialTable
                title="Data Table"
                columns={[
                    { title: 'Address', field: 'address' },
                    { title: 'City', field: 'city' },
                    { title: 'Date', field: 'formattedDate' },
                    { title: 'Phone Number', field: 'phoneNumber' },
                    { title: 'Title', field: 'title' },
                ]}
                data={filteredData}
                options={{
                    filtering: true
                }}
            />
        </React.Fragment>
    )
}

export default DateRangeTable;
