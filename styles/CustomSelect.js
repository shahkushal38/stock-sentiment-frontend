import { styled } from "@mui/material/styles"
import FormControl from '@mui/material/FormControl';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
    backgroundColor: 'white',
    margin: '0 2em',
    maxWidth: 150,
    borderRadius: 6,
    [theme.breakpoints.down(600)]: {
        margin: '0 0.5em 0 0'
    }
}))
