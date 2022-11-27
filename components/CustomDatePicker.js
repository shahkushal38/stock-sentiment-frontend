import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StyledCustomDatePicker, CustomTextField } from '../styles/CustomDatePicker'
import dayjs from "dayjs"

export default function CustomDatePicker(props) {
  const [date, setDate] = useState(props.date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledCustomDatePicker
        label={props.label}
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
          props.changeDate(dayjs(newValue).format('YYYY-MM-DD'));
        }}
        renderInput={(params) => <CustomTextField size="small" {...params} />}
        inputFormat="YYYY-MM-DD"
      />
    </LocalizationProvider>
  );
}
