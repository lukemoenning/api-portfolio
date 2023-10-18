import * as S from './side-navigation.styles'

import ThemeToggle from '@/app/components/theme-toggle/theme-toggle'

const SideNavigation = () => {
  return (
    <S.SideNavigationWrapper>
      <div>THIS IS THE SIDE NAV</div>
      <ThemeToggle />
    </S.SideNavigationWrapper>
  )
}

export default SideNavigation
