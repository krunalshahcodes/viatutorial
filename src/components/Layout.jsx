import * as React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'
import SEO from './SEO'

const Layout = ({ noNav, customSEO, children }) => {
  return (
    <>
      {!customSEO && <SEO />}
      {!noNav && <Navigation />}
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  noNav: PropTypes.bool,
  customSEO: PropTypes.bool,
}

export default Layout
