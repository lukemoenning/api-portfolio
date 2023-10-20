import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import PageLayout from '@/app/components/page-layout/page-layout'
import { GlobalTheme } from '@/app/libs/theme'

import '../app/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalTheme />
      <ThemeProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
