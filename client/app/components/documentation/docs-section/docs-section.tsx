import * as S from './docs-section.styles'

import CodeBlock from '@/app/components/code-block/code-block'

export interface DocsSectionProps {
  title: string
  bodyParagraphs: string[]
}

const DocsSection: React.FC<DocsSectionProps> = ({
  title,
  bodyParagraphs
}: DocsSectionProps) => {
  return (
    <S.DocsSectionWrapper>
      <S.DocsSectionTextWrapper>
        <h1 id={'#title'}>{title}</h1>
        {bodyParagraphs.map((paragraph, index) => (
          <p key={'docs-section-' + title + '-paragraph-' + index}>
            {paragraph}
          </p>
        ))}
      </S.DocsSectionTextWrapper>
      <CodeBlock />
    </S.DocsSectionWrapper>
  )
}

export default DocsSection
