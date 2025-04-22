
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {FormHelperText }from '@mui/material';
const CustomDatePicker=({value, error, helperText,onChange, ...props })=>{
    const handleDateChange = (newDate) => {
        if (newDate && newDate.isValid()) {
            onChange(newDate);  // Pass the valid dayjs object to the parent
          }
      };
    return(
        <>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          onChange={handleDateChange} 
          format='DD-MM-YYYY'
          {...props}
          sx={{width:'100%'}}
        />
    </LocalizationProvider>
    {error && <FormHelperText>{helperText}</FormHelperText>}
        </>
    )
}
export default CustomDatePicker;