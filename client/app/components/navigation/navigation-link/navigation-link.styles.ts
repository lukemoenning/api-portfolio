import styled from 'styled-components'

import { randomVariables } from '@/app/libs/random-variables'

export const NavigationLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 25px;
  margin: 10px;
  margin-left: ${randomVariables.navigation.side.leftMargin};
`
