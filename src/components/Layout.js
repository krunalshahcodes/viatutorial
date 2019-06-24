import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider, themes } from '../../config/theme'
import reset from '../utils/reset'
import prism from '../utils/prism'
import SEO from './SEO'
import Navigation from './Navigation'

const Layout = ({ children, pathname, customSEO }) => {
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
        {!customSEO && <SEO pathname={pathname} />}
        <Global styles={reset(theme)} />
        <Global styles={prism(theme)} />
        <Navigation />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  pathname: PropTypes.string.isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
