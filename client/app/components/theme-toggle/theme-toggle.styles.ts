import styled from 'styled-components'

export const ThemeToggleWrapper = styled.div`
  width: 40px;
  height: 20px;
  background: linear-gradient(90deg, #fff 50%, #2c3e50 50%);
  border-radius: 15px;
  position: relative;
  cursor: pointer;
`

export const SoccerBall = styled.div<{ theme: string }>`
  width: 20px;
  height: 20px;
  background: url('/images/theme-toggle.svg') no-repeat center;
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  transition: 0.3s ease-in-out;
  left: ${(props) => (props.theme === 'dark' ? '50%' : '0')};
`
