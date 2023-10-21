import * as S from './side-navigation.styles'

import NavigationLink, {
  NavigationLinkProps
} from '@/app/components/navigation/navigation-link/navigation-link'
import ThemeToggle from '@/app/components/theme-toggle/theme-toggle'
import CustomImage from '@/app/libs/basic-components/custom-image/custom-image'

const SideNavigation: React.FC = () => {
  const documentationBaseURL = 'https://lukemoenning.com'

  const navigationItems: NavigationLinkProps[] = [
    { text: 'Introduction', href: documentationBaseURL },
    { text: 'Authentication', href: documentationBaseURL },
    { text: 'Endpoints', href: documentationBaseURL }
  ]

  return (
    <S.SideNavigationWrapper>
      <S.SideNavigationTop>
        <CustomImage src="/images/logo.png" alt="logo" height={40} width={40} />
        <ThemeToggle />
      </S.SideNavigationTop>

      {navigationItems.map((item) => (
        <NavigationLink
          key={'side-navigation-' + item.text}
          href={item.href}
          text={item.text}
        />
      ))}
    </S.SideNavigationWrapper>
  )
}

export default SideNavigation
