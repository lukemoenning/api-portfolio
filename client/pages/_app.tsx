import type { AppProps } from 'next/app'

import PageWrapper from '@/app/components/page-wrapper/page-wrapper'

import '../app/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </>
  )
}

export default MyApp
