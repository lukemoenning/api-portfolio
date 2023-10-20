type TagType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TextProps {
  content: string
  color?: string
  tag?: TagType
  margin?: string
}

const Text: React.FC<TextProps> = ({
  content,
  color = 'var(--text-color)',
  tag = 'p',
  margin = '5px'
}) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements

  return (
    <CustomTag style={{ color: color, margin: margin }}>{content}</CustomTag>
  )
}

export default Text
