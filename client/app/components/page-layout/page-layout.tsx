import { isValidElement } from 'react'
import type { ReactNode } from 'react'

import * as S from './page-layout.styles'

import Footer from '@/app/components/footer/footer'
import SideNavigation from '@/app/components/navigation/side-navigation/side-navigation'
import TopNavigation from '@/app/components/navigation/top-navigation/top-navigation'
import Error404 from '@/pages/404'

interface PageLayoutProps {
  children?: ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children
}: PageLayoutProps) => {
  const is404Page = isValidElement(children) && children.type === Error404

  return (
    <S.PageLayoutWrapper>
      {!is404Page && <SideNavigation />}
      <S.PageLayoutRightWrapper>
        {!is404Page && <TopNavigation />}
        <S.PageLayoutContent>{children}</S.PageLayoutContent>
        {!is404Page && <Footer />}
      </S.PageLayoutRightWrapper>
    </S.PageLayoutWrapper>
  )
}

export default PageLayout
