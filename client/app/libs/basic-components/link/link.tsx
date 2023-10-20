interface LinkProps {
  href: string
  text: string
  tag?: TagType
  color?: string
}

type TagType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const Link: React.FC<LinkProps> = ({
  href,
  text,
  tag = 'p',
  color = 'var(--primary-color)'
}) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements

  return (
    <CustomTag>
      <a href={href} style={{ color: color, textDecoration: 'none' }}>
        {text}
      </a>
    </CustomTag>
  )
}

export default Link
