import { styled } from "@mui/material/styles"
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export const CustomCard = styled(Card)(({ theme }) => ({
    minWidth: 400,
    maxWidth: 400,
    maxHeight: 450,
    minHeight: 150,
    margin: '1em',
    [theme.breakpoints.down(850)]: {
        minWidth: 300
    },
    [theme.breakpoints.down(600)]: {
        minWidth: 200
    }
}))

export const ConfidenceBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0 1em",
    borderRadius: 10,
    [theme.breakpoints.down(600)]: {
        padding: "0 0.3em",
    }
}))