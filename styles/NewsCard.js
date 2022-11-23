import { styled } from "@mui/material/styles"
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export const CustomCard = styled(Card)(({ theme }) => ({
    width: 400,
    maxHeight: 450,
    margin: '1em',
    [theme.breakpoints.down("md")]: {

    }
}))

export const ConfidenceBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0 1em",
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {

    }
}))