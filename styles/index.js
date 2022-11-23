import { styled } from "@mui/material/styles"
import { Box } from '@mui/material'

export const RootBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    width: '100vw',
    backgroundColor: '#28282B'
}))

export const NewsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: '90px',
    flexWrap: 'wrap'
}))




