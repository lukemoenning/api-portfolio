import * as S from './side-navigation.styles'

import NavigationLink, {
  NavigationLinkProps
} from '@/app/components/navigation/navigation-link/navigation-link'
import ThemeToggle from '@/app/components/theme-toggle/theme-toggle'
import CustomImage from '@/app/libs/basic-components/custom-image/custom-image'
import { RVs } from '@/app/libs/random-variables'

const SideNavigation: React.FC = () => {
  const sideNavigationItems: NavigationLinkProps[] = [
    { text: 'Introduction', href: RVs.baseURL },
    { text: 'Authentication', href: RVs.baseURL },
    { text: 'Endpoints', href: RVs.baseURL }
  ]

  return (
    <S.SideNavigationWrapper>
      <S.SideNavigationTop>
        <CustomImage src="/images/logo.png" alt="logo" height={40} width={40} />
        <ThemeToggle />
      </S.SideNavigationTop>

      {sideNavigationItems.map((item) => (
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
