import React , {useState}from 'react';import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "react-datepicker/dist/react-datepicker.css";
import '../css/styles.css'

const DateRangePicker = ({
  startDate,
  endDate,
  error,
  onDateChangeHandler
}) => {
  return (
    <div className="dp-container">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          format="MM/dd/yyyy"
          margin="normal"
          id="startDate"
          label="Start date"
          value={startDate}
          selected={startDate ? new Date(startDate) : null}
          onChange={(date) => onDateChangeHandler(date, "startDate")}
          className={`dp-item ${error["startDate"] ? "dp-item--error" : ""}`}
          required={true}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        <KeyboardDatePicker
          format="MM/dd/yyyy"
          margin="normal"
          id="endDate"
          label="End date"
          value={endDate}
          selected={endDate ? new Date(endDate) : null}
          onChange={(date) => onDateChangeHandler(date, "endDate")}
          className={`dp-item ${error["endDate"] ? "dp-item--error" : ""}`}
          required={true}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       
      </Grid>
    </MuiPickersUtilsProvider>
      
      <div className="dp-group">
        {/* <DatePicker
          id="startDate"
          selected={startDate ? new Date(startDate) : null}
          onChange={(date) => onDateChangeHandler(date, "startDate")}
          placeholderText="start Date"
          className={`dp-item ${error["startDate"] ? "dp-item--error" : ""}`}
          required={true}
        />
        {error["startDate"] && <p className="dp-error">{error["startDate"]}</p>}
      </div>
      <div className="dp-group">
        <DatePicker
          id="endDate"
          selected={endDate ? new Date(endDate) : null}
          onChange={(date) => onDateChangeHandler(date, "endDate")}
          placeholderText="end Date"
          className={`dp-item  ${error["endDate"] ? "dp-item--error" : ""}`}
          required={true}
        />
        {error["endDate"] && <p className="dp-error">{error["endDate"]}</p>} */}
      </div>
    </div>
  );
};

export default DateRangePicker;
