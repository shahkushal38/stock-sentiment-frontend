import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { StyledMobileIcon } from "../styles/MobileHomeIcon"
import Link from 'next/link';

export default function MobileHomeIcon() {
    return (
        <Link href="/">
            <StyledMobileIcon >
                <HomeIcon />
            </StyledMobileIcon>
        </Link>
    )
}