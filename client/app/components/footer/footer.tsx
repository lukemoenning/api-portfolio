import * as S from './footer.styles'

import CustomImage from '@/app/libs/basic-components/custom-image/custom-image'
import Link from '@/app/libs/basic-components/link/link'
import Text from '@/app/libs/basic-components/text/text'

const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <CustomImage src="/images/logo.png" alt="logo" width={50} height={50} />
      <S.FooterContent>
        <Link href={'https://lukemoenning.com'} text={'lukemoenning.com'} />
        <Text content={'|'} margin={'0px 10px 0px 10px'} />
        <Text content={'COPYRIGHT © 2023 LUKE MOENNING.'} />
        <Text content={'|'} margin={'0px 10px 0px 10px'} />
        <Text content={'ALL RIGHTS RESERVED.'} />
      </S.FooterContent>
    </S.FooterWrapper>
  )
}

export default Footer
