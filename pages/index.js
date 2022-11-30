import { ThemeProvider } from '@mui/styles'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { RootBox, NewsContainer } from '../styles/index'
import Topbar from '../components/Topbar'
import NewsCard from '../components/NewsCard'
import MobileHomeIcon from '../components/MobileHomeIcon'
import { fetchApi } from '../utils/fetchApi';
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { StockContext } from '../context/context'

let theme = createTheme();
theme = responsiveFontSizes(theme);

// const news = [
//   {
//     company: "Tata",
//     confidence: "0.2",
//     date: "20/11/2022",
//     headline: 'abajdjdkm,,jdkflkflkfklflkfkf'
//   },
//   {
//     company: "Reliance",
//     confidence: "0.6",
//     date: "21/11/2022",
//     headline: 'abajdjdkm,,jdkflkflkfklflkfkf'
//   },
//   {
//     company: "Bajaj",
//     confidence: "0.7",
//     date: "22/11/2022",
//     headline: 'abajdjdkm,,jdkflkflkfklflkfkfdsfgdfgdf sadsadasdsds gdfgngjfgjdkjfdjkfdkjfdkjfdjkfdkjbfkjbfkjbf'
//   },
// ];

export default function Home() {
  const [news, setNews] = useState([]);
  const { dates } = useContext(StockContext)

  useEffect(() => {
    (async () => {
      const response = await fetchApi('get',
        '/getNews',
        {
          from_str: dates.startDate,
          end_str: dates.endDate,
          stock: ""
        });
      setNews(response?.data?.data);
    })();
  }, [dates]);

  return (
    <ThemeProvider theme={theme}>
      <RootBox>
        <Topbar />
        <NewsContainer >
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
        <MobileHomeIcon />
      </RootBox>
    </ThemeProvider>
  )
}
