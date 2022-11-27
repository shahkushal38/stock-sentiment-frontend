import { styled } from "@mui/material/styles"
import { Box } from '@mui/material'
import { Typography } from '@mui/material'

export const StyledTopbar = styled(Box)(({ theme }) => ({
    position: 'fixed',
    height: '70px',
    width: '100%',
    backgroundColor: '#6666FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    [theme.breakpoints.down("md")]: {

    }
}))

export const StyledIcon = styled(Typography)(({ theme }) => ({
    marginLeft: "1em",
    cursor: 'pointer',
    [theme.breakpoints.down(750)]: {
        fontSize: "1rem"
    },
    [theme.breakpoints.down(660)]: {
        display: "none"
    }
}))