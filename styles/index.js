import { styled } from "@mui/material/styles"
import { Box } from '@mui/material'

export const RootBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    // minWidth: '100vw',
    backgroundColor: '#28282B',
    // border: "1px solid red"
}))

export const NewsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: '90px',
    flexWrap: 'wrap'
}))




