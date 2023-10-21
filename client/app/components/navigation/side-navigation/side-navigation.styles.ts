import styled from 'styled-components'

import { randomVariables } from '@/app/libs/random-variables'

export const SideNavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${randomVariables.navigation.side.width};
  height: 100vh;
  background-color: var(--sidenav-color);
  position: fixed;
`

export const SideNavigationTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${randomVariables.navigation.side.leftMargin};
`
