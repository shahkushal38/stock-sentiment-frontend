import { styled } from "@mui/material/styles"
import Box from '@mui/material/Box';

export const StyledMobileIcon = styled(Box)(({ theme }) => ({
    position: "fixed",
    display: "none",
    bottom: '1em',
    left: "1em",
    padding: "0.6em",
    backgroundColor: "white",
    borderRadius: 35,
    zIndex: 1,
    [theme.breakpoints.down(660)]: {
        display: "block"
    }
}))