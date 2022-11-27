import React from 'react'
import { StyledTopbar } from '../styles/Topbar'
import CustomDatePicker from '../components/CustomDatePicker'
import CustomSelect from '../components/CustomSelect'
import { StyledIcon } from '../styles/Topbar'
import Link from 'next/link'
import { StockContext } from '../context/context';
import { useContext } from 'react';
import { useEffect } from 'react'

export default function Topbar() {
    const { dates, setStartDate, setEndDate } = useContext(StockContext);

    return (
        <StyledTopbar >
            <Link href="/">
                <StyledIcon variant='h4' color='white'>
                    Stock<span style={{ color: 'yellow' }}>View</span>
                </StyledIcon>
            </Link>
            <CustomDatePicker label="Start Date" date={dates.startDate} changeDate={setStartDate} />
            <CustomDatePicker label="End Date" date={dates.endDate} changeDate={setEndDate} />
            <CustomSelect />
        </StyledTopbar>
    )
}
