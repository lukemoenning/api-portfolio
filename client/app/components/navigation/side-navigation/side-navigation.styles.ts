import styled from 'styled-components'

import { theme } from '@/app/libs/random-variables'

export const SideNavigationWrapper = styled.div`
  background-color: var(--sidenav-color);
  display: flex;
  flex-direction: column;
  width: ${theme.navigation.side.width};
  height: 100vh;
`
