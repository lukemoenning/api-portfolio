import styled from 'styled-components'

import { theme } from '@/app/libs/theme'

export const SideNavigationWrapper = styled.div`
  background-color: beige;
  display: flex;
  flex-direction: column;
  width: ${theme.navigation.side.width};
  height: 100vh;
`
