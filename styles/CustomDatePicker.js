
import { styled } from "@mui/material/styles"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from "@mui/material";


export const StyledCustomDatePicker = styled(DatePicker)(({ theme }) => ({
    margin: '0 2em',
    backgroundColor: "white",
    borderRadius: 6,
    [theme.breakpoints.down(600)]: {
        margin: '0 0.5em'
    }
}))

export const CustomTextField = styled(TextField)(({ theme }) => ({
    [theme.breakpoints.down(600)]: {
        width: 150,
    }
}))