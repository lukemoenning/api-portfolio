import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import * as S from './theme-toggle.styles'

const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleThemeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <S.ThemeToggleWrapper onClick={toggleThemeHandler}>
      <S.SoccerBall theme={theme} />
    </S.ThemeToggleWrapper>
  )
}

export default ThemeSwitch
