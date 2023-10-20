import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${theme.footer.height};
  min-width: 100%;
`

export const FooterDivider = styled.div`
  margin: 0 10px;
`

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
`
