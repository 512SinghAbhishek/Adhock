import '@/styles/globals.css'
import '@/styles/Home.module.css'
import '@/styles/Header.css';
import '@/styles/Footer.css';
import '@/styles/Apply.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
