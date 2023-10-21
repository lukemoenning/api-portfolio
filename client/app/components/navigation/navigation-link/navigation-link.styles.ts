import styled from 'styled-components'

import { RVs } from '@/app/libs/random-variables'

export const NavigationLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 25px;
  margin: 10px;
  margin-left: ${RVs.navigation.side.leftMargin};
`
