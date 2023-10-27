import styled from 'styled-components'

export const LinkWrapper = styled.a<{ $color: string; $hovercolor: string }>`
  color: ${(props) => props.$color};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  opacity: 0.75;

  &:hover {
    color: ${(props) => props.$hovercolor};
    opacity: 1;
  }
`
