import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider, themes } from '../../config/theme'
import reset from '../utils/reset'
import Navigation from './Navigation'

const Layout = ({ children }) => {
  const initializeTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'default'
    }
    return 'default'
  }

  const [themeName, setTheme] = useState(initializeTheme)

  useEffect(() => {
    localStorage.setItem('theme', themeName)
  }, [themeName])

  const toggleTheme = name => setTheme(name)

  const theme = {
    ...themes[themeName],
    toggleTheme,
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Global styles={reset(theme)} />
        <Navigation />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
