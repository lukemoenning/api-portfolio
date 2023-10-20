import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const FooterWrapper = styled.div`
  background-color: purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${theme.footer.height};
  width: 100%;
  justify-content: center;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
