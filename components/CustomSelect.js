import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { StyledFormControl } from '../styles/CustomSelect';
import { useRouter } from 'next/router'

export default function CustomSelect() {
    const [company, setCompany] = React.useState('');
    const router = useRouter()

    const handleChange = (event) => {
        setCompany(event.target.value);
        router.push('/' + event.target.value);
    };

    return (
        <StyledFormControl fullWidth size='small'>
            <InputLabel id="demo-simple-select-label">Stock</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={company}
                label="Stock"
                onChange={handleChange}
            >
                <MenuItem value={"HDFC Bank"}>HDFC Bank</MenuItem>
                <MenuItem value={"Tata Power"}>Tata Power</MenuItem>
                <MenuItem value={"Reliance"}>Reliance</MenuItem>
                <MenuItem value={"TCS"}>TCS</MenuItem>
            </Select>
        </StyledFormControl>
    );
}