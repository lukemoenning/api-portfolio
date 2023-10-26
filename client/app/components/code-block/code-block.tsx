import * as S from './code-block.styles'

const CodeBlock: React.FC = () => {
  return (
    <S.CodeBlockWrapper>
      <S.CodeBlockHeader>
        <div>THIS IS A CODE BLOCK</div>
      </S.CodeBlockHeader>
      <S.CodeBlockBody>
        Aliquam ac urna ut neque lacinia lacinia a nec nunc. Curabitur auctor
        nisi id purus pellentesque, in lacinia nisl efficitur. Quisque sit amet
        sapien nec sapien faucibus molestie. Sed scelerisque feugiat libero,
        quis fermentum dolor interdum in. Proin vitae varius libero. Vivamus sit
        amet nisl non diam fringilla cursus. Pellentesque ornare dui id purus
        cursus, at vestibulum purus placerat.
      </S.CodeBlockBody>
    </S.CodeBlockWrapper>
  )
}

export default CodeBlock
