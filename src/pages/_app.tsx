import type { AppProps } from 'next/app'
import '@/scss/sections/index.scss'



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}