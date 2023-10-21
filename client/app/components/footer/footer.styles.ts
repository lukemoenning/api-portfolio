import styled from 'styled-components'

import { RVs } from '@/app/libs/random-variables'

export const FooterWrapper = styled.div`
  background-color: var(--footer-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${RVs.footer.height};
  width: 100%;
  justify-content: center;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
