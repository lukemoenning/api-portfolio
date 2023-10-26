import styled from 'styled-components'

import { RVs } from '@/app/libs/random-variables'

export const CodeBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: 45%;
`

export const CodeBlockHeader = styled.div`
  display: flex;
  border-top-right-radius: ${RVs.codeBlock.borderRadius};
  border-top-left-radius: ${RVs.codeBlock.borderRadius};
  background-color: var(--code-block-header);
  padding: ${RVs.codeBlock.padding};
`

export const CodeBlockBody = styled.div`
  display: flex;
  border-bottom-right-radius: ${RVs.codeBlock.borderRadius};
  border-bottom-left-radius: ${RVs.codeBlock.borderRadius};
  background-color: var(--code-block-body);
  padding: ${RVs.codeBlock.padding};
`
