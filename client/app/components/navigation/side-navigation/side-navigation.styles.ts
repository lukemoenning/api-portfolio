import styled from 'styled-components'

import { RVs } from '@/app/libs/random-variables'

export const SideNavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${RVs.navigation.side.width};
  height: 100vh;
  background-color: var(--sidenav-color);
  position: fixed;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`

export const SideNavigationTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${RVs.navigation.side.leftMargin};
`
