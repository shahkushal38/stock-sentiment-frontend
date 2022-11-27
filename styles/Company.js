import { styled } from "@mui/material/styles"
import { Box } from '@mui/material'

export const NewsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    overflowX: "auto",
    alignItems: 'center',
    paddingTop: '90px',
}))

export const BarContainer = styled(Box)(({ theme }) => ({
    width: 500,
    height: 500,
    // border: "1px solid blue",
    [theme.breakpoints.down(700)]: {
        width: 300,
        height: 300
    },
    [theme.breakpoints.down(450)]: {
        width: 200,
        height: 200
    }
}))

export const DesktopGaugeContainer = styled(Box)(({ theme }) => ({
    width: 500,
    height: 370,
    // border: "1px solid yellow",
    [theme.breakpoints.down(700)]: {
        display: "none"
    }
}))

export const MobileGaugeContainer = styled(Box)(({ theme }) => ({
    display: "none",
    width: 300,
    height: 350,
    marginTop: "3em",
    // border: "1px solid purple",
    [theme.breakpoints.down(700)]: {
        display: "inline-block",
    }
})) 