import type { AppProps } from 'next/app'
import '@/scss/sections/index.scss'
import { Raleway, Fira_Code  } from 'next/font/google'


const raleway = Raleway({subsets:["latin"]})
const fireCode = Fira_Code({subsets:["latin"], weight:["300", "400", "500","600",'700']})


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}