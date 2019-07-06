import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import mdxComponents from './mdx'
import theme from '../../config/theme'
import reset from '../utils/reset'
import SEO from './SEO'
import Navigation from './Navigation'
import MobileNav from './MobileNav'

const Layout = ({ children, pathname, customSEO }) => (
  <ThemeProvider theme={theme}>
    <>
      {!customSEO && <SEO pathname={pathname} />}
      <Global styles={reset} />
      <Navigation />
      <MDXProvider components={mdxComponents}>
        <>{children}</>
      </MDXProvider>
      <MobileNav />
    </>
  </ThemeProvider>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  pathname: PropTypes.string.isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
