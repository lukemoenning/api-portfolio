import * as S from './link.styles'

interface LinkProps {
  href: string
  text: string
  tag?: TagType
  color?: string
  hoverColor?: string
}

type TagType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const Link: React.FC<LinkProps> = ({
  href,
  text,
  tag = 'p',
  color = 'var(--primary-color)',
  hoverColor = color
}) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements

  return (
    <CustomTag>
      <S.LinkWrapper href={href} color={color} hoverColor={hoverColor}>
        {text}
      </S.LinkWrapper>
    </CustomTag>
  )
}

export default Link
