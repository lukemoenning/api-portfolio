import * as S from './navigation-link.styles'

import Link from '@/app/libs/basic-components/link/link'

export interface NavigationLinkProps {
  href: string
  text: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  text
}: NavigationLinkProps) => {
  return (
    <S.NavigationLinkWrapper>
      <Link href={href} text={text} color={'var(--text-color)'} />
    </S.NavigationLinkWrapper>
  )
}

export default NavigationLink
