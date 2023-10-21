import styled from 'styled-components'

import { randomVariables } from '@/app/libs/random-variables'

export const PageLayoutWrapper = styled.div`
  display: flex;
  background-color: var(--background);
`

export const PageLayoutRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin-left: ${randomVariables.navigation.side.width};
`

export const PageLayoutContent = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow: auto;
`
