import * as S from './footer.styles'

import CustomImage from '@/app/libs/basic-components/custom-image/custom-image'
import Text from '@/app/libs/basic-components/text/text'

const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <CustomImage src="/images/logo.png" alt="logo" width={50} height={50} />
      <S.FooterContent>
        <Text content={'COPYRIGHT © 2023 Luke Moenning.'} tag={'p'} />
        <S.FooterDivider>|</S.FooterDivider>
        <Text content={'ALL RIGHTS RESERVED.'} tag={'p'} />
      </S.FooterContent>
    </S.FooterWrapper>
  )
}

export default Footer
