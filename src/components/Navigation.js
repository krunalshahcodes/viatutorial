import React from 'react'
import { useTheme } from '../../config/theme'
import ThemeToggler from './ThemeToggler'

const Navigation = () => {
  const theme = useTheme()
  return <ThemeToggler toggleTheme={theme.toggleTheme} themeName={theme.themeName} />
}

export default Navigation
