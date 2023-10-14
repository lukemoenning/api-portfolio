// import { isValidElement } from 'react'
import type { ReactNode } from 'react'

import * as S from './page-wrapper.styles'

type PageLayoutProps = {
  children?: ReactNode
}

const PageWrapper = ({ children }: PageLayoutProps) => {
  // const is404Page = isValidElement(children) && children.type === Error404

  return (
    <S.PageWrapper>
      {/* {!is404Page && <Navbar />} */}
      <div>{children}</div>
      {/* {!is404Page && <Footer />} */}
    </S.PageWrapper>
  )
}

export default PageWrapper
