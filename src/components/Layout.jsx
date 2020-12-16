import * as React from 'react'
import PropTypes from 'prop-types'
import Navigation from './Navigation'

const Layout = ({ noNav, children }) => {
  return (
    <>
      {!noNav && <Navigation />}
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  noNav: PropTypes.bool,
}

export default Layout
