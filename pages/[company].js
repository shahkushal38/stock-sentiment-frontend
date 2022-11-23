import React from 'react'
import { useRouter } from 'next/router'
import { RootBox, NewsContainer } from '../styles/index'
import Topbar from '../components/Topbar'
import MobileHomeIcon from '../components/MobileHomeIcon'

export default function Company() {
    const router = useRouter()
    const { company } = router.query

    return (
        <RootBox>
            <Topbar />
            <NewsContainer>
                <div>{company}</div>

            </NewsContainer>
            <MobileHomeIcon />
        </RootBox>
    )
}