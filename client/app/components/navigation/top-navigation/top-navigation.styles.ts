import styled from 'styled-components'

import { RVs } from '@/app/libs/random-variables'

export const TopNavigationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
  min-height: ${RVs.navigation.top.height};
`
