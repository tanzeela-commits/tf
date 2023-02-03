import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import datePickerCss from "./dateInput.module.css";
export default function DateInput(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        className={datePickerCss.datePicker}
        inputFormat="DD/MM/YYYY"
        renderInput={(params) => <TextField {...params} />}
        {...props}
      />
    </LocalizationProvider>
  );
}
