import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RootBox } from '../styles/index'
import { NewsContainer, BarContainer, DesktopGaugeContainer, MobileGaugeContainer } from '../styles/Company'
import Topbar from '../components/Topbar'
import MobileHomeIcon from '../components/MobileHomeIcon'
import { fetchApi } from '../utils/fetchApi';
import NewsCard from '../components/NewsCard'
import { StockContext } from '../context/context'
import { Bar } from "react-chartjs-2"
import { Chart as Chartjs } from 'chart.js/auto'
import { Box, Typography } from '@mui/material'
// import ReactSpeedometer from "react-d3-speedometer";
import dynamic from 'next/dynamic'

const ReactSpeedometer = dynamic(
    () => import('react-d3-speedometer'),
    { ssr: false }
)

export default function Company() {
    const router = useRouter()
    const { company } = router.query
    const [news, setNews] = useState([]);
    const { dates } = useContext(StockContext)
    const [count, setCount] = useState({ positive: 0, negative: 0 })
    const [stockDetails, setStockDetails] = useState({})

    useEffect(() => {
        (async () => {
            const response = await fetchApi('post',
                '/getNews',
                {
                    from_str: "2015-01-01",//date.startDate
                    end_str: "2019-11-06",//date.endDate
                    stock: company
                });
            setNews(response?.data?.data);
            let tempCount = { positive: 0, negative: 0 }
            response?.data?.data.forEach(item => {
                if (item?.status == "negative")
                    tempCount.negative += 1
                else
                    tempCount.positive += 1
            });
            setCount(tempCount)
        })();

        (async () => {
            const response = await fetchApi('post',
                '/findSentiment',
                {
                    from_str: "2015-01-01",//date.startDate
                    end_str: "2019-11-06",//date.endDate
                    stock: company
                });
            setStockDetails(response.data)
        })();
    }, [company, dates])


    return (
        <RootBox>
            <Topbar />
            <NewsContainer className="stockNewsContainer">
                {
                    news?.map(item => (
                        <NewsCard key={item._id} stock={item?.stock}
                            confidence={item?.confidence}
                            date={item?.date}
                            news={item?.news}
                            url={item?.URL || "https://economictimes.indiatimes.com/news/economy/policy"}
                        />
                    ))
                }
            </NewsContainer>
            <Box
                display="flex"
                alignItems="flex-end"
                justifyContent='space-around'
                flexWrap='wrap'
                margin="2em 2em 0 2em"
                backgroundColor='inherit'
            // border="1px solid red"
            >
                <BarContainer>
                    <Bar
                        data={{
                            labels: ["Positive", "Negative"],
                            datasets: [{
                                label: ["News Count"],
                                data: [count.positive, count.negative],
                                backgroundColor: ["#3cb371", "#FF6347"],
                            }],
                        }}

                        height={2000}
                        width={2000}
                    />
                </BarContainer>
                <DesktopGaugeContainer textAlign="center">
                    <GaugeDetails size="desktop"
                        company={company}
                        positiveNewsCount={count.positive}
                        stockDetails={stockDetails}
                    />
                </DesktopGaugeContainer>
                <MobileGaugeContainer textAlign="center">
                    <GaugeDetails size="mobile"
                        company={company}
                        positiveNewsCount={count.positive}
                        stockDetails={stockDetails}
                    />
                </MobileGaugeContainer>
            </Box>
            <MobileHomeIcon />
        </RootBox>
    )
}

const GaugeDetails = ({ size, company, positiveNewsCount, stockDetails }) => {
    return (<>
        <Typography variant={size == "desktop" ? "h6" : "body1"} mb="1em" color="white">
            Mean Confidence for {company}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb="1em" flexWrap="wrap">
            <Typography variant={size == "desktop" ? "body1" : "caption"} color="white">
                Total News: {stockDetails?.totalNews}
            </Typography>
            <Typography variant={size == "desktop" ? "body1" : "caption"} color="white">
                Total Confidence: {stockDetails?.totalConfidence}
            </Typography>
            <Typography variant={size == "desktop" ? "body1" : "caption"} color="white">
                Positive News Count: {stockDetails?.positiveNewsCount || positiveNewsCount}
            </Typography>
        </Box>
        <ReactSpeedometer
            maxValue={1}
            minValue={-1}
            height={size == "desktop" ? 300 : 250}
            width={size == "desktop" ? 500 : 270}
            value={stockDetails?.averageSentiment}
            needleTransition="easeQuadIn"
            needleTransitionDuration={1000}
            needleColor="#FFC300"
            startColor="#ADD8E6"
            segments={3}
            endColor="#1434A4"
        />
    </>)
}