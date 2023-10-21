import * as S from './top-navigation.styles'

import NavigationLink, {
  NavigationLinkProps
} from '@/app/components/navigation/navigation-link/navigation-link'
import { RVs } from '@/app/libs/random-variables'

const TopNavigation: React.FC = () => {
  const topNavigationItems: NavigationLinkProps[] = [
    { text: 'Docs', href: RVs.baseURL },
    { text: 'Resume', href: RVs.baseURL },
    { text: 'Contact', href: RVs.baseURL }
  ]

  return (
    <S.TopNavigationWrapper>
      {topNavigationItems.map((item) => (
        <NavigationLink
          key={'side-navigation-' + item.text}
          href={item.href}
          text={item.text}
        />
      ))}
    </S.TopNavigationWrapper>
  )
}

export default TopNavigation
