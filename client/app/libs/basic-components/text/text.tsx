type TextType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TextProps {
  content: string
  color?: string
  tag: TextType
}

const Text: React.FC<TextProps> = ({ content, color, tag }) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements

  return <CustomTag style={{ color }}>{content}</CustomTag>
}

export default Text
