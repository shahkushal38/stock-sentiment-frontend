import React from 'react'
import { StyledTopbar } from '../styles/Topbar'
import CustomDatePicker from '../components/CustomDatePicker'
import CustomSelect from '../components/CustomSelect'
import { StyledIcon } from '../styles/Topbar'
import Link from 'next/link'

export default function Topbar() {
    return (
        <StyledTopbar >
            <Link href="/">
                <StyledIcon variant='h4' color='white'>
                    Stock<span style={{ color: 'yellow' }}>View</span>
                </StyledIcon>
            </Link>
            <CustomDatePicker label="Start Date" />
            <CustomDatePicker label="End Date" />
            <CustomSelect />
        </StyledTopbar>
    )
}
