import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';
import { Header } from '../components/Header';
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  
  );
}

export default MyApp
