// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/main'
import * as React from 'react'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
        <Layout router={router}>
            <Component {...pageProps} key={router.route}/>
        </Layout>
    </ChakraProvider>
  )
}

export default MyApp