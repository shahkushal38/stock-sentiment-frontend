import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { RootBox, NewsContainer } from '../styles/index'
import Topbar from '../components/Topbar'
import NewsCard from '../components/NewsCard'
import MobileHomeIcon from '../components/MobileHomeIcon'

let theme = createTheme();
theme = responsiveFontSizes(theme);

const news = [
  {
    company: "Tata",
    confidence: "0.2",
    date: "20/11/2022",
    headline: 'abajdjdkm,,jdkflkflkfklflkfkf'
  },
  {
    company: "Reliance",
    confidence: "0.6",
    date: "21/11/2022",
    headline: 'abajdjdkm,,jdkflkflkfklflkfkf'
  },
  {
    company: "Bajaj",
    confidence: "0.7",
    date: "22/11/2022",
    headline: 'abajdjdkm,,jdkflkflkfklflkfkfdsfgdfgdf sadsadasdsds gdfgngjfgjdkjfdjkfdkjfdkjfdjkfdkjbfkjbfkjbf'
  },
];

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <RootBox>
        <Topbar />
        <NewsContainer >
          {
            news.map((item, index) => (
              <NewsCard key={index} company={item.company}
                confidence={item.confidence}
                date={item.date}
                headline={item.headline}
              />
            ))
          }
        </NewsContainer>
        <MobileHomeIcon />
      </RootBox>
    </ThemeProvider>
  )
}
